"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PYSZNE_ORDER_URL } from "@/lib/site";

const links = [
  { href: "#start", label: "Start" },
  { href: "#jedzenie", label: "Jedzenie i napoje" },
  { href: "#wydarzenia", label: "Wydarzenia" },
  { href: "#instagram", label: "Instagram" },
  { href: "#galeria", label: "Galeria" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#noclegi", label: "Noclegi" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="glass-header fixed top-0 right-0 left-0 z-40 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="#start"
          className="flex shrink-0 items-center gap-2 rounded-lg outline-none ring-offset-2 ring-offset-[var(--bg)] focus-visible:ring-2 focus-visible:ring-mango"
        >
          <Image
            src="/brand/logo-mango-pizza.png"
            alt="Mango Pizza"
            width={200}
            height={80}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Główne">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-black/[0.04] hover:text-foreground xl:px-3"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PYSZNE_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-red px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex xl:px-4 xl:text-sm xl:normal-case xl:font-semibold xl:tracking-normal"
          >
            <span className="xl:hidden">Zamów</span>
            <span className="hidden xl:inline">Zamów online</span>
          </a>
          <a
            href="tel:+48699185339"
            className="hidden rounded-full bg-mango px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            Zadzwoń
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-surface/80 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : {}}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 bg-foreground"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : {}}
                className="block h-0.5 w-5 bg-foreground"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--border)] bg-surface lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobilne">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-black/[0.04]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={PYSZNE_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-brand-red px-4 py-3 text-center text-base font-semibold text-white"
              >
                Zamów online — Pyszne.pl
              </a>
              <a
                href="tel:+48699185339"
                className="rounded-xl bg-mango px-4 py-3 text-center text-base font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                Zadzwoń: 699 185 339
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
