"use client";

import React from "react";
import { ArrowRight, AlertCircle, Info, ShieldCheck, Clock } from "lucide-react";

export function UserPoolAndRefund() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors space-y-20 sm:space-y-24">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
        {/* ============================================================== */}
        {/* 1. USER POOL LOGIC SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              USER POOL LOGIC
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Buy once, allocate as you grow
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Purchased users sit in your pool until you assign them to a customer workspace. Remove a customer&apos;s seats, and they&apos;re restored to your available pool automatically.
            </p>
          </div>

          {/* Flow Breadcrumb / Process Steps */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
            <span className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]">
              Purchased Users
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-primary dark:text-cyan-400" />
            <span className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]">
              User Pool
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-primary dark:text-cyan-400" />
            <span className="px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]">
              Customer Workspaces
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-primary dark:text-cyan-400" />
            <span className="px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
              Available Pool
            </span>
          </div>

          {/* User Pool Allocation Table */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0A0D1F] text-white/80 border-b border-slate-800">
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Purchased Users
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Customer A
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Customer B
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Customer C
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider">
                      Total Used
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 font-bold text-[11px] uppercase tracking-wider text-emerald-400 bg-emerald-950/30">
                      Available Pool
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 bg-white dark:bg-[#0E1126] font-semibold text-slate-800 dark:text-slate-200">
                  <tr>
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 dark:text-white">
                      200
                    </td>
                    <td className="py-4 px-4 sm:px-6">20</td>
                    <td className="py-4 px-4 sm:px-6">35</td>
                    <td className="py-4 px-4 sm:px-6">15</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600 dark:text-slate-400">
                      70
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400 font-extrabold text-base bg-emerald-500/5 dark:bg-emerald-500/10">
                      130
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rule Alert Note */}
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-50/50 dark:bg-cyan-950/30 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <Info className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold">
                Billing rule:
              </strong>{" "}
              only active users are billed. Inactive or removed users are never charged, and their seats return to your available pool immediately — as long as they&apos;re deactivated within SmoothSales.ai&apos;s 14-day window. Example — activate 30 users, sell only 20 within 14 days, and the remaining 10 are simply never billed.
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. REFUND POLICY SECTION */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              REFUND POLICY
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Two separate clocks — know the difference
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Your refund policy to your customers, and SmoothSales.ai&apos;s billing window to you, run independently. Understanding both keeps you from absorbing a cost you didn&apos;t expect.
            </p>
          </div>

          {/* Dual Split Cards */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:divide-x md:divide-slate-200/80 md:dark:divide-white/10">
              {/* Left Column */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  SMOOTHSALES.AI → YOU
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                    14
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400">
                    days
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  A fixed activation window. Deactivate a user within 14 days of allocation and it&apos;s never billed. Once 14 days pass, that user counts as active — permanently — regardless of what happens later with your own customer.
                </p>
              </div>

              {/* Right Column */}
              <div className="md:pl-12 space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  YOU → YOUR CUSTOMER
                </span>
                <div>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                    Your Call
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  No refund, 7, 14, 30 days, or a fully custom window — set independently by you. This is your own business risk with your customer, separate from SmoothSales.ai&apos;s window.
                </p>
              </div>
            </div>
          </div>

          {/* Example Alert Box */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold">
                Example:
              </strong>{" "}
              You sell 20 users to a customer under your own 20-day refund policy. On day 15, the customer cancels and you refund them. But SmoothSales.ai&apos;s 14-day window already closed on day 14 — so those 20 users are already billed to you as active. A longer promise to your customer doesn&apos;t extend SmoothSales.ai&apos;s 14-day window.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
