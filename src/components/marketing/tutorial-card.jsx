"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function TutorialCard({ tutorial, index = 0 }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    id,
    index: numIndex,
    category,
    categoryLabel,
    title,
    description,
    videoEmbedUrl,
    videoOpenUrl,
    durationLabel,
    thumbnailGradient = "from-slate-800 to-slate-950",
    badgeColor = "bg-primary/10 text-primary border-primary/20",
  } = tutorial;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.3) }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#121324] shadow-xs hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5">
        {/* Top: Video / Thumbnail Canvas */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200/60 dark:border-white/10">
          {isPlaying ? (
            <iframe
              src={videoEmbedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className={`w-full h-full bg-gradient-to-br ${thumbnailGradient} p-4 flex flex-col justify-between cursor-pointer group-hover:scale-[1.02] transition-transform duration-300 select-none`}
            >
              {/* Top Row: Category Badge + HD Tag */}
              <div className="flex items-center justify-between z-10">
                <Badge
                  variant="outline"
                  className={`text-[10px] uppercase font-mono font-bold tracking-wider backdrop-blur-md ${badgeColor}`}
                >
                  {category}
                </Badge>
                <span className="text-[10px] font-mono uppercase font-bold text-white/80 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  1080p HD
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-13 h-13 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-115 group-hover:bg-primary transition-all duration-300">
                  <Play className="h-6 w-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Row: Duration Label */}
              <div className="flex items-center justify-between z-10">
                <div className="text-[11px] font-medium text-white/70 flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  <Clock className="h-3 w-3" />
                  <span>{durationLabel || "5 min"}</span>
                </div>
                <span className="text-[10px] text-white/80 font-semibold bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm group-hover:text-cyan-300 transition-colors">
                  Click to Play
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Index & Category Label line */}
            <div className="text-[11px] font-mono font-bold tracking-wider text-slate-400 dark:text-cyan-400/80 uppercase">
              {numIndex} · {categoryLabel}
            </div>

            {/* Title (H3, 2-line clamp) */}
            <h3
              title={title}
              className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-200"
            >
              {title}
            </h3>

            {/* Description (2-3 line clamp) */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-sans">
              {description}
            </p>
          </div>

          {/* Footer Action Bar */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
            <span className="text-[11.5px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Tutorial Video</span>
            </span>

            <div className="flex items-center gap-2">
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="font-bold text-primary dark:text-cyan-400 hover:underline text-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Play</span>
                  <Play className="h-3 w-3 fill-current" />
                </button>
              )}

              <a
                href={videoOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-semibold px-2.5 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                title="Open video in external player"
              >
                <span>Open</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
