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
    <div className="min-h-screen bg-[#F8F5EE] text-[#3F3A32] selection:bg-[#E8D7B5] selection:text-[#3F3A32]">
      {/* 1. Hero Section (2-Column Layout, 9:16 Media First on Mobile) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F5EE] to-[#F5F1E8] py-12 lg:py-20 border-b border-[#E7DFD1]">
        {/* Subtle Ambient Silk Radial Glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F1E5CC]/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Media Column (9:16 Portrait Media, First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[9/16] image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-[#E7DFD1] bg-[#F5F1E8] group">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F3A32]/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-light text-[#F1E5CC] drop-shadow-sm">
                    {categoryData.tagline || "Haute Couture Edition"}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Second on Mobile, Left on Desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <FadeIn delay={100} className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E7DFD1] text-[#9B8150] text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>Celebration Atelier</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#3F3A32] leading-[1.02] font-normal tracking-tight">
                  {categoryData.title}
                </h1>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300}>
                <p className="font-sans text-base lg:text-lg text-[#71695D] font-light leading-relaxed max-w-xl">
                  {categoryData.manifesto}
                </p>
              </FadeIn>

              <FadeIn delay={500} className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="button-primary w-full sm:w-auto text-center">
                  Schedule Private Fitting
                </Link>
                <a href="#collection" className="button-secondary w-full sm:w-auto text-center">
                  View Collection
                </a>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The Collection (Products Grid) */}
      <section id="collection" className="w-full py-24 lg:py-32 px-6 lg:px-12 bg-[#FCFAF5] border-b border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
              Signature Creations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32]">
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
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F5F1E8]">
                  <Image
                    src={product.imagePlaceholder}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#3F3A32]/0 group-hover:bg-[#3F3A32]/8 transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="p-8 space-y-3 bg-[#FFFDF8]">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#9B8150] font-medium block">
                    Bespoke Piece
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3F3A32]">
                    {product.name}
                  </h3>
                  <div className="w-10 h-px bg-[#E7DFD1]" />
                  <p className="font-sans text-[#71695D] font-light leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Bespoke Experience (Services Section) */}
      <section className="w-full py-24 lg:py-32 bg-[#F8F5EE] px-6 lg:px-12 border-b border-[#E7DFD1]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
              Tailored For You
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32]">
              The Bespoke Experience
            </h2>
            <div className="gold-rule mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {categoryData.services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="card-editorial p-8 space-y-4 bg-[#FFFDF8]">
                <span className="text-xs uppercase tracking-[0.18em] text-[#9B8150] font-medium block">
                  Bespoke Service
                </span>
                <h3 className="font-serif text-2xl text-[#3F3A32]">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-[#E7DFD1]" />
                <p className="font-sans text-[#71695D] font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action (Private Consultation) */}
      <section className="w-full bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7] to-[#F1E5CC] py-24 lg:py-32 px-6 lg:px-12 text-center">
        <FadeIn className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
            Private Atelier Appointments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight">
            Begin Your Couture Journey.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-[#71695D] font-light leading-relaxed max-w-2xl mx-auto">
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
