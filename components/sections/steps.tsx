import type { Dictionary } from "@/content/dictionaries";
import { AccentTitle } from "../accent-title";
import { GrowBar, RevealItem } from "../motion/reveal";
import { SectionHeading } from "../section-heading";

const STAGGER = 0.15;

export function Steps({ steps }: { steps: Dictionary["steps"] }) {
  return (
    <section id="start" className="soft-bg py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          icon="zap"
          eyebrow={steps.eyebrow}
          title={<AccentTitle title={steps.title} accent={steps.titleAccent} />}
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.items.map((step, index) => (
            <RevealItem
              key={step.title}
              delay={index * STAGGER}
              className="card relative p-6 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="display grid size-14 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-2xl text-white shadow-[0_10px_24px_-10px_rgb(109_40_217/0.8)]">
                  {index + 1}
                </span>
                <GrowBar
                  delay={0.35 + index * STAGGER}
                  className="block h-0.5 flex-1 rounded-full bg-linear-to-r from-brand-300 to-brand-100"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-pretty text-body">
                {step.text}
              </p>
            </RevealItem>
          ))}
        </ol>
      </div>
    </section>
  );
}
