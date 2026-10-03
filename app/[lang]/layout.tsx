import type { Metadata, Viewport } from "next";
import { Google_Sans, Google_Sans_Flex } from "next/font/google";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/motion/motion-provider";
import { DEMO_CONTENT_ACTIVE } from "@/content/demo";
import { getDictionary } from "@/content/dictionaries";
import { defaultLocale, hasLocale, locales, ogLocales } from "@/content/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

// Ilovadagi shrift. `wdth` va `ROND` o'qlari sarlavhalar uchun kerak.
const flex = Google_Sans_Flex({
  subsets: ["latin"],
  axes: ["wdth", "ROND"],
  variable: "--font-flex",
  display: "swap",
  adjustFontFallback: false,
});

// Google Sans Flex'da kirill yo'q — ruscha matn uchun. Faqat kirill harflari
// uchragan sahifada yuklanadi.
const cyrillic = Google_Sans({
  subsets: ["cyrillic"],
  variable: "--font-cyrillic",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

// app/opengraph-image.tsx yaratadigan rasm. U [lang] dan tashqarida turgani
// uchun sahifalarga o'zi ulanmaydi — shu yerda ko'rsatiladi.
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Daqiq",
};

const noScriptStyles =
  "[data-reveal]{opacity:1!important;transform:none!important}" +
  "[data-collapse]{height:auto!important;opacity:1!important}";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#140c22",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    applicationName: "Daqiq",
    icons: {
      icon: "/brand/logodaqiq.png",
      apple: "/brand/logodaqiq.png",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Daqiq",
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: ogLocales[lang],
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => ogLocales[locale]),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage.url],
    },
    // Demo ma'lumot turganda sahifa qidiruv tizimlariga berilmaydi.
    robots: DEMO_CONTENT_ACTIVE
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    // `data-scroll-behavior`: sahifada silliq skrol yoqilgan (globals.css);
    // bu atribut bilan Next sahifalar orasida o'tganda uni vaqtincha o'chiradi.
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${flex.variable} ${cyrillic.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {/* JavaScript'siz Motion yashirib qo'ygan bloklar ko'rinmay qoladi —
            bu uslub ularni ochiq holatga keltiradi. */}
        <noscript>
          <style>{noScriptStyles}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
