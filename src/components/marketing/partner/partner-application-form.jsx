"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Building,
  Mail,
  PhoneCall,
  Globe,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Handshake,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { trackLeadSubmission } from "@/lib/tracking";

const VERTICALS = [
  "Real Estate & Brokers",
  "Education & Admissions",
  "BFSI & Loans",
  "Healthcare & Clinics",
  "Digital Marketing / Ads",
  "Interior Design & Fitouts",
  "B2B Tech / SaaS",
  "Other Industry",
];

export function PartnerApplicationForm({ prefilledTrack, prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteUrl: "",
    partnerTrack: "agency",
    expectedClients: "4-10 Clients",
    selectedVerticals: ["Real Estate & Brokers", "Digital Marketing / Ads"],
    notes: "",
    agreeToTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled track if passed from other components (Hero/Calculator/Tracks)
  useEffect(() => {
    if (prefilledTrack) {
      setFormData((prev) => ({
        ...prev,
        partnerTrack: prefilledTrack,
      }));
    }
  }, [prefilledTrack]);

  const toggleVertical = (vertical) => {
    setFormData((prev) => {
      const exists = prev.selectedVerticals.includes(vertical);
      if (exists) {
        return {
          ...prev,
          selectedVerticals: prev.selectedVerticals.filter((v) => v !== vertical),
        };
      } else {
        return {
          ...prev,
          selectedVerticals: [...prev.selectedVerticals, vertical],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in your name, email, and WhatsApp phone number.");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please accept the partner program terms to proceed.");
      return;
    }

    setIsSubmitting(true);

    // Track lead submission in dataLayer / Google Ads
    trackLeadSubmission({
      source: "partner_application_form",
      vertical: formData.partnerTrack,
      teamSize: formData.expectedClients,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Partner Application Submitted!", {
        description:
          "Your application has been received. Our Head of Partnerships will review and reach out on WhatsApp within 12 hours.",
      });
    }, 1100);
  };

  const whatsappFastTrackUrl =
    "https://wa.me/919820145892?text=" +
    encodeURIComponent(
      `Hi SmoothSales Partnerships Team! I just submitted an application for the ${formData.partnerTrack.toUpperCase()} Partner Program for ${
        formData.companyName || formData.fullName
      }. Could we fast-track our onboarding call?`
    );

  return (
    <section id="partner-application-form" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Container Card */}
      <div className="bg-white dark:bg-[#0E0F1E] border border-slate-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="text-center py-10 sm:py-16 space-y-6 max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-500">
              <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" />
            </div>

            <Badge
              variant="outline"
              className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
            >
              Application Successfully Registered
            </Badge>

            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Welcome to the{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                SmoothSales Partner Family!
              </span>
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Thank you, <strong>{formData.fullName}</strong>. We have logged your application under{" "}
              <strong>{formData.companyName || "Independent Partner"}</strong>. A dedicated Partner Success Manager will reach out to schedule your 15-minute onboarding and activate your dashboard.
            </p>

            {/* Fast-track WhatsApp CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappFastTrackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-7 text-sm font-bold rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20ba59] hover:to-[#199d4d] text-white shadow-md shadow-[#25D366]/20 gap-2 font-heading cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-white stroke-none" />
                  <span>Fast-Track on WhatsApp</span>
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto h-12 px-6 text-sm font-semibold rounded-xl border-slate-300 dark:border-white/15 cursor-pointer"
              >
                <span>Edit / Submit Another</span>
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-white/5 text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>Attribution protection initialized for {formData.email}</span>
            </div>
          </div>
        ) : (
          /* APPLICATION FORM */
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <Badge
                variant="outline"
                className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
              >
                <Handshake className="h-3.5 w-3.5" />
                <span>Partner Onboarding Form</span>
              </Badge>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
                Apply for SmoothSales{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  Partner Certification
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                Takes less than 2 minutes. Approved partners receive instant sandbox access, marketing collateral, and a designated WhatsApp hotline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 pt-2">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>Full Name *</span>
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="h-11 rounded-xl bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    <span>Work Email Address *</span>
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="rahul@growthagency.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 rounded-xl bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-sm"
                  />
                </div>
              </div>

              {/* Row 2: WhatsApp Phone & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <PhoneCall className="h-3.5 w-3.5 text-slate-400" />
                    <span>WhatsApp Mobile Number *</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="w-16 h-11 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 shrink-0">
                      +91
                    </div>
                    <Input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 rounded-xl bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-sm flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5 text-slate-400" />
                    <span>Company / Agency / Practice Name</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g. Apex Marketing Solutions"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="h-11 rounded-xl bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Website URL & Expected Clients */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-slate-400" />
                    <span>Website or LinkedIn Profile</span>
                  </label>
                  <Input
                    type="url"
                    placeholder="https://youragency.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="h-11 rounded-xl bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Expected Quarterly Client Referrals
                  </label>
                  <select
                    value={formData.expectedClients}
                    onChange={(e) => setFormData({ ...formData, expectedClients: e.target.value })}
                    className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-[#141526] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1-3 Clients">1 - 3 Clients per quarter</option>
                    <option value="4-10 Clients">4 - 10 Clients per quarter</option>
                    <option value="11-25 Clients">11 - 25 Clients per quarter</option>
                    <option value="25+ Clients">25+ Clients (Enterprise / Master Distributor)</option>
                  </select>
                </div>
              </div>

              {/* Partnership Track Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Select Desired Partnership Track *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                  {[
                    { id: "agency", label: "Agency & Reseller", share: "35% Share" },
                    { id: "referral", label: "Referral / Affiliate", share: "20% Share" },
                    { id: "integrator", label: "System Integrator", share: "Tech / API" },
                    { id: "channel", label: "Channel Master", share: "White-Label" },
                  ].map((track) => (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, partnerTrack: track.id })}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        formData.partnerTrack === track.id
                          ? "border-primary bg-primary/10 ring-1 ring-primary shadow-xs"
                          : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {track.label}
                      </div>
                      <div className="text-[11px] font-mono text-primary dark:text-cyan-400 mt-0.5">
                        {track.share}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Verticals (Multi-select pill chips) */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Target Industries You Serve (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {VERTICALS.map((vertical) => {
                    const active = formData.selectedVerticals.includes(vertical);
                    return (
                      <button
                        key={vertical}
                        type="button"
                        onClick={() => toggleVertical(vertical)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                          active
                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xs"
                            : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20"
                        }`}
                      >
                        {active && <Check className="h-3 w-3" />}
                        <span>{vertical}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Brief Overview of Your Business &amp; Target Clients
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a few details about your services, existing client base, or any upcoming real estate / tech deals you plan to bring on board..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer accent-primary"
                />
                <label htmlFor="agreeTerms" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                  I agree to the SmoothSales Partner Program terms, 90-day deal attribution rules, and automated GST/commission distribution policies.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-sky-600 hover:from-primary/90 hover:to-sky-500 text-white shadow-lg shadow-primary/25 gap-2 font-heading active:scale-[0.99] transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit Partner Application &amp; Unlock Portal</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
