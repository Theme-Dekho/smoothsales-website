"use client";

import React from "react";
import {
  Building2,
  Briefcase,
  Rocket,
  Home,
  Handshake,
  GraduationCap,
  LucideIcon,
} from "lucide-react";

interface AudienceItem {
  title: string;
  desc: string;
  badge?: string;
  icon: LucideIcon;
  topBorder: string;
  iconBg: string;
}

const AUDIENCES: AudienceItem[] = [
  {
    title: "B2B Field Sales Executives",
    desc: "Currently doing on-ground sales for platforms like JustDial, IndiaMart, or Sulekha? Same client conversations, same hustle — except now the payout is yours to keep, every month.",
    badge: "Best Fit",
    icon: Building2,
    topBorder: "border-t-4 border-t-indigo-500",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50",
  },
  {
    title: "Sales Professionals Going Independent",
    desc: "Working as a sales executive for someone else and ready to work for yourself instead? Bring the same skills here without switching industries or starting from zero.",
    icon: Briefcase,
    topBorder: "border-t-4 border-t-cyan-500",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200/50 dark:border-cyan-800/50",
  },
  {
    title: "Aspiring Entrepreneurs & Team Builders",
    desc: "Want to build something of your own? Start solo, then bring on a team of your own partners underneath you and earn off their sales too — your own small sales business.",
    icon: Rocket,
    topBorder: "border-t-4 border-t-violet-500",
    iconBg: "bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 border border-violet-200/50 dark:border-violet-800/50",
  },
  {
    title: "Work-From-Home Earners",
    desc: "Prefer flexible, self-paced work around your own schedule? Set your own hours and area — this fits into your life instead of the other way round.",
    icon: Home,
    topBorder: "border-t-4 border-t-emerald-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50",
  },
  {
    title: "Local Consultants & Freelancers",
    desc: "Already work closely with shop owners, local agencies, or small businesses in your area? Turn that existing network and trust into a recurring monthly income.",
    icon: Handshake,
    topBorder: "border-t-4 border-t-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/50",
  },
  {
    title: "Students & Early Career Starters",
    desc: "Looking for real sales experience and income alongside studies or a first job? This is a low-risk way to learn client-facing sales while earning from day one.",
    icon: GraduationCap,
    topBorder: "border-t-4 border-t-sky-500",
    iconBg: "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/50",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            WHO THIS IS FOR
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Built for people who already know how to sell
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            You don&apos;t need a CRM background — you need the ability to walk into a business and hold a conversation.
            If any of these sound like you, this program fits.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl bg-white dark:bg-[#0E1126] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 ${item.topBorder}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300/50 dark:border-indigo-700/50">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
