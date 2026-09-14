"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Bride", href: "/bride" },
    { name: "The Groom", href: "/groom" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 ${isScrolled ? "bg-stone-950/90 backdrop-blur-md py-4 shadow-md" : "bg-black/10 py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif italic text-3xl md:text-4xl text-stone-50 hover:text-stone-300 transition-colors relative z-50">
          Nehal
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-sans transition-colors duration-300 ${pathname === link.href ? "text-white font-medium shadow-sm drop-shadow-md" : "text-white hover:text-white drop-shadow-md"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            className={`px-6 py-2 border transition-all duration-300 uppercase text-xs tracking-widest font-medium ${isScrolled
              ? "border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-900"
              : "border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-stone-900 drop-shadow-xl shadow-black/50 bg-black/10"
              }`}
          >
            Book
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-stone-50 focus:outline-none relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-stone-950/95 backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden md:hidden flex flex-col items-center pt-24 ${mobileMenuOpen ? "h-screen" : "h-0"
          }`}
      >
        <div className="flex flex-col gap-6 w-full px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-stone-300 hover:text-white uppercase tracking-widest text-lg w-full border-b border-stone-800"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-stone-100 text-stone-900 hover:bg-white transition-all duration-300 uppercase text-sm tracking-widest font-medium w-full"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
