"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import {
  NOCLEGI_MAPS_URL,
  NOCLEGI_WIX_URIS,
  wixImageSrc,
} from "@/data/wix-mango-images";

const PUB_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Partyzant%C3%B3w+26%2C+22-470+Zwierzyniec";

const noclegiGrids = [
  "md:col-span-2 md:row-span-2 min-h-[260px] md:min-h-[400px]",
  "min-h-[160px] md:min-h-[190px]",
  "min-h-[160px] md:min-h-[190px]",
  "md:col-span-2 min-h-[200px]",
  "min-h-[200px]",
  "min-h-[200px]",
] as const;

const noclegiPhotos = NOCLEGI_WIX_URIS.map((uri, i) => ({
  src: wixImageSrc(uri),
  alt: `Noclegi Mango — zdjęcie ${i + 1}`,
  grid: noclegiGrids[i] ?? "min-h-[180px]",
}));

export function NoclegiSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="noclegi"
      className="scroll-mt-24 border-t border-[var(--border)] bg-black/[0.02] py-20 sm:py-28"
      aria-labelledby="noclegi-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Noclegi</p>
          <h2
            id="noclegi-heading"
            className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Domek do wynajęcia
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 max-w-3xl space-y-4">
          <RevealItem>
            <p className="text-lg leading-relaxed text-muted">
              <strong className="font-semibold text-foreground">Opis:</strong> wolno stojący domek, czysty, zadbany, z
              pełnym wyposażeniem.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="text-lg leading-relaxed text-muted">
              Spokojna okolica, dużo miejsca wokół domku, taras, murowany grill.
            </p>
          </RevealItem>
          <RevealItem>
            <p className="text-lg leading-relaxed text-muted">Wspaniałe miejsce na wypoczynek.</p>
          </RevealItem>
        </RevealStagger>

        <Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="tel:+48699185339"
              className="inline-flex items-center justify-center rounded-full bg-mango px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Zapytaj o wolne terminy: 699 185 339
            </a>
            <a
              href={NOCLEGI_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-surface px-8 py-3.5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Domek na mapie
            </a>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
            Zdjęcia
          </h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {noclegiPhotos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-surface shadow-sm ${p.grid}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-16 font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
            Lokalizacja
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            Domek: Bagno 63B (Bagno). Mango Pub — bar i kontakt: Zwierzyniec, ul. Partyzantów 26.
          </p>
          <address className="mt-4 not-italic text-foreground">
            <span className="font-[family-name:var(--font-syne)] font-bold">Domek (noclegi)</span>
            <br />
            Bagno 63B, 22-470 Bagno, Polska
          </address>
          <address className="mt-4 not-italic text-muted">
            <span className="font-[family-name:var(--font-syne)] font-bold text-foreground">Mango Pub</span>
            <br />
            ul. Partyzantów 26
            <br />
            22-470 Zwierzyniec, Polska
          </address>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={NOCLEGI_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[var(--border)] bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Mapa — domek (Bagno)
            </a>
            <a
              href={PUB_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[var(--border)] bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Mapa — pub (Zwierzyniec)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
