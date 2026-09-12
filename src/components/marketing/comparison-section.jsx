"use client";

import React from "react";
import {
  X,
  Check,
  MessageSquare,
  PhoneCall,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";

export function ComparisonSection() {
  const painPoints = [
    "Three separate tools, three different logins, and three monthly bills",
    "Partner and broker commissions tracked in an offline Excel sheet prone to errors",
    "No manager sees the full lead-to-payout journey — disputes happen on every closing",
  ];

  const smoothSalesBenefits = [
    "One unified interface for WhatsApp chat, telecalling, site visits, and quotes",
    "Real-time commission ledger with auto-calculated TDS and instant WhatsApp payout slips",
    "End-to-end attribution from initial ad click to final bank disbursement",
  ];

  const timelineSteps = [
    {
      title: "New WhatsApp enquiry arrives",
      sub: "Ingested via Official Cloud API in 400ms",
      badge: "400ms",
    },
    {
      title: "Auto-routed to the right rep",
      sub: "Weighted round-robin by branch territory & active capacity",
      badge: "Sub-60s SLA",
    },
    {
      title: "Deal moves to Quotation",
      sub: "1-click proposal sent with instant tracking link on WhatsApp",
      badge: "1-Click",
    },
    {
      title: "Commission calculated automatically",
      sub: "Broker ledger credited instant token share with TDS auto-split",
      badge: "Auto-Split",
    },
  ];

  const pills = [
    "ONE LEAD RECORD",
    "ONE COMMISSION LEDGER",
    "FEWER TOOLS TO MANAGE",
  ];

  return (
    <section className="flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-6 lg:space-y-8 w-full text-slate-900 dark:text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[300px] sm:h-[350px] max-w-full bg-primary/10 dark:bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/25 dark:border-primary/30 text-primary dark:text-sky-300 text-[11px] font-bold uppercase tracking-widest font-mono">
          <Layers className="h-3.5 w-3.5" />
          <span>One Workspace, Not Five Tools</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Still juggling a WhatsApp tool, a dialer, and a spreadsheet?
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A0A2B5] leading-relaxed max-w-xl mx-auto">
          Fragmented sales stacks create blindspots, drop hot inquiries, and turn
          commission day into a nightmare. Here is what happens when you unite them.
        </p>
      </div>

      {/* Comparison Grid with Centered VS Badge */}
      <div className="relative grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch z-10">
        {/* Centered VS Badge on Desktop */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white dark:bg-[#18182A] border-2 border-slate-300 dark:border-white/20 shadow-xl items-center justify-center font-heading font-black text-xs text-slate-700 dark:text-white/80 tracking-wider">
          VS
        </div>

        {/* Left Card: Fragmented Tool Stack */}
        <div className="rounded-2xl bg-white dark:bg-[#12121E]/90 border border-slate-200/80 dark:border-white/10 p-4 sm:p-5 lg:p-6 shadow-md dark:shadow-xl flex flex-col justify-between space-y-4 backdrop-blur-md">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/15 border border-rose-200 dark:border-rose-500/30 px-2.5 py-0.5 rounded-lg">
                <X className="h-3.5 w-3.5 stroke-[3]" />
                Fragmented Tool Stack
              </span>
              <span className="text-[10.5px] font-mono text-slate-400 dark:text-white/40">The Old Way</span>
            </div>

            {/* Overlapping / Tilted Tool Cards */}
            <div className="relative pt-0.5 pb-2 space-y-2">
              <div
                className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 flex items-center justify-between shadow-xs transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      WhatsApp-only tool
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-white/50">
                      Disjointed chats, no CRM pipeline sync
                    </div>
                  </div>
                </div>
                <span className="text-[10.5px] font-mono text-rose-600 dark:text-rose-400 font-bold shrink-0">
                  ₹1,999/mo
                </span>
              </div>

              <div
                className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 flex items-center justify-between shadow-xs transition-transform hover:scale-[1.02] sm:ml-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/15 text-primary dark:text-sky-400 shrink-0">
                    <PhoneCall className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Standalone dialer app
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-white/50">
                      Call recordings never sync to deals
                    </div>
                  </div>
                </div>
                <span className="text-[10.5px] font-mono text-rose-600 dark:text-rose-400 font-bold shrink-0">
                  ₹1,499/mo
                </span>
              </div>

              <div
                className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 flex items-center justify-between shadow-xs transition-transform hover:scale-[1.02] sm:ml-8"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                    <FileSpreadsheet className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Broker Excel Sheet
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-white/50">
                      Formula errors, missing 30-day cookie lock
                    </div>
                  </div>
                </div>
                <span className="text-[10.5px] font-mono text-rose-600 dark:text-rose-400 font-bold shrink-0">
                  40h lost
                </span>
              </div>
            </div>

            {/* Pain Points Checklist */}
            <div className="border-t border-slate-200 dark:border-white/10 pt-3.5 space-y-2">
              {painPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-[#B0B2C2]">
                  <div className="h-4.5 w-4.5 rounded-full bg-rose-50 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered VS Badge on Mobile */}
        <div className="flex md:hidden -my-2 items-center justify-center relative z-20">
          <div className="w-8 h-8 rounded-full bg-white dark:bg-[#18182A] border-2 border-slate-300 dark:border-white/20 shadow-lg flex items-center justify-center font-heading font-black text-[10px] text-slate-700 dark:text-white/80 tracking-wider">
            VS
          </div>
        </div>

        {/* Right Card: Unified SmoothSales Flow */}
        <div className="rounded-2xl bg-gradient-to-br from-primary via-[#163854] to-[#0F2338] text-white p-4 sm:p-5 lg:p-6 shadow-2xl shadow-primary/20 border border-cyan-400/30 flex flex-col justify-between space-y-4 relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 blur-[90px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20 px-2.5 py-0.5 rounded-lg">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
                With SmoothSales
              </span>
              <span className="text-[11px] font-mono text-sky-200 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All-in-One Engine
              </span>
            </div>

            {/* Timeline Flow */}
            <div className="relative pl-6 space-y-2 sm:space-y-2.5 pt-0.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-white/25">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-white text-primary flex items-center justify-center text-[10px] font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-[12.5px] font-bold text-white tracking-tight">
                      {step.title}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>
                  <div className="text-[10px] text-white/75 mt-0.5 leading-relaxed">
                    {step.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="border-t border-white/20 pt-3 space-y-2">
              {smoothSalesBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-white/95">
                  <div className="h-4 w-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5 border border-white/30">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3 Bottom Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1 relative z-10">
        {pills.map((pill) => (
          <span
            key={pill}
            className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-white/90 shadow-2xs hover:border-slate-300 dark:hover:border-white/20 transition-colors"
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
