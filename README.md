# RO filter Orders

Сучасний Next.js-сайт для продажу фільтрів для води, замовлення заміни картриджів і встановлення фільтрів.

## Запуск

Потрібен Node.js `20.9+`.

```bash
npm install
npm run dev
```

Сайт відкриється на `http://localhost:3000`.

## Налаштування заявок

Створіть файл `.env.local` поруч із `.env.example` і заповніть:

```bash
TELEGRAM_BOT_TOKEN=123456:telegram-bot-token
TELEGRAM_CHAT_ID=123456789

# Необов'язково, якщо хочете дублювати заявки на email:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ORDER_EMAIL_TO=orders@example.com
```

Після цього форма надсилатиме заявку в Telegram. Якщо додати SMTP-налаштування, заявка також дублюватиметься на email.
