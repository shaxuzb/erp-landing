import type { Dictionary } from "@/content/dictionaries";
import { demoProofHeading, demoStats, demoTestimonials } from "@/content/demo";
import type { Locale } from "@/content/i18n";
import { localize } from "@/content/typography";
import { Icon, type IconName } from "../icon";
import { CountUp } from "../motion/count-up";
import { Reveal, RevealItem } from "../motion/reveal";
import { Badge } from "../section-heading";

type ProofProps = {
  lang: Locale;
  proof: Dictionary["proof"];
};

const STAGGER = 0.1;
const RATING = 5;

const statIcons: IconName[] = ["users", "store", "shield", "clock"];

// Bu bo'limdagi raqamlar va mijoz fikrlari to'liq demo — content/demo.ts.
export function Proof({ lang, proof }: ProofProps) {
  const heading = localize(demoProofHeading, lang);

  return (
    <section className="soft-bg py-20 sm:py-28">
      <div className="container-page grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] xl:items-center xl:gap-14">
        <Reveal>
          <Badge>{proof.eyebrow}</Badge>
          <h2 className="display mt-5 text-[clamp(1.9rem,4vw,3rem)] text-ink">
            {heading.start}{" "}
            <span className="text-brand-600">{heading.accent}</span>{" "}
            {heading.end}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-body">
            {proof.lead}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6">
            {demoStats.map((stat, index) => (
              <div key={stat.value} className="flex items-center gap-3">
                <span className="icon-tile size-12 bg-white bg-none shadow-card">
                  <Icon name={statIcons[index] ?? "check"} className="size-5" />
                </span>
                <div className="flex min-w-0 flex-col-reverse">
                  <dt className="text-2xs leading-snug text-body">
                    {localize(stat.label, lang)}
                  </dt>
                  <dd className="display text-[1.35rem] text-ink">
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <ul className="grid gap-5 md:grid-cols-3">
          {demoTestimonials.map((testimonial, index) => (
            <RevealItem
              key={testimonial.name}
              delay={index * STAGGER}
              className="card flex flex-col p-6 transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="flex items-center justify-between">
                <span className="icon-tile size-11 rounded-xl">
                  <Icon name="quote" className="size-5" />
                </span>
                <span
                  aria-hidden="true"
                  className="flex gap-0.5 text-base text-amber-400"
                >
                  {Array.from({ length: RATING }, (_, star) => (
                    <Icon key={star} name="star" stroke="none" />
                  ))}
                </span>
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-pretty text-ink/85">
                “{localize(testimonial.quote, lang)}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-400 to-brand-700 text-sm font-semibold text-white"
                >
                  {initials(testimonial.name)}
                </span>
                <p className="min-w-0 text-[0.8125rem] leading-snug text-body">
                  <span className="block text-sm font-semibold text-ink">
                    {testimonial.name}
                  </span>
                  {localize(testimonial.role, lang)}
                  <span className="block">{testimonial.company}</span>
                </p>
              </div>
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");
