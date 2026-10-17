"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { trackLeadSubmission } from "@/lib/tracking";

export interface SalesAgentHeroProps {
  onApplyClick?: () => void;
  onExploreClick?: () => void;
}

export function SalesAgentHero({ onApplyClick, onExploreClick }: SalesAgentHeroProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [waUpdates, setWaUpdates] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    { num: 1, label: "Mobile" },
    { num: 2, label: "Name" },
    { num: 3, label: "Occupation" },
    { num: 4, label: "City" },
    { num: 5, label: "Meeting Time" },
  ];

  const handleNext = async () => {
    if (currentStep === 1) {
      if (!mobile.trim() || mobile.trim().length < 10) {
        toast.error("Please enter a valid 10-digit mobile number");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!name.trim()) {
        toast.error("Please enter your name");
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!occupation.trim()) {
        toast.error("Please enter your occupation / field");
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!city.trim()) {
        toast.error("Please enter your city");
        return;
      }
      setCurrentStep(5);
    } else if (currentStep === 5) {
      if (!meetingTime.trim()) {
        toast.error("Please select a preferred meeting time");
        return;
      }
      try {
        await api.submitSalesAgentApplication({
          full_name: name.trim(),
          phone: mobile.trim(),
          city: city.trim(),
          experience: occupation.trim(),
          notes: `Business Partner Application. Occupation: ${occupation}. Preferred Meeting Time: ${meetingTime}. WhatsApp Updates: ${waUpdates ? 'Yes' : 'No'}.`,
        });
        trackLeadSubmission({
          source: 'sales_agent_hero_wizard',
          vertical: occupation,
          teamSize: city,
        });
        setIsSuccess(true);
        toast.success("Application received! Our partner team will connect with you.");
      } catch (err: any) {
        toast.error(err?.message || "Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-6 bg-white dark:bg-[#070817] border-b border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-primary dark:hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-slate-300 dark:text-slate-600">›</span>
          <span className="text-primary dark:text-cyan-400">Become a Business Partner</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading + Interactive Wizard Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                Become A Business Partner{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  With SmoothSales.ai
                </span>
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300 font-sans">
                No CRM to run, no billing to chase —{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                  meet clients, close the demo, get paid.
                </span>
              </p>
            </div>

            {/* 5-Step Wizard Card */}
            <div id="apply" className="rounded-2xl border-2 border-primary/80 dark:border-cyan-500/80 bg-white dark:bg-[#0E1126] shadow-xl overflow-hidden relative">
              {/* Ribbon Header Tag */}
              <div className="bg-primary dark:bg-cyan-600 text-white text-xs sm:text-sm font-heading font-bold py-2.5 px-4 flex items-center justify-between">
                <span>Register to Become a Partner</span>
                <span className="text-[11px] font-mono opacity-90">Step {currentStep} of 5</span>
              </div>

              {/* Step Indicators */}
              <div className="flex items-center gap-1 sm:gap-2 px-4 py-3 bg-slate-50 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/10 overflow-x-auto text-xs font-semibold">
                {steps.map((st, i) => (
                  <React.Fragment key={st.num}>
                    <div
                      className={`flex items-center gap-1 whitespace-nowrap ${
                        currentStep >= st.num
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-400 dark:text-slate-600"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                          currentStep >= st.num
                            ? "bg-primary text-white dark:bg-cyan-500 dark:text-slate-950"
                            : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        {st.num}
                      </span>
                      <span>{st.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <span className="text-slate-300 dark:text-slate-700">›</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Wizard Body */}
              <div className="p-5 sm:p-6 space-y-4">
                {isSuccess ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-heading font-bold text-slate-900 dark:text-white">
                      Application Received!
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto font-sans">
                      Our Partner Acquisition Team will call you on{" "}
                      <strong className="text-primary dark:text-cyan-400">{mobile}</strong> within 24 hours to schedule your walkthrough and live demo kit.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Step 1: Mobile */}
                    {currentStep === 1 && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <div className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 shrink-0">
                            <span>🇮🇳 +91</span>
                          </div>
                          <input
                            type="tel"
                            maxLength={10}
                            placeholder="Enter 10-digit mobile number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
                          />
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm cursor-pointer transition-colors shrink-0"
                          >
                            ›
                          </button>
                        </div>

                        <div className="space-y-1.5 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                          <label className="flex items-start gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreed}
                              onChange={(e) => setAgreed(e.target.checked)}
                              className="mt-0.5 rounded text-primary"
                            />
                            <span>
                              By clicking, I agree to SmoothSales.ai{" "}
                              <Link href="/terms-of-service" className="text-primary dark:text-cyan-400 underline">
                                Terms &amp; Conditions
                              </Link>
                            </span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={waUpdates}
                              onChange={(e) => setWaUpdates(e.target.checked)}
                              className="rounded text-primary"
                            />
                            <span>I want to receive updates on WhatsApp</span>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Name */}
                    {currentStep === 2 && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
                          />
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm cursor-pointer transition-colors"
                          >
                            ›
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Step 2 of 5 — Tell us how you&apos;d like us to address you.
                        </p>
                      </div>
                    )}

                    {/* Step 3: Occupation */}
                    {currentStep === 3 && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="e.g. Field Sales Executive, Independent Consultant"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
                          />
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm cursor-pointer transition-colors"
                          >
                            ›
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Step 3 of 5 — Helps us tailor the product training to your background.
                        </p>
                      </div>
                    )}

                    {/* Step 4: City */}
                    {currentStep === 4 && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="e.g. Pune, Jaipur, Delhi NCR, Lucknow"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
                          />
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm cursor-pointer transition-colors"
                          >
                            ›
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Step 4 of 5 — Your local territory of operation.
                        </p>
                      </div>
                    )}

                    {/* Step 5: Meeting Time */}
                    {currentStep === 5 && (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <select
                            value={meetingTime}
                            onChange={(e) => setMeetingTime(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0B0E23] text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
                          >
                            <option value="">Select Preferred Time</option>
                            <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                            <option value="afternoon">Afternoon (2:00 PM – 5:00 PM)</option>
                            <option value="evening">Evening (5:00 PM – 8:00 PM)</option>
                          </select>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm cursor-pointer transition-colors"
                          >
                            Submit
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          Last Step — When would you prefer our acquisition manager to call?
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: What You Get as a Business Partner */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                What You Get as a{" "}
                <span className="text-primary dark:text-cyan-400">Business Partner</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                Step into a payout-based field sales role — you meet the client, run the demo, and close the sale. Everything else — the product, billing, and support — is already built for you.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 font-sans">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  ✓
                </span>
                <span>Earn upto ₹1,35,000+ per month in payout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  ✓
                </span>
                <span>You&apos;re selling a big, trusted brand — makes closing simple</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  ✓
                </span>
                <span>Full product demo, pricing sheet &amp; marketing help provided</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  ✓
                </span>
                <span>Work your own area, anytime you want</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-md bg-teal-500 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  ✓
                </span>
                <span>You&apos;re a partner, not an employee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Stat Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E1126] p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary dark:text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
              ₹1.35L
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                Monthly Payout
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Earn up to ₹1,35,000+/mo on 900+ active users
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E1126] p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
              ₹999
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                100% Refundable
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Auto-refunded once you sell 20 users or 8 workspaces
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E1126] p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
              Zero
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                Product Risk
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                Customer support, billing &amp; refunds handled by us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
