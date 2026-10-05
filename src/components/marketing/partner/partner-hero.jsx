"use client";

import React from "react";
import Link from "next/link";
import {
  Handshake,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Award,
  Users2,
  DollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PartnerHero({ onApplyClick, onCalculatorClick }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-r from-cyan-500/15 via-primary/20 to-purple-500/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8">
        {/* Top Program Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
          <Handshake className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
          <span>SmoothSales Official Partner Ecosystem</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="hidden sm:inline-block text-[11px] text-primary dark:text-cyan-300 font-mono font-bold uppercase">
            Up to 35% Recurring Payout
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.14] max-w-4xl mx-auto">
          Scale Your Agency Revenue with India&apos;s{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-500 to-sky-400 bg-clip-text text-transparent">
            Highest-Converting CRM
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
          Whether you run a digital marketing agency, proptech consultancy, IT integration firm, or sales training practice — unlock predictable monthly recurring commissions, co-branded marketing assets, and white-glove client enablement.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Button
            size="lg"
            onClick={onApplyClick}
            className="w-full sm:w-auto h-12 px-8 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-sky-600 hover:from-primary/90 hover:to-sky-500 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all gap-2 font-heading cursor-pointer"
          >
            <span>Apply to Become a Partner</span>
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={onCalculatorClick}
            className="w-full sm:w-auto h-12 px-7 text-sm font-semibold rounded-xl border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white hover:scale-105 active:scale-95 transition-all gap-2 cursor-pointer"
          >
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span>Calculate Your Commission</span>
          </Button>
        </div>

        {/* Trust & Guarantee Pill */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>90-Day Lead Attribution Lock</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-500 shrink-0" />
            <span>Automated 1st-of-Month UPI Payouts</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-cyan-500 shrink-0" />
            <span>Zero Joining or Portal Maintenance Fees</span>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>Commission Payouts</span>
              <DollarSign className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
              ₹1.8 Cr+
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Disbursed to Indian partners
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>Recurring Rev-Share</span>
              <TrendingUp className="h-4 w-4 text-cyan-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
              Up to 35%
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Monthly recurring lifetime share
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>Client Go-Live</span>
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
              &lt; 24 Hours
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Zero code setup &amp; fast time-to-value
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span>Active Partner Base</span>
              <Users2 className="h-4 w-4 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
              120+ Firms
            </div>
            <div className="text-[11px] text-cyan-600 dark:text-cyan-400 mt-1 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Agencies, ISVs &amp; Consultants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
