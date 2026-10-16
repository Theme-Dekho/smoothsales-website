"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SalesAgentHeroProps {
  onApplyClick?: () => void;
  onExploreClick?: () => void;
}

export function SalesAgentHero({ onApplyClick, onExploreClick }: SalesAgentHeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-[#070817] dark:via-[#080B20] dark:to-[#0A0A0F] border-b border-slate-200/80 dark:border-white/10">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-br from-primary/15 via-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
          <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
          <span>SMOOTHSALES.AI BUSINESS PARTNER &amp; SALES AGENT PROGRAM</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          Sell SmoothSales.ai in Your City. <br className="hidden sm:inline" />
          Earn{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-500 to-indigo-400 bg-clip-text text-transparent">
            ₹150/User Every Single Month.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed">
          Built for on-ground B2B sales professionals, independent advisors, and local consultants.
          No CRM tech setup, no client refund liability, and a 100% refundable ₹999 onboarding fee.
        </p>

        {/* Key Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>₹150 recurring payout/user/mo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>₹999 fee 100% refundable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Zero product/refund liability</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <Button
            onClick={onApplyClick}
            className="w-full sm:w-auto h-12 px-7 text-sm font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 active:scale-[0.98] transition-all font-heading cursor-pointer gap-2"
          >
            <span>Apply as Business Partner</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            onClick={onExploreClick}
            variant="outline"
            className="w-full sm:w-auto h-12 px-6 text-sm font-semibold rounded-xl border border-slate-300 dark:border-white/20 bg-white/60 dark:bg-white/[0.05] text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-[0.98] transition-all font-heading cursor-pointer gap-2"
          >
            <PhoneCall className="h-4 w-4 text-cyan-500" />
            <span>Explore Payout Structure</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
