"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export type CatalogProduct = {
  name: string;
  price: string;
  images: {
    src: string;
    alt: string;
  }[];
  about: string[];
  specs: {
    label: string;
    value: string;
  }[];
  sourceUrl: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

function ProductGallery({ product }: { product: CatalogProduct }) {
  const [activeImage, setActiveImage] = useState(0);
  const image = product.images[activeImage];

  function showPrevious() {
    setActiveImage((current) =>
      current === 0 ? product.images.length - 1 : current - 1
    );
  }

  function showNext() {
    setActiveImage((current) =>
      current === product.images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="catalogProductGallery">
      <Image src={image.src} alt={image.alt} width={620} height={420} />
      {product.images.length > 1 ? (
        <div className="catalogGalleryControls">
          <button aria-label="Попереднє фото" onClick={showPrevious} type="button">
            ‹
          </button>
          <span>
            {activeImage + 1} / {product.images.length}
          </span>
          <button aria-label="Наступне фото" onClick={showNext} type="button">
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function CatalogProductCards({
  products,
}: {
  products: CatalogProduct[];
}) {
  const [activeProduct, setActiveProduct] = useState<CatalogProduct | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  function openModal(product: CatalogProduct) {
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
    const includeInstallation = formData.get("installation") === "on";
    const selectedOptions = [
      `Товар: ${activeProduct.name}`,
      `Ціна: ${activeProduct.price}`,
    ];

    if (includeInstallation) {
      selectedOptions.push("Додатково: монтаж, тільки у м. Львів");
    }

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        phone: formData.get("phone"),
        requestType: "product",
        item: `${activeProduct.name} - ${activeProduct.price}`,
        selectedOptions,
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
      <section className="catalogProducts">
        {products.map((product) => (
          <article className="catalogProductCard" key={product.name}>
            <ProductGallery product={product} />
            <div className="catalogProductInfo">
              <h2>{product.name}</h2>
              <strong className="catalogProductPrice">{product.price}</strong>
              <button
                className="catalogOrderButton"
                onClick={() => openModal(product)}
                type="button"
              >
                Замовити
              </button>

              <div className="catalogProductDetails">
                <details open>
                  <summary>Про товар</summary>
                  {product.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </details>
                <details>
                  <summary>Характеристики</summary>
                  <dl>
                    {product.specs.map((spec) => (
                      <div key={`${spec.label}-${spec.value}`}>
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
              </div>
            </div>
          </article>
        ))}
      </section>

      {activeProduct ? (
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
            <p className="eyebrow">Замовлення товару</p>
            <h2>{activeProduct.name}</h2>
            <p className="modalLead">
              Ціна: <strong>{activeProduct.price}</strong>. Залиште телефон, і ми
              уточнимо деталі замовлення.
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
              <label className="optionCheck full">
                <input name="installation" type="checkbox" />
                Додати послугу монтажу (тільки у м. Львів)
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
                {submitState === "loading" ? "Відправляємо..." : "Підтвердити"}
              </button>
              {message ? (
                <p className={`formMessage ${submitState}`}>{message}</p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
