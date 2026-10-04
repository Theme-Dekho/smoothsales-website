"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  PlayCircle,
  Zap,
  MessageSquare,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  PhoneCall,
  Laptop,
  Check,
  Send,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { getAppUrl } from "@/lib/constants";
import { toast } from "sonner";

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("simulator");
  const [simStep, setSimStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vertical: "Real Estate",
    teamSize: "5-15 Callers",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoBooked, setDemoBooked] = useState(false);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => {
      setSimStep(2);
      setTimeout(() => {
        setSimStep(3);
        setTimeout(() => {
          setSimStep(4);
          setIsSimulating(false);
          toast.success("Simulation Complete!", {
            description: "Lead routed and WhatsApp brochure dispatched in 850 milliseconds.",
          });
        }, 1200);
      }, 1200);
    }, 1200);
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDemoBooked(true);
      toast.success("Demo Request Received!", {
        description: "Our solutions architect will contact you on WhatsApp within 15 minutes.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/15 via-primary/10 to-cyan-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-emerald-500/30 text-emerald-500 bg-emerald-500/10 inline-flex items-center gap-1.5"
          >
            <PlayCircle className="h-3.5 w-3.5" />
            <span>Interactive Simulator &amp; Video Tour</span>
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            See SmoothSales in{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-primary to-cyan-400 bg-clip-text text-transparent">
              High-Velocity Action
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Test our sub-60s round-robin engine live in the interactive sandbox below, or book a personalized 1-on-1 walkthrough tailored to your vertical.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab("simulator")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "simulator"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-white dark:bg-[#121324] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive Simulator
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "videos"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-white dark:bg-[#121324] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Video Walkthroughs
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "schedule"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-white dark:bg-[#121324] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Schedule 1-on-1 Demo
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Content Area */}
      <section className="py-12 sm:py-18 px-4 sm:px-6 max-w-6xl mx-auto">
        {activeTab === "simulator" && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-mono font-bold text-primary">
                Live Sub-60s Dispatch Sandbox
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                Experience the 85-Second Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Click the button below to simulate an inbound buyer inquiry arriving from Meta Ads.
              </p>
            </div>

            {/* Simulation Dashboard Card */}
            <Card className="border-slate-200 dark:border-white/15 bg-white dark:bg-[#121324] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
              {/* Trigger Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      Inbound Lead Generator
                    </div>
                    <div className="text-xs text-slate-500">Source: Meta Lead Ads (Jaipur 3BHK Campaign)</div>
                  </div>
                </div>

                <Button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="h-11 px-6 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md gap-2"
                >
                  {isSimulating ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>Processing Lead...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 fill-current" />
                      <span>Simulate Inbound Lead</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Simulation Sequence Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8">
                {/* Step 1 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 1
                      ? "border-primary/50 bg-primary/5 shadow-md"
                      : "border-slate-200 dark:border-white/10 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] font-mono">STEP 1</Badge>
                    {simStep >= 1 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Instant Ingestion
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Lead &quot;Vikram Malhotra (+91 98201... )&quot; ingested via Meta Webhook in 120ms.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 2
                      ? "border-primary/50 bg-primary/5 shadow-md"
                      : "border-slate-200 dark:border-white/10 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] font-mono">STEP 2</Badge>
                    {simStep >= 2 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Round-Robin Dispatch
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Assigned to rep &quot;Aman Verma&quot; (active shift, 3/10 lead capacity).
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 3
                      ? "border-primary/50 bg-primary/5 shadow-md"
                      : "border-slate-200 dark:border-white/10 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] font-mono">STEP 3</Badge>
                    {simStep >= 3 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                    WhatsApp Welcome Kit
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Meta Cloud API dispatched &quot;Sun City Villas 3BHK Brochure.pdf&quot; to buyer.
                  </p>
                </div>

                {/* Step 4 */}
                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    simStep >= 4
                      ? "border-primary/50 bg-primary/5 shadow-md"
                      : "border-slate-200 dark:border-white/10 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] font-mono">STEP 4</Badge>
                    {simStep >= 4 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Rep 15m SLA Started
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Stopwatch active: Rep dialed prospect in 42s. Lead disposition set to &quot;Site Visit&quot;.
                  </p>
                </div>
              </div>

              {/* Bottom Sandbox CTAs */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Ready to test with your actual sales reps and inbound lead sources?
                </div>
                <div className="flex items-center gap-3">
                  <a href={getAppUrl("/signup")}>
                    <Button size="sm" className="h-9 px-4 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 text-xs">
                      Start 14-Day Free Trial
                    </Button>
                  </a>
                  <a href={getAppUrl("/dashboard")}>
                    <Button variant="outline" size="sm" className="h-9 px-4 rounded-full font-semibold border-slate-300 dark:border-white/15 text-xs">
                      Open Live CRM App
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "videos" && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-mono font-bold text-primary">
                Product Masterclasses
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                Guided Video Walkthroughs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Watch deep-dive walkthroughs on setting up round-robin pipelines and WhatsApp automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "End-to-End Real Estate Pipeline Setup",
                  duration: "6 mins",
                  views: "1.4k views",
                  desc: "Watch how a Jaipur builder captures leads from 99acres and auto-dispatches brochures on WhatsApp.",
                },
                {
                  title: "Meta Lead Ads & Official WhatsApp API",
                  duration: "8 mins",
                  views: "2.1k views",
                  desc: "Connect your Facebook Ad account and trigger official Meta message templates in under 10 minutes.",
                },
                {
                  title: "Channel Partner Ledgers & Attribution",
                  duration: "5 mins",
                  views: "980 views",
                  desc: "Lock phone number attribution for 60 days and automate broker commission payouts with zero disputes.",
                },
              ].map((video, idx) => (
                <Card
                  key={idx}
                  className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#121324] rounded-2xl overflow-hidden shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-950 relative flex items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-[10.5px] font-mono text-white">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white leading-snug">
                        {video.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 dark:border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>{video.views}</span>
                      <span className="text-primary font-semibold">Watch Now &rarr;</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-xs uppercase font-mono font-bold text-primary">
                1-on-1 Solution Architecture
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                Book a Live Guided Walkthrough
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Our solutions engineer will audit your current lead leakage and demonstrate SmoothSales on a live custom setup.
              </p>
            </div>

            <Card className="border-slate-200 dark:border-white/15 bg-white dark:bg-[#121324] rounded-3xl p-6 sm:p-8 shadow-xl">
              {demoBooked ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    You&apos;re All Set!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our lead architect will contact you on WhatsApp (+91 {formData.phone}) with meeting calendar invites.
                  </p>
                  <Button
                    onClick={() => setDemoBooked(false)}
                    variant="outline"
                    className="rounded-full text-xs font-semibold"
                  >
                    Book Another Session
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <Input
                        placeholder="e.g. Vikram Singhania"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                        placeholder="vikram@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 text-xs rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Business Vertical
                      </label>
                      <select
                        value={formData.vertical}
                        onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                        className="w-full h-10 px-3 rounded-xl border border-slate-200 dark:border-white/15 bg-transparent text-xs font-sans text-slate-900 dark:text-white"
                      >
                        <option value="Real Estate" className="dark:bg-[#121324]">Real Estate &amp; Builders</option>
                        <option value="Education" className="dark:bg-[#121324]">Education &amp; Admissions</option>
                        <option value="Interior Design" className="dark:bg-[#121324]">Interior Design Studio</option>
                        <option value="Agency" className="dark:bg-[#121324]">Marketing Agency / White-Label</option>
                        <option value="Other" className="dark:bg-[#121324]">Other B2B / High-Ticket</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md font-heading"
                  >
                    {isSubmitting ? "Booking Guided Demo..." : "Confirm 1-on-1 Walkthrough"}
                  </Button>

                  <p className="text-[11px] text-center text-slate-500">
                    No spam ever. 15-minute response guarantee during business hours.
                  </p>
                </form>
              )}
            </Card>
          </div>
        )}
      </section>

      {/* Rich Footer */}
      <RichFooter />
    </div>
  );
}
