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
  {
    name: "Фільтр зворотного осмосу Sion 5-75 з насосом",
    price: "6116 грн",
    images: [
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-1.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 1" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-2.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 2" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-3.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 3" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-4.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 4" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-5.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 5" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-6.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 6" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom-7.jpg", alt: "Фільтр зворотного осмосу Sion 5-75 з насосом - фото 7" },
    ],
    about: [
      "Sion 5-75 з насосом - система зворотного осмосу для стабільного очищення питної води навіть за нижчого тиску у водопроводі.",
      "Модель має п’ять ступенів очищення, мембрану Vontron 75G, накопичувальний бак і насос для підтримки роботи системи.",
    ],
    specs: [
      { label: "Накопичувальний бак, л", value: "7" },
      { label: "Тиск на вході, бар", value: "2-3" },
      { label: "Максимальна температура вхідної води, °С", value: "40" },
      { label: "ККД, %", value: "97" },
      { label: "Вага фільтра, кг", value: "9" },
      { label: "Продуктивність, л/добу", value: "285" },
      { label: "Продуктивність, л/год", value: "12" },
      { label: "Підключення до водопроводу", value: "зовнішнє" },
      { label: "Розміри фільтра (ВхШхГ), см", value: "45.8х13.5х41.5" },
      { label: "Розміри бака, (ВхШхГ), см", value: "27х25х38.5" },
    ],
    sourceUrl: "https://termounion.ua/filtr-zvorotnyogo-osmosu-sion-4-75-z-nasosom",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією",
    price: "4990 грн",
    images: [
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 1" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 2" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 3" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 4" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 5" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією - фото 6" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50 з мінералізацією.",
      "Це - ефективне рішення для створення питної води у вас вдома.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Продуктивність, л/добу", value: "190" },
      { label: "Вага системи, кг", value: "7" },
      { label: "Мембрана, GPD", value: "50" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "420х410х150" },
      { label: "Об'єм баку (корисний), л", value: "7" },
      { label: "Кількість ступенів очищення, шт.", value: "5" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/zvorotni-osmosi-1/sistema-zvorotnogo-osmosu-ecosoft-standard-5-50m-z-mineralizatorom/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою",
    price: "7990 грн",
    images: [
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 1" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 2" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 3" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 4" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 5" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 6" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-7.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 7" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1-8.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard PRO 5-50P з мінералізацією та помпою - фото 8" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft Standard PRO з мінералізацією та помпою – ефективне рішення для очищення води у вас вдома.",
      "Компактний та надійний фільтр Ecosoft Standard забезпечує очищення води та запобігає потраплянню розчинених забруднюючих речовин у кран чистої води, таких як солі важких металів, жорсткість, залізо, бактерії, віруси, хлор, хлорорганічні сполуки, нітрати та нітрити.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Робочий тиск, атм", value: "2 - 4,5" },
      { label: "Продуктивність, л/добу", value: "190" },
      { label: "Вага системи, кг", value: "10,5" },
      { label: "Мембрана, GPD", value: "50" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "455х410х195" },
      { label: "Об'єм баку (корисний), л", value: "7" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/sistema-zvorotnogo-osmosu-ecosoft-standard-52-1/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором",
    price: "5090 грн",
    images: [
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 1" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 2" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 3" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 4" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 5" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 6" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-7.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 7" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom-8.jpg", alt: "Фільтр зворотного осмосу Ecosoft Standard 6-50М з мінералізатором - фото 8" },
    ],
    about: [
      "Система зворотного осмосу Ecosoft Standard 6-50М – ефективне рішення для очищення води у вас вдома.",
      "Компактний та надійний фільтр Ecosoft Standard забезпечує очищення води та запобігає потраплянню розчинених забруднюючих речовин у кран чистої води, таких як солі важких металів, жорсткість, залізо, бактерії, віруси, хлор, хлорорганічні сполуки, пестициди, гербіциди та нітрати.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Робочий тиск, атм", value: "3 - 6" },
      { label: "Продуктивність, л/добу", value: "190" },
      { label: "Вага системи, кг", value: "7" },
      { label: "Мембрана, GPD", value: "50" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "420х410х150" },
      { label: "Об'єм баку (корисний), л", value: "7" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/sistema-zvorotnogo-osmosu-ecosoft-standard-6-50m-z-mineralizatorom/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft Absolute 5-75",
    price: "10957 грн",
    images: [
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-5-stupinchasta-pallas-enjoy-smart-bez-pompi4-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 5-75 - фото 1" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-5-stupinchasta-pallas-enjoy-smart-bez-pompi4-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 5-75 - фото 2" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-5-stupinchasta-pallas-enjoy-smart-bez-pompi4-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 5-75 - фото 3" },
      { src: "/product-images/reverse-osmosis/sistema-zvorotnogo-osmosu-5-stupinchasta-pallas-enjoy-smart-bez-pompi4-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 5-75 - фото 4" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft Absolute 5-75М (MO575MECO) призначений для очищення води на молекулярному рівні, що робить воду ідеально чистою безпечною.",
      "Це природний та економний спосіб отримання питної води в домашніх умовах.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Робочий тиск, атм", value: "3 - 6" },
      { label: "Продуктивність, л/добу", value: "280" },
      { label: "Вага системи, кг", value: "7,85" },
      { label: "Мембрана, GPD", value: "75" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "420х410х150" },
      { label: "Об'єм баку (корисний), л", value: "7" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/sistema-zvorotnogo-osmosu-5-stupinchasta-pallas-enjoy-smart-bez-pompi4/",
  },
  {
    name: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором",
    price: "11740 грн",
    images: [
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-1.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 1" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-2.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 2" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-3.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 3" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-4.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 4" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-5.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 5" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom-6.jpg", alt: "Фільтр зворотного осмосу Absolut 6-75M з мінералізарором - фото 6" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft Absolute 6-75М (MO675MECO) з мінералізатором призначений для очищення води на молекулярному рівні та її збагачення необхідними мінералами та макроелементами.",
      "Це природний та економний та безперервний спосіб отримання питної води в домашніх умовах.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Робочий тиск, атм", value: "3 - 6" },
      { label: "Продуктивність, л/добу", value: "280" },
      { label: "Вага системи, кг", value: "7,85" },
      { label: "Мембрана, GPD", value: "75" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "420х410х150" },
      { label: "Об'єм баку (корисний), л", value: "7" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/filtr-zvorotnogo-osmosu-absolut-6-75m-z-mineralizarorom/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою",
    price: "15727 грн",
    images: [
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 1" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 2" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 3" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 4" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 5" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS з мінералізатором та помпою - фото 6" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft Absolute 6-75MPS.",
      "з мінералізатором та помпою на станині (MO675МPSECO) призначений для очищення води на молекулярному рівні, збагачення необхідними мінералами та макроелементами, що робить воду ідеально чистою та безпечною.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Призначення", value: "виготовлення питної води" },
      { label: "Робочий тиск, атм", value: "2 - 4,5" },
      { label: "Продуктивність, л/добу", value: "280" },
      { label: "Мембрана, GPD", value: "75" },
      { label: "Об'єм баку (корисний), л", value: "7" },
      { label: "Кількість ступенів очищення, шт.", value: "6" },
      { label: "Температура води, °С", value: "4 - 30" },
      { label: "Розміщення", value: "під мийкою" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/filtr-zvorotnogo-osmosu-ecosoft-absolute-6-75mps-z-mineralizatorom-ta-pompoyu-na-stanini/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft RObust MINI",
    price: "14392 грн",
    images: [
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 1" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 2" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 3" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 4" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 5" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-mini-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust MINI - фото 6" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft RObust MINI - ідеальне рішення для бізнесу.",
      "Ecosoft RObust MINI - це сучасна система зворотного осмосу, призначена для стабільного забезпечення кафе, ресторанів та офісів чистою питною водою.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове 1/2\", 3/8\"" },
      { label: "Призначення", value: "виготовлення питної води зі збільшеним споживанням" },
      { label: "Робочий тиск, атм", value: "2 - 4,5" },
      { label: "Продуктивність, л/добу", value: "1000" },
      { label: "Вага системи, кг", value: "7" },
      { label: "Мембрана, GPD", value: "3 х 100" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "570х386х195" },
      { label: "Кількість ступенів очищення, шт.", value: "6" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/zvorotni-osmosi-1/filtr-zvorotnogo-osmosu-ecosoft-robust-mini/",
  },
  {
    name: "Фільтр зворотного осмосу Ecosoft RObust COFFEE",
    price: "38657 грн",
    images: [
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-1.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 1" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-2.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 2" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-3.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 3" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-4.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 4" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-5.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 5" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-6.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 6" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-7.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 7" },
      { src: "/product-images/reverse-osmosis/filtr-zvorotnogo-osmosu-ecosoft-robust-8.jpg", alt: "Фільтр зворотного осмосу Ecosoft RObust COFFEE - фото 8" },
    ],
    about: [
      "Фільтр зворотного осмосу Ecosoft RObust COFFEE розроблений для професійних кав'ярень але підійде для поціновувачів смачної кави, чаю та перших страв у власному будинку.",
      "У фільтрі зворотного осмосу Ecosoft RObust PRO (COFFEE) поєднано високоякісні технології підготовки води, сучасний дизайн та компактні габарити.",
    ],
    specs: [
      { label: "Країна виробник", value: "Україна" },
      { label: "Виробник", value: "Екософт" },
      { label: "Підключення", value: "Різьбове, 1/2\"" },
      { label: "Призначення", value: "виготовлення питної води зі збільшеним споживанням" },
      { label: "Робочий тиск, атм", value: "2 - 4,5" },
      { label: "Продуктивність, л/добу", value: "1500" },
      { label: "Вага системи, кг", value: "18" },
      { label: "Мембрана, GPD", value: "500" },
      { label: "Розміри фільтру, В х Ш х Г, мм", value: "417x362x300" },
      { label: "Температура води, °С", value: "4 - 30" },
    ],
    sourceUrl: "https://santeam.com.ua/filtri-dlya-pitnoyi-vodi-1/zvorotni-osmosi-1/filtr-zvorotnogo-osmosu-ecosoft-robust/",
  }
];
