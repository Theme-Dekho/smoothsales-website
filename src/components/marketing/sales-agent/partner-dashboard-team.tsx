"use client";

import React from "react";
import { Check } from "lucide-react";

interface RoleItem {
  role: string;
  duty: string;
}

const DASHBOARD_FEATURES: string[] = [
  "Your leads & client meetings tracker",
  "Live payout calculator",
  "Monthly payout history",
  "Demo kit & pricing sheet downloads",
  "Onboarding refund status",
  "Direct line to your SmoothSales.ai support contact",
];

const ROLES: RoleItem[] = [
  {
    role: "Business Partner",
    duty: "Meets clients, runs demos, closes sales",
  },
  {
    role: "Team Lead Partner",
    duty: "Manages a small group of partners, tracks combined payout",
  },
  {
    role: "Referral Partner",
    duty: "Passes on leads to active partners, earns a referral share",
  },
];

export function PartnerDashboardTeam() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Left Column: PARTNER DASHBOARD */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              PARTNER DASHBOARD
            </span>

            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Everything you need in one place
            </h2>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/10">
            {DASHBOARD_FEATURES.map((item, idx) => (
              <div key={idx} className="py-3.5 flex items-center gap-3">
                <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: GROWING WITH A TEAM */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              GROWING WITH A TEAM
            </span>

            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Bring people in, not just yourself
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0E1126] shadow-sm">
            <div className="grid grid-cols-12 bg-slate-50 dark:bg-white/[0.04] text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 py-3.5 px-4 sm:px-6 border-b border-slate-200 dark:border-white/10">
              <div className="col-span-5 font-semibold">ROLE</div>
              <div className="col-span-7 font-semibold">WHAT THEY DO</div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {ROLES.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center py-4 px-4 sm:px-6 text-xs sm:text-sm">
                  <div className="col-span-5 font-heading font-bold text-slate-900 dark:text-white pr-2">
                    {item.role}
                  </div>
                  <div className="col-span-7 font-sans text-slate-600 dark:text-slate-300">
                    {item.duty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
