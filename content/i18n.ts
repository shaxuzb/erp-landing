export const locales = ["uz", "ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeNames: Record<Locale, { short: string; full: string }> = {
  uz: { short: "UZ", full: "Oʻzbekcha" },
  ru: { short: "RU", full: "Русский" },
  en: { short: "EN", full: "English" },
};

// Open Graph uchun til-hudud kodlari.
export const ogLocales: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
};
