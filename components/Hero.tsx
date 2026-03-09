"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-svh flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80"
          alt="Blumenarrangement"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/60 to-[#1a1a1a]/30 sm:from-[#1a1a1a]/85 sm:via-[#1a1a1a]/50 sm:to-[#1a1a1a]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent sm:from-[#1a1a1a]/50 sm:via-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-5 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm tracking-wide font-medium">
              Familienbetrieb seit 1968
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="font-serif text-5xl leading-[1.05] sm:text-[3.5rem] md:text-7xl lg:text-8xl xl:text-[6.5rem] text-white mb-4 sm:mb-7 lg:mb-9 tracking-tight"
          >
            Blumen
            <br />
            <span className="italic text-accent">mit Seele</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-7 sm:mb-10 lg:mb-12 max-w-sm sm:max-w-xl mx-auto sm:mx-0"
          >
            Ihr Blumengeschäft und Ihre Gärtnerei in Flein –
            Schnittblumen, Floristik für jeden Anlass
            und professionelle Grabpflege im Raum Heilbronn.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="flex flex-row justify-center sm:justify-start gap-3 sm:gap-4"
          >
            <a
              href="tel:+497131252449"
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-2xl shadow-green-900/30 hover:shadow-green-900/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Anrufen</span>
            </a>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Leistungen</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Entdecken</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
