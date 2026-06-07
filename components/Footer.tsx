"use client";

import { contact } from "@/lib/contact";
import { ContactIconLinks } from "./ContactIcons";
import { Reveal } from "./motion";

export function Footer() {
  return (
    <Reveal>
      <footer
        className="border-t py-6"
        style={{
          borderColor: "var(--color-border)",
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 px-4 text-center sm:flex-row sm:gap-4 sm:px-6 sm:text-left md:px-12">
          <p className="font-body text-[12px] leading-relaxed" style={{ color: "var(--color-text-tertiary)" }}>
            © 2026 {contact.name}. All rights reserved.
          </p>
          <ContactIconLinks size={18} className="justify-center sm:justify-end" />
        </div>
      </footer>
    </Reveal>
  );
}
