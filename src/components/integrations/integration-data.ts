
export type IntegrationData = {
  name: string;
  title: string;
  description: string;
  category: string;
  domain: string;
  status: string;
  benefits: string[];
  setupSteps: string[];
};

const createIntegration = (
  name: string,
  description: string,
  category: string,
  domain: string,
  benefits: string[],
  setupSteps: string[],
  status = "Live",
): IntegrationData => ({
  name,
  title: `${name} Integration`,
  description,
  category,
  domain,
  status,
  benefits,
  setupSteps,
});

export const integrationData: Record<string, IntegrationData> = {
  "instagram-dm": {
    name: "Instagram DM",
    title: "Instagram DM Integration",
    description:
      "Capture and manage Instagram direct messages in your CRM workflow. Keep conversations organized and help your team follow up on enquiries.",
    category: "Messaging and Chat",
    domain: "instagram.com",
    status: "Live",
    benefits: [
      "Manage Instagram enquiries in one workspace",
      "Keep conversations organized for your sales team",
      "Connect incoming enquiries to your follow-up workflow",
    ],
    setupSteps: [
      "Review your Instagram business account requirements",
      "Configure the Instagram messaging connection",
      "Test incoming messages and your CRM workflow",
    ],
  },

  "meta-capi": {
    name: "Meta Conversion API",
    title: "Meta Conversion API Integration",
    description:
      "Connect CRM conversion events with Meta to support advertising attribution and campaign measurement.",
    category: "Popular",
    domain: "meta.com",
    status: "Live",
    benefits: [
      "Send relevant conversion events to Meta",
      "Connect CRM outcomes with advertising measurement",
      "Improve visibility into lead and conversion performance",
    ],
    setupSteps: [
      "Review your Meta Business and data-source configuration",
      "Configure the conversion events you want to send",
      "Test event delivery and validate the event mapping",
    ],
  },

  "facebook": createIntegration(
    "Facebook",
    "Capture Facebook Lead Ads enquiries and organize them in your CRM workflow.",
    "Lead Sources", "facebook.com",
    ["Bring Facebook enquiries into one workspace", "Organize and assign incoming leads", "Track follow-up progress"],
    ["Review your Facebook Page and Lead Ads access", "Configure lead form and field mapping", "Test lead capture and assignment"],
  ),

  "whatsapp": createIntegration(
    "WhatsApp",
    "Manage WhatsApp messaging workflows and connect customer conversations with CRM follow-ups.",
    "Messaging and Chat", "whatsapp.com",
    ["Organize customer conversations", "Support template messaging workflows", "Track conversations alongside sales activity"],
    ["Review WhatsApp Business account requirements", "Configure messaging and templates", "Test message delivery and CRM tracking"],
  ),

  "website-chat-widget": createIntegration(
    "Website Chat Widget",
    "Capture website conversations and route enquiries into your sales workflow.",
    "Messaging and Chat", "smoothsales.ai",
    ["Capture website enquiries", "Organize incoming conversations", "Route enquiries for follow-up"],
    ["Choose the website chat configuration", "Install and configure the widget", "Test incoming enquiries"],
  ),

  "google-ads-lead-form": createIntegration(
    "Google Ads Lead Form",
    "Capture enquiries submitted through Google Ads lead forms.",
    "Lead Sources", "ads.google.com",
    ["Collect advertising leads", "Map lead fields to your CRM", "Track follow-up activity"],
    ["Review Google Ads account access", "Configure lead form access and field mapping", "Test lead delivery"],
  ),

  "indiamart": createIntegration(
    "IndiaMart",
    "Bring IndiaMart business enquiries into your sales workflow.",
    "Lead Sources", "indiamart.com",
    ["Centralize marketplace enquiries", "Organize contact and requirement details", "Track lead follow-ups"],
    ["Obtain the required IndiaMart API access", "Configure the available lead delivery method", "Test incoming enquiry data"],
  ),

  "tradeindia": createIntegration(
    "TradeIndia",
    "Organize TradeIndia enquiries and incorporate them into your CRM process.",
    "Lead Sources", "tradeindia.com",
    ["Centralize TradeIndia enquiries", "Keep enquiry details organized", "Support consistent follow-ups"],
    ["Review TradeIndia access and integration options", "Configure the lead data mapping", "Test enquiry delivery"],
  ),

  "justdial": createIntegration(
    "JustDial",
    "Capture JustDial enquiries and route them to your sales representatives.",
    "Lead Sources", "justdial.com",
    ["Bring JustDial enquiries together", "Support lead assignment", "Track enquiry follow-ups"],
    ["Review your JustDial lead delivery access", "Configure the receiving workflow", "Test lead assignment"],
  ),

  "web-contact-form": createIntegration(
    "Web Contact Form",
    "Bring website contact form submissions into your CRM workflow.",
    "Forms", "google.com",
    ["Capture form submissions", "Map contact fields", "Organize enquiries for follow-up"],
    ["Review your existing contact form", "Configure submission delivery and field mapping", "Submit a test enquiry"],
  ),

  "leads-from-email": createIntegration(
    "Leads from Email",
    "Organize incoming email enquiries in your CRM workflow.",
    "Email", "gmail.com",
    ["Centralize email enquiries", "Organize incoming lead details", "Support timely follow-ups"],
    ["Review the email source and forwarding permissions", "Configure email parsing or forwarding", "Test incoming lead processing"],
  ),

  "leads-through-api": createIntegration(
    "Leads Through API",
    "Send lead data from custom applications and systems through an API.",
    "Automation and API", "swagger.io",
    ["Receive leads from custom sources", "Map incoming fields", "Connect external workflows"],
    ["Review API authentication requirements", "Map the lead payload fields", "Send and validate a test request"],
  ),

  "commonfloor": createIntegration(
    "Commonfloor",
    "Organize property enquiries from Commonfloor within your CRM workflow.",
    "Real Estate", "commonfloor.com",
    ["Centralize property enquiries", "Organize prospect details", "Track sales follow-ups"],
    ["Review available Commonfloor lead access", "Configure the receiving workflow", "Test property enquiry delivery"],
  ),

  "magicbricks": createIntegration(
    "MagicBricks",
    "Bring property enquiries from MagicBricks into your sales workflow.",
    "Real Estate", "magicbricks.com",
    ["Centralize property leads", "Organize enquiry details", "Support sales follow-ups"],
    ["Review your MagicBricks lead access", "Configure field mapping and lead delivery", "Test an incoming enquiry"],
  ),

  "housing-com": createIntegration(
    "Housing.com",
    "Bring Housing.com property enquiries into your CRM workflow.",
    "Real Estate", "housing.com",
    ["Centralize Housing.com enquiries", "Organize prospect requirements", "Track enquiry follow-ups"],
    ["Obtain the required Housing.com CRM integration access", "Configure the webhook or supported delivery method", "Test lead receipt and field mapping"],
  ),

  "urbanpro": createIntegration(
    "UrbanPro",
    "Organize enquiries from UrbanPro and incorporate them into your lead workflow.",
    "Lead Sources", "urbanpro.com",
    ["Centralize service enquiries", "Organize prospective customer details", "Track follow-up activity"],
    ["Review your UrbanPro lead access", "Configure the supported delivery method", "Test incoming enquiries"],
  ),

  "aajjo": createIntegration(
    "AAJJO",
    "Bring AAJJO business enquiries into your CRM workflow.",
    "Lead Sources", "aajjo.com",
    ["Centralize business enquiries", "Organize prospect details", "Support lead follow-ups"],
    ["Review available AAJJO lead access", "Configure lead delivery and field mapping", "Test enquiry processing"],
  ),

  "google-forms": createIntegration(
    "Google Forms",
    "Organize Google Forms submissions as CRM enquiries.",
    "Google Suite", "forms.google.com",
    ["Capture form submissions", "Map response fields", "Route enquiries for follow-up"],
    ["Review the form and response access", "Configure the submission workflow", "Submit a test response"],
  ),

  "google-sheets": createIntegration(
    "Google Sheets",
    "Work with CRM lead and pipeline data through Google Sheets workflows.",
    "Google Suite", "sheets.google.com",
    ["Organize lead data", "Support data review and reporting", "Reduce manual data handling where configured"],
    ["Review Google account permissions", "Configure the required sheet and field mapping", "Test data access and synchronization"],
  ),

  "google-meet": createIntegration(
    "Google Meet",
    "Connect Google Meet workflows with scheduled sales demos and calls.",
    "Google Suite", "meet.google.com",
    ["Support sales meeting workflows", "Organize demo scheduling", "Keep meeting activity connected to sales processes"],
    ["Review Google account permissions", "Configure the required meeting workflow", "Test meeting creation and access"],
  ),

  "google-drive": createIntegration(
    "Google Drive",
    "Plan workflows for organizing CRM files and documents in Google Drive.",
    "Google Suite", "drive.google.com",
    ["Organize business documents", "Plan file access workflows", "Keep related files easier to find"],
    ["Review Drive permissions", "Define the folder and file workflow", "Validate access and document handling"],
    "Coming Soon",
  ),

  "gmail": createIntegration(
    "Gmail",
    "Connect email workflows with your CRM communication process.",
    "Email", "gmail.com",
    ["Organize email communication", "Support email tracking workflows", "Connect conversations with sales activity"],
    ["Review Gmail permissions", "Configure the required email access", "Test the intended email workflow"],
    "Coming Soon",
  ),

  "jotform": createIntegration(
    "Jotform",
    "Bring Jotform submissions into your CRM lead workflow.",
    "Forms", "jotform.com",
    ["Capture form submissions", "Map submitted fields", "Organize new enquiries"],
    ["Review Jotform access", "Configure submission delivery and field mapping", "Submit a test form"],
  ),

  "wix-contact-form": createIntegration(
    "Wix Contact Form",
    "Organize contact enquiries submitted through Wix websites.",
    "Forms", "wix.com",
    ["Capture website enquiries", "Map contact information", "Route submissions for follow-up"],
    ["Review Wix form access", "Configure the submission workflow", "Test a contact form submission"],
  ),

  "calendly": createIntegration(
    "Calendly",
    "Connect Calendly booking workflows with your sales enquiry process.",
    "Scheduling", "calendly.com",
    ["Organize booking enquiries", "Support meeting follow-ups", "Connect scheduling activity with sales workflows"],
    ["Review Calendly account access", "Configure booking event delivery", "Test a booking workflow"],
  ),

  "razorpay": createIntegration(
    "Razorpay",
    "Connect payment-related workflows with CRM deals and customer records.",
    "Payments and Finance", "razorpay.com",
    ["Keep payment activity organized", "Associate payment events with customer workflows", "Support payment status visibility"],
    ["Review Razorpay API access", "Configure the required payment events", "Test with a safe test-mode transaction"],
  ),

  "cashfree": createIntegration(
    "Cashfree",
    "Plan payment workflows using Cashfree and your CRM processes.",
    "Payments and Finance", "cashfree.com",
    ["Organize payment activity", "Connect payment events with sales workflows", "Improve visibility into payment status"],
    ["Review Cashfree API credentials", "Configure payment event handling", "Test in the supported sandbox environment"],
  ),

  "zoho-crm": createIntegration(
    "Zoho CRM",
    "Coordinate CRM records and lead workflows with Zoho CRM.",
    "Popular", "zoho.com",
    ["Coordinate lead records", "Map relevant CRM fields", "Support connected sales workflows"],
    ["Review Zoho API permissions", "Configure record and field mapping", "Test the intended CRM workflow"],
  ),

  "zoho-books": createIntegration(
    "Zoho Books",
    "Plan accounting and invoice workflows around your CRM records.",
    "Payments and Finance", "zoho.com",
    ["Organize invoice-related workflows", "Connect relevant customer records", "Improve visibility into finance processes"],
    ["Review Zoho Books access", "Define the accounting data mapping", "Validate the workflow before production use"],
    "Coming Soon",
  ),

  "zoho-recruit": createIntegration(
    "Zoho Recruit",
    "Connect Zoho Recruit data with your configured business workflows.",
    "Automation and API", "zoho.com",
    ["Organize relevant records", "Map data between workflows", "Support connected processes"],
    ["Review Zoho Recruit API access", "Configure the required field mapping", "Test the intended workflow"],
  ),

  "zenoti": createIntegration(
    "Zenoti",
    "Plan CRM workflows for salon, spa, and wellness business operations.",
    "Automation and API", "zenoti.com",
    ["Organize customer enquiries", "Support service-related follow-ups", "Connect relevant business workflows"],
    ["Review Zenoti integration access", "Define the required data mapping", "Test the supported workflow"],
  ),

  "shopify": createIntegration(
    "Shopify",
    "Plan workflows for connecting Shopify customers and orders with sales processes.",
    "Ecommerce", "shopify.com",
    ["Organize customer and order information", "Connect ecommerce activity with sales workflows", "Support customer follow-ups"],
    ["Review Shopify app and API permissions", "Define customer and order field mapping", "Test with appropriate test data"],
    "Coming Soon",
  ),

  "openai": createIntegration(
    "OpenAI",
    "Explore AI-powered workflows using an appropriately configured OpenAI API connection.",
    "AI and Intelligence", "openai.com",
    ["Support configured AI workflows", "Process supported text-based tasks", "Connect AI capabilities to selected business processes"],
    ["Review API key and usage requirements", "Configure the intended AI workflow", "Test responses and usage limits"],
  ),

  "caller-desk": createIntegration(
    "Caller Desk",
    "Connect supported cloud telephony workflows with your sales process.",
    "Cloud Telephony", "callerdesk.io",
    ["Organize calling activity", "Support call-related workflows", "Connect telephony events with sales processes"],
    ["Review Caller Desk account and API access", "Configure the supported telephony events", "Test calling and event delivery"],
  ),

  "tata-tele-smart-flo": createIntegration(
    "Tata Tele Smart Flo",
    "Plan cloud telephony workflows using Tata Tele Smart Flo.",
    "Cloud Telephony", "tatatelebusiness.com",
    ["Organize business calling workflows", "Support call event visibility", "Connect calling activity with sales processes"],
    ["Review Tata Tele account and API access", "Configure the supported calling workflow", "Test call events"],
  ),

  "knowlarity": createIntegration(
    "Knowlarity",
    "Connect supported Knowlarity telephony workflows with your CRM process.",
    "Cloud Telephony", "knowlarity.com",
    ["Organize call activity", "Support telephony event tracking", "Connect calling workflows with sales follow-ups"],
    ["Review Knowlarity API access", "Configure the required telephony events", "Test the call workflow"],
  ),

  "exotel": createIntegration(
    "Exotel",
    "Connect supported Exotel calling workflows with your sales process.",
    "Cloud Telephony", "exotel.com",
    ["Organize calling activity", "Support call event workflows", "Connect call records with sales follow-ups"],
    ["Review Exotel account and API access", "Configure the required event callbacks", "Test call event delivery"],
  ),

  "bon-voice": createIntegration(
    "Bon Voice",
    "Plan telephony workflows using your Bon Voice business account.",
    "Cloud Telephony", "bonvoice.com",
    ["Organize business calling activity", "Support call event visibility", "Coordinate call follow-ups"],
    ["Review Bon Voice integration access", "Configure supported telephony events", "Test the workflow"],
  ),

  "3cx": createIntegration(
    "3CX",
    "Connect supported 3CX business phone system workflows.",
    "Cloud Telephony", "3cx.com",
    ["Organize business phone activity", "Support call-related workflows", "Connect telephony activity with sales processes"],
    ["Review 3CX configuration and permissions", "Configure the supported connection", "Test call events"],
  ),

  "vonage": createIntegration(
    "Vonage",
    "Plan business communication workflows using Vonage.",
    "Cloud Telephony", "vonage.com",
    ["Organize communication activity", "Connect supported telephony events", "Support sales follow-ups"],
    ["Review Vonage API access", "Configure the required communication workflow", "Test event delivery"],
  ),

  "webhooks": createIntegration(
    "Webhooks",
    "Send or receive supported CRM events through configured webhook endpoints.",
    "Automation and API", "webhooks.io",
    ["Connect external applications", "Automate supported event-driven workflows", "Pass structured data between systems"],
    ["Define the event and endpoint", "Configure authentication and payload mapping", "Test requests and error handling"],
  ),
};
