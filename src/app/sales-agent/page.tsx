"use client";

import React from "react";
import { SalesAgentHero } from "@/components/marketing/sales-agent/sales-agent-hero";
import { PayoutModelSection } from "@/components/marketing/sales-agent/payout-model-section";
import { WhySellWithUs } from "@/components/marketing/sales-agent/why-sell-with-us";
import { WhoThisIsFor } from "@/components/marketing/sales-agent/who-this-is-for";
import { PayoutStructure } from "@/components/marketing/sales-agent/payout-structure";
import { RefundAndEarnings } from "@/components/marketing/sales-agent/refund-and-earnings";
import { PartnerJourney } from "@/components/marketing/sales-agent/partner-journey";
import { PartnerDashboardTeam } from "@/components/marketing/sales-agent/partner-dashboard-team";
import { SupportStructure } from "@/components/marketing/sales-agent/support-structure";
import { PartnerReviews } from "@/components/marketing/sales-agent/partner-reviews";
import { SalesAgentFaq } from "@/components/marketing/sales-agent/sales-agent-faq";
import { SalesAgentFinalCta } from "@/components/marketing/sales-agent/sales-agent-final-cta";
import { RichFooter } from "@/components/marketing/final-cta-section";

export default function SalesAgentPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#070817] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Hero with 5-Step Wizard & What You Get Checklist */}
      <SalesAgentHero
        onApplyClick={() => scrollToSection("apply")}
        onExploreClick={() => scrollToSection("structure")}
      />

      {/* 2. Payout Model (3 Cards + Live Payout Slip Mockup) */}
      <PayoutModelSection />

      {/* 3. Why Sell With Us (8 Grid Container on Dark Slate) */}
      <WhySellWithUs />

      {/* 4. Who This Is For (6 Persona Cards with Colored Top Borders) */}
      <WhoThisIsFor />

      {/* 5. Payout Structure (Flow Steps, 6-Tier Payout Table & Real Data Callout) */}
      <PayoutStructure />

      {/* 6. Refund Policy & Payout Example & Getting Started with Milestone Tracker */}
      <RefundAndEarnings />

      {/* 7. Partner Journey (6 Steps from Application to First Payout) */}
      <PartnerJourney />

      {/* 8. Partner Dashboard (6 Modules) & Growing with a Team (3 Roles) */}
      <PartnerDashboardTeam />

      {/* 9. Support Structure (3-Tier Support: L1 -> L2 -> L3) */}
      <SupportStructure />

      {/* 10. Partner Reviews (4.8 Rating Band + 16 City-Verified Reviews) */}
      <PartnerReviews />

      {/* 11. Frequently Asked Questions (7 Accordion Items) */}
      <SalesAgentFaq />

      {/* 12. Final CTA Banner */}
      <SalesAgentFinalCta />

      {/* 13. Rich Standard Website Footer */}
      <RichFooter />
    </div>
  );
}
