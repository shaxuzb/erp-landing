"use client";

import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

const DASH = 5;
const GAP = 7;
const FLOW_PERIOD = 1.3;

type Point = readonly [x: number, y: number];

type SystemLinksProps = {
  /** Sxema to'ri o'lchami; nuqtalar shu birliklarda beriladi. */
  grid: { columns: number; rows: number };
  hub: Point;
  spokes: readonly Point[];
  className?: string;
};

/**
 * Sxemadagi bog'lovchi chiziqlar: markazdagi Daqiq'dan har bir bo'limga qarab
 * "oqib" turadi. Kartalar chiziqlar ustida turadi, shuning uchun chiziqlar
 * faqat kartalar orasidagi bo'shliqda ko'rinadi.
 */
export function SystemLinks({
  grid,
  hub,
  spokes,
  className,
}: SystemLinksProps) {
  const reducedMotion = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${grid.columns} ${grid.rows}`}
      preserveAspectRatio="none"
      className={className}
    >
      {spokes.map(([x, y]) => (
        <m.line
          key={`${x}-${y}`}
          x1={hub[0]}
          y1={hub[1]}
          x2={x}
          y2={y}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${DASH} ${GAP}`}
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={
            reducedMotion ? undefined : { strokeDashoffset: [0, -(DASH + GAP)] }
          }
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            strokeDashoffset: {
              duration: FLOW_PERIOD,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}
    </svg>
  );
}

type PulseProps = {
  className?: string;
  /** Halqa necha barobargacha kengayadi. */
  spread?: number;
};

/** Markaz atrofida tarqalib turadigan halqa. */
export function Pulse({ className, spread = 1.9 }: PulseProps) {
  return (
    <m.span
      aria-hidden="true"
      className={className}
      animate={{ scale: [1, spread], opacity: [0.55, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
    />
  );
}
