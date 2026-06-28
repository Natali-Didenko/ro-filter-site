import Image from "next/image";
import Link from "next/link";
import { catalogSections } from "./catalog/data";
import OrderForm from "./components/OrderForm";
import ProductOrderCards from "./components/ProductOrderCards";
import type { Product } from "./components/ProductOrderCards";
import ServiceOrderButtons from "./components/ServiceOrderButtons";
import type { ServiceOrder } from "./components/ServiceOrderButtons";

const products: Product[] = [
  {
    name: "Монтаж фільтра зворотного осмосу",
    price: "від 1 200 грн",
    status: "Виїзд майстра",
    badge: "Монтаж",
    description:
      "Акуратне встановлення системи з підключенням крана та перевіркою.",
    image: "/product-images/install.png",
    imageAlt: "Монтаж фільтра зворотного осмосу під мийкою",
    type: "install",
    requestType: "installation",
    options: [
      { label: "Стандартний монтаж осмосу під мийкою" },
      { label: "Виведення окремого крана для фільтрованої води" },
      { label: "Підключення до основного змішувача 3-в-1" },
      { label: "Демонтаж старої системи перед встановленням" },
    ],
  },
  {
    name: "Фільтр зворотного осмосу 5 ступенів + монтаж в подарунок",
    price: "від 7 800 грн",
    oldPrice: "9 200 грн",
    status: "В наявності",
    badge: "-15%",
    description: "Для сім'ї, яка хоче стабільно чисту питну воду щодня.",
    image: "/product-images/osmosis.png",
    imageAlt: "Система зворотного осмосу з баком і краном",
    type: "osmosis",
    requestType: "filter",
    options: [
      { label: "Осмос 5 ступенів" },
      { label: "Осмос 6 ступенів з мінералізатором" },
      { label: "Осмос з помпою для низького тиску" },
      { label: "Осмос із баком збільшеного об'єму" },
    ],
  },
  {
    name: "Заміна картриджів у фільті зворотного осмосу",
    price: "від 1 350 грн",
    status: "В наявності",
    badge: "Сервіс",
    description: "Планова заміна для осмосу або проточної системи.",
    image: "/product-images/cartridges.png",
    imageAlt: "Комплект змінних картриджів для фільтра води",
    type: "cartridge",
    requestType: "cartridges",
    options: [
      { label: "Комплект картриджів для осмосу 5 ступенів" },
      { label: "Комплект картриджів з мінералізатором" },
      { label: "Комплект для проточного фільтра під мийку" },
      { label: "Мембрана для зворотного осмосу" },
    ],
  },
];

const services: ServiceOrder[] = [
  {
    name: "Монтаж фільтра зворотного осмосу",
    requestType: "installation",
  },
  {
    name: "Заміна картриджів у фільті зворотного осмосу",
    requestType: "cartridges",
  },
];

const infoPages = [
  {
    title: "Доставка",
    text: "Відправляємо Новою поштою або доставляємо майстром разом із монтажем у зручний час.",
  },
  {
    title: "Оплата",
    text: "Оплата карткою, готівкою або на рахунок компанії.",
  },
  {
    title: "Гарантія",
    text: "Даємо гарантію на обладнання та роботу, а якщо щось піде не так - швидко допоможемо.",
  },
  {
    title: "Контакти",
    text: "Залиште заявку або напишіть у месенджер. Менеджер уточнить модель, адресу та час.",
  },
];

const reviews = [
  {
    name: "Влад",
    text: "Поставили осмос під мийку, все акуратно. Вода на смак стала набагато кращою.",
  },
  {
    name: "Вікторія",
    text: "Допомогли підібрати картриджі і швидко замінили. Сподобалося, що пояснили простими словами.",
  },
  {
    name: "Роман",
    text: "Замовляв фільтр для будинку. Майстер перевірив тиск і порадив правильну комплектацію.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" id="top">
        <div className="topBar">
          <span>0 (93) 414 99 12</span>
          <span>Щоденно з 10 до 19</span>
          <div className="messengers" aria-label="Месенджери">
            <a
              aria-label="Написати у Telegram"
              className="telegramIcon"
              href="https://t.me/RO_filter"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                fill="#229ed9"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M11.94 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.94 0Zm4.97 7.22c.2 0 .38.05.49.15.12.1.17.24.19.35.02.12.04.34.02.5-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.7-1.65-1.13-2.68-1.8-1.18-.78-.42-1.21.26-1.91.18-.18 3.25-2.98 3.31-3.23.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.1.02-1.79 1.14-5.06 3.35-.48.33-.91.49-1.3.48-.43-.01-1.25-.24-1.87-.44-.75-.25-1.35-.37-1.3-.79.03-.22.33-.44.9-.66 3.5-1.53 5.83-2.53 7-3.02 3.33-1.39 4.02-1.63 4.47-1.64Z" />
              </svg>
            </a>
            <a
              aria-label="Написати у Viber"
              className="viberIcon"
              href="viber://chat?number=%2B380934149912"
            >
              <svg
                aria-hidden="true"
                fill="#7360f2"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12 2.2c-5.3 0-9.6 3.7-9.6 8.3 0 2.6 1.4 4.9 3.6 6.4v3.2c0 .5.6.8 1 .5l3.2-1.9c.6.1 1.2.1 1.8.1 5.3 0 9.6-3.7 9.6-8.3S17.3 2.2 12 2.2Zm4.5 12.3c-.4.8-1.3 1.3-2.1 1.1-2.6-.6-5.7-3.5-6.4-6.2-.2-.8.3-1.7 1.1-2.1l.6-.3c.4-.2.9-.1 1.1.3l.8 1.3c.2.4.2.8-.1 1.1l-.4.4c-.2.2-.2.5 0 .8.4.7 1.2 1.5 1.9 1.9.3.2.6.2.8 0l.4-.4c.3-.3.8-.3 1.1-.1l1.3.8c.4.2.5.7.3 1.1l-.4.6Zm-3.9-8.8c2.2.2 3.7 1.8 3.9 3.9.1.4-.2.8-.6.8-.3 0-.6-.3-.7-.6-.2-1.6-1.1-2.6-2.8-2.8-.3 0-.6-.3-.6-.7s.4-.6.8-.6Zm.2 2c1.1.2 1.7.8 1.9 1.9.1.4-.2.7-.6.8-.3 0-.6-.2-.7-.6-.1-.5-.4-.8-.9-.9-.4-.1-.6-.4-.6-.7.1-.4.5-.6.9-.5Z" />
              </svg>
            </a>
            <a
              aria-label="Написати у WhatsApp"
              className="whatsappIcon"
              href="https://wa.me/380934149912"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                fill="#25d366"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M20.46 3.49A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="nav" aria-label="Головна навігація">
          <a className="brand" href="#top">
            <Image
              className="brandLogo"
              src="/ro-filter-logo.png"
              alt="RO filter"
              width={520}
              height={290}
              priority
            />
          </a>
          <div className="navLinks">
            <a href="#catalog">Каталог</a>
            <a href="#services">Послуги</a>
            <a href="#delivery">Доставка</a>
            <a href="#contacts">Контакти</a>
          </div>
          <a className="navButton" href="#order">
            Замовити дзвінок
          </a>
        </nav>
      </header>

      <section className="hero">
        <svg
          aria-hidden="true"
          className="heroWaves"
          preserveAspectRatio="none"
          viewBox="0 0 1440 240"
        >
          <path d="M-80 155C100 55 250 230 430 135S760 45 940 135s330 100 580-20" />
          <path d="M-70 190C110 90 260 260 450 170S770 80 960 165s330 95 570-10" />
          <path d="M-50 225C130 130 300 285 480 205S790 120 985 200s325 85 540 5" />
        </svg>
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Фільтри для води з монтажем</p>
            <h1>Підберемо фільтр, встановимо і замінимо картриджі</h1>
            <p className="lead">
              Вирішуємо питання комплексно: від підбору системи до встановлення
              та подальшого обслуговування.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#services">
                Переглянути послуги
              </a>
              <a className="button secondary" href="#order">
                Залишити заявку
              </a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Приклад системи очищення">
            <div className="heroCard">
              <span className="heroStatus">Питна вода</span>
              <div className="heroProductImage">
                <Image
                  src="/product-images/hero-osmosis-install.png"
                  alt="Система зворотного осмосу встановлена під кухонною мийкою"
                  width={1100}
                  height={760}
                  priority
                />
              </div>
              <strong>Осмос + монтаж</strong>
              <p>Популярне рішення для кухні</p>
            </div>
            <div className="heroMetric">
              <strong>24 год</strong>
              <span>і ви п&apos;єте чисту воду</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="catalog">
        <div className="sectionHeader rowHeader">
          <div className="categoryHeaderText">
            <p className="eyebrow">Каталог</p>
            <h2>Все для чистої води в одному місці</h2>
            <p>
              Оберіть розділ, щоб переглянути товари. Якщо не впевнені, що
              саме потрібно, ми підкажемо за моделлю фільтра або задачею.
            </p>
            <a className="textLink" href="#order">
              Не знаєте що обрати?
            </a>
          </div>
        </div>
        <div className="categoryGrid">
          {catalogSections.map((category) => (
            <Link
              className="categoryCard catalogCard"
              href={`/catalog/${category.slug}`}
              key={category.slug}
            >
              <div className="catalogImageFrame">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  width={480}
                  height={300}
                />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span>Переглянути</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section productsSection" id="products">
        <div className="sectionHeader">
          <p className="eyebrow">Рішення та послуги</p>
          <h2>Популярні позиції</h2>
        </div>
        <ProductOrderCards products={products} />
      </section>

      <section className="serviceBand" id="services">
        <div>
          <p className="eyebrow">Послуги</p>
          <h2>Монтаж і заміна без зайвої складності</h2>
          <p>
            Якщо не знаєте модель фільтра або які картриджі потрібні, залиште
            заявку - майстер уточнить деталі та підкаже найкраще рішення.
          </p>
        </div>
        <ServiceOrderButtons services={services} />
      </section>

      <section className="section" id="delivery">
        <div className="sectionHeader">
          <p className="eyebrow">Інформація</p>
          <h2>Що варто знати перед замовленням</h2>
        </div>
        <div className="infoGrid">
          {infoPages.map((page) => (
            <article className="infoItem" key={page.title}>
              <h3>{page.title}</h3>
              <p>{page.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reviewsBand">
        <div className="sectionHeader">
          <p className="eyebrow">Відгуки</p>
          <h2>Що важливо клієнтам</h2>
        </div>
        <div className="reviewsGrid">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.name}>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="orderSection" id="order">
        <div className="orderIntro" id="contacts">
          <p className="eyebrow">Швидке замовлення</p>
          <h2>Залиште контакти, і ми уточнимо деталі</h2>
          <p>
            Напишіть, що потрібно: купити фільтр, замінити картриджі або
            встановити систему.
          </p>
          <div className="contactBox">
            <strong>0 (93) 414 99 12</strong>
            <div className="messengers contactMessengers" aria-label="Месенджери">
              <a
                aria-label="Написати у Telegram"
                className="telegramIcon"
                href="https://t.me/RO_filter"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  fill="#229ed9"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M11.94 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.94 0Zm4.97 7.22c.2 0 .38.05.49.15.12.1.17.24.19.35.02.12.04.34.02.5-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.7-1.65-1.13-2.68-1.8-1.18-.78-.42-1.21.26-1.91.18-.18 3.25-2.98 3.31-3.23.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.1.02-1.79 1.14-5.06 3.35-.48.33-.91.49-1.3.48-.43-.01-1.25-.24-1.87-.44-.75-.25-1.35-.37-1.3-.79.03-.22.33-.44.9-.66 3.5-1.53 5.83-2.53 7-3.02 3.33-1.39 4.02-1.63 4.47-1.64Z" />
                </svg>
              </a>
              <a
                aria-label="Написати у Viber"
                className="viberIcon"
                href="viber://chat?number=%2B380934149912"
              >
                <svg
                  aria-hidden="true"
                  fill="#7360f2"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 2.2c-5.3 0-9.6 3.7-9.6 8.3 0 2.6 1.4 4.9 3.6 6.4v3.2c0 .5.6.8 1 .5l3.2-1.9c.6.1 1.2.1 1.8.1 5.3 0 9.6-3.7 9.6-8.3S17.3 2.2 12 2.2Zm4.5 12.3c-.4.8-1.3 1.3-2.1 1.1-2.6-.6-5.7-3.5-6.4-6.2-.2-.8.3-1.7 1.1-2.1l.6-.3c.4-.2.9-.1 1.1.3l.8 1.3c.2.4.2.8-.1 1.1l-.4.4c-.2.2-.2.5 0 .8.4.7 1.2 1.5 1.9 1.9.3.2.6.2.8 0l.4-.4c.3-.3.8-.3 1.1-.1l1.3.8c.4.2.5.7.3 1.1l-.4.6Zm-3.9-8.8c2.2.2 3.7 1.8 3.9 3.9.1.4-.2.8-.6.8-.3 0-.6-.3-.7-.6-.2-1.6-1.1-2.6-2.8-2.8-.3 0-.6-.3-.6-.7s.4-.6.8-.6Zm.2 2c1.1.2 1.7.8 1.9 1.9.1.4-.2.7-.6.8-.3 0-.6-.2-.7-.6-.1-.5-.4-.8-.9-.9-.4-.1-.6-.4-.6-.7.1-.4.5-.6.9-.5Z" />
                </svg>
              </a>
              <a
                aria-label="Написати у WhatsApp"
                className="whatsappIcon"
                href="https://wa.me/380934149912"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  fill="#25d366"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M20.46 3.49A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.42ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <OrderForm />
      </section>
    </main>
  );
}
