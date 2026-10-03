import type { Locale } from "../i18n";
import { typesetUzbek } from "../typography";
import { en } from "./en";
import { ru } from "./ru";
import { uz, type Dictionary } from "./uz";

const dictionaries: Record<Locale, Dictionary> = {
  uz: typesetUzbek(uz),
  ru,
  en,
};

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export type { Dictionary };
