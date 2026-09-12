"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Tag, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingTeaser() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full text-slate-900 dark:text-white">
      <div className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#151525] dark:via-[#10101C] dark:to-[#0A0A12] border border-slate-200/90 dark:border-white/10 p-5 sm:p-8 lg:p-9 text-center space-y-4 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
        {/* Subtle decorative radial glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-44 bg-primary/10 dark:bg-cyan-500/15 blur-3xl rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-cyan-500/10 border border-primary/25 dark:border-cyan-500/25 text-primary dark:text-cyan-300 text-[11px] font-bold uppercase tracking-widest font-mono">
          <Tag className="h-3.5 w-3.5 text-primary dark:text-cyan-400" />
          <span>Transparent Pricing</span>
        </div>

        <div className="space-y-1.5 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Flat company pricing.{" "}
            <span className="bg-gradient-to-r from-primary to-sky-500 dark:from-cyan-300 dark:via-sky-200 dark:to-white bg-clip-text text-transparent">
              Unlimited seats.
            </span>
          </h2>
          <p className="text-xs sm:text-[13px] text-slate-600 dark:text-[#A0A2B5] leading-relaxed">
            Legacy CRMs charge ₹1,500+ for every rep, broker, and telecaller. SmoothSales gives
            you unlimited team seats so your entire company works in one system.
          </p>
        </div>

        {/* Billing Cadence Toggle */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <span
            className={`text-xs font-semibold cursor-pointer transition-colors ${
              !isAnnual ? "text-slate-900 dark:text-white font-bold" : "text-slate-400 dark:text-white/50 hover:text-slate-600 dark:hover:text-white/80"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer p-0.5 border ${
              isAnnual ? "bg-primary border-primary/50" : "bg-slate-200 dark:bg-white/10 border-slate-300 dark:border-white/20"
            }`}
          >
            <div
              className={`w-4.5 h-4.5 rounded-full bg-white transition-transform shadow-xs ${
                isAnnual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
              isAnnual ? "text-slate-900 dark:text-white font-bold" : "text-slate-400 dark:text-white/50 hover:text-slate-600 dark:hover:text-white/80"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            <span>Annual</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/25 dark:border-emerald-500/30">
              Save 20%
            </span>
          </span>
        </div>

        {/* Price Display */}
        <div className="pt-1">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-[10.5px] text-slate-500 dark:text-white/50 uppercase font-bold tracking-wider font-mono">
              Starting at
            </span>
            <span className="text-3xl sm:text-5xl font-heading font-black tracking-tight font-mono text-slate-900 dark:bg-gradient-to-r dark:from-white dark:via-cyan-100 dark:to-sky-200 dark:bg-clip-text dark:text-transparent">
              {isAnnual ? "₹10,399" : "₹12,999"}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-white/60 font-medium">
              / month
            </span>
          </div>
          <div className="text-[11px] text-slate-400 dark:text-white/45 mt-0.5 font-mono">
            {isAnnual ? "Billed annually · Flat fee for whole team" : "Billed monthly · Cancel anytime"}
          </div>
        </div>

        {/* Value Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-5 pt-1 text-xs text-slate-700 dark:text-white/85 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            14-day free full-featured trial
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            Unlimited reps &amp; brokers
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            Zero implementation fees
          </span>
        </div>

        <div className="pt-2">
          <Link href="/pricing" className="block sm:inline-block w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto h-11 sm:h-10 px-6 sm:px-7 text-xs sm:text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/25 gap-2 font-heading hover:scale-[1.02] sm:hover:scale-105 transition-transform"
            >
              See Full Pricing &amp; Compare Plans
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
