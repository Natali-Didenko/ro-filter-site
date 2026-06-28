export type CatalogSection = {
  slug: string;
  title: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
};

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

export const catalogSections: CatalogSection[] = [
  {
    slug: "reverse-osmosis",
    title: "Фільтри зворотного осмосу",
    description:
      "Системи під мийку для стабільно чистої питної води вдома, в офісі або закладі.",
    details:
      "Тут зберемо моделі з різними комплектаціями: базові системи, осмоси з мінералізатором, помпою та монтажем.",
    image: "/product-images/osmosis.png",
    imageAlt: "Система зворотного осмосу з баком і краном",
  },
  {
    slug: "replacement-cartridges",
    title: "Змінні картриджі для фільтрів",
    description:
      "Комплекти для планової заміни, мембрани та картриджі під різні системи очищення.",
    details:
      "У цьому розділі будуть комплекти для осмосу, проточних систем і окремі позиції для регулярного сервісу.",
    image: "/product-images/cartridges.png",
    imageAlt: "Комплект змінних картриджів для фільтра води",
  },
  {
    slug: "mainline-filters",
    title: "Магістральні фільтри",
    description:
      "Колби та картриджі для попереднього очищення води на вході у квартиру чи будинок.",
    details:
      "Додамо рішення для захисту сантехніки, побутової техніки та фільтрів питної води від піску, іржі й домішок.",
    image: "/product-images/mainline.png",
    imageAlt: "Магістральний фільтр для очищення води",
  },
  {
    slug: "kitchen-faucets",
    title: "Змішувачі для кухонної мийки",
    description:
      "Кухонні змішувачі, які зручно поєднати з системою фільтрації води.",
    details:
      "Тут будуть комбіновані змішувачі та рішення для підключення фільтрованої води без зайвого крана.",
    image: "/product-images/inline.png",
    imageAlt: "Кухонний змішувач або компактна система під мийку",
  },
];

export function getCatalogSection(slug: string) {
  return catalogSections.find((section) => section.slug === slug);
}

export const reverseOsmosisProducts: CatalogProduct[] = [
  {
    name: "Фільтр зворотного осмосу Sion 6-75",
    price: "4455 грн",
    images: [
      { src: "/product-images/sion/sion-6-1.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 1" },
      { src: "/product-images/sion/sion-6-2.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 2" },
      { src: "/product-images/sion/sion-6-3.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 3" },
      { src: "/product-images/sion/sion-6-4.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 4" },
      { src: "/product-images/sion/sion-6-5.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 5" },
      { src: "/product-images/sion/sion-6-6.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 6" },
      { src: "/product-images/sion/sion-6-7.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 7" },
      { src: "/product-images/sion/sion-6-8.jpg", alt: "Фільтр зворотного осмосу Sion 6-75 - фото 8" },
    ],
    about: [
      "Sion 6-75 - система зворотного осмосу для глибокого очищення питної води від механічних домішок, запахів, присмаків, бактерій і вірусів.",
      "Модель має шість ступенів очищення, включно з мембраною Vontron 75G, постфільтром і мінералізатором для відновлення мінерального складу води.",
    ],
    specs: [
      { label: "Кількість етапів фільтрації", value: "6" },
      { label: "Об'єм бака", value: "7 л" },
      { label: "Особливості", value: "Мінералізатор" },
      { label: "Продуктивність", value: "285 л/добу" },
      { label: "Продуктивність", value: "12 л/год" },
      { label: "Тиск на вході", value: "2-3 бар" },
      { label: "Максимальна температура води", value: "40 °С" },
      { label: "Вага", value: "10.3 кг" },
      { label: "Габарити фільтра", value: "45.8 х 13.5 х 41.5 см" },
      { label: "Гарантія", value: "1 рік" },
      { label: "Країна реєстрації бренду", value: "Україна" },
      { label: "Країна-виробник товару", value: "Китай" },
    ],
    sourceUrl: "https://termounion.ua/sion-6-75",
  },
  {
    name: "Фільтр зворотного осмосу Sion 5-75",
    price: "4099 грн",
    images: [
      { src: "/product-images/sion/sion-5-1.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 1" },
      { src: "/product-images/sion/sion-5-2.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 2" },
      { src: "/product-images/sion/sion-5-3.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 3" },
      { src: "/product-images/sion/sion-5-4.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 4" },
      { src: "/product-images/sion/sion-5-5.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 5" },
      { src: "/product-images/sion/sion-5-6.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 6" },
      { src: "/product-images/sion/sion-5-7.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 - фото 7" },
    ],
    about: [
      "Sion 5-75 - базова система зворотного осмосу для очищення питної води під кухонною мийкою.",
      "Модель має п'ять ступенів очищення: механічний картридж, два вугільні картриджі, мембрану Vontron 75G і постфільтр для покращення смаку та запаху води.",
    ],
    specs: [
      { label: "Кількість етапів фільтрації", value: "5" },
      { label: "Об'єм бака", value: "7 л" },
      { label: "Продуктивність", value: "285 л/добу" },
      { label: "Продуктивність", value: "12 л/год" },
      { label: "Тиск на вході", value: "2-3 бар" },
      { label: "Максимальна температура води", value: "40 °С" },
      { label: "Вага", value: "8.15 кг" },
      { label: "Габарити фільтра", value: "45.8 х 13.5 х 41.5 см" },
      { label: "Гарантія", value: "1 рік" },
      { label: "Країна реєстрації бренду", value: "Україна" },
      { label: "Країна-виробник товару", value: "Китай" },
    ],
    sourceUrl: "https://termounion.ua/sion-5-75",
  },
];
