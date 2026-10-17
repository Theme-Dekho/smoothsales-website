"use client";

import React, { useState } from "react";
import {
  Calculator,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AffiliateCalculatorProps {
  onApplyClick?: () => void;
}

export function AffiliateCalculator({ onApplyClick }: AffiliateCalculatorProps) {
  const [referrals, setReferrals] = useState<number>(20);
  const [teamSize, setTeamSize] = useState<number>(8);
  const [avgPlanPrice, setAvgPlanPrice] = useState<number>(999); // ₹999/user/month

  // Determine commission rate based on referrals
  let commissionRate = 0.2; // 20%
  let tierName = "Starter Partner (20%)";
  let tierBadgeColor = "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400";

  if (referrals >= 25) {
    commissionRate = 0.3; // 30%
    tierName = "Elite Partner (30%)";
    tierBadgeColor = "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
  } else if (referrals >= 10) {
    commissionRate = 0.25; // 25%
    tierName = "Growth Partner (25%)";
    tierBadgeColor = "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400";
  }

  const totalUsers = referrals * teamSize;
  const totalMonthlySpend = totalUsers * avgPlanPrice;
  const monthlyCommission = Math.round(totalMonthlySpend * commissionRate);
  const annualCommission = monthlyCommission * 12;

  return (
    <section id="affiliate-calculator" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
        >
          <Calculator className="h-3.5 w-3.5" />
          <span>Interactive Commission Simulator</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Calculate Your Monthly{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Passive Payout
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Unlike one-time referral programs, SmoothSales pays you every single month as long as your referred customer remains active. Adjust the sliders to see what you could earn.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Controls */}
        <Card className="lg:col-span-7 rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-xl space-y-6">
          {/* Tier Status Banner */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Current Unlocked Tier:
              </span>
            </div>
            <Badge variant="outline" className={`text-xs font-mono font-bold ${tierBadgeColor}`}>
              {tierName}
            </Badge>
          </div>

          {/* Slider 1: Active Referrals */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Number of Referred Businesses
              </label>
              <span className="font-heading font-extrabold text-lg text-emerald-600 dark:text-emerald-400">
                {referrals} companies
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="60"
              step="1"
              value={referrals}
              onChange={(e) => setReferrals(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <span>2 businesses (Starter)</span>
              <span>10+ (Growth 25%)</span>
              <span>25+ (Elite 30%)</span>
              <span>60 businesses</span>
            </div>
          </div>

          {/* Slider 2: Average Users Per Business */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Average Team Size (Sales Reps / Company)
              </label>
              <span className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                {teamSize} reps
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="25"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <span>3 reps (Boutique)</span>
              <span>10 reps (Mid-market)</span>
              <span>25 reps (Enterprise)</span>
            </div>
          </div>

          {/* Plan Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Average Plan Package
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "Starter", price: 499, desc: "₹499/user" },
                { label: "Growth", price: 999, desc: "₹999/user (Most Popular)" },
                { label: "Pro Suite", price: 1499, desc: "₹1,499/user" },
              ].map((p) => (
                <button
                  key={p.price}
                  type="button"
                  onClick={() => setAvgPlanPrice(p.price)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    avgPlanPrice === p.price
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 shadow-sm"
                      : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="text-xs font-bold font-heading">{p.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Summary metrics row */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400">Total Active CRM Seats:</span>
              <p className="font-heading font-bold text-slate-900 dark:text-white text-base">
                {totalUsers.toLocaleString()} Users
              </p>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400">Monthly Billing Volume:</span>
              <p className="font-heading font-bold text-slate-900 dark:text-white text-base">
                ₹{totalMonthlySpend.toLocaleString("en-IN")}/mo
              </p>
            </div>
          </div>
        </Card>

        {/* Right: Projected Earnings Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl bg-gradient-to-b from-[#0B0C16] via-[#0E1020] to-[#121C38] border border-emerald-500/30 p-6 sm:p-8 text-white shadow-2xl space-y-6 overflow-hidden">
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/20 blur-3xl pointer-events-none" />

            <div className="space-y-1 relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Your Projected Recurring Commission</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold tracking-tight">
                Passive Income Projection
              </h3>
            </div>

            {/* Monthly figure */}
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1 relative z-10">
              <span className="text-xs text-slate-400 font-medium">
                Monthly Payout (Every 5th)
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-emerald-400 tracking-tight">
                ₹{monthlyCommission.toLocaleString("en-IN")}
                <span className="text-sm font-sans font-normal text-slate-400"> / month</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Net payout via NEFT / UPI with GST invoice
              </p>
            </div>

            {/* Annual figure */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between relative z-10">
              <div>
                <div className="text-xs text-slate-400">Annual Run-Rate Earnings</div>
                <div className="text-xl sm:text-2xl font-heading font-bold text-white">
                  ₹{annualCommission.toLocaleString("en-IN")}
                </div>
              </div>
              <Badge className="bg-emerald-500 text-slate-950 font-bold font-mono text-[10px]">
                12 Months Run Rate
              </Badge>
            </div>

            {/* Unlocked Partner Privileges */}
            <div className="space-y-2.5 pt-2 border-t border-white/10 relative z-10 text-xs">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Included with Your Tier:
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Free SmoothSales Growth Workspace for personal use</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Dedicated Affiliate Success Manager & custom coupons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Co-branded landing pages for high-volume channels</span>
                </li>
              </ul>
            </div>

            {/* Action button */}
            <div className="pt-2 relative z-10">
              <Button
                onClick={onApplyClick}
                className="w-full h-11 text-xs sm:text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 gap-2 font-heading shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Lock In This Affiliate Tier Now</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
