"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PRICING_PLANS } from "@/lib/mock-data/pricing-plans";
import { Check, Sparkles, HelpCircle, ArrowRight } from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";

export default function PricingPage() {
  const faqs = [
    {
      q: "Can I change plans later?",
      a: "Yes, you can upgrade or downgrade your plan at any time from your tenant Billing settings. Plan changes take effect immediately, and any unused balance is prorated automatically.",
    },
    {
      q: "Is there a setup fee or hidden onboarding charge?",
      a: "No. SmoothSales.ai has zero setup fees, zero implementation charges, and zero platform maintenance fees. You only pay the flat subscription price listed above.",
    },
    {
      q: "What happens after my 14-day free trial ends?",
      a: "Your trial gives you full unrestricted access to all features. When the trial concludes, you can enter your billing details to continue without interruption. No credit card is required to begin.",
    },
    {
      q: "Are there per-seat or per-user fees?",
      a: "No! Unlike legacy CRMs (Salesforce, HubSpot) that penalize team growth, SmoothSales.ai offers unlimited team seats on every plan. You only pay for incoming lead scale, not your headcount.",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto space-y-20">
      {/* Top Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold text-primary">
          Flat-Rate Pricing
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight">
          Simple, transparent pricing
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every plan includes unlimited team members and full CRM capabilities. Choose based on your monthly inbound lead volume.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            className={`relative flex flex-col justify-between rounded-xl p-6 transition-all border ${
              plan.isPopular
                ? "border-primary border-2 bg-card shadow-md ring-1 ring-primary/20"
                : "border-border bg-card shadow-xs hover:border-border/80"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 shadow-xs">
                  Most Popular
                </Badge>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {plan.leadLimit}
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-heading font-black text-foreground">
                    {plan.price}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {plan.billingNote}
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {plan.description}
              </p>

              <div className="pt-3 border-t border-border/60 space-y-2.5">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <Link href={getAppUrl("/signup")} className="block w-full">
                <Button
                  className={`w-full h-10 text-xs font-semibold ${
                    plan.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                      : "variant-outline border-border hover:bg-muted"
                  }`}
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  Start 14-Day Free Trial
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* 14-Day Guarantee Note */}
      <div className="max-w-3xl mx-auto p-4 rounded-xl bg-muted/40 border border-border flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary shrink-0" />
          <span>
            Need custom lead volume or multi-branch isolated schemas?
          </span>
        </div>
        <a href="mailto:sales@smoothsales.ai" className="font-semibold text-foreground hover:underline">
          Contact Enterprise Sales â†’
        </a>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto space-y-8 pt-8 border-t border-border">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="h-4 w-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="-mx-6 -mb-20">
        <RichFooter />
      </div>
    </div>
  );
}

