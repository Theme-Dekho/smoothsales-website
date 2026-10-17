"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateFinalCtaProps {
  onApplyClick: () => void;
}

export function AffiliateFinalCta({ onApplyClick }: AffiliateFinalCtaProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-b from-[#0A1826] via-[#081B24] to-[#062024] border border-emerald-500/30 p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
        {/* Glow lights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>Start Earning in Less Than 5 Minutes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Ready to Turn Your Recommendations into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Recurring Monthly Income?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Join hundreds of creators, consultants, and agencies who earn recurring monthly commissions recommending SmoothSales. No setup fee, no quotas, 100% automated payouts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Button
              onClick={onApplyClick}
              className="w-full sm:w-auto h-12 px-8 text-sm font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 gap-2 font-heading shadow-lg shadow-emerald-500/25 transition-all cursor-pointer hover:scale-105"
            >
              <span>Join Affiliate Program (Free)</span>
              <ArrowRight className="h-4 w-4" />
            </Button>

            <a
              href="mailto:partners@smoothsales.in?subject=Affiliate%20Inquiry"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 px-6 text-sm font-semibold rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 gap-2 cursor-pointer font-heading"
              >
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>Talk to Affiliate Director</span>
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 pt-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>90-Day Cookie Tracking</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Direct Bank / UPI on 5th</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>GST Compliant Invoicing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
