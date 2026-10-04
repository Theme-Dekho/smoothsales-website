import { Manrope, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { LeadModalProvider } from "@/components/marketing/lead-modal-context";
import { LeadCaptureModal } from "@/components/marketing/lead-capture-modal";
import { StickyLeadActionBar } from "@/components/marketing/sticky-lead-action-bar";
import { CookieNotice } from "@/components/marketing/cookie-notice";
import { GoogleAdsTracker } from "@/components/analytics/google-ads-tracker";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
});

const siteUrl = "https://smoothsales.ai";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmoothSales.ai — High-Velocity Sales & Partner CRM for Indian Teams",
    template: "%s | SmoothSales.ai",
  },
  description:
    "Unite WhatsApp enquiries, portal leads (Meta, IndiaMART, 99acres), sub-60s round-robin dispatch, and automated broker commission tracking in one high-velocity CRM built for Indian sales teams.",
  keywords: [
    "Indian CRM",
    "Real Estate CRM India",
    "WhatsApp Cloud API CRM",
    "Lead Distribution System",
    "Round Robin Lead Assignment",
    "Channel Partner CRM",
    "Broker Commission Tracking Software",
    "LeadSquared Alternative",
    "IndiaMART CRM Integration",
    "Meta Ads Lead Ingestion",
    "Sales Automation Software India",
  ],
  authors: [{ name: "SmoothSales Technologies Pvt Ltd", url: siteUrl }],
  creator: "SmoothSales.ai",
  publisher: "SmoothSales Technologies Pvt Ltd",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SmoothSales.ai",
    title: "SmoothSales.ai — High-Velocity Sales & Partner CRM for Indian Teams",
    description:
      "Sub-60s lead routing, WhatsApp automation, and broker commission ledger built for high-velocity real estate, education, and finance sales teams.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmoothSales.ai Sales CRM Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmoothSales.ai — High-Velocity Sales & Partner CRM for Indian Teams",
    description:
      "Sub-60s lead routing, WhatsApp automation, and broker commission ledger built for high-velocity Indian sales teams.",
    creator: "@SmoothSalesAI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "SmoothSales.ai",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "CRM & Sales Acceleration Software",
      "operatingSystem": "Web, Android, iOS",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "1499",
        "highPrice": "4999",
        "offerCount": "3",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "184",
        "bestRating": "5",
        "worstRating": "1",
      },
      "description":
        "High-velocity Sales and Channel Partner CRM built for Indian real estate, education, and BFSI teams with WhatsApp Cloud API integration and automated commission tracking.",
      "url": siteUrl,
    },
    {
      "@type": "Organization",
      "name": "SmoothSales Technologies Pvt Ltd",
      "url": siteUrl,
      "logo": `${siteUrl}/icon.png`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-9820145892",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"],
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302017",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "WebSite",
      "name": "SmoothSales.ai",
      "url": siteUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/help-center?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LeadModalProvider>
            <GoogleAdsTracker />
            <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col antialiased relative">
              <MarketingNavbar />
              <main className="flex-1 w-full overflow-x-hidden pb-16 sm:pb-0">{children}</main>
              {/* Sticky Action Bar for Call, WhatsApp, and Instant Demo (Google Ads Optimized) */}
              <StickyLeadActionBar />
              {/* Lead Capture Modal Popup */}
              <LeadCaptureModal />
              {/* Privacy & Cookie Notice */}
              <CookieNotice />
            </div>
            <Toaster position="bottom-right" richColors />
          </LeadModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
