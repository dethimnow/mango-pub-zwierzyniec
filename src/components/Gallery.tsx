"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type Photo = {
  src: string;
  alt: string;
  grid: string;
  fit?: "cover" | "contain";
};

const photos: Photo[] = [
  {
    src: "/brand/hero-pyszne-promo.png",
    alt: "Mango Pizza — zamówienia online",
    grid: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[420px]",
  },
  {
    src: "/brand/logo-mango-pizza.png",
    alt: "Logo Mango Pizza",
    grid: "min-h-[180px] md:min-h-[200px]",
    fit: "contain",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    alt: "Pizza",
    grid: "min-h-[160px] md:min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600&q=80",
    alt: "Piwo",
    grid: "min-h-[160px] md:min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
    alt: "Wieczór przy stolikach",
    grid: "md:col-span-2 min-h-[200px]",
  },
  {
    src: "https://images.unsplash.com/photo-1514362540867-3df7f7aa3f34?w=600&q=80",
    alt: "Drink",
    grid: "min-h-[200px]",
  },
];

export function Gallery() {
  const reduce = useReducedMotion();

  return (
    <section id="galeria" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Galeria</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Mango w kadrze
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Nasze materiały i klimat baru — uzupełnione zdjęciami z wieczorów przy stole.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={`${p.src}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-surface shadow-sm ${p.grid} ${p.fit === "contain" ? "bg-[var(--bg)]" : ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className={
                  p.fit === "contain"
                    ? "object-contain p-6 sm:p-8"
                    : "object-cover transition-transform duration-700 hover:scale-105"
                }
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
