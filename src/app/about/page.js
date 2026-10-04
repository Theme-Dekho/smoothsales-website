import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Users,
  Target,
  Clock,
  MessageSquare,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  TrendingUp,
  Server,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { getAppUrl } from "@/lib/constants";

export const metadata = {
  title: "About Us — SmoothSales.ai | High-Velocity CRM for Modern Revenue Teams",
  description:
    "Learn how SmoothSales.ai eliminates lead leakage, powers sub-60s round-robin dispatch, and automates channel partner attribution for Indian real estate, education, and high-growth sales teams.",
};

const STATS = [
  { value: "85s", label: "Average First Touch Time", sub: "down from 4.2 hrs on legacy CRMs" },
  { value: "4.2x", label: "WhatsApp Conversion Lift", sub: "via official Meta Cloud API" },
  { value: "100%", label: "Broker Attribution Lock", sub: "zero commission disputes" },
  { value: "₹280Cr+", label: "Monthly Pipeline Volume", sub: "processed across 8+ Indian metros" },
];

const PILLARS = [
  {
    icon: Zap,
    title: "Velocity First",
    description:
      "When a lead inquires on Meta Ads, 99acres, or WhatsApp, seconds matter. Our engine matches and dispatches leads in under 1.2s so reps call while the buyer is still engaged.",
  },
  {
    icon: MessageSquare,
    title: "Native WhatsApp Cloud API",
    description:
      "No banned phone numbers or flaky web automation. We use official Meta Cloud templates, automated brochure dispatch, and live 2-way conversation syncing.",
  },
  {
    icon: Users,
    title: "Channel Partner Ledgers",
    description:
      "Brokers and affiliates bring high-intent inventory when they trust the system. We provide 60-day attribution locking, transparent payout calculators, and self-serve partner portals.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Per-Seat Tax",
    description:
      "Legacy CRMs penalize your headcount growth with aggressive per-user billing. SmoothSales offers unlimited seats so your entire team—from callers to managers—collaborates without friction.",
  },
];

const VALUES = [
  {
    tag: "Speed",
    title: "Speed to Value over Feature Bloat",
    desc: "We prioritize 1-click workflows, pre-configured pipelines for Indian verticals, and rapid 15-minute onboarding over complex, unused enterprise menu trees.",
  },
  {
    tag: "Integrity",
    title: "Total Data Sovereignty",
    desc: "Your customer data stays strictly isolated in your tenant database schema with Indian data residency in Mumbai AWS data centers.",
  },
  {
    tag: "Empathy",
    title: "Engineered for Reps on the Ground",
    desc: "Sales reps aren't data entry clerks. SmoothSales automates call logging, disposition reminders, and follow-up templates right inside their daily flow.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-primary/15 via-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Our Mission &amp; Purpose</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Ending Lead Leakage for{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              High-Velocity Sales Teams
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            SmoothSales.ai was founded on a simple realization: Indian revenue teams were losing up to
            43% of paid inbound inquiries simply because legacy CRMs take hours to route leads, lack
            native WhatsApp automation, and cause endless broker commission disputes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <Link href="/features">
              <Button className="h-11 px-6 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2">
                <span>Explore Features</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                className="h-11 px-6 rounded-full font-semibold border-slate-300 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10"
              >
                Watch Product Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] shadow-xs p-5 sm:p-6 text-center rounded-2xl hover:border-primary/40 transition-all hover:scale-[1.02]"
            >
              <div className="text-2xl sm:text-4xl font-heading font-black text-primary dark:text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                {stat.sub}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-5">
            <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/20">
              The Genesis
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
              Why We Built SmoothSales
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                In 2024, our founders worked directly alongside major real estate developers, coaching
                chains, and agency operators in Jaipur, Gurgaon, and Mumbai. We noticed a consistent,
                painful contradiction:
              </p>
              <p>
                Companies spent lakhs of rupees every month running Facebook ads, Google campaigns, and
                portal listings. Yet, when an eager homebuyer or parent submitted a form, it sat
                unassigned in a spreadsheet or got dumped into an unconfigured CRM that reps only checked
                at the end of the day.
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                By the time a rep dialed, the lead had already answered a competitor’s call.
              </p>
              <p>
                SmoothSales was engineered from the ground up to solve this exact bottleneck: an
                instant round-robin engine that matches leads in &lt;60s, delivers automated WhatsApp
                brochures before the prospect navigates away, and gives managers real-time SLA visibility.
              </p>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-3xl blur-xl opacity-20" />
            <Card className="relative border-slate-200 dark:border-white/15 bg-white dark:bg-[#121324] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm">Response SLA Benchmark</div>
                    <div className="text-[11px] text-slate-500">Industry vs SmoothSales.ai</div>
                  </div>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-[10px]">
                  94% Saved Leads
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-rose-700 dark:text-rose-300">
                    <span>Legacy CRM Average</span>
                    <span>252 Mins (4.2 Hrs)</span>
                  </div>
                  <div className="w-full bg-rose-200 dark:bg-rose-900/30 h-2 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-[85%]" />
                  </div>
                  <p className="text-[10.5px] text-rose-600 dark:text-rose-400">
                    Lead goes cold, 43% loss rate before first voice interaction.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <span>SmoothSales.ai Smart Dispatch</span>
                    <span>85 Seconds</span>
                  </div>
                  <div className="w-full bg-emerald-200 dark:bg-emerald-900/30 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[12%]" />
                  </div>
                  <p className="text-[10.5px] text-emerald-600 dark:text-emerald-400 font-medium">
                    Instant round-robin assignment + automated WhatsApp welcome kit.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>Sub-60s Dispatch Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Verified Meta API</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold text-primary">
            Our Architecture
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
            The Four Pillars of SmoothSales
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Engineered purposefully for fast-moving sales cultures, from high-volume call floors to field sales agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={i}
                className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] rounded-2xl p-6 sm:p-7 shadow-xs hover:border-primary/40 transition-all hover:scale-[1.01]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-200/80 dark:border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold text-primary">
            Operating Ethos
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
            Built for Revenue Teams, Not Just Admins
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Software only generates ROI when reps actually enjoy opening it every morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((val, i) => (
            <Card
              key={i}
              className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Badge variant="secondary" className="text-[10px] font-mono uppercase font-bold text-primary">
                  {val.tag}
                </Badge>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Security & Infrastructure Trust */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-slate-200 dark:border-white/15 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#111222] dark:via-[#0F1020] dark:to-[#0A0B14] p-8 sm:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Lock className="h-4 w-4" />
                <span>Enterprise Trust &amp; Compliance</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                Indian Data Residency &amp; Bank-Grade Security
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
                All tenant database schemas are cryptographically isolated with TLS 1.3 encryption in transit
                and AES-256 at rest, hosted on AWS Mumbai (ap-south-1). Automated daily snapshots and 99.98%
                uptime SLAs protect your most valuable asset: customer trust.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link href="/contact" className="w-full">
                <Button className="w-full h-11 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  Request Security Whitepaper
                </Button>
              </Link>
              <Link href="/pricing" className="w-full">
                <Button
                  variant="outline"
                  className="w-full h-11 text-xs font-semibold rounded-xl border-slate-300 dark:border-white/15"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <RichFooter />
    </div>
  );
}
