import { telegramUrl } from "@/content/contact";

/*
 * Demo so'rovi serverga yuborilmaydi va hech qayerda saqlanmaydi: forma
 * to'ldirilgach mijozning o'z Telegrami ochiladi, xabar tayyor turadi va uni
 * mijoz o'zi yuboradi. Telegram xabarni saytdan avtomatik jo'natishga ruxsat
 * bermaydi — faqat matnni oldindan yozib qo'yish mumkin.
 */

export const demoRequestFields = [
  "name",
  "phone",
  "company",
  "activity",
] as const;

export type DemoRequestField = (typeof demoRequestFields)[number];

export type DemoRequest = Record<DemoRequestField, string>;

const MAX_LENGTH = 120;
const MIN_PHONE_DIGITS = 9;
const MAX_PHONE_DIGITS = 15;

const validators: Record<
  DemoRequestField,
  (value: string, activities: string[]) => boolean
> = {
  name: (value) => value.length >= 2,
  phone: (value) => {
    const digits = value.replace(/\D/g, "").length;
    return digits >= MIN_PHONE_DIGITS && digits <= MAX_PHONE_DIGITS;
  },
  company: (value) => value.length >= 2,
  activity: (value, activities) => activities.includes(value),
};

export const readDemoRequest = (formData: FormData): DemoRequest => {
  const read = (field: DemoRequestField) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
  };

  return {
    name: read("name"),
    phone: read("phone"),
    company: read("company"),
    activity: read("activity"),
  };
};

/** Noto'g'ri to'ldirilgan maydonlar ro'yxati; bo'sh bo'lsa — hammasi joyida. */
export const findInvalidFields = (
  request: DemoRequest,
  activities: string[],
): DemoRequestField[] =>
  demoRequestFields.filter(
    (field) => !validators[field](request[field], activities),
  );

/** Telegramda shu akkaunt bilan suhbatni ochadi; `text` yozish maydonida tayyor turadi. */
export const buildTelegramUrl = (text: string) =>
  `${telegramUrl}?text=${encodeURIComponent(text)}`;

type MessageLabels = { greeting: string } & Record<DemoRequestField, string>;

/** Tayyor xabar: salomlashuv va formada kiritilgan ma'lumotlar. */
export const buildDemoMessage = (
  labels: MessageLabels,
  request: DemoRequest,
  activityLabel: string,
) =>
  [
    labels.greeting,
    "",
    `${labels.name}: ${request.name}`,
    `${labels.phone}: ${request.phone}`,
    `${labels.company}: ${request.company}`,
    `${labels.activity}: ${activityLabel}`,
  ].join("\n");
