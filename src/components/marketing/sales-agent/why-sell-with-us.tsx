"use client";

import React from "react";

const ADVANTAGES = [
  {
    num: "01",
    title: "Sell Under an Established Name",
    desc: "You represent SmoothSales.ai directly — no brand-building, no trust to earn from scratch.",
  },
  {
    num: "02",
    title: "Zero Product Risk",
    desc: "You're not responsible for the CRM working, staying online, or getting updated. That's entirely on us.",
  },
  {
    num: "03",
    title: "Minimum Cost to Start",
    desc: "Begin with just ₹999 — a refundable onboarding fee, not a heavy upfront investment.",
  },
  {
    num: "04",
    title: "No Technical Knowledge Required",
    desc: "Run the demo, close the client, and move on — no servers, code, or setup to understand.",
  },
  {
    num: "05",
    title: "Recurring, Not One-Time",
    desc: "Your payout is credited every month the client stays active — not just on the day you close the sale.",
  },
  {
    num: "06",
    title: "Work From Anywhere in India",
    desc: "Pick your own local area. No office, no fixed territory assignment required to start.",
  },
  {
    num: "07",
    title: "Company Leads, Once You've Earned Them",
    desc: "You generate your own leads from day one. Stay active for 3 months with an average of 50+ users sold, and SmoothSales.ai starts sending you leads directly too.",
  },
  {
    num: "08",
    title: "Support Handled For You",
    desc: "Client queries after the sale go to SmoothSales.ai by default — you're never stuck troubleshooting alone.",
  },
];

export function WhySellWithUs() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-100/60 dark:bg-[#070913] transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Navy/Dark Slate Premium Box */}
        <div className="relative rounded-3xl bg-[#090D1E] text-white border border-white/10 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
          {/* Subtle grid pattern in background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 space-y-10 sm:space-y-12">
            {/* Header */}
            <div className="space-y-3 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-300 bg-cyan-950/70 border border-cyan-500/30">
                WHY SELL WITH US
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Built so the field work pays off
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Every rule in the partner program is designed around one idea: you take the meeting,
                we take the risk of running the business behind it.
              </p>
            </div>

            {/* 8-Grid Table Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/10 overflow-hidden divide-y md:divide-y-0 divide-white/10 bg-white/[0.02]">
              {ADVANTAGES.map((item, idx) => {
                const isRightCol = idx % 2 === 1;
                const isNotLastTwo = idx < 6;

                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-8 space-y-2 hover:bg-white/[0.04] transition-colors ${
                      isRightCol ? "md:border-l md:border-white/10" : ""
                    } ${isNotLastTwo ? "md:border-b md:border-white/10" : ""}`}
                  >
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      {item.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
