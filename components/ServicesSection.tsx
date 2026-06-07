"use client";

import { motion } from "framer-motion";
import { Link2, Telescope, TrendingUp, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./motion";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Telescope,
    title: "Project Scouting",
    description:
      "I actively identify early-stage projects with strong fundamentals across crypto, fintech, and emerging tech verticals.",
  },
  {
    icon: Link2,
    title: "VC Relations & Capital Raising",
    description:
      "Building relationships with venture capital firms and facilitating funding opportunities to help projects secure the capital needed to scale.",
  },
  {
    icon: TrendingUp,
    title: "Fundraise Advisory",
    description:
      "From pitch deck review to term sheet navigation, I guide founders through the full fundraising process end to end.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t py-8 sm:py-10 md:py-14" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12">
        <Reveal className="mb-6 md:mb-8">
          <p className="section-label mb-2">Services</p>
          <h2
            className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-light tracking-[-0.02em]"
            style={{ color: "var(--color-text-primary)" }}
          >
            What I Do
          </h2>
        </Reveal>

        <Stagger className="grid gap-0 sm:gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <StaggerItem
                key={service.title}
                className={`service-card-hover py-6 sm:py-0 ${
                  !isLast ? "border-b md:border-b-0 md:border-r md:pr-8" : ""
                }`}
                style={!isLast ? { borderColor: "var(--color-border)" } : undefined}
              >
                <motion.div whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    style={{ color: "var(--color-gold)" }}
                    className="mb-3"
                  />
                </motion.div>
                <h3
                  className="mb-2 font-body text-[15px] font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-[14px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
