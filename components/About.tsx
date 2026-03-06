"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Users } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="ueber-uns" ref={sectionRef} className="py-24 lg:py-36 bg-background relative overflow-hidden">
      {/* Decorative flowers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          className="absolute top-20 right-[5%] w-32 h-32 opacity-[0.05]"
          viewBox="0 0 100 100"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[0, 51.4, 102.8, 154.2, 205.7, 257.1, 308.5].map((a) => (
            <ellipse key={a} cx="50" cy="20" rx="10" ry="25" fill="#E8A0BF" transform={`rotate(${a} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="10" fill="#F2C94C" />
        </motion.svg>
        <motion.svg
          className="absolute bottom-32 left-[8%] w-24 h-24 opacity-[0.04]"
          viewBox="0 0 100 100"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="50" cy="18" rx="12" ry="28" fill="#C3B1E1" transform={`rotate(${a} 50 50)`} />
          ))}
        </motion.svg>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #E8A0BF, transparent 60%)" }}
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full"
            >
              <Users className="w-3.5 h-3.5" />
              Über uns
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mt-5 mb-6 text-balance leading-tight">
              Familientradition
              <br />
              <motion.span
                className="italic text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                seit 1968
              </motion.span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Die Gärtnerei Klumpp wurde 1968 von Eberhard Klumpp in Flein
                gegründet. Was als kleine Gärtnerei begann, ist heute ein
                vielseitiges Blumengeschäft mit umfassendem Service rund um
                Floristik und Grabpflege.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Im Januar 2000 übernahm Roger Klumpp den Betrieb und führt
                die Familientradition mit dem gleichen Anspruch an Qualität
                und Kundennähe fort. Mit einem engagierten Team betreuen wir
                heute über 700 Gräber auf 15 Friedhöfen im Raum Heilbronn.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Guter Kundenservice, Pünktlichkeit und höchste Sorgfalt sind
                für uns selbstverständlich. Unser Team bildet sich
                kontinuierlich weiter.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50"
            >
              {[
                { value: "55+", label: "Jahre Erfahrung" },
                { value: "700+", label: "Gräber in Pflege" },
                { value: "4.9", label: "Google Bewertung" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="block text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-[#3B6B4A] to-[#7FB069] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div style={{ y: imageY }}>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Gärtnerei Klumpp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Owner card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-4 lg:-left-8"
            >
              <motion.div
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-border/30"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-rose-light/50 flex items-center justify-center text-2xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🌸
                  </motion.div>
                  <div>
                    <span className="block font-serif font-semibold text-foreground text-lg">
                      Roger Klumpp
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Inhaber seit 2000
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative ring */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-10 -right-3 w-4 h-4 rounded-full bg-accent/40"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
