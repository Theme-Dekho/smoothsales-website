import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";

export const metadata = {
  title: "Terms of Service — SmoothSales.ai",
  description: "Terms of Service, Master SaaS Agreement, and Acceptable Use Policy for SmoothSales.ai.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <FileText className="h-3.5 w-3.5" />
              <span>Master Subscription Agreement</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: March 15, 2026 · Effective Date: January 1, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between SmoothSales.ai Technologies Private Limited (&quot;SmoothSales&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;) and the organization, company, or individual (&quot;Tenant&quot;, &quot;Customer&quot;, &quot;you&quot;) subscribing to or accessing our sales CRM, automated distribution platform, and associated APIs.
            </p>
            <p>
              By completing the registration process, starting a trial, or connecting lead ingestion sources, you represent that you have legal authority to bind your organization to these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">2. Account Registration &amp; Tenant Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Eligibility:</strong> You must be a registered business entity or legal adult capable of entering into binding contracts under Indian law.</li>
              <li><strong>Credential Security:</strong> You are strictly responsible for safeguarding admin and agent credentials, multi-factor authentication codes, and API webhook secrets issued to your workspace.</li>
              <li><strong>Tenant Authorization:</strong> Workspace administrators control user roles (Super Admin, Manager, Team Leader, Sales Rep) and are responsible for all actions conducted under their account seats.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">3. Subscription, Billing, &amp; Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Pricing Plans:</strong> Subscription tiers (Starter, Growth, Scale, Enterprise) are billed on a recurring monthly or annual basis as specified during order checkout. All fees are denominated in Indian Rupees (INR) unless otherwise agreed.</li>
              <li><strong>Taxes:</strong> Applicable Goods and Services Tax (GST 18%) is added to subscription fees. Tax invoices are generated automatically with your registered GSTIN upon payment receipt.</li>
              <li><strong>Lead Volume Limits &amp; Overage:</strong> Each tier includes a baseline monthly lead ingestion quota. Sustained overages may require upgrading to a higher volume tier to maintain real-time webhook routing speed.</li>
              <li><strong>Failed Payments &amp; Dunning:</strong> If recurring charges fail via our gateway (Razorpay/Cashfree), a 7-day grace period is provided with automated dunning retries before workspace distribution is paused.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">4. Acceptable Use Policy (AUP)</h2>
            <p>You agree not to use SmoothSales for any unauthorized or unlawful activities, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ingesting or broadcasting unsolicited promotional spam in violation of Indian Telecom Commercial Communications Customer Preference Regulations (TCCCPR/DLT) or WhatsApp Business Messaging Policies;</li>
              <li>Uploading stolen, scraped, or unconsented personal database lists without documented consent;</li>
              <li>Attempting to probe, bypass, reverse-engineer, or breach logical tenant database boundaries or rate limits;</li>
              <li>Reselling access to the platform without an executed White-Label Agency Partnership Agreement.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">5. White-Label Agency &amp; Reseller Terms</h2>
            <p>
              Partners licensed under our White-Label tier are granted a revocable, non-exclusive license to brand workspace portals, configure custom domain routing (e.g. <code>crm.youragency.com</code>), and onboard client sub-tenants subject to active subscription status and compliance with end-user data ownership provisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">6. Intellectual Property &amp; Tenant Content Ownership</h2>
            <p>
              <strong>SmoothSales Platform:</strong> SmoothSales retains all right, title, and interest in and to the platform software, algorithms, UI components, documentation, and system telemetry.
            </p>
            <p>
              <strong>Tenant Content:</strong> As between you and SmoothSales, you exclusively own all lead records, deal pipelines, customer contact notes, and marketing assets uploaded to your workspace.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">7. Service Availability &amp; Service Level Agreement (SLA)</h2>
            <p>
              We strive to maintain a 99.9% uptime target for lead ingestion webhooks and distribution engines. Scheduled maintenance windows are communicated in advance. SmoothSales shall not be liable for outages caused by third-party upstream providers (such as Meta API outages, cloud provider regional disruptions, or cellular carrier delays).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable Indian law, in no event shall SmoothSales, its directors, or affiliates be liable for any indirect, punitive, incidental, special, or consequential damages (including lost profits or business interruption). Our aggregate liability arising out of or related to these Terms shall not exceed the total fees paid by you in the preceding six (6) months.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">9. Termination &amp; Account Cancellation</h2>
            <p>
              You may cancel your subscription at any time via your workspace billing portal. Upon cancellation, your workspace remains functional until the conclusion of the paid billing period. SmoothSales reserves the right to suspend or terminate accounts for material breaches of our Acceptable Use Policy.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-heading font-bold text-lg text-foreground">10. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal action, dispute, or proceeding arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </section>
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
