"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const FIRST_NUMBER = /\d[\d\s.]*\d|\d/;
const THOUSANDS = /\B(?=(\d{3})+(?!\d))/g;
const DURATION = 1.6;
const EASE = [0.16, 1, 0.3, 1] as const;

type CountUpProps = {
  /** Tayyor matn: "1 200+", "99.9%", "−70%". Ichidagi birinchi son sanaladi. */
  value: string;
  className?: string;
};

/**
 * Ko'ringanda noldan o'z qiymatigacha sanab chiqadigan son. Serverda va
 * JavaScript'siz to'liq qiymat turadi. Kasr ko'rinishidagi qiymatlar
 * ("24/7") sanalmaydi.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    const raw = value.includes("/")
      ? undefined
      : value.match(FIRST_NUMBER)?.[0];
    if (!node || !raw || !inView || reducedMotion) return;

    const target = Number(raw.replace(/\s/g, ""));
    const decimals = raw.split(".")[1]?.length ?? 0;
    const grouped = /\s/.test(raw);

    const format = (current: number) => {
      const fixed = current.toFixed(decimals);
      return grouped ? fixed.replace(THOUSANDS, " ") : fixed;
    };

    const controls = animate(0, target, {
      duration: DURATION,
      ease: EASE,
      onUpdate: (current) => {
        node.textContent = value.replace(raw, format(current));
      },
      onComplete: () => {
        node.textContent = value;
      },
    });

    return () => controls.stop();
  }, [value, inView, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
