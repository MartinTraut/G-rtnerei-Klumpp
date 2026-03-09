"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Flower2, Heart, Church, TreePine, Gift, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Schnittblumen & Sträuße",
    description: "Frische Schnittblumen und individuell gebundene Sträuße für jeden Anlass.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
    color: "#E8A0BF",
  },
  {
    icon: Heart,
    title: "Hochzeitsfloristik",
    description: "Brautsträuße, Kirchenschmuck und Tischdekoration für Ihren schönsten Tag.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    color: "#F5D5E0",
  },
  {
    icon: Church,
    title: "Trauerfloristik",
    description: "Würdevolle Kränze, Gestecke und Sargschmuck. Einfühlsam und individuell.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80",
    color: "#C3B1E1",
  },
  {
    icon: TreePine,
    title: "Topf & Zimmerpflanzen",
    description: "Große Auswahl an Topfpflanzen für Ihr Zuhause. Von pflegeleicht bis exotisch.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    color: "#7FB069",
  },
  {
    icon: Gift,
    title: "Geschenkideen",
    description: "Kreative Geschenkideen rund um Blumen und Pflanzen.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    color: "#F2C94C",
  },
  {
    icon: Truck,
    title: "Fleurop-Service",
    description: "Blumengrüße weltweit versenden. Zuverlässig und frisch.",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80",
    color: "#FFDAB9",
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full">
            <Flower2 className="w-3.5 h-3.5" />
            Unser Angebot
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground mt-5 mb-5 text-balance">
            Floristik für
            <span className="italic text-primary"> jeden Anlass</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Von der kleinen Aufmerksamkeit bis zur großen Feier – wir
            gestalten mit Blumen Ihre besonderen Momente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background rounded-3xl overflow-hidden border border-border/40 hover:border-transparent hover:shadow-2xl hover:shadow-black/8 transition-all duration-500 relative hover:-translate-y-2"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />

              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md"
                  style={{ backgroundColor: `${service.color}dd` }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
          >
            Alle Leistungen entdecken
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
