"use client";

import { Reveal } from "@/components/Reveal";

export function ContactNoclegi() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div
              id="kontakt"
              className="scroll-mt-24 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-surface to-background p-8 sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">Kontakt</p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-bold sm:text-3xl">
                Zadzwoń lub napisz
              </h2>
              <p className="mt-4 text-muted">Chętnie odpowiemy na pytania o stoliki, imprezy i menu.</p>
              <a
                href="tel:+48699185339"
                className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight text-mango transition-colors hover:text-mango-deep sm:text-4xl"
              >
                699 185 339
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div
              id="noclegi"
              className="scroll-mt-24 rounded-3xl border border-[var(--border)] bg-background/60 p-8 sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">Noclegi</p>
              <h2 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-bold sm:text-3xl">
                Zostań na dłużej w Zwierzyńcu
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Pytaj o noclegi i wolne terminy — doradzimy i pomożemy zorganizować pobyt w okolicy, żebyś mógł spokojnie
                wrócić na kolejny wieczór w Mango.
              </p>
              <a
                href="tel:+48699185339"
                className="mt-8 inline-flex rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Zapytaj o nocleg
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
