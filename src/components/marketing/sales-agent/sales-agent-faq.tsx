"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How is this different from the White Label Partner Program?",
    answer:
      "White label partners resell under their own brand and own the customer relationship end-to-end. Business Partners sell under the SmoothSales.ai name, aren't employees, and earn a flat ₹150/user/month payout while SmoothSales.ai handles billing, product, and support.",
  },
  {
    question: "Is the ₹999 onboarding fee really refundable?",
    answer:
      "Yes. The moment you cross 20 users sold or 8 workspaces sold, whichever comes first, the ₹999 is refunded to you automatically.",
  },
  {
    question: "Am I an employee of SmoothSales.ai?",
    answer:
      "No. This is a payout-based independent partner role — no salary, no fixed hours, no employment contract.",
  },
  {
    question: "Where do I get client leads from?",
    answer:
      "Mainly through your own local, face-to-face outreach — that's how every partner starts. Once you've worked actively for 3 months and averaged 50+ users sold, SmoothSales.ai also starts providing you leads directly, on top of your own.",
  },
  {
    question: "Do I handle client payments?",
    answer:
      "No. Clients pay SmoothSales.ai directly. Your payout is calculated separately and paid out to you every month.",
  },
  {
    question: "Do I have to provide support after the sale?",
    answer:
      "Not by default — SmoothSales.ai handles support. You can choose to stay the first point of contact for your own clients if you'd rather keep that relationship.",
  },
  {
    question: "What happens if a client cancels their subscription?",
    answer:
      "Those users stop counting toward your monthly payout from the point they're deactivated — payout is only credited on active, paying users.",
  },
];

export function SalesAgentFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
            Common Business Partner Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto">
            Everything you need to know about payouts, onboarding fee refunds, leads, and client billing.
          </p>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-white/10 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-4 sm:p-6 shadow-sm">
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
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/[0.04] transition-transform duration-200 ${
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
