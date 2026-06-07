"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "./motion";

const headlineLines = ["Connecting Exceptional", "Founders to Capital."];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-8 px-4 sm:px-6 md:px-12 lg:grid-cols-[1fr_auto] lg:gap-10">
        <div className="relative z-10 max-w-xl">
          <motion.h1
            className="font-display text-[clamp(1.75rem,7vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em]"
            style={{ color: "var(--color-text-primary)" }}
          >
            {headlineLines.map((line, i) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[480px] font-body text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: "var(--color-text-secondary)" }}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.35 }}
          >
            I scout high-conviction projects and lead them to the right venture capital partners
            with precision, discretion, and speed.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
          >
            <a href="#contact" className="btn-primary btn-mobile-full sm:w-auto">
              Let&apos;s talk
            </a>
            <a
              href="#process"
              className="flex min-h-[44px] items-center justify-center font-body text-[14px] underline-offset-4 hover:underline sm:justify-start"
              style={{ color: "var(--color-text-secondary)" }}
            >
              How I Work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait-float relative mx-auto flex justify-center lg:mx-0 lg:justify-end"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-portrait-glow relative h-[180px] w-[180px] overflow-hidden rounded-full sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[280px] lg:w-[280px]"
            style={{ border: "1px solid rgba(0, 242, 255, 0.35)" }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(0, 242, 255, 0.15), 0 0 60px rgba(34, 197, 94, 0.1)",
                "0 0 40px rgba(0, 242, 255, 0.3), 0 0 70px rgba(34, 197, 94, 0.18)",
                "0 0 30px rgba(0, 242, 255, 0.15), 0 0 60px rgba(34, 197, 94, 0.1)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/cee-jhay-avatar.png"
              alt="Cee-Jhay"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
