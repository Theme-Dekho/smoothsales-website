"use client";

import React from "react";
import { CreditCard, CheckCircle2, ShieldCheck } from "lucide-react";

export function RefundAndEarnings() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors space-y-20 sm:space-y-28">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
        
        {/* ============================================================== */}
        {/* 1. REFUND POLICY SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              REFUND POLICY
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              One clock to track — your onboarding fee
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Unlike white label partners, you don&apos;t set a customer-facing refund policy — SmoothSales.ai owns that relationship.
              The only clock that matters to you is your own ₹999 refund.
            </p>
          </div>

          {/* Dual Split Card */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80 md:dark:divide-white/10">
              {/* Left Column */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  SMOOTHSALES.AI — YOU
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                    ₹999
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    onboarding
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Refunded in full the moment you cross <strong className="text-slate-900 dark:text-white font-semibold">20 users sold</strong> or <strong className="text-slate-900 dark:text-white font-semibold">8 workspaces sold</strong> — whichever comes first. No time limit to hit it.
                </p>
              </div>

              {/* Right Column */}
              <div className="md:pl-12 space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  YOU — YOUR CLIENT
                </span>
                <div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                    Not Your Call
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Client refund policy, billing, and cancellations are handled entirely by SmoothSales.ai. You&apos;re never on the hook for a customer refund.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. PAYOUT EXAMPLE SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              PAYOUT EXAMPLE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Your earning, illustrated
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              SmoothSales.ai&apos;s MRP is ₹350/user/month. Your ₹150 payout is calculated on this MRP — locked in, even on the months a client is given a discount.
            </p>
          </div>

          {/* Pricing Comparison Card */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80 md:dark:divide-white/10">
              {/* Left Column */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  CLIENT PAYS SMOOTHSALES.AI (MRP)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                    ₹350
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    /user/month
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Standard MRP for the CRM. Occasionally discounted to ₹300 for a client — your payout stays the same either way.
                </p>
              </div>

              {/* Right Column */}
              <div className="md:pl-12 space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  YOUR FIXED PAYOUT
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-indigo-600 dark:text-indigo-400">
                    ₹150
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    /user/month
                  </span>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                    Paid to you directly, every month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. GETTING STARTED SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              GETTING STARTED
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              One simple way to begin
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              No brand to build, no user pack to buy — just a small refundable fee to get your demo kit and start meeting clients.
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: Onboarding Card */}
            <div className="rounded-2xl border-2 border-cyan-400/80 dark:border-cyan-500/50 bg-white dark:bg-[#0E1126] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-5">
                <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40">
                  Onboarding
                </span>

                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                    ₹999
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    one-time
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Get verified, receive your demo kit and pricing sheet, and start meeting clients under the SmoothSales.ai name.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Fully refunded once you sell 20 users or 8 workspaces</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Official Partner Certificate &amp; Sales Accreditation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Live sandbox demo account loaded with realistic test leads</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Refund Milestone Tracker (Dark Navy Card) */}
            <div className="rounded-2xl border border-white/10 bg-[#0B0E23] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  REFUND MILESTONE TRACKER
                </span>

                {/* Progress Bar Container */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>0 users sold</span>
                    <span className="text-white font-bold">20 users / 8 workspaces</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden relative">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 w-1/4 rounded-full" />
                  </div>
                </div>

                {/* Milestone Info Card Inside */}
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                    The moment you cross either milestone, your{" "}
                    <strong className="text-cyan-400 font-bold">₹999 is refunded automatically</strong>{" "}
                    — no request needed, no waiting period.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Instant automated UPI/Bank refund processing</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
