"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if not previously dismissed in session/localStorage
    try {
      const dismissed = localStorage.getItem("smoothsales_cookie_consent");
      if (!dismissed) {
        // Small delay so it appears smoothly after page load
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem("smoothsales_cookie_consent", "true");
    } catch {}
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Cookie consent banner" className="fixed bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto">
      <div className="bg-slate-900/95 dark:bg-[#121320]/95 backdrop-blur-md border border-slate-700/60 dark:border-white/15 text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 text-xs">
        <div className="p-1.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
          <Cookie className="h-4 w-4 text-cyan-400" />
        </div>

        <div className="space-y-2 flex-1">
          <p className="text-slate-300 leading-relaxed text-[11.5px]">
            We use essential cookies to maintain secure sessions, route leads smoothly, and improve our services. By continuing, you agree to our{" "}
            <Link
              href="/privacy-policy"
              className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="flex items-center gap-2 pt-0.5">
            <Button
              size="sm"
              onClick={handleDismiss}
              className="h-7 px-3 text-[11px] font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Accept Cookies
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-7 px-2.5 text-[11px] text-slate-400 hover:text-white rounded-lg"
            >
              Dismiss
            </Button>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors shrink-0"
          aria-label="Close cookie banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
