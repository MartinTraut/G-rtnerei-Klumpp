"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="pb-24 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative aspect-square rounded-2xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
