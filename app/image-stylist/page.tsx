import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Image Stylist & Style Coaching | Nehal Jhavveri",
  description: "Executive image coaching, bespoke wardrobe redesign, and personal style transformation by Nehal Jhavveri in Indore, India and worldwide.",
};

export default function ImageStylistPage() {
  const services = [
    {
      id: "transformation",
      title: "Style Transformation",
      tagline: "AUTHENTIC SELF-EXPRESSION & SILHOUETTE MASTERY",
      description:
        "A transformative deep dive into your personal aesthetic. We analyze your body architecture, skin undertones, and lifestyle to craft an effortless signature style that feels authentic and commanding.",
      deliverables: [
        "Personalized seasonal color palette profiling",
        "Body silhouette & architectural proportions guide",
        "Curated visual moodboards & signature style lookbook",
        "Hairstyle, grooming & jewelry harmonization",
      ],
      image: "/nehal/images/style-transformation.jpg",
    },
    {
      id: "wardrobe",
      title: "Wardrobe Redesign",
      tagline: "CURATED CAPSULES & CLOSET ARCHITECTURE",
      description:
        "Eliminate decision fatigue with a strategic closet audit and restructure. We evaluate your current pieces, breathe new life into heirloom treasures, and build a high-rotation capsule wardrobe.",
      deliverables: [
        "In-person or virtual closet audit & edit",
        "Heirloom revival & luxury tailoring recommendations",
        "Seasonal capsule wardrobe curation (30+ versatile outfits)",
        "Digital wardrobe catalog for effortless daily dressing",
      ],
      image: "/nehal/images/wardrobe-redesign.jpg",
    },
    {
      id: "coaching",
      title: "Luxury Style Coaching",
      tagline: "EXECUTIVE PRESENCE, POSTURE & CONFIDENCE",
      description:
        "Style extends beyond fabric, it is your silent presence and leadership language. We coach executives, high-profile personalities, and brides to project authority, poise, and magnetic ease.",
      deliverables: [
        "One-on-one executive presence coaching sessions",
        "Public speaking & milestone event appearance styling",
        "Body language, posture & garment deportment training",
        "Personal branding & media appearance alignment",
      ],
      image: "/nehal/images/luxury-style-coaching.jpg",
    },
    {
      id: "shopping",
      title: "Shopping Consulting",
      tagline: "VIP ATELIER ACCESS & CONSCIOUS LUXURY INVESTMENTS",
      description:
        "Experience seamless, curated shopping with private salon access. Nehal pre-selects exclusive designer collections, rare handloom weaves, and investment accessories tailored precisely to your style blueprint.",
      deliverables: [
        "VIP private suite shopping at premier luxury boutiques",
        "Direct artisan & heritage handloom sourcing",
        "Bespoke accessories, fine jewelry & footwear coordination",
        "Destination shopping itineraries in Mumbai, Delhi & abroad",
      ],
      image: "/nehal/images/shopping-consulting.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#3F3A32] selection:bg-[#E8D7B5] selection:text-[#3F3A32]">
      {/* Hero Section (2-Column Layout, 9:16 Media First on Mobile) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F5EE] to-[#F5F1E8] py-12 lg:py-20 border-b border-[#E7DFD1]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F1E5CC]/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Media Column (9:16 Portrait Media, First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[9/16] image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-[#E7DFD1] bg-[#F5F1E8]">
                <Image
                  src="/nehal/nehal-profile.png"
                  alt="Nehal Jhavveri - Image Coach & Stylist"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 340px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F3A32]/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-light text-[#F1E5CC] drop-shadow-sm">
                    Private Coaching & Consulting
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Second on Mobile, Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E7DFD1] text-[#9B8150] text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Executive & Personal Image Architecture</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#3F3A32] leading-[1.02] font-normal tracking-tight">
                  Image Stylist & <br className="hidden sm:inline" />
                  <span className="italic font-light">Style Coaching.</span>
                </h1>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300}>
                <p className="font-sans text-base lg:text-lg text-[#71695D] font-light leading-relaxed max-w-xl">
                  Styling isn&apos;t about changing who you are, it&apos;s about elevating how you see yourself and how the world experiences your presence. We curate intentional wardrobes that command respect and effortless grace.
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
      <section className="w-full bg-[#FCFAF5] py-20 lg:py-28 px-6 lg:px-12 border-b border-[#E7DFD1]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
            The Philosophy
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#3F3A32] leading-relaxed">
            &ldquo;When your visual presence aligns with your inner authority, confidence becomes second nature.&rdquo;
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="font-sans text-base text-[#71695D] font-light leading-relaxed max-w-2xl mx-auto">
            From CEOs preparing for board meetings and keynote presentations, to women stepping into high-profile social milestones, our image consulting programs provide a bespoke roadmap to sartorial mastery.
          </p>
        </div>
      </section>

      {/* 3. Detailed Services Breakdown */}
      <section id="services" className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-[#F8F5EE]">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
              Curated Programs
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32]">
              Styling & Coaching Services
            </h2>
            <div className="gold-rule mx-auto" />
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
                  <FadeIn className="card-editorial p-8 sm:p-12 lg:p-16 bg-[#FFFDF8]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      
                      {/* Text Column */}
                      <div className={`space-y-6 ${isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"}`}>
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9B8150] font-medium">
                            {service.tagline}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl text-[#3F3A32]">
                          {service.title}
                        </h3>

                        <p className="font-sans text-base text-[#71695D] font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs uppercase tracking-[0.16em] text-[#3F3A32] font-semibold">
                            Program Deliverables & Experience:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-[#71695D] font-light">
                                <span className="text-[#9B8150] mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Link href="/contact" className="button-primary text-xs !py-2.5 !px-6">
                            Book {service.title}
                          </Link>
                        </div>
                      </div>

                      {/* Image Preview Column */}
                      <div className={`flex justify-center ${isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"}`}>
                        <div className="relative aspect-[4/5] w-full max-w-sm image-frame shadow-[0_15px_45px_rgba(63,58,50,0.08)] border border-[#E7DFD1] bg-[#F5F1E8]">
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

      {/* 4. Consultation CTA */}
      <section className="w-full bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7] to-[#F1E5CC] py-24 lg:py-32 px-6 lg:px-12 text-center border-t border-[#E7DFD1]">
        <FadeIn className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
            Private Curation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight">
            Elevate Your Style Signature.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-[#71695D] font-light leading-relaxed max-w-2xl mx-auto">
            Book an initial 30-minute discovery consultation to determine the ideal styling or wardrobe coaching track tailored to your lifestyle.
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
              Explore Bridal Styling
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
