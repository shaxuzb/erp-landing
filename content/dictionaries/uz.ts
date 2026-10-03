// O'zbekcha matn — asosiy til. Apostroflar oddiy (') yoziladi; sahifaga
// chiqishda content/typography.ts ularni to'g'ri belgilarga almashtiradi.
// Demo qiymatlar (raqamlar, narxlar, mijoz fikrlari, aloqa) bu yerda emas —
// ular content/demo.ts da.

export const uz = {
  meta: {
    title: "Daqiq — savdo, ombor, moliya va xodimlar bitta tizimda",
    description:
      "Daqiq do'kon va distribyutorlar uchun: sof foyda, kassa, ombor qoldig'i va xodimlar nazorati bitta ekranda. Kompyuter, telefon va kassada ishlaydi. Demo so'rang.",
  },
  nav: {
    features: "Imkoniyatlar",
    modules: "Modullar",
    pricing: "Narxlar",
    faq: "Savollar",
    cta: "Demo so'rash",
    language: "Til",
    main: "Asosiy menyu",
  },
  hero: {
    badge: "Savdo · Ombor · Moliya · Xodimlar",
    titleStart: "Biznesingizdagi har bir so'm qayerda\u00a0—",
    titleAccent: "bitta ekranda",
    lead: "Daqiq savdo, ombor, moliya va xodimlarni bitta tizimda birlashtiradi. Do'konda bo'lmasangiz ham nazorat sizda.",
    primary: "Demo so'rash",
    secondary: "Imkoniyatlarni ko'rish",
    note: "20 dan ortiq kompaniya Daqiq bilan ishlamoqda",
    screenAlt:
      "Daqiq moliya dashboardi: savdo, sof foyda, mavjud pul va qarzlar",
  },
  trust: {
    label: "Qisqacha",
    items: [
      { value: "20+", title: "kompaniya", text: "Daqiq bilan ishlamoqda" },
      { value: "3", title: "til", text: "O'zbek, rus va ingliz" },
      {
        value: "3",
        title: "qurilma",
        text: "Kompyuter, telefon va kassa",
      },
      {
        value: "240+",
        title: "ruxsat turi",
        text: "Har bir amal uchun alohida",
      },
    ],
  },
  pillars: {
    eyebrow: "To'rtta savol",
    title: "Har kuni o'zingizga beradigan savollarga tayyor javob",
    titleAccent: "tayyor javob",
    lead: "Hisobot so'rab xodimni kutish shart emas. Javob doim ekranda.",
    cta: "Demoda ko'rish",
    items: [
      {
        id: "money",
        kicker: "Moliya",
        question: "Pulingiz qayerda?",
        text: "Sof foyda, kassadagi naqd, bankdagi mablag' va qarzlar — bitta sahifada. E'tibor kerak bo'lgan joyni tizim o'zi ko'rsatadi.",
        points: [
          "Sof foyda va marja — o'tgan davr bilan solishtirib",
          "Kassa, bank va plastikdagi pul alohida",
          "Kim sizdan qarz, siz kimdan qarzsiz",
          "Ogohlantirishlar: muddati o'tgan to'lov, oshgan qarz",
        ],
      },
      {
        id: "stock",
        kicker: "Ombor",
        question: "Omborda qancha pul qotib yotibdi?",
        text: "Qaysi tovar sotilmay turibdi, qaysi biri tugab qolyapti — va tovar yo'qligi sababli qancha foyda boy berilgani ko'rinadi.",
        points: [
          "Sotilmayotgan tovar va unda muzlagan pul",
          "Kam qolgan tovarlar — xarid kerak bo'lganlari",
          "Tovar yetishmasligidan yo'qotilgan foyda",
        ],
      },
      {
        id: "serial",
        kicker: "Seriya raqami",
        question: "Har bir tovar qayerda?",
        text: "Seriya raqamini kiriting — tovar qaysi hujjat bilan kelgani, qayerdan qayerga o'tgani va kimga sotilgani chiqadi. Inventarizatsiya kamera orqali o'tadi.",
        points: [
          "Seriya raqami bo'yicha to'liq tarix",
          "Kamera orqali inventarizatsiya, AI tahlili bilan",
          "Barcode va QR yorliqlarni chop etish",
        ],
      },
    ],
  },
  staff: {
    kicker: "Xodimlar nazorati",
    question: "Xodimlar nima qilyapti?",
    text: "Kim ishga qachon keldi, hozir qayerda va qaysi vazifa ustida ishlayapti — uchalasi bitta joyda. So'rab-surishtirishga hojat yo'q.",
    features: [
      {
        id: "attendance",
        title: "Face ID davomat",
        text: "Xodim ishga kelganda yuzini ko'rsatadi — ishxonadagi Face ID kamerada yoki o'z telefonida. Kelgan va ketgan vaqti o'zi yoziladi.",
        points: [
          "Ishxona kamerasi yoki telefon orqali",
          "Kelish, ketish va ishlangan soatlar",
          "Kechikkan va kelmaganlar alohida ko'rinadi",
        ],
      },
      {
        id: "location",
        title: "Xodimlar xaritada",
        text: "Dala va savdo xodimlari qayerda ekani xaritada ko'rinadi. Menejer mijoz obyektiga, masalan qurilish maydoniga borganda suratga oladi — tashrif shu bilan tasdiqlanadi.",
        points: [
          "Xodimlar xaritasi",
          "Ruxsat etilgan hudud va radius",
          "Obyektga tashrif surat bilan tasdiqlanadi",
        ],
      },
      {
        id: "tasks",
        title: "Vazifalar doskasi",
        text: "Xodimga vazifa bering, muddatini belgilang va bajarilishini doskada kuzating. Alohida dastur kerak emas.",
        points: [
          "Vazifa, mas'ul va muddat",
          "Doska va kalendar ko'rinishi",
          "Loyihalar bo'yicha tartib",
        ],
      },
    ],
  },
  system: {
    eyebrow: "Barcha modullar",
    heading: "Hammasi bitta tizimda",
    headingAccent: "bitta tizimda",
    linkedBadge: "Barchasi bitta tizimda",
    linkedText:
      "Sotuvdan hisobotgacha barcha bo'limlar bitta bazada ishlaydi. Bir joyda kiritilgan ma'lumot qolgan hamma joyda ko'rinadi.",
    title: "Jarayonlar o'zaro bog'langan, ma'lumot yagona",
    lead: "Sotuv, ombor, kassa va hisobotlar bitta bazada ishlaydi — alohida dasturlar va Excel jadvallarini solishtirishga hojat yo'q.",
    hubTitle: "Bitta tizim.",
    hubText: "Barcha jarayonlar.",
    ctaTitle: "Sizga qaysi modullar kerak?",
    ctaText: "Demoda biznesingizga mosini birga tanlaymiz.",
    cta: "Demo so'rash",
    groups: [
      {
        id: "sales",
        title: "Savdo",
        items: [
          "Sotuv",
          "Mobil sotuv",
          "Kassa (POS)",
          "Muddatli to'lov",
          "Qaytarish",
          "Mijozlar",
        ],
      },
      {
        id: "purchase",
        title: "Xarid va ombor",
        items: [
          "Xarid",
          "Excel import",
          "Tovar qabul qilish",
          "Qoldiq",
          "Seriya raqamlari",
          "AI inventarizatsiya",
        ],
      },
      {
        id: "finance",
        title: "Moliya",
        items: [
          "Kirim-chiqim",
          "Valyuta ayirboshlash",
          "Terminal",
          "Inkassatsiya",
          "Qarzlar",
          "Balans",
        ],
      },
      {
        id: "reports",
        title: "Tahlil va hisobotlar",
        items: [
          "Foyda tahlili",
          "Ombor holati",
          "Brend va mahsulot kesimi",
          "Mijoz, yetkazuvchi va kassa hisobotlari",
          "Narx solishtirish",
        ],
      },
      {
        id: "control",
        title: "Nazorat",
        items: [
          "Audit jurnali",
          "Ma'lumot o'z vaqtida kiritilishi",
          "Ruxsatlar",
        ],
      },
      {
        id: "people",
        title: "Xodimlar va joylar",
        items: [
          "Face ID + GPS davomat",
          "Xodimlar xaritada",
          "Hudud nazorati",
          "Vazifalar (Kanban)",
          "Qurilish obyektlari",
        ],
      },
      {
        id: "store",
        title: "Do'kon vositalari",
        items: [
          "Narx yorlig'i dizayneri",
          "Barcode / QR chop etish",
          "Bonus",
          "Scoring",
          "Bildirishnomalar",
        ],
      },
    ],
  },
  proof: {
    eyebrow: "Mijozlar ishonchi",
    resultsBadge: "Natijalar",
    lead: "Turli sohalardagi kompaniyalar Daqiq yordamida jarayonlarini tartibga solmoqda.",
    resultsTitle: "Raqamlarda natijalar",
  },
  pricing: {
    eyebrow: "Narxlar",
    titleStart: "Biznesingiz uchun",
    titleAccent: "to'g'ri tarifni tanlang",
    lead: "Har qanday hajmdagi biznes uchun mos tariflar. Yashirin to'lovlarsiz.",
    currency: "so'm",
    perMonth: "oy",
    popular: "Eng ommabop",
    choose: "Demo so'rash",
    contact: "Aloqa qilish",
  },
  steps: {
    eyebrow: "Qanday boshlanadi",
    title: "Uch qadamda ishga tushasiz",
    titleAccent: "Uch qadamda",
    // QORALAMA: qadamlar matnini egasi tasdiqlashi kerak (brif, 7-band).
    items: [
      {
        title: "Demo so'raysiz",
        text: "Formani to'ldirasiz. Biz qo'ng'iroq qilib, biznesingiz qanday ishlashini so'rab olamiz.",
      },
      {
        title: "Tizimni birga ko'ramiz",
        text: "Daqiqni sizning savdo, ombor va moliya jarayonlaringiz misolida ko'rsatamiz.",
      },
      {
        title: "Jamoangiz ishga tushadi",
        text: "Xodimlarga ruxsat beriladi, boshlang'ich ma'lumotlar kiritiladi — jamoa Daqiqda ishlashni boshlaydi.",
      },
    ],
  },
  form: {
    eyebrow: "Demo so'rovi",
    title: "Daqiqni o'z biznesingiz misolida ko'ring",
    titleAccent: "o'z biznesingiz misolida",
    lead: "Raqamingizni qoldiring. Bog'lanamiz va tizimni sizning do'koningiz, omboringiz misolida ko'rsatamiz.",
    bullets: [
      "Savollaringizga jonli javob",
      "Sizga kerakli modullar bo'yicha ko'rsatuv",
      "Hech qanday majburiyatsiz",
    ],
    name: "Ismingiz",
    namePlaceholder: "Masalan, Jasur",
    phone: "Telefon raqamingiz",
    phonePlaceholder: "+998 90 123 45 67",
    company: "Kompaniya nomi",
    companyPlaceholder: "Do'kon yoki kompaniya",
    activity: "Faoliyat turi",
    activityPlaceholder: "Tanlang",
    activities: [
      { value: "appliances", label: "Maishiy texnika do'koni" },
      { value: "distribution", label: "Distribyutor yoki ulgurji savdo" },
      { value: "retail", label: "Chakana savdo" },
      { value: "construction", label: "Qurilish obyektlariga ta'minot" },
      { value: "other", label: "Boshqa" },
    ],
    submit: "Demo so'rash",
    hint: "Tugma bosilganda Telegram ochiladi va xabar tayyor turadi — faqat yuborish qoladi.",
    successTitle: "Telegram ochildi",
    successText:
      "Xabar tayyor turibdi — «Yuborish» tugmasini bosing, biz javob beramiz.",
    openTelegram: "Telegramni ochish",
    writeDirectly: "Telegram orqali yozish",
    // Telegramda tayyor turadigan xabar. Salomlashuv matnini egasi bergan.
    message: {
      greeting:
        "Assalomu alaykum, Daqiq dasturi bo'yicha sizdan ma'lumot olmoqchi edim.",
      name: "Ism",
      phone: "Telefon",
      company: "Kompaniya",
      activity: "Faoliyat turi",
    },
    errors: {
      name: "Ismingizni kiriting",
      phone: "Telefon raqamini to'liq kiriting",
      company: "Kompaniya nomini kiriting",
      activity: "Faoliyat turini tanlang",
    },
  },
  faq: {
    eyebrow: "Savol-javob",
    title: "Ko'p beriladigan savollar",
    titleAccent: "savollar",
    // QORALAMA: javoblarni egasi tasdiqlashi kerak (brif, 7-band). Oxirgi ikki
    // savolga aniq javob hali yo'q.
    items: [
      {
        q: "Daqiq qanday bizneslarga mos?",
        a: "Avvalo maishiy texnika do'konlari va distribyutorlarga: seriya raqamlari, muddatli to'lov, narx yorliqlari va kassa bilan ishlaydi. Qurilish obyektlariga lift, sovutish tizimi kabi uskuna yetkazib beradigan kompaniyalarga ham mos: obyektlar va menejerlar tashrifi nazoratda turadi.",
      },
      {
        q: "Qaysi qurilmalarda ishlaydi?",
        a: "Kompyuterda, telefonda (mobil sotuv va mobil tovar qabul qilish) hamda kassada.",
      },
      {
        q: "Qaysi tillarda ishlaydi?",
        a: "O'zbek, rus va ingliz tillarida.",
      },
      {
        q: "Xodim faqat o'ziga kerakli ma'lumotni ko'radimi?",
        a: "Ha. Har bir amal uchun alohida ruxsat beriladi — tizimda 240 dan ortiq ruxsat turi bor. Kim nimani o'zgartirgani audit tarixida saqlanadi.",
      },
      {
        q: "Joriy etish qancha vaqt oladi?",
        a: "Bu biznesingiz hajmi va qaysi modullar kerakligiga bog'liq. Demo paytida jarayonni birga rejalashtiramiz.",
      },
      {
        q: "Eski dasturdagi ma'lumotlar ko'chadimi?",
        a: "Xaridlarni Excel fayldan import qilish mumkin. Qolgan ma'lumotlarni ko'chirish tartibini demo paytida kelishamiz.",
      },
    ],
  },
  footer: {
    tagline: "Savdo, ombor, moliya va xodimlar — bitta tizimda.",
    pageTitle: "Sahifa",
    contactTitle: "Aloqa",
    rights: "Barcha huquqlar himoyalangan.",
    languageTitle: "Til",
  },
  // Mahsulot ekranlari rasmlaridagi yozuvlar — erp-client dagi haqiqiy
  // ekranlardan olingan.
  screens: {
    illustrative: "Ekrandagi raqamlar namuna sifatida berilgan",
    currency: "UZS",
    finance: {
      kpis: {
        sales: { label: "Savdo", helper: "ta savdo" },
        cash: { label: "Mavjud pul", helper: "Kassa + Bank + Plastik" },
        receivable: {
          label: "Mijozlardan olinadi",
          helper: "ta muddati o'tgan",
        },
        stock: { label: "Ombordagi tovar", helper: "ta mahsulot" },
      },
      attention: "E'tibor kerak",
      alerts: { overdue: { title: "Mijoz to'lovlari muddati o'tgan" } },
      pieces: "ta",
      whereIsMoney: "Pul qayerda?",
      accounts: {
        card: "Plastik",
        bank: "Bank / O'tkazma",
        cash: "Kassa (naqd)",
        terminal: "Terminal",
      },
      receivableTitle: "Mijozlardan olinadigan pul",
      buckets: {
        overdue: "Muddati o'tgan",
        today: "Bugun olinadi",
        week: "7 kun ichida",
      },
    },
    stock: {
      title: "Ombor holati",
      caption: "Qoldiqning tannarx qiymati",
      total: "Jami mahsulot",
      low: "Kam qolgan",
      lowHelper: "kunlik sotuvga yetmaydi",
      stale: "Sotilmayotgan",
      days: "kun",
      frozen: "Muzlatilgan pul",
      frozenHelper: "Sotilmagan qoldiq tannarxi",
      lost: "OOS sababli yo'qotish",
      lostHelper: "ta mahsulot tugab qolgan · taxminiy",
      columns: { product: "Mahsulot", status: "Holat", left: "Qoldiq, dona" },
      statuses: {
        out: "Tugagan",
        low: "Kam qolgan",
        noSales: "Sotuv yo'q",
        ok: "Me'yorda",
      },
      products: [
        "Televizor 55 dyuym",
        "Kir yuvish mashinasi 7 kg",
        "Konditsioner 12",
        "Muzlatgich, 2 kamerali",
      ],
    },
    attendance: {
      title: "Xodimlar davomati",
      verified: "Face ID tasdiqlandi",
      sources: { camera: "Ishxona kamerasi", phone: "Telefon" },
      columns: { employee: "Xodim", arrived: "Keldi", left: "Ketdi" },
      statuses: { onTime: "O'z vaqtida", late: "Kechikdi", absent: "Kelmadi" },
      summary: { present: "Ishda", late: "Kechikdi", absent: "Kelmadi" },
    },
    location: {
      title: "Xodimlar xaritasi",
      onMap: "ta xodim xaritada",
      zone: "Ruxsat hududi",
      visit: "Tashrif surat bilan tasdiqlandi",
      atSite: "Obyektda",
    },
    tasks: {
      title: "Ish loyihalari",
      board: "Doska",
      columns: { todo: "Rejada", doing: "Jarayonda", done: "Bajarildi" },
      items: [
        "Yangi tovarni qabul qilish",
        "Narx yorliqlarini yangilash",
        "Mijozga yetkazib berish",
        "Qoldiqni sanab chiqish",
        "Vitrinani yangilash",
      ],
      today: "Bugun",
    },
    serial: {
      title: "Mahsulot kuzatuvi",
      placeholder: "Serial raqamini kiriting",
      search: "Qidirish",
      product: "Mahsulot",
      productName: "Televizor 55 dyuym",
      state: "Joriy holat",
      stateValue: "Sotilgan",
      columns: {
        document: "Hujjat",
        from: "Qayerdan",
        to: "Qayerga",
        date: "Sana",
      },
      rows: [
        { document: "Xarid", from: "Yetkazib beruvchi", to: "Asosiy ombor" },
        { document: "Ko'chirish", from: "Asosiy ombor", to: "Do'kon" },
        { document: "Sotuv", from: "Do'kon", to: "Mijoz" },
      ],
      aiTitle: "AI tahlili",
      beta: "Beta",
      detected: "Aniqlangan seriya",
      confidence: "Ishonchlilik",
      found: "Topildi",
    },
  },
};

export type Dictionary = typeof uz;
