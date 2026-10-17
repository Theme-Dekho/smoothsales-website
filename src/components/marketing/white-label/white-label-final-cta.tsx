"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhiteLabelFinalCta() {
  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 text-white p-8 sm:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background decorative swirl */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 space-y-3 text-center md:text-left max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white/20 text-white border border-white/30 backdrop-blur-sm">
              GO LIVE IN DAYS
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Ready to run your own CRM business?
            </h2>
            <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed">
              Join the white label partner program and launch under your brand with isolated workspaces, full billing autonomy, and enterprise infrastructure.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Button
              onClick={scrollToApply}
              className="h-12 px-8 text-sm font-heading font-bold rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl active:scale-[0.98] transition-all cursor-pointer gap-2"
            >
              <span>Apply for White Label</span>
              <ArrowRight className="w-4 h-4 text-cyan-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
