"use client";

import React, { useState } from "react";
import { PartnerHero } from "@/components/marketing/partner/partner-hero";
import { PartnerTracks } from "@/components/marketing/partner/partner-tracks";
import { PartnerCalculator } from "@/components/marketing/partner/partner-calculator";
import { PartnerBenefits } from "@/components/marketing/partner/partner-benefits";
import { PartnerProcess } from "@/components/marketing/partner/partner-process";
import { PartnerApplicationForm } from "@/components/marketing/partner/partner-application-form";
import { PartnerFaq } from "@/components/marketing/partner/partner-faq";
import { RichFooter } from "@/components/marketing/final-cta-section";

export default function PartnersPage() {
  const [selectedTrack, setSelectedTrack] = useState("agency");
  const [calculatorData, setCalculatorData] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectTrack = (trackId) => {
    setSelectedTrack(trackId);
    scrollToSection("partner-application-form");
  };

  const handleCalculatorSelect = (data) => {
    setSelectedTrack(data.track);
    setCalculatorData(data);
    scrollToSection("partner-application-form");
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Partner Hero Section */}
      <PartnerHero
        onApplyClick={() => scrollToSection("partner-application-form")}
        onCalculatorClick={() => scrollToSection("partner-calculator")}
      />

      {/* 2. Partnership Tracks & Programs */}
      <PartnerTracks onSelectTrack={handleSelectTrack} />

      {/* 3. Interactive Commission & ROI Calculator */}
      <PartnerCalculator onApplyWithCalculation={handleCalculatorSelect} />

      {/* 4. Why Partner With SmoothSales (6 Pillars) */}
      <PartnerBenefits />

      {/* 5. 4-Step Onboarding Process */}
      <PartnerProcess />

      {/* 6. Comprehensive Partner Application Form */}
      <PartnerApplicationForm
        prefilledTrack={selectedTrack}
        prefilledData={calculatorData}
      />

      {/* 7. Partner FAQ & Testimonials */}
      <PartnerFaq />

      {/* 8. Rich Standard Footer */}
      <RichFooter />
    </div>
  );
}
