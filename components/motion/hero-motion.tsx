"use client";

import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { EASE_OUT } from "./reveal";

// Sahifa shuncha piksel aylantirilguncha ekran qiyalikdan to'g'rilanib boradi.
const SCROLL_RANGE = [0, 700];

type HeroScreenProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Hero'dagi mahsulot ekrani: sahifa aylantirilganda qiyalikdan asta
 * to'g'rilanib, yuqoriga siljiydi. Yuklanishdagi paydo bo'lish CSS'da
 * (`animate-rise`) — skrinshot sahifadagi eng katta rasm, u JavaScript
 * yuklanishini kutib yashirin turmasligi kerak.
 */
export function HeroScreen({ children, className }: HeroScreenProps) {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rotateY = useTransform(scrollY, SCROLL_RANGE, [-8, -2]);
  const rotateX = useTransform(scrollY, SCROLL_RANGE, [3, 0]);
  const y = useTransform(scrollY, SCROLL_RANGE, [0, -36]);

  return (
    <div className={className}>
      <m.div
        className="origin-left"
        style={reducedMotion ? undefined : { rotateY, rotateX, y }}
      >
        {children}
      </m.div>
    </div>
  );
}

type FloatProps = {
  children: ReactNode;
  /** Joylashuv klasslari (absolute, top/left va h.k.). */
  className?: string;
  /** Nechanchi karta: paydo bo'lish navbati va suzish fazasi shunga bog'liq. */
  order?: number;
};

const FLOAT_DISTANCE = 9;
const FLOAT_PERIOD = 6;
const ENTER_DELAY = 0.9;
const ENTER_STAGGER = 0.14;
const PHASE_SHIFT = 1.3;

/** Ekran ustida asta suzib turadigan karta. */
export function Float({ children, className, order = 0 }: FloatProps) {
  return (
    <m.div
      data-reveal=""
      aria-hidden="true"
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: EASE_OUT,
        delay: ENTER_DELAY + order * ENTER_STAGGER,
      }}
    >
      <m.div
        animate={{ y: [0, -FLOAT_DISTANCE, 0] }}
        transition={{
          duration: FLOAT_PERIOD,
          repeat: Infinity,
          ease: "easeInOut",
          delay: order * PHASE_SHIFT,
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
}
