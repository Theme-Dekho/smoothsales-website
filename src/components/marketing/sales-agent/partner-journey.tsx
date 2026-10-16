"use client";

import React from "react";

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

const STEPS: StepItem[] = [
  {
    num: "1",
    title: "Apply",
    desc: "Register with your mobile number and basic details on this page.",
  },
  {
    num: "2",
    title: "Demo Walkthrough",
    desc: "Get trained on the product demo and pricing by our team.",
  },
  {
    num: "3",
    title: "KYC Verification",
    desc: "Registration reviewed and approved by our admin team.",
  },
  {
    num: "4",
    title: "₹999 Onboarding",
    desc: "Pay the refundable setup fee to unlock your partner kit.",
  },
  {
    num: "5",
    title: "Start Meeting Clients",
    desc: "Begin local, face-to-face outreach and demos in your area.",
  },
  {
    num: "6",
    title: "Payout Starts",
    desc: "Every client that signs up adds to your monthly payout.",
  },
];

export function PartnerJourney() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            PARTNER JOURNEY
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            From application to your first payout in six steps
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            The path from first sign-up to your monthly payout starting.
          </p>
        </div>

        {/* 6 Steps Progression */}
        <div className="relative">
          {/* Horizontal Line connecting numbers on desktop */}
          <div className="hidden lg:block absolute top-5 left-10 right-10 h-0.5 bg-slate-200 dark:bg-white/10 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-6 relative z-10">
            {STEPS.map((step, idx) => (
              <div key={idx} className="space-y-3 flex flex-col items-start lg:items-start">
                {/* Number Circle */}
                <div className="w-10 h-10 rounded-full border-2 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-[#0B0E23] flex items-center justify-center text-xs font-heading font-bold text-indigo-600 dark:text-indigo-400 shadow-xs">
                  {step.num}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
