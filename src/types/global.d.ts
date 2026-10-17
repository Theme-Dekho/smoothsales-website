export {};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    GOOGLE_ADS_CONVERSION_SEND_TO?: string;
  }
}
