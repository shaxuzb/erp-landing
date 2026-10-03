import type { Dictionary } from "@/content/dictionaries";
import { demoContact } from "@/content/demo";
import { buildTelegramUrl } from "@/lib/demo-request";
import { AccentTitle } from "../accent-title";
import { DemoForm } from "../demo-form";
import { Icon } from "../icon";
import { Reveal } from "../motion/reveal";
import { Badge } from "../section-heading";

const contactLink =
  "group inline-flex items-center gap-3.5 text-lg font-semibold text-ink hover:text-brand-700";

const contactTile =
  "icon-tile size-12 bg-white bg-none shadow-card transition-colors group-hover:bg-brand-600 group-hover:text-white";

// Maketdagi yakuniy chaqiriq bo'limi; o'ng tomonda noutbuk o'rnida forma.
export function DemoRequestSection({ form }: { form: Dictionary["form"] }) {
  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="soft-bg grid gap-12 rounded-[2rem] p-6 ring-1 ring-brand-200/60 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-center lg:gap-16 lg:p-14">
          <Reveal>
            <Badge>{form.eyebrow}</Badge>
            <h2 className="display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] text-ink">
              <AccentTitle title={form.title} accent={form.titleAccent} />
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-body">
              {form.lead}
            </p>

            <ul className="mt-8 space-y-3.5">
              {form.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 font-medium text-ink"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Icon name="check" className="size-3.5" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
              {/* Formani to'ldirmasdan to'g'ridan-to'g'ri yozish: Telegramda
                  salomlashuv matni tayyor turadi. */}
              <a
                href={buildTelegramUrl(form.message.greeting)}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <span className={contactTile}>
                  <Icon name="send" className="size-5" />
                </span>
                {form.writeDirectly}
              </a>
              <a href={demoContact.phone.href} className={contactLink}>
                <span className={contactTile}>
                  <Icon name="phone" className="size-5" />
                </span>
                <span className="num">{demoContact.phone.display}</span>
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="rounded-[1.75rem] bg-white p-6 shadow-float ring-1 ring-line sm:p-8"
          >
            <DemoForm form={form} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
