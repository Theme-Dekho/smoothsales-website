import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a White Label Partner | SmoothSales.ai CRM Reseller Program",
  description:
    "Launch your own branded CRM business with SmoothSales.ai. Your brand, your pricing, your profit. Zero infrastructure to build, isolated workspaces, and full backend support.",
  keywords: [
    "White Label CRM India",
    "CRM Reseller Program",
    "Agency CRM White Label",
    "SaaS Reseller India",
    "Branded Sales CRM",
    "SmoothSales White Label",
  ],
};

export default function BecomeAPartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
