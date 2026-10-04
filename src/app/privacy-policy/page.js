import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";

export const metadata = {
  title: "Privacy Policy — SmoothSales.ai",
  description: "Privacy Policy, Personal Data Protection, and Data Ownership terms for SmoothSales.ai SaaS platform.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Legal &amp; Compliance Document</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: March 15, 2026 · Effective Date: January 1, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">1. Introduction &amp; Scope</h2>
            <p>
              SmoothSales.ai Technologies Private Limited (&quot;SmoothSales&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides a multi-tenant sales CRM, automated lead distribution engine, channel partner portal, and conversational messaging management platform (the &quot;Service&quot;).
            </p>
            <p>
              This Privacy Policy explains how we collect, store, process, transfer, and protect personal data when you interact with our websites, subscribe to our software services, or when your business enters lead, customer, or partner data into the SmoothSales ecosystem.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">2. Data We Collect</h2>
            <p>We process personal data in two primary capacities: as a <strong>Data Controller</strong> for our direct customers/account holders, and as a <strong>Data Processor</strong> on behalf of our business tenants.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Account &amp; Administrative Data:</strong> Names, business email addresses, mobile telephone numbers, billing addresses, tax identifiers (GSTIN/PAN), and password hashes for tenant administrators, sales agents, and channel partners.
              </li>
              <li>
                <strong>Tenant Customer &amp; Lead Data (Processed on Tenant&apos;s Behalf):</strong> Information ingested through webhook connectors, Meta Lead Ads, IndiaMART, Justdial, Google Forms, or manual entry, including customer names, phone numbers, email addresses, property/product preferences, budget brackets, and call outcome notes.
              </li>
              <li>
                <strong>Telephony &amp; Communication Logs:</strong> Call attempt timestamps, duration, disposition status (e.g., Interested, RNR, Site Visit Scheduled), SMS dispatch logs, and official WhatsApp Business API conversation metadata.
              </li>
              <li>
                <strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser types, operating systems, session identifiers, audit log records, and error telemetry used for security verification and load balancing.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">3. Purpose and Legal Basis for Processing</h2>
            <p>We process personal information under the following legitimate grounds:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide, operate, and maintain high-velocity lead ingestion and round-robin distribution algorithms;</li>
              <li>To execute SLA tracking, stale-lead auto-reassignment timers, and escalation alerts;</li>
              <li>To deliver transactional WhatsApp and SMS messages requested by tenants and their leads;</li>
              <li>To accurately attribute channel commissions, broker referral payouts, and partner ledger statements;</li>
              <li>To detect and prevent fraudulent account creation, unauthorized cross-tenant data access, or API abuse.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">4. Third-Party Sub-Processors &amp; Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal data or your leads&apos; personal data to third parties. We share data solely with trusted infrastructure sub-processors essential to delivering our services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Cloud Infrastructure:</strong> Amazon Web Services (AWS ap-south-1 Mumbai Region) and Cloudflare for edge security and SSL termination.</li>
              <li><strong>Payment Processing:</strong> Razorpay and Cashfree Payments for PCI-DSS compliant subscription billing and partner commission disbursements.</li>
              <li><strong>Official Messaging Gateways:</strong> Meta Platforms, Inc. (WhatsApp Cloud Business API) and registered Indian Telecom DLT SMS aggregators for transactional communication.</li>
              <li><strong>Identity &amp; Audit Tools:</strong> In-house role-based access control with encrypted session tokens.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">5. Tenant Data Ownership &amp; Logical Isolation</h2>
            <p>
              Every tenant operates within a strictly partitioned logical environment. Lead databases, partner hierarchies, and deal pipelines belonging to Tenant A are cryptographically and query-level isolated from Tenant B.
            </p>
            <p>
              <strong>You own your data.</strong> SmoothSales claims no intellectual property, commercial, or resale rights over customer and lead contacts uploaded by your sales team or partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">6. Data Retention &amp; Deletion</h2>
            <p>
              We retain personal data only for as long as your workspace subscription remains active and in good standing. Upon account cancellation or written request:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Tenants are granted a 30-day grace period to export full lead lists, deal records, and commission ledgers in CSV format;</li>
              <li>Following the grace period, tenant database partitions and associated webhook caches are purged from production clusters within 60 days;</li>
              <li>Backups are rotated out of archive storage in accordance with standard 90-day retention policies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">7. Compliance with India&apos;s DPDP Act 2023</h2>
            <p>
              SmoothSales is designed to adhere to India&apos;s <em>Digital Personal Data Protection Act, 2023 (DPDPA)</em>. We uphold the statutory principles of purpose limitation, data minimization, accuracy, reasonable security safeguards, and mandatory breach notification procedures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">8. Your Rights as a Data Principal</h2>
            <p>Under applicable data protection laws, you and your data subjects have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Request confirmation, access, and copies of personal data stored in your workspace;</li>
              <li>Request correction of inaccurate or outdated lead profiles;</li>
              <li>Request erasure or withdrawal of consent where processing is based on voluntary consent;</li>
              <li>Nominate a representative in the event of death or incapacity as provided under Indian law.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-heading font-bold text-lg text-foreground">9. Contact Data Protection Officer (DPO)</h2>
            <p>
              For questions regarding this policy, data subject access requests, or regulatory inquiries, contact our Data Protection Officer:
            </p>
            <div className="p-4 rounded-lg bg-card border border-border space-y-1 text-xs font-mono">
              <div><strong>SmoothSales.ai Technologies Pvt Ltd</strong></div>
              <div>Attn: Grievance Officer &amp; DPO</div>
              <div>Email: <a href="mailto:privacy@smoothsales.ai" className="text-primary underline">privacy@smoothsales.ai</a></div>
              <div>Address: Malviya Nagar Industrial Area, Jaipur, Rajasthan 302017, India</div>
            </div>
          </section>
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
