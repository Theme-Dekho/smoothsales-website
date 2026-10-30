// export interface LiveFeedEvent {
//   time: string;
//   text: string;
//   sub: string;
//   tone: "primary" | "success" | "warning" | "destructive" | "neutral" | string;
// }

// export interface MarketingLeak {
//   id: string;
//   tabLabel: string;
//   leakLabel: string;
//   headline: string;
//   description: string;
//   fixItems: string[];
//   impactStat: string;
//   impactLabel: string;
//   liveFeedTitle: string;
//   liveFeedEvents: LiveFeedEvent[];
// }

// export const MARKETING_LEAKS: MarketingLeak[] = [
//   {
//     id: "scattered-leads",
//     tabLabel: "Lead capture",
//     leakLabel: "Leak 01",
//     headline: "Leads scatter across five different channels.",
//     description:
//       "A WhatsApp enquiry, a field partner's walk-in, an affiliate referral, and a Meta ad lead all land in different places — by the time anyone notices, the competitor already called back.",
//     fixItems: [
//       "Every channel feeds one unified lead record",
//       "Rule-based routing assigns the right rep in under 2 seconds",
//       "Partner and referral attribution locked automatically for 30 days",
//     ],
//     impactStat: "2s",
//     impactLabel: "average lead assignment time",
//     liveFeedTitle: "LEAD CAPTURE · LIVE FEED",
//     liveFeedEvents: [
//       { time: "10:02 AM", text: "Auto-assigned to Priya Nair", sub: "Based on territory + availability", tone: "primary" },
//       { time: "10:03 AM", text: "First call connected — 52s", sub: "Round Robin, Jaipur Team", tone: "success" },
//       { time: "10:05 AM", text: "New lead from IndiaMART", sub: "Kailash Bisht · 3BHK Interior", tone: "warning" },
//       { time: "10:06 AM", text: "Auto-assigned to Karan Mehta", sub: "Weighted Round Robin", tone: "primary" },
//     ],
//   },
//   {
//     id: "commission-confusion",
//     tabLabel: "Partner attribution",
//     leakLabel: "Leak 02",
//     headline: "Brokers and affiliates argue over who brought the deal.",
//     description:
//       "Spreadsheets lose track of first touch, partner disputes delay closings, and finance spends 4 days every month recalculating tiered commissions and TDS deductions by hand.",
//     fixItems: [
//       "30-day cookie and phone lock guarantees first-touch attribution",
//       "Automated 3-tier commission split calculated the second a token is paid",
//       "Broker self-serve portal with real-time payout tracking and GST invoice uploads",
//     ],
//     impactStat: "100%",
//     impactLabel: "dispute-free commission payouts",
//     liveFeedTitle: "PARTNER LEDGER · LIVE FEED",
//     liveFeedEvents: [
//       { time: "10:11 AM", text: "Token paid: ₹50,000 via Razorpay", sub: "Sobha Dream Acres · Deal #SS-891", tone: "success" },
//       { time: "10:11 AM", text: "Commission credited: ₹18,500", sub: "Channel Partner: Apex Realty Solutions", tone: "primary" },
//       { time: "10:12 AM", text: "TDS (5%) deducted automatically", sub: "Section 194H ledger entry verified", tone: "neutral" },
//       { time: "10:14 AM", text: "Payout alert sent on WhatsApp", sub: "Delivered to Partner Admin (Vikram Seth)", tone: "success" },
//     ],
//   },
//   {
//     id: "forgotten-followups",
//     tabLabel: "Follow-up SLA",
//     leakLabel: "Leak 03",
//     headline: "High-intent buyers go cold because reps forget the 24h follow-up.",
//     description:
//       "Sales reps take notes in WhatsApp personal chats and diaries. When someone takes a sick day or gets overwhelmed, leads slip past the critical 48-hour decision window without a whisper.",
//     fixItems: [
//       "Sub-60s automated WhatsApp greeting with dynamic catalog links",
//       "SLA breach warnings auto-escalate stalled leads to squad managers",
//       "1-click WhatsApp web dialer logs call duration and outcome immediately",
//     ],
//     impactStat: "< 60s",
//     impactLabel: "first-contact response time",
//     liveFeedTitle: "FOLLOW-UP CADENCE · LIVE FEED",
//     liveFeedEvents: [
//       { time: "10:20 AM", text: "SLA alert: 15m without response", sub: "Lead: Rohan Verma · ₹45L Budget", tone: "warning" },
//       { time: "10:21 AM", text: "Escalated to Manager: Amit Sharma", sub: "Auto-reassigned to active rep Ananya", tone: "destructive" },
//       { time: "10:22 AM", text: "WhatsApp template sent + read", sub: "Brochure PDF opened via tracking link", tone: "success" },
//       { time: "10:24 AM", text: "Site visit booked for Saturday", sub: "Calendar invite synced to buyer WhatsApp", tone: "primary" },
//     ],
//   },
//   {
//     id: "manager-blindspots",
//     tabLabel: "Manager visibility",
//     leakLabel: "Leak 04",
//     headline: "Managers have zero visibility into distributed field reps.",
//     description:
//       "Daily status calls waste 45 minutes asking 'kya hua lead ka?'. Leadership only discovers a branch missed its monthly target on the 29th when it's too late to intervene.",
//     fixItems: [
//       "Live rep activity timeline tracks calls, site visits, and quotes real-time",
//       "Branch vs. branch revenue pacing gauges month-to-date target vs. actual",
//       "AI conversion bottleneck alerts flag stages where deals stall the longest",
//     ],
//     impactStat: "3.4x",
//     impactLabel: "higher pipeline velocity per rep",
//     liveFeedTitle: "FIELD ACTIVITY · LIVE FEED",
//     liveFeedEvents: [
//       { time: "10:30 AM", text: "GPS Check-in: Sector 62 Site", sub: "Rep: Rajesh Kumar · Verified at location", tone: "primary" },
//       { time: "10:34 AM", text: "Quotation generated: ₹1.2 Cr", sub: "Sent via WhatsApp Cloud API with PDF", tone: "success" },
//       { time: "10:38 AM", text: "Pacing milestone: 85% of monthly quota", sub: "Gurugram Branch #1 on Leaderboard", tone: "success" },
//       { time: "10:41 AM", text: "Deal stage advanced: Negotiation", sub: "Discount approved by Regional Director", tone: "primary" },
//     ],
//   },
// ];



export interface LiveFeedEvent {
  time: string;
  text: string;
  sub: string;
  tone: "primary" | "success" | "warning" | "destructive" | "neutral" | string;
}

export interface MarketingMetric {
  icon: string;
  value: string;
  label: string;
}

export interface MarketingLeak {
  id: string;
  tabLabel: string;
  leakLabel: string;
  headline: string;
  description: string;
  fixItems: string[];
  impactStat: string;
  impactLabel: string;
  category: string;
  impactCopy: string;
  feedStatus: string;
  latency: string;
  liveFeedTitle: string;
  liveFeedEvents: LiveFeedEvent[];
  metrics: MarketingMetric[];
}

export const MARKETING_LEAKS: MarketingLeak[] = [
  {
    id: "lead-capture",
    tabLabel: "Lead capture",
    leakLabel: "Lead capture",
    category: "Leads are coming from multiple channels",
    impactCopy: "Lead capture in under 2 seconds",
    feedStatus: "Meta, Google, Website, WhatsApp and more",
    latency: "Latency: ~140ms",
    headline: "Capture all your leads in one place.",
    description:
      "Connect 16+ lead sources and capture every lead in real time. All leads come directly into your CRM within 2 seconds.",
    fixItems: [
      "Capture leads from 16+ sources in a unified CRM",
      "Auto capture and assign leads within 2 seconds",
      "Keep all your Meta, Google, Website, WhatsApp and partner leads organised",
    ],
    metrics: [
      { icon: "▱", value: "16+", label: "Sources Integration" },
      { icon: "ϟ", value: "2 Seconds", label: "Lead Capture Time" },
    ],
    impactStat: "2s",
    impactLabel: "Lead capture in under 2 seconds",
    liveFeedTitle: "LEAD CAPTURE · LIVE FEED",
    liveFeedEvents: [
      {
        time: "11:13 AM",
        text: "New lead from Facebook Ads",
        sub: "Auto-assigned to Karan Mehta",
        tone: "primary",
      },
      {
        time: "11:12 AM",
        text: "New lead from WhatsApp",
        sub: "Auto-assigned to Priya Nair",
        tone: "success",
      },
      {
        time: "11:11 AM",
        text: "Website form submission",
        sub: "Assigned to Sales Team",
        tone: "warning",
      },
      {
        time: "11:10 AM",
        text: "New lead from Google Ads",
        sub: "Auto-assigned to Rohit Sharma",
        tone: "primary",
      },
    ],
  },

  {
    id: "lead-automation",
    tabLabel: "Lead automation",
    leakLabel: "Lead automation",
    category: "Fast responses. Less manual work.",
    impactCopy: "WhatsApp, email and AI calling in one workflow",
    feedStatus: "WhatsApp · Email · AI calling",
    latency: "Workflow: active",
    headline: "Let automation handle the first response.",
    description:
      "Set up WhatsApp, email and AI calling workflows to respond to new enquiries, qualify prospects and help your team focus on leads ready to buy.",
    fixItems: [
      "Send WhatsApp messages when a new lead arrives",
      "Trigger email follow-ups based on lead activity",
      "Use AI calling workflows to qualify and prioritise prospects",
    ],
    metrics: [
      { icon: "◉", value: "WhatsApp", label: "Automated replies" },
      { icon: "✉", value: "Email", label: "Automated sequences" },
      { icon: "ϟ", value: "AI Calling", label: "Lead qualification" },
    ],
    impactStat: "3-in-1",
    impactLabel:
      "WhatsApp, email and AI calling in one workflow",
    liveFeedTitle: "LEAD AUTOMATION · LIVE WORKFLOW",
    liveFeedEvents: [
      {
        time: "11:13 AM",
        text: "WhatsApp message triggered",
        sub: "New lead · First response sent",
        tone: "success",
      },
      {
        time: "11:12 AM",
        text: "Welcome email sent",
        sub: "New enquiry · Email sequence started",
        tone: "primary",
      },
      {
        time: "11:11 AM",
        text: "AI calling workflow started",
        sub: "Lead qualification in progress",
        tone: "warning",
      },
      {
        time: "11:10 AM",
        text: "High-intent lead identified",
        sub: "Ready for sales team review",
        tone: "success",
      },
    ],
  },

  {
    id: "follow-up-sla",
    tabLabel: "Follow-up SLA",
    leakLabel: "Follow-up SLA",
    category: "Follow-ups can easily get missed",
    impactCopy: "Know which lead needs attention next",
    feedStatus: "Reminders and follow-up rules",
    latency: "Next task: upcoming",
    headline: "Keep every follow-up on track.",
    description:
      "Give every lead a clear next step. Keep calls, messages, reminders and pending tasks visible so prospects do not get forgotten.",
    fixItems: [
      "Create follow-up tasks for every active lead",
      "See due and overdue tasks in one place",
      "Keep calls, WhatsApp and email activity on the lead timeline",
    ],
    metrics: [
      { icon: "◷", value: "Reminders", label: "Due-date alerts" },
      { icon: "◉", value: "WhatsApp", label: "Follow-up messages" },
    ],
    impactStat: "24/7",
    impactLabel: "Know which lead needs attention next",
    liveFeedTitle: "FOLLOW-UP · TASK TIMELINE",
    liveFeedEvents: [
      {
        time: "11:13 AM",
        text: "Follow-up reminder scheduled",
        sub: "Call · Today at 11:25 AM",
        tone: "primary",
      },
      {
        time: "11:12 AM",
        text: "WhatsApp follow-up sent",
        sub: "Message delivered",
        tone: "success",
      },
      {
        time: "11:11 AM",
        text: "Overdue task flagged",
        sub: "Assigned to account executive",
        tone: "warning",
      },
      {
        time: "11:10 AM",
        text: "Next step added",
        sub: "Proposal discussion · Tomorrow",
        tone: "primary",
      },
    ],
  },

  {
    id: "owner-visibility",
    tabLabel: "Owner visibility",
    leakLabel: "Owner visibility",
    category: "A clear view of sales performance",
    impactCopy: "A clearer view of the complete sales pipeline",
    feedStatus: "Sales analytics and team activity",
    latency: "Dashboard: synced",
    headline: "Know what is happening across your sales team.",
    description:
      "See lead sources, team activity, pending follow-ups and pipeline progress from one owner dashboard. Spot gaps and make decisions with better visibility.",
    fixItems: [
      "View lead volume and status across sources",
      "Monitor team activity and pending follow-ups",
      "Track pipeline movement and conversion trends",
    ],
    metrics: [
      { icon: "▥", value: "Lead flow", label: "Source overview" },
      { icon: "↗", value: "Performance", label: "Team activity" },
    ],
    impactStat: "360°",
    impactLabel: "A clearer view of the complete sales pipeline",
    liveFeedTitle: "OWNER DASHBOARD · LIVE VIEW",
    liveFeedEvents: [
      {
        time: "11:13 AM",
        text: "New leads today",
        sub: "Lead volume across 4 sources",
        tone: "primary",
      },
      {
        time: "11:12 AM",
        text: "Follow-ups due",
        sub: "Pending tasks for sales team",
        tone: "warning",
      },
      {
        time: "11:11 AM",
        text: "Team response activity",
        sub: "Today's sales activity overview",
        tone: "success",
      },
      {
        time: "11:10 AM",
        text: "Pipeline updated",
        sub: "Latest lead status changes",
        tone: "primary",
      },
    ],
  },
];

