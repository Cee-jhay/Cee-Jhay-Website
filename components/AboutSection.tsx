"use client";

import { Reveal, slideInLeft, slideInRight } from "./motion";

export function AboutSection() {
  return (
    <section id="about" className="border-t py-8 sm:py-10 md:py-14" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-12">
        <Reveal variant={slideInLeft}>
          <p className="section-label mb-2">About</p>
          <h2
            className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-light leading-tight tracking-[-0.02em]"
            style={{ color: "var(--color-text-primary)" }}
          >
            I broker deals others can&apos;t close.
          </h2>
        </Reveal>

        <Reveal delay={0.08} variant={slideInRight}>
          <div className="space-y-3 font-body text-[14px] leading-relaxed sm:text-[15px]" style={{ color: "var(--color-text-secondary)" }}>
            <p>
              With deep roots in the OTC investment space, I identify projects with genuine potential,
              validate their fundamentals, and position them in front of the right investors at the
              right time.
            </p>
            <p>
              I&apos;m not a fund. I&apos;m not a middleman. I&apos;m a strategic partner who moves
              fast and operates with integrity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
