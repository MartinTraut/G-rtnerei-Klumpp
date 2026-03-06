"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
        >
          <div className="bg-gradient-to-r from-[#3B6B4A] to-[#2D5A3D] text-white rounded-2xl shadow-2xl shadow-black/30 p-3.5 flex items-center gap-2.5">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="tel:+497131252449"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-primary py-3 rounded-xl font-medium text-sm shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Anrufen
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="mailto:klumpp@blumen-flein.de"
              className="flex-1 flex items-center justify-center gap-2 border border-white/30 py-3 rounded-xl font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Schreiben
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.85, rotate: 90 }}
              onClick={() => setDismissed(true)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
