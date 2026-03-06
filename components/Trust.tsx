"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#3B6B4A] via-[#2D5A3D] to-[#1E4530] relative overflow-hidden">
      {/* Animated flower background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating flower */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04]"
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((a) => (
            <ellipse key={a} cx="200" cy="80" rx="30" ry="80" fill="white" transform={`rotate(${a} 200 200)`} />
          ))}
        </motion.svg>

        {/* Floating dots */}
        {[
          { x: "10%", y: "20%", size: 4, delay: 0 },
          { x: "85%", y: "30%", size: 3, delay: 1 },
          { x: "70%", y: "80%", size: 5, delay: 2 },
          { x: "20%", y: "75%", size: 3, delay: 3 },
          { x: "50%", y: "10%", size: 4, delay: 1.5 },
          { x: "90%", y: "60%", size: 3, delay: 0.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
            animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5], y: [0, -20, 0] }}
            transition={{ duration: 5, delay: dot.delay, repeat: Infinity }}
          />
        ))}

        {/* Vine pattern */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-32 opacity-[0.06]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 120 Q100 60 200 80 Q300 100 400 60 Q500 20 600 50 Q700 80 800 40 Q900 0 1000 30 Q1100 60 1200 20 L1200 120Z"
            fill="white"
            animate={{ d: [
              "M0 120 Q100 60 200 80 Q300 100 400 60 Q500 20 600 50 Q700 80 800 40 Q900 0 1000 30 Q1100 60 1200 20 L1200 120Z",
              "M0 120 Q100 80 200 60 Q300 40 400 80 Q500 100 600 30 Q700 60 800 80 Q900 40 1000 60 Q1100 20 1200 50 L1200 120Z",
              "M0 120 Q100 60 200 80 Q300 100 400 60 Q500 20 600 50 Q700 80 800 40 Q900 0 1000 30 Q1100 60 1200 20 L1200 120Z",
            ] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Stars with stagger animation */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 200 }}
              >
                <Star className="w-6 h-6 lg:w-7 lg:h-7 text-[#F2C94C] fill-[#F2C94C]" />
              </motion.div>
            ))}
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-white/70 text-sm font-medium"
          >
            4.9 von 5 Sternen auf Google
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Quote className="w-12 h-12 text-white/15 mx-auto mb-8" />
            </motion.div>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-5xl text-white leading-snug italic">
              &bdquo;Wunderschöne Blumen, tolle Beratung und immer freundlich.&ldquo;
            </blockquote>
            <p className="mt-8 text-white/50 text-sm">— Kundenbewertung auf Google</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10"
          >
            {[
              "Familienbetrieb seit 1968",
              "Zertifizierte Dauergrabpflege",
              "15 Friedhöfe im Raum Heilbronn",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="flex items-center gap-2.5 text-white/60 text-sm"
                whileHover={{ scale: 1.05, color: "rgba(255,255,255,0.9)" }}
              >
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-accent"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                />
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
