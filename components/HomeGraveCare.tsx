"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export default function HomeGraveCare() {
  return (
    <section className="py-24 lg:py-36 bg-[#F8F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Gepflegte Grabstätte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8"
            >
              <div className="bg-gradient-to-br from-[#3B6B4A] to-[#2D5A3D] text-white p-6 lg:p-7 rounded-3xl shadow-2xl shadow-green-900/30">
                <span className="block text-3xl lg:text-5xl font-serif font-bold">700+</span>
                <span className="text-sm text-white/70">betreute Gräber</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              Grabpflege
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mt-5 mb-6 text-balance leading-tight">
              Würdevolle Pflege
              <br />
              <span className="italic text-primary">mit Verantwortung</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Seit über 50 Jahren pflegen wir Grabstätten im Raum Heilbronn
              mit Sorgfalt und Hingabe. Auf 15 Friedhöfen betreuen wir über
              700 Gräber mit zertifizierter Qualität.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/grabpflege"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-green-900/20 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary/5 transition-all"
              >
                Beratung anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
