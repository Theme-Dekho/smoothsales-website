"use client";

import React from "react";
import { WhiteLabelHero } from "@/components/marketing/white-label/white-label-hero";
import { BusinessModelSection } from "@/components/marketing/white-label/business-model-section";
import { WhyPartnerSection } from "@/components/marketing/white-label/why-partner-section";
import { UserPoolAndRefund } from "@/components/marketing/white-label/user-pool-and-refund";
import { PricingAndEarnings } from "@/components/marketing/white-label/pricing-and-earnings";
import { JourneyAndConsole } from "@/components/marketing/white-label/journey-and-console";
import { WhiteLabelFaq } from "@/components/marketing/white-label/white-label-faq";
import { WhiteLabelFinalCta } from "@/components/marketing/white-label/white-label-final-cta";
import { RichFooter } from "@/components/marketing/final-cta-section";

export default function BecomeAPartnerPage() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#070817] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Hero with Breadcrumb, 3-Step Wizard Form, Bullets & 3 Stat Highlights */}
      <WhiteLabelHero />

      {/* 2. Business Model: You own the business. We own the plumbing + Interactive Multi-Brand Mock Console */}
      <BusinessModelSection />

      {/* 3. Why Partner With Us: 12 Economics Grid on Dark Container */}
      <WhyPartnerSection />

      {/* 4. User Pool Logic & Two Separate Clocks Refund Policy */}
      <UserPoolAndRefund />

      {/* 5. Pricing Example (₹80 vs ₹300-500), Two Ways to Begin (₹15K vs ₹2K), and 200 Users Earnings Table */}
      <PricingAndEarnings />

      {/* 6. Partner Journey (6 Steps), One Console & Roles Split, and Support Structure (L1 -> L2 -> L3) */}
      <JourneyAndConsole />

      {/* 7. Comprehensive Partner FAQ Accordion (11 Questions) */}
      <WhiteLabelFaq />

      {/* 8. Final CTA Banner */}
      <WhiteLabelFinalCta />

      {/* 9. Rich Website Footer */}
      <RichFooter />
    </div>
  );
}
