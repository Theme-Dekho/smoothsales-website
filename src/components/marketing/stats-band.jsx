"use client";

import React from "react";
import { AnimatedCounter } from "./animated-counter";
import { Building2, MessageCircle, Zap, ShieldCheck } from "lucide-react";

export function StatsBand() {
  const stats = [
    {
      icon: Building2,
      target: 700,
      suffix: "+",
      label: "Businesses using SmoothSales",
      sub: "Across Delhi NCR, Mumbai & Bengaluru",
      accent: "text-sky-400",
    },
    {
      icon: MessageCircle,
      target: 10000,
      suffix: "+",
      label: "Leads Distributed Daily",
      sub: "Sub-60s automated SLA routing",
      accent: "text-emerald-400",
    },
    {
      icon: Zap,
      target: 5,
      suffix: "",
      label: "Sales Channels, One Platform",
      sub: "WhatsApp, Meta, Search & Portals",
      accent: "text-amber-400",
    },
    {
      icon: ShieldCheck,
      target: 16,
      suffix: "+",
      label: "Native APIs & Integrations",
      sub: "Official Meta Cloud API, Razorpay",
      accent: "text-purple-400",
    },
  ];

  return (
    <div className="w-full bg-slate-100/90 dark:bg-[#101016]/95 border-y border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#F0F0F5] py-3 sm:py-3.5 px-4 sm:px-6 relative z-10 transition-colors backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`p-3 sm:p-3.5 rounded-2xl bg-white/90 dark:bg-white/[0.04] lg:bg-transparent lg:rounded-none border border-slate-200/90 dark:border-white/10 lg:border-none lg:border-r lg:border-slate-200 dark:lg:border-white/10 shadow-xs dark:shadow-none ${
                  i !== 0 ? "lg:pl-6" : ""
                } flex flex-col justify-center space-y-1.5`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={`p-1 rounded-md bg-slate-100 dark:bg-white/10 ${stat.accent}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-white/40 font-bold">
                    Scale Metric
                  </span>
                </div>

                <div className="text-xl sm:text-2xl lg:text-[28px] font-heading font-black tracking-tight text-slate-900 dark:text-white font-mono leading-none py-0.5">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>

                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white/90 font-heading leading-snug line-clamp-1 sm:line-clamp-none">
                    {stat.label}
                  </div>
                  <p className="text-[9.5px] text-slate-500 dark:text-white/50 leading-tight line-clamp-1 sm:line-clamp-none mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
