"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, UserCheck, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<"image-stylist" | "wedding">("image-stylist");

  return (
    <section className="w-full bg-linear-to-br from-silk via-[#F8F2E7] to-champagne-light py-24 lg:py-32 px-6 lg:px-12 border-b border-border-main overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-champagne-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-text-gold" />
            <span>How Nehal Works</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight font-normal">
            Our Two-Part Styling Methodology
          </h2>
          
          <div className="gold-rule mx-auto" />

          <p className="font-sans text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Whether you seek to elevate your personal confidence in public or prepare for a milestone wedding celebration, our tailored methodology provides complete clarity, comfort, and distinction.
          </p>
        </div>

        {/* Interactive Tab Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-warm-white border border-border-main shadow-xs">
            <button
              onClick={() => setActiveTab("image-stylist")}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 ${
                activeTab === "image-stylist"
                  ? "bg-text-primary text-silk shadow-md"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              1. Image Stylist & Confidence Programs
            </button>
            <button
              onClick={() => setActiveTab("wedding")}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 ${
                activeTab === "wedding"
                  ? "bg-text-primary text-silk shadow-md"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              2. Wedding & Occasion Process
            </button>
          </div>
        </div>

        {/* TAB 1: IMAGE STYLIST PROCESS */}
        {activeTab === "image-stylist" && (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
            {/* Header banner */}
            <div className="card-editorial p-8 sm:p-10 bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
                    Personal Empowerment & Public Presence
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-text-primary">
                    Uplifting Your Confidence in Public
                  </h3>
                  <p className="text-text-secondary font-light text-base leading-relaxed">
                    Image styling is far beyond clothes—it is about how you feel stepping into a room. Nehal conducts head-to-toe personal transformations designed to elevate self-assurance, refine posture, and project magnetic authority in both personal and professional environments.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-warm-white p-6 rounded-2xl border border-border-soft space-y-3">
                  <div className="text-xs uppercase tracking-wider text-text-gold font-semibold">Program Flexibility</div>
                  <div className="text-2xl font-serif text-text-primary">3, 5, 7 or 9 Days</div>
                  <p className="text-xs text-text-secondary font-light">Customized intensive immersion modules tailored around your schedule and transformation goals.</p>
                </div>
              </div>
            </div>

            {/* Need Categories (Regular vs Professional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-editorial p-8 bg-pearl border border-border-main space-y-5">
                <div className="w-12 h-12 bg-silk rounded-full border border-border-gold flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-text-gold" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-text-gold font-semibold block">Track A</span>
                <h4 className="font-serif text-2xl text-text-primary">Regular Daily Life Styling</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Tailored for individuals seeking to revamp their everyday wardrobe, elevate personal self-worth, and feel naturally stylish and confident in social settings, gatherings, and daily routines.
                </p>
                <ul className="space-y-2 pt-2 border-t border-border-soft">
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Everyday effortless wardrobe capsules</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Body shape & skin tone profiling</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Personal comfort & authentic aesthetic</span>
                  </li>
                </ul>
              </div>

              <div className="card-editorial p-8 bg-pearl border border-border-main space-y-5">
                <div className="w-12 h-12 bg-silk rounded-full border border-border-gold flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-text-gold" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.18em] text-text-gold font-semibold block">Track B</span>
                <h4 className="font-serif text-2xl text-text-primary">Professional & Executive Need</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Designed for corporate leaders, founders, public speakers, and executives needing high-impact public presence, authoritative deportment, and key visual branding for keynote presentations and media appearances.
                </p>
                <ul className="space-y-2 pt-2 border-t border-border-soft">
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Executive presence & body language alignment</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Public speaking & media wardrobe architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-secondary font-light">
                    <CheckCircle className="w-3.5 h-3.5 text-text-gold shrink-0" />
                    <span>Corporate authority & magnetic posture coaching</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Head-to-Toe Segments */}
            <div className="card-editorial p-8 sm:p-10 bg-silk border border-border-main space-y-6">
              <h4 className="font-serif text-2xl text-text-primary text-center sm:text-left">
                Head-to-Toe Transformation Breakdown
              </h4>
              <p className="text-xs text-text-secondary font-light leading-relaxed max-w-3xl">
                In every program (3, 5, 7, or 9 days), Nehal systematically evaluates and refines each personal visual segment:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-pearl border border-border-soft space-y-2">
                  <div className="text-xs uppercase tracking-wider text-text-gold font-semibold">1. Head & Face</div>
                  <p className="text-xs text-text-secondary font-light">Hairstyle, facial framing, grooming, glasses, & makeup/skin consultation.</p>
                </div>

                <div className="p-5 rounded-xl bg-pearl border border-border-soft space-y-2">
                  <div className="text-xs uppercase tracking-wider text-text-gold font-semibold">2. Posture & Aura</div>
                  <p className="text-xs text-text-secondary font-light">Garment deportment, body posture in public, visual poise, & eye contact confidence.</p>
                </div>

                <div className="p-5 rounded-xl bg-pearl border border-border-soft space-y-2">
                  <div className="text-xs uppercase tracking-wider text-text-gold font-semibold">3. Body & Silhouette</div>
                  <p className="text-xs text-text-secondary font-light">Proportions analysis, color profiling, cut/fit customization, & flattering lines.</p>
                </div>

                <div className="p-5 rounded-xl bg-pearl border border-border-soft space-y-2">
                  <div className="text-xs uppercase tracking-wider text-text-gold font-semibold">4. Footwear & Details</div>
                  <p className="text-xs text-text-secondary font-light">Footwear pairing, fine jewelry accents, accessories harmony, & final look assembly.</p>
                </div>
              </div>

              <div className="pt-4 flex justify-center sm:justify-start">
                <Link href="/image-stylist" className="button-primary text-xs">
                  Explore Image Stylist Programs
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WEDDING & OCCASION PROCESS */}
        {activeTab === "wedding" && (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
            {/* Header banner */}
            <div className="card-editorial p-8 sm:p-10 bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
                    Bespoke Timeline Planning
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-text-primary">
                    3 Months Prior to the Celebration
                  </h3>
                  <p className="text-text-secondary font-light text-base leading-relaxed">
                    To deliver effortless elegance without last-minute stress, Nehal begins the wedding styling journey 3 months prior to the occasion. This generous timeline allows us to thoroughly map your vision, resolve fit or aesthetic issues, and harmonize multi-day events seamlessly.
                  </p>
                </div>
                <div className="lg:col-span-4 bg-warm-white p-6 rounded-2xl border border-border-soft space-y-3 text-center lg:text-left">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-gold font-semibold justify-center lg:justify-start">
                    <Clock className="w-4 h-4 text-text-gold" />
                    <span>Commencement Protocol</span>
                  </div>
                  <div className="text-2xl font-serif text-text-primary">3 Months Ahead</div>
                  <p className="text-xs text-text-secondary font-light">Ensures complete understanding of needs, custom fitting precision, and flawless execution.</p>
                </div>
              </div>
            </div>

            {/* 4 Pillars of 3-Month Wedding Journey */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-editorial p-6 bg-pearl border border-border-main space-y-4">
                <div className="w-10 h-10 bg-silk rounded-full border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                  01
                </div>
                <h4 className="font-serif text-xl text-text-primary">Understanding Needs</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  In-depth consultation to clarify your aesthetic preferences, venue settings, light conditions, and personal comfort desires.
                </p>
              </div>

              <div className="card-editorial p-6 bg-pearl border border-border-main space-y-4">
                <div className="w-10 h-10 bg-silk rounded-full border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                  02
                </div>
                <h4 className="font-serif text-xl text-text-primary">Resolving Issues</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Identifying and solving posture, fit, silhouette insecurities, or color coordination challenges well in advance.
                </p>
              </div>

              <div className="card-editorial p-6 bg-pearl border border-border-main space-y-4">
                <div className="w-10 h-10 bg-silk rounded-full border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                  03
                </div>
                <h4 className="font-serif text-xl text-text-primary">Occasion Analysis</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Studying the exact nature of every ceremony—from sacred Phera & Haldi to high-energy Sangeet & Reception.
                </p>
              </div>

              <div className="card-editorial p-6 bg-pearl border border-border-main space-y-4">
                <div className="w-10 h-10 bg-silk rounded-full border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                  04
                </div>
                <h4 className="font-serif text-xl text-text-primary">Family Harmony</h4>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  Synchronizing color palettes and styles for the couple, immediate family, and entourage for stunning visual unity.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <Link href="/contact" className="button-primary text-xs">
                Schedule 3-Month Wedding Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
