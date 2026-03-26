"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { JEDZENIE_WIX_URIS, wixImageSrc } from "@/data/wix-mango-images";
import { PYSZNE_ORDER_URL } from "@/lib/site";

const items = [
  {
    title: "Z pieca i z patelni",
    body: "Pyszna pizza, domowe pierogi, pieczona golonka i galareta — smaki, które wracają do nas z przyjemnością.",
  },
  {
    title: "Bar na miejscu",
    body: "Drinki, piwo, soki, herbata, kawa i inne napoje. Krótko mówiąc: jest co pić i z czym napić się kawy po obiedzie.",
  },
];

const foodPhotos = JEDZENIE_WIX_URIS.map((uri, i) => ({
  src: wixImageSrc(uri),
  alt: `Mango — danie i klimat ${i + 1}`,
}));

export function FoodDrink() {
  const reduce = useReducedMotion();

  return (
    <section id="jedzenie" className="scroll-mt-24 border-t border-[var(--border)] bg-black/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Jedzenie i napoje</p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Co u nas zjesz
          </h2>
          <p className="mt-3 max-w-2xl text-xl font-medium text-foreground">Smak, który zostaje</p>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Serwujemy to, co lubimy sami: domowe, sycące i bez przesady — idealne na lunch, kolację albo wieczór z
            przyjaciółmi.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {foodPhotos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-surface shadow-sm ${
                i === 0 ? "col-span-2 aspect-[21/9] md:col-span-3 md:aspect-[3/1]" : "aspect-square sm:aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <RevealItem key={item.title}>
              <article className="group card-elevated h-full rounded-3xl p-8 transition-shadow hover:shadow-lg hover:shadow-black/5">
                <div className="mb-4 h-1 w-12 rounded-full bg-mango transition-all group-hover:w-20" />
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <p className="mt-14 text-center text-base text-muted">
            Pizzę zamówisz też z dostawą —{" "}
            <a
              href={PYSZNE_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-red underline decoration-brand-red/30 underline-offset-4 transition-colors hover:decoration-brand-red"
            >
              Pyszne.pl
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
