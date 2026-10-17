"use client";

import React from "react";
import { HelpCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AffiliateFaq() {
  const faqs = [
    {
      q: "How does the 20% - 30% recurring commission work?",
      a: "When a customer signs up using your affiliate link, you earn a percentage of their active subscription fee every month. You start at 20% commission (Starter tier). Once you refer 10 active companies, you unlock 25% (Growth tier), and at 25+ companies, you unlock 30% (Elite tier) lifetime recurring revenue.",
    },
    {
      q: "When and how are affiliate payouts processed in India?",
      a: "Commissions are calculated automatically at the end of each calendar month and disbursed on the 5th of the following month. We pay via direct Indian Bank Transfer (NEFT/IMPS) or UPI with an automated GST invoice statement for your accounting.",
    },
    {
      q: "How long is the affiliate cookie tracking window?",
      a: "Our tracking cookie lasts for a full 90 days. If someone clicks your link today, browses around, and returns 80 days later to start a trial and upgrade to a paid plan, the conversion and all recurring commissions will be 100% credited to your account.",
    },
    {
      q: "Is there any joining fee, setup cost, or monthly quota?",
      a: "No! The SmoothSales Affiliate Program is 100% free to join with zero onboarding fees, zero recurring costs, and no minimum monthly quota required to remain an active partner.",
    },
    {
      q: "Do I have to provide client onboarding, billing, or tech support?",
      a: "None whatsoever. SmoothSales manages the full customer journey — from running 1-on-1 live product demos to configuring WhatsApp Cloud APIs, importing lead databases, and providing 24/7 client support. Your only task is making the initial introduction.",
    },
    {
      q: "Can I refer my own company or client accounts?",
      a: "You cannot refer your own direct account for a discount. However, if you run a digital marketing or consulting agency, you can refer all of your client businesses and earn recurring software revenue on each client's CRM seats.",
    },
    {
      q: "What marketing materials and promo tools do you provide?",
      a: "Immediately upon signing up, you get access to our Affiliate Resource Hub containing high-resolution banners, YouTube video scripts, LinkedIn post swipe files, comparison audit decks (vs LeadSquared & Zoho), and product demo screen recordings.",
    },
    {
      q: "What is the minimum payout threshold?",
      a: "Our minimum payout threshold is just ₹1,000. Once your accrued commission reaches ₹1,000, your funds are released on the next 5th of the month via your preferred payment mode (UPI or NEFT).",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-12 sm:mb-16">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
        >
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Affiliate Partner FAQs</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-sans">
          Everything you need to know about cookie tracking, payout dates, and scaling your affiliate income with SmoothSales.
        </p>
      </div>

      <div className="rounded-2xl bg-white/90 dark:bg-[#0D0E1A]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 backdrop-blur-md shadow-xl">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200/80 dark:border-white/5 rounded-xl px-4 bg-slate-50/50 dark:bg-white/[0.02]"
            >
              <AccordionTrigger className="text-left font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pb-4 pt-1">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
