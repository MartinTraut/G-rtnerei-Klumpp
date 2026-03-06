"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative top flower border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      {/* Background flower */}
      <motion.svg
        className="absolute bottom-10 right-10 w-60 h-60 opacity-[0.03]"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="100" cy="50" rx="20" ry="40" fill="white" transform={`rotate(${a} 100 100)`} />
        ))}
      </motion.svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B6B4A] to-[#7FB069] flex items-center justify-center text-white font-serif text-lg font-bold">
                K
              </div>
              <span className="font-serif text-lg font-semibold">Gärtnerei Klumpp</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihr Blumengeschäft und Ihre Gärtnerei in Flein seit 1968.
              Schnittblumen, Floristik und professionelle Grabpflege.
            </p>
          </motion.div>

          {/* Leistungen */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Leistungen</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#leistungen", label: "Schnittblumen & Sträuße" },
                { href: "#leistungen", label: "Hochzeitsfloristik" },
                { href: "#leistungen", label: "Trauerfloristik" },
                { href: "#leistungen", label: "Topf- & Zimmerpflanzen" },
                { href: "#grabpflege", label: "Grabpflege" },
                { href: "#grabpflege", label: "Dauergrabpflege" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#leistungen", label: "Leistungen" },
                { href: "#grabpflege", label: "Grabpflege" },
                { href: "#galerie", label: "Galerie" },
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
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
