"use client";

import { Reveal } from "@/components/Reveal";

export function ContactNoclegi() {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            id="kontakt"
            className="scroll-mt-24 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-surface to-[#f3efe8] p-8 shadow-md shadow-black/5 sm:p-10 lg:max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Kontakt</p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-bold sm:text-3xl">
              Zadzwoń lub napisz
            </h2>
            <p className="mt-4 text-muted">
              Stoliki, imprezy, menu — a także noclegi i domek. Wszystko załatwisz jednym telefonem.
            </p>
            <a
              href="tel:+48699185339"
              className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-mango transition-colors hover:text-mango-deep sm:text-4xl"
            >
              699 185 339
            </a>
            <p className="mt-6 text-sm text-muted">
              Szczegóły noclegów, zdjęcia domku i terminy — w sekcji{" "}
              <a href="#noclegi" className="font-semibold text-foreground underline decoration-mango/40 underline-offset-4">
                Noclegi
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
