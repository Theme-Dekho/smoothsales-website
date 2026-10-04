/**
 * SmoothSales.ai Marketing & Google Ads Conversion Tracking Utility
 * 
 * Provides unified attribution capture (UTM parameters, gclid, fbclid)
 * and dispatches conversion events to window.dataLayer / window.gtag.
 */

// Save UTM parameters and Google Ads click ID (gclid) to sessionStorage on initial landing
export function initAttributionTracking() {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const attributionKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid", // Google Ads Click ID
      "wbraid", // Google Ads iOS attribution
      "gbraid", // Google Ads App/Web attribution
      "fbclid", // Meta Ads Click ID
    ];

    const captured = {};
    let hasAttribution = false;

    attributionKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        captured[key] = val;
        hasAttribution = true;
      }
    });

    if (hasAttribution) {
      sessionStorage.setItem("smoothsales_attribution", JSON.stringify(captured));
    }
  } catch (err) {
    console.debug("[Attribution Tracking]", err);
  }
}

// Retrieve stored attribution data to attach to lead submissions
export function getStoredAttribution() {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("smoothsales_attribution");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Safe dataLayer push helper
function pushToDataLayer(eventPayload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);
}

// Safe gtag dispatcher
function callGtag(...args) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

/**
 * Track Lead Form Submission for Google Ads & Analytics
 */
export function trackLeadSubmission(leadData) {
  const attribution = getStoredAttribution();
  const payload = {
    event: "generate_lead",
    lead_source: leadData.source || "lead_modal",
    lead_vertical: leadData.vertical || "unspecified",
    team_size: leadData.teamSize || "unspecified",
    page_location: typeof window !== "undefined" ? window.location.href : "",
    ...attribution,
  };

  // Push to GTM dataLayer
  pushToDataLayer(payload);

  // Trigger Google Ads conversion event if gtag is present
  callGtag("event", "generate_lead", {
    currency: "INR",
    value: 500.0,
    ...payload,
  });

  // Optional: Trigger custom Google Ads conversion label if configured
  if (typeof window !== "undefined" && window.GOOGLE_ADS_CONVERSION_SEND_TO) {
    callGtag("event", "conversion", {
      send_to: window.GOOGLE_ADS_CONVERSION_SEND_TO,
      value: 500.0,
      currency: "INR",
    });
  }
}

/**
 * Track Click-to-Call for Google Ads Call Extensions & Call Conversions
 */
export function trackClickToCall(phoneNumber, source = "sticky_bar") {
  const payload = {
    event: "click_to_call",
    phone_number: phoneNumber,
    action_source: source,
  };

  pushToDataLayer(payload);
  callGtag("event", "contact", {
    method: "phone",
    ...payload,
  });
}

/**
 * Track WhatsApp Chat Click for Google Ads & Analytics
 */
export function trackClickWhatsApp(source = "sticky_bar") {
  const payload = {
    event: "click_whatsapp",
    action_source: source,
  };

  pushToDataLayer(payload);
  callGtag("event", "contact", {
    method: "whatsapp",
    ...payload,
  });
}
