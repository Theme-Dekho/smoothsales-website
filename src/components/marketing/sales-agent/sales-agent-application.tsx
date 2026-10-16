"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface AgentFormData {
  name: string;
  phone: string;
  city: string;
  experience: string;
  estimatedDeals: string;
}

export function SalesAgentApplication() {
  const [formData, setFormData] = useState<AgentFormData>({
    name: "",
    phone: "",
    city: "",
    experience: "b2b_field",
    estimatedDeals: "5-10",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      toast.error("Please enter your name, mobile number, and city.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Application received! Our partner team will call you within 24 hours.");
    }, 900);
  };

  return (
    <section id="apply-section" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50 dark:bg-[#070817] transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-white dark:bg-[#0E1126] border border-slate-200/90 dark:border-white/10 p-6 sm:p-12 shadow-xl overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
                START YOUR JOURNEY
              </span>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Apply as a Business Partner
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Fill in your details below to unlock your demo kit, partner dashboard, and ₹999 refundable onboarding.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  Application Received, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Our dedicated Partner Success Manager will reach out on{" "}
                  <strong className="text-emerald-600 dark:text-emerald-400">{formData.phone}</strong> to guide you through your onboarding walkthrough and demo access.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-heading font-semibold text-slate-700 dark:text-slate-200">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-11 bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-xs sm:text-sm rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-heading font-semibold text-slate-700 dark:text-slate-200">
                      Mobile Number (WhatsApp) *
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-xs sm:text-sm rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-heading font-semibold text-slate-700 dark:text-slate-200">
                      City &amp; State *
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Pune, Maharashtra"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="h-11 bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-xs sm:text-sm rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-heading font-semibold text-slate-700 dark:text-slate-200">
                      Your Sales Background
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full h-11 px-3 bg-slate-50 dark:bg-[#0B0E23] border border-slate-200 dark:border-white/10 text-xs sm:text-sm rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="b2b_field">B2B Field Sales (JustDial, IndiaMart, Sulekha, etc.)</option>
                      <option value="independent">Sales Professional Going Independent</option>
                      <option value="entrepreneur">Aspiring Entrepreneur / Team Builder</option>
                      <option value="consultant">Local Agency / Consultant</option>
                      <option value="wfh">Work-From-Home / Part-Time</option>
                      <option value="student">Student / Early Career</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-sm font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 active:scale-[0.98] transition-all font-heading cursor-pointer gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Partner Application</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                  <span>100% Refundable ₹999 fee on crossing 20 users or 8 workspaces</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
