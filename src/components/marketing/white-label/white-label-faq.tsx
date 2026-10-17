"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What's the minimum investment to become a partner?",
    answer:
      "Two options: pay ₹15,000 upfront for a starter pack that includes your user allocation, or start with just a ₹2,000 setup charge — which is fully refunded if you sell 50+ users within the year.",
  },
  {
    question: "Is the ₹2,000 setup charge really refundable?",
    answer:
      "Yes. If you cross 50+ user sales within your first year as a partner, the ₹2,000 setup charge is refunded back to you automatically — it's a low-risk way to start before committing the full ₹15,000.",
  },
  {
    question: "Do I need technical expertise to run a white label CRM?",
    answer:
      "No. SmoothSales.ai runs the backend infrastructure, license management and CRM engine. You focus on sales, pricing and your customer relationships.",
  },
  {
    question: "Am I billed for all 200 users I purchase upfront?",
    answer:
      "No — billing applies to active, allocated users only. Purchased-but-unallocated seats sit in your pool at no billing cost until you assign them.",
  },
  {
    question: "Can I set my own refund policy for customers?",
    answer:
      "Yes. You choose from No Refund, 7, 14, 30 days, or a fully custom policy for your customers. But this is separate from SmoothSales.ai's own 14-day billing window with you — if your customer cancels after day 14, you refund them per your policy, but the users are already billed to you as active.",
  },
  {
    question: "What happens if my customer refund window is longer than SmoothSales.ai's?",
    answer:
      "Set your customer policy however you like — but plan around SmoothSales.ai's fixed 14-day window. Any deactivation after day 14 doesn't reverse your billing, even if you're still within your own longer refund promise to the customer.",
  },
  {
    question: "Who handles customer support once I'm live?",
    answer:
      "You're L1 support for your own customers. SmoothSales.ai backs you up at L2, and our development team covers L3 technical escalations.",
  },
  {
    question: "Can I run multiple brands or businesses under one partner account?",
    answer:
      "Yes — partners can create unlimited workspaces (e.g. separate brands, verticals, or client types), each fully isolated under your partner ID.",
  },
  {
    question: "Who handles onboarding, demos, and meetings with my customers?",
    answer:
      "You do — as L1, onboarding, demos, meetings and day-to-day customer support all run through you and your brand. SmoothSales.ai stays behind the scenes on the technical side.",
  },
  {
    question: "Does SmoothSales.ai take a cut of the revenue I generate?",
    answer:
      "No. Whatever revenue you generate from your customers is entirely yours. SmoothSales.ai only charges the fixed ₹80/user/month backend cost — there's no additional revenue share or hidden commission on top.",
  },
  {
    question: "Is my customer's data secure? Does SmoothSales.ai have access to it?",
    answer:
      "Yes, 100% secure — all data is encrypted. SmoothSales.ai never accesses your customer data unless you explicitly grant permission, typically during a technical support session. Without your permission, no one can access your client's data.",
  },
];

export function WhiteLabelFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            Common White Label Partner Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto">
            Everything you need to know about economics, licensing, branding, and billing windows.
          </p>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-white/10 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/50 dark:bg-[#0E1126] p-4 sm:p-6 shadow-sm">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 first:pt-2 last:pb-2">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/15 bg-white dark:bg-white/[0.04] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary dark:text-cyan-400" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-300 leading-relaxed pr-8 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
