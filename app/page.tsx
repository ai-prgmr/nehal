"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#3F3A32]">
      <main>
        {/* 1. Hero Section (2-Column Layout, 9:16 Video First on Mobile) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F5EE] to-[#F5F1E8] py-12 lg:py-20 border-b border-[#E7DFD1]">
          {/* Subtle Ambient Silk Radial Glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F1E5CC]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFFDF8]/80 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Media Column (9:16 Video, First on Mobile) */}
              <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[9/16] image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-[#E7DFD1] bg-[#F5F1E8] group">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F3A32]/25 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-light text-[#F1E5CC] drop-shadow-sm">
                      Bespoke Bridal 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Column (Second on Mobile, Left on Desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E7DFD1] text-[#9B8150] text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Haute Couture & Personal Image Styling</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#3F3A32] leading-[1.02] font-normal tracking-tight">
                  Crafting Your <br className="hidden sm:inline" />
                  <span className="italic font-light">Perfect Moment.</span>
                </h1>

                <div className="gold-rule mx-auto lg:mx-0" />

                <p className="font-sans text-base lg:text-lg text-[#71695D] font-light leading-relaxed max-w-xl">
                  Every silhouette is an intimately crafted journey, harmonizing the timeless artistry of heritage Indian textiles with modern bespoke couture and signature image curation.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                  <Link href="/bride" className="button-primary w-full sm:w-auto text-center">
                    Explore Bridal Couture
                  </Link>
                  <Link href="/image-stylist" className="button-secondary w-full sm:w-auto text-center">
                    Image Styling Programs
                  </Link>
                </div>

                <div className="pt-6 border-t border-[#EEE8DE] w-full flex items-center justify-center lg:justify-start gap-8 text-xs uppercase tracking-widest text-[#968D80]">
                  <div>
                    <span className="block font-serif text-lg text-[#3F3A32]">100%</span>
                    <span>Bespoke Fit</span>
                  </div>
                  <div className="w-px h-8 bg-[#E7DFD1]" />
                  <div>
                    <span className="block font-serif text-lg text-[#3F3A32]">1-on-1</span>
                    <span>Private Curation</span>
                  </div>
                  <div className="w-px h-8 bg-[#E7DFD1]" />
                  <div>
                    <span className="block font-serif text-lg text-[#3F3A32]">Global</span>
                    <span>Destination Styling</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. Meet the Designer (Editorial Story) */}
        <section className="w-full bg-[#FCFAF5] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#E7DFD1]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-5/12 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 image-frame shadow-[0_15px_45px_rgba(63,58,50,0.08)] border border-[#E7DFD1]">
                <Image
                  src="/nehal/nehal-profile.png"
                  alt="Nehal Jhavveri - Lead Designer and Image Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12 text-center md:text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                The Woman Behind the Vision
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32] leading-tight">
                Meet Nehal Jhavveri
              </h2>
              <h3 className="uppercase tracking-[0.14em] text-xs text-[#71695D] font-medium">
                Bridal & Occasion Stylist | Image Coach
              </h3>
              <div className="gold-rule mx-auto md:mx-0" />

              <div className="space-y-4 text-base text-[#71695D] font-light leading-relaxed">
                <p>
                  &ldquo;Luxury is an experience, an intimately crafted journey that materializes long before your celebration begins. I draw inspiration from the intricate heritage of Indian handlooms and the effortless silhouettes of modern luxury couture.&rdquo;
                </p>
                <p>
                  Whether styling a bride, curating a harmonious family trousseau, or guiding an executive through a complete image transformation, Nehal&apos;s styling philosophy is rooted in authenticity and effortless confidence.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/about" className="text-xs uppercase tracking-[0.18em] text-[#3F3A32] hover:text-[#9B8150] font-medium inline-flex items-center gap-2 transition-colors">
                  <span>Read Nehal&apos;s Full Story</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Image Stylist Section Feature */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-[#FCFAF5] border-b border-[#E7DFD1]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                  Beyond Celebrations
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32] leading-tight">
                  Personal Image & Style Architecture
                </h2>
                <div className="gold-rule" />
                <p className="font-sans text-base text-[#71695D] font-light leading-relaxed">
                  Style is your silent introduction. We offer private styling, comprehensive wardrobe redesigns, and luxury executive coaching to help you build a wardrobe that radiates confidence and understated luxury.
                </p>

                <div className="pt-2">
                  <Link href="/image-stylist" className="button-primary">
                    Explore Image Stylist Programs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Style Transformation */}
                <Link href="/image-stylist#transformation" className="card group block overflow-hidden bg-[#FFFDF8]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F1E8]">
                    <Image
                      src="/nehal/images/style-transformation.jpg"
                      alt="Style Transformation with Nehal Jhavveri"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-[#3F3A32] group-hover:text-[#9B8150] transition-colors">
                      Style Transformation
                    </h3>
                    <p className="text-xs text-[#71695D] font-light leading-relaxed">
                      Color profiling, silhouette mastery, and establishing your authentic personal style language.
                    </p>
                  </div>
                </Link>

                {/* 2. Wardrobe Redesign */}
                <Link href="/image-stylist#wardrobe" className="card group block overflow-hidden bg-[#FFFDF8]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F1E8]">
                    <Image
                      src="/nehal/images/wardrobe-redesign.jpg"
                      alt="Wardrobe Redesign with Nehal Jhavveri"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-[#3F3A32] group-hover:text-[#9B8150] transition-colors">
                      Wardrobe Redesign
                    </h3>
                    <p className="text-xs text-[#71695D] font-light leading-relaxed">
                      In-depth closet edit, decluttering, piece restructuring, and creating effortless capsule collections.
                    </p>
                  </div>
                </Link>

                {/* 3. Luxury Style Coaching */}
                <Link href="/image-stylist#coaching" className="card group block overflow-hidden bg-[#FFFDF8]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F1E8]">
                    <Image
                      src="/nehal/images/luxury-style-coaching.jpg"
                      alt="Luxury Style Coaching with Nehal Jhavveri"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-[#3F3A32] group-hover:text-[#9B8150] transition-colors">
                      Luxury Style Coaching
                    </h3>
                    <p className="text-xs text-[#71695D] font-light leading-relaxed">
                      Elevate presence, posture, body language, and visual identity for milestone occasions or executive roles.
                    </p>
                  </div>
                </Link>

                {/* 4. Shopping Consulting */}
                <Link href="/image-stylist#shopping" className="card group block overflow-hidden bg-[#FFFDF8]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F1E8]">
                    <Image
                      src="/nehal/images/shopping-consulting.jpg"
                      alt="Shopping Consulting with Nehal Jhavveri"
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                    <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/8 transition-colors duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-2xl text-[#3F3A32] group-hover:text-[#9B8150] transition-colors">
                      Shopping Consulting
                    </h3>
                    <p className="text-xs text-[#71695D] font-light leading-relaxed">
                      Curated shopping tours, private designer access, and conscious wardrobe investment curation.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Celebration Section (All Celebration Collections) */}
        <section className="w-full bg-[#F8F5EE] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#E7DFD1]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                Celebration Atelier
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32]">
                The Celebration
              </h2>
              <div className="gold-rule mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="card-editorial group block"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F1E8]">
                    <Image
                      src={category.heroVideoOrImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/10 transition-colors duration-500" />
                  </div>
                  <div className="p-8 text-center space-y-2.5">
                    {category.tagline && (
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#9B8150] font-medium block">
                        {category.tagline}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-[#3F3A32] group-hover:text-[#9B8150] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#71695D] font-light line-clamp-2 leading-relaxed">
                      {category.manifesto}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Process & Private Consultation CTA */}
        <section className="w-full bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7] to-[#F1E5CC] py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-8">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                  Artisanal Excellence
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight">
                  Our Bespoke Process
                </h2>
                <div className="gold-rule" />
                <p className="text-lg text-[#71695D] font-light leading-relaxed">
                  We begin 3 to 6 months in advance to architect every detail: from initial color palettes and heirloom swatches to bespoke hand-embroidery and final champagne fittings.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-medium text-[#3F3A32] text-sm uppercase tracking-wider">Discovery & Swatches</h4>
                      <p className="text-xs text-[#71695D] mt-0.5">Private consultation to understand your aesthetic, body architecture, and event tone.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-medium text-[#3F3A32] text-sm uppercase tracking-wider">Handcrafted Artistry</h4>
                      <p className="text-xs text-[#71695D] mt-0.5">Master artisans hand-weave, dye, and embroider your custom silhouettes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-medium text-[#3F3A32] text-sm uppercase tracking-wider">Champagne Fitting Suite</h4>
                      <p className="text-xs text-[#71695D] mt-0.5">Final precision tailoring, jewelry coordination, and draping rehearsals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-editorial p-8 sm:p-12 shadow-[0_20px_60px_rgba(63,58,50,0.08)] space-y-6 text-center bg-[#FFFDF8]">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                  Private Appointments
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3F3A32]">
                  Begin Your Journey
                </h3>
                <p className="text-sm text-[#71695D] font-light leading-relaxed">
                  Reserve your private consultation in Indore, India or schedule a virtual appointment for destination wedding planning and personal styling.
                </p>
                <div className="pt-4 flex flex-col gap-4">
                  <Link href="/contact" className="button-primary w-full">
                    Book Private Consultation
                  </Link>
                  <a
                    href="mailto:style@nehaljhavveri.com"
                    className="button-secondary w-full"
                  >
                    Request Bespoke Lookbook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
