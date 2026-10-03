import Image from "next/image";
import type { Dictionary } from "@/content/dictionaries";
import { demoScreens } from "@/content/demo";
import dashboard from "@/public/screens/finance-dashboard.png";
import { ButtonLink } from "../button-link";
import { Icon, type IconName } from "../icon";
import { Float, HeroScreen } from "../motion/hero-motion";

type HeroProps = {
  hero: Dictionary["hero"];
  screens: Dictionary["screens"];
};

type FloatCard = {
  icon: IconName;
  label: string;
  value: string;
  helper: string;
};

// Tor ekranda kartalar noutbukdan chiqib ketmasligi uchun oxirgilari yashiriladi.
const floatCardVisibility = [
  undefined,
  undefined,
  "hidden md:block",
  "hidden xl:block",
];

// Matn va noutbuk CSS animatsiyasi bilan ochiladi (`animate-rise`) — sarlavha
// va skrinshot JavaScript yuklanishini kutmasdan ko'rinsin. Noutbukning
// skroldagi harakati va suzuvchi kartalar Motion'da.
export function Hero({ hero, screens }: HeroProps) {
  // Kartalardagi qiymatlar noutbukdagi skrinshot bilan bir xil.
  const values = demoScreens.heroCards;
  const labels = screens.finance.kpis;

  const cards: FloatCard[] = [
    {
      icon: "cart",
      label: labels.sales.label,
      value: values.sales.value,
      helper: `${values.sales.count} ${labels.sales.helper}`,
    },
    {
      icon: "wallet",
      label: labels.cash.label,
      value: values.cash.value,
      helper: labels.cash.helper,
    },
    {
      icon: "users",
      label: labels.receivable.label,
      value: values.receivable.value,
      helper: `${values.receivable.overdue} ${labels.receivable.helper}`,
    },
    {
      icon: "package",
      label: labels.stock.label,
      value: values.stock.value,
      helper: `${values.stock.count} ${labels.stock.helper}`,
    },
  ];

  return (
    // `data-header-tone`: navbar shu bo'lim ustida to'q shisha ko'rinishida bo'ladi.
    // Yuqori bo'shliq navbar balandligini ham o'z ichiga oladi.
    <section
      data-header-tone="dark"
      className="hero-bg relative overflow-hidden text-white"
    >
      <HeroWaves />

      <div className="container-page relative grid items-center gap-16 pt-28 pb-36 sm:pt-36 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-10 lg:pt-44 lg:pb-48">
        <div className="max-w-xl lg:max-w-none">
          <p className="animate-rise inline-flex items-center gap-2.5 rounded-full bg-white/8 px-4 py-2 text-[0.8125rem] font-medium text-white/90 ring-1 ring-white/15 ring-inset">
            <Icon
              name="star"
              stroke="none"
              className="size-3.5 text-brand-300"
            />
            {hero.badge}
          </p>

          <h1 className="display animate-rise mt-7 text-[clamp(2.35rem,5.2vw,4.1rem)] [animation-delay:80ms]">
            {hero.titleStart}{" "}
            <span className="inline-block bg-linear-to-r from-brand-300 to-[#e9e2ff] bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="animate-rise mt-7 max-w-[34rem] text-lg leading-relaxed text-pretty text-white/75 [animation-delay:160ms] sm:text-xl">
            {hero.lead}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
            <ButtonLink href="#demo" size="lg" arrow>
              {hero.primary}
            </ButtonLink>
            <ButtonLink href="#features" size="lg" variant="ghostOnDark">
              {hero.secondary}
            </ButtonLink>
          </div>

          <p className="animate-rise mt-8 flex items-center gap-2.5 text-sm text-white/65 [animation-delay:320ms]">
            <Icon
              name="check"
              strokeWidth={3}
              className="size-4 text-brand-300"
            />
            {hero.note}
          </p>
        </div>

        <div className="relative">
          <HeroScreen className="animate-rise w-[150%] [animation-delay:200ms] sm:w-[108%] lg:w-full lg:[perspective:1800px]">
            {/* Noutbuk: ekran ramkasi va tagligi. Ichida ilovaning haqiqiy
                skrinshoti — public/screens/finance-dashboard.png. */}
            <div className="rounded-[3.6%/6%] bg-[#0c0717] p-[1.4%] shadow-screen ring-1 ring-white/15">
              <Image
                src={dashboard}
                alt={hero.screenAlt}
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 44rem, (min-width: 640px) 108vw, 150vw"
                className="block h-auto w-full rounded-[2.4%/4.1%]"
              />
            </div>
            <div
              aria-hidden="true"
              className="-mx-[5%] h-[clamp(0.5rem,1.6vw,1rem)] rounded-t-sm rounded-b-[2rem] bg-linear-to-b from-[#d9d0f0] to-[#8d80b3]"
            >
              <span className="mx-auto block h-[35%] w-[16%] rounded-b-lg bg-[#a99ccc]" />
            </div>
          </HeroScreen>

          <ul
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-14 flex gap-3 lg:-left-10"
          >
            {cards.map((card, index) => (
              <li key={card.label} className={floatCardVisibility[index]}>
                <Float order={index}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 text-ink shadow-float">
                    <span className="icon-tile size-10 rounded-xl">
                      <Icon name={card.icon} className="size-5" />
                    </span>
                    <span>
                      <span className="block text-2xs whitespace-nowrap text-muted">
                        {card.label}
                      </span>
                      <span className="num block text-[0.8125rem] leading-tight font-semibold whitespace-nowrap">
                        {card.value}
                      </span>
                      <span className="block text-2xs font-medium whitespace-nowrap text-brand-600">
                        {card.helper}
                      </span>
                    </span>
                  </div>
                </Float>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="container-page absolute inset-x-0 bottom-6 text-2xs text-white/40">
        {screens.illustrative}
      </p>
    </section>
  );
}

// Fon ortidagi yorug'lik to'lqinlari — maketdagi kabi.
function HeroWaves() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      className="absolute inset-0 size-full opacity-70"
    >
      <defs>
        <linearGradient id="hero-wave" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0" />
          <stop offset="0.5" stopColor="#c0aefb" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hero-wave)" strokeWidth="1.5">
        <path d="M-80 640 C 260 420, 620 760, 980 520 S 1420 300, 1560 380" />
        <path d="M-80 700 C 300 500, 640 820, 1020 600 S 1440 380, 1560 470" />
        <path d="M-80 120 C 280 260, 560 20, 900 150 S 1380 300, 1560 160" />
        <path d="M-80 60 C 300 200, 600 -40, 940 90 S 1400 240, 1560 100" />
      </g>
    </svg>
  );
}
