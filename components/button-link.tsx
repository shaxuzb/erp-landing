import type { ReactNode } from "react";
import { Icon } from "./icon";

const variants = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_20px_-8px_rgb(109_40_217/0.7)] hover:bg-brand-500 active:bg-brand-700",
  light: "bg-white text-ink hover:bg-brand-50 active:bg-brand-100",
  ghostOnDark:
    "text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 active:bg-white/15",
  outline:
    "text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50 active:bg-brand-100",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-7 text-base",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
};

// Sahifadagi barcha tugmalar bo'lim havolalari (#demo va h.k.), shu sababli <a>.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center justify-center gap-2 rounded-[0.875rem] font-semibold whitespace-nowrap transition-[background-color,scale] duration-200 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <Icon
          name="arrowRight"
          className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
