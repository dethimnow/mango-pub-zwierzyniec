"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

export function EventsCulture() {
  return (
    <section id="wydarzenia" className="scroll-mt-24 border-y border-[var(--border)] bg-black/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">Wydarzenia i kultura</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Kino, LAF i muzyka na żywo
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Mango Pub mieści się w budynku kina Skarb. W pierwszej połowie sierpnia, podczas Letniej Akademii Filmowej,
            bywa tłoczno i głośno — dyskusje o filmach ciągną się godzinami. To dobry moment, by wpaść na piwo i pogadać
            o kinie z ludźmi, którzy kochają je tak samo jak Ty.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <div className="card-elevated rounded-3xl p-8">
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">Letnia Akademia Filmowa</h3>
              <p className="mt-3 leading-relaxed text-muted">
                W tym okresie pub tętni życiem — spotkasz tu widzów, twórców i gości festiwalu. Atmosfera jest wyjątkowa
                przez cały pierwszy tydzień sierpnia i dłużej, dopóki trwa LAF.
              </p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="card-elevated rounded-3xl p-8">
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">Zwierzynieckie Warsztaty Wokalne</h3>
              <p className="mt-3 leading-relaxed text-muted">
                W drugiej połowie sierpnia w sali kinowej odbywają się warsztaty wokalne. Otwarte próby i koncerty
                przyciągają miłośników wokalnych popisów — a w Mango spotkasz i porozmawiasz z uczestnikami. Gwiazd
                estrady nie brakuje.
              </p>
            </div>
          </RevealItem>
        </RevealStagger>

        <Reveal>
          <p className="mt-12 text-center font-[family-name:var(--font-syne)] text-2xl font-bold tracking-tight text-mango sm:text-3xl">
            Serdecznie zapraszamy
          </p>
        </Reveal>
      </div>
    </section>
  );
}
