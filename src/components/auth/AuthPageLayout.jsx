"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export default function AuthPageLayout({
  type,
  children,
}) {
  const { resolvedTheme } = useTheme();

  const isSignIn = type === "sign-in";
  const isDark = resolvedTheme === "dark";

  return (
    <main
      className={
        isDark
          ? "min-h-screen bg-[#08090d] text-white flex items-center justify-center px-4 py-8"
          : "min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4 py-8"
      }
    >
      <div
        className={
          isDark
            ? "w-full max-w-6xl min-h-[720px] grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1017] shadow-2xl"
            : "w-full max-w-6xl min-h-[720px] grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        }
      >

        {/* Left - Form */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center gap-3 mb-12"
            >
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                <img
                  src="/images/smoothsales-logo.jpg"
                  alt="SmoothSales.ai"
                  className="w-full h-full object-cover"
                />
              </div>

              <span
                className={
                  isDark
                    ? "text-2xl font-extrabold tracking-tight text-white"
                    : "text-2xl font-extrabold tracking-tight text-slate-900"
                }
              >
                SmoothSales
                <span className="text-cyan-400 font-normal">
                </span>
              </span>
            </Link>

            {/* Heading */}
            <div className="text-center mb-9">
              <h1
                className={
                  isDark
                    ? "text-3xl sm:text-4xl font-bold tracking-tight text-white"
                    : "text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
                }
              >
                {isSignIn
                  ? "Welcome Back"
                  : "Welcome to SmoothSales"}
              </h1>

              <p
                className={
                  isDark
                    ? "mt-3 text-sm sm:text-base text-slate-400 leading-relaxed"
                    : "mt-3 text-sm sm:text-base text-slate-500 leading-relaxed"
                }
              >
                {isSignIn
                  ? "Enter your business phone number to continue"
                  : "Create your account to get started"}
              </p>
            </div>

            {children}

          </div>
        </section>

        {/* Right - Marketing */}
        <section className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#101d2b] via-[#092235] to-[#07141e] items-center justify-center">

          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10 text-center px-10">

            <div className="mx-auto mb-12 w-[330px] h-[300px] relative">

              <div className="absolute inset-x-10 top-10 bottom-0 rounded-3xl border border-cyan-400/20 bg-white/[0.04] backdrop-blur-sm" />

              <div className="absolute left-20 top-0 w-32 h-56 rounded-[28px] border-8 border-slate-700 bg-[#101820] shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-700 rounded-b-xl" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                    <span className="text-cyan-400 text-xl font-bold">
                      S
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute right-8 bottom-5 w-28 h-20 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md" />

              <div className="absolute left-2 bottom-8 w-24 h-24 rounded-full bg-cyan-400/10 blur-xl" />
            </div>

            <h2 className="text-4xl font-bold text-white">
              {isSignIn
                ? "Grow Your Business"
                : "Start Growing Today"}
            </h2>

            <p className="mt-4 max-w-lg mx-auto text-slate-400 text-lg leading-relaxed">
              Manage leads, track sales, and close deals faster
              with SmoothSales CRM.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}