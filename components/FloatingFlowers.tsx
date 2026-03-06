"use client";

import { motion } from "framer-motion";

const flowers = [
  // Roses
  {
    id: 1,
    x: "5%",
    y: "8%",
    size: 60,
    delay: 0,
    duration: 18,
    rotate: 15,
    type: "rose",
  },
  {
    id: 2,
    x: "88%",
    y: "15%",
    size: 45,
    delay: 2,
    duration: 22,
    rotate: -20,
    type: "rose",
  },
  {
    id: 3,
    x: "75%",
    y: "55%",
    size: 55,
    delay: 4,
    duration: 20,
    rotate: 30,
    type: "rose",
  },
  {
    id: 4,
    x: "15%",
    y: "70%",
    size: 40,
    delay: 1,
    duration: 25,
    rotate: -10,
    type: "peony",
  },
  {
    id: 5,
    x: "50%",
    y: "5%",
    size: 35,
    delay: 3,
    duration: 19,
    rotate: 45,
    type: "peony",
  },
  {
    id: 6,
    x: "92%",
    y: "75%",
    size: 50,
    delay: 5,
    duration: 21,
    rotate: -35,
    type: "daisy",
  },
  {
    id: 7,
    x: "30%",
    y: "85%",
    size: 38,
    delay: 2.5,
    duration: 23,
    rotate: 25,
    type: "daisy",
  },
  {
    id: 8,
    x: "65%",
    y: "30%",
    size: 42,
    delay: 1.5,
    duration: 17,
    rotate: -40,
    type: "tulip",
  },
  {
    id: 9,
    x: "3%",
    y: "45%",
    size: 48,
    delay: 3.5,
    duration: 24,
    rotate: 20,
    type: "tulip",
  },
  {
    id: 10,
    x: "42%",
    y: "60%",
    size: 32,
    delay: 4.5,
    duration: 16,
    rotate: -15,
    type: "leaf",
  },
  {
    id: 11,
    x: "82%",
    y: "42%",
    size: 36,
    delay: 0.5,
    duration: 26,
    rotate: 50,
    type: "leaf",
  },
  {
    id: 12,
    x: "20%",
    y: "25%",
    size: 30,
    delay: 6,
    duration: 20,
    rotate: -55,
    type: "leaf",
  },
];

function RoseSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="22" ry="20" fill={color} opacity="0.6" />
      <ellipse
        cx="50"
        cy="50"
        rx="30"
        ry="28"
        fill={color}
        opacity="0.35"
        transform="rotate(30 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="32"
        fill={color}
        opacity="0.2"
        transform="rotate(60 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="36"
        fill={color}
        opacity="0.1"
        transform="rotate(90 50 50)"
      />
      <circle cx="50" cy="50" r="8" fill={color} opacity="0.8" />
    </svg>
  );
}

function PeonySVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="30"
          rx="14"
          ry="22"
          fill={color}
          opacity="0.3"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="12" fill={color} opacity="0.5" />
      <circle cx="50" cy="50" r="6" fill={color} opacity="0.7" />
    </svg>
  );
}

function DaisySVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
        (angle) => (
          <ellipse
            key={angle}
            cx="50"
            cy="28"
            rx="8"
            ry="18"
            fill={color}
            opacity="0.35"
            transform={`rotate(${angle} 50 50)`}
          />
        )
      )}
      <circle cx="50" cy="50" r="10" fill="#F2C94C" opacity="0.6" />
    </svg>
  );
}

function TulipSVG({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 20 C35 25, 28 45, 35 55 C38 60, 45 62, 50 60 C55 62, 62 60, 65 55 C72 45, 65 25, 50 20Z"
        fill={color}
        opacity="0.4"
      />
      <path
        d="M50 20 C42 28, 38 42, 42 52 C44 56, 47 58, 50 57 L50 20Z"
        fill={color}
        opacity="0.25"
      />
      <line
        x1="50"
        y1="58"
        x2="50"
        y2="85"
        stroke="#7FB069"
        strokeWidth="2.5"
        opacity="0.4"
      />
      <ellipse
        cx="42"
        cy="76"
        rx="10"
        ry="5"
        fill="#7FB069"
        opacity="0.3"
        transform="rotate(-20 42 76)"
      />
    </svg>
  );
}

function LeafSVG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10 C30 25, 15 50, 25 70 C35 90, 50 90, 50 90 C50 90, 65 90, 75 70 C85 50, 70 25, 50 10Z"
        fill="#7FB069"
        opacity="0.25"
      />
      <path
        d="M50 15 L50 85"
        stroke="#7FB069"
        strokeWidth="1.5"
        opacity="0.3"
      />
      <path
        d="M50 35 L35 50 M50 50 L38 62 M50 45 L62 55 M50 60 L60 68"
        stroke="#7FB069"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  );
}

function FlowerComponent({
  type,
  size,
}: {
  type: string;
  size: number;
}) {
  switch (type) {
    case "rose":
      return <RoseSVG size={size} color="#E8A0BF" />;
    case "peony":
      return <PeonySVG size={size} color="#F5D5E0" />;
    case "daisy":
      return <DaisySVG size={size} color="#FFDAB9" />;
    case "tulip":
      return <TulipSVG size={size} color="#C3B1E1" />;
    case "leaf":
      return <LeafSVG size={size} />;
    default:
      return <RoseSVG size={size} color="#E8A0BF" />;
  }
}

export default function FloatingFlowers() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{ left: flower.x, top: flower.y }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7, 0],
            scale: [0.5, 1, 0.9, 1.05, 0.5],
            rotate: [0, flower.rotate, -flower.rotate / 2, flower.rotate, 0],
            y: [0, -15, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FlowerComponent type={flower.type} size={flower.size} />
        </motion.div>
      ))}
    </div>
  );
}
