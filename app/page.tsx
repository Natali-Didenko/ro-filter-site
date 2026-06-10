import OrderForm from "./components/OrderForm";
import ProductOrderCards from "./components/ProductOrderCards";
import type { Product } from "./components/ProductOrderCards";

const categories = [
  {
    title: "Сервіс і монтаж",
    description: "Встановлення, заміна картриджів і перевірка систем.",
  },
  {
    title: "Фільтри для питної води",
    description: "Осмоси та проточні системи під мийку для квартири.",
  },
  {
    title: "Змінні картриджі",
    description: "Комплекти для осмосу, механічні та вугільні картриджі.",
  },
  {
    title: "Магістральні фільтри",
    description: "Колби та рішення для очищення води на вході в будинок.",
  },
];

const products: Product[] = [
  {
    name: "Монтаж осмосу",
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
    name: "Фільтр зворотного осмосу 5 ступенів",
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
    name: "Проточний фільтр під мийку",
    price: "від 3 900 грн",
    status: "В наявності",
    badge: "Хіт",
    description: "Компактне рішення без накопичувального бака.",
    image: "/product-images/inline.png",
    imageAlt: "Проточний фільтр під мийку з підключенням до води",
    type: "inline",
    requestType: "filter",
    options: [
      { label: "Встановлення і виведення окремого крана для фільтру" },
      { label: "Встановлення і під'єднання до основного змішувача" },
      { label: "Підбір картриджів під якість води" },
      { label: "Підключення фільтра без заміни змішувача" },
    ],
  },
  {
    name: "Річний комплект картриджів",
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
  {
    name: "Магістральна колба з картриджем",
    price: "від 2 300 грн",
    status: "Під замовлення",
    badge: "Будинок",
    description: "Попереднє очищення води для квартири чи приватного будинку.",
    image: "/product-images/mainline.png",
    imageAlt: "Магістральна колба з картриджем для очищення води",
    type: "mainline",
    requestType: "filter",
    options: [
      { label: "Механічний картридж від піску та іржі" },
      { label: "Вугільний картридж від запаху та хлору" },
      { label: "Картридж пом'якшення води" },
      { label: "Комплект для магістральної колби" },
    ],
  },
];

const services = [
  "Підбір системи під воду, місце монтажу та бюджет",
  "Заміна картриджів і мембран з перевіркою герметичності",
  "Діагностика слабкого тиску, запаху або осаду у воді",
];

const offers = [
  {
    title: "Картриджі в подарунок",
    text: "При купівлі системи зворотного осмосу даруємо комплект картриджів для першої планової заміни.",
  },
  {
    title: "Монтаж зі знижкою",
    text: "При замовленні фільтра разом із встановленням майстер зробить монтаж за спеціальною ціною.",
  },
  {
    title: "Консультація безкоштовно",
    text: "Підкажемо, який фільтр обрати для квартири чи будинку, ще до оформлення замовлення.",
  },
];

const infoPages = [
  {
    title: "Доставка",
    text: "Відправляємо Новою поштою або доставляємо майстром разом із монтажем у зручний час.",
  },
  {
    title: "Оплата",
    text: "Оплата на картку, готівкою після встановлення або за рахунком для компаній.",
  },
  {
    title: "Гарантія",
    text: "Даємо гарантію на обладнання та роботу, а також підкажемо графік наступної заміни.",
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
          <span>+38 (067) 123-99-11</span>
          <span>Щоденно з 10 до 19</span>
          <div className="messengers" aria-label="Месенджери">
            <a aria-label="Telegram" className="telegramIcon" href="#order">
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
            <a aria-label="Viber" className="viberIcon" href="#order">
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
            <a aria-label="WhatsApp" className="whatsappIcon" href="#order">
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
            <span className="brandMark" aria-hidden="true">
              <svg viewBox="0 0 44 44" role="img">
                <path
                  d="M22 4c6.9 7.8 12.8 15.2 12.8 23.4 0 7.4-5.4 12.6-12.8 12.6S9.2 34.8 9.2 27.4C9.2 19.2 15.1 11.8 22 4Z"
                  fill="currentColor"
                />
                <path
                  d="M15.2 28.1c0 4.5 3.2 7.9 7.6 7.9 2.3 0 4.4-.9 5.7-2.6-1.1.5-2.4.8-3.8.8-5.2 0-8.7-3.5-8.7-8.4 0-2.1.6-4.3 1.7-6.5-1.6 2.7-2.5 5.5-2.5 8.8Z"
                  fill="#ffffff"
                  opacity=".36"
                />
                <text
                  x="22"
                  y="28"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  RO
                </text>
              </svg>
            </span>
            <span className="brandText">
              <span>RO</span>
              <span>filter</span>
            </span>
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
        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Фільтри для води з монтажем</p>
            <h1>Підберемо фільтр, встановимо і замінимо картриджі</h1>
            <p className="lead">
              Оберіть фільтр, комплект картриджів або сервіс, а ми уточнимо
              деталі телефоном і підкажемо найзручніше рішення.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#catalog">
                Перейти до товарів
              </a>
              <a className="button secondary" href="#order">
                Залишити заявку
              </a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Приклад системи очищення">
            <div className="heroCard">
              <span className="heroStatus">Питна вода</span>
              <div className="productVisual osmosis" />
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
          <div>
            <p className="eyebrow">Категорії</p>
            <h2>Основні напрямки</h2>
          </div>
          <a className="textLink" href="#order">
            Не знаєте що обрати?
          </a>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => (
            <article className="categoryCard" key={category.title}>
              <div className="categoryMark" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
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

      <section className="offersBand">
        <div className="sectionHeader">
          <p className="eyebrow">Акційні пропозиції</p>
          <h2>Вигідні комплекти для старту</h2>
        </div>
        <div className="offersGrid">
          {offers.map((offer) => (
            <article className="offerCard" key={offer.title}>
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="serviceBand" id="services">
        <div>
          <p className="eyebrow">Послуги</p>
          <h2>Монтаж і заміна без зайвої складності</h2>
          <p>
            Не робимо великий каталог сервісів: достатньо заявки, після якої
            майстер уточнить модель фільтра, картриджі та зручний час.
          </p>
        </div>
        <ul className="serviceList">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
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
            встановити систему. Заявка піде на email та в Telegram.
          </p>
          <div className="contactBox">
            <strong>+38 (067) 123-99-11</strong>
            <div className="messengers contactMessengers" aria-label="Месенджери">
              <a aria-label="Telegram" className="telegramIcon" href="#order">
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
              <a aria-label="Viber" className="viberIcon" href="#order">
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
              <a aria-label="WhatsApp" className="whatsappIcon" href="#order">
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
