"use client";

import React from "react";
import {
  Link2,
  Megaphone,
  Headphones,
  CircleDollarSign,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AffiliateHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Join & Grab Your Link",
      desc: "Complete our 60-second sign up form. Get instant access to your private affiliate dashboard and personal tracking link with 90-day cookie tracking.",
      icon: Link2,
      accent: "from-blue-500 to-cyan-500",
      pill: "Instant Setup",
    },
    {
      num: "02",
      title: "Share With Your Audience",
      desc: "Recommend SmoothSales to your clients, social followers, YouTube viewers, or newsletter readers using our ready-made banners, swipe copy, and demo walkthroughs.",
      icon: Megaphone,
      accent: "from-cyan-500 to-emerald-500",
      pill: "Turnkey Assets",
    },
    {
      num: "03",
      title: "We Close & Support",
      desc: "Zero technical burden on you. Our product team handles the live demos, free 14-day trials, WhatsApp Cloud API setup, and 24/7 technical customer support.",
      icon: Headphones,
      accent: "from-emerald-500 to-teal-500",
      pill: "Zero Support Work",
    },
    {
      num: "04",
      title: "Get Paid Every Month",
      desc: "Every time your referral pays their monthly CRM invoice, you earn 20% to 30%. Commissions are credited directly to your bank account / UPI on the 5th of every month.",
      icon: CircleDollarSign,
      accent: "from-teal-500 to-emerald-600",
      pill: "Auto-Payout on 5th",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Frictionless 4-Step Process</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          How the SmoothSales{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Affiliate Engine Works
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          You don&apos;t need to be a CRM expert or manage customer accounts. Just introduce businesses looking to accelerate their sales, and we take care of everything else.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="relative flex flex-col justify-between rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-emerald-500/40 transition-all backdrop-blur-md group"
            >
              <div className="space-y-4">
                {/* Step indicator header */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-slate-300 dark:text-white/15">
                    {step.num}
                  </span>
                </div>

                <Badge variant="outline" className="text-[10px] font-mono border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {step.pill}
                </Badge>

                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom connecting visual hint on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-300 dark:text-white/20">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
