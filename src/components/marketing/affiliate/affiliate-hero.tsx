"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Percent,
  Clock,
  Wallet,
  ShieldCheck,
  CheckCircle2,
  Users,
  Copy,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AffiliateHeroProps {
  onApplyClick: () => void;
  onCalculatorClick: () => void;
}

export function AffiliateHero({ onApplyClick, onCalculatorClick }: AffiliateHeroProps) {
  const [copiedSample, setCopiedSample] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText("https://smoothsales.ai/?ref=YOUR_NAME");
    setCopiedSample(true);
    setTimeout(() => setCopiedSample(false), 2000);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">
          <Link href="/" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/partners" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Partners
          </Link>
          <span>/</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Affiliate Program</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
              <span>Official SmoothSales Affiliate Program</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-[10px] font-mono font-bold">
                20% - 30% Recurring
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Earn <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Passive Recurring Income</span> by Recommending India&apos;s Fastest CRM
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              Help businesses, sales teams, and agencies automate WhatsApp follow-ups and lead management. Earn <strong>20% to 30% monthly recurring commission</strong> for every paying customer you introduce — paid directly to your bank account via UPI/NEFT every single month.
            </p>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>90-Day Cookie Window & Attribution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Automated Payouts on the 5th of Each Month</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Zero Support Or Billing Burden On You</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>High-Converting 14-Day Free Trial Funnel</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Button
                onClick={onApplyClick}
                className="w-full sm:w-auto h-12 px-7 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 gap-2 font-heading cursor-pointer transition-all hover:scale-[1.02]"
              >
                <span>Join Affiliate Program (Free)</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                onClick={onCalculatorClick}
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 text-sm font-semibold rounded-xl border-slate-300 dark:border-white/15 bg-white/70 dark:bg-white/5 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 gap-2 cursor-pointer font-heading"
              >
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <span>Calculate Your Payout</span>
              </Button>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              100% Free to join • Instant affiliate link generation • No minimum followers required
            </p>
          </div>

          {/* Right Column: Interactive Affiliate Portal Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200 dark:border-white/10 shadow-2xl p-6 backdrop-blur-xl space-y-5 overflow-hidden">
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Portal Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <Percent className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-heading text-slate-900 dark:text-white">
                      Affiliate Portal
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Live Dashboard Simulation
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                  Tier: Elite (30%)
                </Badge>
              </div>

              {/* Quick metrics grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Users className="h-3 w-3 text-cyan-500" />
                    <span>Active Referrals</span>
                  </div>
                  <div className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
                    42 Businesses
                  </div>
                  <div className="text-[10px] text-emerald-500 font-medium">
                    +6 this month
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-1">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Wallet className="h-3 w-3 text-emerald-500" />
                    <span>This Month&apos;s Payout</span>
                  </div>
                  <div className="text-xl font-heading font-extrabold text-emerald-600 dark:text-emerald-400">
                    ₹68,400
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    Dispatches on 5th
                  </div>
                </div>
              </div>

              {/* Your Personal Referral Link Sample */}
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <span>Your Dedicated Referral Link</span>
                  <span className="text-[10px] font-mono text-emerald-500">90-Day Cookie Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://smoothsales.ai/?ref=YOUR_NAME"
                    className="w-full text-xs font-mono bg-white dark:bg-[#070817] border border-slate-300 dark:border-white/15 rounded-lg px-2.5 py-1.5 text-slate-800 dark:text-slate-200 select-all focus:outline-none"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyLink}
                    className="h-8 px-2.5 shrink-0 text-xs border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 cursor-pointer"
                  >
                    {copiedSample ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Recent activity feed simulation */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/40 font-bold">
                  Recent Commission Events
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        Apex Realty (8 Users) Upgraded
                      </span>
                    </div>
                    <span className="font-heading font-bold text-emerald-600 dark:text-emerald-400">
                      +₹2,400/mo
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        Zenith Classes (15 Users) Renewed
                      </span>
                    </div>
                    <span className="font-heading font-bold text-emerald-600 dark:text-emerald-400">
                      +₹4,500/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat highlight badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-white/10">
          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
              20% - 30%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Lifetime recurring revenue share
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-600 dark:text-emerald-400">
              90 Days
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Industry-leading cookie attribution
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
              5th of Month
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Direct Bank NEFT / UPI auto-payout
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/60 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-600 dark:text-cyan-400">
              ₹0 Setup
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              100% free to join, zero sales quota
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
