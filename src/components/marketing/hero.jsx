"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/constants";
import { useLeadModal } from "./lead-modal-context";

export function Hero() {
  const { openLeadModal } = useLeadModal();
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 lg:py-2 overflow-hidden">
      {/* Ambient light glow spheres */}
      <div
        className="absolute left-1/2 -translate-x-1/2 lg:left-[4%] lg:translate-x-0 top-[-80px] w-[350px] sm:w-[550px] h-[350px] sm:h-[450px] max-w-full rounded-full bg-gradient-to-br from-indigo-500/18 via-sky-500/12 to-transparent blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 lg:right-[-4%] bottom-[-80px] w-[350px] sm:w-[650px] h-[300px] sm:h-[400px] max-w-full rounded-full bg-gradient-to-tl from-purple-600/16 via-pink-500/10 to-transparent blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, subtext, dual CTAs, trust row */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-3.5 sm:space-y-4 text-center lg:text-left">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-[11px] font-semibold text-sky-600 dark:text-sky-300 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 animate-ping" />
            <span className="font-mono uppercase tracking-wider text-[10.5px]">
              AI-Powered Sales &amp; Partner CRM
            </span>
          </motion.div>

          {/* Headline with animated curved underline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="space-y-1"
          >
            <h1 className="text-[28px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-heading font-black tracking-tight text-slate-900 dark:text-white leading-[1.14] sm:leading-[1.08]">
              Run every lead, every channel,
              <span className="block mt-0.5 sm:mt-1">
                every partner â€”{" "}
                <span className="relative inline-block bg-gradient-to-r from-sky-500 via-primary to-cyan-500 dark:from-sky-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  in one place.
                  <svg
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 sm:h-2.5 text-cyan-500/80 dark:text-cyan-400/80 overflow-visible"
                    viewBox="0 0 260 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M3 8.5C55 2.5 145 2 257 7.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="text-xs sm:text-base text-slate-600 dark:text-[#A0A0B0] max-w-xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0"
          >
            Calls, WhatsApp, and follow-ups in one place â€” with sub-60s automated
            lead routing and transparent partner commission ledgers, built for how Indian sales teams actually close.
          </motion.p>

          {/* Dual CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0"
          >
            <Link href={getAppUrl("/signup")} className="w-full sm:w-auto">
              <Button
                size="default"
                className="w-full sm:w-auto h-12 px-7 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-primary via-primary to-sky-600 hover:from-primary/90 hover:to-sky-500 text-white shadow-md shadow-primary/25 gap-2 font-heading active:scale-[0.98] transition-all"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              onClick={() => openLeadModal("hero_cta")}
              variant="outline"
              size="default"
              className="w-full sm:w-auto h-12 px-6 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300/80 dark:border-white/15 bg-white/80 dark:bg-white/[0.05] text-slate-800 dark:text-white hover:bg-slate-100/90 dark:hover:bg-white/10 active:scale-[0.98] transition-all font-heading shadow-2xs cursor-pointer gap-2"
            >
              <Calendar className="h-4 w-4 text-primary" />
              <span>Book a Demo</span>
            </Button>
          </motion.div>

          {/* Trust checkmarks row with clean badge styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] text-slate-600 dark:text-[#9092A2]"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Built for Indian sales teams
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              AI sets up in 2 min
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              No credit card required
            </span>
          </motion.div>
        </div>

        {/* Right Column: Clean Chrome Web CRM + Modern Android Phone Showcase */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center lg:justify-end w-full pt-3 lg:pt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[480px] min-h-[300px] sm:h-[350px] flex justify-center sm:block mx-auto">
            {/* Layer 1: Universal Chrome Web CRM Window Backdrop (Windows/Chrome style) */}
            <div
              className="hidden sm:block absolute -left-10 sm:-left-14 top-1 sm:top-2 w-[390px] sm:w-[430px] rounded-xl bg-[#12121D] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden pointer-events-none"
              style={{
                transform: "perspective(1200px) rotateY(-9deg) rotateX(2deg)",
              }}
            >
              {/* Chrome/Windows-style Browser Bar */}
              <div className="h-7 bg-[#161624] border-b border-white/10 px-2.5 flex items-center justify-between">
                {/* Active Tab */}
                <div className="flex items-center gap-2 bg-[#1A1A2A] px-2.5 py-1 rounded-t-md border-t border-x border-white/10 text-[9.5px] text-white/80 font-medium">
                  <div className="w-2.5 h-2.5 rounded bg-primary flex items-center justify-center text-[7px] font-bold text-white">
                    S
                  </div>
                  <span>app.smoothsales.ai</span>
                </div>
                {/* Windows-style Window Controls */}
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono pr-1">
                  <span>â€”</span>
                  <span>â–¡</span>
                  <span className="hover:text-red-400">âœ•</span>
                </div>
              </div>

              {/* Real CRM Dashboard UI Image */}
              <div className="relative aspect-[16/9.5] w-full bg-[#0A0A0F] overflow-hidden">
                <img
                  src="/images/crm-dashboard-hero.jpg"
                  alt="SmoothSales.ai Live CRM Pipeline Dashboard"
                  className="w-full h-full object-cover object-left-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0F]/50 pointer-events-none" />
              </div>
            </div>

            {/* Layer 2: Sleek Modern Android Device (Targeting Indian Reps on Android) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto sm:absolute sm:right-2 sm:top-1 z-20 w-[225px] sm:w-[255px] rounded-[28px] p-2 bg-gradient-to-b from-[#222130] via-[#14131B] to-[#0D0D14] border border-white/15 shadow-2xl shadow-black/90 shrink-0"
            >
              {/* Android Punch-Hole Camera (Centered Minimal Dot) */}
              <div className="w-2.5 h-2.5 bg-black rounded-full mx-auto mb-1 border border-white/10" />

              {/* Inner Screen */}
              <div className="rounded-[22px] bg-[#0E0E15] border border-white/10 p-2.5 space-y-2 text-white overflow-hidden">
                {/* Android Status Bar (9:41, VoLTE â€¢ 5G, Battery) */}
                <div className="flex items-center justify-between text-[8.5px] text-white/60 font-mono px-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[7.5px] text-emerald-400 font-bold">VoLTE</span>
                    <span>5G</span>
                    <span className="text-[9px]">98%</span>
                  </div>
                </div>

                {/* Android App Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <div>
                    <div className="text-[8.5px] uppercase font-bold text-primary tracking-wider">
                      SmoothSales Android
                    </div>
                    <div className="text-[10.5px] font-extrabold text-white">
                      Field Agent Workspace
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded-full text-[8px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30">
                    Active
                  </span>
                </div>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-1 rounded bg-white/5 border border-white/5">
                    <div className="text-[7.5px] text-white/50">New</div>
                    <div className="text-[11px] font-extrabold text-white">42</div>
                    <div className="text-[7px] text-cyan-400 font-mono">&lt;60s</div>
                  </div>
                  <div className="p-1 rounded bg-white/5 border border-white/5">
                    <div className="text-[7.5px] text-white/50">Active</div>
                    <div className="text-[11px] font-extrabold text-amber-300">18</div>
                    <div className="text-[7px] text-white/40">Calls</div>
                  </div>
                  <div className="p-1 rounded bg-white/5 border border-white/5">
                    <div className="text-[7.5px] text-white/50">Won</div>
                    <div className="text-[11px] font-extrabold text-emerald-400">11</div>
                    <div className="text-[7px] text-white/40">â‚¹64L</div>
                  </div>
                </div>

                {/* Priority Actions (WhatsApp & Calling for Indian Sales Teams) */}
                <div className="space-y-1.5 pt-0.5">
                  <div className="flex items-center justify-between text-[8px] font-bold text-white/70">
                    <span>Priority Leads</span>
                    <span className="text-primary font-mono text-[7.5px]">AUTO-DISPATCH</span>
                  </div>

                  {/* Lead 1: WhatsApp Enquiry */}
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 rounded bg-[#25D366]/20 text-[#25D366]">
                        <MessageCircle className="h-2.5 w-2.5" />
                      </div>
                      <div>
                        <div className="text-[9.5px] font-bold text-white leading-tight">
                          Priya S. Â· 3BHK Sector 62
                        </div>
                        <div className="text-[7.5px] text-emerald-400">
                          WhatsApp template auto-sent
                        </div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-bold text-cyan-400 bg-cyan-400/10 px-1 py-0.5 rounded font-mono">
                      52s
                    </span>
                  </div>

                  {/* Lead 2: 1-Tap Site Visit Follow-up */}
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 rounded bg-amber-500/20 text-amber-400">
                        <Calendar className="h-2.5 w-2.5" />
                      </div>
                      <div>
                        <div className="text-[9.5px] font-bold text-white leading-tight">
                          Rohan V. Â· Site Visit
                        </div>
                        <div className="text-[7.5px] text-white/50">
                          Confirmed 4 PM (Today)
                        </div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-mono text-white/50">Today</span>
                  </div>

                  {/* Lead 3: Channel Partner Commission */}
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/8 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 rounded bg-purple-500/20 text-purple-300">
                        <Building2 className="h-2.5 w-2.5" />
                      </div>
                      <div>
                        <div className="text-[9.5px] font-bold text-white leading-tight">
                          Broker Split Â· Apex Realty
                        </div>
                        <div className="text-[7.5px] text-white/50">
                          â‚¹18,500 TDS verified
                        </div>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-bold text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">
                      Locked
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

