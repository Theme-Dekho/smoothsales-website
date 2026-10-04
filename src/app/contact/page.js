"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Send,
  Building,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { getAppUrl } from "@/lib/constants";
import { toast } from "sonner";
import { trackLeadSubmission } from "@/lib/tracking";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "500 - 2,000 Leads/mo",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please enter your name and phone number");
      return;
    }

    setIsSubmitting(true);
    trackLeadSubmission({
      source: "contact_page_form",
      vertical: formData.company || "contact_inquiry",
      teamSize: formData.volume,
    });
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Inquiry Submitted Successfully!", {
        description: "A solutions engineer will reach out on WhatsApp in < 15 minutes.",
      });
    }, 1000);
  };

  const whatsappUrl =
    "https://wa.me/919820145892?text=" +
    encodeURIComponent("Hi SmoothSales Team, I would like to schedule a demo and discuss our sales pipeline.");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/15 via-rose-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Connect with SmoothSales</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Let&apos;s Accelerate Your{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Sales Pipeline
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Have questions about custom WhatsApp templates, high-volume lead routing, or migrating
            from an existing CRM? Our engineering and solutions team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Details & Interactive Form */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact Info & Fast Reach */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/20">
                15-Min Response Guarantee
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                We Practice What We Preach: Instant Response
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Just like our CRM routes your leads in under 60 seconds, our solutions desk responds
                within 15 minutes during business hours.
              </p>
            </div>

            {/* Quick Channel Cards */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500 transition-all hover:scale-[1.01] group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <span>Live WhatsApp Desk</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      +91 98201 45892
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">Sales &amp; Enterprise Inquiries</div>
                    <a href="mailto:sales@smoothsales.ai" className="text-sm font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors">
                      sales@smoothsales.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500">Corporate Innovation Hub</div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                      SmoothSales Technologies Pvt Ltd, Malviya Nagar Tech Park, Jaipur, Rajasthan 302017
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Checkmarks */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-2.5">
              {[
                "Zero obligation pipeline & lead-leakage audit",
                "Assisted migration from spreadsheets, LeadSquared or HubSpot",
                "Custom WhatsApp template approval assistance with Meta",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="border-slate-200 dark:border-white/15 bg-white dark:bg-[#121324] rounded-3xl p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you {formData.name}. Our solutions specialist has received your inquiry and
                    will reach out to you on WhatsApp (+91 {formData.phone}) within 15 minutes.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                      Request a Consultation or Quote
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill in your details below and we&apos;ll prepare custom benchmarks for your team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <Input
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-10 text-xs rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        WhatsApp Number *
                      </label>
                      <Input
                        placeholder="e.g. 9820145892"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-10 text-xs rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work Email
                      </label>
                      <Input
                        type="email"
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 text-xs rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Company / Brand Name
                      </label>
                      <Input
                        placeholder="e.g. Horizon Developers"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-10 text-xs rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Estimated Monthly Inbound Leads
                    </label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 dark:border-white/15 bg-transparent text-xs font-sans text-slate-900 dark:text-white"
                    >
                      <option value="Under 500 Leads/mo" className="dark:bg-[#121324]">Under 500 Leads/mo (Starter Plan)</option>
                      <option value="500 - 2,000 Leads/mo" className="dark:bg-[#121324]">500 - 2,000 Leads/mo (Growth Plan)</option>
                      <option value="2,000 - 10,000 Leads/mo" className="dark:bg-[#121324]">2,000 - 10,000 Leads/mo (Scale Plan)</option>
                      <option value="10,000+ Leads/mo (Custom Enterprise)" className="dark:bg-[#121324]">10,000+ Leads/mo (Custom Enterprise)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your sales team, current lead sources, or specific challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-white/15 bg-transparent text-xs font-sans text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-heading"
                  >
                    {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
                  </Button>

                  <p className="text-[11px] text-center text-slate-500">
                    Your information is protected under our strict Privacy Policy. No spam or sharing.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <RichFooter />
    </div>
  );
}
