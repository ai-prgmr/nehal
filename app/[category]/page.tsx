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
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-stone-900 selection:text-stone-50 overflow-x-hidden">
      {/* 2. Hero Section (Immersive & Editorial) */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-stone-900">
        <Image
          src={categoryData.heroVideoOrImage}
          alt={categoryData.title}
          fill
          priority
          className="object-contain opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full z-20 px-6 lg:px-12 pb-24 text-stone-50">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <FadeIn delay={100}>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-wider leading-none">
                {categoryData.title}
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="font-sans text-lg md:text-xl max-w-2xl font-light leading-relaxed tracking-wide text-stone-200">
                {categoryData.manifesto}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. The Collection (Products Grid) */}
      <section className="w-full py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide mb-20 md:mb-32 text-center uppercase">
              The Collection
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {categoryData.products.map((product, idx) => (
              <FadeIn
                key={idx}
                delay={idx % 2 === 0 ? 0 : 200}
                className={`group flex flex-col gap-8 ${idx % 2 !== 0 ? "md:mt-32" : ""
                  }`}
              >
                <div className="relative w-full aspect-3/4 overflow-hidden bg-stone-200 shadow-xl">
                  {/* Using unoptimized for placeholder simplicity, usually next/image optimization is fine */}
                  <Image
                    src={product.imagePlaceholder}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-700 pointer-events-none" />
                </div>
                <div className="space-y-4 px-2 md:px-6">
                  <h3 className="font-serif text-3xl text-stone-800 tracking-wide">
                    {product.name}
                  </h3>
                  <div className="w-12 h-px bg-stone-400" />
                  <p className="font-sans text-stone-600 font-light leading-relaxed text-lg pt-2 tracking-wide">
                    {product.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Experience (Services Section) */}
      <section className="w-full py-32 bg-[#faf9f6] px-6 lg:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide mb-20 uppercase">
              The Experience
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
            {categoryData.services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="flex flex-col gap-6 border-t border-stone-300 pt-8">
                <h3 className="font-sans text-2xl lg:text-3xl font-thin tracking-widest text-stone-800 uppercase">
                  {service.title}
                </h3>
                <p className="font-sans text-stone-600 font-light leading-relaxed text-lg pr-4 tracking-wide text-pretty">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action (The Booking Prompt) */}
      <section className="w-full bg-stone-900 text-stone-50 py-32 px-6 lg:px-12 text-center border-t border-stone-800">
        <FadeIn className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-serif italic text-5xl md:text-6xl text-stone-100 mb-8">
            Begin Your Design Journey.
          </h2>
          <div className="flex justify-center">
            <Link
              href="/book-appointment"
              className="group relative inline-block px-12 py-6 bg-stone-100 text-stone-900 font-sans font-medium tracking-[0.2em] uppercase text-sm hover:bg-white transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-stone-100 mix-blend-difference group-hover:text-stone-900 transition-colors duration-500">
                Book an Appointment
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-stone-300/80 transform scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100 z-0" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
