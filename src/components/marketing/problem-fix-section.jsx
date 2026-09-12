"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertTriangle, ArrowRight, Zap, ShieldCheck, Activity } from "lucide-react";
import { MARKETING_LEAKS } from "@/lib/mock-data/marketing-leaks";

export function ProblemFixSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentLeak = MARKETING_LEAKS[activeIndex] || MARKETING_LEAKS[0];

  const [feedEvents, setFeedEvents] = useState(() => currentLeak.liveFeedEvents);

  const handleSelectTab = (idx) => {
    setActiveIndex(idx);
    const selected = MARKETING_LEAKS[idx] || MARKETING_LEAKS[0];
    setFeedEvents(selected.liveFeedEvents);
  };

  // Rotate feed events every 3.8s to keep the live feed visibly vibrant and active
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedEvents((prev) => {
        if (!prev || prev.length === 0) return prev;
        const last = prev[prev.length - 1];
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const updatedEvent = {
          ...last,
          time: timeString,
        };

        return [updatedEvent, ...prev.slice(0, prev.length - 1)];
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getToneDot = (tone) => {
    switch (tone) {
      case "primary":
        return "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]";
      case "success":
        return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]";
      case "warning":
        return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]";
      case "destructive":
        return "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section
      id="problem-fix"
      className="relative flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0A0A0F] via-[#0E0E18] to-[#07070B] text-white w-full"
    >
      {/* Ambient glowing radial light fields */}
      <div
        className="absolute left-1/2 -top-40 -translate-x-1/2 w-[850px] h-[520px] max-w-[120vw] rounded-full bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 bottom-0 w-[550px] h-[450px] rounded-full bg-rose-500/8 blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6 sm:space-y-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[11px] font-bold uppercase tracking-widest font-mono">
            <Zap className="h-3 w-3 text-purple-400" />
            <span>From Lead to Close</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight leading-[1.15]">
            Your sales process is{" "}
            <span className="bg-gradient-to-r from-[#FF9A7D] via-[#F0604A] to-[#E24A34] bg-clip-text text-transparent">
              leaking money.
            </span>{" "}
            <span className="bg-gradient-to-r from-[#C7D2FE] via-[#BAE6FD] to-[#A5F3FC] bg-clip-text text-transparent">
              Here&apos;s where.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#9A9CAE] max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            Four quiet leaks drain revenue between a new inbound lead and a closed deal.
            Pick one — see the SmoothSales fix in action.
          </p>
        </div>

        {/* Connected Stepper with Mobile 2x2 Segmented Grid & Desktop Row */}
        <div className="w-full py-1">
          <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
            {MARKETING_LEAKS.map((leak, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={leak.id}
                  type="button"
                  onClick={() => handleSelectTab(idx)}
                  className={`group flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-xl sm:rounded-full transition-all text-xs font-bold cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-sky-600 text-white shadow-md shadow-primary/25 border border-cyan-400/40 scale-[1.02] sm:scale-105"
                      : "bg-white/5 text-[#8F92A6] hover:bg-white/10 hover:text-white border border-white/8"
                  }`}
                >
                  <span
                    className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                      isActive
                        ? "bg-white text-primary"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="tracking-tight text-[11px] sm:text-xs truncate">
                    {leak.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Panel Content with Smooth Cross-fade */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
            >
              {/* Left Panel: Dark Story Card */}
              <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#141422] to-[#0E0E18] border border-white/10 shadow-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-4 relative overflow-hidden">
                {/* Left vertical leak accent indicator */}
                <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-[#F0604A] via-[#F0604A]/50 to-transparent rounded-r" />

                <div className="space-y-3 relative z-10 pl-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-extrabold uppercase tracking-widest text-[#FF9A7D] bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded">
                      <AlertTriangle className="h-3 w-3" />
                      {currentLeak.leakLabel}
                    </span>
                    <span className="text-[10.5px] text-white/40 font-mono">
                      · Critical Pipeline Leak
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-extrabold text-white leading-snug">
                    {currentLeak.headline}
                  </h3>

                  <p className="text-xs text-[#B0B2C2] leading-relaxed">
                    {currentLeak.description}
                  </p>

                  {/* Divider with The SmoothSales Fix */}
                  <div className="pt-2.5 border-t border-white/10 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/30 to-transparent" />
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <ShieldCheck className="h-3 w-3" />
                        The SmoothSales Fix
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-emerald-500/30 to-transparent" />
                    </div>

                    <ul className="space-y-2 pt-0.5">
                      {currentLeak.fixItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact Stat Banner */}
                <div className="pt-2.5 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 lg:-mx-6 lg:-mb-6 p-3 sm:p-4 bg-gradient-to-r from-primary/40 via-sky-500/20 to-transparent border-t border-white/10 flex items-center gap-3 rounded-b-2xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-cyan-300 font-mono shrink-0">
                    {currentLeak.impactStat}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[9px] uppercase font-mono tracking-widest text-sky-300 font-bold">
                      Proven Measurable Impact
                    </div>
                    <div className="text-xs font-semibold text-white/90">
                      {currentLeak.impactLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Console with live timeline rail & pulsing activity */}
              <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#141422] to-[#0A0A10] border border-white/10 shadow-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden relative space-y-3">
                {/* Background glow in console */}
                <div
                  className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                <div className="space-y-3 relative z-10">
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="text-[10px] font-mono font-bold tracking-widest text-white/70 truncate max-w-[170px] sm:max-w-none text-center">
                      {currentLeak.liveFeedTitle}
                    </div>

                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold font-mono shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE
                    </div>
                  </div>

                  {/* Vertical Timeline Rail & Events */}
                  <div className="relative pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 pt-0.5">
                    {/* Left continuous timeline rail */}
                    <div className="absolute left-2 top-2.5 bottom-2.5 w-[2px] bg-gradient-to-b from-sky-400/50 via-emerald-400/40 to-white/10" />

                    <AnimatePresence initial={false}>
                      {feedEvents.map((evt, idx) => (
                        <motion.div
                          key={`${evt.time}-${idx}`}
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.28 }}
                          className={`relative p-2 sm:p-2.5 rounded-xl border transition-all ${
                            idx === 0
                              ? "bg-white/10 border-white/20 shadow-md shadow-black/40"
                              : "bg-white/5 border-white/8 hover:bg-white/8"
                          }`}
                        >
                          {/* Rail node dot */}
                          <span
                            className={`absolute -left-[15px] sm:-left-[17px] top-3 w-2 h-2 rounded-full ring-4 ring-[#141422] ${getToneDot(
                              evt.tone
                            )}`}
                          />

                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-bold text-white tracking-tight">
                              {evt.text}
                            </span>
                            <span className="text-[9px] font-mono text-white/50 shrink-0">
                              {evt.time}
                            </span>
                          </div>

                          <p className="text-[10px] text-[#A0A0B0] mt-0.5 leading-relaxed">
                            {evt.sub}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Console Footer */}
                <div className="pt-2.5 mt-1 border-t border-white/10 flex items-center justify-between text-[9.5px] text-white/50 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Meta Webhook &amp; SLA Engine Active
                  </span>
                  <span>Latency: ~140ms</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
