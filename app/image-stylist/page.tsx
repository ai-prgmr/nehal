import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ProcessSection from "@/components/ProcessSection";

export const metadata = {
  title: "Personal Image Stylist & Confidence Coaching | Nehal Jhavveri",
  description: "Uplift your public confidence and executive presence with 3, 5, 7, and 9-day head-to-toe image styling programs by Nehal Jhavveri.",
};

export default function ImageStylistPage() {
  const services = [
    {
      id: "transformation",
      title: "Public Confidence & Style Coaching",
      tagline: "AUTHENTIC SELF-EXPRESSION & PUBLIC PRESENCE",
      description:
        "Image styling is far beyond clothing—it is about how you present yourself and feel in public. We conduct a head-to-toe evaluation (hair/grooming, face framing, skin/color profiling, posture, and silhouette proportioning) to elevate your self-worth and public confidence.",
      deliverables: [
        "Head-to-toe visual & posture assessment",
        "Personalized seasonal color & skin undertone profiling",
        "Body silhouette & architectural proportions guide",
        "Hairstyle, facial framing & grooming harmonization",
        "Confidence & garbing posture coaching for public ease",
      ],
      image: "/nehal/images/style-transformation.jpg",
    },
    {
      id: "wardrobe",
      title: "Wardrobe Architecture & Edit",
      tagline: "REGULAR & PROFESSIONAL CAPSULE CURATION",
      description:
        "Eliminate decision fatigue and elevate daily self-assurance. Whether tailored for regular daily life needs or high-impact professional demands, we audit your closet, restructure silhouettes, and build an effortless wardrobe.",
      deliverables: [
        "In-person or virtual closet audit & restructuring",
        "Regular daily life capsule vs Professional executive edit",
        "Heirloom revival & luxury tailoring recommendations",
        "30+ high-confidence versatile outfit combinations",
        "Digital wardrobe catalog for effortless daily dressing",
      ],
      image: "/nehal/images/wardrobe-redesign.jpg",
    },
    {
      id: "coaching",
      title: "Executive & Public Presence",
      tagline: "PROFESSIONAL NEED, POSTURE & MEDIA ALIGNMENT",
      description:
        "Designed for corporate leaders, founders, keynote speakers, and public personalities. We coach you to project authority, commanding poise, and authentic leadership language in corporate and media settings.",
      deliverables: [
        "One-on-one executive presence & authority coaching",
        "Public speaking, keynote & press appearance styling",
        "Body language, posture & garment deportment training",
        "Personal branding & leadership visual identity alignment",
      ],
      image: "/nehal/images/luxury-style-coaching.jpg",
    },
    {
      id: "shopping",
      title: "Personal Shopping & Styling Curation",
      tagline: "HEAD-TO-TOE ACCESSORY & FOOTWEAR HARMONY",
      description:
        "Experience seamless, curated shopping with private salon access. Nehal hand-selects pieces, tailored footwear, fine accents, and investment wardrobe staples precisely aligned with your 3, 5, 7, or 9-day program blueprint.",
      deliverables: [
        "VIP private suite shopping at premier luxury boutiques",
        "Head-to-toe garment, footwear & accessory curation",
        "Direct artisan & heritage fabric sourcing",
        "Destination shopping itineraries in Mumbai, Delhi & abroad",
      ],
      image: "/nehal/images/shopping-consulting.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-text-primary selection:bg-champagne selection:text-text-primary">
      {/* Hero Section (2-Column Layout, 9:16 Media First on Mobile) */}
      <section className="relative overflow-hidden bg-linear-to-b from-silk via-ivory to-warm-white py-12 lg:py-20 border-b border-border-main">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-champagne-light/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Media Column (9:16 Portrait Media, First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-100 aspect-9/16 image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white">
                <Image
                  src="/nehal/nehal-profile.png"
                  alt="Nehal Jhavveri - Personal Image Stylist & Confidence Coach"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 340px, 400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-light text-champagne-light drop-shadow-sm">
                    3, 5, 7 & 9-Day Transformation Programs
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Second on Mobile, Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Personal Image Stylist & Confidence Coach</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.02] font-normal tracking-tight">
                  Uplift Your <br className="hidden sm:inline" />
                  <span className="italic font-light">Public Confidence.</span>
                </h1>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300}>
                <p className="font-sans text-base lg:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
                  Image styling is far beyond clothes—it is about how you feel stepping into public. Nehal works across head-to-toe segments through intensive 3, 5, 7, and 9-day programs, tailored for both regular daily lifestyle needs and professional executive demands.
                </p>
              </FadeIn>

              <FadeIn delay={500} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="button-primary w-full sm:w-auto text-center">
                  Book Style Consultation
                </Link>
                <a href="#services" className="button-secondary w-full sm:w-auto text-center">
                  Explore Programs
                </a>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Philosophy & Statement */}
      <section className="w-full bg-pearl py-20 lg:py-28 px-6 lg:px-12 border-b border-border-main">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            The Styling Philosophy
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-relaxed">
            &ldquo;Image styling isn&apos;t just about what you wear; it is about uplifting your self-worth and confidence whenever you step into public.&rdquo;
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="font-sans text-base text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            From executives seeking commanding authority in keynotes to individuals desiring effortless self-assurance in daily life, our programs deliver a complete head-to-toe roadmap to visual mastery.
          </p>
        </div>
      </section>

      {/* 3. Detailed Services Breakdown */}
      <section id="services" className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-ivory border-b border-border-main">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Curated Programs
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              Head-to-Toe Styling Programs
            </h2>
            <div className="gold-rule mx-auto" />
            <p className="text-xs sm:text-sm text-text-secondary font-light">
              Flexible 3, 5, 7, and 9-day tracks customized for Regular Daily Needs or Professional Demands.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28"
                >
                  <FadeIn className="card-editorial p-8 sm:p-12 lg:p-16 bg-silk">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      
                      {/* Text Column */}
                      <div className={`space-y-6 ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"}`}>
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-text-gold font-medium">
                            {service.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl text-text-primary">
                          {service.title}
                        </h3>

                        <p className="font-sans text-base text-text-secondary font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs uppercase tracking-[0.16em] text-text-primary font-semibold">
                            Program Deliverables & Experience:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary font-light">
                                <span className="text-text-gold mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Link href="/contact" className="button-primary text-xs py-2.5! px-6!">
                            Book {service.title}
                          </Link>
                        </div>
                      </div>

                      {/* Image Preview Column */}
                      <div className={`flex justify-center ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"}`}>
                        <div className="relative aspect-4/5 w-full max-w-sm image-frame shadow-[0_15px_45px_rgba(63,58,50,0.08)] border border-border-main bg-warm-white">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 360px"
                          />
                        </div>
                      </div>

                    </div>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Methodology Component */}
      <ProcessSection />

      {/* 5. Consultation CTA */}
      <section className="w-full bg-linear-to-br from-silk via-[#F8F2E7] to-champagne-light py-24 lg:py-32 px-6 lg:px-12 text-center border-t border-border-main">
        <FadeIn className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            Private Curation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            Elevate Your Public Presence.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Book an initial discovery consultation to determine whether a 3, 5, 7, or 9-day program for Regular or Professional needs best aligns with your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="button-primary"
            >
              Schedule Style Discovery
            </Link>
            <Link
              href="/bride"
              className="button-secondary"
            >
              Explore Wedding Styling
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

