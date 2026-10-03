import type { Locale } from "./i18n";

// O'zbek lotin yozuvida oʻ/gʻ uchun U+02BB, tutuq belgisi uchun U+02BC
// ishlatiladi. Matn fayllarida oddiy apostrof yoziladi, to'g'ri belgilar
// shu yerda qo'yiladi — katta sarlavhalarda to'g'ri apostrof xunuk ko'rinadi.
const typesetUzbekText = (text: string) =>
  text.replace(/([oOgG])'/g, "$1ʻ").replace(/(\p{L})'(?=\p{L})/gu, "$1ʼ");

export const typesetUzbek = <T>(value: T): T => {
  if (typeof value === "string") return typesetUzbekText(value) as T;
  if (Array.isArray(value)) return value.map(typesetUzbek) as T;
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, typesetUzbek(entry)]),
    ) as T;
  }
  return value;
};

/** Ko'p tilli qiymatdan joriy til variantini oladi. */
export const localize = <T>(value: Record<Locale, T>, locale: Locale): T =>
  locale === "uz" ? typesetUzbek(value.uz) : value[locale];
