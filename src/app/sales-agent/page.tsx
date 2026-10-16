"use client";

import React from "react";
import { SalesAgentHero } from "@/components/marketing/sales-agent/sales-agent-hero";
import { WhySellWithUs } from "@/components/marketing/sales-agent/why-sell-with-us";
import { WhoThisIsFor } from "@/components/marketing/sales-agent/who-this-is-for";
import { PayoutStructure } from "@/components/marketing/sales-agent/payout-structure";
import { RefundAndEarnings } from "@/components/marketing/sales-agent/refund-and-earnings";
import { PartnerJourney } from "@/components/marketing/sales-agent/partner-journey";
import { PartnerDashboardTeam } from "@/components/marketing/sales-agent/partner-dashboard-team";
import { SupportStructure } from "@/components/marketing/sales-agent/support-structure";
import { PartnerReviews } from "@/components/marketing/sales-agent/partner-reviews";
import { SalesAgentApplication } from "@/components/marketing/sales-agent/sales-agent-application";
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
      {/* 1. Hero Section */}
      <SalesAgentHero
        onApplyClick={() => scrollToSection("apply-section")}
        onExploreClick={() => scrollToSection("payout-structure")}
      />

      {/* 2. Why Sell With Us (8 Grid Container from Image 5) */}
      <WhySellWithUs />

      {/* 3. Who This Is For (6 Persona Cards from Images 3 & 4) */}
      <WhoThisIsFor />

      {/* 4. Payout Structure (Table from Images 3 & 4) */}
      <PayoutStructure />

      {/* 5. Refund Policy & Payout Example & Getting Started (from Image 2) */}
      <RefundAndEarnings />

      {/* 6. Partner Journey (6 Steps from Image 1 top) */}
      <PartnerJourney />

      {/* 7. Partner Dashboard & Growing with a Team (from Image 1 middle) */}
      <PartnerDashboardTeam />

      {/* 8. Support Structure (3 Tiers from Image 1 lower middle) */}
      <SupportStructure />

      {/* 9. Partner Reviews (from Image 1 bottom) */}
      <PartnerReviews />

      {/* 10. Dedicated Partner Application Form */}
      <SalesAgentApplication />

      {/* 11. Rich Standard Website Footer */}
      <RichFooter />
    </div>
  );
}
