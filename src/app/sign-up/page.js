"use client";

import { useState } from "react";
import Link from "next/link";

import AuthPageLayout from "@/components/auth/AuthPageLayout";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Authentication intentionally not implemented yet.
    console.log("Sign up form submitted:", formData);
  };

  return (
    <AuthPageLayout type="sign-up">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-semibold text-slate-200"
          >
            Full Name
          </label>

          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(event) =>
              updateField(
                "fullName",
                event.target.value
              )
            }
            placeholder="John Doe"
            // className="w-full h-14 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
            className="w-full h-14 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>

        {/* Business Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-slate-200"
          >
            Business Email
          </label>

          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) =>
              updateField(
                "email",
                event.target.value
              )
            }
            placeholder="john.doe@company.com"
            // className="w-full h-14 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
            className="w-full h-14 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-semibold text-slate-200"
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
              value={formData.phone}
              onChange={(event) =>
                updateField(
                  "phone",
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
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-xs text-slate-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <p 
        // className="text-center text-sm text-slate-400"
        className="text-center text-sm text-slate-500 dark:text-slate-400"
        >
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-cyan-400 font-semibold hover:text-cyan-300"
          >
            Sign In
          </Link>
        </p>

      </form>

    </AuthPageLayout>
  );
}