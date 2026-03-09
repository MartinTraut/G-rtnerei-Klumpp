"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Flower2, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "55+", label: "Jahre Erfahrung", color: "bg-primary/10 text-primary" },
  { icon: Flower2, value: "700+", label: "Gräber in Pflege", color: "bg-accent/10 text-accent" },
  { icon: MapPin, value: "15", label: "Friedhöfe betreut", color: "bg-primary/10 text-primary" },
  { icon: Star, value: "4.9", label: "Google Bewertung", color: "bg-[#F2C94C]/10 text-[#F2C94C]" },
];

export default function About() {
  return (
    <section className="pb-24 lg:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
          {/* Images — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 relative"
          >
            <div className="grid grid-cols-12 gap-3 lg:gap-4">
              {/* Large image */}
              <div className="col-span-7 relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-black/8">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Gärtnerei Klumpp – Blumen und Pflanzen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 35vw"
                />
              </div>
              {/* Stacked images */}
              <div className="col-span-5 flex flex-col gap-3 lg:gap-4">
                <div className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-black/8">
                  <Image
                    src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80"
                    alt="Frische Sträuße"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-black/8">
                  <Image
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80"
                    alt="Pflanzenpflege"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
              </div>
            </div>

            {/* Floating owner card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-6 sm:left-6 max-w-xs"
            >
              <div className="bg-white rounded-2xl p-4 shadow-2xl shadow-black/8 border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={32}
                      height={17}
                      className="w-7 h-auto"
                    />
                  </div>
                  <div>
                    <span className="block font-serif font-semibold text-foreground leading-tight">
                      Roger Klumpp
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Inhaber · 2. Generation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 pt-2"
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg font-medium leading-relaxed">
                Was 1968 als kleine Gärtnerei in Flein begann, ist heute ein
                Familienbetrieb mit über 55 Jahren Erfahrung in Floristik
                und professioneller Grabpflege.
              </p>
              <p>
                Gegründet von Eberhard Klumpp, wird der Betrieb seit Januar
                2000 von Roger Klumpp in zweiter Generation geführt. Der
                Anspruch ist derselbe geblieben: Qualität, Kundennähe und
                Liebe zum Detail.
              </p>
              <p>
                Unser engagiertes Team betreut über 700 Gräber auf 15
                Friedhöfen im Raum Heilbronn – ganzjährig, zuverlässig
                und mit zertifizierter Qualität.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 lg:p-6 border border-border/40 text-center hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="block text-3xl lg:text-4xl font-serif font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground mt-1 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
