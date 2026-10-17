"use client";

import React from "react";
import {
  Cookie,
  Repeat,
  Sparkles,
  FileText,
  LifeBuoy,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AffiliatePerks() {
  const perks = [
    {
      icon: Cookie,
      title: "90-Day Cookie Attribution",
      desc: "If a business clicks your link today and converts 80 days later after evaluating other CRMs, you still get 100% of the commission.",
      accent: "from-amber-500 to-orange-500",
    },
    {
      icon: Repeat,
      title: "Lifetime Recurring Share",
      desc: "Unlike platforms that pay once and forget you, SmoothSales pays you every month for the entire lifetime of the customer subscription.",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      icon: Sparkles,
      title: "High Conversion 14-Day Trial",
      desc: "Visitors get immediate sandbox access with pre-configured Real Estate and Education workflows. Frictionless onboarding delivers a 3.8x higher conversion rate.",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Turnkey Marketing Swipe Kit",
      desc: "Access ready-to-share YouTube video scripts, LinkedIn post templates, high-res banner ads, and comparison audit decks designed to convert.",
      accent: "from-purple-500 to-pink-500",
    },
    {
      icon: LifeBuoy,
      title: "Zero Support Or Technical Work",
      desc: "You never need to answer customer support queries. Our in-house tech team handles WhatsApp Cloud API setup, data import, and 24/7 client care.",
      accent: "from-teal-500 to-cyan-500",
    },
    {
      icon: CreditCard,
      title: "Direct UPI & NEFT Payouts",
      desc: "Payouts are automated on the 5th of every month directly to your Indian bank account or UPI ID with complete GST invoicing documentation.",
      accent: "from-rose-500 to-amber-500",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Why Top Affiliates Partner With Us</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Built to Maximize Your{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Monthly Recurring Revenue
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Everything you need to turn your audience, network, and recommendations into predictable passive income.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perks.map((perk, i) => {
          const Icon = perk.icon;
          return (
            <Card
              key={i}
              className="relative rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-emerald-500/40 transition-all backdrop-blur-md group overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${perk.accent} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity pointer-events-none`}
              />
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {perk.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
