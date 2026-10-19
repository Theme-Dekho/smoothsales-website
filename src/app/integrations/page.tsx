
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  Zap,
  MessageCircle,
  CreditCard,
  Phone,
  Mail,
  Globe,
  CalendarDays,
  Bot,
  CheckCircle2,
} from "lucide-react";

const integrations = [
  {
    name: "WhatsApp",
    category: "Messaging",
    description: "Connect customer conversations and lead follow-ups.",
    icon: MessageCircle,
    status: "Available",
  },
  {
    name: "Google Ads",
    category: "Lead Sources",
    description: "Capture leads from Google Ads lead forms.",
    icon: Globe,
    status: "Available",
  },
  {
    name: "Google Sheets",
    category: "Google Workspace",
    description: "Export lead data and sales reports to spreadsheets.",
    icon: Globe,
    status: "Available",
  },
  {
    name: "Google Meet",
    category: "Google Workspace",
    description: "Coordinate demos and customer meetings.",
    icon: CalendarDays,
    status: "Available",
  },
  {
    name: "Razorpay",
    category: "Payments",
    description: "Connect payment activity with your sales workflow.",
    icon: CreditCard,
    status: "Available",
  },
  {
    name: "IndiaMART",
    category: "Lead Sources",
    description: "Bring marketplace enquiries into your lead pipeline.",
    icon: Globe,
    status: "Available",
  },
  {
    name: "Facebook Lead Ads",
    category: "Lead Sources",
    description: "Capture campaign enquiries in your CRM.",
    icon: Globe,
    status: "Available",
  },
  {
    name: "Gmail",
    category: "Google Workspace",
    description: "Explore email-related CRM workflows.",
    icon: Mail,
    status: "Coming Soon",
  },
  {
    name: "Cloud Telephony",
    category: "Calling",
    description: "Connect calling workflows with lead activity.",
    icon: Phone,
    status: "Available",
  },
  {
    name: "AI Automation",
    category: "Automation",
    description: "Extend CRM workflows with AI-powered actions.",
    icon: Bot,
    status: "Available",
  },
];

const categories = [
  "All Integrations",
  "Lead Sources",
  "Google Workspace",
  "Messaging",
  "Payments",
  "Calling",
  "Automation",
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
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Zap className="h-4 w-4" />
              THE INTEGRATION NETWORK
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Bring every lead and conversation into{" "}
              <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                one workspace
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Connect your lead sources, communication tools, payments and
              business workflows with SmoothSales.ai.
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
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
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
                  className="rounded-2xl border border-border bg-card/80 p-5"
                >
                  <p className="text-lg font-bold">{item.value}</p>
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
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20"
      >
        <div className="mb-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
            Integration Directory
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Choose what you want to connect
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            Find integrations by name or category and explore how they fit
            into your sales workflow.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-5 max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search integrations..."
            aria-label="Search integrations"
            className="h-12 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Category filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {filteredIntegrations.length} integrations
          </p>
          <span className="text-xs text-muted-foreground">
            Browse available connectors
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((integration) => {
            const Icon = integration.icon;

            return (
              <article
                key={integration.name}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-500/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                      integration.status === "Available"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {integration.status}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {integration.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {integration.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    {integration.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
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
      <section className="border-t border-border bg-muted/30">
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
    </main>
  );
}
