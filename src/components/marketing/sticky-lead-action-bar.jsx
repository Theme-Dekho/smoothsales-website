"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, MessageSquare, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "./lead-modal-context";
import { trackClickToCall, trackClickWhatsApp } from "@/lib/tracking";

export function StickyLeadActionBar() {
  const { openLeadModal } = useLeadModal();
  const [isVisible, setIsVisible] = useState(false);

  // Show bar after user scrolls down 120px, or immediately after 2 seconds
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(() => setIsVisible(true), 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const phoneDisplay = "+91 98201 45892";
  const phoneTel = "tel:+919820145892";
  const whatsappUrl = `https://wa.me/919820145892?text=${encodeURIComponent(
    "Hi SmoothSales team, I am interested in seeing a demo of the CRM for our team."
  )}`;

  const handlePhoneClick = () => {
    trackClickToCall(phoneDisplay, "sticky_action_bar");
  };

  const handleWhatsAppClick = () => {
    trackClickWhatsApp("sticky_action_bar");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* ================= Mobile Bottom Dock (sm:hidden) ================= */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 dark:bg-[#0c0d1c]/95 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-3 py-2.5 shadow-2xl safe-area-pb"
          >
            <div className="flex items-center gap-2 max-w-md mx-auto">
              {/* Call Now */}
              <a
                href={phoneTel}
                onClick={handlePhoneClick}
                className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-100 hover:bg-slate-200 transition-colors"
                aria-label="Call SmoothSales sales team"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <PhoneCall className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>Call Now</span>
                </div>
                <span className="text-[9px] text-slate-500 dark:text-slate-400">Direct Line</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-600/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
                aria-label="Chat on WhatsApp with SmoothSales"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600 stroke-none" />
                  <span>WhatsApp</span>
                </div>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Instant Reply
                </span>
              </a>

              {/* Book Demo Modal Trigger */}
              <Button
                onClick={() => openLeadModal("mobile_sticky_dock")}
                size="sm"
                className="flex-[1.4] h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs rounded-xl shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Book Demo</span>
              </Button>
            </div>
          </motion.div>

          {/* ================= Desktop Floating Dock (hidden sm:flex) ================= */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center gap-2.5 p-2 rounded-2xl bg-white/90 dark:bg-[#121324]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-2xl"
          >
            {/* Direct Phone Call Button */}
            <a
              href={phoneTel}
              onClick={handlePhoneClick}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-100 text-xs font-semibold transition-all border border-slate-200/60 dark:border-white/5"
              title="Call our Gurugram Sales Desk"
            >
              <PhoneCall className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>{phoneDisplay}</span>
            </a>

            {/* WhatsApp Quick Pill */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold transition-all border border-emerald-500/20"
              title="Chat instantly with our Solutions Engineers"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600 stroke-none" />
              <span>WhatsApp Us</span>
            </a>

            {/* Primary Demo Modal Trigger */}
            <Button
              onClick={() => openLeadModal("desktop_sticky_bar")}
              className="h-9 px-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-md shadow-primary/25 gap-1.5 cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book 1-on-1 Demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
