"use client";

import { Reveal, Stagger, StaggerItem } from "./motion";

const steps = [
  {
    title: "Initial Review",
    description:
      "You submit your project. I evaluate the fundamentals: team, traction, market size, and capital efficiency.",
  },
  {
    title: "Vetting and Validation",
    description:
      "Projects that pass initial review enter a deeper diligence phase. I stress-test the thesis and identify positioning gaps.",
  },
  {
    title: "Investor Introduction",
    description:
      "I personally introduce your project to the most relevant investors in my network. No cold decks, only warm handoffs.",
  },
  {
    title: "Raise Support",
    description:
      "I stay in the deal through close, managing communication, timelines, and negotiations to maximize your outcome.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="border-t py-8 sm:py-10 md:py-14" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12">
        <Reveal className="mb-6 md:mb-8">
          <p className="section-label mb-2">Process</p>
          <h2
            className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-light tracking-[-0.02em]"
            style={{ color: "var(--color-text-primary)" }}
          >
            The Process
          </h2>
        </Reveal>

        <Stagger className="grid gap-6 sm:gap-5 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <article>
                <h3
                  className="mb-2 font-body text-[15px] font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <span style={{ color: "var(--color-gold)" }}>{index + 1}.</span> {step.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
