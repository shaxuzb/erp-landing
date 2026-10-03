import type { Dictionary } from "@/content/dictionaries";
import { Icon, type IconName } from "../icon";
import { Reveal } from "../motion/reveal";

const icons: IconName[] = ["store", "globe", "monitor", "shield"];

export function TrustBar({ trust }: { trust: Dictionary["trust"] }) {
  return (
    <section
      aria-label={trust.label}
      className="relative z-10 flow-root bg-paper"
    >
      <Reveal className="container-page -mt-12">
        <ul className="card grid divide-y divide-line shadow-float sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {trust.items.map((item, index) => (
            <li
              key={item.title}
              className="flex items-center gap-4 px-6 py-5 sm:py-7 lg:px-7"
            >
              <span className="icon-tile size-14">
                <Icon name={icons[index] ?? "check"} className="size-6" />
              </span>
              <p>
                <span className="display block text-[1.6rem] text-ink">
                  {item.value}{" "}
                  <span className="text-brand-600">{item.title}</span>
                </span>
                <span className="mt-1 block text-sm leading-snug text-body">
                  {item.text}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
