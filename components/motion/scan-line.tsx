"use client";

import * as m from "motion/react-m";

type ScanLineProps = {
  /** Chiziq necha piksel pastga tushib qaytadi. */
  travel: number;
  className?: string;
};

/** Face ID ramkasi ichida yuqoridan pastga yurib turadigan skaner chizig'i. */
export function ScanLine({ travel, className }: ScanLineProps) {
  return (
    <m.span
      aria-hidden="true"
      className={className}
      animate={{ y: [0, travel, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
