/**
 * SmoothSales.ai Knowledge Base Tutorial Library Configuration
 * Single source of truth for all self-serve video tutorials.
 *
 * Adding a new tutorial is a one-line entry here:
 * Categories and counts automatically reflect throughout the UI.
 *
 * NOTE: Replace placeholder `videoEmbedUrl` and `videoOpenUrl` values
 * with your production YouTube/Vimeo/Loom/Drive video URLs before launch.
 */

export const TUTORIALS = [
  {
    id: "tut-01-workspace-user-setup",
    index: "01",
    category: "Setup",
    categoryLabel: "WORKSPACE CONFIG",
    title: "Workspace & User Setup",
    description:
      "Configure your business profile, set operational calling hours, invite team members with granular role permissions (Admin, Manager, Rep), and assign timezone routing.",
    durationLabel: "4:15 min",
    // TODO: Replace with real YouTube / Vimeo / Cloudflare Stream embed URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-blue-600/40 via-indigo-600/30 to-cyan-500/30",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    id: "tut-02-lead-stages-custom-fields",
    index: "02",
    category: "Setup",
    categoryLabel: "PIPELINE SETUP",
    title: "Lead Stages, Custom Fields & Products",
    description:
      "Design tailored deal stages (Site Visit, Token Received, Fee Paid), add custom property or course attributes, and organize multi-project catalogs with stage probability weights.",
    durationLabel: "5:40 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-cyan-600/40 via-teal-600/30 to-blue-500/30",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  },
  {
    id: "tut-03-bulk-lead-upload",
    index: "03",
    category: "Leads",
    categoryLabel: "DATA MANAGEMENT",
    title: "Bulk Lead Upload & Deduplication",
    description:
      "Import existing customer records from CSV or Excel files, auto-map columns, detect duplicate phone numbers, and assign imported batches to dedicated campaign queues.",
    durationLabel: "3:50 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-amber-600/40 via-orange-600/30 to-rose-500/30",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    id: "tut-04-lead-auto-assignment-rules",
    index: "04",
    category: "Leads",
    categoryLabel: "LEAD DISTRIBUTION",
    title: "Lead Auto-Assignment Rules",
    description:
      "Build condition-based assignment rules based on lead source, budget range, and location pin-codes to instantly direct premium prospects to your highest-converting closers.",
    durationLabel: "6:10 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-emerald-600/40 via-teal-600/30 to-cyan-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "tut-05-advanced-round-robin-sla",
    index: "05",
    category: "Leads",
    categoryLabel: "SLA MANAGEMENT",
    title: "Advanced Round-Robin & SLA Routing",
    description:
      "Configure sub-60s round-robin distribution with rep capacity caps, availability toggles, 15-minute response stopwatches, and automated stale-lead reassignment.",
    durationLabel: "7:25 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-rose-600/40 via-pink-600/30 to-purple-500/30",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  {
    id: "tut-06-connect-website-indiamart-justdial",
    index: "06",
    category: "Integrations",
    categoryLabel: "WEBHOOK CONNECTORS",
    title: "Connect Website, IndiaMART & JustDial",
    description:
      "Generate tenant webhook URLs to capture inquiries in real time from IndiaMART, Justdial, Housing.com, 99acres, and custom website Elementor or React forms.",
    durationLabel: "5:15 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-indigo-600/40 via-purple-600/30 to-pink-500/30",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
  {
    id: "tut-07-facebook-meta-ads-lead-sync",
    index: "07",
    category: "Integrations",
    categoryLabel: "META MARKETING",
    title: "Facebook & Meta Ads Lead Sync",
    description:
      "Authenticate your Facebook Business Manager to ingest instant Lead Gen Ad forms within 800ms, mapping campaign names and custom questions directly to CRM fields.",
    durationLabel: "4:45 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-blue-600/40 via-sky-600/30 to-cyan-500/30",
    badgeColor: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  {
    id: "tut-08-connect-whatsapp-business",
    index: "08",
    category: "WhatsApp",
    categoryLabel: "OFFICIAL CLOUD API",
    title: "Connect WhatsApp Business Cloud API",
    description:
      "Step-by-step setup to connect Meta’s official WhatsApp Cloud API: registering your verified phone number, obtaining credentials, and synchronizing 2-way inbox chat.",
    durationLabel: "6:30 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-emerald-600/40 via-teal-600/30 to-green-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "tut-09-templates-bulk-campaigns",
    index: "09",
    category: "WhatsApp",
    categoryLabel: "BROADCAST CAMPAIGNS",
    title: "Templates & Bulk WhatsApp Campaigns",
    description:
      "Submit Meta-approved marketing and utility templates with dynamic variables, launch segmented promotional broadcasts, and analyze delivery and read receipts.",
    durationLabel: "5:00 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-teal-600/40 via-cyan-600/30 to-emerald-500/30",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
  },
  {
    id: "tut-10-automated-follow-up-nurturing",
    index: "10",
    category: "WhatsApp",
    categoryLabel: "DRIP AUTOMATION",
    title: "Automated Follow-up Nurturing",
    description:
      "Set up automated WhatsApp drip journeys: instant welcome brochures on lead arrival, day 2 case study follow-ups, and automated site visit appointment reminders.",
    durationLabel: "7:00 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-green-600/40 via-emerald-600/30 to-teal-500/30",
    badgeColor: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  {
    id: "tut-11-ai-whatsapp-qualification-bot",
    index: "11",
    category: "WhatsApp · AI",
    categoryLabel: "CONVERSATIONAL AI",
    title: "Set Up the AI WhatsApp Qualification Bot",
    description:
      "Deploy an intelligent conversational AI agent that greets incoming prospects 24×7, asks qualifying questions (budget, unit type, timeline), and logs responses into the CRM card.",
    durationLabel: "8:20 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-purple-600/40 via-violet-600/30 to-cyan-500/30",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    id: "tut-12-enable-call-recording-mobile",
    index: "12",
    category: "Mobile App",
    categoryLabel: "GROUND REPS",
    title: "Enable Call Recording on Mobile",
    description:
      "Install the SmoothSales companion mobile app on Android/iOS, configure automatic outbound call recording, and sync talk time and disposition notes on the move.",
    durationLabel: "4:30 min",
    // TODO: Replace with real tutorial video URL
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    videoOpenUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailGradient: "from-orange-600/40 via-amber-600/30 to-red-500/30",
    badgeColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  },
];
