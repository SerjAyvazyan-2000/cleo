/* ==========================================================================
   НАСТРОЙКИ САЙТА «КЛЕО» — редактируйте только этот файл.
   Источники: карточка салона в 2ГИС (прайс обновлён 11.09.2026, фото салона,
   подтверждённые отзывы), big-book-med.ru (городской телефон).
   ВАЖНО: фото пока подгружаются с сервера 2ГИС (опубликованы салоном).
   Перед публикацией согласовать с салоном и перенести в assets/images.
   ========================================================================== */

/* Фото из галереи салона в 2ГИС; w — ширина превью */
const G = (path, w = 900) => "https://" + path.replace(/\.jpg$/, `_${w}x.jpg`);

const PHOTO = {
  portrait:   G("i1.photo.2gis.com/photo-gallery/c67bba93-76d9-4f5e-8112-adccdd37b02d.jpg", 1000),
  blonde:     G("i6.photo.2gis.com/photo-gallery/cbd8f00f-357a-4a60-a534-9779c701e044.jpg"),
  nailsPink:  G("i7.photo.2gis.com/images/branch/0/30258560074645285_57b7.jpg", 700),
  balayage:   G("i2.photo.2gis.com/photo-gallery/5d6f5b69-55bb-47e6-9cd5-885fb341f217.jpg"),
  lilac:      G("i8.photo.2gis.com/photo-gallery/b84dc89b-c6ff-4f47-9b03-4d4d1df852ad.jpg"),
  nailArt:    G("i1.photo.2gis.com/images/branch/0/30258560110178026_e2be.jpg"),
  lashes:     G("i0.photo.2gis.com/photo-gallery/860ce0bf-f550-4261-98d5-95de25b463fc.jpg"),
  lashes2:    G("i9.photo.2gis.com/photo-gallery/3e474108-5714-47aa-913e-80300ad8f7a4.jpg"),
  platinum:   G("i9.photo.2gis.com/photo-gallery/1138e8e6-aa88-48ee-9b73-b8b1aa6c94c0.jpg"),
  updo:       G("i6.photo.2gis.com/photo-gallery/082421bf-caa0-43eb-8e80-dda1366c4fe5.jpg"),
  brows:      G("i4.photo.2gis.com/images/branch/0/30258560074645088_c3da.jpg"),
  nailsRed:   G("i8.photo.2gis.com/images/branch/0/30258560074645101_f359.jpg", 800),
  bob:        G("i8.photo.2gis.com/photo-gallery/c9acd73d-0370-4d4f-8fb4-843316b9446c.jpg"),
  kids:       G("i8.photo.2gis.com/images/branch/0/30258560074692069_23ab.jpg"),
  copper:     G("i6.photo.2gis.com/photo-gallery/f11a3971-d82f-430a-b17d-003d5086ca02.jpg"),
  manicure:   G("i2.photo.2gis.com/images/branch/0/30258560074645283_c6ed.jpg", 800),
  pedicure:   G("i6.photo.2gis.com/photo-gallery/cd5e0360-70b3-434b-a807-f46952d1fbd3.jpg"),
  nailDesign: G("i0.photo.2gis.com/images/branch/0/30258560074645274_a852.jpg"),
  facial:     G("i1.photo.2gis.com/photo-gallery/1739f735-f7ea-40a9-8ed3-f3db10b6412c.jpg"),
  faceMassage:G("i2.photo.2gis.com/photo-gallery/f5f964f8-7d88-4699-90f7-836164eac9f0.jpg"),
  peel:       G("i2.photo.2gis.com/photo-gallery/8dd6be34-d264-452e-95c0-30f92f30cd77.jpg"),
  waves:      G("i5.photo.2gis.com/images/branch/0/30258560074692075_9b6e.jpg"),
  faceBA:     G("i5.photo.2gis.com/photo-gallery/1f58b36f-c743-452d-9de9-26c92b3ddc8d.jpg", 1000),
  team1:      G("i6.photo.2gis.com/photo-gallery/e7b41e7e-2ba5-44ad-a45a-40e5f056768a.jpg", 700),
  team2:      G("i7.photo.2gis.com/images/branch/0/30258560074691576_fbc0.jpg", 700),
  team3:      G("i8.photo.2gis.com/photo-gallery/f517c90f-04bb-4c69-baff-dd70aaf182b5.jpg", 700),
  team4:      G("i1.photo.2gis.com/photo-gallery/836d8ab9-4b74-4fa6-b713-86e687be8610.jpg", 700),
};

window.SITE = {
  /* --- Бренд --- */
  brand: {
    name: "Клео",
    tagline: "салон красоты",
    city: "Пермь",
  },

  /* --- Цвета. Фирменного гайда нет: взяты золото с вывески «Клеопатра»
         и спокойный серо-бирюзовый из интерьера салона --- */
  theme: {
    ink: "#1d1a16",
    paper: "#f6f1ea",
    accent: "#a5772b",
    blush: "#d3dfdb",
  },

  /* --- Какие блоки показывать --- */
  show: { beforeAfter: true, masters: true, works: true, reviews: true, faq: true },

  /* --- Контакты --- */
  contacts: {
    phone: "+7 (342) 274-68-63",
    phoneRaw: "+73422746863",
    phone2: "+7 (919) 703-98-65",
    phone2Raw: "+79197039865",
    whatsapp: "79197039865",
    telegram: "+79197039865",
    vk: "kleoapatra",
    address: "ул. Вильямса, 20/3",
    hours: [["Ежедневно", "9:00 — 21:00"]],
    mapEmbed: "https://yandex.ru/map-widget/v1/?ll=56.29498%2C58.102858&z=17&pt=56.29498%2C58.102858%2Cpm2rdm",
    mapLink: "https://2gis.ru/perm/firm/2252328095260076",
  },

  /* --- Первый экран --- */
  hero: {
    eyebrow: "Волосы · Ногти · Брови · Ресницы · Лицо",
    title: ["Красота,", "которую", "замечают"],
    accentWord: 2,
    text: "Стрижки и сложное окрашивание, маникюр и педикюр, брови, ресницы и уход за лицом — в одном салоне на Вильямса, 20/3. Работаем каждый день с 9 до 21.",
    cta: "Записаться",
    images: [PHOTO.portrait, PHOTO.blonde, PHOTO.nailsPink],
    badge: "запись в WhatsApp • Telegram • по телефону • ",
    visitLine: false,
  },

  /* --- Бегущая строка --- */
  marquee: ["Стрижки", "Сложное окрашивание", "Маникюр", "Педикюр", "Брови", "Ресницы", "Уход за лицом", "Макияж", "Массаж", "SPA"],

  /* --- Цифры (данные 2ГИС) --- */
  stats: [
    { value: 5, suffix: "", label: "рейтинг в 2ГИС", decimals: 1, link: "https://2gis.ru/perm/firm/2252328095260076/tab/reviews" },
    { value: 406, suffix: "", label: "оценок гостей", link: "https://2gis.ru/perm/firm/2252328095260076/tab/reviews" },
    { value: 106, suffix: "", label: "услуг в прайсе" },
    { value: 12, suffix: " ч", label: "работаем каждый день" },
  ],

  /* --- Услуги и цены (2ГИС, обновлено 11.09.2026). from: true — цена «от» ---
     Длительность в источниках не указана — добавьте min (минуты), когда салон подтвердит. */
  services: [
    { cat: "Волосы", items: [
      { name: "Модельная женская стрижка", price: 1650, from: true, img: PHOTO.bob },
      { name: "Стрижка на удлинённые волосы", price: 2200, from: true, img: PHOTO.waves },
      { name: "Модельная мужская стрижка", price: 1400 },
      { name: "Детская модельная стрижка", desc: "До 7 лет", price: 1000, from: true, img: PHOTO.kids },
      { name: "Окрашивание", desc: "L'Oréal — от 3 800 ₽, Matrix и Davines — от 4 000 ₽", price: 3800, from: true, img: PHOTO.copper },
      { name: "Сложное окрашивание", desc: "Шатуш, балаяж, airtouch", price: 8000, from: true, img: PHOTO.balayage },
      { name: "Укладка феном", price: 1400, from: true, img: PHOTO.platinum },
      { name: "Причёска", desc: "2 500 — 3 500 ₽", price: 2500, from: true, img: PHOTO.updo },
      { name: "Авторский уход от салона «Клео»", desc: "Сочетание уходов под задачу волос", price: 4200, from: true, img: PHOTO.lilac },
    ]},
    { cat: "Ногти", items: [
      { name: "Комбинированный маникюр без покрытия", price: 1400, img: PHOTO.manicure },
      { name: "Маникюр с покрытием гель-лаком", price: 1700, from: true, img: PHOTO.nailsPink },
      { name: "Мужской маникюр", price: 1650 },
      { name: "Наращивание ногтей", desc: "С маникюром и покрытием гель-лаком", price: 3300, from: true, img: PHOTO.nailDesign },
      { name: "Педикюр без покрытия", price: 2650, img: PHOTO.pedicure },
      { name: "Педикюр с покрытием гель-лаком", price: 3300, img: PHOTO.pedicure },
      { name: "Экспресс-педикюр с покрытием", price: 2650 },
      { name: "Smart-педикюр с покрытием", price: 2900 },
    ]},
    { cat: "Брови и ресницы", items: [
      { name: "Окрашивание бровей краской", price: 1300, img: PHOTO.brows },
      { name: "Окрашивание бровей хной", price: 1300, img: PHOTO.brows },
      { name: "Ламинирование ресниц", price: 2600, img: PHOTO.lashes },
      { name: "Ботокс ресниц", price: 2600, img: PHOTO.lashes2 },
      { name: "Наращивание ресниц — классика", price: 2400, img: PHOTO.lashes2 },
      { name: "Наращивание ресниц 2D", price: 2900, img: PHOTO.lashes },
      { name: "Наращивание ресниц 3D", price: 3200, img: PHOTO.lashes },
    ]},
    { cat: "Лицо", items: [
      { name: "Ультразвуковая чистка лица", price: 2750, img: PHOTO.facial },
      { name: "Комбинированная чистка лица", price: 3500, img: PHOTO.facial },
      { name: "Пилинг PRX-T33", price: 4500, img: PHOTO.peel },
      { name: "Пилинг Peach Peel", price: 4500, img: PHOTO.peel },
      { name: "Массаж лица", desc: "Классический, буккальный, миофасциальный, тибетский", price: 800, from: true, img: PHOTO.faceMassage },
      { name: "Биоревитализация", price: 5500, from: true, img: PHOTO.facial },
      { name: "Макияж", price: 2600, from: true, img: PHOTO.portrait },
    ]},
  ],
  currency: "₽",
  priceOnRequest: "цена по записи",
  priceNote: "Цены по прайсу салона в 2ГИС (обновлён 11.09.2026). Не является публичной офертой — точную стоимость назовёт администратор.",

  /* --- До / После: одно фото салона, на котором обе стороны лица --- */
  beforeAfter: {
    title: "Результат видно сразу",
    text: "Реальная работа косметолога салона. Потяните ползунок: слева — сторона лица до процедуры, справа — после. Каждая сторона одного и того же фото отражена зеркально для удобного сравнения.",
    single: PHOTO.faceBA,
    mirror: true,     // одно фото «до | после» → два кадра для слайдера
    cut: 0.49,        // где проходит линия раздела на фото (доля ширины)
    labelTop: 0.8,    // с какой высоты на фото начинаются подписи (их убираем)
  },

  /* --- Команда: фото салона из 2ГИС, имена не подписаны до согласования --- */
  masters: [
    { name: "", role: "", img: PHOTO.team1 },
    { name: "", role: "", img: PHOTO.team2 },
    { name: "", role: "", img: PHOTO.team3 },
    { name: "", role: "", img: PHOTO.team4 },
  ],

  /* --- Портфолио (фото работ салона из 2ГИС) --- */
  gallery: [PHOTO.balayage, PHOTO.nailArt, PHOTO.lilac, PHOTO.lashes, PHOTO.platinum, PHOTO.updo, PHOTO.brows, PHOTO.nailsRed],

  /* --- Отзывы: подтверждённые отзывы из 2ГИС (дословно) --- */
  reviews: [
    { name: "Елена М.", service: "Маникюр", source: "2ГИС", rating: 5, text: "Шикарный салон!! Сервис на высоте, очень приветливый персонал. Атмосфера уюта и спокойствия ❤️ Делала маникюр у мастера Натальи, результатом очень довольна." },
    { name: "Марина С.", service: "Салон", source: "2ГИС", rating: 5, text: "Отличный салон! Все делают очень аккуратно, быстро. Цена/качество отличное. Работают профессионалы!" },
    { name: "Валентина О.", service: "Косметология", source: "2ГИС", rating: 5, text: "Косметолог Ирина провела мне консультацию, объяснила план работы с кожей, провела пилинг. Ощущения очень приятные, результат виден сразу." },
    { name: "Варвара К.", service: "Косметология", source: "2ГИС", rating: 5, text: "Была у косметолога Анастасии, впечатления только положительные: приятное общение, профессиональный подход!" },
    { name: "Светлана У.", service: "Маникюр", source: "2ГИС", rating: 5, text: "Мастер по маникюру Наталья вежливо общается и качественно выполняет свою работу. Хожу только в Клео 😊" },
  ],

  /* --- Вопросы (только подтверждённые факты) --- */
  faq: [
    ["Как записаться?", "Напишите в WhatsApp или Telegram на +7 (919) 703-98-65 или позвоните по номеру +7 (342) 274-68-63. Форма на сайте сразу откроет WhatsApp с готовой заявкой."],
    ["Когда вы работаете?", "Каждый день с 9:00 до 21:00, без выходных."],
    ["Где вы находитесь?", "Пермь, Орджоникидзевский район, ул. Вильямса, 20/3. Маршрут — по кнопке «Открыть в картах» в разделе контактов."],
    ["Есть ли у вас обучение?", "Да: курс для лэшмейкеров, курс повышения квалификации мастеров маникюра, авторский курс «Сам себе визажист» и стажировка для парикмахеров-стилистов с трудоустройством."],
  ],

  /* --- Форма записи: endpoint пустой → заявка открывается в WhatsApp салона --- */
  form: {
    endpoint: "",
    successText: "Открыли WhatsApp с вашей заявкой — отправьте сообщение, и администратор подтвердит время.",
  },

  /* --- Подвал --- */
  footer: {
    legal: "",
    credit: { text: "", url: "" },
  },
};
