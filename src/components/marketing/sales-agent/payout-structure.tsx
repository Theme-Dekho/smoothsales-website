"use client";

import React from "react";
import { ArrowRight, Info } from "lucide-react";

const FLOW_STEPS = [
  "Client Signs Up",
  "Counted as Your Sale",
  "Active Each Month",
  "₹150/User Added to Payout",
];

const PAYOUT_TIERS = [
  {
    stage: "Just Starting — 0 to 1 month",
    users: "~30 users",
    monthly: "₹4,500",
    yearly: "Still ramping up",
  },
  {
    stage: "Early Momentum — 1 to 3 months",
    users: "~50 users",
    monthly: "₹7,500",
    yearly: "Still ramping up",
  },
  {
    stage: "Building Pace — 3 to 6 months",
    users: "~150 users",
    monthly: "₹22,500",
    yearly: "₹2,70,000",
  },
  {
    stage: "Established — 6 months to 1 year",
    users: "250+ users",
    monthly: "₹37,500+",
    yearly: "₹4,50,000+",
  },
  {
    stage: "Experienced — 1 to 2 years",
    users: "600+ users",
    monthly: "₹90,000+",
    yearly: "₹10,80,000+",
  },
  {
    stage: "Veteran Partner — 2+ years",
    users: "900+ users",
    monthly: "₹1,35,000+",
    yearly: "₹16,20,000+",
  },
];

export function PayoutStructure() {
  return (
    <section id="payout-structure" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            PAYOUT STRUCTURE
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Sell a user, earn every month they stay
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Your payout isn&apos;t a one-time bonus — it&apos;s tracked against every active user you&apos;ve sold,
            for as long as their subscription runs. Here&apos;s what that typically looks like as you grow.
          </p>
        </div>

        {/* Step Flow Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {FLOW_STEPS.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="px-4 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0E1126] text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-2xs">
                {step}
              </div>
              {idx < FLOW_STEPS.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0 hidden sm:inline" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0E1126] shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#0B0E23] text-white text-[11px] font-mono font-bold uppercase tracking-wider py-3.5 px-4 sm:px-6 border-b border-white/10">
            <div className="col-span-5 sm:col-span-4">STAGE</div>
            <div className="col-span-3 sm:col-span-3">TYPICAL ACTIVE USERS</div>
            <div className="col-span-4 sm:col-span-2 text-right sm:text-left">MONTHLY PAYOUT</div>
            <div className="hidden sm:block sm:col-span-3 text-right">YEARLY PAYOUT (AVG PACE)</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {PAYOUT_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 items-center py-4 px-4 sm:px-6 text-xs sm:text-sm hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-heading font-medium text-slate-900 dark:text-white pr-2">
                  {tier.stage}
                </div>
                <div className="col-span-3 sm:col-span-3 font-mono text-slate-600 dark:text-slate-400">
                  {tier.users}
                </div>
                <div className="col-span-4 sm:col-span-2 font-mono font-bold text-slate-900 dark:text-white text-right sm:text-left">
                  {tier.monthly}
                </div>
                <div className="hidden sm:block sm:col-span-3 font-mono text-right text-slate-500 dark:text-slate-400">
                  {tier.yearly}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote Bar */}
          <div className="p-4 sm:p-5 bg-teal-500/10 dark:bg-teal-950/30 border-t border-teal-500/20 text-xs text-teal-900 dark:text-teal-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Based on real data from past partners — actual growth depends on your area and effort.
              Only <strong className="font-semibold text-teal-950 dark:text-teal-100">active, paying users</strong> count toward your payout each month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
