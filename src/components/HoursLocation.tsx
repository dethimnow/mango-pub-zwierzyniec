"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Partyzant%C3%B3w+26%2C+22-470+Zwierzyniec";

export function HoursLocation() {
  return (
    <section id="lokalizacja" className="scroll-mt-24 border-t border-[var(--border)] bg-black/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">Godziny i adres</p>
            <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl">
              Jesteśmy na miejscu
            </h2>
            <address className="mt-6 not-italic leading-relaxed text-muted">
              <span className="block font-[family-name:var(--font-syne)] text-lg font-bold text-foreground">
                Mango Pub
              </span>
              ul. Partyzantów 26
              <br />
              22-470 Zwierzyniec
              <br />
              Polska
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-[var(--border)] bg-surface px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Otwórz w Mapach Google
            </a>
          </Reveal>

          <RevealStagger className="space-y-4">
            <RevealItem>
              <div className="card-elevated rounded-3xl p-8">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold">Godziny otwarcia</h3>
                <p className="mt-2 text-sm uppercase tracking-wider text-mango">Poniedziałek — niedziela</p>
                <p className="mt-3 text-2xl font-semibold text-foreground">15:00 — 23:00</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  W czasie trwania Letniej Akademii Filmowej od godz. <strong className="text-foreground">11:00</strong>
                  .
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="rounded-3xl border border-mango/20 bg-mango/[0.08] p-8">
                <p className="text-sm font-medium text-foreground">
                  Latem, podczas LAF, bywa wyjątkowo tłoczno — warto zajrzeć wcześniej albo zadzwonić po stolik.
                </p>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
