"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sun, Moon, Menu, X, Sparkles, Kanban, Users, Shield, Zap, Info, Layers, BookOpen, Tag, PlaySquare, PhoneCall, Handshake } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { getAppUrl, getAdminUrl, getPartnersUrl } from "@/lib/constants";
import { useLeadModal } from "./lead-modal-context";

export function MarketingNavbar() {
  const { openLeadModal } = useLeadModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // const { setTheme, resolvedTheme } = useTheme();
  // const isDark = resolvedTheme === "dark";
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className={`fixed inset-x-0 z-50 transition-all duration-500 ease-out flex justify-center ${
        isScrolled
          ? "top-2 sm:top-4 px-3 sm:px-6 pointer-events-none"
          : "top-0 px-0 pointer-events-auto"
      }`}
    >
      <header
        className={`w-full transition-all duration-500 ease-out flex items-center justify-between pointer-events-auto ${
          // new added
          isScrolled
            ? "max-w-6xl rounded-2xl sm:rounded-full bg-white/95 dark:bg-[#0B0C16]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/15 shadow-xl dark:shadow-2xl shadow-slate-200/40 dark:shadow-black/80 py-2.5 sm:py-3 px-4 sm:px-7"
            : "w-full rounded-none bg-white/80 dark:bg-[#0A0A0F]/80 backdrop-blur-md border-b border-slate-200/40 dark:border-white/5 py-3 sm:py-4 px-4 sm:px-8"
        }`}
      >
        {/* Brand Mark with Generated Official Logo */}
        <Link 
        // href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 lg:ml-[9%]">
          href="/" className={`flex items-center gap-2.5 sm:gap-3 group shrink-0 transition-all duration-500 ease-out ${
            isScrolled ? "ml-0" : "lg:ml-[9%]"
          }`} >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-cyan-400/40 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/images/smoothsales-logo.jpg"
              alt="SmoothSales.ai Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 dark:text-white">
            SmoothSales<span className="text-primary dark:text-cyan-400 font-normal"></span>
          </span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav 
        // className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-semibold text-slate-600 dark:text-[#A0A0B8]">
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-6 whitespace-nowrap text-[13px] font-semibold text-slate-600 dark:text-[#A0A0B8]">
          {/* <Link
            href="/about"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            About
          </Link> */}

          <Link
            href="/features"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Features
          </Link>

          <Link
            href="/integrations"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Integration
          </Link>

          {/* <Link
            href="/help-center"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Knowledge Base
          </Link> */}

          <Link
            href="/pricing"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Pricing
          </Link>

          <Link
            href="/demo"
            className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <span>Demo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          </Link>

          <Link
            href="/contact"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            Contact
          </Link>

          {/* <Link
            href="/partners"
            className="hover:text-slate-900 dark:hover:text-white transition-colors py-1 flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold"
          >
            <span>Partners</span>
          </Link> */}

          {/* Commented out previous cross-service links as requested:
          <Link href="/#problem-fix" className="hover:text-slate-900 dark:hover:text-white transition-colors py-1">
            How It Works
          </Link>
          <Link href={getAppUrl("/dashboard")} className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span>Live CRM Demo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          </Link>
          <Link href={getPartnersUrl("/white-label")} className="hover:text-slate-900 dark:hover:text-white transition-colors py-1">
            Partners Portal
          </Link>
          <Link href={getAdminUrl("/dashboard")} className="hover:text-slate-900 dark:hover:text-white transition-colors py-1">
            Super Admin
          </Link>
          */}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div 
        // className="flex items-center gap-2 sm:gap-3 shrink-0">
        className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            aria-label="Toggle light or dark theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/15 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-700 dark:text-white/80 shadow-xs hover:scale-105 active:scale-95 shrink-0"
          >
            {isDark ? (
              <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 fill-amber-400/20" />
            ) : (
              <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-700 fill-slate-700/20" />
            )}
          </button>

          {/* Sign In (Desktop) */}
          {/* <Link href={getAppUrl("/login")} className="hidden sm:inline-block"> */}
          <Link href="/sign-in" className="hidden sm:inline-block">
            <Button
              variant="ghost"
              size="sm"
              className="h-8.5 sm:h-9 px-3 sm:px-3.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all rounded-full"
            >
              Sign In
            </Button>
          </Link>

          {/* Become a Partner (Desktop) */}
          {/* <Link href="/partners" className="hidden lg:inline-flex">
            <Button
              variant="outline"
              size="sm"
              className="h-8 sm:h-9 px-3 sm:px-3.5 text-xs font-semibold rounded-full border-cyan-500/40 text-cyan-700 dark:text-cyan-300 bg-cyan-500/5 hover:bg-cyan-500/15 hover:border-cyan-500/70 transition-all cursor-pointer gap-1.5 shadow-2xs"
            >
              <Handshake className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Become a Partner</span>
            </Button>
          </Link> */}

          {/* Book Demo (Desktop) */}
          {/* <Button
            onClick={() => openLeadModal("navbar_desktop")}
            variant="outline"
            size="sm"
            className="hidden md:inline-flex h-8 sm:h-9 px-3.5 text-xs font-semibold rounded-full border-primary/30 text-primary hover:bg-primary/10 transition-all cursor-pointer"
          >
            <span>Book Demo</span>
          </Button> */}

          {/* Start Free Trial */}
          {/* <Link href={getAppUrl("/signup")}> */}
          {/* <Link href="/sign-up">
            <Button
              size="sm"
              className="h-8 sm:h-9.5 px-3 sm:px-5 text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md shadow-primary/25 hover:scale-105 transition-all gap-1.5 sm:gap-2 font-heading"
            >
              <span>Trial</span>
              <span className="hidden sm:inline">Free</span>
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </Button>
          </Link> */}
          {/* Start Free Trial */}
          {/* <Link href={getAppUrl("/signup")}> */}
          <Link href="/sign-up">
            <Button
              size="sm"
              className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md shadow-primary/25 transition-all gap-1.5 sm:gap-2 font-heading"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </Button>
          </Link>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            aria-label="Open mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border bg-slate-100/90 dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-800 dark:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Glassmorphic Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-16 z-50 rounded-2xl bg-white/98 dark:bg-[#0E0E18]/98 backdrop-blur-2xl border border-slate-200 dark:border-white/15 shadow-2xl p-4 sm:p-5 space-y-4 pointer-events-auto animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-white/10">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-white/40 px-2 pb-1">
              Navigation
            </div>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span>About</span>
              <Info className="h-3.5 w-3.5 text-cyan-500" />
            </Link>

            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span>Features</span>
              <Layers className="h-3.5 w-3.5 text-purple-500" />
            </Link>

            <Link
              href="/help-center"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span>Knowledge Base</span>
              <BookOpen className="h-3.5 w-3.5 text-blue-500" />
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span>Pricing</span>
              <Tag className="h-3.5 w-3.5 text-amber-500" />
            </Link>

            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>Demo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <PlaySquare className="h-3.5 w-3.5 text-emerald-500" />
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <span>Contact</span>
              <PhoneCall className="h-3.5 w-3.5 text-rose-500" />
            </Link>

            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>Become a Partner</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/30 font-mono">
                  35% Payout
                </span>
              </div>
              <Handshake className="h-3.5 w-3.5 text-cyan-500" />
            </Link>

            {/* Commented out previous cross-service links as requested:
            <Link href="/#problem-fix" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <span>How It Works</span>
              <Zap className="h-3.5 w-3.5 text-amber-500" />
            </Link>
            <Link href={getAppUrl("/dashboard")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <span>Live CRM Demo</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <Kanban className="h-3.5 w-3.5 text-primary" />
            </Link>
            <Link href={getPartnersUrl("/white-label")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <span>Partners Portal</span>
              <Users className="h-3.5 w-3.5 text-blue-500" />
            </Link>
            <Link href={getAdminUrl("/dashboard")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
              <span>Super Admin Portal</span>
              <Shield className="h-3.5 w-3.5 text-purple-500" />
            </Link>
            */}
          </div>

          {/* Mobile Actions */}
          <div className="space-y-2 pt-1">
            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <Button
                variant="outline"
                className="w-full h-10 text-xs font-bold rounded-xl border-cyan-500/40 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/10 gap-2 cursor-pointer font-heading"
              >
                <Handshake className="h-3.5 w-3.5 text-cyan-500" />
                <span>Become a Partner (Earn up to 35%)</span>
              </Button>
            </Link>

            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                openLeadModal("navbar_mobile");
              }}
              variant="outline"
              className="w-full h-10 text-xs font-bold rounded-xl border-primary/40 text-primary hover:bg-primary/10 gap-2 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Book Live 1-on-1 Demo</span>
            </Button>

            <Link
              href="/sign-in"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <Button
                variant="outline"
                className="w-full h-10 text-xs font-semibold rounded-xl border-slate-300 dark:border-white/15 text-slate-800 dark:text-white"
              >
                Sign In to Your Workspace
              </Button>
            </Link>

            <Link
              href="/sign-up"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block"
            >
              <Button
                className="w-full h-10 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-heading"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

