"use client";

import React from "react";
import { Check, CheckCircle2, ArrowRight, ShieldCheck, Users, Headphones, Terminal } from "lucide-react";

interface StepItem {
  step: number;
  title: string;
  description: string;
}

const JOURNEY_STEPS: StepItem[] = [
  {
    step: 1,
    title: "Apply",
    description: "Submit business details through this page or your acquisition contact.",
  },
  {
    step: 2,
    title: "Demo & Discussion",
    description: "Walkthrough with our Partner Acquisition Team on model and fit.",
  },
  {
    step: 3,
    title: "KYC Verification",
    description: "Registration reviewed and approved by our admin team.",
  },
  {
    step: 4,
    title: "Minimum Purchase",
    description: "Purchase 200 users to unlock free setup and onboarding.",
  },
  {
    step: 5,
    title: "Brand Configuration",
    description: "Your logo, domain and theme applied across the CRM.",
  },
  {
    step: 6,
    title: "Dashboard Live",
    description: "Start registering customers and allocating seats immediately.",
  },
];

const DASHBOARD_FEATURES = [
  "Partner Profile & Brand Settings",
  "Customers & Workspace Manager",
  "User Pool & License Tracker",
  "Billing, Invoices & Subscriptions",
  "Payment Gateway & GST Details",
  "Refund Policy & Staff Management",
  "Reports & Support Desk",
];

const ROLES_DATA = [
  { role: "White Label Owner", access: "Full system access" },
  { role: "White Label Admin", access: "Customer, workspace, billing, reports" },
  { role: "Sales Executive", access: "Customer, lead, workspace" },
  { role: "Billing Manager", access: "Billing, invoices, payment, GST" },
  { role: "Support Executive", access: "Customer support & tickets" },
];

export function JourneyAndConsole() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors space-y-20 sm:space-y-28">
      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
        
        {/* ============================================================== */}
        {/* 1. PARTNER JOURNEY (6 STEPS) */}
        {/* ============================================================== */}
        <div className="space-y-10">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              PARTNER JOURNEY
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              From application to live in six steps
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              The path from first conversation to your branded dashboard going live.
            </p>
          </div>

          {/* 6-Step Horizontal Progress Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-3 relative">
            {JOURNEY_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E1126] p-4 sm:p-5 space-y-2.5 hover:border-primary/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-primary/30 dark:border-cyan-400/30 bg-primary/10 dark:bg-cyan-950/40 text-primary dark:text-cyan-400 font-mono font-bold text-xs flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. CONSOLE & TEAM SPLIT SECTION */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column: Partner Dashboard */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
                PARTNER DASHBOARD
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                Everything runs from one console
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-5 sm:p-6 divide-y divide-slate-100 dark:divide-white/5">
              {DASHBOARD_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <div className="w-5 h-5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Roles & Permissions */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
                ROLES &amp; PERMISSIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                Bring your team, not just yourself
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-4 sm:px-5 font-bold">Role</th>
                      <th className="py-3 px-4 sm:px-5 font-bold">Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {ROLES_DATA.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 sm:px-5 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                          {item.role}
                        </td>
                        <td className="py-3.5 px-4 sm:px-5 text-slate-600 dark:text-slate-300">
                          {item.access}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. SUPPORT STRUCTURE (L1 -> L2 -> L3) */}
        {/* ============================================================== */}
        <div className="space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
              SUPPORT STRUCTURE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              You&apos;re never troubleshooting alone
            </h2>
          </div>

          {/* 3-Tier Flow Container */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start relative">
              {/* L1 */}
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase text-primary dark:text-cyan-400 bg-primary/10 dark:bg-cyan-950/60 border border-primary/20 dark:border-cyan-800/40">
                  L1
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  You — the Partner
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  First point of contact for your customers on day-to-day queries.
                </p>
              </div>

              {/* L2 */}
              <div className="space-y-3 md:border-l md:border-slate-200 md:dark:border-white/10 md:pl-8">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
                  L2
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  SmoothSales.ai
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Platform-level issues escalated and resolved by our support team.
                </p>
              </div>

              {/* L3 */}
              <div className="space-y-3 md:border-l md:border-slate-200 md:dark:border-white/10 md:pl-8">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40">
                  L3
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  Development Team
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                  Technical or engine-level issues handled by our core dev team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
