import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Affiliate Partner Program — Earn 20% to 30% Recurring Commission | SmoothSales.ai",
  description:
    "Join the SmoothSales.ai Affiliate Program. Earn 20% to 30% lifetime recurring monthly commission on every paying customer you introduce. 90-day cookie window, real-time dashboard, and automated monthly UPI / NEFT payouts.",
  keywords: [
    "SaaS Affiliate Program India",
    "CRM Affiliate Program",
    "SmoothSales Affiliate",
    "Earn Recurring SaaS Income",
    "High Paying Software Affiliate India",
    "WhatsApp CRM Affiliate",
    "B2B Software Referral Program",
  ],
  openGraph: {
    title: "Affiliate Partner Program — Earn 20% to 30% Lifetime Recurring | SmoothSales.ai",
    description:
      "Recommend India's fastest WhatsApp CRM. Earn 20% to 30% recurring payouts every month on the 5th. 90-day cookie window & zero support burden.",
    url: "https://smoothsales.ai/affiliate",
    siteName: "SmoothSales.ai",
    type: "website",
  },
  alternates: {
    canonical: "https://smoothsales.ai/affiliate",
  },
};

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
