"use client";

import { contact } from "@/lib/contact";
import { ContactIconLinks } from "./ContactIcons";
import { Reveal, fadeUp } from "./motion";

export function ContactSection() {
  const telegramUrl = contact.telegram ?? "https://t.me/Cee_jh4y";

  return (
    <section id="contact" className="border-t py-8 sm:py-10 md:py-14" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-12">
        <Reveal className="mb-8 md:mb-10">
          <p className="section-label mb-2">Contact</p>
          <h2
            className="font-display text-[clamp(1.5rem,5vw,2.5rem)] font-light tracking-[-0.02em]"
            style={{ color: "var(--color-text-primary)" }}
          >
            Get in touch
          </h2>
          <p className="mt-2 max-w-xl font-body text-[14px] sm:text-[15px]" style={{ color: "var(--color-text-secondary)" }}>
            If you have a project worth funding, or capital worth deploying, reach out directly.
          </p>
        </Reveal>

        <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-[minmax(0,280px)_1fr] md:items-start md:gap-16 lg:gap-20">
          <Reveal delay={0.05} variant={fadeUp}>
            <ContactIconLinks size={22} className="justify-start" />
          </Reveal>

          <Reveal delay={0.1} variant={fadeUp}>
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-mobile-full md:w-auto"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
