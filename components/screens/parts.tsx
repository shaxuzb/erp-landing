import type { ReactNode } from "react";

/*
 * Chizilgan ekran parchalari uchun umumiy qismlar. Ranglar logo binafshasi
 * oilasidan; qizil faqat xavf belgisi uchun.
 */

/** Parcha foni: och binafsha panel. Ekran o'quvchilar uchun yashirin. */
export function Panel({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative rounded-3xl bg-linear-to-br from-brand-100 via-brand-50 to-white p-3 ring-1 ring-brand-200/60 select-none sm:p-5"
    >
      {children}
    </div>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-4 shadow-card ring-1 ring-line/70 ${className}`}
    >
      {children}
    </div>
  );
}

const tagTones = {
  danger: "bg-rose-50 text-rose-700",
  warning: "bg-brand-100 text-brand-800",
  info: "bg-brand-50 text-brand-600",
  success: "bg-brand-600 text-white",
  accent: "bg-brand-100 text-brand-700",
};

export type TagTone = keyof typeof tagTones;

export function Tag({
  tone,
  children,
}: {
  tone: TagTone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-block rounded-md px-2 py-0.5 text-2xs font-medium whitespace-nowrap ${tagTones[tone]}`}
    >
      {children}
    </span>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold text-ink">{children}</p>;
}

/** Xodim ismi bosh harflari yozilgan doira. */
export function Avatar({
  initials,
  className = "size-7 text-2xs",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-400 to-brand-700 font-semibold text-white ${className}`}
    >
      {initials}
    </span>
  );
}
