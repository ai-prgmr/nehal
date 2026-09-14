"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
export default function Home() {
  const [showHeroText, setShowHeroText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroText(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-stone-50">
      <main>
        {/* 1. Hero Section (The Hook) */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-stone-900">
          <video
            src="/landing-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black/10" />

          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <h1
              className={`transform transition-all duration-1000 ease-out font-serif text-5xl md:text-7xl lg:text-[6rem] text-stone-50 tracking-wider ${showHeroText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Crafting Your Perfect Moment.
            </h1>
          </div>
        </section>

        {/* 2. About the Designer Section */}
        <section className="w-full max-w-4xl mx-auto py-32 px-6 lg:px-12 text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-stone-100">
              <Image
                src="/designer_headshot.png"
                alt="Nehal Desai - Lead Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </div>

          <h2 className="font-serif italic text-5xl md:text-6xl mb-10 text-stone-800">
            Nehal Desai
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-stone-600 font-light leading-relaxed tracking-wide">
            <p>
              My philosophy is deeply rooted in the belief that luxury is an experience—an intimately crafted journey that materializes long before the day arrives. I draw inspiration from the intricate heritage of Indian textiles and the effortless silhouettes of modern couture.
            </p>
            <p>
              Every garment is an architectural marvel—meticulously designed to resonate with you, ensuring that an individual&apos;s essence naturally emanates through hand-woven artistry and delicate embellishments.
            </p>
          </div>
        </section>

        {/* 3. Split CTA Section (Bride & Groom) */}
        <section className="w-full flex flex-col md:grid md:grid-cols-2">
          {/* Bride Card */}
          <Link href="/bride" className="group relative h-[50vh] md:h-[80vh] w-full block overflow-hidden bg-stone-800">
            <video
              src="/bride.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/30 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h2 className="font-serif text-4xl md:text-6xl text-white transition-all duration-500 scale-100 group-hover:scale-105 group-hover:tracking-widest tracking-wider">
                For the Bride
              </h2>
            </div>
          </Link>

          {/* Groom Card */}
          <Link href="/groom" className="group relative h-[50vh] md:h-[80vh] w-full block overflow-hidden bg-stone-900">
            <video
              src="/groom.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/30 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h2 className="font-serif text-4xl md:text-6xl text-white transition-all duration-500 scale-100 group-hover:scale-105 group-hover:tracking-widest tracking-wider">
                For the Groom
              </h2>
            </div>
          </Link>
        </section>


        {/* 4. Categories Grid */}
        <section className="w-full bg-white py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-stone-800 tracking-wide">
              Explore Collections
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
              {categories.map((category, idx) => (
                <div key={idx} className="flex flex-col gap-6 group cursor-pointer">
                  <Link href={category.slug}>
                    <div className="relative w-full aspect-4/5 overflow-hidden shadow-xl border border-stone-200">
                      <Image
                        src={category.heroVideoOrImage}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif text-3xl text-center text-stone-800 group-hover:text-stone-500 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Our Process & Catalogue Section */}
        <section className="w-full bg-stone-900 text-stone-50">
          <div className="max-w-7xl mx-auto py-32 px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-6xl text-stone-100">Our Process</h2>
                <div className="w-16 h-px bg-stone-500" />
                <p className="text-xl md:text-2xl leading-relaxed text-stone-300 font-light">
                  We start 3-6 months ahead to plan every detail—clothing, attire, and makeup. Whether you need individual styling or a complete family package, we architect your perfect look for the big day.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <button className="group relative px-10 py-6  bg-stone-700 font-medium tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 text-stone-100 mix-blend-difference group-hover:text-stone-900 transition-colors">Download Our Exclusive Catalogue</span>
                  <div className="absolute top-0 left-0 w-full h-full bg-stone-200/50 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
