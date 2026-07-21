"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ServiceOrder = {
  name: string;
  requestType: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ServiceOrderButtons({
  services,
}: {
  services: ServiceOrder[];
}) {
  const [activeService, setActiveService] = useState<ServiceOrder | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function openModal(service: ServiceOrder) {
    setActiveService(service);
    setSubmitState("idle");
    setMessage("");
  }

  function closeModal() {
    if (submitState === "loading") return;
    setActiveService(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeService) return;

    setSubmitState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        requestType: activeService.requestType,
        item: activeService.name,
        selectedOptions: [activeService.name],
        comment: formData.get("comment"),
      }),
    });

    if (response.ok) {
      setSubmitState("success");
      setMessage("Ваша заявка прийнята. Наш менеджер скоро зв'яжеться з вами.");
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
    <>
      <div className="serviceActions">
        {services.map((service) => (
          <article className="serviceAction" key={service.name}>
            <h3>{service.name}</h3>
            <button
              className="smallButton"
              onClick={() => openModal(service)}
              type="button"
            >
              Залишити заявку
            </button>
          </article>
        ))}
      </div>

      {mounted && activeService
        ? createPortal(
        <div
          aria-modal="true"
          className="modalOverlay"
          onClick={closeModal}
          role="dialog"
        >
          <div className="orderModal" onClick={(event) => event.stopPropagation()}>
            <button
              aria-label="Закрити"
              className="modalClose"
              onClick={closeModal}
              type="button"
            >
              ×
            </button>
            <p className="eyebrow">Заявка на послугу</p>
            <h2>{activeService.name}</h2>
            <p className="modalLead">
              Залиште телефон, і майстер уточнить деталі та зручний час.
            </p>

            <form className="modalForm" onSubmit={handleSubmit}>
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
                  placeholder="Напишіть район, зручний час або інші деталі"
                  rows={4}
                />
              </label>
              <button
                className="submitButton"
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? "Відправляємо..." : "Надіслати"}
              </button>
              {message ? (
                <p className={`formMessage ${submitState}`}>{message}</p>
              ) : null}
            </form>
          </div>
        </div>,
            document.body
          )
        : null}
    </>
  );
}
