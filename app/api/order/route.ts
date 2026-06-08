import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type OrderPayload = {
  name?: string;
  phone?: string;
  requestType?: string;
  item?: string;
  selectedOptions?: string[];
  comment?: string;
};

const requestTypeLabels: Record<string, string> = {
  filter: "Купити фільтр",
  cartridges: "Заміна картриджів",
  installation: "Встановлення фільтра",
  consultation: "Консультація",
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanOptions(value: unknown) {
  return Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === "string")
        .map(clean)
        .filter(Boolean)
    : [];
}

function buildMessage(payload: Required<OrderPayload>) {
  const requestType =
    requestTypeLabels[payload.requestType] || payload.requestType;
  const selectedOptions = payload.selectedOptions.length
    ? payload.selectedOptions.map((option) => `- ${option}`).join("\n")
    : "не вибрано";

  return [
    "Нова заявка з сайту RO filter",
    "",
    `Ім'я: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Запит: ${requestType}`,
    `Позиція: ${payload.item || "не вказано"}`,
    "Обрані варіанти:",
    selectedOptions,
    `Коментар: ${payload.comment || "без коментаря"}`,
  ].join("\n");
}

async function sendEmail(message: string) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.ORDER_EMAIL_TO;

  if (!host || !user || !pass || !to) {
    throw new Error("Email settings are not configured");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"RO filter Site" <${user}>`,
    to,
    subject: "Нова заявка з сайту RO filter",
    text: message,
  });
}

async function sendTelegram(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram settings are not configured");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Telegram request failed");
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as OrderPayload | null;

  const payload = {
    name: clean(body?.name),
    phone: clean(body?.phone),
    requestType: clean(body?.requestType || "filter"),
    item: clean(body?.item),
    selectedOptions: cleanOptions(body?.selectedOptions),
    comment: clean(body?.comment),
  };

  if (!payload.name || !payload.phone) {
    return NextResponse.json(
      { error: "Вкажіть ім'я та телефон." },
      { status: 400 }
    );
  }

  const message = buildMessage(payload);

  try {
    await Promise.all([sendEmail(message), sendTelegram(message)]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          "Заявку не відправлено: перевірте налаштування email і Telegram у .env.local.",
      },
      { status: 500 }
    );
  }
}
