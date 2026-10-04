import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "About Nehal Jhavveri | Bridal Stylist & Image Coach",
  description: "Meet Nehal Jhavveri, bridging traditional Indian craftsmanship and contemporary couture styling.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#3F3A32] selection:bg-[#E8D7B5] selection:text-[#3F3A32]">
      {/* Hero Section (2-Column Layout, 9:16 / Portrait Media First on Mobile) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F5EE] to-[#F5F1E8] py-12 lg:py-24 border-b border-[#E7DFD1]">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F1E5CC]/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Image Column (First on Mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[4/5] image-frame shadow-[0_20px_60px_rgba(63,58,50,0.12)] border border-[#E7DFD1] bg-[#F5F1E8]">
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#E7DFD1] text-[#9B8150] text-xs uppercase tracking-[0.18em] font-medium shadow-xs">
                  <span>The Woman Behind the Vision</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight">
                  About Nehal Jhavveri
                </h1>
                <h2 className="uppercase tracking-[0.16em] text-xs text-[#71695D] font-medium">
                  Bridal & Occasion Stylist | Image Coach
                </h2>
              </FadeIn>

              <div className="gold-rule mx-auto lg:mx-0" />

              <FadeIn delay={300} className="space-y-4 text-base text-[#71695D] font-light leading-relaxed max-w-2xl">
                <p className="text-lg text-[#3F3A32] font-normal leading-relaxed">
                  This is where the woman behind the styling becomes essential.
                </p>
                <p>
                  My philosophy is deeply rooted in the belief that luxury is an experience, an intimately crafted journey that materializes long before the wedding day arrives. I draw inspiration from the intricate heritage of Indian handlooms and the effortless silhouettes of modern luxury couture.
                </p>
                <p>
                  Every garment is an architectural masterpiece, meticulously designed to resonate with you, ensuring that an individual&apos;s natural essence emanates through hand-woven artistry, delicate embellishments, and authentic silhouette tailoring.
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
      <section className="w-full bg-[#FCFAF5] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#E7DFD1]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
            Core Belief
          </span>
          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#3F3A32] leading-relaxed">
            &ldquo;Styling isn&apos;t about changing who you are. <br className="hidden md:block" />
            It&apos;s about helping you see yourself with confidence.&rdquo;
          </p>
          <div className="gold-rule mx-auto" />
          <p className="uppercase tracking-[0.2em] text-xs text-[#968D80] font-medium">
            Nehal Jhavveri
          </p>
        </div>
      </section>

      {/* The Atelier Approach */}
      <section className="w-full bg-[#F8F5EE] py-24 lg:py-32 px-6 lg:px-12 border-b border-[#E7DFD1]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
              Our Values
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#3F3A32]">
              The Atelier Ethos
            </h2>
            <div className="gold-rule mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-editorial p-8 space-y-4 bg-[#FFFDF8]">
              <h3 className="font-serif text-2xl text-[#3F3A32]">Artisanal Heritage</h3>
              <p className="text-xs sm:text-sm text-[#71695D] font-light leading-relaxed">
                Direct partnerships with master zardozi, chikankari, and handloom weavers across Varanasi, Gujarat, and Bengal.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-[#FFFDF8]">
              <h3 className="font-serif text-2xl text-[#3F3A32]">Individual Radiance</h3>
              <p className="text-xs sm:text-sm text-[#71695D] font-light leading-relaxed">
                We never impose trends. Every silhouette, neckline, and color palette is customized to flatter your posture and energy.
              </p>
            </div>

            <div className="card-editorial p-8 space-y-4 bg-[#FFFDF8]">
              <h3 className="font-serif text-2xl text-[#3F3A32]">End-to-End Ease</h3>
              <p className="text-xs sm:text-sm text-[#71695D] font-light leading-relaxed">
                From pre-wedding skincare/jewelry synchronization to final ceremony draping, we handle every detail with calm perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="w-full bg-gradient-to-br from-[#FFFDF8] via-[#F8F2E7] to-[#F1E5CC] py-24 lg:py-32 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9B8150] font-medium">
            Let&apos;s Connect
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3F3A32] leading-tight">
            Let&apos;s Craft Your Perfect Look.
          </h2>
          <div className="gold-rule mx-auto" />
          <p className="text-base sm:text-lg text-[#71695D] font-light leading-relaxed max-w-2xl mx-auto">
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
