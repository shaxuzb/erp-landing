import Image from "next/image";
import lockupForDarkBackground from "@/public/brand/daqiqdark.png";
import lockupForLightBackground from "@/public/brand/daqiqlight.png";

// Logo faqat shu yerda turadi: egasi sifatli faylni berganda `public/brand/`
// dagi fayllar almashtiriladi, sahifaning qolgan qismi o'zgarmaydi.
const lockups = {
  dark: lockupForDarkBackground,
  light: lockupForLightBackground,
};

type LogoProps = {
  /** Logo qanday fon ustida turishi. */
  background: keyof typeof lockups;
  className?: string;
  /** Birinchi ekranda ko'rinadigan logo uchun: kechiktirmasdan yuklanadi. */
  eager?: boolean;
  /** Yonida boshqa logo turganda: ekran o'quvchi ikkinchisini o'qimaydi. */
  decorative?: boolean;
};

export function Logo({
  background,
  className,
  eager = false,
  decorative = false,
}: LogoProps) {
  return (
    <Image
      src={lockups[background]}
      alt={decorative ? "" : "Daqiq"}
      loading={eager ? "eager" : "lazy"}
      sizes="120px"
      className={className ?? "h-9 w-auto"}
    />
  );
}
