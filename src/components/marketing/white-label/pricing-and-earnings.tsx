"use client";

import React from "react";
import { Check, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export function PricingAndEarnings() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors space-y-20 sm:space-y-24">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
        
        {/* ============================================================== */}
        {/* 1. PRICING EXAMPLE SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              PRICING EXAMPLE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Your margin, illustrated
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              SmoothSales.ai charges partners a fixed per-user cost. What you sell it for — and what you keep — is entirely up to you.
            </p>
          </div>

          {/* Dual Metric Comparison Card */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80 md:dark:divide-white/10">
              {/* Left Column: Your Cost */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  YOUR COST FROM SMOOTHSALES.AI
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                    ₹80
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    /user/month
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Fixed backend licensing cost. Predictable, and locked in regardless of how you price to your customers.
                </p>
              </div>

              {/* Right Column: Typical Partner Sale Price */}
              <div className="md:pl-12 space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  TYPICAL PARTNER SALE PRICE
                </span>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                    ₹300–500
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    /user/month
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Set independently by the partner based on their market, positioning, and service layer — the current market range in India.
                </p>
                <div className="pt-1">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/40">
                    Up to ~6x margin potential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. GETTING STARTED SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              GETTING STARTED
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Two ways to begin — you choose
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Start with a full user pack, or ease in with a small refundable setup fee. Either way, you&apos;re live under your own brand.
            </p>
          </div>

          {/* 2 Options Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-8 shadow-xs space-y-5">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/10">
                Option A
              </span>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                  ₹15,000 Starter Pack
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Pay ₹15,000 upfront and your user allocation is included — no separate setup charge. You&apos;re ready to onboard customers immediately.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>User credits included in the ₹15,000</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>No setup fee on top</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span>Best if you&apos;re ready to sell from day one</span>
                </div>
              </div>
            </div>

            {/* Option B */}
            <div className="rounded-2xl border-2 border-primary/50 dark:border-cyan-400/50 bg-white dark:bg-[#0E1126] p-6 sm:p-8 shadow-md shadow-primary/5 space-y-5 relative">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase text-primary dark:text-cyan-400 bg-primary/10 dark:bg-cyan-950/60 border border-primary/20 dark:border-cyan-800/40">
                Option B
              </span>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                  ₹2,000 Refundable Setup
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Prefer to start small? Pay a ₹2,000 setup charge instead. Sell 50+ users within the year, and the ₹2,000 is refunded back to you automatically.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 font-sans">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Lowest-cost way to get started</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Fully refunded on 50+ user sales in a year</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Best if you&apos;re building your customer base first</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. EARNING POTENTIAL SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              EARNING POTENTIAL
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              What 200 users could earn you
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Your cost from SmoothSales.ai is fixed at ₹80/user/month. What you charge — anywhere from ₹300 to ₹500, the current market range — is entirely up to you.
            </p>
          </div>

          {/* Full Table */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0A0D1F] text-white/80 border-b border-slate-800">
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Your Price / User
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Your Cost / User
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider text-primary dark:text-cyan-400">
                      Margin / User
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      200 Users — Monthly
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider text-emerald-400">
                      200 Users — Yearly
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 bg-white dark:bg-[#0E1126] text-slate-800 dark:text-slate-200">
                  <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      ₹300
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500">₹80</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-primary dark:text-cyan-400">
                      ₹220
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">₹44,000</td>
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-600 dark:text-emerald-400">
                      ₹5,28,000
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      ₹400
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500">₹80</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-primary dark:text-cyan-400">
                      ₹320
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">₹64,000</td>
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-600 dark:text-emerald-400">
                      ₹7,68,000
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      ₹500
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-500">₹80</td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-primary dark:text-cyan-400">
                      ₹420
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">₹84,000</td>
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                      ₹10,08,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote Alert Note */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 sm:p-5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <strong className="text-slate-900 dark:text-white font-semibold">
              Margin is entirely yours
            </strong>{" "}
            — SmoothSales.ai only ever charges the fixed ₹80/user/month backend cost, no matter what you price to your customers.
          </div>
        </div>
      </div>
    </section>
  );
}
