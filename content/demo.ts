import type { Locale } from "./i18n";

/*
 * DEMO MA'LUMOT — sahifa ochiq e'lon qilinishidan oldin almashtiriladi.
 *
 * Bu fayldagi hamma narsa maketdan olingan va real emas (docs/landing-brief.md,
 * 4-band). Egasining qarori: ishlab chiqish davrida demo sifatida tursin.
 * Sahifadagi barcha demo qiymatlar faqat shu faylda — almashtirish uchun
 * "DEMO:" bo'yicha qidiring.
 */

type Localized<T = string> = Record<Locale, T>;

// DEMO: real ma'lumot qo'yilgach `false` qiling — shunda qidiruv tizimlari
// sahifani indekslay boshlaydi (app/[lang]/layout.tsx va app/robots.ts).
export const DEMO_CONTENT_ACTIVE = true;

// DEMO: e'lon qilishdan oldin almashtiriladi — real domen.
export const demoSiteUrl = "https://daqiq.uz";

export const demoContact = {
  // DEMO: e'lon qilishdan oldin almashtiriladi — telefon maketdan olingan.
  phone: { display: "+998 71 203 00 60", href: "tel:+998712030060" },
  // DEMO: e'lon qilishdan oldin almashtiriladi — email real emas.
  email: "info@daqiq.uz",
  // DEMO: e'lon qilishdan oldin almashtiriladi — ish vaqti maketdan olingan.
  hours: {
    uz: "Dushanba – Juma, 09:00 – 18:00",
    ru: "Понедельник – пятница, 09:00 – 18:00",
    en: "Monday – Friday, 09:00 – 18:00",
  } satisfies Localized,
  // DEMO: e'lon qilishdan oldin almashtiriladi — manzil maketdan olingan.
  address: {
    uz: "Toshkent, Yunusobod tumani, Amir Temur ko'chasi, 107B",
    ru: "Ташкент, Юнусабадский район, улица Амира Темура, 107B",
    en: "107B Amir Temur Street, Yunusabad district, Tashkent",
  } satisfies Localized,
};

// DEMO: e'lon qilishdan oldin almashtiriladi — real son: 20+ kompaniya.
export const demoProofHeading = {
  uz: { start: "Minglab bizneslar", accent: "Daqiqqa", end: "ishonadi" },
  ru: { start: "Тысячи компаний", accent: "доверяют", end: "Daqiq" },
  en: { start: "Thousands of businesses", accent: "trust", end: "Daqiq" },
} satisfies Localized<{ start: string; accent: string; end: string }>;

type Stat = { value: string; label: Localized };

export const demoStats: Stat[] = [
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — real son: 20+ kompaniya.
    value: "1 200+",
    label: {
      uz: "Mamnun mijozlar va kompaniyalar",
      ru: "Довольных клиентов и компаний",
      en: "Happy customers and companies",
    },
  },
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — real son yo'q.
    value: "150 000+",
    label: {
      uz: "Faol foydalanuvchilar",
      ru: "Активных пользователей",
      en: "Active users",
    },
  },
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — tasdiqlanmagan.
    value: "99.9%",
    label: {
      uz: "Tizim barqarorligi",
      ru: "Стабильность системы",
      en: "System uptime",
    },
  },
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — tasdiqlanmagan.
    value: "24/7",
    label: {
      uz: "Mahalliy qo'llab-quvvatlash",
      ru: "Местная поддержка",
      en: "Local support",
    },
  },
];

type Result = { value: string; title: Localized; text: Localized };

export const demoResults: Result[] = [
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — o'lchanmagan.
    value: "−70%",
    title: {
      uz: "Xatolar soni kamaydi",
      ru: "Меньше ошибок",
      en: "Fewer errors",
    },
    text: {
      uz: "Jarayonlar avtomatlashadi, inson omili kamayadi.",
      ru: "Процессы автоматизированы, человеческий фактор снижен.",
      en: "Processes are automated and the human factor shrinks.",
    },
  },
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — o'lchanmagan.
    value: "3x",
    title: {
      uz: "Tezroq qarorlar",
      ru: "Решения быстрее",
      en: "Faster decisions",
    },
    text: {
      uz: "Barcha ma'lumot real vaqtda bir joyda.",
      ru: "Все данные в реальном времени в одном месте.",
      en: "All the data in one place, in real time.",
    },
  },
  {
    // DEMO: e'lon qilishdan oldin almashtiriladi — o'lchanmagan.
    value: "+40%",
    title: {
      uz: "Samaradorlik oshdi",
      ru: "Выше эффективность",
      en: "Higher efficiency",
    },
    text: {
      uz: "Xarajatlar nazoratda, biznes kengayadi.",
      ru: "Расходы под контролем, бизнес растёт.",
      en: "Costs stay under control while the business grows.",
    },
  },
];

type Testimonial = {
  name: string;
  company: string;
  role: Localized;
  quote: Localized;
};

// DEMO: e'lon qilishdan oldin almashtiriladi — odamlar ham, kompaniyalar ham
// to'qilgan. Real mijozlarning roziligi bilan olingan fikrlar qo'yiladi.
export const demoTestimonials: Testimonial[] = [
  {
    name: "Azizbek Karimov",
    company: "AgroTech Group",
    role: { uz: "Bosh direktor", ru: "Генеральный директор", en: "CEO" },
    quote: {
      uz: "Daqiq barcha jarayonlarimizni yagona tizimga birlashtirdi. Hisobotlar endi bir necha daqiqada tayyor bo'ladi, bu esa qaror qabul qilishni ancha osonlashtirdi.",
      ru: "Daqiq объединил все наши процессы в одной системе. Отчёты теперь готовы за несколько минут, и решения принимать стало гораздо проще.",
      en: "Daqiq brought all our processes into one system. Reports are ready in minutes now, which makes decisions much easier.",
    },
  },
  {
    name: "Nilufar Tursunova",
    company: "Baraka Savdo",
    role: {
      uz: "Moliya direktori",
      ru: "Финансовый директор",
      en: "Finance director",
    },
    quote: {
      uz: "Ombor, savdo va moliya jarayonlari to'liq nazorat ostida. Daqiq jamoasining qo'llab-quvvatlashi juda professional va tezkor.",
      ru: "Склад, продажи и финансы полностью под контролем. Поддержка команды Daqiq очень профессиональная и быстрая.",
      en: "Warehouse, sales and finance are fully under control. The Daqiq team's support is professional and quick.",
    },
  },
  {
    name: "Bekzod Olimov",
    company: "Orient Textile",
    role: {
      uz: "Operatsion direktor",
      ru: "Операционный директор",
      en: "Operations director",
    },
    quote: {
      uz: "Filiallar va ombordagi holatni endi real vaqtda ko'ramiz. Ma'lumot bir joyda bo'lgani uchun nazorat ham, samaradorlik ham ancha oshdi.",
      ru: "Теперь мы видим ситуацию в филиалах и на складе в реальном времени. Данные в одном месте — контроль и эффективность заметно выросли.",
      en: "We now see our branches and warehouse in real time. With the data in one place, both control and efficiency went up noticeably.",
    },
  },
];

type Plan = {
  id: "start" | "professional" | "enterprise";
  name: string;
  highlighted: boolean;
  tagline: Localized;
  /** Narx yo'q bo'lsa `priceLabel` ko'rsatiladi. */
  price: string | null;
  priceLabel: Localized | null;
  features: Localized<string[]>;
};

// DEMO: e'lon qilishdan oldin almashtiriladi — narxlar va tarif tarkibi
// egasi tomonidan tasdiqlanmagan.
export const demoPlans: Plan[] = [
  {
    id: "start",
    name: "Start",
    highlighted: false,
    tagline: {
      uz: "Kichik bizneslar uchun",
      ru: "Для малого бизнеса",
      en: "For small businesses",
    },
    price: "299 000",
    priceLabel: null,
    features: {
      uz: [
        "Asosiy modullar",
        "5 tagacha foydalanuvchi",
        "Standart qo'llab-quvvatlash",
        "Bulutli infratuzilma",
        "Doimiy yangilanishlar",
      ],
      ru: [
        "Основные модули",
        "До 5 пользователей",
        "Стандартная поддержка",
        "Облачная инфраструктура",
        "Регулярные обновления",
      ],
      en: [
        "Core modules",
        "Up to 5 users",
        "Standard support",
        "Cloud infrastructure",
        "Regular updates",
      ],
    },
  },
  {
    id: "professional",
    name: "Professional",
    highlighted: true,
    tagline: {
      uz: "O'sib borayotgan bizneslar uchun",
      ru: "Для растущего бизнеса",
      en: "For growing businesses",
    },
    price: "599 000",
    priceLabel: null,
    features: {
      uz: [
        "Barcha modullar",
        "Cheksiz foydalanuvchilar",
        "Kengaytirilgan analitika",
        "Ustuvor qo'llab-quvvatlash",
        "Integratsiyalar (API)",
        "Maxsus sozlash imkoniyatlari",
      ],
      ru: [
        "Все модули",
        "Неограниченное число пользователей",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Интеграции (API)",
        "Индивидуальные настройки",
      ],
      en: [
        "All modules",
        "Unlimited users",
        "Advanced analytics",
        "Priority support",
        "Integrations (API)",
        "Custom configuration",
      ],
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    highlighted: false,
    tagline: {
      uz: "Katta korxonalar uchun",
      ru: "Для крупных компаний",
      en: "For large companies",
    },
    price: null,
    priceLabel: {
      uz: "Bepul konsultatsiya",
      ru: "Бесплатная консультация",
      en: "Free consultation",
    },
    features: {
      uz: [
        "Maxsus modullar va yechimlar",
        "Cheksiz foydalanuvchilar",
        "Shaxsiy mijoz menejeri",
        "On-premise yoki bulutli",
        "Maxsus integratsiyalar",
        "24/7 premium qo'llab-quvvatlash",
      ],
      ru: [
        "Особые модули и решения",
        "Неограниченное число пользователей",
        "Персональный менеджер",
        "On-premise или облако",
        "Индивидуальные интеграции",
        "Премиум-поддержка 24/7",
      ],
      en: [
        "Custom modules and solutions",
        "Unlimited users",
        "Dedicated account manager",
        "On-premise or cloud",
        "Custom integrations",
        "24/7 premium support",
      ],
    },
  },
];

// DEMO: e'lon qilishdan oldin almashtiriladi — mahsulot ekranlari rasmlaridagi
// namuna raqamlar, sanalar va ismlar. Haqiqiy skrinshotlar kelganda
// components/screens/ dagi chizilgan ekranlar bilan birga olib tashlanadi.
export const demoScreens = {
  // Hero'dagi suzuvchi kartalar: public/screens/finance-dashboard.png
  // skrinshotidagi qiymatlar. Skrinshot almashsa, bular ham yangilanadi.
  heroCards: {
    sales: { value: "13 959 960", count: "9" },
    cash: { value: "59 899 596" },
    receivable: { value: "56 952 000", overdue: "0" },
    stock: { value: "1 139 008 800", count: "1 434" },
  },
  finance: {
    total: "236 400 000",
    accounts: [
      { id: "card", value: "114 420 000", share: 48.4 },
      { id: "bank", value: "91 960 000", share: 38.9 },
      { id: "cash", value: "23 880 000", share: 10.1 },
      { id: "terminal", value: "6 140 000", share: 2.6 },
    ],
    buckets: [
      { id: "overdue", value: "86 400 000", count: "14" },
      { id: "today", value: "38 250 000", count: "6" },
      { id: "week", value: "124 900 000", count: "21" },
    ],
  },
  stock: {
    total: "1 920 300 000",
    low: "23",
    lowDays: "10",
    stale: "64",
    staleDays: "60",
    frozen: "142 000 000",
    lost: "18 700 000",
    lostCount: "9",
    rows: [
      { left: "0", status: "out" },
      { left: "3", status: "low" },
      { left: "41", status: "noSales" },
      { left: "18", status: "ok" },
    ],
  },
  serial: {
    number: "SN 4820 1175 0931",
    rows: [
      { record: "#1042", date: "12.08.2026" },
      { record: "#318", date: "15.08.2026" },
      { record: "#5521", date: "02.10.2026" },
    ],
    confidence: 96,
  },
  attendance: {
    check: {
      name: "A. Karimov",
      initials: "AK",
      time: "08:57",
      source: "camera",
    },
    summary: { present: "18", late: "2", absent: "1" },
    rows: [
      { name: "A. Karimov", arrived: "08:57", left: "18:04", status: "onTime" },
      { name: "N. Tursunova", arrived: "09:12", left: "18:00", status: "late" },
      { name: "B. Olimov", arrived: "08:49", left: "—", status: "onTime" },
      { name: "D. Ismoilov", arrived: "—", left: "—", status: "absent" },
    ],
  },
  location: {
    onMap: "12",
    // Xaritadagi nuqtalar: joylashuv foizda (chapdan, yuqoridan).
    pins: [
      { initials: "AK", x: 22, y: 30 },
      { initials: "NT", x: 72, y: 22 },
      { initials: "DI", x: 84, y: 68 },
    ],
    selected: {
      name: "B. Olimov",
      initials: "BO",
      x: 46,
      y: 58,
      time: "14:32",
    },
  },
  tasks: {
    // `title` — lug'atdagi vazifa nomining tartib raqami.
    columns: [
      {
        id: "todo",
        cards: [
          { title: 0, assignee: "AK", due: "05.10" },
          { title: 1, assignee: "NT", due: "06.10" },
        ],
      },
      { id: "doing", cards: [{ title: 2, assignee: "BO", due: "today" }] },
      {
        id: "done",
        cards: [
          { title: 3, assignee: "DI", due: "01.10" },
          { title: 4, assignee: "AK", due: "30.09" },
        ],
      },
    ],
  },
} as const;
