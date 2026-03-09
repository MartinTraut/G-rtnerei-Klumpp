"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground mb-5 text-balance leading-tight">
            Lassen Sie uns über
            <br />
            <span className="italic text-primary">Ihre Blumenwünsche</span>{" "}
            sprechen
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ob Hochzeit, Trauerfeier oder ein schöner Strauß für Zuhause –
            wir beraten Sie gerne persönlich.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+497131252449"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-4 rounded-full text-base font-medium shadow-2xl shadow-green-900/20 hover:shadow-green-900/40 hover:scale-[1.03] active:scale-[0.98] transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              07131 / 252449
            </a>
            <a
              href="mailto:klumpp@blumen-flein.de"
              className="inline-flex items-center gap-2.5 bg-white border-2 border-border hover:border-primary/30 text-foreground px-8 py-4 rounded-full text-base font-medium shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 text-primary" />
              E-Mail schreiben
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
