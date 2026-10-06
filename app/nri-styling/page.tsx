import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Globe, Calendar, Users, Heart, Compass, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "NRI Wedding & International Guest Styling Concierge | Nehal Jhavveri",
  description: "Bespoke Indian wedding styling for NRIs, international couples, and non-Indian guests. Remote time-zone consultations, express fitting suites, and end-to-end entourage curation.",
};

export default function NRIStylingPage() {
  const nriPillars = [
    {
      icon: Globe,
      title: "Remote Time-Zone Curation",
      tagline: "USA • UK • UAE • CANADA • AUSTRALIA",
      description:
        "Seamless virtual styling consultations tailored to your local time zone. We share high-definition swatch videos, digital lookboards, and 3D silhouette concepts long before you board your flight to India.",
    },
    {
      icon: Users,
      title: "International Friends & Entourage Styling",
      tagline: "CULTURALLY INSPIRED & EFFORTLESS FOR GLOBAL GUESTS",
      description:
        "Specialized styling for non-Indian friends & international entourage attending an Indian wedding for the first time. We pre-select pre-draped sarees, lightweight lehengas, and tailored sherwanis, ensuring total comfort, flawless fit, and cultural harmony.",
    },
    {
      icon: Clock,
      title: "Express Fitting Suite upon Arrival",
      tagline: "COMPACT LANDING ITINERARIES",
      description:
        "We respect tight NRI travel itineraries. Your fitting schedule is pre-arranged at our private Indore atelier or directly at destination venues in Mumbai, Delhi, Udaipur, or Jaipur with priority master tailors on standby.",
    },
    {
      icon: Compass,
      title: "Luggage & Travel Packaging Protocol",
      tagline: "GLOBE-TROTTING READY COUTURE",
      description:
        "Garments packaged in custom travel-protective cases designed for international flights. We also coordinate international express shipping directly to your overseas address if needed.",
    },
  ];

  const guestGuide = [
    {
      role: "Non-Indian Bridesmaids & Friends",
      outfit: "Pre-Draped Lehengas & Fusion Jackets",
      insight:
        "Eliminates complex saree draping. We design pre-stitched, lightweight ensembles that allow international friends to dance effortlessly at Sangeet without feeling restricted.",
    },
    {
      role: "International Groomsmen & Guests",
      outfit: "Bespoke Silk Kurta Sets & Tailored Bandhgalas",
      insight:
        "Breathable silk-cotton blends customized to individual chest & shoulder proportions, complete with pre-pleated safas and easy-to-wear dupattas.",
    },
    {
      role: "NRI Couple (Bride & Groom)",
      outfit: "Heritage Couture with Modern Weight Efficiency",
      insight:
        "Rich handloom embroidery engineered on lighter silk foundations so you can enjoy multi-day celebrations without heavy garment fatigue.",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-text-primary selection:bg-champagne selection:text-text-primary">
      {/* 1. Hero Section (2-Column Layout) */}
      <section className="relative overflow-hidden bg-linear-to-b from-silk via-ivory to-warm-white py-12 lg:py-24 border-b border-border-main">
        {/* Subtle Ambient Silk Glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-champagne-light/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Media Column (First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-100 aspect-9/16 image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white group">
                <Image
                  src="/nehal/images/bridesmaids-hero.jpg"
                  alt="NRI & International Guest Styling by Nehal Jhavveri"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 340px, 400px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-light text-champagne-light drop-shadow-sm">
                    Global NRI & Destination Styling
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <Globe className="w-3.5 h-3.5 text-text-gold" />
                  <span>Global NRI & International Guest Concierge</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.02] font-normal tracking-tight">
                  Bridging Cultures, <br className="hidden sm:inline" />
                  <span className="italic font-light">Easing Distance.</span>
                </h1>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300}>
                <p className="font-sans text-base lg:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
                  Planning an Indian wedding from overseas requires deep trust, seamless communication, and dedicated attention. We specialize in complete remote styling for NRI couples and the international friends accompanying them for the celebration.
                </p>
              </FadeIn>

              <FadeIn delay={500} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="button-primary w-full sm:w-auto text-center">
                  Book Virtual NRI Discovery
                </Link>
                <a href="#services" className="button-secondary w-full sm:w-auto text-center">
                  Explore Concierge Services
                </a>
              </FadeIn>

              <div className="pt-6 border-t border-border-soft w-full flex items-center justify-center lg:justify-start gap-8 text-xs uppercase tracking-widest text-text-muted">
                <div>
                  <span className="block font-serif text-lg text-text-primary">Time-Zone</span>
                  <span>Flexible Consults</span>
                </div>
                <div className="w-px h-8 bg-border-main" />
                <div>
                  <span className="block font-serif text-lg text-text-primary">Global Friends</span>
                  <span>Draping & Styling</span>
                </div>
                <div className="w-px h-8 bg-border-main" />
                <div>
                  <span className="block font-serif text-lg text-text-primary">Express</span>
                  <span>In-India Fittings</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Subjective NRI Reality & Philosophy */}
      <section className="w-full bg-pearl py-20 lg:py-28 px-6 lg:px-12 border-b border-border-main">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            The NRI Experience
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-relaxed">
            &ldquo;When distance disappears, wedding preparation becomes a joyful anticipation rather than a stressful ordeal.&rdquo;
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="font-sans text-base text-text-secondary font-light leading-relaxed max-w-3xl mx-auto">
            We understand the subjective nuances of coming back home to celebrate: tight leave schedules, managing expectations of visiting non-Indian friends, navigating multi-day traditional rituals, and ensuring everyone looks cohesive, stylish, and comfortable.
          </p>
        </div>
      </section>

      {/* 3. Core NRI Pillars Grid */}
      <section id="services" className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-ivory border-b border-border-main">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Tailored Services
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              NRI & International Concierge
            </h2>
            <div className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {nriPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <FadeIn key={idx} delay={idx * 150} className="card-editorial p-8 sm:p-10 bg-silk border border-border-main space-y-5">
                  <div className="w-12 h-12 bg-pearl rounded-full border border-border-gold flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-text-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-text-gold font-semibold block">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Special Focus: International Friends & Entourage */}
      <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-pearl border-b border-border-main">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-silk border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                <Users className="w-3.5 h-3.5 text-text-gold" />
                <span>Specialized Entourage Service</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-text-primary leading-tight">
                Styling Your International Friends & Guests
              </h2>
              <div className="gold-rule" />

              <p className="font-sans text-base text-text-secondary font-light leading-relaxed">
                When international friends travel across oceans to attend your wedding, they are eager to embrace Indian culture but often feel overwhelmed by choices, draping techniques, and dress code etiquette.
              </p>
              <p className="font-sans text-sm text-text-secondary font-light leading-relaxed">
                Nehal acts as their personal guide: pre-matching their sizes remotely, selecting fuss-free pre-draped outfits, providing footwear and jewelry coordination, and arranging on-site draping assistants on event days so your foreign guests feel confident and celebrated.
              </p>

              <div className="pt-2">
                <Link href="/contact" className="button-primary text-xs">
                  Inquire for International Entourage
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {guestGuide.map((item, index) => (
                <FadeIn key={index} delay={index * 150} className="p-6 rounded-2xl bg-silk border border-border-main space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl text-text-primary">{item.role}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-text-gold font-semibold bg-pearl px-2.5 py-1 rounded-full border border-border-soft">
                      {item.outfit}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary font-light leading-relaxed pt-1">
                    {item.insight}
                  </p>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. The 3-Month NRI Timeline */}
      <section className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-ivory border-b border-border-main">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Seamless Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              The 3-Month NRI Timeline
            </h2>
            <div className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-editorial p-8 space-y-4 bg-silk">
              <div className="w-10 h-10 rounded-full bg-warm-white border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                M-3
              </div>
              <h3 className="font-serif text-2xl text-text-primary">Month 3: Virtual Discovery</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Time-zone compatible video consultations. We establish event color schemes, moodboards, swatch approvals, and measurement guides for you and your friends.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-silk">
              <div className="w-10 h-10 rounded-full bg-warm-white border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                M-2
              </div>
              <h3 className="font-serif text-2xl text-text-primary">Month 2: Artisan Sourcing</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Hand-loom weaving, embroidery, pre-stitching draped sarees, and tailoring sherwanis. Regular HD video updates keep you connected across distance.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-silk">
              <div className="w-10 h-10 rounded-full bg-warm-white border border-border-gold flex items-center justify-center font-serif text-text-gold font-semibold">
                M-1
              </div>
              <h3 className="font-serif text-2xl text-text-primary">Month 1: Express Landing Fittings</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Upon landing in India, enjoy rapid fitting sessions at our studio or venue hotel. Draping assistance and final touches on wedding day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="w-full bg-linear-to-br from-silk via-[#F8F2E7] to-champagne-light py-24 lg:py-32 px-6 lg:px-12 text-center">
        <FadeIn className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            Overseas & Global Clients
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            Schedule Your NRI Discovery Call.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Let us handle the complexity of remote coordination so you and your international guests can focus entirely on celebrating.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="button-primary"
            >
              Book Virtual Consultation
            </Link>
            <Link
              href="/image-stylist"
              className="button-secondary"
            >
              Explore Personal Image Styling
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
