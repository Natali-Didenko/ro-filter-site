import { NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import nodemailer from "nodemailer";
import React from "react";

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
  product: "Замовлення товару",
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatKyivDate() {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "2-digit",
    timeZone: "Europe/Kyiv",
    year: "numeric",
  }).format(new Date());
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

function splitOption(option: string) {
  const separator = option.indexOf(":");

  if (separator === -1) {
    return { label: "Додатково", value: option };
  }

  return {
    label: option.slice(0, separator).trim(),
    value: option.slice(separator + 1).trim(),
  };
}

function buildTelegramCaption(payload: Required<OrderPayload>) {
  const requestType =
    requestTypeLabels[payload.requestType] || payload.requestType;

  return [
    "💧 <b>RO filter</b> | <b>Нова заявка</b>",
    `👤 ${escapeHtml(payload.name)}`,
    `📞 ${escapeHtml(payload.phone)}`,
    `🛒 ${escapeHtml(requestType)}`,
  ].join("\n");
}

async function buildTelegramCardImage(payload: Required<OrderPayload>) {
  const requestType =
    requestTypeLabels[payload.requestType] || payload.requestType;
  const selectedOptions = payload.selectedOptions.length
    ? payload.selectedOptions.map(splitOption)
    : [{ label: "Варіанти", value: "не вибрано" }];
  const comment = payload.comment || "Без коментаря";
  const item = payload.item || "не вказано";
  const date = formatKyivDate();

  const row = (
    icon: string,
    label: string,
    value: string,
    tone: "light" | "dark" = "light"
  ) =>
    React.createElement(
      "div",
      {
        style: {
          alignItems: "center",
          background: tone === "dark" ? "#0b004f" : "#ffffff",
          border:
            tone === "dark"
              ? "1px solid rgba(255,255,255,0.18)"
              : "1px solid rgba(95,142,255,0.16)",
          borderRadius: 24,
          color: tone === "dark" ? "#ffffff" : "#0b004f",
          display: "flex",
          gap: 18,
          minHeight: 92,
          padding: "16px 20px",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            alignItems: "center",
            background:
              tone === "dark"
                ? "rgba(255,255,255,0.16)"
                : "linear-gradient(135deg, #eef4ff, #ffffff)",
            borderRadius: 18,
            display: "flex",
            flex: "0 0 auto",
            fontSize: 34,
            height: 58,
            justifyContent: "center",
            width: 58,
          },
        },
        icon
      ),
      React.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: 4 } },
        React.createElement(
          "div",
          {
            style: {
              color: tone === "dark" ? "#dfe7ff" : "#274baf",
              fontSize: 20,
              fontWeight: 800,
              textTransform: "uppercase",
            },
          },
          label
        ),
        React.createElement(
          "div",
          {
            style: {
              color: tone === "dark" ? "#ffffff" : "#0b004f",
              fontSize: 25,
              fontWeight: 700,
              lineHeight: 1.18,
            },
          },
          value
        )
      )
    );

  const optionRows = selectedOptions.slice(0, 4).map((option, index) =>
    React.createElement(
      "div",
      {
        key: `${option.label}-${index}`,
        style: {
          display: "flex",
          gap: 14,
          lineHeight: 1.25,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            alignItems: "center",
            background: "rgba(255,255,255,0.18)",
            borderRadius: 999,
            display: "flex",
            flex: "0 0 auto",
            fontSize: 24,
            height: 42,
            justifyContent: "center",
            width: 42,
          },
        },
        index === 0 ? "💧" : index === 1 ? "💲" : "🛠️"
      ),
      React.createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: 3 } },
        React.createElement(
          "div",
          { style: { color: "#dfe7ff", fontSize: 20, fontWeight: 800 } },
          option.label
        ),
        React.createElement(
          "div",
          {
            style: {
              color: "#ffffff",
              fontSize: 24,
              fontWeight: 700,
              lineHeight: 1.2,
            },
          },
          option.value || "не вказано"
        )
      )
    )
  );

  const image = new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          alignItems: "center",
          background: "linear-gradient(180deg, #f7f9ff 0%, #eef4ff 100%)",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 36,
          width: "100%",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            background:
              "radial-gradient(circle at 20% 0%, rgba(126,168,255,0.28), transparent 32%), #ffffff",
            border: "1px solid rgba(95,142,255,0.2)",
            borderRadius: 42,
            boxShadow: "0 30px 80px rgba(11,0,79,0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            overflow: "hidden",
            padding: 32,
            width: 620,
          },
        },
        React.createElement(
          "div",
          {
            style: {
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            },
          },
          React.createElement(
            "div",
            {
              style: {
                alignItems: "center",
                color: "#0b004f",
                display: "flex",
                fontSize: 33,
                fontWeight: 900,
                gap: 12,
              },
            },
            React.createElement("span", { style: { fontSize: 46 } }, "💧"),
            React.createElement("span", null, "RO filter")
          ),
          React.createElement(
            "div",
            {
              style: {
                background: "#eef4ff",
                borderRadius: 999,
                color: "#0b004f",
                fontSize: 21,
                fontWeight: 900,
                padding: "10px 18px",
                textTransform: "uppercase",
              },
            },
            "Нова заявка"
          )
        ),
        row("👤", "Клієнт", payload.name),
        row("📞", "Телефон", payload.phone),
        row("🛒", "Запит", requestType),
        row("📦", "Позиція", item, "dark"),
        React.createElement(
          "div",
          {
            style: {
              background: "linear-gradient(135deg, #597bff, #7da6ff)",
              borderRadius: 28,
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              padding: "24px 26px",
            },
          },
          React.createElement(
            "div",
            { style: { fontSize: 25, fontWeight: 900 } },
            "Обрані варіанти"
          ),
          ...optionRows
        ),
        row("💬", "Коментар", comment),
        React.createElement(
          "div",
          {
            style: {
              alignItems: "center",
              color: "#274baf",
              display: "flex",
              fontSize: 22,
              fontWeight: 800,
              gap: 10,
              justifyContent: "center",
              paddingTop: 4,
            },
          },
          "🕘",
          date
        )
      )
    ),
    {
      height: 1120,
      width: 700,
    }
  );

  return image.arrayBuffer();
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

function hasEmailSettings() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.ORDER_EMAIL_TO
  );
}

function hasTelegramSettings() {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
}

async function sendTelegram(message: string, payload: Required<OrderPayload>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram settings are not configured");
  }

  const image = await buildTelegramCardImage(payload);
  const formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("parse_mode", "HTML");
  formData.append("caption", message);
  formData.append(
    "photo",
    new Blob([image], { type: "image/png" }),
    "ro-filter-order.png"
  );

  const response = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Telegram request failed${details ? `: ${details}` : ""}`);
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
  const telegramMessage = buildTelegramCaption(payload);

  try {
    const channels: Promise<void>[] = [];

    if (hasEmailSettings()) {
      channels.push(sendEmail(message));
    }

    if (hasTelegramSettings()) {
      channels.push(sendTelegram(telegramMessage, payload));
    }

    if (!channels.length) {
      return NextResponse.json(
        {
          error:
            "Заявку не відправлено: налаштуйте Telegram або email у .env.local.",
        },
        { status: 500 }
      );
    }

    await Promise.all(channels);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          "Заявку не відправлено: перевірте налаштування Telegram або email у .env.local.",
      },
      { status: 500 }
    );
  }
}
