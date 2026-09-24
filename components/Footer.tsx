import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-stone-400 py-24 px-6 lg:px-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:pr-8">
          <h3 className="font-serif italic text-4xl text-stone-100 mb-6">
            <Image src="/nehal/Nehal-logo.png" alt="Nehal Jhavveri" width={300} height={300} />
          </h3>
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            Elevating the essence of Indian bridal elegance with thoughtfully crafted couture that transcends time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-stone-100 font-sans font-semibold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><Link href="/bride" className="hover:text-stone-100 transition-colors duration-300">For the Bride</Link></li>
            <li><Link href="/groom" className="hover:text-stone-100 transition-colors duration-300">For the Groom</Link></li>
            <li><Link href="/about" className="hover:text-stone-100 transition-colors duration-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-stone-100 transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-1">
          <h4 className="text-stone-100 font-sans font-semibold uppercase tracking-widest text-xs mb-8">Legal</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><Link href="/privacy" className="hover:text-stone-100 transition-colors duration-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-stone-100 transition-colors duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h4 className="text-stone-100 font-sans font-semibold uppercase tracking-widest text-xs mb-8">Follow Us</h4>
          <div className="flex flex-col space-y-4 font-light text-sm">
            <a href="#" className="hover:text-stone-100 transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-stone-100 transition-colors duration-300">Pinterest</a>
            <a href="#" className="hover:text-stone-100 transition-colors duration-300">YouTube</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-800/50 flex flex-col md:flex-row items-center justify-between text-xs font-light tracking-wider text-stone-600">
        <p>© {new Date().getFullYear()} Nehal Desai Couture. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with elegance.</p>
      </div>
    </footer>
  );
}
