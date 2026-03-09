"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flower2, Heart, Church, TreePine, Gift, Truck } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Schnittblumen & Sträuße",
    description:
      "Frische Schnittblumen und individuell gebundene Sträuße für jeden Anlass. Saisonal, kreativ und mit Liebe arrangiert. Ob als kleine Aufmerksamkeit oder als üppiger Geburtstagsstrauß – wir finden das Richtige für Sie.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
    color: "#E8A0BF",
  },
  {
    icon: Heart,
    title: "Hochzeitsfloristik",
    description:
      "Brautsträuße, Kirchenschmuck, Tischdekoration und Raumdekoration. Wir gestalten Ihren schönsten Tag mit floraler Eleganz – von der ersten Beratung bis zum letzten Detail.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    color: "#F5D5E0",
  },
  {
    icon: Church,
    title: "Trauerfloristik",
    description:
      "Würdevolle Trauerfloristik mit Kränzen, Gestecken und Sargschmuck. Einfühlsam und individuell gestaltet, um Ihrer Trauer einen angemessenen Ausdruck zu verleihen.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80",
    color: "#C3B1E1",
  },
  {
    icon: TreePine,
    title: "Topf & Zimmerpflanzen",
    description:
      "Große Auswahl an Topfpflanzen und Zimmerpflanzen für Ihr Zuhause. Von pflegeleicht bis exotisch – wir beraten Sie gerne zur passenden Pflanze.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    color: "#7FB069",
  },
  {
    icon: Gift,
    title: "Geschenkideen",
    description:
      "Kreative Geschenkideen rund um Blumen und Pflanzen. Perfekt für besondere Momente – liebevoll zusammengestellt und ansprechend verpackt.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    color: "#F2C94C",
  },
  {
    icon: Truck,
    title: "Fleurop-Service",
    description:
      "Blumengrüße weltweit versenden mit Fleurop. Zuverlässig und frisch, direkt vom Floristen vor Ort. Als 4-Sterne Fleurop-Partner garantieren wir höchste Qualität.",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80",
    color: "#FFDAB9",
  },
];

export default function Services() {
  return (
    <section className="pb-24 lg:pb-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-background rounded-3xl overflow-hidden border border-border/40 hover:border-transparent hover:shadow-2xl hover:shadow-black/8 transition-all duration-500 relative hover:-translate-y-1"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
              />

              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-56 lg:w-64 flex-shrink-0 h-52 sm:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 250px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/30 to-transparent" />

                  <div
                    className="absolute bottom-4 left-4 sm:bottom-4 sm:left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md"
                    style={{ backgroundColor: `${service.color}dd` }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
