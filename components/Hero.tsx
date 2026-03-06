"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

function HeroFlowerDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large rose top-right */}
      <motion.svg
        className="absolute -top-10 -right-10 w-64 h-64 lg:w-96 lg:h-96"
        viewBox="0 0 200 200"
        fill="none"
        animate={{ rotate: [0, 5, -3, 0], scale: [1, 1.02, 0.98, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="60"
            rx="28"
            ry="45"
            fill="#E8A0BF"
            opacity="0.15"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="20" fill="#E8A0BF" opacity="0.2" />
      </motion.svg>

      {/* Vine bottom-left */}
      <motion.svg
        className="absolute -bottom-5 -left-5 w-80 h-80 lg:w-[500px] lg:h-[500px]"
        viewBox="0 0 300 300"
        fill="none"
        animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M0 300 Q50 250 80 200 Q110 150 100 100 Q90 50 120 20"
          stroke="#7FB069"
          strokeWidth="3"
          opacity="0.2"
          fill="none"
        />
        <path
          d="M20 300 Q70 260 100 220 Q130 180 125 130 Q120 80 140 50"
          stroke="#7FB069"
          strokeWidth="2"
          opacity="0.15"
          fill="none"
        />
        {[[80, 200], [100, 140], [120, 80], [60, 250]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="12"
            fill="#7FB069"
            opacity="0.15"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, delay: i * 0.8, repeat: Infinity }}
          />
        ))}
      </motion.svg>

      {/* Small flowers scattered */}
      {[
        { x: "20%", y: "20%", color: "#F5D5E0", size: 30, delay: 0 },
        { x: "70%", y: "75%", color: "#FFDAB9", size: 25, delay: 1.5 },
        { x: "85%", y: "40%", color: "#C3B1E1", size: 20, delay: 3 },
        { x: "35%", y: "80%", color: "#E8A0BF", size: 22, delay: 2 },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: f.x, top: f.y }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, -10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6 + i * 2,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width={f.size} height={f.size} viewBox="0 0 40 40" fill="none">
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <ellipse
                key={angle}
                cx="20"
                cy="10"
                rx="5"
                ry="10"
                fill={f.color}
                transform={`rotate(${angle} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="4" fill="#F2C94C" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

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
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden"
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
        {/* TODO: Original-Bild von blumen-flein.de */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-transparent to-transparent opacity-30" />
      </motion.div>

      {/* Flower Decorations */}
      <HeroFlowerDecoration />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-white/80 text-sm tracking-[0.25em] uppercase font-medium">
              Seit 1968 in Flein
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-6 lg:mb-8"
          >
            <span className="block">Blumen</span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8A0BF] via-[#FFDAB9] to-[#E8A0BF]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              mit Seele
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-lg"
          >
            Ihr Blumengeschäft und Ihre Gärtnerei in Flein.
            Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik
            und professionelle Grabpflege im Raum Heilbronn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+497131252449"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-4 rounded-full text-base font-medium shadow-2xl shadow-green-900/30 hover:shadow-green-900/50 transition-shadow"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-medium transition-all"
            >
              Anfrage senden
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#leistungen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scrollen"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Entdecken</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
