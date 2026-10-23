
"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { RichFooter } from "@/components/marketing/final-cta-section";
import type { IntegrationData } from "./integration-data";

type IntegrationPageProps = {
  integration: IntegrationData;
};

export default function IntegrationPage({
  integration,
}: IntegrationPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-[#0A0A0F] dark:text-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-slate-500 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400" />

          <Link
            href="/integrations"
            className="text-slate-500 transition hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-300"
          >
            Integrations
          </Link>

          <ChevronRight className="h-4 w-4 text-slate-400" />

          <span className="font-medium">{integration.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
              SmoothSales Integration
            </p>

            <h1 className="font-heading text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              SmoothSales + {integration.name}
              {integration.name === "Meta Conversion API"
                ? ": Optimize Your Ad Spend"
                : ": Turn Conversations Into Leads"}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              {integration.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/10"
              >
                Book a Demo
              </Link>
            </div>

            {/* Integration connection visual */}
            <div className="mt-12 flex max-w-xl flex-wrap items-center justify-center gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:justify-start sm:gap-8">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 dark:border-white/10">
                  <span className="text-center text-xs font-black leading-tight text-violet-600">
                    SS
                  </span>
                </div>
                <div>
                  <p className="font-bold">SmoothSales</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    CRM workspace
                  </p>
                </div>
              </div>

              <ArrowRight className="h-6 w-6 shrink-0 text-violet-500" />

              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 dark:border-white/10">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${integration.domain}&sz=128`}
                    alt={`${integration.name} logo`}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold">{integration.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    External platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why connect SmoothSales with {integration.name}?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integration.benefits.map((benefit, index) => (
            <article
              key={benefit}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                {integration.name === "Meta Conversion API"
                  ? [
                      "Server-Side Tracking",
                      "Better Ad Optimization",
                      "Conversion Visibility",
                    ][index] ?? benefit
                  : benefit}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {benefit}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#101016]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            How it works
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {integration.setupSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  {integration.name === "Meta Conversion API"
                    ? [
                        "Connect Meta Business account",
                        "Configure event mapping",
                        "Start sending events",
                      ][index] ?? step
                    : `Step ${index + 1}`}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Related Integrations intentionally omitted */}
      {/* <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Connect {integration.name} in minutes
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Create your workspace and review the integration setup during
          onboarding.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-slate-300 px-7 py-3 font-semibold transition hover:bg-slate-100 dark:border-white/20 dark:hover:bg-white/10"
          >
            Book a Demo
          </Link>
        </div>
      </section> */}

      
        {/* Frequently Asked Questions */}
        <section className="border-t border-slate-200 dark:border-white/10">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                FAQs
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
                Find answers to common questions about the {integration.name} integration.
              </p>
            </div>

            <div className="mt-10 divide-y divide-slate-200 dark:divide-white/10">
              {[
                {
                  question: `What is the ${integration.name} integration?`,
                  answer: `${integration.description} It is designed to fit into your SmoothSales.ai workflow.`,
                },
                {
                  question: `What are the benefits of connecting ${integration.name}?`,
                  answer: integration.benefits.join(" "),
                },
                {
                  question: `How do I set up ${integration.name}?`,
                  answer: integration.setupSteps.join(" Then, "),
                },
                {
                  question: `Do I need a ${integration.name} account?`,
                  answer: `You may need the relevant ${integration.name} account and permissions to configure the connection. Requirements depend on the platform and integration setup.`,
                },
                {
                  question: `How do I get help with the ${integration.name} integration?`,
                  answer: "Contact our team for help reviewing your requirements and planning the setup.",
                },
              ].map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    <span>{faq.question}</span>
                    <span className="text-xl text-violet-600 transition-transform group-open:rotate-45 dark:text-violet-300">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>


      <RichFooter />
    </main>
  );
}
