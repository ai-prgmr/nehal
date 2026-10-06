import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About Nehal Jhavveri | Bridal Stylist & Image Coach",
  description: "Meet Nehal Jhavveri, bridging traditional Indian craftsmanship and contemporary couture styling.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary selection:bg-champagne selection:text-text-primary">
      {/* Hero Section (2-Column Layout, 9:16 / Portrait Media First on Mobile) */}
      <section className="relative overflow-hidden bg-linear-to-b from-silk via-ivory to-warm-white py-12 lg:py-24 border-b border-border-main">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-champagne-light/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Column (First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-100 aspect-4/5 image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white">
                <Image
                  src="/nehal/nehal-profile.png"
                  alt="Nehal Jhavveri - Bridal & Occasion Stylist"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 340px, 400px"
                />
              </div>
            </div>

            {/* Content Column (Second on Mobile, Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Personal Image Stylist & Confidence Coach</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
                  About Nehal Jhavveri
                </h1>
                <h2 className="uppercase tracking-[0.16em] text-xs text-text-secondary font-medium">
                  Personal Image Stylist | Confidence & Wedding Coach
                </h2>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300} className="space-y-4 text-base text-text-secondary font-light leading-relaxed max-w-2xl">
                <p className="text-lg text-text-primary font-normal leading-relaxed">
                  Image styling is about uplifting your self-confidence every time you step into public.
                </p>
                <p>
                  My philosophy is deeply rooted in the belief that personal style is far beyond clothes—it is a visual language that commands respect and radiates authentic self-worth. Whether preparing an executive for a high-stakes keynote or guiding a bride through her 3-month wedding styling timeline, I focus on empowering your presence.
                </p>
                <p>
                  Through head-to-toe evaluation—covering hair/grooming, facial framing, posture, skin/color profiling, and silhouette tailoring—I help you cultivate an effortless image that feels natural and commanding.
                </p>
              </FadeIn>

              <FadeIn delay={500} className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="button-primary w-full sm:w-auto text-center">
                  Book a Consultation
                </Link>
                <Link href="/image-stylist" className="button-secondary w-full sm:w-auto text-center">
                  Image Styling Services
                </Link>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="w-full bg-pearl py-24 lg:py-32 px-6 lg:px-12 border-b border-border-main">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            Core Belief
          </span>
          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-relaxed">
            &ldquo;Image styling isn&apos;t about changing who you are. <br className="hidden md:block" />
            It&apos;s about uplifting your confidence whenever you step into public.&rdquo;
          </p>
          <div className="gold-rule mx-auto" />
          <p className="uppercase tracking-[0.2em] text-xs text-text-muted font-medium">
            Nehal Jhavveri
          </p>
        </div>
      </section>

      {/* The Atelier Approach */}
      <section className="w-full bg-ivory py-24 lg:py-32 px-6 lg:px-12 border-b border-border-main">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Our Methodology
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              The Styling Pillars
            </h2>
            <div className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-editorial p-8 space-y-4 bg-silk">
              <h3 className="font-serif text-2xl text-text-primary">Head-to-Toe Focus</h3>
              <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                Evaluating grooming, face framing, posture, color profiling, garments, and footwear in 3, 5, 7, or 9-day intensive tracks.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-silk">
              <h3 className="font-serif text-2xl text-text-primary">Public Confidence</h3>
              <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                Tailoring visual presence for both regular daily lifestyle needs and high-stakes executive professional demands.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-silk">
              <h3 className="font-serif text-2xl text-text-primary">3-Month Wedding Prep</h3>
              <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
                Commencing 3 months before celebrations to understand needs, resolve fit/body concerns, and harmonize family ensembles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="w-full bg-linear-to-br from-silk via-[#F8F2E7] to-champagne-light py-24 lg:py-32 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            Let&apos;s Connect
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            Let&apos;s Craft Your Perfect Look.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Ready to embark on an intimately crafted journey? Schedule a private appointment to discuss your vision and discover how we can elevate your celebration with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="button-primary"
            >
              Book Private Consultation
            </Link>
            <Link
              href="/bride"
              className="button-secondary"
            >
              Explore Bridal Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
