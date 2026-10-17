"use client";

import React from "react";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { AffiliateHero } from "@/components/marketing/affiliate/affiliate-hero";
import { AffiliateCalculator } from "@/components/marketing/affiliate/affiliate-calculator";
import { AffiliateHowItWorks } from "@/components/marketing/affiliate/affiliate-how-it-works";
import { AffiliatePerks } from "@/components/marketing/affiliate/affiliate-perks";
import { AffiliateWhoThisIsFor } from "@/components/marketing/affiliate/affiliate-who-this-is-for";
import { AffiliateApplicationForm } from "@/components/marketing/affiliate/affiliate-application-form";
import { AffiliateFaq } from "@/components/marketing/affiliate/affiliate-faq";
import { AffiliateFinalCta } from "@/components/marketing/affiliate/affiliate-final-cta";
import { RichFooter } from "@/components/marketing/final-cta-section";

export default function AffiliatePage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#070817] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Global Navigation */}
      <MarketingNavbar />

      {/* 2. Hero with Breadcrumb, Dual CTAs & Live Portal Mockup */}
      <AffiliateHero
        onApplyClick={() => scrollToSection("affiliate-application-form")}
        onCalculatorClick={() => scrollToSection("affiliate-calculator")}
      />

      {/* 3. Interactive Commission & ROI Calculator */}
      <AffiliateCalculator
        onApplyClick={() => scrollToSection("affiliate-application-form")}
      />

      {/* 4. 4-Step Process: Link -> Share -> We Close & Support -> Get Paid Monthly */}
      <AffiliateHowItWorks />

      {/* 5. 6 Key Program Perks (90-Day Cookie, Lifetime Share, High Conv Trial) */}
      <AffiliatePerks />

      {/* 6. Who This Is For (Creators, Consultants, Agencies, Communities) */}
      <AffiliateWhoThisIsFor />

      {/* 7. Instant 60-Second Application Form with Link Generator */}
      <AffiliateApplicationForm />

      {/* 8. Comprehensive Affiliate FAQs */}
      <AffiliateFaq />

      {/* 9. Final High-Impact CTA Banner */}
      <AffiliateFinalCta
        onApplyClick={() => scrollToSection("affiliate-application-form")}
      />

      {/* 10. Rich Footer */}
      <RichFooter />
    </div>
  );
}
