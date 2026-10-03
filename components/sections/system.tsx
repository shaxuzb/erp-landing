import type { Dictionary } from "@/content/dictionaries";
import { demoResults } from "@/content/demo";
import type { Locale } from "@/content/i18n";
import { localize } from "@/content/typography";
import { AccentTitle } from "../accent-title";
import { ButtonLink } from "../button-link";
import { Icon, type IconName } from "../icon";
import { Logo } from "../logo";
import { CountUp } from "../motion/count-up";
import { Reveal, RevealItem } from "../motion/reveal";
import { Pulse, SystemLinks } from "../motion/system-links";
import { Badge } from "../section-heading";

type SystemSectionProps = {
  lang: Locale;
  system: Dictionary["system"];
  proof: Dictionary["proof"];
};

type Group = Dictionary["system"]["groups"][number];

const groupIcons: Record<string, IconName> = {
  sales: "cart",
  purchase: "package",
  finance: "banknote",
  reports: "chart",
  control: "shield",
  people: "mapPin",
  store: "tag",
};

const MODULE_COLUMNS = 4;
const STAGGER = 0.07;

const liftOnHover =
  "transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float";

export function SystemSection({ lang, system, proof }: SystemSectionProps) {
  return (
    <section id="modules" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h2 className="display text-[clamp(2.1rem,4.6vw,3.6rem)] text-ink">
            <AccentTitle title={system.heading} accent={system.headingAccent} />
          </h2>
          <div>
            <p className="eyebrow flex items-center gap-3 text-brand-600">
              <span aria-hidden="true" className="h-0.5 w-10 bg-current" />
              {system.eyebrow}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-pretty text-body">
              {system.lead}
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {system.groups.map((group, index) => (
            <RevealItem
              key={group.id}
              delay={(index % MODULE_COLUMNS) * STAGGER}
              className={`card flex flex-col p-6 ${liftOnHover}`}
            >
              <div className="flex items-center gap-4">
                <span className="icon-tile size-14">
                  <Icon
                    name={groupIcons[group.id] ?? "check"}
                    className="size-6"
                  />
                </span>
                <h3 className="text-lg leading-tight font-semibold text-ink">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-brand-50 px-2.5 py-1.5 text-[0.8125rem] leading-tight text-brand-900/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}

          <RevealItem
            delay={(system.groups.length % MODULE_COLUMNS) * STAGGER}
            className="flex flex-col justify-between gap-6 rounded-3xl bg-linear-to-br from-brand-500 to-brand-700 p-6 text-white shadow-float"
          >
            <div>
              <p className="display text-[1.4rem]">{system.ctaTitle}</p>
              <p className="mt-3 leading-relaxed text-white/85">
                {system.ctaText}
              </p>
            </div>
            <ButtonLink
              href="#demo"
              variant="light"
              arrow
              className="self-start"
            >
              {system.cta}
            </ButtonLink>
          </RevealItem>
        </ul>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
          <Reveal className="card soft-bg grid gap-10 p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] lg:items-center">
            <div>
              <Badge icon="link">{system.linkedBadge}</Badge>
              <h3 className="display mt-5 text-[clamp(1.5rem,2.4vw,1.9rem)] text-ink">
                {system.title}
              </h3>
              <p className="mt-4 leading-relaxed text-pretty text-body">
                {system.linkedText}
              </p>
              <ButtonLink href="#demo" arrow className="mt-7">
                {system.cta}
              </ButtonLink>
            </div>

            <LinkedDiagram system={system} />
          </Reveal>

          <Reveal delay={0.12} className="card p-6 sm:p-7">
            <Badge icon="chart">{proof.resultsBadge}</Badge>
            <h3 className="display mt-4 text-[1.5rem] text-ink">
              {proof.resultsTitle}
            </h3>
            {/* Natija raqamlari demo — content/demo.ts. */}
            <ul className="mt-5 space-y-3">
              {demoResults.map((result, index) => (
                <li
                  key={result.value}
                  className="rounded-2xl bg-brand-50/70 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="icon-tile size-10 rounded-xl bg-white bg-none shadow-card">
                      <Icon
                        name={resultIcons[index] ?? "check"}
                        className="size-5"
                      />
                    </span>
                    <p className="min-w-0 flex-1 text-sm leading-tight font-semibold text-ink">
                      {localize(result.title, lang)}
                    </p>
                    <CountUp
                      value={result.value}
                      className="display text-[1.5rem] text-brand-600"
                    />
                  </div>
                  <p className="mt-2.5 text-[0.8125rem] leading-snug text-body">
                    {localize(result.text, lang)}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const resultIcons: IconName[] = ["shield", "zap", "trendUp"];

// Sxema 6×3 to'rda: tepada bitta bo'lim, o'rtada Daqiq va ikki yonida
// bittadan, pastda ikkita. Koordinatalar har bir katak markazi.
const DIAGRAM_GRID = { columns: 6, rows: 3 };
const HUB = [3, 1.5] as const;

// `compact`: markaz yonidagi tor tugunlar — ikonka ustida, tavsifsiz.
const diagramNodes = [
  {
    id: "sales",
    point: [3, 0.5],
    compact: false,
    className: "sm:col-span-4 sm:col-start-2",
  },
  {
    id: "purchase",
    point: [1, 1.5],
    compact: true,
    className: "sm:col-span-2",
  },
  { id: "finance", point: [5, 1.5], compact: true, className: "sm:col-span-2" },
  {
    id: "people",
    point: [1.5, 2.5],
    compact: false,
    className: "sm:col-span-3",
  },
  {
    id: "reports",
    point: [4.5, 2.5],
    compact: false,
    className: "col-span-2 sm:col-span-3",
  },
] as const;

const NODE_DESCRIPTION_ITEMS = 3;
// Markaz ro'yxatda chap bo'limdan keyin turadi — to'rda o'rta qatorning o'rtasi.
const NODE_BEFORE_HUB = "purchase";

function LinkedDiagram({ system }: { system: Dictionary["system"] }) {
  const groupById = new Map(system.groups.map((group) => [group.id, group]));

  const cells = diagramNodes.flatMap((node) => {
    const group = groupById.get(node.id);
    const cell = group ? [{ ...node, group }] : [];
    return node.id === NODE_BEFORE_HUB ? [...cell, "hub" as const] : cell;
  });

  return (
    <div className="relative">
      <SystemLinks
        grid={DIAGRAM_GRID}
        hub={HUB}
        spokes={diagramNodes.map((node) => node.point)}
        className="absolute inset-0 hidden size-full text-brand-400 sm:block"
      />

      <ul className="relative grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-x-5 sm:gap-y-9">
        {cells.map((cell) =>
          cell === "hub" ? (
            <li
              key="hub"
              className="brand-dark relative order-first col-span-2 flex flex-col items-center justify-center rounded-2xl px-4 py-6 text-center text-white shadow-float sm:order-none"
            >
              <Pulse
                spread={1.14}
                className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-brand-400"
              />
              <Logo background="dark" className="h-9 w-auto" />
              <p className="mt-3 text-[0.8125rem] leading-snug font-medium text-white/85">
                {system.hubTitle} {system.hubText}
              </p>
            </li>
          ) : (
            <DiagramNode
              key={cell.id}
              group={cell.group}
              compact={cell.compact}
              className={cell.className}
            />
          ),
        )}
      </ul>
    </div>
  );
}

type DiagramNodeProps = {
  group: Group;
  compact: boolean;
  className: string;
};

function DiagramNode({ group, compact, className }: DiagramNodeProps) {
  return (
    <li
      className={`flex items-center gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-line ${
        compact ? "sm:flex-col sm:justify-center sm:gap-2 sm:text-center" : ""
      } ${className}`}
    >
      <span className="icon-tile size-11 rounded-xl">
        <Icon name={groupIcons[group.id] ?? "check"} className="size-5" />
      </span>
      <p className="min-w-0 text-2xs leading-snug text-muted">
        <span className="block text-sm leading-tight font-semibold text-ink">
          {group.title}
        </span>
        <span className={compact ? "hidden" : "hidden sm:line-clamp-2"}>
          {group.items.slice(0, NODE_DESCRIPTION_ITEMS).join(", ")}
        </span>
      </p>
    </li>
  );
}
