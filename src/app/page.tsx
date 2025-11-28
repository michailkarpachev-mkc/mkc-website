"use client";

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import { MinimalCenteredHero } from "@/components/heros/minimal-centered-hero";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";
import { Hammer, Ruler, Package, ArrowRight, Building2 } from "lucide-react";
import { WhyUsPictogram, ServicesPictogram } from "@/components/icons/section-pictograms";
import { useLanguage } from "@/lib/language-context";

export default function Page() {
  const { t } = useLanguage();

  return (
    <main>
      <AnimatedIndicatorNavbar />
      <MinimalCenteredHero />

      {/* Services Section - white background */}
      <section className="bg-white text-neutral-950">
        <div className="container mx-auto max-w-6xl py-24">
          <div className="flex items-center gap-3">
            <ServicesPictogram className="h-7 w-7 text-neutral-950/70" title={t.services.title} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.services.title}</h2>
          </div>
          <p className="mt-4 max-w-2xl text-neutral-950 body-large animate-fadeUp">
            {t.services.description}
          </p>
          {/* Updated services list */}
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl bg-[#BAA6F5] p-6 flex items-start gap-4 transition-all duration-200 hover:bg-[#AE98F0] hover:-translate-y-0.5 hover:ring-1 ring-neutral-950/10">
              <Hammer className="h-6 w-6 text-neutral-950/70" aria-hidden="true" />
              <div>
                <span className="font-semibold">{t.services.valueEngineering.title}</span>
                <p className="mt-1 text-sm text-neutral-950/80">{t.services.valueEngineering.description}</p>
              </div>
            </li>
            <li className="rounded-xl bg-[#BAA6F5] p-6 flex items-start gap-4 transition-all duration-200 hover:bg-[#AE98F0] hover:-translate-y-0.5 hover:ring-1 ring-neutral-950/10">
              <Ruler className="h-6 w-6 text-neutral-950/70" aria-hidden="true" />
              <div>
                <span className="font-semibold">{t.services.preConstruction.title}</span>
                <p className="mt-1 text-sm text-neutral-950/80">{t.services.preConstruction.description}</p>
              </div>
            </li>
            <li className="rounded-xl bg-[#BAA6F5] p-6 flex items-start gap-4 transition-all duration-200 hover:bg-[#AE98F0] hover:-translate-y-0.5 hover:ring-1 ring-neutral-950/10">
              <Package className="h-6 w-6 text-neutral-950/70" aria-hidden="true" />
              <div>
                <span className="font-semibold">{t.services.projectManagement.title}</span>
                <p className="mt-1 text-sm text-neutral-950/80">{t.services.projectManagement.description}</p>
              </div>
            </li>
            <li className="rounded-xl bg-[#BAA6F5] p-6 flex items-start gap-4 transition-all duration-200 hover:bg-[#AE98F0] hover:-translate-y-0.5 hover:ring-1 ring-neutral-950/10">
              <Building2 className="h-6 w-6 text-neutral-950/70" aria-hidden="true" />
              <div>
                <span className="font-semibold">{t.services.retrofitting.title}</span>
                <p className="mt-1 text-sm text-neutral-950/80">{t.services.retrofitting.description}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Us Section - white background */}
      <section className="bg-[#CFFC62] text-neutral-950">
        <div className="container mx-auto max-w-4xl py-16 md:py-20 border-t border-neutral-950/20">
          <div className="flex items-center gap-3">
            <WhyUsPictogram className="h-7 w-7 text-neutral-950/70" title={t.whyUs.title} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.whyUs.title}</h2>
          </div>
          <div className="mt-6 space-y-4 text-neutral-950/80 body-large">
            <p>
              {t.whyUs.paragraph1}
            </p>
            <p>
              {t.whyUs.paragraph2}
            </p>
            <p className="font-semibold text-neutral-950">{t.whyUs.howWeWork}</p>
            <p>
              {t.whyUs.paragraph3}
            </p>
          </div>

          {/* Complimentary Project Assessment CTA */}
          <div className="mt-10">
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-12 text-center">
              {t.whyUs.ctaTitle}
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:office@mkc.bg"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-neutral-800 hover:gap-3"
              >
                {t.whyUs.ctaButton}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterFooter />
    </main>
  );
}