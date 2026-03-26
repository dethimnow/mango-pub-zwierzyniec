"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { INSTAGRAM_EMBED_URL, INSTAGRAM_URL } from "@/lib/site";

export function InstagramShowcase() {
  const reduce = useReducedMotion();

  return (
    <section id="instagram" className="scroll-mt-24 border-y border-[var(--border)] bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Instagram</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Najnowsze z Mango
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Zdjęcia i relacje prosto z baru — śledź{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-mango/40 underline-offset-4 transition-colors hover:decoration-mango"
            >
              @mango_zwierzyniec
            </a>
            .
          </p>
        </Reveal>

        <motion.div
          className="mt-12"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-elevated overflow-hidden rounded-[1.75rem]">
            <div className="relative w-full bg-[#fafafa]">
              <iframe
                src={INSTAGRAM_EMBED_URL}
                title="Instagram Mango Pub Zwierzyniec"
                className="block min-h-[620px] w-full sm:min-h-[680px] lg:min-h-[720px]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(115deg,#f58529,#dd2a7b,#8134af)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] [box-shadow:0_12px_40px_-8px_rgba(221,42,123,0.35)]"
            >
              <InstagramGlyph className="h-5 w-5" />
              Otwórz profil na Instagramie
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
