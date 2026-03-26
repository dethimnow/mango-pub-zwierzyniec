"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

const MAPS_QUERY = "Partyzant%C3%B3w+26%2C+22-470+Zwierzyniec";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const photos = [
  {
    src: "https://images.unsplash.com/photo-1580588851318-8132939319b5?w=900&q=80",
    alt: "Domek letni w zieleni — spokojna okolica",
    grid: "md:col-span-2 md:row-span-2 min-h-[260px] md:min-h-[400px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c1fa65?w=700&q=80",
    alt: "Taras i miejsce do wypoczynku na świeżym powietrzu",
    grid: "min-h-[160px] md:min-h-[190px]",
  },
  {
    src: "https://images.unsplash.com/photo-1529193591184-39a8fcc4eaa5?w=700&q=80",
    alt: "Grill — murowany lub ogrodowy, wieczór przy jedzeniu",
    grid: "min-h-[160px] md:min-h-[190px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Dom z ogrodem — dużo przestrzeni wokół",
    grid: "md:col-span-2 min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=80",
    alt: "Okolica na spacery i wypoczynek",
    grid: "min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
    alt: "Przytulne wnętrze — pełne wyposażenie",
    grid: "min-h-[200px]",
  },
];

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
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-surface px-8 py-3.5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Zobacz na mapie
            </a>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mt-16 font-[family-name:var(--font-syne)] text-xl font-bold text-foreground sm:text-2xl">
            Zdjęcia
          </h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={`${p.src}-${i}`}
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
            Kontakt i dojazd jak do Mango Pub — chętnie wskażemy dokładnie, jak dojechać do domku.
          </p>
          <address className="mt-4 not-italic text-foreground">
            <span className="font-[family-name:var(--font-syne)] font-bold">Mango Pub</span>
            <br />
            ul. Partyzantów 26
            <br />
            22-470 Zwierzyniec, Polska
          </address>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-[var(--border)] bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
          >
            Otwórz w Mapach Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
