"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function SupportStructure() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            SUPPORT STRUCTURE
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            You&apos;re never troubleshooting alone
          </h2>
        </div>

        {/* 3-Tier Support Flow Container */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {/* L1 */}
            <div className="flex-1 text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/40">
                L1
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
                You — the Partner
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed">
                First point of contact during the client meeting and demo.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="text-slate-300 dark:text-slate-600 rotate-90 md:rotate-0">
              <ArrowRight className="w-5 h-5 text-indigo-500" />
            </div>

            {/* L2 */}
            <div className="flex-1 text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/40">
                L2
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
                SmoothSales.ai
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed">
                Handles onboarding, billing, and day-to-day client support after sign-up.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="text-slate-300 dark:text-slate-600 rotate-90 md:rotate-0">
              <ArrowRight className="w-5 h-5 text-cyan-500" />
            </div>

            {/* L3 */}
            <div className="flex-1 text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-800/40">
                L3
              </span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
                Development Team
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans max-w-xs mx-auto leading-relaxed">
                Technical or platform-level issues escalated to our core dev team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
