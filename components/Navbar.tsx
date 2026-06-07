"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
      style={{
        background: scrolled ? "rgba(5, 8, 7, 0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        paddingTop: "env(safe-area-inset-top)",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <a
          href="#hero"
          className="font-display text-[16px] sm:text-[17px]"
          style={{ color: "var(--color-text-primary)" }}
        >
          Cee-Jhay
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="nav-link font-body text-[13px]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="btn-outline hidden md:inline-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Contact
        </motion.a>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-px w-5 bg-[var(--color-text-primary)]" />
          <span className="block h-px w-5 bg-[var(--color-text-primary)]" />
        </button>
      </nav>

      {open && (
        <div
          className="border-t px-4 py-3 sm:px-6 md:hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "rgba(5, 8, 7, 0.98)",
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-[44px] items-center font-body text-[15px]"
                  style={{ color: "var(--color-text-secondary)" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#contact"
                className="btn-outline btn-mobile-full inline-flex"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
