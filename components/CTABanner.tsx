"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Animated flower background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scattered petals */}
        {[
          { x: "8%", y: "15%", size: 40, color: "#E8A0BF", rotation: 20 },
          { x: "85%", y: "20%", size: 35, color: "#F5D5E0", rotation: -30 },
          { x: "70%", y: "70%", size: 45, color: "#C3B1E1", rotation: 45 },
          { x: "15%", y: "80%", size: 30, color: "#FFDAB9", rotation: -15 },
          { x: "45%", y: "10%", size: 25, color: "#7FB06944", rotation: 60 },
          { x: "92%", y: "50%", size: 35, color: "#E8A0BF66", rotation: -45 },
        ].map((petal, i) => (
          <motion.svg
            key={i}
            className="absolute"
            style={{ left: petal.x, top: petal.y }}
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            animate={{
              y: [0, -10, 5, 0],
              rotate: [petal.rotation, petal.rotation + 15, petal.rotation - 10, petal.rotation],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M15 0 C8 6, 0 15, 3 25 C6 35, 15 40, 15 40 C15 40, 24 35, 27 25 C30 15, 22 6, 15 0Z"
              fill={petal.color}
            />
          </motion.svg>
        ))}

        {/* Center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #E8A0BF08, transparent 60%)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative flower icon */}
          <motion.div
            className="mx-auto mb-6 w-16 h-16"
            animate={{ rotate: [0, 10, -10, 0], y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                <ellipse key={a} cx="30" cy="14" rx="8" ry="14" fill="#D4937A" opacity="0.3" transform={`rotate(${a} 30 30)`} />
              ))}
              <circle cx="30" cy="30" r="6" fill="#D4937A" opacity="0.5" />
            </svg>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground mb-5 text-balance leading-tight">
            Lassen Sie uns über
            <br />
            <motion.span
              className="italic text-primary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ihre Blumenwünsche
            </motion.span>{" "}
            sprechen
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
          >
            Ob Hochzeit, Trauerfeier oder ein schöner Strauß für Zuhause –
            wir beraten Sie gerne persönlich.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+497131252449"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-4 rounded-full text-base font-medium shadow-2xl shadow-green-900/20 hover:shadow-green-900/40 transition-shadow w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              07131 / 252449
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:klumpp@blumen-flein.de"
              className="inline-flex items-center gap-2.5 bg-white border-2 border-border hover:border-primary/30 text-foreground px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 text-primary" />
              E-Mail schreiben
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
