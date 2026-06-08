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
            <a href="#order">Telegram</a>
            <a href="#order">Viber</a>
            <a href="#order">WhatsApp</a>
          </div>
        </div>

        <nav className="nav" aria-label="Головна навігація">
          <a className="brand" href="#top">
            RO filter
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
            <span>Telegram / Viber / WhatsApp</span>
          </div>
        </div>
        <OrderForm />
      </section>
    </main>
  );
}
