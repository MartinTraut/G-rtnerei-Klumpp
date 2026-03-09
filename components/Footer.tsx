"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Gärtnerei Klumpp"
                width={200}
                height={106}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihr Blumengeschäft und Ihre Gärtnerei in Flein seit 1968.
              Schnittblumen, Floristik und professionelle Grabpflege.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Leistungen</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/leistungen", label: "Schnittblumen & Sträuße" },
                { href: "/leistungen", label: "Hochzeitsfloristik" },
                { href: "/leistungen", label: "Trauerfloristik" },
                { href: "/leistungen", label: "Topf & Zimmerpflanzen" },
                { href: "/grabpflege", label: "Grabpflege" },
                { href: "/grabpflege", label: "Dauergrabpflege" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/grabpflege", label: "Grabpflege" },
                { href: "/galerie", label: "Galerie" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Buchernstra%C3%9Fe+21,+74223+Flein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Buchernstraße 21<br />74223 Flein</span>
                </a>
              </li>
              <li>
                <a href="tel:+497131252449" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  07131 / 252449
                </a>
              </li>
              <li>
                <a href="mailto:klumpp@blumen-flein.de" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  klumpp@blumen-flein.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {currentYear} Gärtnerei Klumpp. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="/impressum" className="text-white/30 hover:text-white/60 text-sm transition-colors">Impressum</a>
            <a href="/datenschutz" className="text-white/30 hover:text-white/60 text-sm transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
