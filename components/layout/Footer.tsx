import Link from "next/link";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/works", label: "Our Works" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo-full.png"
              alt="MelaniArts Logo"
              width={220}
              height={66}
              className="h-8 w-auto"
            />

            <p className="text-gray-mid text-sm leading-relaxed mb-5 mt-4">
              Premium printing &amp; signage services across Hambantota and
              Colombo, Sri Lanka.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-mid hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-mid hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-mid hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-mid">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <a href="tel:+94717402537" className="hover:text-primary transition-colors">+94 71 740 2537</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Hambantota Branch
                  <br />
                  No 33 Tissa Road, Hambantota
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Colombo Branch
                  <br />
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-mid">
          &copy; 2025 MelaniArts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
