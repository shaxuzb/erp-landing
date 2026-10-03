import { notFound } from "next/navigation";
import { DemoRequestSection } from "@/components/sections/demo-request";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Pricing } from "@/components/sections/pricing";
import { Proof } from "@/components/sections/proof";
import { Steps } from "@/components/sections/steps";
import { SystemSection } from "@/components/sections/system";
import { TrustBar } from "@/components/sections/trust-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/i18n";

export default async function LandingPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dictionary = getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} nav={dictionary.nav} />
      <main>
        <Hero hero={dictionary.hero} screens={dictionary.screens} />
        <TrustBar trust={dictionary.trust} />
        <Pillars
          pillars={dictionary.pillars}
          staff={dictionary.staff}
          screens={dictionary.screens}
        />
        <SystemSection
          lang={lang}
          system={dictionary.system}
          proof={dictionary.proof}
        />
        <Proof lang={lang} proof={dictionary.proof} />
        <Pricing lang={lang} pricing={dictionary.pricing} />
        <Steps steps={dictionary.steps} />
        <DemoRequestSection form={dictionary.form} />
        <Faq faq={dictionary.faq} />
      </main>
      <SiteFooter lang={lang} nav={dictionary.nav} footer={dictionary.footer} />
    </>
  );
}
