"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary">
      <main>
        {/* 1. Hero Section (2-Column Layout, 9:16 Video First on Mobile) */}
        <section className="relative overflow-hidden bg-linear-to-b from-silk via-ivory to-warm-white py-12 lg:py-20 border-b border-border-main">
          {/* Subtle Ambient Silk Radial Glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-champagne-light/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-silk/80 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Media Column (9:16 Video, First on Mobile) */}
              <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
                <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-100 aspect-9/16 image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white group">
                  <video
                    src="/nehal/bride-1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  {/* Subtle Light Editorial Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-text-primary/25 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-light text-champagne-light drop-shadow-sm">
                      Head-to-Toe Style & Image Coaching
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Column (Second on Mobile, Left on Desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Personal Image Stylist & Confidence Coach</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.02] font-normal tracking-tight">
                  Uplift Your <br className="hidden sm:inline" />
                  <span className="italic font-light">Public Confidence.</span>
                </h1>

                <div className="gold-rule mx-auto lg:mx-0" />

                <p className="font-sans text-base lg:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
                  Image styling is far beyond the outfit—it is about commanding respect, standing out with self-assurance, and radiating authentic poise in public, professional, and milestone life moments.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                  <Link href="/image-stylist" className="button-primary w-full sm:w-auto text-center">
                    Image Styling Programs
                  </Link>
                  <Link href="/bride" className="button-secondary w-full sm:w-auto text-center">
                    Bridal & Occasion Styling
                  </Link>
                </div>

                <div className="pt-6 border-t border-border-soft w-full flex items-center justify-center lg:justify-start gap-8 text-xs uppercase tracking-widest text-text-muted">
                  <div>
                    <span className="block font-serif text-lg text-text-primary">Head-to-Toe</span>
                    <span>Transformation</span>
                  </div>
                  <div className="w-px h-8 bg-border-main" />
                  <div>
                    <span className="block font-serif text-lg text-text-primary">3 to 9 Days</span>
                    <span>Intensive Programs</span>
                  </div>
                  <div className="w-px h-8 bg-border-main" />
                  <div>
                    <span className="block font-serif text-lg text-text-primary">3 Months</span>
                    <span>Wedding Protocol</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Meet Nehal Jhavveri */}
        <section className="w-full bg-pearl py-24 lg:py-32 px-6 lg:px-12 border-b border-border-main">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 image-frame shadow-[0_15px_45px_rgba(63,58,50,0.08)] border border-border-main">
                <Image
                  src="/nehal/nehal-profile.png"
                  alt="Nehal Jhavveri - Personal Image Stylist & Confidence Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
                The Coach & Image Architect
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-text-primary leading-tight">
                Meet Nehal Jhavveri
              </h2>
              <h3 className="uppercase tracking-[0.14em] text-xs text-text-secondary font-medium">
                Personal Image Stylist | Confidence & Executive Coach
              </h3>
              <div className="gold-rule mx-auto md:mx-0" />

              <div className="space-y-4 text-base text-text-secondary font-light leading-relaxed">
                <p>
                  &ldquo;True style is not about the clothes you wear; it is about how you present yourself to the world. When your visual presence aligns with your inner self-worth, confidence in public becomes effortless and magnetic.&rdquo;
                </p>
                <p>
                  Whether guiding an executive through a 3 to 9-day head-to-toe image transformation or orchestrating a bride&apos;s 3-month advance styling journey, Nehal empowers clients to step out into public with commanding grace and self-assurance.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/about" className="text-xs uppercase tracking-[0.18em] text-text-primary hover:text-text-gold font-medium inline-flex items-center gap-2 transition-colors">
                  <span>Discover Nehal&apos;s Styling Philosophy</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Image Stylist Section Feature */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-pearl border-b border-border-main">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
                  Personal Transformation
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-text-primary leading-tight">
                  Head-to-Toe Image Styling
                </h2>
                <div className="gold-rule" />
                <p className="font-sans text-base text-text-secondary font-light leading-relaxed">
                  Transform how the world sees you and how you feel about yourself. We work across every visual segment—grooming, face framing, posture, proportions, and wardrobe curation—tailored for both regular daily lifestyle needs and professional executive demands.
                </p>

                <div className="pt-2">
                  <Link href="/image-stylist" className="button-primary">
                    Explore 3, 5, 7 & 9-Day Programs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Style Transformation */}
                <Link href="/image-stylist#transformation" className="card group block overflow-hidden bg-silk">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-warm-white">
                    <Image
                      src="/nehal/images/style-transformation.jpg"
                      alt="Head-to-Toe Style Transformation"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-text-gold transition-colors">
                      Confidence & Style Coaching
                    </h3>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      Color profiling, posture alignment, and establishing an authentic personal language that radiates self-worth.
                    </p>
                  </div>
                </Link>

                {/* 2. Wardrobe Architecture */}
                <Link href="/image-stylist#wardrobe" className="card group block overflow-hidden bg-silk">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-warm-white">
                    <Image
                      src="/nehal/images/wardrobe-redesign.jpg"
                      alt="Wardrobe Architecture & Edit"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-text-gold transition-colors">
                      Wardrobe Architecture
                    </h3>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      Closet audits, restructuring silhouettes, and building effortless high-confidence capsule collections.
                    </p>
                  </div>
                </Link>

                {/* 3. Executive Presence */}
                <Link href="/image-stylist#coaching" className="card group block overflow-hidden bg-silk">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-warm-white">
                    <Image
                      src="/nehal/images/luxury-style-coaching.jpg"
                      alt="Executive Presence & Public Posture"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-text-gold transition-colors">
                      Professional & Public Presence
                    </h3>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      Elevating body language, public speaking posture, and visual identity for corporate leaders and keynote speakers.
                    </p>
                  </div>
                </Link>

                {/* 4. Lifestyle & Shopping Consulting */}
                <Link href="/image-stylist#shopping" className="card group block overflow-hidden bg-silk">
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-warm-white">
                    <Image
                      src="/nehal/images/shopping-consulting.jpg"
                      alt="Personal Shopping Consulting"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-text-gold transition-colors">
                      Personal Shopping Consulting
                    </h3>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">
                      Curated shopping tours, hand-selected pieces, and styling investments tailored to your regular or professional needs.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Celebration Atelier (Wedding & Occasions) */}
        <section className="w-full bg-ivory py-24 lg:py-32 px-6 lg:px-12 border-b border-border-main">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
                Occasion & Wedding Styling
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
                The Celebration Collections
              </h2>
              <div className="gold-rule mx-auto" />
              <p className="text-xs sm:text-sm text-text-secondary font-light">
                Commencing 3 months before your event to understand your needs, resolve fit concerns, and synchronize aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="card-editorial group block"
                >
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-warm-white">
                    <Image
                      src={category.heroVideoOrImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    {category.tagline && (
                      <span className="text-[10px] uppercase tracking-[0.18em] text-text-gold font-medium block">
                        {category.tagline}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-text-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-text-secondary font-light line-clamp-2 leading-relaxed">
                      {category.manifesto}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Two-Part Methodology Section */}
        <ProcessSection />
      </main>
    </div>
  );
}

