import type { Dictionary } from "@/content/dictionaries";
import { demoPlans } from "@/content/demo";
import type { Locale } from "@/content/i18n";
import { localize } from "@/content/typography";
import { ButtonLink } from "../button-link";
import { Icon } from "../icon";
import { Reveal, RevealItem } from "../motion/reveal";
import { Badge } from "../section-heading";

type PricingProps = {
  lang: Locale;
  pricing: Dictionary["pricing"];
};

const STAGGER = 0.1;

// Tariflar va narxlar to'liq demo — content/demo.ts.
export function Pricing({ lang, pricing }: PricingProps) {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] xl:items-center xl:gap-14">
        <Reveal>
          <Badge icon="tag">{pricing.eyebrow}</Badge>
          <h2 className="display mt-5 text-[clamp(1.9rem,4vw,3rem)] text-ink">
            {pricing.titleStart}{" "}
            <span className="text-brand-600">{pricing.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-body">
            {pricing.lead}
          </p>
        </Reveal>

        <ul className="grid items-stretch gap-5 md:grid-cols-3">
          {demoPlans.map((plan, index) => (
            <RevealItem
              key={plan.id}
              delay={index * STAGGER}
              className={`relative flex flex-col rounded-3xl bg-white p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 sm:p-7 ${
                plan.highlighted
                  ? "shadow-float ring-2 ring-brand-500 md:-my-3 md:py-10"
                  : "shadow-card ring-1 ring-line hover:shadow-float"
              }`}
            >
              {plan.highlighted && (
                <p className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-[0_8px_18px_-8px_rgb(109_40_217/0.8)]">
                  <Icon name="crown" className="size-3.5" />
                  {pricing.popular}
                </p>
              )}

              <h3 className="display text-[1.4rem] text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-body">
                {localize(plan.tagline, lang)}
              </p>

              <p className="mt-6 flex min-h-11 flex-wrap items-baseline gap-x-2 text-ink">
                {plan.price ? (
                  <>
                    <span className="display text-[2rem]">{plan.price}</span>
                    <span className="text-sm text-body">
                      {pricing.currency} / {pricing.perMonth}
                    </span>
                  </>
                ) : (
                  <span className="display text-[1.5rem]">
                    {plan.priceLabel && localize(plan.priceLabel, lang)}
                  </span>
                )}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-[0.9375rem] text-ink/85">
                {localize(plan.features, lang).map((feature) => (
                  <li key={feature} className="flex gap-3 leading-snug">
                    <Icon
                      name="check"
                      strokeWidth={2.75}
                      className="mt-0.5 size-4 shrink-0 text-brand-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#demo"
                arrow
                variant={plan.highlighted ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {plan.price ? pricing.choose : pricing.contact}
              </ButtonLink>
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
