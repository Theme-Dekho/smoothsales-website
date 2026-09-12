import { Manrope, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { ChatWidgetBubble } from "@/components/marketing/chat-widget-bubble";

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

export const metadata = {
  title: "SmoothSales.ai â€” High-Velocity Sales & Partner CRM for Indian Teams",
  description:
    "Unite WhatsApp enquiries, portal leads, sub-60s round-robin dispatch, and automated broker commission tracking in one high-velocity CRM.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col antialiased relative">
            <MarketingNavbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <ChatWidgetBubble />
          </div>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
