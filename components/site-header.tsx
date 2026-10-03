import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import { localeNames, locales, type Locale } from "@/content/i18n";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";
import { HeaderShell } from "./motion/header-shell";
import { ScrollProgress } from "./motion/scroll-progress";

type SiteHeaderProps = {
  lang: Locale;
  nav: Dictionary["nav"];
};

/*
 * Shisha navbar: sahifa ustida suzib turadi, ortidagi fon xiralashib ko'rinadi.
 * To'q bo'lim (hero) ustida to'q shisha va oq matn, och bo'limlar ustida och
 * shisha va to'q matn. Holatni HeaderShell `data-tone` / `data-glass` /
 * `data-scrolled` atributlari orqali belgilaydi; quyidagi `group-data-[...]`
 * klasslari shu holatlarga mos ko'rinishni beradi.
 */
const glassBar = [
  "pointer-events-auto relative mx-auto flex h-16 max-w-[78rem] items-center gap-2 overflow-hidden rounded-2xl border px-2.5 sm:gap-8 sm:px-5",
  "backdrop-blur-xl backdrop-saturate-150",
  "transition-[background-color,border-color,box-shadow,height] duration-300",
  "border-white/15 bg-white/[0.07] shadow-[inset_0_1px_0_rgb(255_255_255/0.16),0_12px_32px_-16px_rgb(0_0_0/0.65)]",
  "group-data-[glass=tinted]/header:bg-ink/65",
  "group-data-[glass=light]/header:border-brand-200/60 group-data-[glass=light]/header:bg-white/65 group-data-[glass=light]/header:shadow-[inset_0_1px_0_rgb(255_255_255/0.95),0_16px_36px_-20px_rgb(76_29_149/0.4)]",
  "group-data-[scrolled=true]/header:h-14",
].join(" ");

const navLink = [
  "rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
  "text-white/75 hover:bg-white/10 hover:text-white",
  "group-data-[tone=light]/header:text-ink/75 group-data-[tone=light]/header:hover:bg-brand-600/8 group-data-[tone=light]/header:hover:text-brand-700",
].join(" ");

const languageList = [
  "flex items-center rounded-xl p-0.5 text-xs font-semibold ring-1 transition-colors ring-inset",
  "bg-white/10 ring-white/15",
  "group-data-[tone=light]/header:bg-brand-600/8 group-data-[tone=light]/header:ring-brand-200/70",
].join(" ");

const languageLink =
  "block rounded-[0.625rem] px-1.5 py-1.5 transition-colors sm:px-2.5";

const languageCurrent = [
  "bg-white text-ink",
  "group-data-[tone=light]/header:bg-brand-600 group-data-[tone=light]/header:text-white",
].join(" ");

const languageOther = [
  "text-white/65 hover:text-white",
  "group-data-[tone=light]/header:text-brand-700/70 group-data-[tone=light]/header:hover:text-brand-700",
].join(" ");

export function SiteHeader({ lang, nav }: SiteHeaderProps) {
  const links = [
    { href: "#features", label: nav.features },
    { href: "#modules", label: nav.modules },
    { href: "#pricing", label: nav.pricing },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <HeaderShell className="group/header pointer-events-none fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-5 sm:pt-4">
      <div className={glassBar}>
        <Link href={`/${lang}`} className="relative shrink-0">
          {/* Ikki logo ustma-ust: fon rangiga qarab biri ko'rinadi. */}
          <Logo
            background="dark"
            eager
            className="h-8 w-auto transition-opacity duration-300 group-data-[tone=light]/header:opacity-0 sm:h-9"
          />
          <Logo
            background="light"
            decorative
            className="absolute inset-0 h-8 w-auto opacity-0 transition-opacity duration-300 group-data-[tone=light]/header:opacity-100 sm:h-9"
          />
        </Link>

        <nav aria-label={nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <ButtonLink
            href="#demo"
            size="sm"
            arrow
            className="max-sm:h-9 max-sm:px-3 max-sm:text-[0.8125rem] sm:px-5 max-sm:[&>svg]:hidden"
          >
            {nav.cta}
          </ButtonLink>
        </div>

        <ScrollProgress className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-300 group-data-[tone=light]/header:bg-brand-600" />
      </div>
    </HeaderShell>
  );
}

function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className={languageList}>
        {locales.map((locale) => {
          const current = locale === lang;

          return (
            <li key={locale}>
              {/* `scroll={false}`: til almashganda sahifa o'z joyida qoladi. */}
              <Link
                href={`/${locale}`}
                scroll={false}
                hrefLang={locale}
                lang={locale}
                title={localeNames[locale].full}
                aria-current={current ? "true" : undefined}
                className={`${languageLink} ${current ? languageCurrent : languageOther}`}
              >
                {localeNames[locale].short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
