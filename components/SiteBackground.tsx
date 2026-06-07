"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className: "ambient-orb ambient-orb-cyan",
    animate: {
      x: [0, 60, -30, 20, 0],
      y: [0, -40, 30, -15, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    },
    transition: { duration: 24, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "ambient-orb ambient-orb-green",
    animate: {
      x: [0, -50, 35, -20, 0],
      y: [0, 45, -25, 35, 0],
      scale: [1, 0.92, 1.08, 0.98, 1],
    },
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    className: "ambient-orb ambient-orb-accent",
    animate: {
      x: [0, 25, -40, 15, 0],
      y: [0, -20, 40, -30, 0],
      opacity: [0.25, 0.4, 0.3, 0.45, 0.25],
    },
    transition: { duration: 16, repeat: Infinity, ease: "easeInOut" as const },
  },
];

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.5) % 85}%`,
  top: `${10 + (i * 11) % 80}%`,
  size: 2 + (i % 3),
  duration: 14 + (i % 5) * 3,
  delay: i * 0.6,
}));

export function SiteBackground() {
  return (
    <div className="site-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={orb.className}
          animate={orb.animate}
          transition={orb.transition}
        />
      ))}

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="ambient-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, -60, -30, 0],
            opacity: [0, 0.6, 0.3, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="site-bg-vignette" />
    </div>
  );
}
