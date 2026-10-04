"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RichFooter } from "@/components/marketing/final-cta-section";
import { toast } from "sonner";

const BLOG_POSTS = [
  {
    id: "lead-leakage-real-estate",
    title: "Why Real Estate Teams Lose 43% of Their Inbound Leads in Under 15 Minutes",
    excerpt:
      "A deep dive into lead response latency across Jaipur and Delhi NCR property developers, and how automated routing cuts contact delay from hours to 85 seconds.",
    category: "Real Estate",
    date: "March 18, 2026",
    readTime: "5 min read",
    gradient: "from-blue-600/30 via-indigo-600/20 to-cyan-500/30",
    author: "Aditya Vardhan",
    authorRole: "Founder & Product Lead",
  },
  {
    id: "whatsapp-cloud-api-playbook",
    title: "The Ultimate Playbook for WhatsApp Business Cloud API Lead Conversions",
    excerpt:
      "Stop getting numbers blocked by unofficial bulk sender scripts. Learn how official Meta Cloud templates generate 3.4x higher response rates for high-ticket sales.",
    category: "Automation",
    date: "March 12, 2026",
    readTime: "7 min read",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-500/30",
    author: "Meera Sen",
    authorRole: "Head of Growth",
  },
  {
    id: "channel-partner-attribution",
    title: "Attribution Locking: How to Prevent Broker Commission Disputes Forever",
    excerpt:
      "Explore how 60-day phone number attribution locks and transparent self-serve ledgers motivate channel partners to bring their best exclusive inventory.",
    category: "Channel Sales",
    date: "March 08, 2026",
    readTime: "6 min read",
    gradient: "from-purple-600/30 via-pink-600/20 to-amber-500/30",
    author: "Rohan Kapoor",
    authorRole: "Partner Operations",
  },
  {
    id: "edtech-admissions-velocity",
    title: "Scaling Admissions Pipelines: How Coaching Institutes Double Enrollment Velocity",
    excerpt:
      "How multi-center education institutions distribute entrance test inquiries based on batch capacities and branch pin-codes with automated round-robin routing.",
    category: "Education",
    date: "February 27, 2026",
    readTime: "4 min read",
    gradient: "from-amber-600/30 via-orange-600/20 to-red-500/30",
    author: "Priya Sharma",
    authorRole: "Enterprise Solutions",
  },
  {
    id: "white-label-agency-revenue",
    title: "How Marketing Agencies Add ₹5L+ in Monthly Recurring Revenue with White-Label CRMs",
    excerpt:
      "Stop handing your ad clients over to generic CRMs. Brand your own software portal, manage client sub-tenants, and protect retention with custom subdomains.",
    category: "Agencies",
    date: "February 20, 2026",
    readTime: "8 min read",
    gradient: "from-cyan-600/30 via-blue-600/20 to-purple-500/30",
    author: "Aditya Vardhan",
    authorRole: "Founder & Product Lead",
  },
  {
    id: "sla-call-dispositions",
    title: "The Science of Stale Lead Reassignment: Stop Wasting Paid Facebook Ad Spend",
    excerpt:
      "When a sales rep sits on a lead without calling, your cost per acquisition skyrockets. Here is how auto-reassignment rules enforce discipline without micromanagement.",
    category: "Sales Ops",
    date: "February 14, 2026",
    readTime: "5 min read",
    gradient: "from-rose-600/30 via-red-600/20 to-orange-500/30",
    author: "Karan Johar",
    authorRole: "Customer Success",
  },
];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Real Estate", "Automation", "Channel Sales", "Education", "Agencies", "Sales Ops"];

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const handlePostClick = (postTitle) => {
    toast.info("Article Coming Soon", {
      description: `"${postTitle}" is scheduled for full release in our Q2 2026 Editorial Series.`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-card/60 backdrop-blur py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4 text-center">
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group mb-2"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Insights &amp; Strategy</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              The SmoothSales Growth Journal
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Tactical insights on stopping lead leakage, optimizing high-velocity sales pipelines, and scaling agency partner channels.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary font-semibold"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Post Cards */}
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              onClick={() => handlePostClick(post.title)}
              className="group overflow-hidden border border-border bg-card rounded-xl shadow-xs hover:shadow-lg hover:border-primary/40 transition-all cursor-pointer flex flex-col"
            >
              {/* Abstract Gradient Art Header */}
              <div className={`h-40 w-full bg-gradient-to-br ${post.gradient} relative p-4 flex flex-col justify-between border-b border-border/50 group-hover:scale-[1.02] transition-transform`}>
                <Badge variant="outline" className="w-fit text-[10.5px] uppercase font-mono font-bold bg-background/80 backdrop-blur border-border">
                  {post.category}
                </Badge>
                <div className="text-[11px] font-mono text-foreground/80 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                  <div className="text-[11px] text-muted-foreground">
                    By <span className="font-semibold text-foreground">{post.author}</span>
                  </div>
                  <span className="text-primary font-semibold flex items-center gap-1 text-[11.5px] group-hover:translate-x-0.5 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <RichFooter />
    </div>
  );
}
