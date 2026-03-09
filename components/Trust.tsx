"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Wunderschöne Blumen, tolle Beratung und immer freundlich. Die Grabpflege ist vorbildlich!",
    author: "Google Rezension",
  },
  {
    text: "Seit Jahren unser Ansprechpartner für Hochzeiten und Trauerfloristik. Immer kreativ und zuverlässig.",
    author: "Google Rezension",
  },
  {
    text: "Familiäre Atmosphäre und eine Auswahl, die man sonst nirgends findet. Absolute Empfehlung!",
    author: "Google Rezension",
  },
];

export default function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#3B6B4A] via-[#2D5A3D] to-[#1E4530] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200 }}
              >
                <Star className="w-6 h-6 lg:w-7 lg:h-7 text-[#F2C94C] fill-[#F2C94C]" />
              </motion.div>
            ))}
          </div>
          <span className="text-white/70 text-sm font-medium">
            4.9 von 5 Sternen auf Google
          </span>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10"
            >
              <Quote className="w-8 h-8 text-white/15 mb-5" />
              <blockquote className="font-serif text-lg lg:text-xl text-white/90 leading-relaxed italic mb-6">
                &bdquo;{review.text}&ldquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-sm">— {review.author}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 text-[#F2C94C] fill-[#F2C94C]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10"
        >
          {[
            "Familienbetrieb seit 1968",
            "Zertifizierte Dauergrabpflege",
            "15 Friedhöfe im Raum Heilbronn",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2.5 text-white/60 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
