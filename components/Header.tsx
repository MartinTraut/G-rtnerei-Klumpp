"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#grabpflege", label: "Grabpflege" },
  { href: "#galerie", label: "Galerie" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block bg-[#3B6B4A] text-white text-sm relative z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+497131252449" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              07131 / 252449
            </a>
            <a href="mailto:klumpp@blumen-flein.de" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              klumpp@blumen-flein.de
            </a>
          </div>
          <div className="flex items-center gap-2 opacity-80">
            <MapPin className="w-3.5 h-3.5" />
            Buchernstraße 21, 74223 Flein
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#3B6B4A] to-[#7FB069] flex items-center justify-center text-white font-serif text-lg lg:text-xl font-bold shadow-lg shadow-green-900/20"
              >
                K
              </motion.div>
              <div className="flex flex-col">
                <span className="font-serif text-lg lg:text-xl font-semibold text-foreground leading-tight tracking-tight">
                  Gärtnerei Klumpp
                </span>
                <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.15em] uppercase">
                  Blumen & Grabpflege seit 1968
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-full hover:bg-primary/5 transition-all relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-6 transition-all" />
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+497131252449"
                className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-shadow"
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </motion.a>
            </nav>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 -mr-2 text-foreground rounded-xl hover:bg-secondary transition-colors"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <span className="font-serif text-xl font-semibold">Menü</span>
                <motion.button whileTap={{ scale: 0.9, rotate: 90 }} onClick={() => setMobileOpen(false)} className="p-2">
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="px-4 py-3.5 rounded-xl text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto p-5 border-t border-border/50 space-y-3">
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="tel:+497131252449"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white py-3.5 rounded-2xl font-medium shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  07131 / 252449
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="mailto:klumpp@blumen-flein.de"
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3.5 rounded-2xl font-medium"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail schreiben
                </motion.a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
