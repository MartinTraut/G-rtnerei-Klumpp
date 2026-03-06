"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

const hours = [
  { day: "Montag", time: "08:30 – 12:30, 14:00 – 18:00" },
  { day: "Dienstag", time: "08:30 – 12:30, 14:00 – 18:00" },
  { day: "Mittwoch", time: "08:30 – 12:30" },
  { day: "Donnerstag", time: "08:30 – 12:30, 14:00 – 18:00" },
  { day: "Freitag", time: "08:30 – 12:30, 14:00 – 18:00" },
  { day: "Samstag", time: "08:30 – 12:30" },
  { day: "Sonntag", time: "Geschlossen" },
];

export default function Contact() {
  const today = new Date().getDay();
  const dayIndexMap: Record<number, number> = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };
  const todayIndex = dayIndexMap[today];

  return (
    <section id="kontakt" className="py-24 lg:py-36 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #3B6B4A, transparent 60%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.svg
          className="absolute bottom-20 left-10 w-20 h-20 opacity-[0.05]"
          viewBox="0 0 80 80"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="40" cy="15" rx="8" ry="18" fill="#D4937A" transform={`rotate(${a} 40 40)`} />
          ))}
          <circle cx="40" cy="40" r="6" fill="#F2C94C" />
        </motion.svg>
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
            <MapPin className="w-3.5 h-3.5" />
            Kontakt
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-foreground mt-5 mb-5">
            Besuchen Sie <span className="italic text-primary">uns</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir freuen uns auf Ihren Besuch oder Ihre Nachricht.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Gärtnerei Klumpp<br />Buchernstraße 21<br />74223 Flein
                  </p>
                ),
              },
              {
                icon: Phone,
                title: "Telefon",
                content: (
                  <>
                    <a href="tel:+497131252449" className="text-primary hover:underline text-sm font-medium">07131 / 252449</a>
                    <p className="text-muted-foreground text-xs mt-1">Fax: 07131 / 252441</p>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "E-Mail",
                content: (
                  <a href="mailto:klumpp@blumen-flein.de" className="text-primary hover:underline text-sm font-medium">
                    klumpp@blumen-flein.de
                  </a>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="bg-background rounded-2xl p-5 border border-border/40 hover:border-primary/20 hover:shadow-lg hover:shadow-black/5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.google.com/maps/dir/?api=1&destination=Buchernstra%C3%9Fe+21,+74223+Flein"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3B6B4A] to-[#4A7D5A] text-white py-3.5 rounded-2xl font-medium shadow-lg shadow-green-900/20 w-full"
            >
              <Navigation className="w-4 h-4" />
              Route planen
            </motion.a>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background rounded-3xl p-6 lg:p-8 border border-border/40 hover:shadow-lg hover:shadow-black/5 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Clock className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Öffnungszeiten
              </h3>
            </div>
            <div className="space-y-2">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm transition-colors ${
                    index === todayIndex
                      ? "bg-primary/5 border border-primary/15"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span className={index === todayIndex ? "text-primary font-semibold" : "text-foreground"}>
                    {item.day}
                    {index === todayIndex && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 text-[10px] uppercase tracking-wider bg-primary text-white px-1.5 py-0.5 rounded-md inline-block"
                      >
                        Heute
                      </motion.span>
                    )}
                  </span>
                  <span className={item.time === "Geschlossen" ? "text-muted-foreground" : index === todayIndex ? "text-primary font-medium" : "text-muted-foreground"}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Mittwochnachmittag geschlossen
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-border/40 min-h-[320px] lg:min-h-0 shadow-lg shadow-black/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.5!2d9.2125!3d49.1033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982f5e6b3c4c1d%3A0x0!2sBuchernstra%C3%9Fe%2021%2C%2074223%20Flein!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gärtnerei Klumpp Standort"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
