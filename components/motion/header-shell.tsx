"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

// Navbar ostida qaysi bo'lim turganini shu balandlikdagi nuqta bo'yicha aniqlaymiz.
const PROBE_Y = 40;
const SCROLLED_AFTER = 24;

// Holat React state'da emas, to'g'ridan-to'g'ri atributda: skrol paytida
// qayta render bo'lmaydi, ko'rinishni CSS (`group-data-[...]`) almashtiradi.
const syncHeader = (header: HTMLElement) => {
  const darkSections = document.querySelectorAll('[data-header-tone="dark"]');
  const overDark = Array.from(darkSections).some((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    return top <= PROBE_Y && bottom > PROBE_Y;
  });

  const scrolled = window.scrollY > SCROLLED_AFTER;

  header.dataset.tone = overDark ? "dark" : "light";
  header.dataset.scrolled = String(scrolled);
  // To'q bo'lim ichida ham navbar ostidan oq narsa (noutbuk ekrani) o'tadi:
  // skrol boshlangach shisha quyuqlashadi, aks holda oq matn ko'rinmay qoladi.
  header.dataset.glass = !overDark ? "light" : scrolled ? "tinted" : "clear";
};

type HeaderShellProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Shisha navbar qobig'i. Ostidagi bo'limga qarab atributlarni almashtiradi:
 * - `data-tone`: matn rangi — to'q bo'lim (`data-header-tone="dark"`) ustida
 *   oq, och bo'limlar ustida to'q;
 * - `data-glass`: shisha foni — `clear` (sahifa boshida), `tinted` (to'q
 *   bo'lim ichida skrol qilinganda), `light` (och bo'limlar ustida);
 * - `data-scrolled`: skrol boshlangach navbar biroz ixchamlashadi.
 */
export function HeaderShell({ children, className }: HeaderShellProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (ref.current) syncHeader(ref.current);
  });

  useEffect(() => {
    const header = ref.current;
    if (!header) return;

    const sync = () => syncHeader(header);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <header
      ref={ref}
      data-tone="dark"
      data-scrolled="false"
      data-glass="clear"
      className={className}
    >
      {children}
    </header>
  );
}
