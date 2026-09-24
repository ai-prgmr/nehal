import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pt-24">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto py-24 px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl border-4 border-stone-100">
            <Image
              src="/nehal/nehal-profile.png"
              alt="Nehal Jhavveri - Bridal & Occasion Stylist"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl text-stone-800">
            About Nehal
          </h1>
          <h2 className="uppercase tracking-widest text-sm md:text-base text-stone-500 font-medium">
            Bridal & Occasion Stylist | Image Coach
          </h2>
          <div className="w-16 h-px bg-stone-300 mx-auto md:mx-0" />
          
          <p className="text-xl md:text-2xl text-stone-700 font-medium leading-relaxed">
            This is where the woman behind the styling becomes important.
          </p>
          
          <div className="space-y-6 text-lg text-stone-600 font-light leading-relaxed tracking-wide">
            <p>
              My philosophy is deeply rooted in the belief that luxury is an experience—an intimately crafted journey that materializes long before the day arrives. I draw inspiration from the intricate heritage of Indian textiles and the effortless silhouettes of modern couture.
            </p>
            <p>
              Every garment is an architectural marvel—meticulously designed to resonate with you, ensuring that an individual&apos;s essence naturally emanates through hand-woven artistry and delicate embellishments.
            </p>
            <p>
              Elevating the essence of Indian bridal elegance with thoughtfully crafted couture that transcends time. We start 3-6 months ahead to plan every detail—clothing, attire, and makeup. Whether you need individual styling or a complete family package, we architect your perfect look for the big day.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-white py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-3xl md:text-4xl lg:text-5xl text-stone-600 leading-relaxed">
            &ldquo;Styling isn&apos;t about changing who you are. <br className="hidden md:block" />
            It&apos;s about helping you see yourself with confidence.&rdquo;
          </p>
          <p className="uppercase tracking-widest text-sm text-stone-400 font-medium mt-8">
            — Nehal
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-stone-900 text-stone-50 py-32 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl text-stone-100">
            Let&apos;s Craft Your Perfect Look
          </h2>
          <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed">
            Ready to embark on an intimately crafted journey for your big day? Book an appointment to discuss your vision and discover how we can elevate your style with confidence.
          </p>
          <div className="pt-8 flex justify-center">
            <Link 
              href="/book-appointment" 
              className="group relative inline-block px-12 py-6 bg-stone-100 text-stone-900 font-medium tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Book an Appointment</span>
              <div className="absolute top-0 left-0 w-full h-full bg-stone-200/50 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
