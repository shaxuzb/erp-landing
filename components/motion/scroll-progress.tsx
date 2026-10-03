"use client";

import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

/** Sarlavha ostidagi chiziq: sahifa qancha o'qilganini ko'rsatadi. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return <m.span aria-hidden="true" className={className} style={{ scaleX }} />;
}
