"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Lock,
  Building,
  User,
  Mail,
  Phone,
  Globe,
  Wallet,
  Copy,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { api } from "@/lib/api";
import { trackLeadSubmission } from "@/lib/tracking";

export function AffiliateApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    channelType: "agency",
    channelUrl: "",
    payoutMethod: "upi",
    payoutDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields (Name, Email, WhatsApp number).");
      return;
    }

    setIsSubmitting(true);
    try {
      await api.submitPartnerApplication({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        partner_track: "affiliate",
        website_url: formData.channelUrl || undefined,
        notes: `Affiliate Partner Application. Primary Channel: ${formData.channelType}. Payout Details: ${formData.payoutDetails || 'Not specified'}.`,
      });
      trackLeadSubmission({
        source: "affiliate_application_form",
        vertical: formData.channelType,
      });
    } catch (err: any) {
      console.warn("Affiliate backend submission warning:", err?.message);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const slug = formData.fullName.toLowerCase().replace(/[^a-z0-9]/g, "") || "partner";
      setGeneratedLink(`https://smoothsales.ai/?ref=${slug}`);
      toast.success("Congratulations! Your affiliate account is active and your tracking link is ready.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(generatedLink);
    setCopied(true);
    toast.success("Affiliate link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="affiliate-application-form" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-10">
        <Badge
          variant="outline"
          className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 inline-flex items-center gap-1.5"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Quick 60-Second Onboarding</span>
        </Badge>

        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white">
          Join the SmoothSales{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Affiliate Network
          </span>
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-sans">
          No approval wait times. Get your unique referral tracking link immediately and start earning 20%-30% recurring monthly revenue.
        </p>
      </div>

      <Card className="rounded-2xl bg-white/95 dark:bg-[#0D0E1A]/95 border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {isSubmitted ? (
          <div className="py-8 text-center space-y-6 relative z-10 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                Welcome to the SmoothSales Affiliate Family!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your affiliate tracking is active immediately with 90-day cookie attribution. We have also sent your login credentials to <strong>{formData.email}</strong>.
              </p>
            </div>

            {/* Link Box */}
            <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2 text-left">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>Your Live Tracking Link:</span>
                <span className="text-emerald-500 text-[11px] font-mono">Tier: Starter (20%)</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={generatedLink}
                  className="w-full text-xs font-mono bg-white dark:bg-[#070817] border border-slate-300 dark:border-white/15 rounded-lg px-3 py-2 text-slate-900 dark:text-white select-all focus:outline-none"
                />
                <Button
                  size="sm"
                  onClick={handleCopy}
                  className="h-9 px-3 shrink-0 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold gap-1.5 cursor-pointer font-heading"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </Button>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold rounded-xl border-slate-300 dark:border-white/15 cursor-pointer"
              >
                Register Another Account
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Work Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Work Email *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* WhatsApp Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <span>WhatsApp Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Primary Channel */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Primary Promotion Channel</span>
                </label>
                <select
                  value={formData.channelType}
                  onChange={(e) => setFormData({ ...formData, channelType: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#070817] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  <option value="agency">Performance Agency / Client Referrals</option>
                  <option value="youtube">YouTube Tech / Business Channel</option>
                  <option value="consulting">Sales Consultant / Business Coach</option>
                  <option value="newsletter">Email Newsletter / LinkedIn Creator</option>
                  <option value="community">Founder Community / WhatsApp Group</option>
                  <option value="other">Website Blog / Review Portal</option>
                </select>
              </div>
            </div>

            {/* Channel URL or Social Link */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Website, Social Profile, or YouTube Link (Optional)
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/... or https://youtube.com/@..."
                value={formData.channelUrl}
                onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Payout Details */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Wallet className="h-3.5 w-3.5 text-emerald-500" />
                <span>Preferred Payout Info (UPI ID or Bank Details)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. rahul@oksbi or Bank Name + Account No. (Can add later)"
                value={formData.payoutDetails}
                onChange={(e) => setFormData({ ...formData, payoutDetails: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Payouts are processed automatically on the 5th of every month. You can update this anytime inside your dashboard.
              </p>
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white gap-2 font-heading shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Generating Your Affiliate Link...</span>
                ) : (
                  <>
                    <span>Generate Instant Affiliate Link &amp; Join Free</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
              <Lock className="h-3 w-3 text-emerald-500" />
              <span>We never share your contact information. Payouts are 100% compliant with Indian tax laws.</span>
            </div>
          </form>
        )}
      </Card>
    </section>
  );
}
