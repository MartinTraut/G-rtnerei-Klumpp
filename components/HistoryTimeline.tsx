"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { Sprout, Users, TrendingUp, Award, Flower2 } from "lucide-react";

function TimelineCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-md hover:shadow-black/5 transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 40vw, 250px"
          />
        </div>
      ))}
    </div>
  );
}

export default function HistoryTimeline() {
  const data = [
    {
      title: "1968",
      content: (
        <div className="space-y-5">
          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sprout className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Die Gründung
                </h4>
                <span className="text-xs text-muted-foreground">Buchernstraße 21, Flein</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed mb-5">
              Eberhard Klumpp übernimmt die Gärtnerei Daucher in Flein und legt
              damit den Grundstein für einen Familienbetrieb, der heute zu den
              etabliertesten Blumengeschäften der Region gehört. Mit handwerklichem
              Geschick und einer Leidenschaft für Pflanzen baut er die kleine
              Gärtnerei an der Buchernstraße auf.
            </p>
            <ImageGrid images={[
              { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80", alt: "Gärtnerei Ursprung" },
              { src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80", alt: "Pflanzenzucht" },
            ]} />
          </TimelineCard>
        </div>
      ),
    },
    {
      title: "1980er",
      content: (
        <div className="space-y-5">
          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Flower2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Floristik als Berufung
                </h4>
                <span className="text-xs text-muted-foreground">Neues Standbein, neue Möglichkeiten</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed mb-5">
              Das Angebot wächst: Neben der klassischen Pflanzenzucht wird die
              kreative Floristik zum Herzstück des Geschäfts. Hochzeitsfloristik,
              Trauerfloristik und individuelle Sträuße entwickeln sich zum
              Markenzeichen. Gleichzeitig beginnt die Grabpflege auf den ersten
              Friedhöfen in der Umgebung.
            </p>
            <ImageGrid images={[
              { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80", alt: "Hochzeitsfloristik" },
              { src: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80", alt: "Blumensträuße" },
            ]} />
          </TimelineCard>

          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary/15">+</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Erste Grabpflege-Verträge auf Friedhöfen in Flein und Heilbronn.
                Beginn der Trauer- und Hochzeitsfloristik als eigenständige Leistungen.
              </p>
            </div>
          </TimelineCard>
        </div>
      ),
    },
    {
      title: "2000",
      content: (
        <div className="space-y-5">
          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Generationswechsel
                </h4>
                <span className="text-xs text-muted-foreground">Januar 2000 · Neue Leitung, gleiche Werte</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed">
              Roger Klumpp übernimmt den Betrieb von seinem Vater Eberhard.
              Mit frischen Ideen, aber dem gleichen Qualitätsanspruch führt
              er die Familientradition in die nächste Generation. Der Betrieb
              wird modernisiert, das Sortiment erweitert und der Kundenservice
              weiter verbessert.
            </p>
          </TimelineCard>

          {/* Highlight card */}
          <TimelineCard className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 md:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={21}
                    className="w-9 h-auto"
                  />
                </div>
                <div>
                  <span className="block font-serif font-semibold text-foreground text-lg leading-tight">
                    Roger Klumpp
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Inhaber & Gärtnermeister · 2. Generation
                  </span>
                </div>
              </div>
            </div>
          </TimelineCard>
        </div>
      ),
    },
    {
      title: "2010er",
      content: (
        <div className="space-y-5">
          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Regionale Verankerung
                </h4>
                <span className="text-xs text-muted-foreground">Wachstum auf 15 Friedhöfe</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed mb-5">
              Die professionelle Grabpflege wird zum wichtigen Geschäftsbereich.
              Immer mehr Familien vertrauen der Gärtnerei Klumpp die Pflege der
              Ruhestätten ihrer Angehörigen an. Das Netzwerk wächst auf 15
              Friedhöfe im gesamten Raum Heilbronn – von Flein über Talheim
              bis Schwaigern.
            </p>
            <ImageGrid images={[
              { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80", alt: "Professionelle Grabpflege" },
              { src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80", alt: "Pflanzenvielfalt im Geschäft" },
            ]} />
          </TimelineCard>

          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="w-5 h-5 rounded-full bg-[#F2C94C] flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">★</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Auszeichnung als <strong className="text-foreground">4-Sterne Fleurop-Partner</strong> –
                höchste Qualität bei weltweitem Blumenversand.
              </p>
            </div>
          </TimelineCard>
        </div>
      ),
    },
    {
      title: "Heute",
      content: (
        <div className="space-y-5">
          <TimelineCard className="p-5 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-foreground leading-tight">
                  Tradition trifft Zukunft
                </h4>
                <span className="text-xs text-muted-foreground">Über 55 Jahre Kompetenz in Flein</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-[0.9375rem] leading-relaxed mb-5">
              Heute steht die Gärtnerei Klumpp für die Verbindung von
              Handwerkstradition und modernem Service. Mit zertifizierter
              Dauergrabpflege, kreativer Floristik und persönlicher Beratung
              – immer mit dem Anspruch, das Beste für unsere Kunden zu geben.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Image
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80"
                alt="Moderne Floristik"
                width={500}
                height={500}
                className="rounded-xl object-cover aspect-[4/3] w-full hover:scale-105 transition-transform duration-700"
              />
              <Image
                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80"
                alt="Aktuelle Blumenkreationen"
                width={500}
                height={500}
                className="rounded-xl object-cover aspect-[4/3] w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </TimelineCard>

          {/* Achievement badges */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "700+", label: "betreute Gräber" },
              { value: "15", label: "Friedhöfe" },
              { value: "4.9★", label: "Google" },
            ].map((badge) => (
              <TimelineCard key={badge.label} className="p-4 text-center">
                <span className="block text-xl md:text-2xl font-serif font-bold text-primary">
                  {badge.value}
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight block mt-0.5">
                  {badge.label}
                </span>
              </TimelineCard>
            ))}
          </div>

          <TimelineCard className="p-5 md:p-6">
            <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">Zertifizierte Dauergrabpflege</strong> der
                Württembergischen Friedhofsgärtner – geprüfte Qualität für Ihre Sicherheit.
              </span>
            </p>
          </TimelineCard>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm tracking-[0.2em] uppercase font-medium bg-accent/10 px-4 py-1.5 rounded-full">
            Unsere Geschichte
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mt-5 mb-4">
            Über 55 Jahre <span className="italic text-primary">Leidenschaft</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Von der kleinen Gärtnerei zum vielseitigen Blumengeschäft –
            die wichtigsten Meilensteine unserer Geschichte.
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Timeline data={data} />
      </div>
    </section>
  );
}
