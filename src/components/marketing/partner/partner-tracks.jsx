"use client";

import React from "react";
import {
  Building2,
  Share2,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const PARTNERSHIP_TRACKS = [
  {
    id: "agency",
    title: "Agency & Reseller Partner",
    badge: "Most Popular",
    badgeColor: "border-primary/40 bg-primary/10 text-primary",
    payout: "30% - 35%",
    payoutSub: "Lifetime recurring monthly share",
    icon: Building2,
    accentColor: "from-blue-500 to-cyan-500",
    idealFor:
      "Performance marketing agencies, digital lead generation firms, and growth consultancies managing clients in Real Estate, Education & BFSI.",
    perks: [
      "Multi-tenant Agency Dashboard to view all client CRMs in one tab",
      "Priority client migration & zero-cost WhatsApp API onboarding",
      "Co-branded lead audit decks to help you pitch new retainers",
      "Whitelabel client invoicing & custom domain setup option",
      "Direct Slack/WhatsApp connect with our Product & Support team",
    ],
    ctaText: "Apply as Agency Partner",
  },
  {
    id: "referral",
    title: "Referral & Affiliate Partner",
    badge: "Zero Support Needed",
    badgeColor: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    payout: "20%",
    payoutSub: "Recurring monthly for 12 months",
    icon: Share2,
    accentColor: "from-emerald-500 to-teal-500",
    idealFor:
      "Independent sales coaches, business advisors, proptech influencers, and tech consultants who recommend software to business owners.",
    perks: [
      "Custom tracking links with 90-day cookie & attribution window",
      "Self-serve affiliate portal with live click, signup & payout graphs",
      "Automated monthly payouts via direct NEFT / UPI with GST invoice",
      "SmoothSales takes care of 100% of demo calls, billing & support",
      "Dedicated ready-to-share social assets, case studies & videos",
    ],
    ctaText: "Apply as Referral Partner",
  },
  {
    id: "integrator",
    title: "System Integrator & Tech Partner",
    badge: "Developer Friendly",
    badgeColor: "border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400",
    payout: "Custom Tier",
    payoutSub: "Rev-share + Joint solution pricing",
    icon: Cpu,
    accentColor: "from-purple-500 to-indigo-500",
    idealFor:
      "ERP implementers (Tally, SAP, ERPNext), Cloud Telephony / IVR providers, WhatsApp BSPs, and custom software development houses.",
    perks: [
      "Developer sandbox access with unrestricted REST APIs & Webhooks",
      "Co-selling opportunities with SmoothSales inbound enterprise deals",
      "Featured placement on the official SmoothSales App Marketplace",
      "Joint technical webinars, API documentation & certification",
      "Direct engineering escalation channel for client custom hooks",
    ],
    ctaText: "Apply as Tech Partner",
  },
  {
    id: "channel",
    title: "Channel Master & Enterprise Broker",
    badge: "Enterprise Scale",
    badgeColor: "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    payout: "Volume Rebate",
    payoutSub: "Tiered overrides + White-label license",
    icon: Layers,
    accentColor: "from-amber-500 to-orange-500",
    idealFor:
      "Real estate broker associations, large channel partner syndicates, financial distributor networks, and education aggregators.",
    perks: [
      "Hierarchical broker commission tracking & automatic split ledgers",
      "Optional fully white-labeled CRM on your own custom domain",
      "Custom SLA guarantees & dedicated Solutions Architect",
      "Bulk license subsidies for 50+ broker teams or franchises",
      "Executive quarterly business reviews and custom roadmaps",
    ],
    ctaText: "Apply as Channel Master",
  },
];

export function PartnerTracks({ onSelectTrack }) {
  return (
    <section id="partnership-tracks" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Flexible Partnership Models</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Choose the Program That Matches{" "}
          <span className="bg-gradient-to-r from-primary via-cyan-500 to-sky-400 bg-clip-text text-transparent">
            Your Business Model
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Whether you want high-touch agency workspace management, frictionless affiliate referral payouts, or deep tech integrations — we offer rewarding tiers built for the Indian business ecosystem.
        </p>
      </div>

      {/* Grid of 4 Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PARTNERSHIP_TRACKS.map((track) => {
          const Icon = track.icon;
          return (
            <Card
              key={track.id}
              className="relative flex flex-col justify-between rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200/90 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-primary/40 dark:hover:border-cyan-400/30 transition-all p-6 sm:p-8 backdrop-blur-md group overflow-hidden"
            >
              {/* Top ambient highlight gradient */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${track.accentColor} opacity-10 blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity`}
              />

              <div className="space-y-6 relative z-10">
                {/* Header row: Icon & Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="h-6 w-6 text-primary dark:text-cyan-400" />
                  </div>
                  <Badge variant="outline" className={`text-xs font-semibold px-3 py-1 ${track.badgeColor}`}>
                    {track.badge}
                  </Badge>
                </div>

                {/* Title & Payout Box */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                    {track.title}
                  </h3>
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Earnings Opportunity
                      </div>
                      <div className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                        {track.payout}
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {track.payoutSub}
                    </div>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-semibold">Ideal For: </strong>
                  {track.idealFor}
                </div>

                {/* Perks Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400 dark:text-white/40">
                    Key Partner Benefits
                  </div>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                    {track.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/10 relative z-10">
                <Button
                  onClick={() => onSelectTrack && onSelectTrack(track.id)}
                  className="w-full h-11 text-xs sm:text-sm font-bold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-cyan-400 dark:hover:text-black gap-2 font-heading transition-all cursor-pointer shadow-sm"
                >
                  <span>{track.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
