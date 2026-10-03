import type { ComponentType, ReactNode } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { AccentTitle } from "../accent-title";
import { Icon, type IconName } from "../icon";
import { Reveal, RevealItem } from "../motion/reveal";
import {
  MoneyFragment,
  SerialFragment,
  StockFragment,
} from "../screens/fragments";
import {
  AttendanceFragment,
  LocationFragment,
  TasksFragment,
} from "../screens/staff-fragments";
import { SectionHeading } from "../section-heading";

type PillarsProps = {
  pillars: Dictionary["pillars"];
  staff: Dictionary["staff"];
  screens: Dictionary["screens"];
};

type Visual = {
  icon: IconName;
  Fragment: ComponentType<{ screens: Dictionary["screens"] }>;
};

const pillarVisuals: Record<string, Visual> = {
  money: { icon: "wallet", Fragment: MoneyFragment },
  stock: { icon: "package", Fragment: StockFragment },
  serial: { icon: "scan", Fragment: SerialFragment },
};

const staffVisuals: Record<string, Visual> = {
  attendance: { icon: "scanFace", Fragment: AttendanceFragment },
  location: { icon: "mapPin", Fragment: LocationFragment },
  tasks: { icon: "kanban", Fragment: TasksFragment },
};

// Birinchi karta ("Pulingiz qayerda?") butun qatorni egallaydi.
const WIDE_PILLAR = 0;
const STAGGER = 0.12;

const liftOnHover =
  "transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float";

// Maketdagi "keng imkoniyatlar" kartalari: har bir kartada matn va ichida
// mahsulot ekranidan parcha. Oxirida xodimlar nazorati — uchta bo'limli keng blok.
export function Pillars({ pillars, staff, screens }: PillarsProps) {
  return (
    <section id="features" className="soft-bg py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={pillars.eyebrow}
          title={
            <AccentTitle title={pillars.title} accent={pillars.titleAccent} />
          }
          lead={pillars.lead}
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {pillars.items.map((pillar, index) => {
            const visual = pillarVisuals[pillar.id];
            const wide = index === WIDE_PILLAR;

            return (
              <RevealItem
                key={pillar.id}
                delay={wide ? 0 : ((index - 1) % 2) * STAGGER}
                className={`card min-w-0 p-5 sm:p-8 ${liftOnHover} ${
                  wide
                    ? "grid gap-8 lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12"
                    : "flex flex-col"
                }`}
              >
                <div>
                  <CardHeading
                    icon={visual?.icon ?? "check"}
                    title={pillar.question}
                    kicker={pillar.kicker}
                  />
                  <p className="mt-5 leading-relaxed text-pretty text-body">
                    {pillar.text}
                  </p>
                  <CheckList
                    points={pillar.points}
                    className={
                      wide
                        ? "mt-5 space-y-3"
                        : "mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2"
                    }
                  />
                  <DemoLink>{pillars.cta}</DemoLink>
                </div>

                <div
                  className={
                    wide ? "min-w-0" : "mt-7 flex flex-1 flex-col justify-end"
                  }
                >
                  {visual && <visual.Fragment screens={screens} />}
                </div>
              </RevealItem>
            );
          })}
        </ul>

        <Reveal className="card mt-6 p-5 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
            <CardHeading
              icon="users"
              title={staff.question}
              kicker={staff.kicker}
            />
            <p className="leading-relaxed text-pretty text-body">
              {staff.text}
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {staff.features.map((feature, index) => {
              const visual = staffVisuals[feature.id];

              return (
                <RevealItem
                  key={feature.id}
                  delay={index * STAGGER}
                  className="flex min-w-0 flex-col rounded-3xl bg-linear-to-br from-brand-100 via-brand-50 to-white p-4 ring-1 ring-brand-200/60 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-[0_8px_18px_-8px_rgb(109_40_217/0.8)]">
                      <Icon name={visual?.icon ?? "check"} className="size-5" />
                    </span>
                    <h4 className="display text-[1.25rem] text-ink">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-pretty text-body">
                    {feature.text}
                  </p>
                  <CheckList
                    points={feature.points}
                    className="mt-4 space-y-2.5"
                  />
                  <div className="mt-6 flex flex-1 flex-col justify-end">
                    {visual && <visual.Fragment screens={screens} />}
                  </div>
                </RevealItem>
              );
            })}
          </ul>

          <DemoLink>{pillars.cta}</DemoLink>
        </Reveal>

        <p className="mt-8 text-center text-2xs text-muted">
          {screens.illustrative}
        </p>
      </div>
    </section>
  );
}

type CardHeadingProps = {
  icon: IconName;
  title: string;
  kicker: string;
};

function CardHeading({ icon, title, kicker }: CardHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="icon-tile size-14">
        <Icon name={icon} className="size-6" />
      </span>
      <h3 className="display flex-1 text-[clamp(1.35rem,2.2vw,1.75rem)] text-ink">
        {title}
      </h3>
      <span className="hidden items-center gap-1.5 self-start rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-brand-700 ring-1 ring-brand-200/80 ring-inset sm:inline-flex">
        <Icon name="shield" className="size-3.5" />
        {kicker}
      </span>
    </div>
  );
}

function CheckList({
  points,
  className,
}: {
  points: string[];
  className: string;
}) {
  return (
    <ul className={className}>
      {points.map((point) => (
        <li
          key={point}
          className="flex gap-2.5 text-[0.9375rem] leading-snug text-ink"
        >
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
            <Icon name="check" className="size-3" strokeWidth={3} />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

function DemoLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="#demo"
      className="group mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-700 hover:text-brand-500"
    >
      {children}
      <Icon
        name="arrowRight"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}
