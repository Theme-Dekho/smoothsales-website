"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

interface ReviewItem {
  initials: string;
  name: string;
  city: string;
  stars: number;
  quote: string;
  tag: string;
  avatarBg: string;
}

const REVIEWS: ReviewItem[] = [
  {
    initials: "RS",
    name: "Rohit Sharma",
    city: "Dwarka, Delhi",
    stars: 5,
    quote: "Pehle JustDial ke liye field sales karta tha, ab SmoothSales.ai ke saath apna kaam chala raha hoon. Pehle hi mahine se ₹4,500 aa gaya.",
    tag: "8 months as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "PN",
    name: "Priya Nair",
    city: "Kochi, Kerala",
    stars: 5,
    quote: "Full-time job chhodke isko try kiya. 3 mahine mein hi steady clients ban gaye — risk lena sahi decision tha.",
    tag: "5 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "AV",
    name: "Amit Verma",
    city: "Jaipur, Rajasthan",
    stars: 4,
    quote: "Team bana li hai ab, 4 log mere under kaam kar rahe hain. Jo socha tha usse bada business ban gaya.",
    tag: "1.5 years as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "SK",
    name: "Sneha Kulkarni",
    city: "Pune, Maharashtra",
    stars: 5,
    quote: "Ghar se hi kaam karti hoon, bachon ko time bhi milta hai aur income bhi steady rehti hai har mahine.",
    tag: "6 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "MY",
    name: "Manoj Yadav",
    city: "Lucknow, UP",
    stars: 5,
    quote: "IndiaMart ke leads follow karta tha ek company ke liye. Ab khud ke liye kaam karta hoon, income double ho gayi.",
    tag: "10 months as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "KR",
    name: "Kavita Reddy",
    city: "Hyderabad, Telangana",
    stars: 4,
    quote: "Local dukaan owners ko pehle se jaanti thi, unhi se shuru kiya. Existing network kaam aa gaya turant.",
    tag: "4 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "DS",
    name: "Deepak Singh",
    city: "Gurugram, Haryana",
    stars: 5,
    quote: "Sulekha ke through sales karta tha. Ab SmoothSales.ai ka naam bolte hi client trust kar lete hain — closing easy ho gayi.",
    tag: "1 year as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "AM",
    name: "Anjali Mehta",
    city: "Ahmedabad, Gujarat",
    stars: 5,
    quote: "College ke saath-saath part-time kaam kar rahi hoon. Pehla real sales experience mil raha hai aur paisa bhi.",
    tag: "3 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "RK",
    name: "Rajesh Kumar",
    city: "Indore, MP",
    stars: 5,
    quote: "2 saal se partner hoon. Ab team ke through bhi kaafi kaam ho raha hai, payout kabhi miss nahi hua.",
    tag: "2+ years as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "NJ",
    name: "Neha Joshi",
    city: "Nagpur, Maharashtra",
    stars: 4,
    quote: "Onboarding fee bhi jaldi refund ho gaya, pehle hi mahine mein 20 users cross kar liye the.",
    tag: "2 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "SP",
    name: "Suresh Patil",
    city: "Nashik, Maharashtra",
    stars: 5,
    quote: "Support SmoothSales.ai khud handle karti hai, isliye mujhe sirf client meetings pe focus karna padta hai.",
    tag: "9 months as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "FS",
    name: "Farhan Sheikh",
    city: "Bhopal, MP",
    stars: 5,
    quote: "Pehle kisi aur company ke liye sales karta tha. Ab apna time khud decide karta hoon, koi boss nahi.",
    tag: "7 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "RA",
    name: "Ritu Agarwal",
    city: "Chandigarh",
    stars: 5,
    quote: "Payout hamesha time pe aata hai, koi delay nahi hota kabhi. Trust ban gaya hai.",
    tag: "5 months as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "VR",
    name: "Vikram Rathore",
    city: "Surat, Gujarat",
    stars: 4,
    quote: "Client kabhi kabhi discount maangte hain, but mera payout fixed rehta hai — yahi cheez sabse acchi lagi.",
    tag: "8 months as Partner",
    avatarBg: "bg-teal-600",
  },
  {
    initials: "PI",
    name: "Pooja Iyer",
    city: "Bengaluru, Karnataka",
    stars: 5,
    quote: "Freelance consulting karti thi local businesses ke saath. Ab wahi network se extra recurring income mil rahi hai.",
    tag: "6 months as Partner",
    avatarBg: "bg-indigo-600",
  },
  {
    initials: "AC",
    name: "Arvind Choudhary",
    city: "Jodhpur, Rajasthan",
    stars: 5,
    quote: "1 saal mein hi 600+ users sell kar diye — kabhi socha nahi tha field sales se itna ho payega.",
    tag: "1 year as Partner",
    avatarBg: "bg-teal-600",
  },
];

export function PartnerReviews() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-[#0A0B14] transition-colors border-t border-slate-200/80 dark:border-white/10">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/40">
            PARTNER REVIEWS
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            What Business Partners are saying
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            Real feedback from partners across different backgrounds and cities — field sales, independent professionals, team builders, and work-from-home earners.
          </p>
        </div>

        {/* 4.8 Rating Band */}
        <div className="rounded-2xl border border-teal-500/30 bg-teal-50/60 dark:bg-teal-950/30 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="text-4xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            4.8
          </span>
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-sans font-semibold text-slate-700 dark:text-slate-300">
              Based on 200+ Business Partner reviews across India
            </p>
          </div>
        </div>

        {/* 16 Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0E1126] p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-3">
                {/* Author Top Bar */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs ${review.avatarBg}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-slate-900 dark:text-white">
                      {review.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
                      {review.city}
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Tag */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
