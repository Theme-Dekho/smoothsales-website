import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sales Agent & Business Partner Program — Earn ₹150/User/Month",
  description:
    "Join the SmoothSales.ai Business Partner program. Earn ₹150 recurring payout per active user every month. 100% refundable ₹999 onboarding fee with zero client refund risk.",
  keywords: [
    "SmoothSales Sales Agent",
    "CRM Business Partner India",
    "B2B Field Sales Partner",
    "Recurring Commission CRM",
    "Sales Partner Program",
    "Work from home sales partner India",
  ],
  openGraph: {
    title: "Sales Agent & Business Partner Program — SmoothSales.ai",
    description:
      "Earn ₹150/user recurring payout every single month. Zero technical knowledge required, refundable ₹999 onboarding.",
  },
};

export default function SalesAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
