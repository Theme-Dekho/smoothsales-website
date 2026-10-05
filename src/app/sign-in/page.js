"use client";

import { useState } from "react";
import Link from "next/link";

import AuthPageLayout from "@/components/auth/AuthPageLayout";

export default function SignInPage() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Authentication intentionally not implemented yet.
    console.log("Sign in form submitted:", phone);
  };

  return (
    <AuthPageLayout type="sign-in">

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>
          <label
            htmlFor="phone"
            // className="block mb-2 text-sm font-semibold text-slate-200"
            className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Phone Number
          </label>

          <div 
        //   className="flex h-14 rounded-xl border border-white/10 bg-white/[0.04] overflow-hidden focus-within:border-cyan-400/50 transition-colors"
        className="flex h-14 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] overflow-hidden focus-within:border-cyan-400/50 transition-colors"
          >

            <div 
            // className="flex items-center gap-2 px-4 border-r border-white/10 text-sm text-slate-300"
            className="flex items-center gap-2 px-4 border-r border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300"
            >
              <span>🇮🇳</span>
              <span>+91</span>
            </div>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10)
                )
              }
              placeholder="74104 10123"
            //   className="flex-1 bg-transparent px-4 outline-none text-white placeholder:text-slate-600"
            className="flex-1 bg-transparent px-4 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />

          </div>
        </div>

        <button
          type="submit"
          className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
        >
          Request OTP
        </button>

        <div className="flex items-center gap-4">
          <div 
        //   className="h-px flex-1 bg-white/10"
        className="h-px flex-1 bg-slate-200 dark:bg-white/10" 
          />

          <span className="text-xs text-slate-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p 
        // className="text-center text-sm text-slate-400"
        className="text-center text-sm text-slate-500 dark:text-slate-400"
        >
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            // className="text-cyan-400 font-semibold hover:text-cyan-300"
            className="text-cyan-500 dark:text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Sign Up
          </Link>
        </p>

      </form>

    </AuthPageLayout>
  );
}