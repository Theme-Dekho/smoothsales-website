"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, CheckCircle2, TrendingUp, Shield, Cpu, Layers } from "lucide-react";

export function BusinessModelSection() {
  const [activeUsers, setActiveUsers] = useState<number>(88);
  const [pricePerUser, setPricePerUser] = useState<number>(400);
  const workspaces = 6;
  const costPerUser = 80;

  const revenue = activeUsers * pricePerUser;
  const totalCost = activeUsers * costPerUser;
  const profitMargin = revenue - totalCost;

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50/70 dark:bg-[#070817] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">
        {/* Section Heading */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            BUSINESS MODEL
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            You own the business. We own the plumbing.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            As a White Label Partner, you&apos;re an independent business entity — SmoothSales.ai is your SaaS backend, not your competitor for the customer relationship.
          </p>
        </div>

        {/* 3 Step Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-7 shadow-xs space-y-3 hover:border-primary/40 transition-colors">
            <span className="text-[11px] font-mono font-extrabold text-primary dark:text-cyan-400">
              01
            </span>
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Your Brand
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Customers see your name, your logo, your domain. The relationship — and the trust — belongs entirely to your business, not ours.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-7 shadow-xs space-y-3 hover:border-primary/40 transition-colors">
            <span className="text-[11px] font-mono font-extrabold text-primary dark:text-cyan-400">
              02
            </span>
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Your Pricing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              You decide what to charge. Your cost from SmoothSales.ai is fixed and predictable — the margin above it is yours to set and keep.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-7 shadow-xs space-y-3 hover:border-primary/40 transition-colors">
            <span className="text-[11px] font-mono font-extrabold text-primary dark:text-cyan-400">
              03
            </span>
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Our Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Backend infrastructure, license management, the CRM engine itself, and technical support — all run and maintained by SmoothSales.ai.
            </p>
          </div>
        </div>

        {/* Live Mock Console / Dashboard Preview Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-[#0A0D1F] text-white p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top window bar */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-orange-500" />
                <span className="font-mono text-xs font-bold text-orange-400 tracking-wide uppercase">
                  Vertex Sales
                </span>
                <span className="text-[10px] text-white/40 hidden sm:inline">
                  (White Label Tenant)
                </span>
              </div>
              <div className="text-[11px] font-mono text-white/40">
                app.vertexsales.in
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 py-6 sm:py-8">
              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  Active Users
                </div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                  {activeUsers}
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  Workspaces
                </div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                  {workspaces}
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  Price / User
                </div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                  ₹{pricePerUser}
                </div>
              </div>

              <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                  Revenue
                </div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-rose-400">
                  ₹{revenue.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 sm:p-4 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                  Profit Margin
                </div>
                <div className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-400">
                  ₹{profitMargin.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="text-center pt-3 border-t border-white/10 text-xs sm:text-[13px] font-mono text-white/60">
              Same CRM engine, same ₹80/user cost — every partner&apos;s own price, own profit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
