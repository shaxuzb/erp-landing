# Daqiq — landing sahifa uchun topshiriq

Bu hujjat `erp-client` sessiyasida kelishilgan narsalarni yangi sessiyaga
yetkazadi. Sahifani qurishdan oldin to'liq o'qing.

## 1. Mahsulot

**Daqiq** — savdo, ombor, moliya va xodimlarni bitta tizimda boshqaradigan
dastur. Asosiy mijoz: maishiy texnika do'koni yoki distribyutor egasi
(seriya raqamlari, muddatli to'lov, narx yorliqlari, kassa). Qurilish va
dala jamoalari uchun ham modullar bor.

Manba kodi: `../erp-client` (React + Vite). Da'volarni o'sha yerdan tekshirish
mumkin.

## 2. Brend — eng muhim qism

- Nomi **Daqiq**. "ModuX", "ModuX ERP" yoki "ERP" deb yozilmaydi. Maketdagi
  barcha "ModuX ERP" yozuvlari "Daqiq" ga almashtiriladi.
- Logo: binafsha doira ichida oq "d", yonida "aqiq" yozuvi.
  - `public/brand/daqiqlight.png` — och fon uchun (373×162)
  - `public/brand/daqiqdark.png` — to'q fon uchun (373×162)
  - `public/brand/logodaqiq.png` — faqat belgi (192×192)
  - `public/brand/logo.png` — belgi, katta (512×512)
  - Fayllar PNG va kichik. Katta ekranda xira chiqsa, egasidan SVG so'rang.
- Asosiy rang: **binafsha `#6d28d9`** (hover `#7c3aed`, active `#5b21b6`).
  Maket ko'k rangda chizilgan — ko'k emas, binafsha ishlatiladi.
- Ilovadagi shrift: Google Sans Flex.

## 3. Maqsad

Yagona maqsad — **demo so'rovi**. Har bir bo'lim shu tugmaga olib boradi.
Asosiy tugma matni: "Demo so'rash".

## 4. Faktlar

### Ishlatish mumkin (egasi tasdiqlagan yoki kodda bor)

- 20 dan ortiq kompaniya ishlatmoqda.
- O'zbek, rus, ingliz tillari.
- Kompyuter, telefon (mobil sotuv, mobil tovar qabul qilish) va kassa (POS).
- Har bir amal uchun alohida ruxsat (kodda 247 ta ruxsat turi).
- Egasining so'zi: barcha modullar ishlaydi.

### Demo ma'lumot — egasining qarori: hozircha tursin, keyin almashtiriladi

Maketdagi quyidagi qiymatlar real emas. Egasi ularni ishlab chiqish davrida
**demo sifatida qoldirishga** qaror qildi; sahifa ochiq e'lon qilinishidan
oldin real ma'lumotga almashtiriladi.

| Maketdagi qiymat | Real holat |
|---|---|
| "1 200+ mamnun mijoz", "150 000+ foydalanuvchi", "Minglab bizneslar" | Real son: 20+ kompaniya |
| "99.9% barqarorlik", "24/7 qo'llab-quvvatlash" | Tasdiqlanmagan |
| "-70% xato", "3x tezroq", "+40% samaradorlik" | O'lchanmagan |
| Mijoz fikrlari (Azizbek Karimov / AgroTech va boshqalar) | To'qilgan odamlar va kompaniyalar |
| Narxlar: 299 000 / 599 000 so'm | Egasi tasdiqlamagan |
| Telefon, manzil, email | Maketdan, real emas |

Qanday qurish kerak:

- Barcha demo qiymatlar **bitta kontent faylida** tursin (komponentlar ichiga
  sochilmasin) va har biri `// DEMO: e'lon qilishdan oldin almashtiriladi`
  izohi bilan belgilansin — keyin bitta joydan topib almashtirish uchun.
- Email va domen "modux" emas, Daqiq nomi bilan demo bo'lsin.

### Ishlatish mumkin emas — demo sifatida ham

| Maketdagi da'vo | Sabab |
|---|---|
| "Ishlab chiqarish" moduli | Tizimda bunday modul yo'q |
| POS'da smena ochish/yopish | Hali qilinmagan |
| "ModuX" / "ERP" nomi | Brend — Daqiq |

## 5. Sahifa tuzilishi (kelishilgan)

1. **Hero.** Sarlavha: *Biznesingizdagi har bir so'm qayerda — bitta ekranda*.
   Ostida: *Daqiq savdo, ombor, moliya va xodimlarni bitta tizimda
   birlashtiradi. Do'konda bo'lmasangiz ham nazorat sizda.* Tugmalar: "Demo
   so'rash" va "Imkoniyatlarni ko'rish". O'ngda moliya dashboardi skrinshoti.
2. **Ishonch qatori.** 20+ kompaniya · 3 til · kompyuter, telefon, kassa.
3. **To'rtta asosiy blok** — egasining og'riqlari, har birida skrinshot:
   - *Pulingiz qayerda?* — sof foyda, kassa, bank, qarzlar, ogohlantirishlar.
   - *Omborda qancha pul qotib yotibdi?* — sotilmayotgan va tugayotgan tovar,
     tovar yetishmasligidan yo'qotilgan foyda.
   - *Xodimlar nima qilyapti?* — kim nimani o'zgartirgani, kechikib kiritilgan
     ma'lumot, balansdagi shubhali kunlar.
   - *Har bir tovar qayerda?* — seriya raqami bo'yicha tarix, kamera orqali
     inventarizatsiya.
4. **Hammasi bitta tizimda** — barcha modullar, guruhlab:
   - Savdo: sotuv, mobil sotuv, kassa (POS), muddatli to'lov, qaytarish, mijozlar
   - Xarid va ombor: xarid, Excel import, tovar qabul qilish, qoldiq, seriya
     raqamlari, AI inventarizatsiya
   - Moliya: kirim-chiqim, valyuta ayirboshlash, terminal, inkassatsiya, qarzlar,
     balans
   - Tahlil va hisobotlar: foyda tahlili, ombor holati, brend/mahsulot kesimi,
     mijoz/yetkazuvchi/kassa hisobotlari, narx solishtirish
   - Nazorat: audit jurnali, ma'lumot o'z vaqtida kiritilishi, ruxsatlar
   - Xodimlar va joylar: Face ID + GPS davomat, xodimlar xaritada, hudud
     nazorati, vazifalar (Kanban), qurilish obyektlari
   - Do'kon vositalari: narx yorlig'i dizayneri, barcode/QR chop etish, bonus,
     scoring, bildirishnomalar
5. **Qanday boshlanadi** — 3 qadam (matni egasidan, 7-bandga qarang).
6. **Demo so'rovi formasi** — ism, telefon, kompaniya, faoliyat turi.
7. **Savol-javob** (javoblari egasidan).
8. **Footer.**

## 6. Maketdan nimani olish kerak

Maket rasmlari: `docs/reference/1-hero.webp` … `6-cta-footer.webp`. Egasining
so'zi: aynan ko'chirilmasin, umumiy ko'rinish olinsin, lekin UI professional va
ko'zga yoqadigan bo'lsin.

**Olinadi:** toza va havodor joylashuv; hero'da matn chapda, mahsulot ekrani
o'ngda; katta sarlavhada bitta rangli urg'u; imkoniyat kartalari to'ri; har bir
katta imkoniyat uchun ichida UI ko'rinishi bor karta (3-rasm); "jarayonlar
o'zaro bog'langan" sxemasi (4-rasm).

**Olinmaydi:** ko'k rang (binafsha bo'ladi); "ModuX ERP" nomi; "Ishlab
chiqarish" moduli. Chizilgan soxta dashboard o'rniga imkon bo'lsa `erp-client`
dagi haqiqiy ekranlar skrinshoti ishlatiladi.

Raqamlar, mijoz fikrlari va narxlar bo'limlari quriladi — demo ma'lumot bilan
(4-bandga qarang).

## 7. Egasining qarorlari va ochiq savollar

**Hal qilingan:**

- **Tillar:** o'zbek, rus, ingliz — uchala til. Asosiy til o'zbekcha.
- **Narxlar va boshqa demo ma'lumot:** hozircha demo tursin (4-band).
- **Logo:** egasi sifatli variantini o'zi tayyorlab beradi. Ungacha
  `public/brand/` dagi PNG'lar ishlatiladi; logo bitta komponentda tursin,
  fayl almashganda bir joydan o'zgarsin.

**Hali ochiq** (javob kelguncha demo/oddiy yechim bilan davom eting):

- Demo so'rovi qayerga tushadi: Telegram, email yoki CRM?
- Joriy etish qancha vaqt oladi, eski dasturdan ma'lumot ko'chadimi?
  ("Qanday boshlanadi" va savol-javob matni uchun.)
- Haqiqiy skrinshotlar (yoki ularni `erp-client` dan olishga ruxsat va login).

## 8. Texnik

- Next.js 16.3.8, React 19, Tailwind 4, TypeScript. `AGENTS.md` ogohlantiradi:
  bu Next versiyasida o'zgarishlar bor — kod yozishdan oldin
  `node_modules/next/dist/docs/` dagi qo'llanmani o'qing.
- Hozir `app/page.tsx` standart shablon holatida.
- Talablar: telefon uchun to'liq moslashuv, tez yuklanish, SEO meta teglari.
