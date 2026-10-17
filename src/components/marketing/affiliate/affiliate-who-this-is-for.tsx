"use client";

import React from "react";
import {
  Video,
  Briefcase,
  Layers,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AffiliateWhoThisIsFor() {
  const personas = [
    {
      icon: Video,
      title: "Content Creators & Tech YouTubers",
      subtitle: "Software reviewers, productivity coaches & business channels",
      highlight: "High Video CTR",
      desc: "Add your referral link in video descriptions, software showdowns, and CRM tutorials. Pin demo links in comments to monetize your viewer base passively.",
      examples: ["CRM comparison videos", "Productivity workflow breakdowns", "Tech review blogs"],
    },
    {
      icon: Briefcase,
      title: "Sales Consultants & Corporate Trainers",
      subtitle: "Advisors helping SMEs structure and scale sales teams",
      highlight: "High Deal Size",
      desc: "Introduce SmoothSales when auditing your clients' lead management bottlenecks. Earn monthly recurring payouts on whole 10-50 rep sales floors.",
      examples: ["Sales strategy audits", "Real estate brokerage consulting", "Sales playbook implementation"],
    },
    {
      icon: Layers,
      title: "Performance Marketing Agencies",
      subtitle: "Agencies generating Meta / Google leads for clients",
      highlight: "Recurring Retainer Boost",
      desc: "Pair your lead gen campaigns with a CRM that ensures clients actually call leads in 60 seconds. Prevent client churn and earn 20%-30% software rev-share.",
      examples: ["Real Estate lead agencies", "Education admission funnels", "Healthcare / clinic marketers"],
    },
    {
      icon: MessageSquare,
      title: "Community Admins & LinkedIn Creators",
      subtitle: "Founders, startup community leaders & newsletter authors",
      highlight: "High Trust & Conversion",
      desc: "Share your authentic experience with founder communities, startup WhatsApp groups, and newsletter subscribers who trust your tech recommendations.",
      examples: ["Weekly B2B newsletters", "Startup founder WhatsApp groups", "LinkedIn business growth posts"],
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
          <span>Tailored For Your Audience</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Who Is the SmoothSales{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Affiliate Program For?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Whether you have 500,000 YouTube subscribers or a tight-knit network of 50 enterprise business owners, our program offers high payouts for high-intent introductions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {personas.map((persona, i) => {
          const Icon = persona.icon;
          return (
            <Card
              key={i}
              className="rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-emerald-500/40 transition-all backdrop-blur-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200 dark:border-white/10">
                    <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold px-3 py-1 border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                    {persona.highlight}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {persona.title}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {persona.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {persona.desc}
                </p>

                <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-white/40">
                    Proven Channel Strategies:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {persona.examples.map((ex, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
