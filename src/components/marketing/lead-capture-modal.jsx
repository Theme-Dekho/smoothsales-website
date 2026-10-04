"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Building,
  Mail,
  User,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLeadModal } from "./lead-modal-context";
import { trackLeadSubmission, trackClickWhatsApp } from "@/lib/tracking";

const VERTICALS = [
  "Real Estate Developers & Mandates",
  "Education & EdTech",
  "Channel Partner Brokerages",
  "Finance & Loan Distributors",
  "Healthcare & Clinics",
  "Other High-Growth Business",
];

const TEAM_SIZES = [
  "1 - 10 Reps (< 500 leads/mo)",
  "11 - 50 Reps (500 - 3,000 leads/mo)",
  "51 - 200 Reps (3,000 - 15,000 leads/mo)",
  "200+ Reps Enterprise (> 15,000 leads/mo)",
];

export function LeadCaptureModal() {
  const { isOpen, modalSource, closeLeadModal } = useLeadModal();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vertical: VERTICALS[0],
    teamSize: TEAM_SIZES[1],
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeLeadModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeLeadModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form slightly after close animation
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);

    const generatedRef = "SS-" + Math.floor(100000 + Math.random() * 900000);
    setLeadRef(generatedRef);

    // Track Google Ads & Analytics conversion
    trackLeadSubmission({
      source: modalSource || "google_ads_popup",
      vertical: formData.vertical,
      teamSize: formData.teamSize,
      leadRef: generatedRef,
    });

    // Simulate lead ingestion / webhook dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Demo Request Received!", {
        description: `Ref ID: ${generatedRef}. A specialist is reviewing your requirements.`,
      });
    }, 850);
  };

  const whatsappDirectUrl = `https://wa.me/919820145892?text=${encodeURIComponent(
    `Hi SmoothSales team, I just requested a demo (Ref: ${leadRef || "DIRECT"}). Can we schedule a quick 15-minute walkthrough for ${
      formData.fullName || "our team"
    }?`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLeadModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111222] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden my-auto z-10 text-slate-900 dark:text-white"
          >
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-indigo-500 to-emerald-500" />

            {/* Close Button */}
            <button
              onClick={closeLeadModal}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {isSuccess ? (
              /* Success Screen */
              <div className="p-6 sm:p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20 shadow-inner">
                  <CheckCircle2 className="h-9 w-9 stroke-[2.2]" />
                </div>

                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide">
                    INQUIRY DISPATCHED • REF: {leadRef}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                    We&apos;re On It!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-slate-900 dark:text-white">{formData.fullName}</strong>. A Senior Solutions Consultant will call or WhatsApp you at{" "}
                    <strong className="text-emerald-600 dark:text-emerald-400 font-mono">+91 {formData.phone}</strong> in under 15 minutes.
                  </p>
                </div>

                {/* Priority WhatsApp Fast Track */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      Want an instant demo right now?
                    </span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Online Now
                    </span>
                  </div>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClickWhatsApp("modal_success_fast_track")}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md hover:shadow-emerald-600/25"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat With Sales on WhatsApp (Priority)</span>
                  </a>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={closeLeadModal}
                    variant="outline"
                    className="w-full rounded-xl text-xs font-semibold"
                  >
                    Done &amp; Return to Website
                  </Button>
                </div>
              </div>
            ) : (
              /* Lead Capture Form */
              <div className="p-6 sm:p-8 space-y-5">
                <div className="space-y-1.5 pr-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-wide">
                    <Sparkles className="h-3 w-3" />
                    <span>PRIORITY DEMO &amp; PRICING</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                    Experience SmoothSales Live
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Get a personalized 15-minute walkthrough of sub-60s round-robin routing, WhatsApp automation, and broker commission ledger.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" />
                      <span>Full Name <span className="text-rose-500">*</span></span>
                    </label>
                    <Input
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-10 text-xs sm:text-sm bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 rounded-xl"
                    />
                  </div>

                  {/* Phone + Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <PhoneCall className="h-3.5 w-3.5 text-primary" />
                        <span>Phone / WhatsApp <span className="text-rose-500">*</span></span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                          +91
                        </span>
                        <Input
                          required
                          type="tel"
                          placeholder="98201 45892"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-12 h-10 text-xs sm:text-sm bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-primary" />
                        <span>Work Email</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 text-xs sm:text-sm bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Vertical & Team Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-primary" />
                        <span>Industry / Vertical</span>
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full h-10 text-xs bg-slate-50 dark:bg-[#17192f] border border-slate-200 dark:border-white/10 rounded-xl px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        {VERTICALS.map((v) => (
                          <option key={v} value={v} className="bg-white dark:bg-[#17192f]">
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>Team Size / Leads</span>
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full h-10 text-xs bg-slate-50 dark:bg-[#17192f] border border-slate-200 dark:border-white/10 rounded-xl px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        {TEAM_SIZES.map((s) => (
                          <option key={s} value={s} className="bg-white dark:bg-[#17192f]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 text-xs sm:text-sm font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg shadow-primary/20 gap-2 cursor-pointer mt-1"
                  >
                    {isSubmitting ? (
                      <span>Reserving Your Demo Slot...</span>
                    ) : (
                      <>
                        <span>Confirm Live 1-on-1 Walkthrough</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {/* Trust Footer */}
                  <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                      100% Free &amp; Zero Spam
                    </span>
                    <span>•</span>
                    <span>15-Minute Guaranteed Response</span>
                    <span>•</span>
                    <span>AWS Mumbai ISO Compliant</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
