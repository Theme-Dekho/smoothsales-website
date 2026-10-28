
"use client";
import Link from "next/link";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  Zap,
  CheckCircle2,
  Plug,
  Database
} from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";



const integrations = [
  // Messaging and lead capture
  { name: "Facebook", category: "Lead Sources", description: "Automatically capture leads from Facebook Lead Ads.", status: "Live", domain: "facebook.com" },
  { name: "Meta Conversion API", category: "Popular", description: "Send lead events back to Meta for ad attribution.", status: "Live", domain: "meta.com" },
  { name: "WhatsApp", category: "Messaging and Chat", description: "Manage template messages, auto-replies, and chat-to-deal tracking.", status: "Live", domain: "whatsapp.com" },
  { name: "Instagram DM", category: "Messaging and Chat", description: "Capture and respond to Instagram direct messages.", status: "Live", domain: "instagram.com" },
  { name: "Website Chat Widget", category: "Messaging and Chat", description: "Add a website chat widget and optionally connect an AI chatbot.", status: "Live", domain: "smoothsales.ai" },

  // Lead sources
  { name: "Google Ads Lead Form", category: "Lead Sources", description: "Capture leads from Google Ads lead forms.", status: "Live", domain: "ads.google.com" },
  { name: "IndiaMart", category: "Lead Sources", description: "Import enquiries with requirements, budgets, and contact details.", status: "Live", domain: "indiamart.com" },
  { name: "TradeIndia", category: "Lead Sources", description: "Automatically capture leads from TradeIndia.", status: "Live", domain: "tradeindia.com" },
  { name: "JustDial", category: "Lead Sources", description: "Capture and assign JustDial enquiries to sales representatives.", status: "Live", domain: "justdial.com" },
  { name: "Web Contact Form", category: "Forms", description: "Capture leads submitted through your website.", status: "Live", domain: "google.com" },
  { name: "Leads from Email", category: "Email", description: "Forward incoming email leads directly into your CRM.", status: "Live", domain: "gmail.com" },
  { name: "Leads Through API", category: "Automation and API", description: "Create leads from custom sources through an API.", status: "Live", domain: "swagger.io" },

  // Real estate and marketplaces
  { name: "Commonfloor", category: "Real Estate", description: "Capture enquiries from Commonfloor.", status: "Live", domain: "commonfloor.com" },
  { name: "MagicBricks", category: "Real Estate", description: "Automatically capture property enquiries from MagicBricks.", status: "Live", domain: "magicbricks.com" },
  { name: "Housing.com", category: "Real Estate", description: "Bring Housing.com leads into your sales workflow.", status: "Live", domain: "housing.com" },
  { name: "UrbanPro", category: "Lead Sources", description: "Capture enquiries from UrbanPro.", status: "Live", domain: "urbanpro.com" },
  { name: "AAJJO", category: "Lead Sources", description: "Capture business enquiries from AAJJO.", status: "Live", domain: "aajjo.com" },

  // Google Suite and forms
  { name: "Google Forms", category: "Google Suite", description: "Create CRM leads from Google Form submissions.", status: "Live", domain: "forms.google.com" },
  { name: "Google Sheets", category: "Google Suite", description: "Export pipeline data, reports, and lead lists to Sheets.", status: "Live", domain: "sheets.google.com" },
  { name: "Google Meet", category: "Google Suite", description: "Connect Google Meet for scheduled demos and calls.", status: "Live", domain: "meet.google.com" },
  { name: "Google Drive", category: "Google Suite", description: "Export call recordings and CRM data to Drive folders.", status: "Coming Soon", domain: "drive.google.com" },
  { name: "Gmail", category: "Email", description: "Connect Gmail for email tracking and synchronisation.", status: "Coming Soon", domain: "gmail.com" },
  { name: "Jotform", category: "Forms", description: "Capture data from Jotform submissions.", status: "Live", domain: "jotform.com" },
  { name: "Wix Contact Form", category: "Forms", description: "Capture leads from Wix website contact forms.", status: "Live", domain: "wix.com" },
  { name: "Calendly", category: "Scheduling", description: "Capture leads from Calendly bookings.", status: "Live", domain: "calendly.com" },

  // Payments and finance
  { name: "Razorpay", category: "Payments and Finance", description: "Track payments and invoices alongside CRM deals.", status: "Live", domain: "razorpay.com" },
  { name: "Cashfree", category: "Payments and Finance", description: "Manage payment workflows through Cashfree.", status: "Live", domain: "cashfree.com" },
  { name: "Zoho CRM", category: "Popular", description: "Integrate CRM records and create leads in Zoho CRM.", status: "Live", domain: "zoho.com" },
  { name: "Zoho Books", category: "Payments and Finance", description: "Connect accounting and invoice workflows.", status: "Coming Soon", domain: "zoho.com" },
  { name: "Zoho Recruit", category: "Automation and API", description: "Connect Zoho Recruit with your sales workflow.", status: "Live", domain: "zoho.com" },
  { name: "Zenoti", category: "Automation and API", description: "Connect Zenoti for salon and spa business workflows.", status: "Live", domain: "zenoti.com" },
  { name: "Shopify", category: "Ecommerce", description: "Sync Shopify customers and orders with your pipeline.", status: "Coming Soon", domain: "shopify.com" },

  // AI and telephony
  { name: "OpenAI", category: "AI and Intelligence", description: "Connect an OpenAI API key to power AI features.", status: "Live", domain: "openai.com" },
  { name: "Caller Desk", category: "Cloud Telephony", description: "Connect your Caller Desk cloud telephony account.", status: "Live", domain: "callerdesk.io" },
  { name: "Tata Tele Smart Flo", category: "Cloud Telephony", description: "Connect Tata Tele cloud telephony.", status: "Live", domain: "tatatelebusiness.com" },
  { name: "Knowlarity", category: "Cloud Telephony", description: "Connect Knowlarity cloud telephony.", status: "Live", domain: "knowlarity.com" },
  { name: "Exotel", category: "Cloud Telephony", description: "Connect Exotel cloud telephony.", status: "Live", domain: "exotel.com" },
  { name: "Bon Voice", category: "Cloud Telephony", description: "Connect your Bon Voice cloud telephony account.", status: "Live", domain: "bonvoice.com" },
  { name: "3CX", category: "Cloud Telephony", description: "Connect your 3CX business phone system.", status: "Live", domain: "3cx.com" },
  { name: "Vonage", category: "Cloud Telephony", description: "Connect your Vonage business phone system.", status: "Live", domain: "vonage.com" },
  { name: "Webhooks", category: "Automation and API", description: "Send CRM events and data to external systems.", status: "Live", domain: "webhooks.io" },
];



const categories = [
  "All Integrations",
  "Popular",
  "Lead Sources",
  "Google Suite",
  "Payments and Finance",
  "Cloud Telephony",
  "Automation and API",
  "Messaging and Chat",
  "Forms",
  "Real Estate",
  "Ecommerce",
  "AI and Intelligence",
  "Scheduling",
  "Email",
];


export default function IntegrationsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Integrations");

  const filteredIntegrations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return integrations.filter((integration) => {
      const matchesCategory =
        activeCategory === "All Integrations" ||
        integration.category === activeCategory;

      const matchesSearch =
        !query ||
        integration.name.toLowerCase().includes(query) ||
        integration.description.toLowerCase().includes(query) ||
        integration.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main 
    // className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[hsl(236,53%,6%)]  dark:text-white"
    className="min-h-screen bg-background text-foreground transition-colors duration-300"
    >
      {/* Integrations page header */}
      {/* <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-background via-background to-blue-500/[0.06] dark:border-white/[0.07] dark:from-[#080c15] dark:via-[#090d18] dark:to-[#10152a]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.10),transparent_38%)]"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-500 shadow-[0_0_28px_rgba(59,130,246,0.18)] dark:text-blue-300">
                <Plug className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                  SmoothSales Connect
                </p>
                <h1 className="mt-1 font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Integrations
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Connect your lead sources and communication tools to automate workflows and keep your sales moving.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
              <div className="relative min-w-0 flex-1 sm:min-w-[250px] lg:w-[280px]">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search integrations..."
                  aria-label="Search integrations"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white/80 pl-12 pr-4 text-sm text-foreground outline-none backdrop-blur transition placeholder:text-muted-foreground/80 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 dark:border-[#27334b] dark:bg-[#0c1220]/90 dark:focus:border-blue-400/70 dark:focus:ring-blue-400/20"
                />
              </div>
              <a
                href="#integration-directory"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-blue-500/50 bg-gradient-to-r from-blue-600/10 to-indigo-500/10 px-5 text-sm font-semibold text-foreground transition hover:border-blue-400 hover:from-blue-600/15 hover:to-indigo-500/15 dark:border-blue-500/60 dark:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
              >
                Browse connectors
                <ArrowRight className="h-4 w-4 text-blue-500 dark:text-blue-300" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: `${integrations.length}`, label: "Integrations in the directory" },
              { value: "Lead to deal", label: "Connected sales workflows" },
              { value: "Flexible", label: "Custom API connections" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 backdrop-blur dark:border-[#202b40] dark:bg-[#0d1320]/70"
              >
                <p className="text-lg font-bold text-foreground">{item.value}</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

       {/* Hero */}
            <section className="relative overflow-hidden border-b border-border">
              <div
                aria-hidden="true"
                // className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 dark:bg-white/[0.04]"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
              />
      
              <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                    <Zap className="h-4 w-4" />
                    THE INTEGRATION NETWORK
                  </div>
      
      
      {/* Unify all your leads and conversations in one workspace */}
                  <h1 className="font-heading text-[28px] font-black leading-[1.14] tracking-tight text-slate-900 dark:text-white sm:text-4xl sm:leading-[1.08] lg:text-[42px] xl:text-[48px]">
                    Unify all your leads and conversations into{" "}
                    <span className="bg-gradient-to-r from-sky-500 via-primary to-cyan-500 dark:from-sky-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                      one workspace
                    </span>
                  </h1>
      
                  <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-slate-600 dark:text-[#A0A0B0] sm:text-base sm:leading-7 lg:text-lg">
                    Connect your lead sources, communication tools, payments and
                    business workflows with SmoothSales.
                  </p>
      
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href="#integration-directory"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Explore integrations
                      <ArrowRight className="h-4 w-4" />
                    </a>
      
                    <a
                      href="mailto:sales@smoothsales.ai?subject=Integration%20enquiry"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-6 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100/90 dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:bg-white/10"
                    >
                      Talk to our team
                    </a>
                  </div>
      
                  <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                      { value: "Lead Sources", label: "Bring enquiries together" },
                      { value: "Connected", label: "Keep workflows in sync" },
                      { value: "Extensible", label: "Build custom connections" },
                    ].map((item) => (
                      <div
                        key={item.value}
                        className="rounded-2xl border border-border bg-white/90 p-5 dark:bg-white/[0.04]"
                      >
                        <p className="text-xl font-bold">{item.value}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

      {/* Integration directory */}
      <section
        id="integration-directory"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
              Integration directory
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Find your tools
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Filter by category or search for a connector to see how it fits into your workflow.
            </p>
          </div>
          <p className="shrink-0 text-sm font-medium text-muted-foreground">
            <span className="text-foreground">{filteredIntegrations.length}</span> of {integrations.length} integrations
          </p>
        </div>


        <div className="mb-8 flex flex-wrap items-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`inline-flex shrink-0 items-center justify-center rounded-full border px-4 py-2.5 text-sm font-semibold leading-5 transition-all duration-200 ${
                  isActive
                    ? "border-blue-500 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_6px_22px_rgba(59,130,246,0.22)]"
                    : "border-slate-200/80 bg-white/70 text-muted-foreground hover:border-blue-400/50 hover:bg-blue-500/[0.06] hover:text-foreground dark:border-[#202b40] dark:bg-[#0d1320]/80 dark:hover:border-blue-400/40 dark:hover:bg-blue-500/[0.08]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>


        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* <div className="grid grid-cols-1 gap-5"> */}
          {filteredIntegrations.map((integration) => {
            // const Icon = integration.icon;

            return (  
                  <Link
                    key={integration.name}
                    href={`/integrations/${
                      integration.name === "Meta Conversion API"
                        ? "meta-capi"
                        : integration.name.toLowerCase().replace(/\./g, "-").replace(/\s+/g, "-")
                    }`}
                    // className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-[#34415b] dark:bg-gradient-to-br dark:from-[#111d30] dark:to-[#0c1525]"
                    // className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-[#344563] dark:bg-gradient-to-br dark:from-[#192438] dark:to-[#111a2b]"
                    className="group relative isolate flex min-h-[280px] flex-col overflow-hidden rounded-[28px] border border-slate-300/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-[#344563] dark:bg-gradient-to-br dark:from-[#192438] dark:to-[#111a2b] sm:p-5"
                  >
                    <div className="relative flex items-start justify-between gap-3">
                      {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10">
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${integration.domain}&sz=128`}
                          alt={`${integration.name} logo`}
                          className="h-11 w-11 object-contain"
                          loading="lazy"
                        />
                      </div> */}
                      
                      {/* <div className="relative flex items-start gap-6 pt-8">
                        <div className="flex h-28 w-28 shrink-0 items-center justify-center border-r border-slate-200 pr-6 dark:border-[#344563]">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${integration.domain}&sz=256`}
                            alt={`${integration.name} logo`}
                            className="h-20 w-20 rounded-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {integration.name}
                          </h3>

                          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                            {integration.description}
                          </p>
                        </div>

                        <span
                          className={`absolute right-0 top-[-12px] inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                            integration.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"
                              : "bg-amber-500/10 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                          }`}
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              integration.status === "Live" ? "bg-emerald-400" : "bg-amber-400"
                            }`}
                          />
                          {integration.status}
                        </span>
                      </div> */}
                      {/* <div className="relative flex flex-1 items-start gap-4 pt-10"> */}
                      <div className="relative flex items-start gap-4 pt-6">
                        {/* <div className="flex h-24 w-20 shrink-0 items-center justify-center border-r border-slate-200 pr-4 dark:border-[#344563]"> */}
                        <div className="flex h-20 w-[68px] shrink-0 items-center justify-center border-r border-slate-200 pr-3 dark:border-[#344563]">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${integration.domain}&sz=256`}
                            alt={`${integration.name} logo`}
                            className="h-14 w-14 rounded-full object-contain"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="break-words text-lg font-bold leading-snug tracking-tight text-slate-900 dark:text-white">
                            {integration.name}
                          </h3>

                          <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {integration.description}
                          </p>
                        </div>

                      </div>

                    </div>

                    <div 
                    className="relative mt-auto grid grid-cols-[1fr_auto] items-center gap-3 border-t border-slate-200 pt-5 dark:border-[#344563]"
                    // className="relative mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-slate-200 pt-5 dark:border-[#344563]"
                    >
                      <div className="flex min-w-0 items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                        <Database className="h-7 w-7 shrink-0 text-blue-500" />
                        <span>{integration.category}</span>
                      </div>

                      {/* <span className="flex items-center gap-2 border-l border-slate-200 pl-4 text-base font-bold text-blue-600 dark:border-[#344563] dark:text-blue-400">
                        Explore
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </span> */}
                      <span className="flex items-center gap-1.5 border-l border-slate-200 pl-3 text-sm font-semibold text-blue-600 dark:border-[#344563] dark:text-blue-400">
                        Explore
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </span>
                    </div>

                  </Link>

            );
          })}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-bold">
              No integrations found
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All Integrations");
              }}
              className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Guided onboarding */}
      <section className="border-t border-slate-200/70 bg-slate-50/70 dark:border-white/[0.07] dark:bg-[#090e18]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
              Guided onboarding
            </p>

            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
              Connect your workflow with confidence
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Define the lead source, map the fields and decide what should
              happen when a new enquiry arrives.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Review your existing tools and lead sources",
              "Map fields and define assignment rules",
              "Test the workflow before using it in production",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1.5 text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <RichFooter />
    </main>
  );
}
