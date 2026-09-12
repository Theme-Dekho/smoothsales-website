"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Blocks } from "lucide-react";

export function IntegrationsRow() {
  const row1 = [
    {
      id: "whatsapp",
      name: "WhatsApp Cloud API",
      category: "Official Enterprise API",
      image: "/coursel_images/whatsapp.webp",
      badge: "<60s Auto-reply",
      badgeTone: "primary",
    },
    {
      id: "meta",
      name: "Meta Business",
      category: "Lead Ads & Webhook",
      image: "/coursel_images/meta.webp",
      badge: "Instant Push",
      badgeTone: "primary",
    },
    {
      id: "google_ads",
      name: "Google Ads",
      category: "Search & YouTube Forms",
      image: "/coursel_images/googleads.webp",
      badge: "Real-time Sync",
      badgeTone: "primary",
    },
    {
      id: "indiamart",
      name: "IndiaMART",
      category: "B2B Marketplace Push",
      image: "/coursel_images/indiamart.webp",
      badge: "Automated Dispatch",
      badgeTone: "primary",
    },
    {
      id: "razorpay",
      name: "Razorpay",
      category: "UPI & Smart Collect",
      image: "/coursel_images/razorpay.webp",
      badge: "TDS Auto-Ledger",
      badgeTone: "emerald",
    },
    {
      id: "google_sheets",
      name: "Google Sheets",
      category: "Continuous Sync",
      image: "/coursel_images/googlesheets.webp",
      badge: "Two-Way Live",
      badgeTone: "primary",
    },
    {
      id: "exotel",
      name: "Exotel Telephony",
      category: "Cloud Calling & IVR",
      image: "/coursel_images/exotel.webp",
      badge: "Click-to-Call",
      badgeTone: "primary",
    },
    {
      id: "openai",
      name: "OpenAI / ChatGPT",
      category: "AI Lead Scoring & Script",
      image: "/coursel_images/openai.webp",
      badge: "GPT-4o Engine",
      badgeTone: "emerald",
    },
  ];

  const row2 = [
    {
      id: "fb",
      name: "Facebook Lead Ads",
      category: "Inbound Lead Forms",
      image: "/coursel_images/fb.webp",
      badge: "Zero Latency",
      badgeTone: "primary",
    },
    {
      id: "insta",
      name: "Instagram Ads & DM",
      category: "Direct Social Capture",
      image: "/coursel_images/insta.webp",
      badge: "Auto-Routing",
      badgeTone: "primary",
    },
    {
      id: "justdial",
      name: "Justdial",
      category: "Local Buyer Triggers",
      image: "/coursel_images/justdial.webp",
      badge: "Lead Webhook",
      badgeTone: "primary",
    },
    {
      id: "cashfree",
      name: "Cashfree Payments",
      category: "Instant Partner Payouts",
      image: "/coursel_images/cashfree.webp",
      badge: "Direct Bank Split",
      badgeTone: "emerald",
    },
    {
      id: "calendly",
      name: "Calendly",
      category: "Site Visit Scheduler",
      image: "/coursel_images/calendly.webp",
      badge: "Calendar Sync",
      badgeTone: "primary",
    },
    {
      id: "google_meet",
      name: "Google Meet",
      category: "Video Discovery & Demo",
      image: "/coursel_images/googlemeet.webp",
      badge: "Auto Link Gen",
      badgeTone: "primary",
    },
    {
      id: "google_forms",
      name: "Google Forms",
      category: "Survey & Query Intake",
      image: "/coursel_images/googleforms.webp",
      badge: "Instant Ingest",
      badgeTone: "primary",
    },
    {
      id: "jotform",
      name: "Jotform",
      category: "Custom Web Capture",
      image: "/coursel_images/jotform.webp",
      badge: "REST Webhook",
      badgeTone: "primary",
    },
  ];

  // Repeat for continuous seamless infinite loop
  const seamlessRow1 = [...row1, ...row1];
  const seamlessRow2 = [...row2, ...row2];

  return (
    <section className="py-12 sm:py-16 overflow-hidden space-y-6 lg:space-y-7 w-full text-slate-900 dark:text-white relative">
      {/* Ambient background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[300px] max-w-full bg-primary/10 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 space-y-2 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/25 dark:border-primary/30 text-primary dark:text-sky-300 text-[11px] font-bold uppercase tracking-widest font-mono">
          <Blocks className="h-3.5 w-3.5" />
          <span>Ecosystem &amp; APIs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Works seamlessly with your existing stack
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-[#A0A2B5] leading-relaxed max-w-xl mx-auto">
          Plug into Meta Lead Ads, official WhatsApp Cloud API, payment gateways,
          and Indian property portals in under two clicks.
        </p>
      </div>

      {/* Infinite Scrolling Carousel Belts (dual marquee with adaptive gradient edge masks) */}
      <div className="relative w-full space-y-3.5 z-10">
        {/* Left and Right Edge Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-10 sm:w-28 lg:w-48 bg-gradient-to-r from-slate-50 dark:from-[#0A0A0F] via-slate-50/80 dark:via-[#0A0A0F]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 sm:w-28 lg:w-48 bg-gradient-to-l from-slate-50 dark:from-[#0A0A0F] via-slate-50/80 dark:via-[#0A0A0F]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 (Scrolling Left) */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-3 sm:gap-3.5 shrink-0 animate-marquee group-hover:[animation-play-state:paused] py-1">
            {seamlessRow1.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[175px] sm:w-[215px] p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#131322]/90 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg hover:border-primary/50 dark:hover:border-cyan-400/50 hover:bg-slate-50/80 dark:hover:bg-white/[0.08] transition-all flex flex-col justify-between space-y-2.5 shrink-0 cursor-pointer backdrop-blur-md group/card"
              >
                <div className="flex items-center justify-between">
                  <div className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-xl bg-slate-100/90 dark:bg-white/10 p-1.5 flex items-center justify-center shrink-0 border border-slate-200/70 dark:border-white/10 shadow-2xs group-hover/card:scale-105 transition-transform">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span
                    className={`text-[8.5px] sm:text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      item.badgeTone === "emerald"
                        ? "text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30"
                        : "text-primary dark:text-sky-300 bg-primary/10 dark:bg-primary/20 border border-primary/25 dark:border-primary/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-white/50 truncate">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Scrolling Right / Reverse) */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-3 sm:gap-3.5 shrink-0 animate-marquee-reverse group-hover:[animation-play-state:paused] py-1">
            {seamlessRow2.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[175px] sm:w-[215px] p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#131322]/90 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-slate-50/80 dark:hover:bg-white/[0.08] transition-all flex flex-col justify-between space-y-2.5 shrink-0 cursor-pointer backdrop-blur-md group/card"
              >
                <div className="flex items-center justify-between">
                  <div className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-xl bg-slate-100/90 dark:bg-white/10 p-1.5 flex items-center justify-center shrink-0 border border-slate-200/70 dark:border-white/10 shadow-2xs group-hover/card:scale-105 transition-transform">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={28}
                      height={28}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span
                    className={`text-[8.5px] sm:text-[9px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      item.badgeTone === "emerald"
                        ? "text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30"
                        : "text-primary dark:text-sky-300 bg-primary/10 dark:bg-primary/20 border border-primary/25 dark:border-primary/30"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] text-slate-500 dark:text-white/50 truncate">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center pt-1 px-6 relative z-10">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary dark:text-sky-400 hover:text-primary/80 dark:hover:text-cyan-300 transition-colors group"
        >
          <span>Explore all 16+ native integrations &amp; custom webhooks</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
