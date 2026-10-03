"use client";

import * as m from "motion/react-m";
import { useId, useState } from "react";
import { Icon } from "./icon";
import { EASE_OUT } from "./motion/reveal";

type FaqListProps = {
  items: { q: string; a: string }[];
};

// Javoblar yopiq holatda ham sahifada qoladi (qidiruv tizimlari uchun),
// faqat balandligi nolga tushadi.
export function FaqList({ items }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <ul className="space-y-3">
      {items.map((item, index) => {
        const open = index === openIndex;
        const buttonId = `${id}-question-${index}`;
        const panelId = `${id}-answer-${index}`;

        return (
          <li
            key={item.q}
            className={`card px-5 transition-shadow duration-300 sm:px-7 ${
              open ? "shadow-float" : ""
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-semibold text-ink transition-colors hover:text-brand-700"
              >
                {item.q}
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl transition-[rotate,background-color,color] duration-300 ${
                    open
                      ? "rotate-45 bg-brand-600 text-white"
                      : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <Icon name="plus" className="size-4" />
                </span>
              </button>
            </h3>
            <m.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              data-collapse=""
              inert={!open}
              className="overflow-hidden"
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
            >
              <p className="max-w-2xl pb-6 leading-relaxed text-pretty text-body">
                {item.a}
              </p>
            </m.div>
          </li>
        );
      })}
    </ul>
  );
}
