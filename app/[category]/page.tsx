import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories } from "../../data/categories";
import FadeIn from "../../components/FadeIn";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ivory text-text-primary selection:bg-champagne selection:text-text-primary">
      {/* 1. Hero Section (2-Column Layout, 9:16 Media First on Mobile) */}
      <section className="relative overflow-hidden bg-linear-to-b from-silk via-ivory to-warm-white py-12 lg:py-20 border-b border-border-main">
        {/* Subtle Ambient Silk Radial Glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-champagne-light/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Media Column (9:16 Portrait Media, First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-90 md:max-w-100 aspect-9/16 image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white group">
                {categoryData.heroVideo ? (
                  <video
                    src={categoryData.heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                ) : (
                  <Image
                    src={categoryData.heroVideoOrImage}
                    alt={categoryData.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 340px, 400px"
                  />
                )}
                {/* Subtle Light Editorial Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-text-primary/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-light text-champagne-light drop-shadow-sm">
                    {categoryData.tagline || "Haute Couture Edition"}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Second on Mobile, Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Celebration Atelier</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary leading-[1.02] font-normal tracking-tight">
                  {categoryData.title}
                </h1>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300}>
                <p className="font-sans text-base lg:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
                  {categoryData.manifesto}
                </p>
              </FadeIn>

              <FadeIn delay={500} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="button-primary w-full sm:w-auto text-center">
                  Book a Consultation
                </Link>
                <a href="#collection" className="button-secondary w-full sm:w-auto text-center">
                  View Portfolio
                </a>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Collection (Products Grid) */}
      <section id="collection" className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-pearl border-b border-border-main">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Signature Creations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              The Collection
            </h2>
            <div className="gold-rule mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {categoryData.products.map((product, idx) => (
              <FadeIn
                key={idx}
                delay={idx % 2 === 0 ? 0 : 200}
                className="card-editorial group flex flex-col"
              >
                <div className="relative w-full aspect-4/5 overflow-hidden bg-warm-white">
                  <Image
                    src={product.imagePlaceholder}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/8 transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="p-8 space-y-3 bg-silk">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-text-gold font-medium block">
                    Bespoke Piece
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-text-primary">
                    {product.name}
                  </h3>
                  <div className="w-10 h-px bg-border-main" />
                  <p className="font-sans text-text-secondary font-light leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Bespoke Experience (Services Section) */}
      <section className="w-full py-24 lg:py-32 bg-ivory px-6 lg:px-12 border-b border-border-main">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
              Tailored For You
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-text-primary">
              The Bespoke Experience
            </h2>
            <div className="gold-rule mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {categoryData.services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="card-editorial p-8 space-y-4 bg-silk">
                <span className="text-xs uppercase tracking-[0.18em] text-text-gold font-medium block">
                  Bespoke Service
                </span>
                <h3 className="font-serif text-2xl text-text-primary">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-border-main" />
                <p className="font-sans text-text-secondary font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity & Godbharai Styling Section (Section of Occasion Styling) */}
      {categoryData.slug === "festivals" && (
        <section id="maternity" className="w-full py-24 lg:py-32 bg-pearl px-6 lg:px-12 border-b border-border-main scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="card-editorial p-8 sm:p-12 lg:p-16 bg-silk border border-border-main">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-white border border-border-main text-text-gold text-xs uppercase tracking-[0.18em] font-medium">
                    <span>Occasion Special Edit</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight">
                    Maternity Styling & Godbharai Styling
                  </h2>
                  <div className="gold-rule" />
                  <p className="font-sans text-base text-text-secondary font-light leading-relaxed">
                    Celebrating the sacred milestone of motherhood calls for couture that harmonizes traditional sanctity with supreme comfort. Nehal curates bespoke Godbharai (baby shower) ceremony ensembles, pre-draped heirloom silk sarees, and high-fashion maternity photoshoot silhouettes tailored for glowing radiance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-warm-white border border-border-soft space-y-1.5">
                      <h4 className="text-xs uppercase tracking-[0.14em] text-text-gold font-semibold">Godbharai Ceremony</h4>
                      <p className="text-xs text-text-secondary font-light">Lightweight pure Kanjeevarams, floral jewelry coordination, and pressure-free waist pleating.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-warm-white border border-border-soft space-y-1.5">
                      <h4 className="text-xs uppercase tracking-[0.14em] text-text-gold font-semibold">Maternity Photoshoot</h4>
                      <p className="text-xs text-text-secondary font-light">Flowing pastel cape gowns, breathable Chanderi anarkalis, and trimester-adaptive silhouettes.</p>
                    </div>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Link href="/maternity" className="button-primary text-xs py-2.5! px-6!">
                      View Dedicated Maternity Collection
                    </Link>
                    <Link href="/contact" className="button-secondary text-xs py-2.5! px-6!">
                      Book Maternity Consultation
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative aspect-3/4 w-full max-w-sm image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-border-main bg-warm-white">
                    <Image
                      src="/nehal/images/maternity-hero.jpg"
                      alt="Nehal Jhavveri - Maternity & Godbharai Styling"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Call to Action (Private Consultation) */}
      <section className="w-full bg-linear-to-br from-silk via-[#F8F2E7] to-champagne-light py-24 lg:py-32 px-6 lg:px-12 text-center">
        <FadeIn className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-text-gold font-medium">
            Private Atelier Appointments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            Begin Your Couture Journey.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            From preliminary textile sourcing to the final champagne fitting, experience bespoke luxury tailored exclusively around your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="button-primary"
            >
              Book Private Consultation
            </Link>
            <Link
              href="/image-stylist"
              className="button-secondary"
            >
              Explore Image Styling
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
