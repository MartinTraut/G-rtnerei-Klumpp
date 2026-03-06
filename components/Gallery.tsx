"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80",
    alt: "Farbenfroher Blumenstrauß",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80",
    alt: "Elegante Hochzeitsfloristik",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
    alt: "Bunte Frühlingsblumen",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1495231916356-a86217efff12?w=600&q=80",
    alt: "Saisonale Tischdekoration",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1471696035578-3d8c78d99571?w=600&q=80",
    alt: "Rosenstrauß",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    alt: "Blumengesteck",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Background flower decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #E8A0BF, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full"
          >
            <Camera className="w-3.5 h-3.5" />
            Inspiration
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground mt-5 mb-5">
            Unsere <span className="italic text-primary">Arbeiten</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ein Einblick in unsere floristische Arbeit – mit Kreativität,
            Hingabe und dem Gespür für das Besondere.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
              className={`relative aspect-square rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-115 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </motion.div>

              {/* Corner flower accent on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 40 40"
                  fill="none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  {[0, 60, 120, 180, 240, 300].map((a) => (
                    <ellipse key={a} cx="20" cy="10" rx="4" ry="9" fill="white" opacity="0.8" transform={`rotate(${a} 20 20)`} />
                  ))}
                  <circle cx="20" cy="20" r="3" fill="#F2C94C" />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
