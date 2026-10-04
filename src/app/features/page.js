"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  MessageSquare,
  PhoneCall,
  GitBranch,
  Shield,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Filter,
  Layers,
  Clock,
  Send,
  Database,
  Smartphone,
  FileSpreadsheet,
  Headphones,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { getAppUrl } from "@/lib/constants";

const CATEGORIES = [
  "All Features",
  "Lead Automation",
  "WhatsApp & Telephony",
  "Partner Alliance",
  "Pipelines & Analytics",
];

const FEATURES_DATA = [
  {
    category: "Lead Automation",
    badge: "Sub-60s Dispatch",
    title: "Intelligent Round-Robin Engine",
    description:
      "Automatically route incoming prospects across sales reps based on shift schedules, active lead capacity caps, and performance tiers. Reps receive instant push notifications with a 1-tap dialer link.",
    metrics: "1.2s Dispatch Speed",
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    highlights: [
      "Availability & shift-based assignment",
      "Weighted distribution by rep seniority",
      "Duplicate phone & email deduplication",
    ],
  },
  {
    category: "Lead Automation",
    badge: "Zero Leakage",
    title: "Multi-Source Lead Connectors",
    description:
      "Ingest leads instantly from Meta Ads (FB & Instagram), 99acres, MagicBricks, Housing.com, IndiaMART, Justdial, and custom website forms via native REST webhooks.",
    metrics: "10+ Native Portals",
    icon: Database,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    highlights: [
      "Instant webhook listener with zero delay",
      "Field mapping for custom questionnaires",
      "UTM campaign and keyword attribution",
    ],
  },
  {
    category: "WhatsApp & Telephony",
    badge: "Meta Cloud API",
    title: "Official WhatsApp Cloud Automation",
    description:
      "Send pre-approved WhatsApp templates the moment a lead inquires—including floor plan PDFs, course brochures, or design catalogs—while eliminating third-party phone ban risks.",
    metrics: "3.4x Response Rate",
    icon: MessageSquare,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    highlights: [
      "Automated brochure & welcome kit trigger",
      "Live 2-way chat synced to lead timeline",
      "Official Meta Green Tick verification ready",
    ],
  },
  {
    category: "WhatsApp & Telephony",
    badge: "Voice Intelligence",
    title: "Integrated Telephony & Call Logging",
    description:
      "1-click click-to-dial directly from the browser or mobile app. Call recordings, talk times, and disposition tags (Interested, RNR, Site Visit) automatically sync to the CRM card.",
    metrics: "100% Call Logging",
    icon: PhoneCall,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    highlights: [
      "Click-to-call with automatic recording storage",
      "Mandatory disposition tags to prevent missed follow-ups",
      "Call outcome timeline and audio playback",
    ],
  },
  {
    category: "Lead Automation",
    badge: "SLA Protection",
    title: "SLA Response Timers & Auto-Reassignment",
    description:
      "Every new lead starts a countdown timer (e.g. 15 minutes). If a rep fails to make an attempt, the lead is automatically marked 'At Risk' and reassigned to keep ad spend from burning.",
    metrics: "43% Less Ad Waste",
    icon: Clock,
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    highlights: [
      "Real-time SLA stopwatch on lead cards",
      "Escalation alerts to team managers",
      "Stale lead recirculate rule engine",
    ],
  },
  {
    category: "Partner Alliance",
    badge: "Dispute-Free",
    title: "Channel Partner Attribution Lock",
    description:
      "Give external property brokers, education agents, and referral partners a self-serve portal. Register leads with a 60-day attribution lock to eliminate disputes over who closed the deal.",
    metrics: "0 Commission Disputes",
    icon: Users,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    highlights: [
      "60-day phone number attribution lock",
      "Self-serve partner referral registration portal",
      "Automated commission ledger and invoice tracking",
    ],
  },
  {
    category: "Pipelines & Analytics",
    badge: "Visual Flow",
    title: "Custom Kanban Pipelines & Stages",
    description:
      "Drag-and-drop deals across customized stages tailored for Indian verticals: Site Visit Scheduled, Token Received, Loan In Process, or Fee Paid. View weighted pipeline values at a glance.",
    metrics: "Unlimited Stages",
    icon: GitBranch,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    highlights: [
      "Vertical-ready templates (Real Estate, EdTech, Interior)",
      "Mandatory deal qualification checkpoints",
      "Probability weighting for accurate cash forecasting",
    ],
  },
  {
    category: "Pipelines & Analytics",
    badge: "Executive Intel",
    title: "Real-Time Sales Manager Analytics",
    description:
      "Track rep response latency, call volumes, conversion velocity, and campaign ROI. Spot bottlenecks before they impact your quarterly revenue target.",
    metrics: "Real-Time BI",
    icon: BarChart3,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    highlights: [
      "Rep leaderboard based on speed-to-lead & closures",
      "Source conversion comparisons (Meta vs Portals)",
      "Daily executive WhatsApp performance digests",
    ],
  },
  {
    category: "Lead Automation",
    badge: "Mobile Freedom",
    title: "Mobile-First Ground Team App",
    description:
      "Field reps and site agents can log customer walk-ins, update follow-up notes via voice-to-text, and trigger WhatsApp directions straight from their smartphones.",
    metrics: "iOS & Android",
    icon: Smartphone,
    color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    highlights: [
      "Offline sync mode for areas with spotty cell reception",
      "1-tap location and directions sharing on WhatsApp",
      "Instant push notifications on lead assignment",
    ],
  },
];

export default function FeaturesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Features");

  const filteredFeatures =
    selectedCategory === "All Features"
      ? FEATURES_DATA
      : FEATURES_DATA.filter((f) => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-primary/10 to-purple-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Complete Platform Capabilities</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Every Feature Built for{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Speed &amp; Conversion
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Explore the complete toolkit designed specifically for Indian real estate developers,
            education admissions, and high-velocity agencies to close deals faster with zero lead leakage.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                    : "bg-white dark:bg-[#121324] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={i}
                className="group border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-wider font-bold">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Heading & Metrics */}
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-primary dark:text-cyan-400">
                      {feature.metrics}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {feature.description}
                  </p>

                  {/* Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 space-y-2">
                    {feature.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href="/demo"
                    className="text-xs font-bold text-primary dark:text-cyan-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>See interactive demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Mini-Banner */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <Badge className="bg-primary text-primary-foreground text-xs uppercase font-bold tracking-wider">
              Unlimited Team Seats
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
              Stop paying ₹3,000/seat/month for every caller
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              SmoothSales includes unlimited team seats on every plan. Add your whole calling team,
              team leaders, and branch managers without paying a rupee more in per-user licenses.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/pricing">
              <Button className="h-11 px-6 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                View Pricing Plans
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-11 px-6 rounded-full font-semibold border-slate-300 dark:border-white/15">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <RichFooter />
    </div>
  );
}
