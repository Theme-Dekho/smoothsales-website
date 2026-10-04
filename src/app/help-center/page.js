"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, HelpCircle, LifeBuoy, MessageSquare, Zap, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { getAppUrl } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    id: "lead-distribution",
    question: "How does automated lead distribution decide who gets a lead?",
    category: "Lead Routing",
    answer:
      "SmoothSales uses an intelligent round-robin engine configured with active team member availability, work schedule filters, and maximum active lead capacity caps. When a lead is ingested from Meta Ads, IndiaMART, or your website, the engine selects the next eligible sales rep within 1.2 seconds, dispatches an instant WhatsApp/SMS notification, and starts the SLA response timer.",
  },
  {
    id: "sla-reassignment",
    question: "How do SLA timers and stale lead reassignment work?",
    category: "SLA Management",
    answer:
      "Every incoming lead is assigned a first-touch SLA window (typically 15 to 30 minutes during working hours). If the assigned rep fails to log a call attempt, update the lead disposition, or reach out within the SLA threshold, the system flags the lead as 'At Risk'. Upon breach, the stale-lead automations can automatically reassign the lead to the next available rep and notify the sales manager.",
  },
  {
    id: "whatsapp-integration",
    question: "How does the WhatsApp Business Cloud API integration work?",
    category: "Integrations",
    answer:
      "We connect natively to the official Meta WhatsApp Business Cloud API. This allows automated instant greeting brochures, pre-approved transactional template triggers upon lead assignment, and full two-way chat synchronization without risking third-party phone number bans.",
  },
  {
    id: "channel-partners",
    question: "How do partner commissions and attribution locking work?",
    category: "Channel Alliance",
    answer:
      "When a channel partner (external property broker, affiliate marketer, or consulting reseller) registers or refers a prospect, SmoothSales issues an Attribution Lock (e.g., 60-day exclusivity). Even if that prospect later submits an inquiry via your general website form, deal credit and percentage commissions are automatically credited to the referring partner's ledger upon closing.",
  },
  {
    id: "pipeline-customization",
    question: "Can I customize deal stages and lead qualification forms?",
    category: "Workspace Configuration",
    answer:
      "Yes! During onboarding or at any time in Settings > Pipelines, workspace admins can define custom deal stages (e.g., Site Visit Scheduled, Token Received, Legal Due Diligence), probability weights, and mandatory qualification fields specific to real estate, education, or interior design verticals.",
  },
  {
    id: "white-label-domains",
    question: "How does White-Label custom domain and SSL provisioning work?",
    category: "White-Label",
    answer:
      "White-Label Agency partners can point their own branded subdomain (e.g., crm.youragency.com) by adding a single CNAME record pointing to cname.smoothsales.ai. Our edge routing cluster verifies DNS propagation automatically and provisions an auto-renewing Let's Encrypt SSL certificate within minutes.",
  },
  {
    id: "meta-indiamart-sync",
    question: "Can leads be ingested directly from Facebook Lead Ads, Justdial, and IndiaMART?",
    category: "Integrations",
    answer:
      "Yes. SmoothSales provides built-in webhook endpoints for Meta Graph Webhooks, IndiaMART Lead Manager API, Justdial push APIs, Google Forms, and Zapier/Make. Inbound leads are validated, de-duplicated against existing phone numbers, and routed instantly.",
  },
  {
    id: "tenant-data-security",
    question: "How does tenant data isolation and privacy compliance work?",
    category: "Security",
    answer:
      "Every tenant's customer data, notes, and pipelines are logically partitioned at the database layer. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) in AWS Mumbai (ap-south-1). We strictly comply with India's Digital Personal Data Protection (DPDP) Act 2023, and your data is never used to train global AI models.",
  },
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header Banner */}
      <div className="border-b border-border bg-card/60 backdrop-blur py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-center">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group mb-2"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Knowledge Base &amp; FAQ</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              How can we help you today?
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Find instant answers to common questions about automated lead ingestion, routing rules, WhatsApp sync, and partner commission structures.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search help topics (e.g. lead routing, WhatsApp, commissions, CNAME)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 text-xs sm:text-sm bg-background border-border rounded-xl shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-10 w-full">
        {/* Quick Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["All Topics", "Lead Routing", "SLA Management", "Integrations", "Channel Alliance", "White-Label", "Security"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchQuery(cat === "All Topics" ? "" : cat)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                (cat === "All Topics" && !searchQuery) || searchQuery === cat
                  ? "bg-primary text-primary-foreground border-primary font-semibold"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <h2 className="font-heading font-bold text-base text-foreground">
              Frequently Asked Questions ({filteredFaqs.length})
            </h2>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-primary hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-xs space-y-2">
              <HelpCircle className="h-8 w-8 mx-auto text-muted-foreground/60" />
              <div>No articles match your search for &quot;{searchQuery}&quot;.</div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="text-xs mt-2"
              >
                Reset Search
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-3">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border bg-card rounded-lg px-4 shadow-2xs data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3.5">
                    <div className="flex items-center gap-3 pr-2">
                      <span className="text-xs font-semibold text-foreground leading-snug">
                        {faq.question}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">
                        {faq.category}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Still Need Help Box */}
        <div className="p-6 rounded-xl border border-border bg-card/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-sm text-foreground flex items-center justify-center sm:justify-start gap-2">
              <LifeBuoy className="h-4 w-4 text-primary" />
              <span>Still have questions or need enterprise setup?</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Our engineering and solutions team is available on WhatsApp and email for custom pipeline architecture.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/919820145892?text=Hi%20SmoothSales%20Team%2C%20I%20have%20a%20question%20about%20the%20platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </Button>
            </a>

            <a href={getAppUrl("/dashboard")}>
              <Button variant="outline" size="sm" className="h-8 text-xs font-semibold gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                <span>Test Live Demo</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
