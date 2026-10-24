"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [celebrationOpen, setCelebrationOpen] = useState(false);
  const [desktopWeddingOpen, setDesktopWeddingOpen] = useState(false);
  const [imageStylistOpen, setImageStylistOpen] = useState(false);
  const [mobileCelebrationOpen, setMobileCelebrationOpen] = useState(false);
  const [mobileWeddingOpen, setMobileWeddingOpen] = useState(false);
  const [mobileImageStylistOpen, setMobileImageStylistOpen] = useState(false);

  const pathname = usePathname();
  const celebrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const weddingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageStylistTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  interface SubmenuItem {
    name: string;
    href: string;
    description: string;
  }

  interface CelebrationCategory {
    name: string;
    href: string;
    description: string;
    submenu?: SubmenuItem[];
  }

  const celebrationCategories: CelebrationCategory[] = [
    {
      name: "Engagement / Roka",
      href: "/engagement",
      description: "Ring ceremony rituals & intimate festive couture",
    },
    {
      name: "Wedding",
      href: "/wedding",
      description: "The Bride, The Groom & The Family couture",
      submenu: [
        { name: "The Bride", href: "/bride", description: "Bespoke bridal lehengas & trousseau styling" },
        { name: "The Groom", href: "/groom", description: "Royal sherwanis & artisanal tailoring" },
        { name: "The Family", href: "/family", description: "Synchronized looks for parents & bridal party" },
      ],
    },
    {
      name: "Pre-Wedding Shoots",
      href: "/pre-wedding",
      description: "Cinematic outdoor concepts & high-fashion editorials",
    },
    {
      name: "Post-Wedding Shoots",
      href: "/post-wedding",
      description: "Effortless reception glam & contemporary portraiture",
    },
    {
      name: "GodBharai / Baby Shower",
      href: "/godbharai",
      description: "Sacred blessing rituals & heirloom silk drapes",
    },
    {
      name: "Maternity Styling and Shoot",
      href: "/maternity",
      description: "Luminous maternity couture & photoshoot art direction",
    },
    {
      name: "Festivals & Occasions",
      href: "/festivals",
      description: "Celebration edits, Diwali soirées & destination attire",
    },
  ];

  const imageStylistItems = [
    { name: "Style Transformation", href: "/image-stylist#transformation", description: "Personal color, silhouette & signature style discovery" },
    { name: "Wardrobe Redesign", href: "/image-stylist#wardrobe", description: "Closet audits, capsule curations & piece revitalizations" },
    { name: "Executive & Presence Styling", href: "/image-stylist#coaching", description: "Mindset, presence & executive image elevation" },
    { name: "Shopping Consulting", href: "/image-stylist#shopping", description: "VIP boutique access & personal styling accompaniment" },
  ];

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCelebrationOpen(false);
    setDesktopWeddingOpen(false);
    setImageStylistOpen(false);
    setMobileWeddingOpen(false);
  }, [pathname]);

  const handleCelebrationEnter = () => {
    if (celebrationTimeoutRef.current) clearTimeout(celebrationTimeoutRef.current);
    setCelebrationOpen(true);
  };

  const handleCelebrationLeave = () => {
    celebrationTimeoutRef.current = setTimeout(() => {
      setCelebrationOpen(false);
      setDesktopWeddingOpen(false);
    }, 150);
  };

  const handleWeddingEnter = () => {
    if (weddingTimeoutRef.current) clearTimeout(weddingTimeoutRef.current);
    setDesktopWeddingOpen(true);
  };

  const handleWeddingLeave = () => {
    weddingTimeoutRef.current = setTimeout(() => {
      setDesktopWeddingOpen(false);
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

  const allCelebrationHrefs = celebrationCategories.flatMap((item) =>
    item.submenu ? [item.href, ...item.submenu.map((s) => s.href)] : [item.href]
  );
  const isCelebrationActive = allCelebrationHrefs.some((href) => pathname === href);
  const isImageStylistActive = pathname === "/image-stylist" || pathname.startsWith("/image-stylist");

  return (
    <header className="w-full z-50 bg-silk/95 backdrop-blur-md border-b border-border-main transition-all duration-300 px-6 lg:px-12 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="relative z-50 transition-opacity duration-300 hover:opacity-85 flex items-center"
          aria-label="Nehal Jhavveri Homepage"
        >
          <Image
            src="/nehal/test-logo-removebg.png"
            alt="Nehal Jhavveri logo"
            width={300}
            height={300}
            className="object-contain"
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
              <div className="absolute top-full -left-4 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.12)] py-2.5 px-2 rounded-xs">
                  {celebrationCategories.map((item) => {
                    if (item.submenu) {
                      const isSubmenuActive =
                        item.submenu.some((sub) => pathname === sub.href) || pathname === item.href;

                      return (
                        <div
                          key={item.name}
                          className="relative"
                          onMouseEnter={handleWeddingEnter}
                          onMouseLeave={handleWeddingLeave}
                        >
                          <div
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xs transition-all cursor-pointer ${isSubmenuActive || desktopWeddingOpen
                              ? "bg-warm-white text-text-primary"
                              : "text-text-secondary hover:bg-ivory hover:text-text-primary"
                              }`}
                          >
                            <Link href={item.href} className="flex-1 pr-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs uppercase tracking-[0.14em] font-medium text-text-primary">
                                  {item.name}
                                </span>
                              </div>
                              <div className="text-[11px] text-text-muted mt-0.5 leading-snug">
                                {item.description}
                              </div>
                            </Link>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDesktopWeddingOpen(!desktopWeddingOpen);
                              }}
                              aria-label="Toggle Wedding submenu"
                              className="p-1 hover:bg-champagne-light/40 rounded-xs text-text-muted hover:text-text-gold transition-colors"
                            >
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopWeddingOpen ? "translate-x-0.5 text-text-gold" : ""
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>

                          {/* Desktop Nested Submenu Flyout */}
                          {desktopWeddingOpen && (
                            <div
                              className="absolute left-full top-0 ml-1.5 w-76 pt-0 z-50 animate-in fade-in slide-in-from-left-2 duration-150"
                              onMouseEnter={handleWeddingEnter}
                              onMouseLeave={handleWeddingLeave}
                            >
                              {/* Invisible bridge to prevent pointer gap drop */}
                              <div className="absolute -left-3 top-0 w-4 h-full" />
                              <div className="bg-silk border border-border-main shadow-[0_15px_45px_rgba(63,58,50,0.16)] py-2.5 px-2 rounded-xs">
                                <div className="px-3.5 py-1 mb-1 text-[10px] uppercase tracking-[0.18em] text-text-gold font-medium border-b border-border-soft flex items-center justify-between">
                                  <span>Wedding Submenu</span>
                                  <span className="text-[9px] text-text-muted font-normal">3 Curations</span>
                                </div>
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={`block px-3.5 py-2.5 rounded-xs transition-all ${pathname === sub.href
                                      ? "bg-warm-white text-text-primary font-medium"
                                      : "text-text-secondary hover:bg-ivory hover:text-text-primary"
                                      }`}
                                  >
                                    <div className="text-xs uppercase tracking-[0.14em] font-medium flex items-center justify-between">
                                      <span>{sub.name}</span>
                                      <span className="text-text-gold text-xs">→</span>
                                    </div>
                                    <div className="text-[11px] text-text-muted mt-0.5 leading-snug">
                                      {sub.description}
                                    </div>
                                  </Link>
                                ))}
                                <div className="pt-2 mt-2 border-t border-border-soft px-3.5">
                                  <Link
                                    href={item.href}
                                    className="text-[11px] uppercase tracking-[0.16em] text-text-gold hover:text-text-primary font-medium flex items-center justify-between"
                                  >
                                    <span>All Wedding Couture</span>
                                    <span>→</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-2.5 rounded-xs transition-all ${pathname === item.href
                          ? "bg-warm-white text-text-primary font-medium"
                          : "text-text-secondary hover:bg-ivory hover:text-text-primary"
                          }`}
                      >
                        <div className="text-xs uppercase tracking-[0.14em] font-medium">{item.name}</div>
                        <div className="text-[11px] text-text-muted mt-0.5 leading-snug">{item.description}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* NRI Occasion Stylist */}
          <Link
            href="/nri-styling"
            className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors py-2 ${pathname === "/nri-styling"
              ? "text-text-primary font-semibold border-b border-text-primary"
              : "text-text-secondary hover:text-text-primary"
              }`}
          >
            NRI Stylist
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
              <div className="pl-2 pt-2 space-y-2">
                {celebrationCategories.map((item) => {
                  if (item.submenu) {
                    return (
                      <div key={item.name} className="py-1">
                        <button
                          type="button"
                          onClick={() => setMobileWeddingOpen(!mobileWeddingOpen)}
                          className="flex items-center justify-between w-full text-xs uppercase tracking-[0.12em] text-text-primary font-medium py-1.5 px-2 rounded-xs hover:bg-ivory transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.name}</span>
                            <span className="text-[9px] uppercase tracking-[0.1em] px-1.5 py-0.5 bg-champagne-light/60 text-text-gold rounded-full font-normal">
                              Submenu
                            </span>
                          </div>
                          <svg
                            className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 ${mobileWeddingOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {mobileWeddingOpen && (
                          <div className="pl-4 pr-2 pt-1 pb-1 space-y-2 border-l-2 border-champagne/40 ml-3 my-1">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs uppercase tracking-[0.12em] text-text-secondary hover:text-text-gold py-1"
                              >
                                • {sub.name}
                              </Link>
                            ))}
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-[11px] uppercase tracking-[0.12em] text-text-gold font-medium pt-1"
                            >
                              View All Wedding Couture →
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs uppercase tracking-[0.12em] text-text-secondary hover:text-text-gold py-1.5 px-2 rounded-xs"
                    >
                      {item.name}
                    </Link>
                  );
                })}
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
            <span>NRI Bridal & Occasion Stylist</span>
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
