export type Language = 'ru' | 'es' | 'en';

type Service = {
  number: string;
  title: string;
  time: string;
  price: string;
  text: string;
};

type Copy = {
  languageName: string;
  changeLanguage: string;
  homeAria: string;
  navAria: string;
  nav: { services: string; gallery: string; team: string; about: string; contacts: string };
  book: string;
  heroLineOne: string;
  heroLineTwo: string;
  heroCopy: string;
  bookOnline: string;
  viewServices: string;
  metaAria: string;
  weekdays: string;
  saturday: string;
  tickerAria: string;
  ticker: [string, string, string, string, string];
  interiorAlt: string;
  yearsMastery: string;
  aboutKicker: string;
  aboutLineOne: string;
  aboutLineTwo: string;
  aboutLead: string;
  aboutBody: string;
  aboutChecks: [string, string, string];
  chooseTime: string;
  servicesKicker: string;
  servicesHeading: string;
  servicesIntro: string;
  services: Service[];
  bookService: string;
  serviceExtras: string;
  allServices: string;
  galleryKicker: string;
  galleryHeadingOne: string;
  galleryHeadingTwo: string;
  galleryIntro: string;
  gallerySlot: string;
  galleryPlaceholder: string;
  galleryReadyNote: string;
  galleryOpenAria: string;
  galleryDialogDescription: string;
  previousPhoto: string;
  nextPhoto: string;
  galleryBook: string;
  moreOnInstagram: string;
  teamKicker: string;
  teamHeadingOne: string;
  teamHeadingTwo: string;
  reviews: string;
  seniorBarber: string;
  timAlt: string;
  bookingKicker: string;
  bookingLineOne: string;
  bookingLineTwo: string;
  bookingBody: string;
  openBooksy: string;
  bookingFrame: string;
  bookingFrameTitle: string;
  contactsKicker: string;
  contactsLineOne: string;
  contactsLineTwo: string;
  address: string;
  phone: string;
  openingHours: string;
  hoursWeekdays: string;
  hoursSaturday: string;
  hoursSunday: string;
  socialAria: string;
  mapAria: string;
  mapOpen: string;
  footerSlogan: string;
  footerBook: string;
  toTop: string;
  whatsappAria: string;
};

export const languageOptions: Array<{ code: Language; label: string; short: string }> = [
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
];

export const translations: Record<Language, Copy> = {
  ru: {
    languageName: 'Русский',
    changeLanguage: 'Сменить язык',
    homeAria: 'Barbershop Original — на главную',
    navAria: 'Основная навигация',
    nav: { services: 'Услуги', gallery: 'Работы', team: 'Мастера', about: 'О нас', contacts: 'Контакты' },
    book: 'Записаться',
    heroLineOne: 'Твой стиль.',
    heroLineTwo: 'Твоя история.',
    heroCopy: 'Премиальные мужские стрижки, безупречная борода и внимание к каждой детали.',
    bookOnline: 'Записаться онлайн',
    viewServices: 'Смотреть услуги',
    metaAria: 'Краткая информация',
    weekdays: 'Пн–Пт',
    saturday: 'Суббота',
    tickerAria: 'Наши направления',
    ticker: ['Стрижка', 'Борода', 'Стиль', 'Уход', 'Original'],
    interiorAlt: 'Интерьер Barbershop Original в Михасе',
    yearsMastery: 'лет\nмастерства',
    aboutKicker: 'О нас',
    aboutLineOne: 'Не просто стрижка.',
    aboutLineTwo: 'Твой ритуал.',
    aboutLead: 'Мы — команда мастеров с высокими стандартами и собственным взглядом на мужской стиль.',
    aboutBody: 'В Barbershop Original всё построено вокруг результата: спокойная атмосфера, профессиональная консультация, точная работа и образ, который легко носить каждый день.',
    aboutChecks: ['Профессиональные мастера', 'Премиальные средства', 'Русский · English · Español'],
    chooseTime: 'Выбрать время',
    servicesKicker: 'Наши услуги',
    servicesHeading: 'Прайс',
    servicesIntro: 'Выберите услугу и забронируйте удобное время онлайн. Подтверждение придёт сразу после записи.',
    services: [
      { number: '01', title: 'Мужская стрижка', time: '30 мин', price: '25€', text: 'Стрижка с учётом формы лица, структуры волос и вашего привычного стиля.' },
      { number: '02', title: 'Стрижка Premium', time: '40 мин', price: '30€', text: 'Стрижка, мытьё головы, массаж кожи, укладка и внимание к каждой детали.' },
      { number: '03', title: 'Стрижка + борода', time: '60 мин', price: '40€', text: 'Полный образ: точная стрижка и моделирование бороды в одной процедуре.' },
      { number: '04', title: 'Оформление бороды', time: '30 мин', price: '20€', text: 'Чёткий контур, выверенная форма и уход с учётом особенностей роста волос.' },
      { number: '05', title: 'Традиционное бритьё', time: '30 мин', price: '20€', text: 'Горячее распаривание, чистое бритьё и завершающий уход за кожей.' },
      { number: '06', title: 'Детская стрижка', time: '30 мин', price: '20€', text: 'Аккуратная стрижка для маленьких джентльменов до 8 лет.' },
    ],
    bookService: 'Записаться',
    serviceExtras: 'Камуфляж седины · тонирование бороды · бритьё головы · воск',
    allServices: 'Все услуги на Booksy',
    galleryKicker: 'Галерея',
    galleryHeadingOne: 'Наши',
    galleryHeadingTwo: 'работы',
    galleryIntro: 'Здесь будут лучшие стрижки, оформление бороды и результаты до и после. Нажмите на фотографию, чтобы открыть её крупно.',
    gallerySlot: 'Фото',
    galleryPlaceholder: 'Место для вашей работы',
    galleryReadyNote: 'Галерея готова для 8 фотографий. После загрузки снимки автоматически займут эти места.',
    galleryOpenAria: 'Открыть фотографию',
    galleryDialogDescription: 'Просмотр работ Barbershop Original',
    previousPhoto: 'Предыдущая фотография',
    nextPhoto: 'Следующая фотография',
    galleryBook: 'Записаться',
    moreOnInstagram: 'Больше работ в Instagram',
    teamKicker: 'Команда',
    teamHeadingOne: 'Твои',
    teamHeadingTwo: 'мастера',
    reviews: '186 отзывов на Booksy',
    seniorBarber: 'Старший барбер',
    timAlt: 'Tim — старший барбер',
    bookingKicker: 'Запись онлайн',
    bookingLineOne: 'Твой новый образ',
    bookingLineTwo: 'начинается здесь.',
    bookingBody: 'Выбери услугу, мастера и свободное время. Онлайн-запись работает через Booksy.',
    openBooksy: 'Открыть Booksy',
    bookingFrame: 'Онлайн-запись',
    bookingFrameTitle: 'Онлайн-запись Barbershop Original через Booksy',
    contactsKicker: 'Контакты',
    contactsLineOne: 'Мы рядом.',
    contactsLineTwo: 'Заглядывай.',
    address: 'Адрес',
    phone: 'Телефон',
    openingHours: 'Режим работы',
    hoursWeekdays: 'Пн–Пт: 10:00–19:00',
    hoursSaturday: 'Сб: 10:00–16:00',
    hoursSunday: 'Вс: выходной',
    socialAria: 'Ссылки Barbershop Original',
    mapAria: 'Открыть Barbershop Original на Google Maps',
    mapOpen: 'Открыть в Google Maps',
    footerSlogan: 'Стиль, который говорит за тебя.',
    footerBook: 'Записаться на стрижку',
    toTop: 'Наверх ↑',
    whatsappAria: 'Написать в WhatsApp',
  },
  es: {
    languageName: 'Español',
    changeLanguage: 'Cambiar idioma',
    homeAria: 'Barbershop Original — inicio',
    navAria: 'Navegación principal',
    nav: { services: 'Servicios', gallery: 'Trabajos', team: 'Barberos', about: 'Nosotros', contacts: 'Contacto' },
    book: 'Reservar',
    heroLineOne: 'Tu estilo.',
    heroLineTwo: 'Tu historia.',
    heroCopy: 'Cortes masculinos premium, barbas impecables y atención a cada detalle.',
    bookOnline: 'Reservar online',
    viewServices: 'Ver servicios',
    metaAria: 'Información rápida',
    weekdays: 'Lun–Vie',
    saturday: 'Sábado',
    tickerAria: 'Nuestras especialidades',
    ticker: ['Corte', 'Barba', 'Estilo', 'Cuidado', 'Original'],
    interiorAlt: 'Interior de Barbershop Original en Mijas',
    yearsMastery: 'años\nde oficio',
    aboutKicker: 'Nosotros',
    aboutLineOne: 'No es solo un corte.',
    aboutLineTwo: 'Es tu ritual.',
    aboutLead: 'Somos un equipo de profesionales con altos estándares y una visión propia del estilo masculino.',
    aboutBody: 'En Barbershop Original todo gira en torno al resultado: ambiente relajado, asesoramiento profesional, trabajo preciso y un estilo fácil de llevar cada día.',
    aboutChecks: ['Barberos profesionales', 'Productos premium', 'Русский · English · Español'],
    chooseTime: 'Elegir hora',
    servicesKicker: 'Nuestros servicios',
    servicesHeading: 'Tarifas',
    servicesIntro: 'Elige un servicio y reserva online la hora que prefieras. Recibirás la confirmación al instante.',
    services: [
      { number: '01', title: 'Corte de pelo', time: '30 min', price: '25€', text: 'Corte adaptado a tu rostro, tipo de cabello y estilo habitual.' },
      { number: '02', title: 'Corte Premium', time: '40 min', price: '30€', text: 'Corte, lavado, masaje del cuero cabelludo, peinado y atención a cada detalle.' },
      { number: '03', title: 'Corte + barba', time: '60 min', price: '40€', text: 'El look completo: corte de precisión y diseño de barba en una sola sesión.' },
      { number: '04', title: 'Arreglo de barba', time: '30 min', price: '20€', text: 'Contorno limpio, forma equilibrada y cuidado según el crecimiento del pelo.' },
      { number: '05', title: 'Afeitado tradicional', time: '30 min', price: '20€', text: 'Toalla caliente, afeitado apurado y cuidado final de la piel.' },
      { number: '06', title: 'Corte infantil', time: '30 min', price: '20€', text: 'Un corte cuidado para pequeños caballeros de hasta 8 años.' },
    ],
    bookService: 'Reservar',
    serviceExtras: 'Camuflaje de canas · tinte de barba · afeitado de cabeza · cera',
    allServices: 'Todos los servicios en Booksy',
    galleryKicker: 'Galería',
    galleryHeadingOne: 'Nuestros',
    galleryHeadingTwo: 'trabajos',
    galleryIntro: 'Aquí mostraremos los mejores cortes, arreglos de barba y resultados de antes y después. Pulsa una foto para verla en grande.',
    gallerySlot: 'Foto',
    galleryPlaceholder: 'Espacio para tu trabajo',
    galleryReadyNote: 'La galería está preparada para 8 fotos. Cuando subamos las imágenes, ocuparán estos espacios.',
    galleryOpenAria: 'Abrir foto',
    galleryDialogDescription: 'Galería de trabajos de Barbershop Original',
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
    galleryBook: 'Reservar',
    moreOnInstagram: 'Más trabajos en Instagram',
    teamKicker: 'Equipo',
    teamHeadingOne: 'Tus',
    teamHeadingTwo: 'barberos',
    reviews: '186 reseñas en Booksy',
    seniorBarber: 'Barbero sénior',
    timAlt: 'Tim — barbero sénior',
    bookingKicker: 'Reserva online',
    bookingLineOne: 'Tu nuevo look',
    bookingLineTwo: 'empieza aquí.',
    bookingBody: 'Elige servicio, barbero y hora disponible. La reserva online se gestiona con Booksy.',
    openBooksy: 'Abrir Booksy',
    bookingFrame: 'Reserva online',
    bookingFrameTitle: 'Reserva online de Barbershop Original con Booksy',
    contactsKicker: 'Contacto',
    contactsLineOne: 'Estamos cerca.',
    contactsLineTwo: 'Pásate.',
    address: 'Dirección',
    phone: 'Teléfono',
    openingHours: 'Horario',
    hoursWeekdays: 'Lun–Vie: 10:00–19:00',
    hoursSaturday: 'Sáb: 10:00–16:00',
    hoursSunday: 'Dom: cerrado',
    socialAria: 'Enlaces de Barbershop Original',
    mapAria: 'Abrir Barbershop Original en Google Maps',
    mapOpen: 'Abrir en Google Maps',
    footerSlogan: 'Un estilo que habla por ti.',
    footerBook: 'Reservar un corte',
    toTop: 'Volver arriba ↑',
    whatsappAria: 'Escribir por WhatsApp',
  },
  en: {
    languageName: 'English',
    changeLanguage: 'Change language',
    homeAria: 'Barbershop Original — home',
    navAria: 'Main navigation',
    nav: { services: 'Services', gallery: 'Work', team: 'Barbers', about: 'About', contacts: 'Contact' },
    book: 'Book now',
    heroLineOne: 'Your style.',
    heroLineTwo: 'Your story.',
    heroCopy: 'Premium men’s cuts, flawless beard work and attention to every detail.',
    bookOnline: 'Book online',
    viewServices: 'View services',
    metaAria: 'Quick information',
    weekdays: 'Mon–Fri',
    saturday: 'Saturday',
    tickerAria: 'Our specialties',
    ticker: ['Haircut', 'Beard', 'Style', 'Grooming', 'Original'],
    interiorAlt: 'Barbershop Original interior in Mijas',
    yearsMastery: 'years of\ncraft',
    aboutKicker: 'About us',
    aboutLineOne: 'More than a haircut.',
    aboutLineTwo: 'Your ritual.',
    aboutLead: 'We are a team of professionals with high standards and our own take on men’s style.',
    aboutBody: 'At Barbershop Original everything is built around the result: a relaxed atmosphere, expert advice, precise work and a style that is easy to wear every day.',
    aboutChecks: ['Professional barbers', 'Premium products', 'Русский · English · Español'],
    chooseTime: 'Choose a time',
    servicesKicker: 'Our services',
    servicesHeading: 'Price list',
    servicesIntro: 'Choose a service and book a convenient time online. You will receive confirmation straight away.',
    services: [
      { number: '01', title: 'Men’s haircut', time: '30 min', price: '25€', text: 'A cut shaped around your face, hair texture and everyday style.' },
      { number: '02', title: 'Premium haircut', time: '40 min', price: '30€', text: 'Cut, wash, scalp massage, styling and close attention to every detail.' },
      { number: '03', title: 'Haircut + beard', time: '60 min', price: '40€', text: 'The complete look: a precision haircut and beard design in one session.' },
      { number: '04', title: 'Beard trim', time: '30 min', price: '20€', text: 'Clean lines, balanced shape and grooming tailored to your beard growth.' },
      { number: '05', title: 'Traditional shave', time: '30 min', price: '20€', text: 'Hot towel preparation, a close shave and finishing skin care.' },
      { number: '06', title: 'Kids’ haircut', time: '30 min', price: '20€', text: 'A careful cut for young gentlemen up to 8 years old.' },
    ],
    bookService: 'Book',
    serviceExtras: 'Grey blending · beard tint · head shave · waxing',
    allServices: 'All services on Booksy',
    galleryKicker: 'Gallery',
    galleryHeadingOne: 'Our',
    galleryHeadingTwo: 'work',
    galleryIntro: 'This is where we will showcase our best cuts, beard work and before-and-after results. Tap a photo to view it full size.',
    gallerySlot: 'Photo',
    galleryPlaceholder: 'Space for your work',
    galleryReadyNote: 'The gallery is ready for 8 photos. Once uploaded, your images will fill these spaces.',
    galleryOpenAria: 'Open photo',
    galleryDialogDescription: 'Barbershop Original work gallery',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    galleryBook: 'Book now',
    moreOnInstagram: 'More work on Instagram',
    teamKicker: 'Team',
    teamHeadingOne: 'Your',
    teamHeadingTwo: 'barbers',
    reviews: '186 reviews on Booksy',
    seniorBarber: 'Senior barber',
    timAlt: 'Tim — senior barber',
    bookingKicker: 'Book online',
    bookingLineOne: 'Your new look',
    bookingLineTwo: 'starts here.',
    bookingBody: 'Choose a service, your barber and an available time. Online booking is powered by Booksy.',
    openBooksy: 'Open Booksy',
    bookingFrame: 'Online booking',
    bookingFrameTitle: 'Book Barbershop Original online with Booksy',
    contactsKicker: 'Contact',
    contactsLineOne: 'We are nearby.',
    contactsLineTwo: 'Drop in.',
    address: 'Address',
    phone: 'Phone',
    openingHours: 'Opening hours',
    hoursWeekdays: 'Mon–Fri: 10:00–19:00',
    hoursSaturday: 'Sat: 10:00–16:00',
    hoursSunday: 'Sun: closed',
    socialAria: 'Barbershop Original links',
    mapAria: 'Open Barbershop Original in Google Maps',
    mapOpen: 'Open in Google Maps',
    footerSlogan: 'A style that speaks for you.',
    footerBook: 'Book a haircut',
    toTop: 'Back to top ↑',
    whatsappAria: 'Message us on WhatsApp',
  },
};
