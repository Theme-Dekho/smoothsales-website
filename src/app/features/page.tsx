"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Users,
  MessageCircle,
  Infinity as InfinityIcon,
  Phone,
  Tags,
  BarChart3,
  Building2,
  Settings,
  FileText,
  CalendarCheck,
  Globe,
  Upload,
  Home,
  Plane,
  Store,
  UserRound,
  Zap,
} from "lucide-react";

import { IntegrationsRow } from "@/components/marketing/integrations-row";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { useState } from "react";
import { Button } from "@/components/ui/button";


const features = [
  {
    title: "Multi-Channel Lead Capture",
    description: "Capture leads from Meta Ads, Google Ads, WhatsApp, your website, and more.",
    image: "/images/features/lead-capture.png",
    color: "blue",
  },
  {
    title: "WhatsApp Integration",
    description: "Connect WhatsApp Business to manage conversations, automate replies, and follow-ups.",
    image: "/images/features/whatsapp.png",
    color: "green",
  },
  {
    title: "Meta & Google Conversion API",
    description: "Track ad performance and connect CRM outcomes with conversion events.",
    image: "/images/features/meta.png",
    color: "blue",
  },
  {
    title: "Call Tracking",
    description: "Track calls, record conversations, and make sure important leads are followed up.",
    image: "/images/features/call-tracking.png",
    color: "green",
  },
  {
    title: "Lead Management",
    description: "Organize, qualify, assign, and manage leads across your sales team.",
    image: "/images/features/team-management.png",
    color: "orange",
  },
  {
    title: "Follow-up & Task Management",
    description: "Set reminders, create tasks, and automate consistent follow-ups.",
    image: "/images/features/task-follow-up.png",
    color: "purple",
  },
  {
    title: "Customer Journey",
    description: "Track every customer interaction from the first enquiry to a closed deal.",
    image: "/images/features/analytics.png",
    color: "pink",
  },
  {
    title: "Tags & Categories",
    description: "Use custom tags and categories to organize leads and prioritize work.",
    image: "/images/features/tags-categories.png",
    color: "blue",
  },
  {
    title: "Team & HR Management",
    description: "Manage team members, roles, responsibilities, and performance.",
    image: "/images/features/team-hr.png",
    color: "blue",
  },
  {
    title: "Payments & Invoices",
    description: "Create invoices, track payments, and keep financial activity organized.",
    image: "/images/features/payments-invoices.png",
    color: "green",
  },
  {
    title: "Multi-Tenant Workspaces",
    description: "Manage separate workspaces for different businesses, teams, or clients.",
    image: "/images/features/multi-tenant-workspaces.png",
    color: "purple",
  },
  {
    title: "Industry-Specific Features",
    description: "Adapt workflows for real estate, interior design, travel, and other industries.",
    image: "/images/features/settings.png",
    color: "orange",
  },
];


const leadSources = [
  { name: "Meta Ads", detail: "Lead Ads", domain: "facebook.com" },
  { name: "Google Ads", detail: "Lead Forms", domain: "ads.google.com" },
  { name: "WhatsApp", detail: "Enquiries", domain: "whatsapp.com" },
  { name: "Website", detail: "Contact Forms", domain: "smoothsales.ai" },
  { name: "CSV Import", detail: "Lead Lists", icon: Upload },
  { name: "IndiaMART", detail: "Enquiries", domain: "indiamart.com" },
  { name: "Justdial", detail: "Enquiries", domain: "justdial.com" },
  { name: "TradeIndia", detail: "Enquiries", domain: "tradeindia.com" },
  { name: "Magicbricks", detail: "Property Leads", domain: "magicbricks.com" },
  { name: "More Sources", detail: "Custom APIs", icon: Globe },
];

const industries = [
  {
    title: "Interior Designers",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    iconImage: "/images/industry/interior-designers.png",
    items: ["BOQ management", "Track site visits", "Manage multiple projects", "Client follow-ups"],
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    iconImage: "/images/industry/real-estate.png",
    items: ["Property inventory", "Site visit management", "Client requirement tracking", "Booking & payment tracking"],
  },
  {
    title: "Travel & Tourism",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    iconImage: "/images/industry/travel-tourism.png",
    items: ["Itinerary management", "Lead & booking tracking", "Trip follow-ups", "Client management"],
  },
  {
    title: "Retail & Other Businesses",
    image:
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=612x612&w=0&k=20&c=wmYZMUx0cvzGCDg9Di3HT-6NMDvPVhycuAxrQzFfKiM=",
    iconImage: "/images/industry/and-more.png",
    items: ["Custom workflows", "Industry-specific fields", "Flexible settings", "Grow your business"],
  },
];

const workflow = [
  {
    number: "1",
    title: "Capture Leads",
    description: "From ads, website forms, WhatsApp, and more.",
    // icon: Users,
    color: "blue",
    image: "/images/workflow/simple_workflow1.png",
  },
  {
    number: "2",
    title: "Automate Follow-ups",
    description: "Use reminders, tasks, and timely responses.",
    // icon: Zap,
    color: "green",
    image: "/images/workflow/simple_workflow2.png",
  },
  {
    number: "3",
    title: "Manage & Track",
    description: "Assign leads and track progress clearly.",
    // icon: BarChart3,
    color: "orange",
    image: "/images/workflow/simple_workflow3.png",
  },
  {
    number: "4",
    title: "Convert to Customer",
    description: "Close deals and grow your business.",
    // icon: Users,
    color: "purple",
    image: "/images/workflow/simple_workflow4.png",
  },
];

const colorStyles: Record<string, string> = {
  blue: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 ring-blue-100",
  green: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 ring-emerald-100",
  orange: "bg-orange-50 dark:bg-orange-500/10 text-orange-500 ring-orange-100",
  purple: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 ring-violet-100",
  pink: "bg-pink-50 dark:bg-pink-500/10 text-pink-500 ring-pink-100",
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-blue-100 dark:border-blue-400/15 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesPage() {
  const [activeStage, setActiveStage] = useState(0);
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Page hero */}
        {/* <section className="relative isolate overflow-hidden border-b border-white/10 bg-[hsl(236,53%,6%)] text-white"> */}
          {/* <section className="relative isolate flex min-h-[calc(100vh-75px)] flex-col overflow-hidden border-b border-white/10 bg-[hsl(236,53%,6%)] text-white"> */}
          {/* <section className="relative isolate flex min-h-[calc(100svh-75px)] flex-col overflow-hidden border-b border-white/10 bg-[hsl(236,53%,6%)] text-white"> */}
          <section className="relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden border-b border-white/10 bg-[hsl(236,53%,6%)] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.16),transparent_55%)]" />

          {/* <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"> */}
          {/* <div className="mx-auto flex w-full flex-1 items-center max-w-7xl px-4 py-16 sm:px-6 sm:py-24"> */}
          {/* <div className="mx-auto flex w-full flex-1 items-center max-w-7xl px-4 py-16 sm:px-6 sm:py-24"> */}
            <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-12 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                {/* Features */}
              </p>

              <h1 className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                {/* Everything your sales team needs — from first lead to final payment */}
                Every Lead Captured. Every Conversation Tracked. Every Sale Monitored.
              </h1>

              <p className="mt-10 text-base font-medium text-white/80 sm:text-3xl">
                Lead CRM + Call Recording + WhatsApp Automation + AI
              </p>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl">
                Six stages. One connected workflow. Less manual updating.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-violet-600 px-8 text-white hover:bg-violet-500">
                  <Link href="/sign-up">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
    
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-white hover:bg-white/10 hover:text-white">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>

             {/* <nav
              aria-label="Sales workflow stages"
              className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
            >
              {[
                "Lead Capture",
                "AI Automation (Filter)",
                "Follow-ups",
                "Deals",
                "Payments",
                "Visibility",
              ].map((stage, index) => (
                <a
                  key={stage}
                  href={index === 0 ? "#lead-capture" : `#workflow-${index + 1}`}
                  onClick={() => setActiveStage(index)}
                  className={`rounded-2xl border px-3 py-4 text-center text-sm font-semibold transition-all duration-500 ease-in-out ${
                    activeStage === index
                    // "border-violet-400 bg-violet-500/20 text-violet-200 shadow-md shadow-violet-500/10"
                      ? "border-violet-400 bg-violet-500/20 text-violet-200 shadow-md shadow-violet-500/10"
                      : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-violet-400/50 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className="mb-1 block text-xs opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {stage}
                </a>
              ))}
            </nav> */}

          </div>
        </section>

      

      {/* Feature grid */}
      <section id="features" className="bg-gradient-to-b from-background to-sky-50/70 dark:to-slate-950/60 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need to Grow Your Business"
            description="Powerful tools to manage your entire customer journey in one place."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* {features.map(({ title, description, icon: Icon, color }) => (
              <article key={title} className="group rounded-2xl border border-slate-100 bg-white dark:bg-slate-900 p-5 shadow-sm shadow-slate-900/[0.02] dark:shadow-black/20 transition duration-200 hover:-translate-y-1 hover:border-blue-200 dark:border-blue-400/30 hover:shadow-xl hover:shadow-blue-900/[0.06]">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${colorStyles[color]}`}>
                  <Icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))} */}
            
{features.map(({ title, description, image }) => (
  <article
    key={title}
    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/[0.06] dark:border-blue-400/30 dark:bg-slate-900 dark:shadow-black/20"
  >
    <div className="flex h-12 w-12 items-center justify-center">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-110"
        loading="lazy"
      />
    </div>

    <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
      {description}
    </p>
  </article>
))}

          </div>
        </div>
      </section>

      {/* Lead sources */}
      <IntegrationsRow />

      {/* Industry-specific features */}
      <section className="bg-white dark:bg-slate-900 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Industries"
            title="Industry-Specific CRM Features"
            description="Flexible modules and workflows designed around the needs of your business."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ title, image, iconImage, items }) => (
              <article key={title} className="overflow-hidden rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/[0.07]">
                <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="relative px-5 pb-5 pt-8">
                 <div className="-mt-12 mb-3 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white shadow-sm">
                    <img
                      src={iconImage}
                      alt=""
                      aria-hidden="true"
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{title}</h3>
                  <ul className="mt-3 space-y-2">
                    {items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* Workflow */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 dark:border-white/10 dark:bg-[#101018]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple Workflow, Powerful Results"
            description="From lead capture to closed customer—manage every step in one smooth process."
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {workflow.map(({ number, title, description, image, color }, index) => (
              <div
                key={number}
                className="group relative flex flex-col items-center"
              >
                {/* Circular workflow stage */}
                <article
                  // className={`relative flex aspect-square w-full max-w-[185px] flex-col items-center justify-center rounded-full border-2 border-slate-200 bg-white p-5 text-center shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 motion-safe:animate-[workflowFloat_4s_ease-in-out_infinite] dark:border-[#26344d] dark:bg-gradient-to-br dark:from-[#151e32] dark:to-[#111827] dark:hover:border-blue-400/60 ${
                  //   index % 2 === 1 ? "motion-safe:[animation-delay:1s]" : ""
                  // }`}
                  className={`relative flex aspect-square w-full max-w-[185px] cursor-pointer flex-col items-center justify-center rounded-full bg-transparent p-5 text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 motion-safe:animate-[workflowFloat_4s_ease-in-out_infinite] ${
                    index % 2 === 1 ? "motion-safe:[animation-delay:1s]" : ""
                  }`}
                >
                  {/* Step number */}
                  {/* <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      color === "blue"
                        ? "bg-blue-600"
                        : color === "green"
                          ? "bg-emerald-500"
                          : color === "orange"
                            ? "bg-orange-500"
                            : "bg-violet-600"
                    }`}
                  >
                    {number}
                  </span> */}

                  {/* Existing workflow image */}
                  <div
                    className={`mt-3 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${colorStyles[color]}`}
                  >
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-8 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Stage title */}
                  <h3 className="mt-3 text-sm font-bold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-base">
                    {title}
                  </h3>

                  {/* Description appears inside the circle on hover/focus */}
                  <p 
                  className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-white/95 p-6 text-sm leading-6 text-slate-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 dark:bg-[#111a2b]/95 dark:text-slate-200"
                  >
                    {description}
                  </p>
                </article>

                {/* Description below the circle */}
                {/* <p className="mt-4 max-w-[220px] text-center text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {description}
                </p> */}

                {/* Connecting arrow between circles */}
                {index < workflow.length - 1 && (
                  <div className="pointer-events-none absolute -right-4 top-[110px] z-10 hidden -translate-y-1/2 lg:block xl:-right-5">
                    <ArrowRight className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating animation */}
        <style jsx>{`
          @keyframes workflowFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </section>
      
       
      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-background to-blue-100 dark:from-slate-950 dark:via-background dark:to-slate-900 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Take control</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Get <span className="text-blue-600">Complete Control</span> of Your Business
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              More organized leads, consistent follow-ups, and clearer performance insights—all with SmoothSales CRM.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Increase team productivity",
                "Never lose a lead",
                "Track ROI with useful data",
                "Scale your business with confidence",
              ].map((item: string) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-600 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-blue-200 dark:border-blue-400/30 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50 dark:bg-blue-500/10">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-blue-100 dark:border-blue-400/15 bg-white dark:bg-slate-900 p-4 shadow-2xl shadow-blue-900/10 dark:shadow-black/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-500">Sales performance</p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">Team overview</p>
                </div>
                <span className="rounded-lg bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1.5 text-xs font-bold text-emerald-700">+18.6%</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["Sales", "₹3.2L", "bg-blue-50 dark:bg-blue-500/100"],
                  ["Pipeline", "₹2.8L", "bg-orange-400"],
                  ["In Progress", "210", "bg-violet-50 dark:bg-violet-500/100"],
                  ["Won", "80", "bg-emerald-50 dark:bg-emerald-500/100"],
                ].map(([label, value, color]) => (
                  <div key={label} className="rounded-xl border border-slate-100 dark:border-white/10 p-3">
                    <div className={`mb-3 h-1.5 rounded-full ${color}`} />
                    <p className="text-[11px] text-slate-500 dark:text-slate-500">{label}</p>
                    <p className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-slate-100 dark:border-white/10 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">Monthly performance</p>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex h-32 items-end gap-3">
                  {[35, 47, 42, 61, 57, 76, 70, 91, 83, 100, 87, 96].map((height: number, i: number) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-sky-400" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-slate-400 dark:text-slate-500">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m: string) => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-slate-900 p-3 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600"><CalendarCheck className="h-5 w-5" /></div>
              <div>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">Follow-up scheduled</p>
                <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-500">Your next task is on track</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RichFooter />
    </main>
  );
}
