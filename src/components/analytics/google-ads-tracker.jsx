"use client";

import { useEffect } from "react";
import Script from "next/script";
import { initAttributionTracking } from "@/lib/tracking";

export function GoogleAdsTracker() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  useEffect(() => {
    // 1. Initialize dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
    }

    // 2. Capture and persist UTMs & gclid from URL
    initAttributionTracking();
  }, []);

  return (
    <>
      {/* Google Tag Manager (if configured) */}
      {gtmId && (
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      )}

      {/* Google Ads / GA4 Global Site Tag (gtag.js) */}
      {(adsId || gaId) && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${adsId || gaId}`}
          />
          <Script
            id="google-ads-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${adsId ? `gtag('config', '${adsId}', { send_page_view: true });` : ""}
                ${gaId ? `gtag('config', '${gaId}', { send_page_view: true });` : ""}
              `,
            }}
          />
        </>
      )}
    </>
  );
}
