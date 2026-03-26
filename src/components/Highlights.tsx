"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

const cards = [
  {
    title: "Karaoke w poniedziałki",
    subtitle: "Wieczory z mikrofonem",
    text: "Śpiewaj swoje ulubione kawałki — wieczory karaoke to u nas tradycja.",
    accent: "01",
  },
  {
    title: "Przekąski i klasyki baru",
    subtitle: "Na mały i duży głód",
    text: "Drinki, piwo, pizza, pierogi — wszystko, czego potrzeba na dobry wieczór.",
    accent: "02",
  },
  {
    title: "Świętuj z nami",
    subtitle: "Od urodzin po Sylwestra",
    text: "Urodziny, Sylwester i inne okazje — dogadaj szczegóły i zarezerwuj stolik.",
    accent: "03",
  },
];

export function Highlights() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mango">Dlaczego Mango</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Wieczory, które chcesz powtarzać
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <RevealItem key={c.title}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-surface to-background p-8"
              >
                <span className="font-[family-name:var(--font-syne)] text-5xl font-extrabold text-white/[0.06]">
                  {c.accent}
                </span>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-mango">{c.subtitle}</p>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
                <div
                  className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-mango/10 blur-2xl"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
