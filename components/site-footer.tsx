import Link from "next/link";
import { telegramUrl, telegramUsername } from "@/content/contact";
import type { Dictionary } from "@/content/dictionaries";
import { demoContact } from "@/content/demo";
import { localeNames, locales, type Locale } from "@/content/i18n";
import { localize } from "@/content/typography";
import { Icon, type IconName } from "./icon";
import { Logo } from "./logo";

type SiteFooterProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
};

export function SiteFooter({ lang, nav, footer }: SiteFooterProps) {
  const links = [
    { href: "#features", label: nav.features },
    { href: "#modules", label: nav.modules },
    { href: "#pricing", label: nav.pricing },
    { href: "#faq", label: nav.faq },
    { href: "#demo", label: nav.cta },
  ];

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)_minmax(0,1.3fr)] md:gap-10">
        <div>
          <Logo background="light" className="h-11 w-auto" />
          <p className="mt-5 max-w-xs leading-relaxed text-body">
            {footer.tagline}
          </p>
        </div>

        <nav aria-label={footer.pageTitle}>
          <h2 className="text-base font-semibold text-ink">
            {footer.pageTitle}
          </h2>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body transition-colors hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-semibold text-ink">
            {footer.contactTitle}
          </h2>
          {/* Telegram haqiqiy (content/contact.ts); telefon, email va manzil
              demo — content/demo.ts. */}
          <ul className="mt-5 space-y-4">
            <ContactItem icon="send">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink hover:text-brand-700"
              >
                @{telegramUsername}
              </a>
              <span className="block text-sm text-muted">Telegram</span>
            </ContactItem>
            <ContactItem icon="phone">
              <a
                href={demoContact.phone.href}
                className="num font-semibold text-ink hover:text-brand-700"
              >
                {demoContact.phone.display}
              </a>
              <span className="block text-sm text-muted">
                {localize(demoContact.hours, lang)}
              </span>
            </ContactItem>
            <ContactItem icon="mail">
              <a
                href={`mailto:${demoContact.email}`}
                className="font-semibold text-ink hover:text-brand-700"
              >
                {demoContact.email}
              </a>
            </ContactItem>
            <ContactItem icon="mapPin">
              <address className="text-body not-italic">
                {localize(demoContact.address, lang)}
              </address>
            </ContactItem>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-ink">Daqiq</span>.{" "}
            {footer.rights}
          </p>
          <nav aria-label={footer.languageTitle}>
            <ul className="flex items-center gap-5">
              <li aria-hidden="true">
                <Icon name="globe" className="size-4" />
              </li>
              {locales.map((locale) => (
                <li key={locale}>
                  <Link
                    href={`/${locale}`}
                    scroll={false}
                    hrefLang={locale}
                    lang={locale}
                    aria-current={locale === lang ? "true" : undefined}
                    className={
                      locale === lang
                        ? "font-semibold text-brand-700"
                        : "transition-colors hover:text-brand-700"
                    }
                  >
                    {localeNames[locale].full}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: IconName;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="icon-tile size-11 rounded-xl">
        <Icon name={icon} className="size-5" />
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
