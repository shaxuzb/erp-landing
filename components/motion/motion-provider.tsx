"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

// Motion'ning faqat kerakli qismi yuklanadi (`m` komponentlari + domAnimation).
// `reducedMotion="user"`: tizimda "harakatni kamaytirish" yoqilgan bo'lsa,
// siljish animatsiyalari o'chadi, faqat shaffoflik qoladi.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
