"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ProductOption = {
  label: string;
};

export type Product = {
  name: string;
  price: string;
  oldPrice?: string;
  status: string;
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  type: string;
  requestType: string;
  options: ProductOption[];
};

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ProductOrderCards({ products }: { products: Product[] }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function openModal(product: Product) {
    setActiveProduct(product);
    setSubmitState("idle");
    setMessage("");
  }

  function closeModal() {
    if (submitState === "loading") return;
    setActiveProduct(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeProduct) return;

    setSubmitState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      requestType: activeProduct.requestType,
      item: activeProduct.name,
      selectedOptions: formData.getAll("selectedOptions"),
      comment: formData.get("comment"),
    };

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
      <div className="productGrid">
        {products.map((product) => (
          <article className="productCard" key={product.name}>
            <div className="productBadge">{product.badge}</div>
            <div className="productPhotoFrame">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={480}
                height={300}
                priority={false}
              />
            </div>
            <div className="productBody">
              <span className="stock">{product.status}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="cardFooter">
              <div className="priceBlock">
                {product.oldPrice ? <span>{product.oldPrice}</span> : null}
                <strong>{product.price}</strong>
              </div>
              <button
                className="smallButton"
                onClick={() => openModal(product)}
                type="button"
              >
                Замовити
              </button>
            </div>
          </article>
        ))}
      </div>

      {mounted && activeProduct
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
            <p className="eyebrow">Замовлення</p>
            <h2>{activeProduct.name}</h2>
            <p className="modalLead">
              Оберіть потрібні позиції, залиште телефон, і ми уточнимо деталі.
            </p>

            <form className="modalForm" onSubmit={handleSubmit}>
              <fieldset className="optionGroup">
                <legend>Що вас цікавить?</legend>
                {activeProduct.options.map((option) => (
                  <label className="checkboxOption" key={option.label}>
                    <input
                      name="selectedOptions"
                      type="checkbox"
                      value={option.label}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </fieldset>

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
