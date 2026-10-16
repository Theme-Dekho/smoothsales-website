"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

interface ReviewItem {
  name: string;
  role: string;
  city: string;
  metric: string;
  quote: string;
  refundGot: string;
}

const REVIEWS: ReviewItem[] = [
  {
    name: "Vikram Rathore",
    role: "Ex-JustDial Field Sales Lead",
    city: "Jaipur, Rajasthan",
    metric: "₹48,000 / month recurring",
    quote:
      "I was already visiting shop owners and builders for local directory ads. Switching to SmoothSales.ai changed my income model completely. Instead of one-time commissions, I now earn ₹150 every single month per active user.",
    refundGot: "₹999 fee refunded in 14 days",
  },
  {
    name: "Pooja Deshmukh",
    role: "Independent B2B Consultant",
    city: "Pune, Maharashtra",
    metric: "320+ Users Sold",
    quote:
      "The best part is 'Not Your Call' on customer support and refunds. I run the demo on my tablet, client signs up, and SmoothSales handles the WhatsApp API setup and billing. My payout arrives on time on the 1st of every month.",
    refundGot: "₹999 auto-refunded",
  },
  {
    name: "Aman Sharma",
    role: "Team Lead Partner",
    city: "Delhi NCR",
    metric: "₹1,12,000 / month combined",
    quote:
      "I started solo, then brought 4 friends who were doing FMCG and telecom sales. We pool our outreach in industrial areas like Okhla and Noida. The demo kit and live sandbox make closing deals straightforward.",
    refundGot: "Achieved Milestone in Week 3",
  },
];

export function PartnerReviews() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            PARTNER REVIEWS
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            What Business Partners are saying
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Real feedback from partners across different backgrounds and cities — field sales,
            independent professionals, team builders, and work-from-home earners.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40">
                  <span>{review.metric}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                  {review.role} • {review.city}
                </div>
                <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 pt-1">
                  ✓ {review.refundGot}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
