"use client";

import React, { useState } from "react";
import {
  Calculator,
  TrendingUp,
  Sparkles,
  ArrowRight,
  DollarSign,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PLANS = [
  { name: "Starter Team", price: 1499, description: "Small sales teams & brokers" },
  { name: "Growth Pipeline", price: 2999, description: "High-velocity sales teams (5-15 agents)" },
  { name: "Scale & Automation", price: 4999, description: "Builders, EdTech & BFSI (15-40 agents)" },
  { name: "Custom Enterprise", price: 9999, description: "Multi-branch channel networks" },
];

export function PartnerCalculator({ onApplyWithCalculation }) {
  const [partnerType, setPartnerType] = useState("agency"); // "agency" (35%) or "referral" (20%)
  const [clientCount, setClientCount] = useState(12);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(2); // Scale & Automation (₹4,999)

  const commissionRate = partnerType === "agency" ? 0.35 : 0.20;
  const ratePercentage = partnerType === "agency" ? "35%" : "20%";

  const planPrice = PLANS[selectedPlanIndex].price;
  const monthlyGrossBilling = clientCount * planPrice;
  const monthlyPartnerEarnings = Math.round(monthlyGrossBilling * commissionRate);
  const annualPartnerEarnings = monthlyPartnerEarnings * 12;

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="partner-calculator" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-100/60 dark:bg-[#07080F]/90 border-y border-slate-200/80 dark:border-white/10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
          >
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Partner ROI Simulator</span>
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Recurring Monthly Income
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
            See exactly how much predictable monthly recurring revenue (MRR) your agency or consultancy can generate by recommending SmoothSales.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0E0F1D] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Background decorative glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Control 1: Partner Track Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                1. Select Your Partnership Track
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPartnerType("agency")}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    partnerType === "agency"
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-heading font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Agency &amp; Reseller</span>
                    <Badge className="bg-primary text-white text-[10px] px-1.5 py-0 font-mono">35% Share</Badge>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Manage client accounts &amp; retained retainers
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPartnerType("referral")}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    partnerType === "referral"
                      ? "border-emerald-500 bg-emerald-500/10 shadow-sm"
                      : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-heading font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>Referral &amp; Affiliate</span>
                    <Badge className="bg-emerald-600 text-white text-[10px] px-1.5 py-0 font-mono">20% Share</Badge>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Hands-off referral with automated tracking
                  </div>
                </button>
              </div>
            </div>

            {/* Control 2: Active Clients Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  2. Number of Active Referred Clients
                </label>
                <span className="text-lg font-heading font-extrabold text-primary dark:text-cyan-400">
                  {clientCount} {clientCount === 1 ? "Client" : "Clients"}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={clientCount}
                onChange={(e) => setClientCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-white/15 rounded-lg appearance-none cursor-pointer accent-primary"
              />

              {/* Quick Preset Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[3, 8, 15, 25, 40].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setClientCount(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      clientCount === preset
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent"
                        : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary/50"
                    }`}
                  >
                    {preset} Clients
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Average Client Plan Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                3. Typical Client Subscription Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PLANS.map((plan, idx) => (
                  <button
                    key={plan.name}
                    type="button"
                    onClick={() => setSelectedPlanIndex(idx)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedPlanIndex === idx
                        ? "border-cyan-500 bg-cyan-500/10 text-slate-900 dark:text-white ring-1 ring-cyan-500/50"
                        : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{plan.name}</div>
                    <div className="text-sm font-extrabold font-heading text-primary dark:text-cyan-400 mt-1">
                      ₹{plan.price.toLocaleString("en-IN")}/mo
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Payout Output Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#101328] to-[#0A0D1B] text-white rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-2xl pointer-events-none rounded-full" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                Live Earnings Projection
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40">
                {ratePercentage} Rev-Share
              </span>
            </div>

            {/* Monthly Earnings Highlight */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400">Your Monthly Recurring Payout</div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-emerald-400 tracking-tight">
                {formatINR(monthlyPartnerEarnings)}
                <span className="text-sm sm:text-base text-slate-400 font-normal"> / month</span>
              </div>
              <div className="text-xs text-slate-400 pt-1">
                Disbursed every month on the 1st automatically via UPI/NEFT.
              </div>
            </div>

            {/* Annual Run-Rate Projection */}
            <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Annualized Recurring Revenue:</span>
                <span className="font-heading font-bold text-white text-base">
                  {formatINR(annualPartnerEarnings)} / yr
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Client Portfolio Spend:</span>
                <span className="font-mono text-slate-300">
                  {formatINR(monthlyGrossBilling)} / mo
                </span>
              </div>
            </div>

            {/* Impact Metric */}
            <div className="text-xs text-cyan-200/90 flex items-start gap-2 bg-cyan-950/40 border border-cyan-800/40 p-3 rounded-xl">
              <Sparkles className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Recommending just {clientCount} clients builds an ongoing annual passive asset of{" "}
                <strong>{formatINR(annualPartnerEarnings)}</strong> without having to build or maintain software yourself!
              </span>
            </div>

            {/* Call to action */}
            <Button
              onClick={() =>
                onApplyWithCalculation &&
                onApplyWithCalculation({
                  track: partnerType,
                  clients: clientCount,
                  plan: PLANS[selectedPlanIndex].name,
                  projectedEarnings: monthlyPartnerEarnings,
                })
              }
              className="w-full h-12 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/25 gap-2 font-heading active:scale-95 transition-all cursor-pointer"
            >
              <span>Lock In This Partnership Tier</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
