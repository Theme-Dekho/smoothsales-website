"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, PhoneCall, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/constants";

export function ChatWidgetBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi, I'm exploring SmoothSales.ai for my team. Can we schedule a quick demo?"
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popover Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-[330px] max-w-[360px] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden text-foreground flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold text-xs">
                    SS
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">
                    SmoothSales Assistant
                  </div>
                  <div className="text-[10px] text-primary-foreground/80 flex items-center gap-1">
                    <span>Typically replies in under 1 min</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-primary-foreground/20 text-primary-foreground transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3.5 bg-muted/20 text-xs">
              <div className="p-3 rounded-xl bg-card border border-border space-y-1.5 shadow-xs">
                <div className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Namaste! Welcome to SmoothSales.
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Looking for a custom demo or want to see how we route 10,000+ leads across India daily?
                </p>
              </div>

              {/* Direct WhatsApp Action Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/80 transition-all text-emerald-900 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600 stroke-none" />
                    <span className="text-xs font-bold">Chat with Sales on WhatsApp</span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[10px] text-emerald-700 mt-1">
                  Instant response from our team in Gurugram &amp; Bengaluru
                </p>
              </a>

              <div className="space-y-1.5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Actions
                </div>
                <a
                  href="/pricing"
                  className="block p-2 rounded-lg bg-card border border-border hover:border-primary/40 text-[11px] font-medium text-foreground transition-all"
                >
                  Explore pricing plans &amp; calculator â†’
                </a>
                <a
                  href={getAppUrl("/dashboard")}
                  className="block p-2 rounded-lg bg-card border border-border hover:border-primary/40 text-[11px] font-medium text-foreground transition-all"
                >
                  Open live interactive product demo â†’
                </a>
              </div>
            </div>

            {/* Footer Input Placeholder */}
            <div className="p-3 border-t border-border bg-card flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask us anything..."
                className="flex-1 text-xs bg-muted/40 rounded-lg px-3 py-2 border border-border focus:outline-none focus:ring-1 focus:ring-primary"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open(whatsappUrl, "_blank");
                  }
                }}
              />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="icon" className="h-8 w-8 rounded-lg bg-primary text-primary-foreground shrink-0">
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Continuous Pulse Ring */}
      <div className="relative">
        {/* Continuous Pulse Ring behind button */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1.5 rounded-full bg-primary/40 -z-10"
        />

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all cursor-pointer flex items-center justify-center border border-primary-foreground/20"
          aria-label={isOpen ? "Close chat" : "Open chat widget"}
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
          ) : (
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
          )}
        </Button>
      </div>
    </div>
  );
}

