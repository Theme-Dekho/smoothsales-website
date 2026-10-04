"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  SearchX,
  PlayCircle,
  MessageSquare,
  Mail,
  ArrowRight,
  BookOpen,
  Video,
  Clock,
  CheckCircle2,
  Layers,
  HelpCircle,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { TUTORIALS } from "@/lib/tutorials.config";
import { TutorialCard } from "@/components/marketing/tutorial-card";
import { motion, AnimatePresence } from "framer-motion";

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically compute unique categories and counts from the data
  const { categoriesWithCounts, totalCount, topicTrackCount } = useMemo(() => {
    const counts = { All: TUTORIALS.length };
    const uniqueCats = new Set();

    TUTORIALS.forEach((t) => {
      uniqueCats.add(t.category);
      counts[t.category] = (counts[t.category] || 0) + 1;
    });

    const categoryList = ["All", ...Array.from(uniqueCats)];
    return {
      categoriesWithCounts: categoryList.map((cat) => ({
        name: cat,
        count: counts[cat] || 0,
      })),
      totalCount: TUTORIALS.length,
      topicTrackCount: uniqueCats.size,
    };
  }, []);

  // Filter tutorials by selectedCategory AND searchQuery
  const filteredTutorials = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return TUTORIALS.filter((tut) => {
      const matchesCategory =
        selectedCategory === "All" || tut.category === selectedCategory;
      const matchesQuery =
        !query ||
        tut.title.toLowerCase().includes(query) ||
        tut.description.toLowerCase().includes(query) ||
        tut.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const currentYear = new Date().getFullYear();

  const whatsappSupportUrl =
    "https://wa.me/919820145892?text=" +
    encodeURIComponent(
      "Hi SmoothSales Support Team, I am watching the Knowledge Base tutorials and need assistance with my setup."
    );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* SECTION 1 — Page Header */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0C0D1A]/70 backdrop-blur-md">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-r from-cyan-500/15 via-primary/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {/* Eyebrow */}
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/30 text-primary bg-primary/10 inline-flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Knowledge Base · {currentYear}</span>
            </Badge>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Learn SmoothSales,{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              one short video at a time
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            From setting up your first pipeline to automating WhatsApp follow-ups,
            every workflow your team needs — in short, practical videos.
          </p>

          {/* 4 Animated Stat Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#121324] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-heading font-black text-primary dark:text-cyan-400">
                {totalCount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400">
                Tutorials
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#121324] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-heading font-black text-emerald-500">
                {topicTrackCount}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400">
                Topic Tracks
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#121324] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-heading font-black text-indigo-500">
                24×7
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400">
                Self-Serve
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#121324] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col items-center justify-center">
              <span className="text-xl sm:text-2xl font-heading font-black text-amber-500">
                100%
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400">
                Free Access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Search + Filter Bar */}
      <section className="sticky top-16 z-30 py-4 px-4 sm:px-6 bg-slate-50/95 dark:bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto space-y-3.5">
          {/* Top Row: Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              aria-label="Search tutorials"
              placeholder="Search tutorials by name, workflow, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 pl-10 pr-10 rounded-full bg-white dark:bg-[#121324] border-slate-200 dark:border-white/15 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm focus-visible:ring-primary"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Bottom Row: Pill-style topic filter tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
            {categoriesWithCounts.map(({ name, count }) => {
              const isActive = selectedCategory === name;
              return (
                <button
                  key={name}
                  onClick={() => setSelectedCategory(name)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                      : "bg-white dark:bg-[#121324] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <span>{name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Tutorial Grid & Empty State */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto min-h-[450px]">
        {filteredTutorials.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTutorials.map((tut, idx) => (
                <TutorialCard key={tut.id} tutorial={tut} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="py-16 sm:py-24 text-center space-y-4 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 mx-auto">
              <SearchX className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                No tutorials found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                No video guides matched &quot;{searchQuery}&quot; in topic &quot;{selectedCategory}&quot;.
                Try clearing your search or selecting another topic track.
              </p>
            </div>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              variant="outline"
              size="sm"
              className="rounded-full text-xs font-semibold"
            >
              Reset Filters &amp; Search
            </Button>
          </div>
        )}
      </section>

      {/* SECTION 4 — Support CTA Band */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <Card className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-transparent p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="space-y-2 max-w-xl mx-auto">
            <Badge
              variant="outline"
              className="text-xs font-semibold text-primary border-primary/30 bg-primary/10 inline-flex items-center gap-1.5"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Human Assistance</span>
            </Badge>

            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Still stuck? Talk to a human.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Our support team responds within a few hours on business days to help you configure
              pipelines, verify WhatsApp templates, or import contacts.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={whatsappSupportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-11 px-6 rounded-full font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </Button>
            </a>

            <a href="mailto:support@smoothsales.ai">
              <Button
                variant="outline"
                className="h-11 px-6 rounded-full font-semibold border-slate-300 dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/10 gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email Support</span>
              </Button>
            </a>
          </div>
        </Card>
      </section>

      {/* Rich Footer */}
      <RichFooter />
    </div>
  );
}
