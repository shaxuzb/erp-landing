import type { ReactNode } from "react";
import { Icon, type IconName } from "./icon";
import { Reveal } from "./motion/reveal";

type BadgeProps = {
  children: ReactNode;
  icon?: IconName;
  className?: string;
};

/** Sarlavha ustidagi kichik belgi. */
export function Badge({ children, icon = "star", className = "" }: BadgeProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-brand-700 ring-1 ring-brand-200/80 ring-inset ${className}`}
    >
      <Icon name={icon} className="size-3.5" />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  icon?: IconName;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  icon,
  align = "start",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <Badge icon={icon}>{eyebrow}</Badge>
      <h2 className="display mt-5 text-[clamp(1.9rem,4vw,3.1rem)] text-ink">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-body">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
