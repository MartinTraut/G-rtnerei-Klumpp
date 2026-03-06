"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  rotate: number;
  sway: number;
}

const colors = [
  "#E8A0BF",
  "#F5D5E0",
  "#FFDAB9",
  "#FFE4E1",
  "#C3B1E1",
  "#F2C94C33",
  "#7FB06944",
];

export default function PetalRain() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 14,
      delay: Math.random() * 20,
      duration: 12 + Math.random() * 18,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: Math.random() * 360,
      sway: 30 + Math.random() * 80,
    }));
    setPetals(generated);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-4"
          style={{ left: `${petal.x}%` }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, petal.sway, -petal.sway / 2, petal.sway / 3, 0],
            rotate: [
              petal.rotate,
              petal.rotate + 180,
              petal.rotate + 360,
            ],
            opacity: [0, 0.6, 0.5, 0.3, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.4}
            viewBox="0 0 20 28"
            fill="none"
          >
            <path
              d="M10 0 C4 5, 0 12, 2 18 C4 24, 10 28, 10 28 C10 28, 16 24, 18 18 C20 12, 16 5, 10 0Z"
              fill={petal.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
