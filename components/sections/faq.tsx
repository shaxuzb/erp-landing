import type { Dictionary } from "@/content/dictionaries";
import { AccentTitle } from "../accent-title";
import { FaqList } from "../faq-list";
import { Reveal } from "../motion/reveal";
import { SectionHeading } from "../section-heading";

export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section id="faq" className="soft-bg py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <SectionHeading
          icon="help"
          eyebrow={faq.eyebrow}
          title={<AccentTitle title={faq.title} accent={faq.titleAccent} />}
        />
        <Reveal delay={0.1}>
          <FaqList items={faq.items} />
        </Reveal>
      </div>
    </section>
  );
}
