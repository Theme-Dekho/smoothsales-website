import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, ShieldCheck, Mail, ExternalLink } from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";

export const metadata: Metadata = {
  title: "Data Deletion Request — SmoothSales.ai",
  description: "Meta Facebook Platform User Data Deletion Request and instructions for SmoothSales.ai.",
};

export default function DataDeletionPage() {
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
              <Trash2 className="h-3.5 w-3.5" />
              <span>User Data Rights &amp; Meta Compliance</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              User Data Deletion Request
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: November 24, 2026 · Compliant with Meta Platform Policy &amp; DPDP Act 2023
            </p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">1. Overview &amp; Meta Policy Compliance</h2>
            <p>
              In accordance with <strong>Meta Platform Policy</strong> (Facebook Login and WhatsApp Business API) and data privacy regulations, SmoothSales provides this dedicated page to explain how users can request the permanent deletion of their personal data and Meta-associated accounts.
            </p>
            <p>
              If you have logged into SmoothSales using Facebook Login or connected your WhatsApp Business Account via Meta Embedded Signup, you can request that all data obtained through Meta platforms be permanently deleted from our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-lg text-foreground">2. How to Request Data Deletion</h2>
            <p>You can delete or request deletion of your data through any of the following three methods:</p>

            <div className="space-y-4 not-prose">
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">1</span>
                  <span>Remove App Directly from Facebook Settings</span>
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  You can revoke access to Smoothsales directly in your Facebook profile:
                </p>
                <ol className="list-decimal pl-12 text-xs text-muted-foreground space-y-1">
                  <li>Navigate to your Facebook account&apos;s <a href="https://www.facebook.com/settings/?tab=business_tools" target="_blank" rel="noopener noreferrer" className="text-primary underline inline-flex items-center gap-0.5">Settings &gt; Business Integrations <ExternalLink className="h-3 w-3" /></a></li>
                  <li>Find <strong>Smoothsales</strong> in the list of active integrations</li>
                  <li>Click <strong>View and edit</strong> &gt; <strong>Remove</strong></li>
                  <li>Confirm the removal to revoke our access token</li>
                </ol>
                <p className="text-2xs text-muted-foreground pl-8 mt-1 italic">
                  When you remove our app, Meta sends an automated data deletion request to our callback endpoint. Our systems will automatically purge all cached tokens and sync data within 30 days.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">2</span>
                  <span>Inside SmoothSales CRM Settings</span>
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  If you are a registered user of SmoothSales CRM:
                </p>
                <ul className="list-disc pl-12 text-xs text-muted-foreground space-y-1">
                  <li>Log in to your workspace at <a href="https://crm.smoothsales.in" className="text-primary underline">crm.smoothsales.in</a></li>
                  <li>Navigate to <strong>WhatsApp &gt; Channels &gt; Connected numbers</strong></li>
                  <li>Select the connected number, click the action menu (&hellip;), and choose <strong>Disconnect / Delete Channel</strong></li>
                  <li>This immediately removes your WhatsApp Business credentials and access tokens from our database</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">3</span>
                  <span>Submit an Email Request to Privacy Team</span>
                </div>
                <p className="text-xs text-muted-foreground pl-8">
                  To request complete erasure of all records associated with your account, send an email to our Data Protection Officer:
                </p>
                <div className="ml-8 p-3 rounded-lg bg-muted/50 border border-border/80 text-xs font-mono space-y-1">
                  <div><strong>To:</strong> <a href="mailto:privacy@smoothsales.ai" className="text-primary underline">privacy@smoothsales.ai</a> (or <a href="mailto:privacy@smoothsales.in" className="text-primary underline">privacy@smoothsales.in</a>)</div>
                  <div><strong>Subject:</strong> Meta User Data Deletion Request</div>
                  <div><strong>Include:</strong> Your registered email, Workspace URL, and Facebook User ID (if available)</div>
                </div>
                <p className="text-2xs text-muted-foreground pl-8">
                  Our privacy team will process and verify your request within <strong>30 days</strong> and send an official confirmation code upon completion.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">3. What Data Is Deleted?</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Encrypted Meta Graph API user and system access tokens</li>
              <li>WhatsApp Business Account (WABA) IDs, Phone Number IDs, and webhook subscriptions</li>
              <li>Stored message history and webhook event caches associated with the disconnected number</li>
              <li>Personal identifiers (name, email, phone number) linked to the account deletion request</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">4. Automated Deletion Callback Endpoint</h2>
            <p>
              SmoothSales implements Meta&apos;s required automated data deletion callback at:
            </p>
            <div className="p-3 rounded-lg bg-card border border-border text-xs font-mono">
              <code>POST https://crm.smoothsales.in/api/webhooks/meta/data-deletion</code>
            </div>
            <p className="text-2xs text-muted-foreground">
              When triggered by Meta, this endpoint returns a JSON payload with a URL to track the deletion status along with a unique confirmation code.
            </p>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h2 className="font-heading font-bold text-lg text-foreground">5. Contact Information</h2>
            <div className="p-4 rounded-lg bg-card border border-border space-y-1 text-xs font-mono">
              <div><strong>SmoothSales.ai Technologies Pvt Ltd</strong></div>
              <div>Attn: Grievance Officer &amp; DPO</div>
              <div>Email: <a href="mailto:privacy@smoothsales.ai" className="text-primary underline">privacy@smoothsales.ai</a></div>
              <div>Website: <a href="https://smoothsales.in" className="text-primary underline">https://smoothsales.in</a></div>
            </div>
          </section>
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
