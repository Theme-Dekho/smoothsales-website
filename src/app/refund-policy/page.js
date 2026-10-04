import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, ShieldCheck } from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";

export const metadata = {
  title: "Refund & Cancellation Policy — SmoothSales.ai",
  description:
    "Refund, billing proration, and subscription cancellation terms for SmoothSales.ai SaaS multi-tenant CRM.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300 flex flex-col">
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
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Billing &amp; Subscription Terms</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Last updated: March 15, 2026 · Effective Date: January 1, 2026
            </p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">1. 14-Day Risk-Free Trial</h2>
            <p>
              SmoothSales offers a full-featured 14-day free trial on all plans. No credit card or upfront
              deposit is required to initiate the trial. We encourage all prospective tenants to test lead
              ingestion, round-robin rules, and WhatsApp templates thoroughly before committing to a paid
              plan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">2. Monthly Subscriptions &amp; Cancellations</h2>
            <p>
              You may cancel your monthly subscription at any time directly through your tenant Billing
              Settings or by emailing billing@smoothsales.ai. Upon cancellation, your workspace remains
              active until the conclusion of the current monthly billing period, and no further recurring
              charges will be incurred.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">3. Annual Plan Refund Eligibility</h2>
            <p>
              For annual upfront subscriptions, tenants who request a cancellation within the first thirty
              (30) days of initial purchase are eligible for a full refund minus the single month&apos;s
              standard list price. Beyond 30 days, annual subscriptions are non-refundable, but access
              remains available through the paid annual term.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">4. Refund Processing Timeframe</h2>
            <p>
              Approved refunds are credited back to the original Indian payment method (UPI, NetBanking,
              Corporate Card, or NEFT) via our payment gateway partners (Razorpay / Cashfree) within 5 to 7
              business days from authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-foreground">5. Contact Billing Desk</h2>
            <p>
              If you have any questions or require custom enterprise invoicing arrangements, please reach out
              to our dedicated finance desk at <strong>billing@smoothsales.ai</strong> or via WhatsApp at
              <strong> +91 98201 45892</strong>.
            </p>
          </section>
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
