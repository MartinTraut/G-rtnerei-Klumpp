"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

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

const friedhoefe = [
  "Flein", "Heilbronn Hauptfriedhof", "Heilbronn-Frankenbach", "Heilbronn-Neckargartach",
  "Heilbronn-Biberach", "Heilbronn-Kirchhausen", "Talheim", "Lauffen",
  "Nordheim", "Abstatt", "Untergruppenbach", "Ilsfeld",
  "Schwaigern", "Leingarten", "Brackenheim",
];

export default function GraveCare() {
  return (
    <section className="pb-24 lg:pb-36 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border/40 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image + Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Gepflegte Grabstätte"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
              Professionelle Grabpflege <span className="italic text-primary">das ganze Jahr</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Die Grabpflege ist eine Herzensangelegenheit. Wir verstehen, wie wichtig
                es ist, dass die letzte Ruhestätte Ihrer Angehörigen stets gepflegt und
                würdevoll aussieht.
              </p>
              <p>
                Unser erfahrenes Team kümmert sich ganzjährig um die Bepflanzung, Pflege
                und saisonale Gestaltung. Von der Frühjahrsbepflanzung über die Sommerpflege
                bis zur winterfesten Abdeckung.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-green-900/20 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Beratung anfragen
            </Link>
          </motion.div>
        </div>

        {/* Friedhöfe List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#F8F5F0] rounded-3xl p-8 lg:p-12"
        >
          <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2">
            Unsere Friedhöfe
          </h3>
          <p className="text-muted-foreground mb-8">
            Wir betreuen Grabstätten auf folgenden Friedhöfen im Raum Heilbronn:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {friedhoefe.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
