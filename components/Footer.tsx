import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-warm-white text-text-secondary py-20 px-6 lg:px-12 border-t border-border-main">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2 md:pr-10">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/nehal/nehal-jhavveri-logo.png"
              alt="Nehal Jhavveri"
              width={500}
              height={98}
              className="w-100 h-19.5 max-w-full md:w-125 md:h-24.5 object-contain"
            />
          </Link>
          <p className="text-sm font-light text-text-secondary leading-relaxed max-w-sm mb-6">
            Elevating the essence of luxury Indian bridal couture and contemporary personal image with timeless craftsmanship and intentional design.
          </p>
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-text-gold">
            <span>INDORE, INDIA</span>
            <span>•</span>
            <span>DESTINATION</span>
            <span>•</span>
            <span>GLOBAL</span>
          </div>
        </div>

        {/* Celebration Links */}
        <div>
          <h4 className="text-text-primary font-sans font-semibold uppercase tracking-[0.16em] text-xs mb-6">
            Celebration
          </h4>
          <ul className="space-y-3 font-light text-sm">
            <li>
              <Link href="/bride" className="hover:text-text-primary transition-colors duration-200">
                The Bride
              </Link>
            </li>
            <li>
              <Link href="/groom" className="hover:text-text-primary transition-colors duration-200">
                The Groom
              </Link>
            </li>
            <li>
              <Link href="/family" className="hover:text-text-primary transition-colors duration-200">
                The Family
              </Link>
            </li>
            <li>
              <Link href="/nri-styling" className="hover:text-text-primary transition-colors duration-200 text-text-gold font-medium">
                NRI & Global Concierge
              </Link>
            </li>
            <li>
              <Link href="/festivals" className="hover:text-text-primary transition-colors duration-200">
                Festivals & Occasions
              </Link>
            </li>
          </ul>
        </div>

        {/* Image Stylist Links */}
        <div>
          <h4 className="text-text-primary font-sans font-semibold uppercase tracking-[0.16em] text-xs mb-6">
            Image Stylist
          </h4>
          <ul className="space-y-3 font-light text-sm">
            <li>
              <Link href="/image-stylist#transformation" className="hover:text-text-primary transition-colors duration-200">
                Style Transformation
              </Link>
            </li>
            <li>
              <Link href="/image-stylist#wardrobe" className="hover:text-text-primary transition-colors duration-200">
                Wardrobe Redesign
              </Link>
            </li>
            <li>
              <Link href="/image-stylist#coaching" className="hover:text-text-primary transition-colors duration-200">
                Luxury Style Coaching
              </Link>
            </li>
            <li>
              <Link href="/image-stylist#shopping" className="hover:text-text-primary transition-colors duration-200">
                Shopping Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Atelier & Connect */}
        <div>
          <h4 className="text-text-primary font-sans font-semibold uppercase tracking-[0.16em] text-xs mb-6">
            The Atelier
          </h4>
          <ul className="space-y-3 font-light text-sm">
            <li>
              <Link href="/about" className="hover:text-text-primary transition-colors duration-200">
                Meet Nehal
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-text-primary transition-colors duration-200">
                Book a Fitting
              </Link>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-200">
                Instagram @nehaljhavveri
              </a>
            </li>
            <li>
              <a href="mailto:style@nehaljhavveri.com" className="hover:text-text-primary transition-colors duration-200">
                style@nehaljhavveri.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border-main flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-wider text-text-muted">
        <p>© {new Date().getFullYear()} Nehal Jhavveri Couture & Image Styling. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <span>Private Appointments Only</span>
          <span>•</span>
          <span className="text-text-gold">Artisanal Luxury</span>
        </div>
      </div>
    </footer>
  );
}
