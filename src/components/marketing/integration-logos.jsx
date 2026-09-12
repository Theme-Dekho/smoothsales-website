import React from "react";

// Crisp, authentic, official vector brand logos for the Indian sales & tech ecosystem

export function WhatsAppLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        d="M34.2 13.8A14.9 14.9 0 0 0 24 9.6C15.8 9.6 9.2 16.2 9.2 24.4c0 2.6.7 5.2 2 7.4L9 39l7.4-2c2.2 1.2 4.6 1.8 7.6 1.8 8.2 0 14.8-6.6 14.8-14.8 0-4-1.6-7.7-4.6-10.2z"
        fill="#FFFFFF"
      />
      <path
        d="M24 12c6.6 0 12 5.4 12 12 0 3.2-1.3 6.2-3.5 8.4-2.2 2.2-5.2 3.5-8.5 3.5-2.2 0-4.4-.6-6.2-1.7l-.4-.3-4.6 1.2 1.2-4.5-.3-.5c-1.2-1.9-1.8-4-1.8-6.2 0-6.6 5.4-12 12-12m6.7 17.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6 0 2.1 1.5 4.2 1.7 4.5.2.3 3 4.6 7.3 6.4 1 .4 1.8.7 2.5.9.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.4z"
        fill="#25D366"
      />
    </svg>
  );
}

export function MetaLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#0081FB" />
      <path
        d="M35.6 18.2c-.8-2.6-3.1-4.2-6-4.2-3.8 0-6.4 2.8-8.2 5.5-1.4-2.2-3.4-5.5-7.5-5.5-4.4 0-7.9 3.4-7.9 8 0 5.4 4.5 9.7 10.1 9.7 3.9 0 6.3-2.3 8.3-5.2 1.9 2.8 4.3 5.2 8.2 5.2 5.6 0 10.1-4.3 10.1-9.7 0-1.4-.4-2.7-1.1-3.8zm-19.6 9.8c-3.3 0-5.8-2.5-5.8-5.7 0-2.8 2.1-5 5-5 3.3 0 5.2 3.6 6.8 6-1.5 2.8-3.4 4.7-6 4.7zm15.7 0c-2.6 0-4.5-2-6-4.7 1.6-2.4 3.5-6 6.8-6 2.9 0 5 2.2 5 5 0 3.2-2.5 5.7-5.8 5.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function GoogleAdsLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <path
        d="M17.4 34.2L24.8 21.4C25.5 20.2 27.1 19.8 28.3 20.5C29.5 21.2 29.9 22.8 29.2 24L21.8 36.8C21.1 38 19.5 38.4 18.3 37.7C17.1 37 16.7 35.4 17.4 34.2Z"
        fill="#FBBC04"
      />
      <path
        d="M29.2 24L21.8 11.2C21.1 10 19.5 9.6 18.3 10.3C17.1 11 16.7 12.6 17.4 13.8L24.8 26.6C25.5 27.8 27.1 28.2 28.3 27.5C29.5 26.8 29.9 25.2 29.2 24Z"
        fill="#4285F4"
      />
      <circle cx="15.5" cy="35.5" r="4.5" fill="#34A853" />
    </svg>
  );
}

// Authentic IndiaMART Red/Blue Arrow & Globe Logo
export function IndiaMARTLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Globe/Compass Ring */}
      <circle cx="21" cy="22" r="10" stroke="#C4161C" strokeWidth="3" fill="none" />
      {/* Red vertical bar */}
      <path d="M19 15H23V29H19V15Z" fill="#C4161C" />
      {/* Blue growth arrow diagonal */}
      <path d="M14 28L28 14M28 14H21M28 14V21" stroke="#003B73" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Blue building bar */}
      <path d="M27 20H31V29H27V20Z" fill="#003B73" />
    </svg>
  );
}

// Authentic 99acres Blue House Keyhole Logo
export function Acres99Logo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#005B9E" />
      {/* Roof & House Frame */}
      <path
        d="M24 11L12 21V35H36V21L24 11Z"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Chimney */}
      <path d="M31 14V18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      {/* Location Pin & Upward Arrow inside house */}
      <path
        d="M24 18C21.8 18 20 19.8 20 22C20 24.8 24 29 24 29C24 29 28 24.8 28 22C28 19.8 26.2 18 24 18Z"
        fill="#FFFFFF"
      />
      <circle cx="24" cy="22" r="2" fill="#005B9E" />
    </svg>
  );
}

// Authentic MagicBricks Red Roof House Emblem
export function MagicBricksLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#D8232A" />
      {/* Roof Arc */}
      <path
        d="M13 25L24 15L35 25"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* House Body */}
      <path
        d="M16 23V34H32V23"
        stroke="#FFFFFF"
        strokeWidth="3"
        fill="none"
      />
      {/* Doorway */}
      <path d="M21 34V27H27V34" fill="#FFFFFF" />
      {/* Swoosh Underline */}
      <path
        d="M10 32C16 36 32 37 38 30"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Authentic Housing.com Teal & Pink Polygon Emblem
export function HousingDotComLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#00A2A5" />
      {/* Angular Geometry Roof */}
      <path
        d="M24 10L11 20V37H20V27H28V37H37V20L24 10Z"
        fill="#FFFFFF"
      />
      {/* Magenta Corner Accent */}
      <path
        d="M24 10L37 20H28L24 10Z"
        fill="#E60067"
      />
    </svg>
  );
}

// Authentic Justdial Orange/Blue JD Loop Logo
export function JustdialLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      {/* Orange 'J' Curved Stroke */}
      <path
        d="M14 26C14 31 17.5 34 21.5 34C25 34 27.5 31.5 27.5 27.5V14H22.5V27C22.5 28.5 21.5 29.5 20 29.5C18.5 29.5 17.5 28.5 17.5 26.5V22H14V26Z"
        fill="#FF7800"
      />
      {/* Blue 'D' Stroke */}
      <path
        d="M26 14H31C35.5 14 38.5 17.5 38.5 23.5C38.5 29.5 35.5 34 31 34H26V14ZM31 29.5C33 29.5 34.5 27 34.5 23.5C34.5 20 33 18.5 31 18.5H29.5V29.5H31Z"
        fill="#0076D7"
      />
    </svg>
  );
}

// Authentic TradeIndia Blue/Orange Globe & Arrow Logo
export function TradeIndiaLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#2E3192" />
      {/* Orange Globe Arc */}
      <path
        d="M14 24C14 17.5 19.5 12 26 12C31.5 12 36 15.5 37.5 20.5"
        stroke="#F7931E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* White 't' Arrow */}
      <path
        d="M18 34V22M14 26H22M22 22L27 16M27 16H22M27 16V21"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Orange 'i' Dot */}
      <circle cx="32" cy="18" r="2.5" fill="#F7931E" />
    </svg>
  );
}

// Official Razorpay Lightning Razor Logo
export function RazorpayLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#0C2340" />
      <path
        d="M15 34L26 14H32L21 34H15ZM24.5 26.5L30 16H35.5L28.5 29.5L24.5 26.5Z"
        fill="#008CFF"
      />
      <path d="M22 28.5L28 34H33.5L25.5 27L22 28.5Z" fill="#FFFFFF" />
    </svg>
  );
}

// Official Cashfree Payments Rupee Circle Logo
export function CashfreeLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#0E2138" />
      <circle cx="24" cy="24" r="13" stroke="#00C49A" strokeWidth="3" fill="none" />
      {/* Rupee symbol inside */}
      <path d="M19 18H29M19 22H29M19 18V26C19 28.5 22 30 25 30M22 26L28 32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Official Google Sheets Folded Document Grid Logo
export function GoogleSheetsLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#0F9D58" />
      <path
        d="M15 12C13.9 12 13 12.9 13 14V34C13 35.1 13.9 36 15 36H33C34.1 36 35 35.1 35 34V21L26 12H15Z"
        fill="#FFFFFF"
      />
      <path d="M26 12V20C26 20.6 26.4 21 27 21H35" fill="#A1E0C2" />
      <rect x="17" y="24" width="14" height="2" fill="#0F9D58" />
      <rect x="17" y="28" width="14" height="2" fill="#0F9D58" />
      <rect x="17" y="32" width="14" height="2" fill="#0F9D58" />
      <rect x="23" y="24" width="2" height="10" fill="#0F9D58" />
    </svg>
  );
}

// Official Gmail 4-Color Envelope Logo
export function GmailLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <path d="M12 16V32H17V22.5L24 27.5L31 22.5V32H36V16L24 25L12 16Z" fill="#EA4335" />
      <path d="M12 16V32H17V22.5L12 18.8V16Z" fill="#4285F4" />
      <path d="M36 16V32H31V22.5L36 18.8V16Z" fill="#34A853" />
      <path d="M31 16L24 21.5L17 16H12L24 25L36 16H31Z" fill="#FBBC04" />
    </svg>
  );
}

// Official Zapier Orange Asterisk Logo
export function ZapierLogo({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="12" fill="#FF4A00" />
      <path
        d="M24 11V37M11 24H37M15 15L33 33M15 33L33 15"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

