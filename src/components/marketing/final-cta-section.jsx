"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAppUrl, getAdminUrl, getPartnersUrl } from "@/lib/constants";

export function FinalCta() {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent(
    "Hi SmoothSales team, I'd like to see a demo of SmoothSales.ai for my sales team."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#0A0A10] text-white py-12 sm:py-14 px-4 sm:px-6 relative overflow-hidden w-full border-t border-white/10">
      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] max-w-full bg-primary/15 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-500/10 text-[11px] font-semibold font-mono uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>High-Velocity Conversions Guaranteed</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Start closing more deals{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
            this week.
          </span>
        </h2>

        <p className="text-xs sm:text-[13px] text-[#A0A2B5] max-w-lg mx-auto leading-relaxed">
          Eliminate lead leaks, distribute enquiries in under 60 seconds, and put
          channel partner commissions on autopilot.
        </p>

        {/* 3 CTA Buttons Row (Including India-Market Dedicated WhatsApp CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
          {/* CTA 1: Primary Start Free Trial */}
          <Link href={getAppUrl("/signup")} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-11 px-7 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-primary to-sky-600 hover:from-primary/90 hover:to-sky-500 text-white shadow-md shadow-primary/25 gap-2 font-heading active:scale-[0.98] transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          {/* CTA 2: Dedicated WhatsApp Us Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-11 px-6 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20ba59] hover:to-[#199d4d] text-white shadow-md shadow-[#25D366]/20 gap-2 font-heading active:scale-[0.98] transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-white stroke-none" />
              WhatsApp Us
            </Button>
          </a>

          {/* CTA 3: Outline Book a Demo */}
          <Link href="/pricing" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-11 px-6 text-xs sm:text-sm font-semibold rounded-xl border border-white/20 bg-white/[0.06] text-white hover:bg-white/10 active:scale-[0.98] transition-all font-heading shadow-2xs"
            >
              Book a Demo
            </Button>
          </Link>
        </div>

        <p className="text-[11px] text-white/40 pt-1">
          No credit card required Â· Instant sandbox access Â· 14-day full feature trial
        </p>
      </div>
    </section>
  );
}

export function RichFooter() {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi SmoothSales, I want to inquire about custom enterprise setups."
  )}`;

  return (
    <footer className="bg-[#0A0A0F] text-slate-400 border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 text-xs">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-6 lg:gap-8">
          {/* Col 1: Brand & Contact info */}
          <div className="sm:col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-cyan-400/30 shadow-md shadow-cyan-500/20 shrink-0">
                <img
                  src="/images/smoothsales-logo.jpg"
                  alt="SmoothSales.ai"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-extrabold text-sm text-white tracking-tight">
                SmoothSales<span className="text-cyan-400 font-normal">.ai</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
              The high-velocity sales &amp; partner CRM built for India&apos;s fastest-growing companies.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div>DLF Cyber City, Tower B</div>
              <div>Gurugram, Haryana 122002</div>
              <div>support@smoothsales.ai</div>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Product
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Plans
                </Link>
              </li>
              <li>
                <Link href={getAppUrl("/dashboard")} className="hover:text-white transition-colors">
                  Live Demo App
                </Link>
              </li>
              <li>
                <Link href="/#problem-fix" className="hover:text-white transition-colors">
                  Smart Lead Routing
                </Link>
              </li>
              <li>
                <Link href={getPartnersUrl("/white-label")} className="hover:text-white transition-colors">
                  Partner Commission Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Solutions
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href={getAppUrl("/onboarding/business-details")} className="hover:text-white transition-colors">
                  Real Estate Sales CRM
                </Link>
              </li>
              <li>
                <Link href={getAppUrl("/onboarding/business-details")} className="hover:text-white transition-colors">
                  Education Admissions CRM
                </Link>
              </li>
              <li>
                <Link href={getAppUrl("/onboarding/business-details")} className="hover:text-white transition-colors">
                  Interior Design Studio CRM
                </Link>
              </li>
              <li>
                <Link href="/#problem-fix" className="hover:text-white transition-colors">
                  WhatsApp Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Company
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href={getAppUrl("/signup")} className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
              <li>
                <Link href={getAdminUrl("/dashboard")} className="hover:text-white transition-colors">
                  Super Admin Portal
                </Link>
              </li>
              <li>
                <Link href={getPartnersUrl("/referral")} className="hover:text-white transition-colors">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Resources */}
          <div className="space-y-3">
            <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Legal &amp; Help
            </div>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Help Center &amp; Docs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Refund &amp; Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            Â© 2026 SmoothSales.ai Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>â€¢</span>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>â€¢</span>
            <Link href="/pricing" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FinalCtaSection() {
  return (
    <>
      <FinalCta />
      <RichFooter />
    </>
  );
}

