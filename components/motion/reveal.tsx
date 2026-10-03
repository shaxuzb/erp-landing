"use client";

import * as m from "motion/react-m";
import type { CSSProperties, ReactNode } from "react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const REVEAL_DISTANCE = 28;
const REVEAL_DURATION = 0.7;

// `data-reveal`: JavaScript o'chiq bo'lsa, layout'dagi <noscript> uslubi shu
// belgi bo'yicha yashirin elementlarni ko'rsatadi.
const revealProps = (delay: number) => ({
  "data-reveal": "",
  initial: { opacity: 0, y: REVEAL_DISTANCE },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: REVEAL_DURATION, ease: EASE_OUT, delay },
});

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Soniyalarda. Yonma-yon turgan elementlar ketma-ket ochilishi uchun. */
  delay?: number;
};

/** Ko'rinish maydoniga kirganda pastdan ko'tarilib ochiladigan blok. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.div className={className} {...revealProps(delay)}>
      {children}
    </m.div>
  );
}

/** `Reveal` ning ro'yxat elementi (<li>) varianti. */
export function RevealItem({ children, className, delay = 0 }: RevealProps) {
  return (
    <m.li className={className} {...revealProps(delay)}>
      {children}
    </m.li>
  );
}

type GrowBarProps = {
  /** Qaysi o'q bo'yicha o'sadi: `x` — chapdan o'ngga, `y` — pastdan tepaga. */
  axis?: "x" | "y";
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/** Diagramma ustuni yoki progress chizig'i: ko'ringanda noldan o'sib chiqadi. */
export function GrowBar({
  axis = "x",
  delay = 0,
  className,
  style,
}: GrowBarProps) {
  return (
    <m.span
      data-reveal=""
      className={className}
      style={{ ...style, originX: 0, originY: 1 }}
      initial={axis === "x" ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    />
  );
}
