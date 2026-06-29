"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function OrderForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      setSubmitState("success");
      setMessage("Дякуємо! Заявку відправлено. Ми скоро зв'яжемося з вами.");
      form.reset();
      return;
    }

    const data = await response.json().catch(() => null);
    setSubmitState("error");
    setMessage(
      data?.error || "Не вдалося відправити заявку. Спробуйте ще раз."
    );
  }

  return (
    <form className="orderForm" onSubmit={handleSubmit}>
      <input name="requestType" type="hidden" value="consultation" />
      <label>
        Ім&apos;я
        <input name="name" placeholder="Олена" required />
      </label>
      <label>
        Телефон
        <input name="phone" placeholder="+380..." required type="tel" />
      </label>
      <label className="full">
        Коментар
        <textarea
          name="comment"
          placeholder="Напишіть, яка послуга вас цікавить, район, зручний час або інші деталі"
          rows={5}
        />
      </label>
      <button className="submitButton" disabled={submitState === "loading"}>
        {submitState === "loading" ? "Відправляємо..." : "Замовити"}
      </button>
      {message ? (
        <p className={`formMessage ${submitState}`}>{message}</p>
      ) : null}
    </form>
  );
}
