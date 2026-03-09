"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Mail } from "lucide-react";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/grabpflege", label: "Grabpflege" },
  { href: "/galerie", label: "Galerie" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 mr-auto">
              <Image
                src="/logo.png"
                alt="Gärtnerei Klumpp"
                width={200}
                height={106}
                className={`h-11 sm:h-12 lg:h-[3.25rem] w-auto transition-all duration-500 ${
                  isTransparent ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>

            {/* Nav — zentriert */}
            <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 text-[0.8125rem] font-medium rounded-full transition-all relative group whitespace-nowrap ${
                    isTransparent
                      ? pathname === link.href
                        ? "text-white bg-white/15"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                      isTransparent ? "bg-white" : "bg-accent"
                    } ${
                      pathname === link.href ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="tel:+497131252449"
              className={`hidden lg:inline-flex items-center gap-2 ml-auto pl-5 pr-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] ${
                isTransparent
                  ? "bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/25"
                  : "bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white shadow-md shadow-green-900/15 hover:shadow-lg hover:shadow-green-900/25"
              }`}
            >
              <Phone className="w-4 h-4" />
              Jetzt anrufen
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 -mr-2 rounded-xl transition-colors ml-3 ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-secondary"
              }`}
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

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
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1">
                <Link
                  href="/"
                  className={`px-4 py-3.5 rounded-xl transition-colors font-medium text-lg ${
                    pathname === "/" ? "bg-primary/5 text-primary" : "text-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  Startseite
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3.5 rounded-xl transition-colors font-medium text-lg ${
                      pathname === link.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-5 border-t border-border/50 space-y-3">
                <a
                  href="tel:+497131252449"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white py-3.5 rounded-2xl font-medium shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  07131 / 252449
                </a>
                <a
                  href="mailto:klumpp@blumen-flein.de"
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary py-3.5 rounded-2xl font-medium"
                >
                  <Mail className="w-4 h-4" />
                  E-Mail schreiben
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
