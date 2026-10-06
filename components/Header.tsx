"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [imageStylistOpen, setImageStylistOpen] = useState(false);
  const [mobileCelebrationOpen, setMobileCelebrationOpen] = useState(false);
  const [mobileImageStylistOpen, setMobileImageStylistOpen] = useState(false);

  const pathname = usePathname();
  const celebrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageStylistTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const celebrationItems = [
    { name: "The Bride", href: "/bride", description: "Bespoke bridal lehengas & trousseau styling" },
    { name: "The Groom", href: "/groom", description: "Royal sherwanis & artisanal tailoring" },
    { name: "Family", href: "/family", description: "Synchronized looks for parents & bridal party" },
    { name: "NRI & Global Concierge", href: "/nri-styling", description: "Weddings for NRIs & international friends" },
    { name: "Festivals", href: "/festivals", description: "Celebration edits & destination attire" },
  ];

  const imageStylistItems = [
    { name: "Style Transformation", href: "/image-stylist#transformation", description: "Personal color, silhouette & signature style discovery" },
    { name: "Wardrobe Redesign", href: "/image-stylist#wardrobe", description: "Closet audits, capsule curations & piece revitalizations" },
    { name: "Luxury Style Coaching", href: "/image-stylist#coaching", description: "Mindset, presence & executive image elevation" },
    { name: "Shopping Consulting", href: "/image-stylist#shopping", description: "VIP boutique access & personal styling accompaniment" },
  ];

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCelebrationOpen(false);
    setImageStylistOpen(false);
  }, [pathname]);

  const handleCelebrationEnter = () => {
    if (celebrationTimeoutRef.current) clearTimeout(celebrationTimeoutRef.current);
    setCelebrationOpen(true);
  };

  const handleCelebrationLeave = () => {
    celebrationTimeoutRef.current = setTimeout(() => {
      setCelebrationOpen(false);
    }, 150);
  };

  const handleImageStylistEnter = () => {
    if (imageStylistTimeoutRef.current) clearTimeout(imageStylistTimeoutRef.current);
    setImageStylistOpen(true);
  };

  const handleImageStylistLeave = () => {
    imageStylistTimeoutRef.current = setTimeout(() => {
      setImageStylistOpen(false);
    }, 150);
  };

  const isCelebrationActive = celebrationItems.some((item) => pathname === item.href);
  const isImageStylistActive = pathname === "/image-stylist" || pathname.startsWith("/image-stylist");

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-silk/95 backdrop-blur-md border-b border-border-main transition-all duration-300 px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative z-50 transition-opacity duration-300 hover:opacity-85 flex items-center"
          aria-label="Nehal Jhavveri Homepage"
        >
          <Image
            src="/nehal/nehal-jhavveri-logo.png"
            alt="Nehal Jhavveri logo"
            width={500}
            height={98}
            className="w-100 h-19.5 max-w-[calc(100vw-110px)] sm:max-w-100 md:max-w-none md:w-125 md:h-24.5 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9">
          {/* Image Stylist Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleImageStylistEnter}
            onMouseLeave={handleImageStylistLeave}
          >
            <Link
              href="/image-stylist"
              className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${isImageStylistActive ? "text-text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
                }`}
            >
              <span>Image Stylist</span>
              <svg
                className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 ${imageStylistOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Image Stylist Dropdown Menu */}
            {imageStylistOpen && (
              <div className="absolute top-full -left-4 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.08)] py-3 px-2 rounded-xs">
                  {imageStylistItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 rounded-xs transition-all text-text-secondary hover:bg-ivory hover:text-text-primary"
                    >
                      <div className="text-xs uppercase tracking-[0.14em] font-medium">{item.name}</div>
                      <div className="text-[11px] text-text-muted mt-0.5 leading-snug">{item.description}</div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-border-soft px-4">
                    <Link
                      href="/image-stylist"
                      className="text-[11px] uppercase tracking-[0.16em] text-text-gold hover:text-text-primary font-medium flex items-center gap-1"
                    >
                      <span>Explore All Styling Programs</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Celebration Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleCelebrationEnter}
            onMouseLeave={handleCelebrationLeave}
          >
            <button
              onClick={() => setCelebrationOpen(!celebrationOpen)}
              className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${isCelebrationActive ? "text-text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
                }`}
            >
              <span>Celebration</span>
              <svg
                className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 ${celebrationOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Celebration Dropdown Menu */}
            {celebrationOpen && (
              <div className="absolute top-full -left-4 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.08)] py-3 px-2 rounded-xs">
                  {celebrationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2.5 rounded-xs transition-all ${pathname === item.href
                        ? "bg-warm-white text-text-primary"
                        : "text-text-secondary hover:bg-ivory hover:text-text-primary"
                        }`}
                    >
                      <div className="text-xs uppercase tracking-[0.14em] font-medium">{item.name}</div>
                      <div className="text-[11px] text-text-muted mt-0.5 leading-snug">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* NRI Styling */}
          <Link
            href="/nri-styling"
            className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${pathname === "/nri-styling"
              ? "text-text-primary font-semibold border-b border-text-primary"
              : "text-text-secondary hover:text-text-primary"
              }`}
          >
            NRI Styling
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${pathname === "/about"
              ? "text-text-primary font-semibold border-b border-text-primary"
              : "text-text-secondary hover:text-text-primary"
              }`}
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${pathname === "/contact"
              ? "text-text-primary font-semibold border-b border-text-primary"
              : "text-text-secondary hover:text-text-primary"
              }`}
          >
            Contact
          </Link>

          {/* Book CTA */}
          <Link
            href="/contact"
            className="button-primary text-xs py-2! px-5!"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden focus:outline-none relative z-50 text-text-primary p-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-full left-0 w-full bg-silk border-b border-border-main shadow-xl transition-all duration-300 ease-in-out overflow-y-auto lg:hidden ${mobileMenuOpen ? "max-h-[85vh] py-6 px-6" : "max-h-0 py-0 px-6 opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-5 w-full">
          {/* Mobile Celebration Accordion */}
          <div className="border-b border-border-soft pb-3">
            <button
              onClick={() => setMobileCelebrationOpen(!mobileCelebrationOpen)}
              className="flex items-center justify-between w-full py-2 text-sm uppercase tracking-[0.14em] font-medium text-text-primary"
            >
              <span>Celebration</span>
              <svg
                className={`w-4 h-4 text-text-muted transition-transform ${mobileCelebrationOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileCelebrationOpen && (
              <div className="pl-3 pt-2 space-y-3">
                {celebrationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs uppercase tracking-[0.12em] text-text-secondary hover:text-text-gold py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Image Stylist Accordion */}
          <div className="border-b border-border-soft pb-3">
            <button
              onClick={() => setMobileImageStylistOpen(!mobileImageStylistOpen)}
              className="flex items-center justify-between w-full py-2 text-sm uppercase tracking-[0.14em] font-medium text-text-primary"
            >
              <span>Image Stylist</span>
              <svg
                className={`w-4 h-4 text-text-muted transition-transform ${mobileImageStylistOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileImageStylistOpen && (
              <div className="pl-3 pt-2 space-y-3">
                {imageStylistItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs uppercase tracking-[0.12em] text-text-secondary hover:text-text-gold py-1"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/image-stylist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.12em] text-text-gold font-medium pt-1"
                >
                  All Styling Services →
                </Link>
              </div>
            )}
          </div>

          {/* Mobile NRI Styling */}
          <Link
            href="/nri-styling"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm uppercase tracking-[0.14em] font-medium text-text-primary border-b border-border-soft flex items-center justify-between"
          >
            <span>NRI & Global Concierge</span>
            <span className="text-xs text-text-gold">★ Global</span>
          </Link>

          {/* Mobile About & Contact */}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm uppercase tracking-[0.14em] font-medium text-text-primary border-b border-border-soft"
          >
            About Nehal
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm uppercase tracking-[0.14em] font-medium text-text-primary border-b border-border-soft"
          >
            Contact & Fittings
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="button-primary text-center mt-2 w-full"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
