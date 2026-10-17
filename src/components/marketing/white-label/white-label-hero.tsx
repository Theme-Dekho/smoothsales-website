"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building,
  Sparkles,
  Phone,
  Send,
  Building2,
  TrendingUp,
  Headphones,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { trackLeadSubmission } from "@/lib/tracking";
import { api } from "@/lib/api";

export function WhiteLabelHero() {
  const [step, setStep] = useState<number>(1);
  const [phone, setPhone] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);
  const [whatsappUpdates, setWhatsappUpdates] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!phone || phone.replace(/\D/g, "").length < 10) {
        toast.error("Please enter a valid 10-digit mobile number");
        return;
      }
      if (!agreedTerms) {
        toast.error("Please agree to the Terms & Conditions");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!businessName.trim()) {
        toast.error("Please enter your business or agency name");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!city.trim()) {
        toast.error("Please enter your city");
        return;
      }
      setIsSubmitting(true);
      try {
        await api.submitWhiteLabelApplication({
          full_name: businessName.trim() || `Partner +91${phone}`,
          phone,
          city,
          experience: 'white_label_partner',
          notes: `White Label Partner Application. Business Name: ${businessName}. City: ${city}. WhatsApp Updates: ${whatsappUpdates ? 'Yes' : 'No'}.`,
        });
        trackLeadSubmission({
          source: "become_a_partner_white_label",
          vertical: businessName,
          teamSize: city,
        });
        setIsSubmitted(true);
        toast.success("Application received! Our Partner Acquisition Team will contact you within 24 hours.");
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 font-medium">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="text-slate-900 dark:text-white font-semibold">
          Become a Partner
        </span>
      </nav>

      {/* Main 2-Column Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading + Multi-Step Registration Card */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Become A White Label Partner{" "}
              <span className="bg-gradient-to-r from-sky-500 via-primary to-cyan-500 dark:from-sky-400 dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
                With SmoothSales.ai Today!
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans">
              backend, billing &amp; support handled{" "}
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                end-to-end
              </strong>{" "}
              for you
            </p>
          </div>

          {/* Registration Card */}
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#0E1126]/90 backdrop-blur-xl p-5 sm:p-7 shadow-xl shadow-slate-200/50 dark:shadow-black/60 relative overflow-hidden">
            {/* Subtle top gradient accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-primary to-indigo-500" />

            {!isSubmitted ? (
              <form onSubmit={handleNextStep} className="space-y-5">
                {/* Steps Breadcrumbs */}
                <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono font-medium pb-1 border-b border-slate-100 dark:border-white/5">
                  <span
                    className={`flex items-center gap-1.5 transition-colors ${
                      step >= 1
                        ? "text-primary dark:text-cyan-400 font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        step >= 1
                          ? "bg-primary text-white dark:bg-cyan-400 dark:text-slate-950 font-bold"
                          : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      1
                    </span>
                    <span>Mobile Number</span>
                  </span>
                  <ChevronRight className="h-3 w-3 text-slate-300 dark:text-white/20" />
                  <span
                    className={`flex items-center gap-1.5 transition-colors ${
                      step >= 2
                        ? "text-primary dark:text-cyan-400 font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        step >= 2
                          ? "bg-primary text-white dark:bg-cyan-400 dark:text-slate-950 font-bold"
                          : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      2
                    </span>
                    <span>Business Name</span>
                  </span>
                  <ChevronRight className="h-3 w-3 text-slate-300 dark:text-white/20" />
                  <span
                    className={`flex items-center gap-1.5 transition-colors ${
                      step >= 3
                        ? "text-primary dark:text-cyan-400 font-bold"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        step >= 3
                          ? "bg-primary text-white dark:bg-cyan-400 dark:text-slate-950 font-bold"
                          : "bg-slate-200 dark:bg-white/10"
                      }`}
                    >
                      3
                    </span>
                    <span>City</span>
                  </span>
                </div>

                <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  Register to Become a Partner
                </div>

                {/* Step 1: Mobile */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50/70 dark:bg-white/[0.04] overflow-hidden focus-within:border-primary dark:focus-within:border-cyan-400 transition-colors shadow-2xs">
                      <div className="flex items-center gap-1.5 px-3.5 border-r border-slate-200 dark:border-white/15 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/60 dark:bg-white/[0.03]">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        placeholder="Enter Mobile Number"
                        className="flex-1 bg-transparent px-3.5 py-3 text-xs sm:text-sm outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-sans"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-4 bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                        title="Next step"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreedTerms}
                          onChange={(e) => setAgreedTerms(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 dark:border-white/20 text-primary focus:ring-primary/40 cursor-pointer"
                        />
                        <span>
                          By clicking, I agree to SmoothSales.ai{" "}
                          <Link
                            href="/terms-of-service"
                            className="text-primary dark:text-cyan-400 hover:underline font-semibold"
                          >
                            Terms &amp; Conditions
                          </Link>
                        </span>
                      </label>

                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={whatsappUpdates}
                          onChange={(e) => setWhatsappUpdates(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 dark:border-white/20 text-primary focus:ring-primary/40 cursor-pointer"
                        />
                        <span>I want to receive updates on WhatsApp</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 2: Business / Agency Name */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Business or Agency Name
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. Apex Digital Solutions"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="h-11 text-xs sm:text-sm bg-slate-50/70 dark:bg-white/[0.04]"
                        autoFocus
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setStep(1)}
                        className="text-xs h-9"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        size="sm"
                        className="text-xs h-9 flex-1 bg-primary text-white font-bold"
                      >
                        Continue to City
                        <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: City & Scale */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Operational City
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. Mumbai, Bengaluru, Jaipur"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="h-11 text-xs sm:text-sm bg-slate-50/70 dark:bg-white/[0.04]"
                        autoFocus
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setStep(2)}
                        className="text-xs h-9"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="sm"
                        className="text-xs h-9 flex-1 bg-gradient-to-r from-cyan-500 to-primary text-white font-bold shadow-md shadow-primary/20"
                      >
                        {isSubmitting ? "Submitting Application..." : "Submit Partner Application"}
                        <Send className="h-3.5 w-3.5 ml-1.5" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="py-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    Application Received!
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-800 dark:text-slate-200">{businessName}</strong>. Our Partner Acquisition Team will reach out to <strong className="text-slate-800 dark:text-slate-200">+91 {phone}</strong> within 24 hours.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="text-xs h-8"
                >
                  Register Another Account
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Narrative + 6 Emerald Value Props */}
        <div className="lg:col-span-6 space-y-6 lg:pt-3">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Become a White Label Partner with SmoothSales.ai
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
              Step into a CRM reselling business where you set the pricing, own the customer, and keep the margin — with zero infrastructure to build or maintain.
            </p>
          </div>

          {/* 6 Value Checkmark Bullets */}
          <div className="space-y-3">
            {[
              "Your brand, your pricing, your profit",
              "100% risk-free — pay only for users you actually sell",
              "Zero infrastructure to build",
              "Work from anywhere in India",
              "L2/L3 technical support included",
              "Unlimited, isolated workspaces",
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Highlights Metric Cards Bar (Image 1 middle) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16">
        {/* Card 1 */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 text-indigo-600 dark:text-cyan-400 flex items-center justify-center font-mono font-extrabold text-xs shrink-0">
            ₹10L+
          </div>
          <div className="space-y-0.5">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              Earning Potential
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
              Up to ₹10,08,000/year on 200 users sold
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-600 dark:text-indigo-400 flex items-center justify-center font-mono font-extrabold text-xs shrink-0">
            ₹15K
          </div>
          <div className="space-y-0.5">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              Ways to Start
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
              ₹15,000 starter pack, or a refundable ₹2,000 setup
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-extrabold text-xs shrink-0">
            L1–L3
          </div>
          <div className="space-y-0.5">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              Support Tiers
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
              You handle L1, we back you up on L2 &amp; L3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
