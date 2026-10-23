
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  AudioLines,
  Bot,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  GitBranch,
  MessageCircle,
  PhoneCall,
  ReceiptText,
  Route,
  Smartphone,
  Sparkles,
  Users,
  Webhook,
  BarChart3,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RichFooter } from "@/components/marketing/final-cta-section";

type FeatureSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  previewTitle: string;
  previewRows: { label: string; detail: string; status?: string }[];
  reverse?: boolean;
};

const integrations = [
  ["f", "Meta Ads", "FB & Instagram"],
  ["G", "Google Ads", "Lead forms"],
  ["IM", "IndiaMART", "B2B leads"],
  ["JD", "Justdial", "Local leads"],
  ["99", "99acres", "Property leads"],
  ["H", "Housing.com", "Property leads"],
  ["W", "Website forms", "Custom capture"],
  ["API", "REST webhooks", "Custom sources"],
];

// const heroTiles = [
//   { icon: "📥", label: "Auto Lead Capture" },
//   { icon: "📞", label: "Auto-Dial New Lead" },
//   { icon: "🤖", label: "AI WhatsApp Bot" },
//   { icon: "📣", label: "Bulk WhatsApp" },
//   { icon: "🟢", label: "Live Team Status" },
//   { icon: "🎧", label: "Call Recording" },
//   { icon: "⭐", label: "AI Call Audit" },
//   { icon: "📊", label: "Pipeline Funnel" },
//   { icon: "⏱️", label: "Attendance & GPS" },
//   { icon: "🧾", label: "GST Invoice" },
//   { icon: "📲", label: "Smart Caller-ID" },
//   { icon: "✨", label: "Ask CRM Copilot" },
// ];

const heroTiles = [
  {
    label: "Auto Lead Capture",
    icon: "📥",
    image: "/images/features/auto-lead-capture.webp",
  },
  {
    label: "Auto-Dial New Lead",
    icon: "📞",
    image: "/images/features/auto-dial-new-lead.webp",
  },
  {
    label: "AI WhatsApp Bot",
    icon: "🤖",
    image: "/images/features/ai-whatsapp-bot.webp",
  },
  {
    label: "Bulk WhatsApp",
    icon: "📣",
    image: "/images/features/bulk-whatsapp.webp",
  },
  {
    label: "Live Team Status",
    icon: "🟢",
    image: "/images/features/live-team-status.webp",
  },
  {
    label: "Call Recording",
    icon: "🎧",
    image: "/images/features/call-recording.webp",
  },
  {
    label: "AI Call Audit",
    icon: "⭐",
    image: "/images/features/ai-call-audit.webp",
  },
  {
    label: "Pipeline Funnel",
    icon: "📊",
    image: "/images/features/pipeline-funnel.webp",
  },
  {
    label: "Attendance & GPS",
    icon: "⏱️",
    image: "/images/features/attendance-gps.webp",
  },
  {
    label: "GST Invoice",
    icon: "🧾",
    image: "/images/features/gst-invoice.webp",
  },
  {
    label: "Smart Caller-ID",
    icon: "📲",
    image: "/images/features/smart-caller-id.webp",
  },
  {
    label: "Ask CRM Copilot",
    icon: "✨",
    image: "/images/features/ask-crm-copilot.webp",
  },
];

const sections: FeatureSectionData[] = [
  {
    eyebrow: "01 · Lead capture",
    title: "Every lead, from every channel, in one inbox",
    description:
      "Bring campaign, portal and website enquiries into one consistent lead workspace. Use a common record to review the source, owner, activity and next action without switching between tools.",
    icon: Webhook,
    points: [
      "Connect advertising forms, listing portals and website forms",
      "Keep campaign and source attribution with each lead",
      "Use field mapping to standardize incoming enquiries",
      "Review new enquiries in one centralized inbox",
    ],
    previewTitle: "Live lead inbox · Demo",
    previewRows: [
      { label: "Ananya Sharma", detail: "Meta Ads · 2 min ago", status: "New" },
      { label: "Rohit Verma", detail: "Google Ads · 5 min ago", status: "New" },
      { label: "Pranav Jain", detail: "IndiaMART · 8 min ago", status: "Assigned" },
      { label: "Sneha Mehta", detail: "Website form · 12 min ago", status: "Contacted" },
    ],
  },
  {
    eyebrow: "02 · Smart routing",
    title: "Route leads to the right person",
    description:
      "Create assignment rules around source, territory, team or round-robin rotation. Make ownership clear and give managers a practical way to review distribution.",
    icon: Route,
    points: [
      "Assign by lead source, location or team",
      "Distribute enquiries using round-robin rules",
      "Show lead owner and assignment history",
      "Review unassigned leads before they go stale",
    ],
    previewTitle: "Routing rules · Demo",
    previewRows: [
      { label: "Meta Ads", detail: "Digital sales team", status: "Rule active" },
      { label: "Google Ads", detail: "Inbound team", status: "Rule active" },
      { label: "North Delhi", detail: "Territory: North", status: "Rule active" },
      { label: "Unassigned leads", detail: "Manager review queue", status: "Review" },
    ],
    reverse: true,
  },
  {
    eyebrow: "03 · WhatsApp automation",
    title: "Keep customer conversations moving on WhatsApp",
    description:
      "Organize WhatsApp touchpoints alongside the lead record. Use this section to showcase planned templates, conversation history and follow-up workflows without implying a live connection in this demo.",
    icon: MessageCircle,
    points: [
      "Keep conversation notes alongside lead activity",
      "Plan welcome and follow-up message templates",
      "Track the next communication action",
      "Hand off conversations to a team member when needed",
    ],
    previewTitle: "WhatsApp conversation · Demo",
    previewRows: [
      { label: "Welcome message", detail: "Template preview", status: "Draft" },
      { label: "Product details", detail: "Follow-up content", status: "Ready" },
      { label: "Customer reply", detail: "Conversation history", status: "Logged" },
      { label: "Next follow-up", detail: "Tomorrow · 10:30 AM", status: "Scheduled" },
    ],
  },
  {
    eyebrow: "04 · Calling and telephony",
    title: "Give every call a clear next step",
    description:
      "Bring call activity, notes and outcomes into the sales workflow. A connected telephony provider can enable click-to-call and recording; this preview is illustrative only.",
    icon: PhoneCall,
    points: [
      "Keep incoming and outgoing call activity together",
      "Record call outcomes and follow-up notes",
      "Show recent interactions on the lead timeline",
      "Connect a supported telephony provider when configured",
    ],
    previewTitle: "Calling activity · Demo",
    previewRows: [
      { label: "Ananya Sharma", detail: "Outgoing · 04:32", status: "Connected" },
      { label: "Rohit Verma", detail: "Incoming · 02:18", status: "Connected" },
      { label: "Pranav Jain", detail: "Outgoing · No answer", status: "Retry" },
      { label: "Sneha Mehta", detail: "Follow-up note added", status: "Logged" },
    ],
    reverse: true,
  },
  {
    eyebrow: "05 · SLA and follow-up",
    title: "Make response delays visible before leads go cold",
    description:
      "Set response expectations and follow-up reminders for your team. Surface overdue work and escalation candidates so managers can intervene early.",
    icon: CalendarClock,
    points: [
      "Define first-response and follow-up targets",
      "Highlight overdue activities and aging leads",
      "Create reminder and escalation workflows",
      "Review missed actions from a shared queue",
    ],
    previewTitle: "Response watchlist · Demo",
    previewRows: [
      { label: "New enquiry · #1048", detail: "Received 4 min ago", status: "On track" },
      { label: "New enquiry · #1047", detail: "Waiting 18 min", status: "Overdue" },
      { label: "Follow-up · #1039", detail: "Due today · 2:00 PM", status: "Due soon" },
      { label: "Negotiation · #1021", detail: "No activity for 3 days", status: "Review" },
    ],
  },
  {
    eyebrow: "06 · Team visibility",
    title: "Understand team activity at a glance",
    description:
      "Give managers a shared view of workload, ownership and recent activity. Use clear statuses to spot gaps and coordinate the next action.",
    icon: Users,
    points: [
      "Review team workload and assigned lead counts",
      "See recent activity and follow-up status",
      "Identify records that need manager attention",
      "Use role-based views for relevant team members",
    ],
    previewTitle: "Team activity · Demo",
    previewRows: [
      { label: "Priya Sharma", detail: "12 assigned · 4 follow-ups", status: "Active" },
      { label: "Rohan Mehta", detail: "9 assigned · 2 follow-ups", status: "Active" },
      { label: "Amit Kumar", detail: "15 assigned · 5 follow-ups", status: "Busy" },
      { label: "Neha Verma", detail: "7 assigned · 1 follow-up", status: "Available" },
    ],
    reverse: true,
  },
  {
    eyebrow: "07 · Call quality",
    title: "Keep call notes, recordings and coaching together",
    description:
      "Create a consistent review process for sales conversations. Recording and AI transcription or quality scoring require a compatible provider and must be enabled separately.",
    icon: AudioLines,
    points: [
      "Store call notes against the relevant lead",
      "Review call outcomes and coaching feedback",
      "Keep recording links with the interaction when available",
      "Prepare a quality checklist for manager reviews",
    ],
    previewTitle: "Call review · Demo",
    previewRows: [
      { label: "Opening and introduction", detail: "Quality checklist", status: "Complete" },
      { label: "Requirement captured", detail: "Call notes", status: "Complete" },
      { label: "Next action agreed", detail: "Follow-up commitment", status: "Review" },
      { label: "Recording / transcript", detail: "Provider connection required", status: "Optional" },
    ],
  },
  {
    eyebrow: "08 · Reports and analytics",
    title: "Turn daily activity into useful sales insight",
    description:
      "Bring lead volume, stage movement and follow-up activity into a shared reporting view. Demo figures are sample data and are not live performance metrics.",
    icon: BarChart3,
    points: [
      "Review lead volume by source and owner",
      "Track stage movement and conversion trends",
      "Compare follow-up completion across the team",
      "Spot bottlenecks in the sales process",
    ],
    previewTitle: "Sales overview · Sample data",
    previewRows: [
      { label: "New leads", detail: "This week", status: "128" },
      { label: "Contacted", detail: "Lead stage", status: "84" },
      { label: "Qualified", detail: "Lead stage", status: "39" },
      { label: "Follow-ups due", detail: "Today", status: "17" },
    ],
    reverse: true,
  },
  {
    eyebrow: "09 · HR and team operations",
    title: "Keep team tasks and attendance organized",
    description:
      "Extend the workspace beyond lead records with clear task ownership and team operations views. Attendance, GPS tracking, leave and payroll depend on the modules you choose to implement.",
    icon: UserRoundCheck,
    points: [
      "Assign tasks with owners, priorities and due dates",
      "Track task completion and overdue work",
      "Provide a clear view of attendance and leave requests",
      "Keep operational information organized by team",
    ],
    previewTitle: "Team operations · Demo",
    previewRows: [
      { label: "Daily call summary", detail: "Due by 6:00 PM", status: "Pending" },
      { label: "Attendance review", detail: "Team operations", status: "Ready" },
      { label: "Leave request", detail: "Manager approval", status: "Pending" },
      { label: "Task: contact warm leads", detail: "Assigned to Priya", status: "In progress" },
    ],
  },
  {
    eyebrow: "10 · AI copilot",
    title: "Ask questions about your sales workflow",
    description:
      "A CRM copilot can help users find patterns and summarize work in plain language. This page shows a sample interface only; no AI service is called.",
    icon: Bot,
    points: [
      "Explore natural-language questions for CRM data",
      "Summarize overdue follow-ups and lead stages",
      "Prepare team activity summaries",
      "Connect an AI provider only after backend setup",
    ],
    previewTitle: "Ask SmoothSales · Demo",
    previewRows: [
      { label: "Which follow-ups are overdue?", detail: "Example question", status: "Ask" },
      { label: "Show new leads by source", detail: "Example question", status: "Ask" },
      { label: "Summarize this week's activity", detail: "Example question", status: "Ask" },
      { label: "AI response", detail: "Shown as a static preview", status: "Demo" },
    ],
    reverse: true,
  },
  {
    eyebrow: "11 · Pipeline management",
    title: "Make every deal stage easy to understand",
    description:
      "Organize opportunities in a visual pipeline that reflects your sales process. Review stage, owner, expected value and next action without losing the bigger picture.",
    icon: GitBranch,
    points: [
      "Customize stages to match your sales process",
      "Review deal ownership and next actions",
      "Identify deals that have stalled",
      "Keep pipeline value and stage progress visible",
    ],
    previewTitle: "Pipeline board · Demo",
    previewRows: [
      { label: "New", detail: "18 opportunities", status: "₹4.8L" },
      { label: "Contacted", detail: "12 opportunities", status: "₹3.2L" },
      { label: "Qualified", detail: "8 opportunities", status: "₹6.1L" },
      { label: "Won", detail: "5 opportunities", status: "₹2.7L" },
    ],
  },
  {
    eyebrow: "12 · Lead profile and caller context",
    title: "See the full customer story in one place",
    description:
      "Keep contact details, source, ownership, notes, communication history and next steps together. A caller-ID overlay or automatic lead creation needs a supported mobile or telephony integration.",
    icon: Smartphone,
    points: [
      "Open one profile for contact and qualification details",
      "Review calls, notes and follow-up history",
      "Keep source and assigned owner visible",
      "Plan caller context integration for supported devices",
    ],
    previewTitle: "Lead profile · Demo",
    previewRows: [
      { label: "Customer", detail: "Ananya Sharma", status: "Lead" },
      { label: "Source", detail: "Meta Ads · Campaign A", status: "Tracked" },
      { label: "Last interaction", detail: "Call note · Today, 11:20 AM", status: "Logged" },
      { label: "Next action", detail: "Product demo · Tomorrow", status: "Scheduled" },
    ],
    reverse: true,
  },
  {
    eyebrow: "13 · Accounts and GST",
    title: "Keep quotes and invoice workflows connected",
    description:
      "Present account details and commercial documents alongside the customer relationship. GST calculations, invoice generation, payments and statutory exports require a separately implemented and validated accounting workflow.",
    icon: ReceiptText,
    points: [
      "Organize account and billing contact details",
      "Prepare quote and invoice workflow previews",
      "Keep commercial documents associated with customers",
      "Validate tax rules before enabling production invoicing",
    ],
    previewTitle: "Quotation summary · Demo",
    previewRows: [
      { label: "Quotation", detail: "SS-QT-0142", status: "Draft" },
      { label: "Customer", detail: "Example customer", status: "Linked" },
      { label: "Line items", detail: "2 sample items", status: "Review" },
      { label: "Tax and total", detail: "Illustrative values only", status: "Demo" },
    ],
  },
];

function DemoPreview({
  title,
  rows,
}: {
  title: string;
  rows: FeatureSectionData["previewRows"];
}) {
  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-lg">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-sm font-semibold text-foreground">{title}</span>
        </div>
        <Badge variant="outline" className="text-[10px]">SAMPLE</Badge>
      </div>
      <div className="space-y-1 p-3 sm:p-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="feature-preview-row flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/60"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{row.label}</p>
                <p className="truncate text-xs text-muted-foreground">{row.detail}</p>
              </div>
            </div>
            {row.status ? (
              <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                {row.status}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border bg-muted/30 px-5 py-3 text-xs text-muted-foreground">
        <Activity className="h-3.5 w-3.5 text-primary" />
        Illustrative interface · No live data connection
      </div>
    </Card>
  );
}

function FeatureSection({ feature, index }: { feature: FeatureSectionData; index: number }) {
  const Icon = feature.icon;
  return (
    <section className="feature-reveal py-14 sm:py-20">
      <div className={`mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 ${feature.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-3.5 w-3.5" />
            </span>
            {feature.eyebrow}
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {feature.title}
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {feature.description}
          </p>
          <ul className="space-y-3 pt-1">
            {feature.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/leads/active">
                Explore lead workspace <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/5 blur-2xl" />
          <DemoPreview title={feature.previewTitle} rows={feature.previewRows} />
        </div>
      </div>
      {index < sections.length - 1 ? (
        <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
          <div className="h-px bg-border/80" />
        </div>
      ) : null}
    </section>
  );
}

export default function FeaturesPage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const [activeHeroTile, setActiveHeroTile] = useState(2);
  const [activeStage, setActiveStage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveStage((current) => (current + 1) % 6);
      }, 2500);

      return () => clearInterval(interval);
    }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setActiveHeroTile((current) => (current + 1) % heroTiles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>(
      ".feature-reveal, .feature-reveal-child"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);


  // 236, 53%, 6%

  return (
    <main ref={pageRef} className="features-animated-page min-h-screen bg-slate-50 dark:bg-[hsl(236,53%,6%)] font-sans text-slate-900 dark:text-white transition-colors duration-300">
      <style jsx global>{`
        .features-animated-page .feature-reveal,
        .features-animated-page .feature-reveal-child {
          opacity: 0;
          transform: translate3d(0, 28px, 0);
          transition: opacity 720ms cubic-bezier(.2,.75,.25,1),
                      transform 720ms cubic-bezier(.2,.75,.25,1);
          will-change: opacity, transform;
        }
        .features-animated-page .feature-reveal.is-visible,
        .features-animated-page .feature-reveal-child.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .features-animated-page .feature-reveal-delay-1 { transition-delay: 120ms; }
        .features-animated-page .feature-reveal-delay-2 { transition-delay: 220ms; }
        .features-animated-page .feature-reveal-delay-3 { transition-delay: 320ms; }
        .features-animated-page .grid > .feature-reveal-child:nth-child(2) { transition-delay: 90ms; }
        .features-animated-page .grid > .feature-reveal-child:nth-child(3) { transition-delay: 180ms; }
        .features-animated-page .grid > .feature-reveal-child:nth-child(4) { transition-delay: 270ms; }
        .features-animated-page .feature-float {
          animation: smoothsales-float 6s ease-in-out infinite;
        }
        .features-animated-page .feature-glow {
          animation: smoothsales-glow 5s ease-in-out infinite alternate;
        }
        .features-animated-page .hero-feature-tile {
          animation: hero-tile-in 500ms cubic-bezier(.2,.75,.25,1) both;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .features-animated-page .hero-feature-tile.is-active {
          border-color: #9b7cff;
          background: linear-gradient(145deg, hsl(var(--primary) / .12), hsl(var(--background)));
          box-shadow: 0 0 0 2px #9b7cff, 0 12px 30px hsl(var(--primary) / .18);
          transform: translateY(-3px) scale(1.015);
        }
        .features-animated-page .hero-phone {
          animation: hero-phone-in 900ms cubic-bezier(.2,.75,.25,1) both, smoothsales-float 6s ease-in-out 900ms infinite;
        }
        .features-animated-page .hero-preview-screen {
          animation: hero-preview-in 420ms cubic-bezier(.2,.75,.25,1) both;
        }
        @keyframes hero-preview-in {
          from { opacity: 0; transform: translateY(10px) scale(.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .features-animated-page .audio-wave-bar {
          transform-origin: center;
          animation: audio-wave-pulse 700ms ease-in-out infinite alternate;
        }

        @keyframes audio-wave-pulse {
          from {
            transform: scaleY(0.35);
            opacity: 0.65;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }
        .features-animated-page .hero-chat-message {
          opacity: 0;
          animation: hero-chat-in 600ms ease-out both;
        }
        .features-animated-page .hero-chat-message:nth-child(1) { animation-delay: 350ms; }
        .features-animated-page .hero-chat-message:nth-child(2) { animation-delay: 950ms; }
        .features-animated-page .hero-chat-message:nth-child(3) { animation-delay: 1550ms; }
        .features-animated-page .hero-chat-message:nth-child(4) { animation-delay: 2150ms; }
        .features-animated-page .hero-chat-message:nth-child(5) { animation-delay: 2750ms; }
        .features-animated-page .feature-logo-tile {
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .features-animated-page .feature-logo-tile:hover {
          transform: translateY(-4px);
          border-color: hsl(var(--primary) / .35);
          box-shadow: 0 12px 28px hsl(var(--foreground) / .06);
        }
        .features-animated-page .feature-preview-row {
          transition: background-color 180ms ease, transform 180ms ease;
        }
        .features-animated-page .feature-preview-row:hover {
          transform: translateX(3px);
        }
        @keyframes smoothsales-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes hero-tile-in {
          from { opacity: 0; transform: translateY(12px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hero-phone-in {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hero-chat-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes smoothsales-glow {
          from { opacity: .55; transform: scale(.96); }
          to { opacity: 1; transform: scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          .features-animated-page *,
          .features-animated-page *::before,
          .features-animated-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
          .features-animated-page .feature-reveal,
          .features-animated-page .feature-reveal-child {
            opacity: 1 !important;
            transform: none !important;
          }
          .features-animated-page .hero-chat-message {
            opacity: 1 !important;
            animation: none !important;
          }
          .features-animated-page .hero-feature-tile,
          .features-animated-page .hero-phone {
            animation: none !important;
          }
        }
      `}</style>
      
      {/* New SECTION CODE */}
      {/* Replace the existing hero section with this Salesmax-style opening section. */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[hsl(236,53%,6%)] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.16),transparent_55%)]" />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
              Features
            </p>

            <h1 className="text-balance font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              {/* Everything your sales team needs — from first lead to final payment */}
              Every Lead Captured. Every Conversation Tracked. Every Sale Monitored.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Six stages. One connected workflow. Less manual updating.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-violet-600 px-8 text-white hover:bg-violet-500">
                <Link href="/sign-up">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
  
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>

          {/* <nav aria-label="Sales workflow stages" className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Lead Capture",
              "First Contact",
              "Follow-ups",
              "Deals",
              "Payments",
              "Visibility",
            ].map((stage, index) => (
              <a
                key={stage}
                href={index === 0 ? "#lead-capture" : `#workflow-${index + 1}`}
                className={`rounded-xl border px-3 py-3 text-center text-sm font-semibold transition-colors ${
                  index === 0
                    ? "border-violet-400/60 bg-violet-500/10 text-violet-700 dark:text-violet-200"
                    : "border-slate-200 bg-white/70 text-slate-600 hover:border-violet-400/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-violet-400/50"
                }`}
              >
                <span className="mb-1 block text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
                {stage}
              </a>
            ))}
          </nav> */}
          
            <nav
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
            </nav>

        </div>
      </section>

      
      {/* Feature-1: Every lead from every channel */}
      {/* Feature-1: Unified Lead Capture */}
        <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/80 via-slate-50 to-sky-50/60 dark:from-[#0D0D18] dark:via-[hsl(233,53%,9%)] dark:to-[#0D111A] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex rounded-full border border-violet-200 bg-white dark:bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
                Unified Lead Capture
              </span>

              {/* <h2 className="font-heading text-[36px] font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl lg:text-5xl">
                Every lead, from{" "}
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  every channel
                </span>
                , in one inbox
              </h2> */}
              <h2 className="font-heading text-[36px] font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground">
                Every lead, from{" "}
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  every channel
                </span>
                , in one inbox
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-muted-foreground sm:text-base">
                Capture enquiries from advertising platforms, business directories,
                property portals and your website in one centralized CRM workspace.
              </p>
            </div>

            {/* Unified dashboard */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 dark:border-border bg-white dark:bg-[hsl(233,53%,9%)] p-4 shadow-[0_24px_80px_rgba(76,29,149,0.12)] sm:p-7 lg:p-9">
              {/* <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"> */}
              {/* <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]"> */}
              {/* <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"> */}
              {/* <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-80"> */}
              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-80">
                
                {/* Animated lead flow connector */}
                {/* Animated lead routing */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 hidden lg:block"
                >
                  <svg
                    viewBox="0 0 1000 560"
                    preserveAspectRatio="none"
                    className="h-full w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#c4b5fd" />
                        <stop offset="55%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>

                      <linearGradient id="label-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>

                      <filter id="route-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {[
                      {
                        name: "META Anjali",
                        start: 70,
                        end: 180,
                        path: "M 390 80 C 520 80 570 205 650 280",
                        delay: "0s",
                      },
                      {
                        name: "GADS Rohit",
                        start: 165,
                        end: 220,
                        path: "M 390 175 C 510 175 575 235 650 280",
                        delay: "-0.7s",
                      },
                      {
                        name: "IM Pranav",
                        start: 280,
                        end: 280,
                        path: "M 390 280 H 650",
                        delay: "-1.4s",
                      },
                      {
                        name: "JD Sneha",
                        start: 340,
                        end: 340,
                        path: "M 390 375 C 510 375 575 325 650 280",
                        delay: "-2.1s",
                      },
                      {
                        name: "WEB Mehul",
                        start: 430,
                        end: 390,
                        path: "M 390 470 C 520 470 570 355 650 280",
                        delay: "-2.8s",
                      },
                    ].map((route, index) => (
                      <g key={route.name}>
                        <path
                          d={route.path}
                          fill="none"
                          stroke="url(#route-gradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          opacity="0.75"
                        />

                        {/* <circle >
                          <animateMotion
                            dur="3.5s"
                            begin={route.delay}
                            repeatCount="indefinite"
                            path={`M 430 ${route.end} H 760`}
                          />
                        </circle> */}
                        <circle 
                        // r="4" fill="#22d3ee" filter="url(#route-glow)"
                        >
                          <animateMotion
                            dur="3.5s"
                            begin={route.delay}
                            repeatCount="indefinite"
                            path={`M 430 ${route.end} H 760`}
                          />
                        </circle>

                          {/* Lead label moves horizontally, independently of the curve */}
                          <g>
                            <rect
                              x="0"
                              y="-12"
                              width="104"
                              height="24"
                              rx="12"
                              fill="url(#label-gradient)"
                            />

                            <text
                              x="52"
                              y="4"
                              textAnchor="middle"
                              fontSize="11"
                              fontWeight="600"
                              fill="white"
                            >
                              {route.name}
                            </text>

                            <animateMotion
                              dur="3.5s"
                              begin={route.delay}
                              repeatCount="indefinite"
                              path={`M 430 ${route.end} H 570`}
                            />
                          </g>

                      </g>
                    ))}
                  </svg>
                </div>


                {/* Lead sources */}
                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-foreground">
                        Lead sources
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                        Multiple channels, one destination
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      5 sources
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Meta Ads", detail: "Facebook & Instagram", mark: "f", color: "bg-blue-600", count: 24 },
                      { name: "Google Ads", detail: "Search & lead forms", mark: "G", color: "bg-emerald-600", count: 18 },
                      { name: "IndiaMART", detail: "B2B enquiries", mark: "IM", color: "bg-orange-500", count: 32 },
                      { name: "Justdial", detail: "Local business leads", mark: "JD", color: "bg-red-500", count: 12 },
                      { name: "Website Forms", detail: "Direct enquiries", mark: "</>", color: "bg-violet-600", count: 9 },
                    ].map((source) => (
                      <div
                        key={source.name}
                        className="flex items-center gap-3 rounded-2xl border border-slate-100 dark:border-border bg-white dark:bg-white/[0.04] p-3 shadow-[0_3px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${source.color} text-xs font-extrabold text-white`}
                        >
                          {source.mark}
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-slate-800 dark:text-foreground">
                            {source.name}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-muted-foreground">
                            {source.detail}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-extrabold tabular-nums text-slate-800 dark:text-foreground">
                            {source.count}
                          </p>
                          <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] font-medium text-emerald-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Connected
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CRM inbox */}
                <div className="relative z-10 min-w-0">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-foreground">
                        Smart CRM
                      </h3>
                      <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                        Incoming leads · All channels
                      </p>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                      Live inbox
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-border bg-white dark:bg-white/[0.04] shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-border px-4 py-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-foreground">
                          Recent enquiries
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                          Incoming lead activity
                        </p>
                      </div>
                      <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700">
                        4 new
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {[
                        { name: "Anjali Kumar", source: "Meta Ads", time: "Just now", initials: "AK", color: "bg-blue-100 text-blue-700" },
                        { name: "Rohit Sharma", source: "Google Ads", time: "12 sec ago", initials: "RS", color: "bg-violet-100 text-violet-700" },
                        { name: "Pranav Mehta", source: "IndiaMART", time: "28 sec ago", initials: "PM", color: "bg-orange-100 text-orange-700" },
                        { name: "Sneha Verma", source: "Justdial", time: "45 sec ago", initials: "SV", color: "bg-emerald-100 text-emerald-700" },
                      ].map((lead) => (
                        <div
                          key={lead.name}
                          className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-violet-50/50"
                        >
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${lead.color}`}
                          >
                            {lead.initials}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-bold text-slate-800 dark:text-foreground">
                              {lead.name}
                            </p>
                            <p className="mt-1 truncate text-xs text-slate-500 dark:text-muted-foreground">
                              {lead.source} · {lead.time}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-700">
                            New
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 border-t border-slate-100 dark:border-border bg-slate-50/70 p-3">
                      <span className="rounded-lg bg-emerald-100 px-3 py-2 text-[11px] font-bold text-emerald-700">
                        WhatsApp
                      </span>
                      <span className="rounded-lg bg-blue-100 px-3 py-2 text-[11px] font-bold text-blue-700">
                        Email follow-up
                      </span>
                      <span className="rounded-lg bg-amber-100 px-3 py-2 text-[11px] font-bold text-amber-800">
                        Auto-dial
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      {/* Ending Feature-1 */}

      
      {/* Feature-2: Lead Source Integrations */}
      {/* <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-violet-400">
              15+ Lead Source Integrations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
            {[
              { name: "Meta Ads", mark: "f", color: "bg-blue-500", detail: "FB & IG" },
              { name: "Google Ads", mark: "G", color: "bg-gradient-to-br from-blue-500 to-emerald-500", detail: "Lead Form" },
              { name: "IndiaMART", mark: "IM", color: "bg-orange-500" },
              { name: "JustDial", mark: "JD", color: "bg-orange-800" },
              { name: "TradeIndia", mark: "Ti", color: "bg-pink-500" },
              { name: "ExportersIndia", mark: "E", color: "bg-blue-600" },
              { name: "Sulekha", mark: "Sk", color: "bg-slate-900" },
              { name: "99acres", mark: "99", color: "bg-gradient-to-br from-purple-600 to-pink-600" },
              { name: "MagicBricks", mark: "MB", color: "bg-gradient-to-br from-pink-500 to-red-500" },
              { name: "Housing.com", mark: "H", color: "bg-gradient-to-br from-teal-400 to-teal-600" },
              { name: "NoBroker", mark: "NB", color: "bg-red-500" },
              { name: "WordPress", mark: "W", color: "bg-sky-700" },
              { name: "Google Forms", mark: "GF", color: "bg-violet-700" },
              { name: "Google Sheets", mark: "GS", color: "bg-emerald-600" },
              { name: "Gmail", mark: "@", color: "bg-orange-800" },
              { name: "Pabbly", mark: "Pb", color: "bg-pink-500" },
              { name: "Website API", mark: "W", color: "bg-gradient-to-br from-cyan-400 to-blue-500" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex min-h-[148px] flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card px-3 py-4 shadow-[0_5px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-xl text-lg font-extrabold text-white ${
                    item.color.startsWith("text-") ? "bg-white dark:bg-card" : item.color
                  } ${item.color.startsWith("text-") ? item.color : ""}`}
                >
                  {item.mark}
                </div>

                <p className="text-center text-sm font-bold text-slate-800 dark:text-foreground">
                  {item.name}
                </p>

                {"detail" in item && item.detail && (
                  <p className="mt-2 text-xs text-slate-500 dark:text-muted-foreground">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Ending Feature-2 */}

      
        {/* Feature-3: Smart Routing */}
        <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.25em] text-violet-400">
                Smart Routing
              </p>
              {/* <h2 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                Auto-assign by{" "}
                <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  source, geography or round-robin
                </span>
              </h2> */}
              <h2 className="mx-auto max-w-2xl text-[36px] font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground">
                Auto-assign by{" "}
                <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  source, geography or round-robin
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white bg-white dark:bg-white/[0.04] p-3 shadow-[0_16px_50px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_1fr_1.15fr] lg:gap-3 lg:p-4">
              {/* Source column */}
              <div className="min-w-0">
                <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-violet-400">
                  ♟ Source
                </p>

                <div className="space-y-2">
                  {[
                    { name: "Meta Ads", count: "32 today", mark: "f", color: "bg-blue-500" },
                    { name: "Google Ads", count: "18 today", mark: "G", color: "bg-gradient-to-br from-blue-500 to-emerald-500" },
                    { name: "IndiaMART", count: "11 today", mark: "IM", color: "bg-orange-500" },
                    { name: "JustDial", count: "7 today", mark: "JD", color: "bg-white dark:bg-card text-orange-600 border-l-2 border-l-orange-500" },
                  ].map((source) => (
                    <div
                      key={source.name}
                      className="flex h-[52px] items-center gap-2 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-white/[0.04] px-2.5 shadow-sm"
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-extrabold ${source.color} ${source.color.includes("text-") ? "" : "text-white"}`}>
                        {source.mark}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-bold text-slate-800 dark:text-foreground">{source.name}</p>
                        <p className="mt-0.5 text-[10px] text-slate-500 dark:text-muted-foreground">{source.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Routing rules column */}
              <div className="min-w-0">
                <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-violet-400">
                  ◉ Routing rule
                </p>

                <div className="space-y-2">
                  {[
                    { rule: "if source = Meta", owner: "Priya", label: "META · Anjali → Priya", top: "12%" },
                    { rule: "if source = Google Ads", owner: "Rohan", label: "GADS · Rohit → Rohan", top: "34%" },
                    { rule: "if source = IndiaMART", owner: "Amit", label: "IM · Pranav → Amit", top: "56%" },
                    { rule: "if source = JustDial", owner: "Neha", label: "JD · Sneha → Neha", top: "78%" },
                  ].map((item, index) => (
                    <div
                      key={item.rule}
                      className="relative flex h-[52px] items-center overflow-hidden rounded-lg border border-dashed border-violet-200 bg-gradient-to-r from-violet-50/70 to-sky-50/70 px-2.5"
                    >
                      <p className="whitespace-nowrap text-[12px] font-medium text-slate-600 dark:text-muted-foreground">
                        <span className="font-bold text-violet-600">{item.rule}</span>
                        {" → "}{item.owner}
                      </p>

                      <div
                        className="pointer-events-none absolute left-0 top-1/2 z-10 -translate-y-1/2 whitespace-nowrap rounded-full bg-violet-500 px-2 py-1 text-[10px] font-bold text-white shadow-[0_3px_10px_rgba(139,92,246,0.35)]"
                        style={{
                          animation: `routing-label-${index} 4s linear ${index * -0.9}s infinite`,
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caller column */}
              <div className="min-w-0">
                <p className="mb-3 text-[12px] font-bold uppercase tracking-wider text-violet-400">
                  ♟ Caller
                </p>

                <div className="space-y-2">
                  {[
                    { name: "Priya Sharma", detail: "32 · On Call", initials: "PS", color: "bg-red-500" },
                    { name: "Rohan Mehta", detail: "18 · Idle", initials: "RM", color: "bg-sky-500" },
                    { name: "Amit Kumar", detail: "11 · On Call", initials: "AK", color: "bg-emerald-400" },
                    { name: "Neha Verma", detail: "7 · Idle", initials: "NV", color: "bg-pink-500" },
                  ].map((caller) => (
                    <div
                      key={caller.name}
                      className="flex h-[52px] items-center gap-2 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-white/[0.04] px-2.5 shadow-sm"
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${caller.color} text-[9px] font-extrabold text-white`}>
                        {caller.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-bold text-slate-800 dark:text-foreground">{caller.name}</p>
                        <p className="mt-0.5 text-[10px] text-slate-500 dark:text-muted-foreground">{caller.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
         </section>
          {/* Ending Feature-3  */}
         
                  
          {/* Feature: WhatsApp AI Bot */}
          <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                  WhatsApp AI Bot
                </p>
                <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                  An AI Bot that{" "}
                  <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    qualifies leads while you sleep
                  </span>
                </h2>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Phone conversation */}
                <div className="relative flex justify-center lg:justify-center">
                  <div className="absolute left-4 top-0 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg sm:left-12">
                    ▶ Auto Play
                  </div>

                  <div className="w-[300px] overflow-hidden rounded-[42px] border-[8px] border-slate-950 bg-white dark:bg-card shadow-[0_25px_70px_rgba(15,23,42,0.16)]">
                    <div className="min-h-[480px] bg-[#e7dfd6] p-3">
                      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-3 text-white">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-card text-lg">
                          🤖
                        </div>
                        <div>
                          <p className="text-xs font-bold">Smart CRM AI Bot</p>
                          <p className="text-[10px] text-white/80">online · typing...</p>
                        </div>
                      </div>

                      <div className="space-y-2 py-8 text-[11px] text-slate-700 dark:text-foreground">
                        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white dark:bg-card px-3 py-3">
                          Hi Rohit 👋 1, 5 or 10-user plan?
                        </div>
                        <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm bg-[#dcf8c6] px-3 py-3">
                          5-user plan please
                        </div>
                        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white dark:bg-card px-3 py-3">
                          Demo today 3–6 PM?
                        </div>
                        <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm bg-[#dcf8c6] px-3 py-3">
                          Today 4 PM
                        </div>
                        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white dark:bg-card px-3 py-3">
                          Booked ✅
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="max-w-xl">
                  <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                    Qualifies. Books.{" "}
                    <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                      Hands off.
                    </span>
                  </h3>

                  <ul className="space-y-3">
                    {[
                      "Auto-qualifies budget, requirement, user count",
                      "Books appointment on calendar",
                      "English + Hindi + Hinglish",
                      "Pings human caller when intent is high",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 dark:text-foreground sm:text-base">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-400 text-lg font-bold text-white">
                          ✓
                        </span>
                        <span className="pt-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*Ending WhatsApp AI Bot  */}

                    
          {/* Feature: Cold Calling Engine */}
          <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 text-center">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                  Cold Calling Engine
                </p>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                  Auto-dial. Track.{" "}
                  <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Audit every call.
                  </span>
                </h2>
              </div>
               
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    image: "/images/features/phone-call.png",
                    title: "Auto-Dial 60 sec",
                    description: "Tap-to-call push the moment lead lands.",
                  },
                  {
                    image: "/images/features/language-learning-app.png",
                    title: "Smart Caller-ID",
                    description: "Old client name, stage, last remark on lock-screen.",
                  },
                  {
                    image: "/images/features/add-basket.png",
                    title: "Fresh Caller Auto-add",
                    description: "Unknown number → auto-create NEW lead on ring.",
                  },
                  {
                    image: "/images/features/entrance.png",
                    title: "Full Phone Log",
                    description: "Incoming · Outgoing · Missed in CRM.",
                  },
                  {
                    image: "/images/features/exclamation.png",
                    title: "TAT Violation Alerts",
                    description: "No call in 10 min? Rep pinged. Admin escalation.",
                  },
                  {
                    image: "/images/features/call-missed.png",
                    title: "Missed Call Insight",
                    description: "Auto-add lead + auto-WA callback + smart retry.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="mb-4 flex h-8 w-8 items-center justify-center overflow-hidden">
                      <img
                        src={feature.image}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="mb-2 text-base font-bold text-slate-900 dark:text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-600 dark:text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
           {/* Ending Feature Cold Calling Engine */}

           
            {/* Feature: Auto-Dial Engine */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    Auto-Dial Engine
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    Auto-dial every new lead —{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      in 60 seconds
                    </span>
                  </h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  {/* Phone queue */}
                  <div className="relative flex justify-center">
                    <div className="absolute left-0 top-[-34px] rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg sm:left-8">
                      ▶ Auto Play
                    </div>

                    <div className="w-[292px] overflow-hidden rounded-[40px] border-[7px] border-slate-950 bg-slate-950 p-[0px] shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                      <div className="min-h-[510px] rounded-[30px] bg-gradient-to-b from-blue-100 to-indigo-100 p-3">
                        <div className="mb-3 flex items-center justify-between pt-2 text-xs font-semibold text-slate-600 dark:text-muted-foreground">
                          <span>09:24</span>
                          <span>▥ 69%</span>
                        </div>

                        <p className="mb-3 text-sm font-extrabold text-slate-900 dark:text-foreground">
                          Auto-dial · 2 queued
                        </p>

                        <div className="space-y-2">
                          {[
                            {
                              icon: "📞",
                              title: "Tap to call · Anjali",
                              detail: "Meta · 9s ago",
                              type: "call",
                            },
                            {
                              icon: "📞",
                              title: "Tap to call · Sandeep",
                              detail: "Google Ad · 12s",
                              type: "call",
                            },
                            {
                              icon: "☑️",
                              title: "Welcome WA + Email sent",
                              detail: "Auto · 7s ago",
                              type: "message",
                            },
                          ].map((item) => (
                            <div
                              key={item.title}
                              className={`flex items-center gap-2 rounded-xl border-l-[3px] bg-white dark:bg-card p-3 shadow-sm ${
                                item.type === "call"
                                  ? "border-violet-500"
                                  : "border-emerald-400"
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                                  item.type === "call"
                                    ? "bg-indigo-100"
                                    : "bg-emerald-100"
                                }`}
                              >
                                {item.icon}
                              </span>

                              <div className="min-w-0">
                                <p className="truncate text-[11px] font-extrabold text-slate-800 dark:text-foreground">
                                  {item.title}
                                </p>
                                <p className="mt-1 text-[10px] text-slate-500 dark:text-muted-foreground">
                                  {item.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="max-w-xl">
                    <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                      One tap.{" "}
                      <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                        Lead context loaded.
                      </span>
                    </h3>

                    <ul className="space-y-3">
                      {[
                        '"Tap to call" Android push for every queued lead',
                        "Caller-ID overlay shows source & notes",
                        "Auto-skip if no answer · auto-retry",
                        "Round-robin distribution",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-700 dark:text-foreground sm:text-base"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-base font-bold text-white">
                            ✓
                          </span>
                          <span className="pt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* Ending Feature Auto-Dial Engine */}

            
            {/* Feature: SLA & Compliance */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    SLA &amp; Compliance
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    TAT Violation Alerts{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      at 10 minutes
                    </span>
                  </h2>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  {/* Rule violations */}
                  <div>
                    <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-foreground">
                      Rule violations &amp;{" "}
                      <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                        admin escalation
                      </span>
                    </h3>

                    <ul className="space-y-3">
                      {[
                        '"No call in 10 min" alert to rep',
                        "TAT escalation to admin",
                        "Stage-stuck alerts (Negotiation 3+ days)",
                        "Daily violation digest emailed to leadership",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-foreground sm:text-base">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-base font-bold text-white">
                            ✓
                          </span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alert phone mockup */}
                  <div className="relative flex justify-center">
                    <div className="absolute left-0 top-[-34px] rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg sm:left-8">
                      ▶ Auto Play
                    </div>

                    <div className="w-[292px] overflow-hidden rounded-[40px] border-[7px] border-slate-950 bg-slate-950 p-[0px] shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                      <div className="min-h-[510px] rounded-[30px] bg-gradient-to-b from-rose-100 via-orange-100 to-amber-100 p-3">
                        <div className="mb-3 flex items-center justify-between pt-2 text-xs font-semibold text-slate-600 dark:text-muted-foreground">
                          <span>09:32</span>
                          <span>▥ 68%</span>
                        </div>

                        <p className="mb-3 text-xs font-extrabold text-red-600">
                          ⚠️ Lead CRM Violations
                        </p>

                        <div className="space-y-2">
                          {[
                            {
                              icon: "🚨",
                              title: "TAT VIOLATION (admin)",
                              detail: "Negotiation 3d 4h",
                              border: "border-red-500",
                              iconBg: "bg-rose-100",
                              titleColor: "text-red-600",
                            },
                            {
                              icon: "⚠️",
                              title: "Missed follow-up",
                              detail: "Anjali overdue 18 min",
                              border: "border-orange-500",
                              iconBg: "bg-orange-100",
                              titleColor: "text-orange-600",
                            },
                            {
                              icon: "⚠️",
                              title: "No call in 10 min",
                              detail: "Harsh · 0 dials",
                              border: "border-orange-500",
                              iconBg: "bg-orange-100",
                              titleColor: "text-orange-600",
                            },
                          ].map((alert) => (
                            <div
                              key={alert.title}
                              className={`flex items-center gap-2 rounded-xl border-l-[3px] bg-white dark:bg-card p-3 shadow-sm ${alert.border}`}
                            >
                              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${alert.iconBg}`}>
                                {alert.icon}
                              </span>

                              <div className="min-w-0">
                                <p className={`truncate text-[11px] font-extrabold ${alert.titleColor}`}>
                                  {alert.title}
                                </p>
                                <p className="mt-1 text-[10px] text-slate-500 dark:text-muted-foreground">
                                  {alert.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Ending Feature SLA & Compliance */}

                        
            {/* Feature: Live Caller Tracking & Team Monitoring */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    Real-Time Visibility
                  </p>

                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    Live Caller Tracking &amp;{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Team Monitoring
                    </span>
                  </h2>
                </div>

                {/* Browser dashboard */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-border bg-white dark:bg-white/[0.04] shadow-[0_12px_36px_rgba(15,23,42,0.06)]">
                  {/* Browser header */}
                  <div className="border-b border-slate-100 dark:border-border px-4 py-3">
                    <div className="mb-1 inline-flex rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                      ▶ Auto Play
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-muted-foreground">
                      <span className="h-4 w-4 rounded-full bg-red-400" />
                      <span className="h-4 w-4 rounded-full bg-amber-400" />
                      <span className="h-4 w-4 rounded-full bg-green-500" />
                      <span className="ml-2">crm.smartcrmsolution.com / live</span>
                    </div>
                  </div>

                  {/* Live status panel */}
                  <div className="p-4">
                    <div className="rounded-xl border border-slate-200 dark:border-border p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-foreground">
                          Live Team Status
                        </h3>
                      </div>

                      {/* Status counters */}
                      <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
                        <span className="rounded-lg bg-emerald-100 px-3 py-2 text-emerald-700">
                          ♧ On Call · 1
                        </span>
                        <span className="rounded-lg bg-blue-100 px-3 py-2 text-blue-700">
                          ⚒ Idle · 1
                        </span>
                        <span className="rounded-lg bg-slate-800 px-3 py-2 text-white">
                          ● Offline · 2
                        </span>
                      </div>

                      {/* Team member cards */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                          {
                            name: "Gopal (admin)",
                            status: "On Call · 25m",
                            initials: "G",
                            color: "bg-orange-500",
                            statusColor: "text-emerald-600",
                            dot: "bg-emerald-500",
                          },
                          {
                            name: "Harsh (sales)",
                            status: "Idle · 9h 13m",
                            initials: "H",
                            color: "bg-blue-500",
                            statusColor: "text-blue-600",
                            dot: "bg-blue-500",
                          },
                          {
                            name: "Neetu (sales)",
                            status: "Offline · 15h",
                            initials: "N",
                            color: "bg-emerald-500",
                            statusColor: "text-red-500",
                            dot: "bg-red-500",
                          },
                          {
                            name: "test (sales)",
                            status: "Offline · 107h",
                            initials: "T",
                            color: "bg-red-500",
                            statusColor: "text-red-500",
                            dot: "bg-red-500",
                          },
                        ].map((member) => (
                          <div
                            key={member.name}
                            className="flex min-w-0 items-center gap-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] px-3 py-3"
                          >
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white ${member.color}`}
                            >
                              {member.initials}
                            </span>

                            <div className="min-w-0">
                              <p className="truncate text-xs font-extrabold text-slate-800 dark:text-foreground">
                                {member.name}
                              </p>
                              <p className={`mt-1 flex items-center gap-1 text-[10px] font-semibold ${member.statusColor}`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${member.dot}`} />
                                {member.status}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Ending Feature Live Caller Tracking & Team Monitoring */}

                        
            {/* Feature: Call Recording & AI Audit */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    Call Recording
                  </p>

                  <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    Every call{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      recorded &amp; audited by AI
                    </span>{" "}
                    — with rating &amp; transcription
                  </h2>
                </div>

                {/* Audio player card */}
                <div className="rounded-2xl border border-slate-200 dark:border-border bg-white dark:bg-[hsl(233,53%,9%)] p-4 shadow-sm">
                  <div className="relative flex min-h-[132px] items-center rounded-2xl bg-[#10172b] px-5 py-5 text-white sm:px-8">
                    {/* Play button */}
                    <button
                      type="button"
                      aria-label="Play call recording"
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-2xl text-white shadow-lg transition-transform hover:scale-105"
                    >
                      ▶
                    </button>

                    {/* Call details */}
                    <div className="ml-4 flex min-w-0 flex-1 flex-col self-stretch">
                      <p className="truncate text-xs font-extrabold sm:text-sm">
                        Devendra Pandey · Negotiation · 5m 34s
                      </p>

                      {/* Waveform */}
                      <div className="flex flex-1 items-center justify-center gap-[3px] py-3">
                        {[38, 25, 42, 14, 30, 10, 18, 28, 12, 32, 16, 40, 24, 15, 36, 18, 42, 28, 12, 34, 20, 40, 13, 8].map(
                          (height, index) => (
                            <span
                              key={index}
                              className="w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-violet-500"
                              style={{ height: `${height}px` }}
                            />
                          )
                        )}
                      </div>

                      <div className="flex justify-between text-[10px] font-medium text-slate-400 sm:text-xs">
                        <span>02:14</span>
                        <span>05:34</span>
                      </div>
                    </div>
                  </div>

                  {/* AI audit badges */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "⭐ 4/5 AI Rating",
                      "😃 Positive",
                      "▤ Negotiation",
                      "📝 Auto-transcribed",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-[11px] font-bold text-violet-600"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Ending Feature Call Recording & AI Audit */}

                        
            {/* Feature: AI Quality Control */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    AI Quality Control
                  </p>

                  <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    AI listens,{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      rates &amp; suggests next-best-action
                    </span>
                  </h2>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-border bg-white dark:bg-white/[0.04] p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-5">
                  {/* Listening player */}
                  <div className="rounded-xl bg-gradient-to-r from-[#11182b] to-[#202b40] p-4 text-white sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold">
                        🎧 AI listening · 02:14 / 05:34
                      </p>
                      <p className="flex items-center gap-1.5 text-[10px] font-extrabold text-violet-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        ANALYSING
                      </p>
                    </div>

                    <div className="mt-3 flex h-10 items-end justify-center gap-[3px]">
                      {[8, 12, 6, 20, 10, 30, 15, 24, 9, 18, 29, 12, 8, 26, 17, 31, 12, 23, 10, 29, 15, 8, 25, 13].map(
                        (height, index) => (
                          <span
                            key={index}
                            className="w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-violet-500"
                            style={{ height: `${height}px` }}
                          />
                        )
                      )}
                    </div>

                    <p className="mt-2 text-center text-[9px] text-slate-400">
                      Detected: <span className="font-bold text-violet-300">Negotiation · price comparison</span>
                    </p>
                  </div>

                  {/* KPI cards */}
                  <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[
                      { icon: "🎧", value: "23", label: "ANALYSED", color: "bg-slate-50 dark:bg-muted", text: "text-slate-800 dark:text-foreground" },
                      { icon: "😃", value: "9 (39%)", label: "POSITIVE", color: "bg-emerald-50", text: "text-emerald-600" },
                      { icon: "😟", value: "3 (13%)", label: "NEGATIVE", color: "bg-orange-50", text: "text-orange-600" },
                      { icon: "🧠", value: "~95%", label: "ACCURACY", color: "bg-indigo-50", text: "text-indigo-600" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={`flex min-h-[96px] flex-col items-center justify-center rounded-xl ${stat.color} p-3`}
                      >
                        <span className="mb-1 text-base">{stat.icon}</span>
                        <p className={`text-lg font-extrabold ${stat.text}`}>{stat.value}</p>
                        <p className="mt-1 text-[9px] font-medium text-slate-500 dark:text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* AI call reviews */}
                  <div className="mt-3 space-y-2">
                    {[
                      {
                        name: "Devendra Pandey",
                        rating: "😟 2/5 ★",
                        description: "Brush-off · no real interest.",
                        action: "AI: Lost · follow up 60d",
                        border: "border-l-rose-400",
                        badge: "bg-rose-100 text-rose-600",
                      },
                      {
                        name: "Vikram Joshi",
                        rating: "😃 4/5 ★",
                        description: "Strong intent · requested team demo.",
                        action: "AI: Demo Scheduled",
                        border: "border-l-emerald-400",
                        badge: "bg-emerald-100 text-emerald-600",
                      },
                    ].map((review) => (
                      <div
                        key={review.name}
                        className={`rounded-xl border border-slate-100 dark:border-border border-l-[3px] ${review.border} p-3`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-extrabold text-slate-800 dark:text-foreground">{review.name}</p>
                          <span className={`rounded-md px-2 py-1 text-[10px] font-bold ${review.badge}`}>
                            {review.rating}
                          </span>
                        </div>

                        <p className="mt-2 text-xs text-slate-600 dark:text-muted-foreground">{review.description}</p>

                        <div className="mt-2 rounded-md bg-blue-50 px-3 py-2 text-[10px] font-semibold text-blue-700">
                          🎯 {review.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Ending Feature AI Quality Control */}

                        
            {/* Feature: Caller Dashboard */}
            <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-14 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                  <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                    Caller Dashboard
                  </p>

                  <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                    Every call.{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                      Counted. Categorised. Compared.
                    </span>
                  </h2>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-white/[0.04] p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
                    {[
                      {
                        icon: "📞",
                        label: "TOTAL",
                        value: "397",
                        detail: "208 unique",
                        tone: "normal",
                      },
                      {
                        icon: "📥",
                        label: "INCOMING",
                        value: "6",
                        detail: "5 unique",
                        tone: "normal",
                      },
                      {
                        icon: "📤",
                        label: "OUTGOING",
                        value: "360",
                        detail: "206 unique",
                        tone: "normal",
                      },
                      {
                        icon: "❌",
                        label: "MISSED",
                        value: "31",
                        detail: "18 unique",
                        tone: "warning",
                      },
                      {
                        icon: "🎧",
                        label: "TALK",
                        value: "6h 21m",
                        detail: "recorded",
                        tone: "normal",
                      },
                      {
                        icon: "⏱",
                        label: "AVG",
                        value: "1m 19s",
                        detail: "non-zero",
                        tone: "normal",
                      },
                      {
                        icon: "👥",
                        label: "ACTIVE",
                        value: "3",
                        detail: "callers",
                        tone: "normal",
                      },
                      {
                        icon: "💤",
                        label: "IDLE",
                        value: "17h 38m",
                        detail: "work − talk",
                        tone: "warning",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className={`relative min-h-[130px] rounded-2xl p-4 ${
                          stat.tone === "warning" ? "bg-orange-50" : "bg-slate-50 dark:bg-white/[0.04]"
                        }`}
                      >
                        {stat.label !== "TALK" &&
                          stat.label !== "AVG" &&
                          stat.label !== "ACTIVE" &&
                          (
                            <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                              <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                          )}

                        <p className="mb-3 flex items-center gap-1 text-[10px] font-extrabold text-slate-500 dark:text-muted-foreground">
                          <span>{stat.icon}</span>
                          {stat.label}
                        </p>

                        <p
                          className={`whitespace-nowrap text-xl font-extrabold tracking-tight sm:text-2xl ${
                            stat.tone === "warning"
                              ? "text-orange-500"
                              : "text-slate-900 dark:text-foreground"
                          }`}
                        >
                          {stat.value}
                        </p>

                        <p className="mt-2 text-[10px] text-slate-400 sm:text-xs">
                          {stat.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
             {/* Ending Feature Caller Dashboard */}
             
                            
              {/* Feature: HR & Team */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  {/* Section heading */}
                  <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                      HR &amp; Team
                    </p>

                    <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Attendance, leaves, tasks, salary —{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        all in one place
                      </span>
                    </h2>
                  </div>

                  {/* Attendance dashboard + feature list */}
                  <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                    {/* Attendance dashboard */}
                    <div className="min-w-0 rounded-2xl border border-slate-200 dark:border-border/70 bg-white dark:bg-white/[0.04] p-4 shadow-[0_16px_45px_rgba(15,23,42,0.07)] sm:p-5">
                      {/* Dashboard tabs */}
                      <div className="flex flex-wrap items-center gap-5 border-b border-slate-100 dark:border-border pb-2 text-xs font-semibold">
                        <span className="border-b-2 border-violet-600 pb-3 text-violet-600">
                          My attendance
                        </span>
                        <span className="pb-3 text-slate-500 dark:text-muted-foreground">Team report</span>
                        <span className="pb-3 text-slate-500 dark:text-muted-foreground">📍 Location trail</span>
                      </div>

                      {/* Check-in controls */}
                      <div className="flex flex-wrap gap-2 py-4">
                        <button
                          type="button"
                          className="rounded-xl bg-violet-600 px-4 py-3 text-xs font-bold text-white shadow-[0_0_0_6px_rgba(139,92,246,0.10)]"
                        >
                          🕒 Check in
                        </button>
                        <button
                          type="button"
                          className="rounded-xl bg-slate-100 dark:bg-muted px-4 py-3 text-xs font-bold text-slate-800 dark:text-foreground"
                        >
                          🕒 Check out
                        </button>
                      </div>

                      {/* Attendance metrics */}
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {[
                          { value: "7", label: "PRESENT" },
                          { value: "6.6h", label: "AVG HOURS" },
                          { value: "24", label: "ABSENT" },
                          { value: "2", label: "LEAVE BAL" },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="flex min-h-[82px] flex-col items-center justify-center rounded-xl bg-slate-50 dark:bg-white/[0.04] p-2"
                          >
                            <p className="text-xl font-extrabold text-slate-900 dark:text-foreground">
                              {stat.value}
                            </p>
                            <p className="mt-2 text-[9px] font-extrabold text-slate-500 dark:text-muted-foreground">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Attendance table */}
                      <div className="mt-5 overflow-x-auto">
                        <table className="w-full min-w-[420px] text-left text-xs">
                          <thead>
                            <tr className="border-b border-slate-100 dark:border-border text-[10px] font-extrabold text-slate-500 dark:text-muted-foreground">
                              <th className="pb-3 pr-3">DATE</th>
                              <th className="pb-3 pr-3">IN</th>
                              <th className="pb-3 pr-3">OUT</th>
                              <th className="pb-3">LOCATION</th>
                            </tr>
                          </thead>
                          <tbody className="text-slate-700 dark:text-foreground">
                            {[
                              ["2026-05-29", "06:16 PM", "—", "Vivek Vihar"],
                              ["2026-05-18", "12:30 PM", "—", "Vivek Vihar"],
                              ["2026-05-14", "04:04 PM", "06:01 PM", "Vivek Vihar"],
                            ].map((entry) => (
                              <tr key={entry[0]} className="border-b border-slate-100 dark:border-border">
                                <td className="py-3 pr-3">{entry[0]}</td>
                                <td className="py-3 pr-3">{entry[1]}</td>
                                <td className="py-3 pr-3">{entry[2]}</td>
                                <td className="whitespace-nowrap py-3 font-semibold text-rose-500">
                                  📍 {entry[3]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-4 rounded-xl bg-emerald-100/80 px-3 py-3 text-center text-xs font-bold text-emerald-700">
                        ☑️ GPS-stamped · device fingerprinted
                      </div>
                    </div>

                    {/* GPS attendance feature list */}
                    <div className="py-3 lg:pl-1">
                      <h3 className="mb-4 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                        GPS Attendance +{" "}
                        <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                          Team Matrix
                        </span>
                      </h3>

                      <ul className="space-y-3">
                        {[
                          "Mobile GPS check-in + device fingerprint",
                          "Team matrix: days present, hours, absent",
                          "Detailed log + location trail",
                          "Auto-link → salary calculation",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-slate-700 dark:text-foreground sm:text-base"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                              ✓
                            </span>
                            <span className="pt-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Four HR feature cards — second reference image */}
                  {/* <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {[
                      {
                        icon: "🏝️",
                        title: "Leave Management",
                        description: "Apply, approve, balance-track. Auto-deduct.",
                        gradient: "from-violet-500 to-cyan-400",
                      },
                      {
                        icon: "📋",
                        title: "Task Assignment",
                        description: "Deadlines, priorities, reminders.",
                        gradient: "from-rose-400 to-amber-400",
                      },
                      {
                        icon: "📝",
                        title: "Daily Submission",
                        description: "EOD report auto-collated to manager.",
                        gradient: "from-teal-400 to-cyan-400",
                      },
                      {
                        icon: "💰",
                        title: "Salary Generation",
                        description: "Auto-calc + PDF slip in one click.",
                        gradient: "from-violet-400 to-pink-500",
                      },
                    ].map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card p-6 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div
                          className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-xl`}
                        >
                          {feature.icon}
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-foreground">
                          {feature.title}
                        </h3>

                        <p className="text-base leading-6 text-slate-600 dark:text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div> */}
                </div>
              </section>
              {/* Ending Feature HR & Team */}

                            
              {/* Feature: AI Copilot — Ask CRM */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-400">
                      AI Copilot — Ask CRM
                    </p>

                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Don't read dashboards.{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Just ask.
                      </span>
                    </h2>
                  </div>

                  <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Phone chat mockup */}
                    <div className="relative flex justify-center">
                      <div className="absolute left-0 top-[-34px] rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg sm:left-8">
                        ▶ Auto Play
                      </div>

                      <div className="w-[338px] max-w-full overflow-hidden rounded-[42px] border-[8px] border-slate-950 bg-slate-950 shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
                        <div className="min-h-[585px] rounded-[30px] bg-[#f4f5fb]">
                          {/* Chat header */}
                          <div className="flex items-start justify-between bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 px-4 py-4 text-white">
                            <div className="flex gap-3">
                              <span className="text-xl">✨</span>
                              <div>
                                <p className="text-sm font-extrabold">Ask CRM</p>
                                <p className="mt-1 text-[10px] text-white/80">
                                  Powered by Gemini
                                </p>
                                <p className="mt-1 text-[10px] text-white/80">
                                  7 / 50 today
                                </p>
                              </div>
                            </div>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-sm">
                              ×
                            </span>
                          </div>

                          {/* Messages */}
                          <div className="space-y-2 px-3 py-3 text-[11px] leading-[1.6]">
                            <div className="max-w-[88%] rounded-xl rounded-bl-sm bg-white dark:bg-card px-3 py-3 text-slate-700 dark:text-foreground shadow-sm">
                              Hi Gopal! Ask me anything:
                              <br />• How many new leads today?
                              <br />• Top performer?
                            </div>

                            <div className="ml-auto max-w-[88%] rounded-xl rounded-br-sm bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-3 text-white">
                              Top performer this week?
                            </div>

                            <div className="inline-flex rounded-full bg-white dark:bg-card px-3 py-2 text-violet-400 shadow-sm">
                              • • •
                            </div>

                            <div className="max-w-[88%] rounded-xl rounded-bl-sm bg-white dark:bg-card px-3 py-3 text-slate-700 dark:text-foreground shadow-sm">
                              📊 <strong>Harsh</strong> leads with{" "}
                              <strong>184 calls · 4h 12m.</strong> Demos:{" "}
                              <strong>23.</strong>
                            </div>

                            {/* Suggested prompts */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {["⭐ Highlights", "⏰ Follow-ups", "🔥 Hot leads"].map(
                                (prompt) => (
                                  <span
                                    key={prompt}
                                    className="rounded-full border border-slate-200 dark:border-border bg-white dark:bg-card px-2.5 py-2 text-[10px] font-semibold text-violet-600"
                                  >
                                    {prompt}
                                  </span>
                                )
                              )}
                            </div>

                            {/* Input visual */}
                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-border bg-white dark:bg-card p-2.5">
                              <span className="flex-1 text-[10px] text-slate-400">
                                Type your question...
                              </span>
                              <span className="rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-2 text-[10px] font-bold text-white">
                                ✨ Send
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="max-w-xl">
                      <h3 className="mb-5 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
                        Plain-English answers,{" "}
                        <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                          CRM-deep insight
                        </span>
                      </h3>

                      <ul className="space-y-3">
                        {[
                          '"How many new leads today?"',
                          '"Which leads are out of TAT?"',
                          '"Employee-wise performance"',
                          '"Top performer this week?"',
                          "50 Q/day · Hindi-English",
                        ].map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-slate-700 dark:text-foreground sm:text-base"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                              ✓
                            </span>
                            <span className="pt-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              {/* Ending Feature AI Copilot — Ask CRM */}

        
              {/* Feature: Pipeline Builder */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  {/* Heading */}
                  <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      Pipeline Builder
                    </p>

                    <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Smart Pipeline Funnel to{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Forecast Your Business Growth
                      </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 dark:text-muted-foreground sm:text-base">
                      A visual funnel that shows where deals leak and helps forecast future revenue.
                    </p>
                  </div>

                  {/* Pipeline dashboard preview */}
                  <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                    <div className="grid min-h-[560px] lg:grid-cols-[185px_minmax(0,1fr)]">
                      {/* Sidebar */}
                      <aside className="hidden bg-[#10469f] p-4 text-white lg:block">
                        <div className="mb-8 flex items-center gap-2 text-sm font-bold">
                          <span>📊</span> Dashboard
                        </div>

                        <div className="space-y-6 text-[10px] font-bold tracking-wider text-white/90">
                          {[
                            "💼  SALES",
                            "📞  CALLS",
                            "📦  CATALOG",
                            "📁  REPORTS",
                            "💬  WORKSPACE",
                            "👥  HR & ME",
                            "▤  ACCOUNTS",
                            "⚙️  ADMIN",
                            "🛟  HELP & SUPPORT",
                          ].map((item) => (
                            <div key={item}>{item}</div>
                          ))}
                        </div>

                        <div className="mt-16 border-t border-white/20 pt-4 text-xs">
                          <p className="font-bold">Gopal</p>
                          <p className="mt-1 text-white/70">Admin</p>
                        </div>
                      </aside>

                      {/* Main dashboard */}
                      <div className="min-w-0 bg-[#f8faff] p-3 sm:p-5">
                        {/* Top navigation */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-border pb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400">☰</span>
                            <h3 className="text-sm font-extrabold text-slate-900 dark:text-foreground">
                              Pipeline
                            </h3>
                            <span className="text-xs text-slate-500 dark:text-muted-foreground">＋ New</span>
                            <span className="hidden text-xs text-amber-600 sm:inline">
                              ⚠ Overdue
                            </span>
                          </div>
                          <span className="rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-bold text-amber-800">
                            ✨ New features
                          </span>
                        </div>

                        {/* Date filters */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {[
                            "Today",
                            "Yesterday",
                            "Last 7 days",
                            "Last 30 days",
                            "This month",
                            "Last month",
                            "All time",
                          ].map((period) => (
                            <span
                              key={period}
                              className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                                period === "All time"
                                  ? "border-violet-600 bg-violet-600 text-white"
                                  : "border-slate-200 dark:border-border bg-white dark:bg-card text-slate-600 dark:text-muted-foreground"
                              }`}
                            >
                              {period}
                            </span>
                          ))}
                        </div>

                        {/* Filters */}
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-card p-3 text-[10px] text-slate-500 dark:text-muted-foreground">
                          <span>⚲ Filters</span>
                          <span>Status: Any status⌄</span>
                          <span>Source: Any source⌄</span>
                          <span>Owner: All users⌄</span>
                          <span>Product: Any product⌄</span>
                        </div>

                        {/* Summary metrics */}
                        <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-4">
                          {[
                            {
                              label: "total leads",
                              value: "1344",
                              detail: "in pipeline",
                            },
                            {
                              label: "open value",
                              value: "₹1.0L",
                              detail: "weighted ₹10.0K",
                            },
                            {
                              label: "win rate",
                              value: "5%",
                              detail: "won vs closed",
                            },
                            {
                              label: "avg cycle",
                              value: "5d",
                              detail: "lead to close",
                            },
                          ].map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-xl border border-blue-100 bg-blue-50/70 p-3"
                            >
                              <p className="text-[10px] text-slate-500 dark:text-muted-foreground">{stat.label}</p>
                              <p className="mt-1 text-xl font-extrabold text-slate-900 dark:text-foreground">
                                {stat.value}
                              </p>
                              <p className="mt-1 text-[9px] text-slate-500 dark:text-muted-foreground">
                                {stat.detail}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Funnel and stage counts */}
                        <div className="mt-5 grid items-center gap-5 md:grid-cols-[1.15fr_0.85fr]">
                          <div className="flex flex-col items-center gap-0">
                            {[
                              {
                                label: "New lead",
                                count: "1074 leads · 100% of total",
                                width: "100%",
                                color: "bg-blue-200",
                              },
                              {
                                label: "Contacted",
                                count: "155 leads · 14% of total",
                                width: "70%",
                                color: "bg-blue-300",
                              },
                              {
                                label: "Qualified",
                                count: "62 leads · 6% of total",
                                width: "55%",
                                color: "bg-blue-400",
                              },
                              {
                                label: "Negotiation",
                                count: "31 leads · 3% of total",
                                width: "48%",
                                color: "bg-blue-500",
                              },
                              {
                                label: "Proposal sent",
                                count: "22 leads · 2% of total",
                                width: "43%",
                                color: "bg-blue-700",
                              },
                            ].map((stage) => (
                              <div
                                key={stage.label}
                                style={{ width: stage.width }}
                                className={`${stage.color} flex min-h-[52px] flex-col items-center justify-center border-b border-white/50 px-2 py-2 text-center text-slate-900 dark:text-foreground`}
                              >
                                <p className="text-xs font-extrabold">{stage.label}</p>
                                <p className="mt-0.5 text-[9px]">{stage.count}</p>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-6 px-1 py-3">
                            {[
                              { label: "1074 leads", detail: "₹50.0K · 14% advance" },
                              { label: "155 leads", detail: "₹50.0K · 40% advance" },
                              { label: "62 leads", detail: "₹0 · 50% advance" },
                              { label: "31 leads", detail: "₹0 · 71% advance" },
                              { label: "22 leads", detail: "₹0 · final stage" },
                            ].map((stage) => (
                              <div key={stage.label} className="flex items-center gap-3">
                                <div className="h-px w-8 border-t border-dashed border-blue-400 sm:w-12" />
                                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                                <div>
                                  <p className="text-xs font-extrabold text-slate-800 dark:text-foreground">
                                    {stage.label}
                                  </p>
                                  <p className="mt-0.5 text-[9px] text-slate-500 dark:text-muted-foreground">
                                    {stage.detail}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Won and lost totals */}
                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                          <div className="flex items-center justify-between rounded-lg bg-emerald-100 p-3 text-emerald-900">
                            <div>
                              <p className="text-xs font-extrabold">✓ Won</p>
                              <p className="mt-1 text-[9px]">5% win rate</p>
                            </div>
                            <p className="text-lg font-extrabold">8</p>
                          </div>

                          <div className="flex items-center justify-between rounded-lg bg-rose-100 p-3 text-rose-900">
                            <div>
                              <p className="text-xs font-extrabold">× Lost</p>
                              <p className="mt-1 text-[9px]">95% of closed</p>
                            </div>
                            <p className="text-lg font-extrabold">167</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
               {/* Ending Feature Pipeline Builder */}


              {/* Feature: Smart Caller-ID */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
                  {/* Incoming-call phone preview */}
                  <div className="relative mx-auto w-full max-w-[400px]">
                    <div className="relative min-h-[650px] overflow-hidden rounded-[22px] bg-gradient-to-b from-[#39446c] via-[#30436d] to-[#1e3d70] shadow-[0_25px_70px_rgba(15,23,42,0.15)]">
                      {/* Dimmed phone screen */}
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8">
                        <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600/80 text-3xl text-white">
                          ☎
                        </div>
                        <p className="mb-14 text-[10px] text-white/50">Phone</p>

                        <div className="flex w-full items-center justify-around px-6">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/60 text-xl text-white">
                            ●
                          </span>
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/70 text-xl text-white">
                            G
                          </span>
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-xl text-white">
                            ⠿
                          </span>
                        </div>
                      </div>

                      {/* Incoming-call popup */}
                      <div className="absolute left-3 right-3 top-[43%] -translate-y-1/2 rounded-2xl bg-white dark:bg-card p-4 shadow-2xl sm:left-3 sm:right-3">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="text-[11px] font-medium text-slate-600 dark:text-muted-foreground">
                            ☎ Incoming call
                          </p>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-muted text-xl text-slate-600 dark:text-muted-foreground">
                            ×
                          </span>
                        </div>

                        <p className="text-base font-extrabold text-slate-900 dark:text-foreground">
                          +918285039708
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500 dark:text-muted-foreground">
                          ☎ +918285039708
                        </p>

                        <span className="mt-2 inline-flex rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-700">
                          🏷️ New
                        </span>

                        <div className="mt-3 break-words text-[10px] leading-5 text-slate-600 dark:text-muted-foreground">
                          📝 {"{"}"remark": "☎ Inbound Call · auto-created on call ring","created_at":"2026-05-31T03:18:41.119Z"{"}"}
                        </div>

                        <button
                          type="button"
                          className="mt-3 w-full rounded-xl bg-indigo-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-indigo-700"
                        >
                          Open in CRM
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Feature description */}
                  <div>
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                        Smart Caller-ID
                      </p>
                      <span className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-1 text-[10px] font-extrabold text-white">
                        NEW
                      </span>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl lg:text-[36px]">
                      Instantly View Customer History{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        During Incoming Calls
                      </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-500 dark:text-muted-foreground sm:text-base">
                      The moment your phone rings, Smart CRM shows the caller&apos;s full
                      lead history, stage and last remark — no searching needed.
                    </p>

                    <div className="mt-8 space-y-3">
                      {[
                        "Caller name, stage & last remark visible on ring",
                        "Full history — calls, notes, WhatsApp — in one popup",
                        "Inbound call auto-creates a new lead if number is unknown",
                        'One-tap "Open in CRM" to update stage mid-call',
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl bg-grey/60 px-4 py-4 sm:px-6"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                            ✓
                          </span>
                          <p className="pt-0.5 text-sm font-semibold leading-6 text-slate-700 dark:text-foreground sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
               {/* Ending Feature Smart Caller-ID */}

                            
              {/* Feature: Lead Management */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                  {/* Left: Feature description */}
                  <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      Lead Management
                    </p>

                    <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      One Smart Lead Page for{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Complete Lead Management
                      </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-muted-foreground">
                      Manage every lead from a single screen. View customer details,
                      communication history, follow-up status, source information, notes
                      and assigned executive without switching between multiple pages.
                    </p>

                    <div className="mt-8 space-y-3">
                      {[
                        "Complete lead profile in one place",
                        "Call, WhatsApp, Notes & Follow-up actions",
                        "Track lead source and ownership",
                        "Faster lead response and conversions",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-grey/60 px-5 py-4"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-sm font-bold text-white">
                            ✓
                          </span>
                          <p className="text-sm font-semibold text-slate-700 dark:text-foreground sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Mobile-style lead management preview */}
                  <div className="relative mx-auto w-full max-w-[360px]">
                    <div className="overflow-hidden rounded-[28px] border border-slate-200 dark:border-border bg-white dark:bg-card shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                      {/* App header */}
                      <div className="flex items-center justify-between bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 px-4 py-3 text-white">
                        <div className="flex items-center gap-2">
                          <span>☰</span>
                          <span className="text-sm font-extrabold">Leads</span>
                        </div>
                        <div className="flex gap-2 text-xs">
                          <span className="rounded-full bg-white/20 px-2 py-1">✨</span>
                          <span className="rounded-full bg-white/20 px-2 py-1">⚠ 69</span>
                          <span className="rounded-full bg-white/20 px-2 py-1">🔔</span>
                        </div>
                      </div>

                      {/* Lead cards */}
                      <div className="space-y-2 bg-slate-50 dark:bg-muted p-2.5">
                        {[
                          {
                            initials: "RK",
                            name: "Rinkesh kumar",
                            source: "Meta · +919589575077",
                            status: "NEW",
                            color: "bg-emerald-600",
                            note: "Auto Lead Capture · Instant Lead Assignment",
                          },
                          {
                            initials: "AR",
                            name: "Achal Rajput",
                            source: "WhatsApp · +919990480965",
                            status: "FOLLOW UP",
                            color: "bg-orange-500",
                            note: "WhatsApp details share · 3 user plan demo done",
                          },
                          {
                            initials: "+",
                            name: "+918459145906",
                            source: "Inbound Call · +918459145906",
                            status: "NOT INTERESTED",
                            color: "bg-violet-600",
                            note: "Jewellery shop se call",
                          },
                          {
                            initials: "SB",
                            name: "Shraddha Baphna Zobalia",
                            source: "Meta · +919370774002",
                            status: "FOLLOW UP",
                            color: "bg-violet-600",
                            note: "Busy now · WhatsApp details",
                          },
                        ].map((lead) => (
                          <div
                            key={lead.name}
                            className="rounded-xl border border-slate-200 dark:border-border bg-white dark:bg-card p-2.5 shadow-sm"
                          >
                            <div className="flex items-start gap-2">
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${lead.color} text-[10px] font-extrabold text-white`}
                              >
                                {lead.initials}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-1">
                                  <p className="truncate text-[11px] font-extrabold text-slate-900 dark:text-foreground">
                                    {lead.name}
                                  </p>
                                  <span className="shrink-0 rounded-full bg-violet-100 px-2 py-1 text-[8px] font-extrabold text-violet-700">
                                    {lead.status}
                                  </span>
                                </div>

                                <p className="mt-1 truncate text-[9px] text-slate-600 dark:text-muted-foreground">
                                  🏷️ {lead.source}
                                </p>
                                <p className="mt-1 text-[9px] text-slate-500 dark:text-muted-foreground">
                                  👤 Neetu
                                </p>
                              </div>
                            </div>

                            <div className="mt-2 rounded-md bg-amber-100 px-2 py-1.5 text-[9px] text-amber-800">
                              📝 {lead.note}
                            </div>

                            {/* Action buttons */}
                            <div className="mt-2 grid grid-cols-5 gap-1">
                              {[
                                { icon: "☎", style: "bg-indigo-600 text-white" },
                                { icon: "WA", style: "bg-emerald-100 text-emerald-700" },
                                { icon: "◉", style: "bg-emerald-700 text-white" },
                                { icon: "✎", style: "bg-amber-50 text-amber-700" },
                                { icon: "✐", style: "bg-violet-50 text-violet-700" },
                              ].map((action, index) => (
                                <div
                                  key={`${lead.name}-${index}`}
                                  className={`flex h-7 items-center justify-center rounded-md text-[9px] font-bold ${action.style}`}
                                >
                                  {action.icon}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom navigation */}
                      <div className="grid grid-cols-5 border-t border-slate-200 dark:border-border bg-white dark:bg-card px-1 py-3 text-center text-[9px] font-semibold text-slate-500 dark:text-muted-foreground">
                        <span>📊<br />Dashboard</span>
                        <span className="text-violet-600">👥<br />Leads</span>
                        <span>🔔<br />Follow-ups</span>
                        <span>☎<br />Dialer</span>
                        <span>•••<br />More</span>
                      </div>
                    </div>

                    {/* Floating action buttons */}
                    <div className="absolute -right-3 bottom-24 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xl text-white shadow-lg">
                      +
                    </div>
                    <div className="absolute -right-1 bottom-40 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-white shadow-lg">
                      ✨
                    </div>
                  </div>
                </div>
              </section>
              {/* Ending Feature Lead Management */}

                            
              {/* Feature: Smart Follow-Up Reminders */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20">
                  {/* Mobile notification preview */}
                  <div className="relative mx-auto w-full max-w-[360px]">
                    <div className="relative min-h-[650px] overflow-hidden rounded-[20px] bg-gradient-to-b from-[#cdd9f4] via-[#dbe8fb] to-[#a9d0f2] p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-1 pt-2 text-[10px] font-semibold text-slate-700 dark:text-foreground">
                        <span>09:21</span>
                        <span>⌁ Wi-Fi · 70% ▰</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-800 dark:text-foreground">
                        <span>Sun, 31 May</span>
                        <span>⚙</span>
                      </div>

                      {/* Quick settings */}
                      <div className="mt-5 grid grid-cols-6 gap-2">
                        {[
                          { icon: "◉", active: true },
                          { icon: "🔊", active: true },
                          { icon: "ᛒ", active: false },
                          { icon: "▣", active: false },
                          { icon: "▤", active: false },
                          { icon: "✈", active: false },
                        ].map((item, index) => (
                          <div key={index} className="flex justify-center">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                                item.active
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-400/60 text-white"
                              }`}
                            >
                              {item.icon}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <div className="rounded-full bg-slate-400/20 px-2 py-3 text-center text-[9px] font-semibold text-slate-700 dark:text-foreground">
                          Device control
                        </div>
                        <div className="rounded-full bg-slate-400/20 px-2 py-3 text-center text-[9px] font-semibold text-slate-700 dark:text-foreground">
                          Media output
                        </div>
                      </div>

                      {/* Notification cards */}
                      <div className="mt-5 space-y-1.5">
                        <div className="overflow-hidden rounded-xl bg-white/95 dark:bg-card shadow-sm">
                          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-border p-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 dark:border-border text-xs text-slate-500 dark:text-muted-foreground">
                              ✳
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-[10px] font-semibold text-slate-700 dark:text-foreground">
                                Lead CRM
                              </p>
                              <p className="mt-1 truncate text-[9px] text-slate-600 dark:text-muted-foreground">
                                ⏰ Follow-up due Sunil Kr Singh · +919336728837
                              </p>
                              <p className="mt-1 truncate text-[9px] text-slate-600 dark:text-muted-foreground">
                                ⏰ Follow-up due Jagmohan · +919315305834
                              </p>
                            </div>
                            <span className="text-[9px] text-slate-400">23⌄</span>
                          </div>
                        </div>

                        <div className="rounded-xl bg-white/95 dark:bg-card p-3 shadow-sm">
                          <div className="flex items-start gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-50 dark:bg-muted text-[10px] text-white">
                              M
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-[10px] font-bold text-slate-700 dark:text-foreground">
                                gopalserve
                                <span className="ml-1 font-normal text-slate-400">
                                  sales@smartcrmsolution.com · 09:07
                                </span>
                              </p>
                              <p className="mt-1 truncate text-[9px] text-slate-600 dark:text-muted-foreground">
                                [CRM Demo Audit] Morning digest — yesterday evening...
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl bg-white/95 dark:bg-card p-3 shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 dark:border-border text-xs text-slate-500 dark:text-muted-foreground">
                              ✳
                            </span>
                            <div>
                              <p className="text-[10px] font-bold text-slate-700 dark:text-foreground">
                                SmartCRM
                              </p>
                              <p className="mt-1 text-[9px] text-slate-600 dark:text-muted-foreground">
                                Call tracking is enabled
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl bg-white/95 dark:bg-card p-3 shadow-sm">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 dark:bg-muted text-xs text-white">
                              ⠿
                            </span>
                            <div>
                              <p className="text-[10px] font-bold text-slate-700 dark:text-foreground">
                                System configuration update
                              </p>
                              <p className="mt-1 text-[9px] text-slate-600 dark:text-muted-foreground">
                                Tap here to install the latest updates.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Notification controls */}
                      <div className="mt-3 flex justify-end gap-2 text-[9px] text-slate-600 dark:text-muted-foreground">
                        <span className="rounded-full bg-slate-400/20 px-3 py-1.5">
                          Notification settings
                        </span>
                        <span className="rounded-full bg-slate-400/20 px-3 py-1.5">
                          Clear
                        </span>
                      </div>

                      {/* Bottom phone navigation */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-16 text-sm text-slate-500 dark:text-muted-foreground">
                        <span>Ⅲ</span>
                        <span>○</span>
                        <span>‹</span>
                      </div>
                    </div>
                  </div>

                  {/* Follow-up feature details */}
                  <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      Follow-Up Engine
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Smart Follow-Up Reminders —{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Never Miss a Lead
                      </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-500 dark:text-muted-foreground">
                      Automatically receive follow-up reminders on mobile and desktop.
                      Stay on top of every customer conversation with timely alerts,
                      overdue reminders, and daily follow-up notifications.
                    </p>

                    <div className="mt-8 space-y-3">
                      {[
                        "Mobile follow-up notifications",
                        "Overdue lead alerts",
                        "Daily reminder dashboard",
                        "Never miss a sales opportunity",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-grey/60 px-5 py-4"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-sm font-bold text-white">
                            ✓
                          </span>
                          <p className="text-sm font-semibold text-slate-700 dark:text-foreground sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* Ending Feature Smart Follow-Up Reminders */}

                            
              {/* Feature: Daily Calling Reports */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
                  {/* Left: Description */}
                  <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      5 · Daily Reports
                    </p>

                    <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Smart Daily Calling Reports with{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Talk Time &amp; Idle Time Tracking
                      </span>
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-muted-foreground">
                      Monitor team productivity with detailed calling reports. Track
                      incoming, outgoing, missed calls, talk time, idle time, active users,
                      and performance trends from one centralized dashboard.
                    </p>

                    <div className="mt-8 space-y-3">
                      {[
                        "Real-time call activity dashboard",
                        "Talk time and idle time tracking",
                        "Incoming, outgoing and missed call reports",
                        "Measure team productivity instantly",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-grey/60 px-5 py-4"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                            ✓
                          </span>
                          <p className="text-sm font-semibold text-slate-700 dark:text-foreground sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Calling reports dashboard preview */}
                  <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-white/[0.04] p-3 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-4">
                    {/* Dashboard navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-border pb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">☰</span>
                        <span className="text-xs font-extrabold text-slate-800 dark:text-foreground">
                          Call activity
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[9px] text-slate-500 dark:text-muted-foreground">
                        <span>✨ New</span>
                        <span>⚠ Overdue</span>
                        <span>📅 Due today</span>
                        <span>🔔 Help</span>
                      </div>
                    </div>

                    {/* Date range filters */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {[
                        "Today",
                        "Yesterday",
                        "Last 7 days",
                        "Last 30 days",
                        "This month",
                        "Last month",
                        "All time",
                      ].map((period) => (
                        <span
                          key={period}
                          className={`rounded-full border px-2 py-1 text-[9px] font-semibold ${
                            period === "Last 7 days"
                              ? "border-violet-600 bg-violet-600 text-white"
                              : "border-slate-200 dark:border-border bg-white dark:bg-white/[0.04] text-slate-600 dark:text-muted-foreground"
                          }`}
                        >
                          {period}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-white/[0.04] p-2.5 text-[9px] text-slate-500 dark:text-muted-foreground">
                      <span>📅 05/26/2026</span>
                      <span>to</span>
                      <span>06/01/2026</span>
                      <span className="rounded-md bg-violet-600 px-3 py-1.5 font-bold text-white">
                        Apply
                      </span>
                      <span className="rounded-md border border-slate-200 dark:border-border px-2 py-1.5">
                        CSV
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] text-slate-500 dark:text-muted-foreground">
                      <span>🤖 Bulk AI Audit</span>
                      <span className="rounded-md border border-slate-200 dark:border-border bg-white dark:bg-white/[0.04] px-2 py-1.5">
                        All unaudited recordings
                      </span>
                      <span className="rounded-md border border-slate-200 dark:border-border bg-white dark:bg-card px-2 py-1.5">
                        All reps
                      </span>
                      <span className="rounded-md bg-violet-600 px-3 py-1.5 font-bold text-white">
                        Run audit
                      </span>
                    </div>

                    {/* Call statistics */}
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
                      {[
                        { label: "☎ TOTAL CALLS", value: "1011", detail: "957 unique numbers" },
                        { label: "📥 INCOMING", value: "46", detail: "27 unique callers" },
                        { label: "📤 OUTGOING", value: "845", detail: "351 unique dialled" },
                        { label: "✕ MISSED", value: "120", detail: "48 unique missed" },
                        { label: "🎧 TOTAL TALK", value: "12h 23m", detail: "recorded duration" },
                        { label: "◷ AVG CALL", value: "1m 18s", detail: "mean non-zero calls" },
                        { label: "♟ ACTIVE USERS", value: "4", detail: "callers" },
                        { label: "💤 IDLE TIME", value: "21h 36m", detail: "work hrs − talk time" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="min-w-0 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-card p-2.5"
                        >
                          <p className="truncate text-[8px] font-bold text-slate-500 dark:text-muted-foreground">
                            {stat.label}
                          </p>
                          <p className="mt-1 text-base font-extrabold text-slate-900 dark:text-foreground">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-[8px] text-slate-500 dark:text-muted-foreground">{stat.detail}</p>
                        </div>
                      ))}
                    </div>

                    {/* Daily call activity chart */}
                    <div className="mt-3 rounded-lg border border-slate-100 dark:border-border bg-white dark:bg-card p-3">
                      <p className="text-[10px] font-bold text-slate-700 dark:text-foreground">
                        Daily call activity
                      </p>

                      <div className="relative mt-4 flex h-36 items-end justify-around border-b border-l border-slate-200 dark:border-border px-3">
                        {[30, 48, 38, 64, 45, 74, 55, 90, 60, 78, 50, 96].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex h-full w-4 flex-col justify-end gap-0.5 sm:w-6"
                            >
                              <div
                                className="w-full rounded-t-sm bg-red-400"
                                style={{ height: `${Math.max(3, height * 0.08)}%` }}
                              />
                              <div
                                className="w-full bg-emerald-500"
                                style={{ height: `${height * 0.45}%` }}
                              />
                              <div
                                className="w-full rounded-t-sm bg-blue-500"
                                style={{ height: `${height * 0.35}%` }}
                              />
                            </div>
                          )
                        )}

                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                          {[0, 1, 2, 3].map((line) => (
                            <div
                              key={line}
                              className="w-full border-t border-dashed border-slate-100 dark:border-border"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap justify-center gap-4 text-[9px] text-slate-500 dark:text-muted-foreground">
                        <span><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-blue-500" />Incoming</span>
                        <span><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-emerald-500" />Outgoing</span>
                        <span><span className="mr-1 inline-block h-2 w-2 rounded-sm bg-red-400" />Missed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
               {/* Ending Feature Daily Calling Reports */}

                            
              {/* Feature: WhatsApp Analytics */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
                  {/* Left: WhatsApp analytics dashboard */}
                  <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <div className="border-b border-slate-100 dark:border-border bg-white dark:bg-card px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-bold text-slate-800 dark:text-foreground">
                          WhatsApp report
                        </span>
                        <span className="text-xs text-slate-500 dark:text-muted-foreground">📅 Report overview</span>
                      </div>
                    </div>

                    <div className="space-y-4 p-4">
                      {/* Date filters */}
                      <div className="space-y-2 text-xs text-slate-500 dark:text-muted-foreground">
                        <div className="rounded-md border border-slate-200 dark:border-border px-3 py-2">
                          05/26/2026
                        </div>
                        <div className="rounded-md border border-slate-200 dark:border-border px-3 py-2">
                          06/01/2026
                        </div>
                        <button
                          type="button"
                          className="rounded-md bg-violet-600 px-4 py-2 font-semibold text-white"
                        >
                          Apply
                        </button>
                      </div>

                      {/* Analytics metrics */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
                        {[
                          { label: "📥 Inbound", value: "355", color: "text-blue-600" },
                          { label: "📤 Outbound", value: "447", color: "text-blue-600" },
                          { label: "✓ Delivered", value: "88", color: "text-emerald-600" },
                          { label: "◉ Read", value: "281", color: "text-blue-600" },
                          { label: "⚠ Failed", value: "62", color: "text-red-500" },
                          { label: "👥 Contacts", value: "189", color: "text-slate-700 dark:text-foreground" },
                          { label: "Delivered %", value: "20%", color: "text-emerald-600" },
                          { label: "Read %", value: "63%", color: "text-blue-600" },
                        ].map((metric) => (
                          <div key={metric.label}>
                            <p className="text-xs font-semibold text-slate-500 dark:text-muted-foreground">
                              {metric.label}
                            </p>
                            <p className={`mt-1 text-lg font-extrabold ${metric.color}`}>
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Delivery breakdown chart */}
                      <div className="rounded-xl border border-slate-100 dark:border-border bg-white dark:bg-card p-4">
                        <p className="text-sm font-bold text-slate-700 dark:text-foreground">
                          Delivery breakdown
                        </p>

                        <div className="flex flex-col items-center gap-5 py-5 sm:flex-row sm:justify-around">
                          <div className="relative h-36 w-36 shrink-0 rounded-full"
                            style={{
                              background:
                                "conic-gradient(#3b82f6 0% 72%, #16a34a 72% 77%, #94a3b8 77% 82%, #dc2626 82% 100%)",
                            }}
                          >
                            <div className="absolute inset-[28%] flex items-center justify-center rounded-full bg-white dark:bg-card">
                              <span className="text-xs font-semibold text-slate-500 dark:text-muted-foreground">
                                Messages
                              </span>
                            </div>
                          </div>

                          <div className="space-y-3 text-xs text-slate-600 dark:text-muted-foreground">
                            {[
                              { label: "Read", value: "281", color: "bg-blue-500" },
                              { label: "Delivered", value: "88", color: "bg-green-600" },
                              { label: "Sent (not delivered)", value: "16", color: "bg-slate-400" },
                              { label: "Failed", value: "62", color: "bg-red-600" },
                            ].map((item) => (
                              <div key={item.label} className="flex items-center gap-2">
                                <span className={`h-2.5 w-2.5 rounded-sm ${item.color}`} />
                                <span>{item.label}</span>
                                <span className="font-semibold text-slate-800 dark:text-foreground">
                                  {item.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Description and benefits */}
                  <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      WhatsApp Analytics
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
                      Smart WhatsApp Analytics to{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Track What&apos;s Working
                      </span>
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-500 dark:text-muted-foreground">
                      Measure WhatsApp campaign performance with detailed delivery, read,
                      response and engagement analytics. Understand which messages drive
                      customer actions and optimize campaigns using real-time insights.
                    </p>

                    <div className="mt-8 space-y-3">
                      {[
                        "Track delivered and read messages",
                        "Monitor failed WhatsApp campaigns",
                        "Analyze customer engagement rates",
                        "Improve campaign performance with insights",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-grey/60 px-5 py-4"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                            ✓
                          </span>
                          <p className="text-sm font-semibold text-slate-700 dark:text-foreground sm:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* Ending Feature WhatsApp Analytics */}


                            
              {/* Feature: Accounts & GST */}
              <section className="relative overflow-hidden bg-slate-50 dark:bg-[hsl(233,53%,9%)] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto mb-12 max-w-4xl text-center">
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-400">
                      Accounts &amp; GST
                    </p>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-4xl lg:text-4xl">
                      GST invoicing, GSTR-1 &amp; quotes —{" "}
                      <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        inside the CRM
                      </span>
                    </h2>
                  </div>

                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Invoice preview */}
                    <div className="min-w-0 rounded-2xl border border-slate-200 dark:border-border/80 bg-white dark:bg-card p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-extrabold text-violet-600">
                            Smart CRM Solution
                          </h3>
                          <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                            GSTIN 07AABCS1234C1Z5
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-base font-extrabold text-slate-900 dark:text-foreground">
                            TAX INVOICE
                          </p>
                          <p className="mt-1 text-xs text-slate-500 dark:text-muted-foreground">
                            INV/2026/0142
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 border-t-2 border-violet-500" />

                      <div className="mt-3 space-y-0 text-sm text-slate-700 dark:text-foreground">
                        {[
                          { name: "SmartCRM Pro · 5 users", qty: "1 × 60,000", amount: "₹60,000" },
                          { name: "WhatsApp AI Bot", qty: "1 × 12,000", amount: "₹12,000" },
                          { name: "Setup & Training", qty: "1 × 5,000", amount: "₹5,000" },
                        ].map((item) => (
                          <div
                            key={item.name}
                            className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b border-slate-100 dark:border-border py-3"
                          >
                            <span className="min-w-0">{item.name}</span>
                            <span className="whitespace-nowrap">{item.qty}</span>
                            <span className="whitespace-nowrap text-right font-medium">
                              {item.amount}
                            </span>
                          </div>
                        ))}

                        <div className="flex justify-between gap-4 py-3 text-slate-500 dark:text-muted-foreground">
                          <span>CGST + SGST</span>
                          <span className="whitespace-nowrap">₹13,860</span>
                        </div>
                      </div>

                      <div className="border-t-2 border-violet-500 pt-3">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xl font-extrabold text-slate-900 dark:text-foreground">
                            Total
                          </span>
                          <span className="text-xl font-extrabold text-slate-900 dark:text-foreground">
                            ₹90,860
                          </span>
                        </div>
                        <p className="mt-3 text-right text-xs text-slate-500 dark:text-muted-foreground">
                          HSN 998313 · Filed in GSTR-1
                        </p>
                      </div>
                    </div>

                    {/* Right: Features */}
                    <div>
                      <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-foreground sm:text-xl">
                        Quotation → Invoice →{" "}
                        <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                          GSTR-1, in 3 clicks
                        </span>
                      </h3>

                      <div className="mt-5 space-y-3">
                        {[
                          "Quotation with line items & discounts",
                          "GST invoice (CGST/SGST/IGST) auto-HSN",
                          "GSTR-1 export — JSON for the portal",
                          "Payment capture: cash, UPI, bank",
                          "Customer ledger & ageing report",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-lg font-bold text-white">
                              ✓
                            </span>
                            <p className="text-sm leading-6 text-slate-700 dark:text-foreground sm:text-base">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Ending Feature Accounts & GST */}


            
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-12 text-center shadow-[0_24px_60px_rgba(99,102,241,0.20)] sm:px-12 sm:py-14">
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full bg-white/10 sm:-right-8 sm:-top-24 sm:h-80 sm:w-80"
          />

          <div className="feature-reveal relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-5">
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
              Ready to run your{" "}
              <span className="underline decoration-white/80 decoration-2 underline-offset-4">
                whole sales operation
              </span>{" "}
              on one screen?
            </h2>

            {/* <p className="text-base font-medium text-white/95 sm:text-xl">
              <span aria-hidden="true">📞</span>{" "}
              Call us at{" "}
              <a
                href="tel:+919820145892"
                className="font-bold underline decoration-white/80 underline-offset-4 transition-opacity hover:opacity-80"
              >
                +919820145892
              </a>
            </p> */}

            <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-[60px] w-full rounded-2xl bg-white dark:bg-card px-8 text-base font-bold text-white-600 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/90 hover:text-violet-700 sm:w-auto"
              >
                <a href="tel:+919711298017">
                  <span aria-hidden="true" className="mr-2">📞</span>
                  +919711298017
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[60px] w-full rounded-2xl border-2 border-white/70 bg-transparent px-8 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white sm:w-auto"
              >
                <Link href="/dashboard">
                  Book a Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      <div className="border-t border-border">
        <RichFooter />
      </div>
    </main>
  );
}

