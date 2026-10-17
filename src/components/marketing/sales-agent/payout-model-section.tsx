"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function PayoutModelSection() {
  return (
    <section id="model" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            PAYOUT MODEL
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            You bring the meeting. We run the plumbing.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            As a Business Partner, you&apos;re an independent partner earning a fixed payout — SmoothSales.ai is the product and the backend, not something you have to manage.
          </p>
        </div>

        {/* 3 Business Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1126] p-6 sm:p-7 space-y-4 hover:border-indigo-400/50 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-mono font-bold text-xs flex items-center justify-center">
              01
            </span>
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
              Your Meeting
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              You find the client, walk in face-to-face, and run the live demo. The conversation is entirely yours to own.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1126] p-6 sm:p-7 space-y-4 hover:border-indigo-400/50 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 font-mono font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
              Our Platform
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Product, onboarding, billing and support all run on SmoothSales.ai&apos;s own name and infrastructure — nothing for you to build or maintain.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1126] p-6 sm:p-7 space-y-4 hover:border-indigo-400/50 transition-colors">
            <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
              Your Payout
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              ₹150 per user, every month the client stays subscribed. Paid directly to you — you never touch client billing.
            </p>
          </div>
        </div>

        {/* Payout Slip Mockup */}
        <div className="rounded-2xl border border-white/10 bg-[#0B0E23] text-white shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 bg-white/[0.04] border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold text-cyan-300 ml-2">
              Partner Payout — This Month
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-white/10">
            <div className="p-4 sm:p-5 bg-[#0B0E23]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Users Sold
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white">468</span>
            </div>

            <div className="p-4 sm:p-5 bg-[#0B0E23]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Payout / User
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-teal-400">₹150</span>
            </div>

            <div className="p-4 sm:p-5 bg-[#0B0E23]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Client Pays (MRP)
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-indigo-300">₹350</span>
            </div>

            <div className="p-4 sm:p-5 bg-[#0B0E23]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Your Payout
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-teal-400">₹70,200</span>
            </div>

            <div className="p-4 sm:p-5 bg-[#0B0E23] col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Payout Cycle
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white">Monthly</span>
            </div>
          </div>

          <div className="p-3.5 text-center text-xs font-mono text-slate-400 bg-white/[0.02] border-t border-white/10">
            Same payout rate for every partner — the more you sell, the more your monthly payout grows.
          </div>
        </div>
      </div>
    </section>
  );
}
