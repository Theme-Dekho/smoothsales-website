import React from "react";
import { Hero } from "@/components/marketing/hero";
import { StatsBand } from "@/components/marketing/stats-band";
import { ProblemFixSection } from "@/components/marketing/problem-fix-section";
import { ComparisonSection } from "@/components/marketing/comparison-section";
import { IntegrationsRow } from "@/components/marketing/integrations-row";
import { PricingTeaser } from "@/components/marketing/pricing-teaser";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { RevealOnScroll } from "@/components/marketing/reveal-on-scroll";

export const metadata = {
  title: "SmoothSales.ai — High-Velocity Sales & Partner CRM for Indian Teams",
  description:
    "Unite WhatsApp enquiries, portal leads, sub-60s round-robin dispatch, and automated broker commission tracking in one high-velocity CRM.",
};

export default function MarketingLandingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1 & 2. Above-the-fold First Screen Container: Hero & Stats Band */}
      <section className="min-h-fit lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-between bg-white dark:bg-[#0A0A0F] relative overflow-hidden pt-20 sm:pt-22 lg:pt-14 text-slate-900 dark:text-white transition-colors duration-300 w-full">
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden py-4 sm:py-6 lg:py-0">
          <Hero />
        </div>
        <StatsBand />
      </section>

      {/* 3. Interactive Problem -> Fix Storytelling Section with Dynamic Live Feed */}
      <RevealOnScroll delay={0.1} className="w-full">
        <ProblemFixSection />
      </RevealOnScroll>

      {/* 4. Comparison Section: Fragmented Tool Stack vs. Unified SmoothSales */}
      <RevealOnScroll delay={0.1} className="w-full">
        <ComparisonSection />
      </RevealOnScroll>

      {/* 5. Integrations Row with Staggered Fade-In */}
      <RevealOnScroll delay={0.1} className="w-full">
        <IntegrationsRow />
      </RevealOnScroll>

      {/* 6. Pricing Teaser */}
      <RevealOnScroll delay={0.1} className="w-full">
        <PricingTeaser />
      </RevealOnScroll>

      {/* 7. Final CTA Band with 3 Buttons (including WhatsApp) + Rich 5-Column Footer */}
      <RevealOnScroll delay={0.1} className="w-full">
        <FinalCtaSection />
      </RevealOnScroll>
    </div>
  );
}
