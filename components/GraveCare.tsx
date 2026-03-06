"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Calendar, MapPin, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Ganzjährige Grabpflege",
    description: "Professionelle Pflege über das gesamte Jahr. Bepflanzung, Gießen und saisonale Gestaltung.",
  },
  {
    icon: Calendar,
    title: "Dauergrabpflege",
    description: "Langfristige Verträge mit Qualitätssiegel für fachgerechte Pflege nach Ihren Wünschen.",
  },
  {
    icon: MapPin,
    title: "15 Friedhöfe",
    description: "Über 700 Gräber auf 15 Friedhöfen im Raum Heilbronn. Regional verwurzelt.",
  },
  {
    icon: Award,
    title: "Qualitätssiegel",
    description: "Zertifizierte Dauergrabpflege der Württembergischen Friedhofsgärtner.",
  },
];

export default function GraveCare() {
  return (
    <section id="grabpflege" className="py-24 lg:py-36 bg-[#F8F5F0] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full"
          style={{ background: "radial-gradient(circle, #7FB06915 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full"
          style={{ background: "radial-gradient(circle, #E8A0BF10 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Leaf decorations */}
        <motion.svg
          className="absolute top-10 left-[15%] w-20 h-20 opacity-[0.08]"
          viewBox="0 0 100 100"
          animate={{ rotate: [0, 10, -5, 0], y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <path d="M50 10 C30 25, 15 50, 25 70 C35 90, 50 90, 50 90 C50 90, 65 90, 75 70 C85 50, 70 25, 50 10Z" fill="#3B6B4A" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-10 right-[20%] w-16 h-16 opacity-[0.06]"
          viewBox="0 0 100 100"
          animate={{ rotate: [0, -15, 5, 0], y: [0, 3, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <path d="M50 10 C30 25, 15 50, 25 70 C35 90, 50 90, 50 90 C50 90, 65 90, 75 70 C85 50, 70 25, 50 10Z" fill="#3B6B4A" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Gepflegte Grabstätte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8"
            >
              <motion.div
                className="bg-gradient-to-br from-[#3B6B4A] to-[#2D5A3D] text-white p-6 lg:p-7 rounded-3xl shadow-2xl shadow-green-900/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="block text-3xl lg:text-5xl font-serif font-bold">700+</span>
                <span className="text-sm text-white/70">betreute Gräber</span>
              </motion.div>
            </motion.div>

            {/* Small decorative circle */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-2 border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full"
            >
              <Shield className="w-3.5 h-3.5" />
              Grabpflege
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mt-5 mb-6 text-balance leading-tight">
              Würdevolle Pflege
              <br />
              <span className="italic text-primary">mit Verantwortung</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Seit über 50 Jahren pflegen wir Grabstätten im Raum Heilbronn
              mit Sorgfalt und Hingabe. Vertrauen Sie auf unsere Erfahrung.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-border/30 hover:shadow-lg hover:shadow-black/5 transition-all"
                >
                  <motion.div
                    className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-green-900/20 hover:shadow-xl transition-shadow"
              >
                Beratung anfragen
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
