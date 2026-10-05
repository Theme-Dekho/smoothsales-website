"use client";

import React from "react";
import {
  FileText,
  PhoneCall,
  Laptop,
  Coins,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    step: "01",
    title: "Submit Quick Application",
    subtitle: "2 Minutes",
    desc: "Tell us about your agency, your primary client verticals (Real Estate, EdTech, BFSI), and estimated deal volume.",
    icon: FileText,
    accent: "border-primary/40 text-primary bg-primary/10",
  },
  {
    step: "02",
    title: "15-Min Strategy Alignment",
    subtitle: "Within 24 Hours",
    desc: "Meet your dedicated Partner Success Manager over Google Meet to finalize your commission tier, SLA, and custom requirements.",
    icon: PhoneCall,
    accent: "border-cyan-500/40 text-cyan-500 bg-cyan-500/10",
  },
  {
    step: "03",
    title: "Get Partner Portal & Sandbox",
    subtitle: "Instant Access",
    desc: "Receive your unique tracking link, pre-loaded sandbox workspace, co-branded slide decks, and WhatsApp pitch templates.",
    icon: Laptop,
    accent: "border-purple-500/40 text-purple-500 bg-purple-500/10",
  },
  {
    step: "04",
    title: "Start Earning Monthly Cashflow",
    subtitle: "1st of Every Month",
    desc: "Register client deals with a 90-day lock. Once closed, receive automatic 20% to 35% monthly recurring bank or UPI deposits.",
    icon: Coins,
    accent: "border-emerald-500/40 text-emerald-500 bg-emerald-500/10",
  },
];

export function PartnerProcess() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#0A0B14] border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
          >
            <span>Seamless 4-Step Onboarding</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            How It Works: From Application to{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              First Payout
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
            We know your time is valuable. That&apos;s why our partner approval and enablement process takes under 48 hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white dark:bg-[#0F1020] border border-slate-200/90 dark:border-white/10 shadow-md flex flex-col justify-between space-y-4 group hover:border-primary/50 transition-all"
              >
                <div className="space-y-4">
                  {/* Top Step Number and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-heading font-extrabold text-slate-300 dark:text-white/20 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Timing Subtitle */}
                  <div>
                    <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      ⏱ {item.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Guaranteed SLA response</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
