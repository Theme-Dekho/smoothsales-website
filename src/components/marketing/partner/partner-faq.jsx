"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Quote, Star } from "lucide-react";

const FAQS = [
  {
    q: "How and when are partner commissions paid out?",
    a: "Commissions are calculated automatically at the end of each billing cycle and disbursed on the 1st of every month via direct Bank NEFT transfer or UPI. We provide a transparent GST-compliant partner invoice and breakdown in your partner dashboard.",
  },
  {
    q: "How does the 90-Day Lead Attribution Guarantee work?",
    a: "When you register a prospective client lead in your Partner Portal, that account is strictly bound to your partner ID for 90 days. If the prospect converts anytime within those 90 days (even if they book a demo directly through our website), you get full 100% commission credit.",
  },
  {
    q: "Do I have to provide technical support to referred clients?",
    a: "No! Unless you are enrolled in our White-Label Master tier and wish to handle frontline support yourself, the SmoothSales customer success engineering team handles 100% of onboarding, WhatsApp API verification, server uptime, and daily caller support.",
  },
  {
    q: "Is there any signup fee or ongoing cost to become a partner?",
    a: "Zero. Joining the SmoothSales Partner Program is completely free. You get complimentary access to our partner portal, marketing enablement kit, and a pre-configured sandbox CRM to showcase to your prospective clients.",
  },
  {
    q: "Can I white-label the CRM under my own agency brand and domain?",
    a: "Yes! Our Agency & Channel Master tracks support custom subdomains (e.g. crm.youragency.com), custom logos, agency brand color themes, and white-label login screens with automated SSL certification.",
  },
  {
    q: "Will the SmoothSales team help me pitch large enterprise clients?",
    a: "Absolutely. For high-volume opportunities (such as real estate builders, multi-branch colleges, or NBFCs), our senior Solutions Architects can join your client discovery calls, configure custom demo workflows, and co-pitch alongside your team.",
  },
];

export function PartnerFaq() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto space-y-16">
      {/* Testimonial Quote Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-indigo-500/10 border border-primary/20 relative overflow-hidden backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-[#121324] border border-cyan-400/30 flex items-center justify-center shrink-0 shadow-md">
            <Quote className="h-8 w-8 text-cyan-500" />
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 italic font-medium leading-relaxed">
              &ldquo;We manage digital lead gen for 8 real estate developers in Mumbai and Pune. Before SmoothSales, clients blamed our leads when their callers took 4 hours to respond. After deploying SmoothSales with sub-60s WhatsApp routing, client conversion jumped 38%, and we make over ₹1.2 Lakh/month in pure passive partner recurring revenue.&rdquo;
            </p>
            <div className="text-xs font-semibold text-slate-900 dark:text-white pt-1">
              Vikramaditya Mehta —{" "}
              <span className="text-primary dark:text-cyan-400 font-normal">
                Director, PropScale Digital Marketing (Agency Partner since 2024)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-300"
          >
            <HelpCircle className="h-3.5 w-3.5 mr-1 text-primary" />
            <span>Got Questions?</span>
          </Badge>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Everything you need to know about payouts, deal registration, and agency enablement.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-slate-200/80 dark:border-white/10 rounded-2xl px-5 sm:px-6 bg-white dark:bg-[#0E0F1E] shadow-xs"
            >
              <AccordionTrigger className="text-sm sm:text-base font-heading font-semibold text-slate-900 dark:text-white hover:no-underline py-4">
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
