"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  Repeat,
  Headphones,
  FileCheck2,
  Users,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BENEFITS = [
  {
    icon: Repeat,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    title: "Uncapped Lifetime Recurring Payouts",
    desc: "As long as your referred clients stay active and pay their monthly or annual CRM subscription, you receive your commission every single billing cycle. No expiry, no tier demotion.",
  },
  {
    icon: ShieldCheck,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    title: "90-Day Deal Attribution Lock",
    desc: "When you register a lead in your partner portal, that prospect is locked to you for 90 days. Our direct sales reps are strictly barred from closing your deal directly. Zero channel conflict.",
  },
  {
    icon: Zap,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    title: "< 24hr Time to Value & Sub-1% Churn",
    desc: "Unlike heavyweight US enterprise CRMs that take 3 months to deploy, SmoothSales goes live in a single afternoon. Sales teams love the intuitive WhatsApp workflow, ensuring your payouts stay active.",
  },
  {
    icon: Headphones,
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    title: "Dedicated Partner Success Director",
    desc: "Need support pitching a ₹10 Lakh builder or enterprise real estate account? Our senior Solutions Architect will join your Zoom call, demo the product, and help you close the deal.",
  },
  {
    icon: FileCheck2,
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    title: "Automated Monthly UPI & NEFT Settlements",
    desc: "No chasing invoices or waiting for quarterly reconciliation. Payouts are computed automatically and transferred directly to your bank account or UPI on the 1st of every month with full GST invoices.",
  },
  {
    icon: Users,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    title: "White-Glove Agency Multi-Tenant Portal",
    desc: "Manage all your client tenants under one master login. Jump between client pipelines, audit lead response times, and bundle CRM maintenance into your agency retainers.",
  },
];

export function PartnerBenefits() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 inline-flex items-center gap-1.5"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Why Partner With SmoothSales</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Engineered for Agency Retention &amp;{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-500 to-sky-400 bg-clip-text text-transparent">
            Maximum Partner Profitability
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          We treat our partners as true co-founders of our growth. Everything from our attribution rules to our automated payout infrastructure is built to protect your reputation and revenue.
        </p>
      </div>

      {/* Grid of 6 Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BENEFITS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0D0E1A]/80 border border-slate-200/80 dark:border-white/10 hover:border-primary/40 dark:hover:border-cyan-400/30 shadow-sm hover:shadow-md transition-all group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
