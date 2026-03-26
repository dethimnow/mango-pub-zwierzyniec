"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PYSZNE_ORDER_URL } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="start"
      className="relative min-h-[100dvh] overflow-hidden pt-16 gradient-mesh lg:min-h-[min(100dvh,920px)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-mango/25 blur-[100px]"
          animate={
            reduce
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.55, 0.4],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[-15%] h-[320px] w-[320px] rounded-full bg-brand-green/10 blur-[90px]"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, -20, 0],
                  y: [0, 10, 0],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[min(calc(100dvh-4rem),840px)] lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-8 lg:py-16">
        <div className="flex max-w-xl flex-col justify-center">
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.02 }}
          >
            Zwierzyniec · bar przy kinie Skarb
          </motion.p>
          <motion.h1
            className="font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-foreground"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="text-mango">Mango Pizza</span>
            <span className="text-brand-green"> · </span>
            <span className="text-foreground">pub z klimatem</span>
          </motion.h1>
          <motion.p
            className="mt-5 text-lg leading-relaxed text-muted sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            Pizza z pieca, domowe pierogi, golonka i galareta — drinki, piwo i kawa. Zamów z dostawą albo wpadnij na
            miejscu.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={PYSZNE_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-transform [box-shadow:0_14px_36px_-8px_rgba(229,57,53,0.45)] hover:scale-[1.02] active:scale-[0.98] sm:tracking-normal"
            >
              Zamawiaj online teraz
            </a>
            <Link
              href="#jedzenie"
              className="inline-flex items-center justify-center rounded-full bg-mango px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Co u nas zjesz
            </Link>
            <Link
              href="#lokalizacja"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-surface px-8 py-3.5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
            >
              Jak dojechać
            </Link>
          </motion.div>

          <motion.p
            className="mt-10 max-w-md text-sm italic leading-relaxed text-muted"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            „Uśmiech na co dzień” — przyjazna atmosfera i przytulne wnętrze zachęcają do spędzania czasu u nas.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-surface shadow-2xl shadow-black/10 sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/brand/hero-pyszne-promo.png"
              alt="Zamów Mango Pizza online na Pyszne.pl"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted lg:text-left">
            Zamówienia online przez{" "}
            <a
              href={PYSZNE_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-green underline decoration-brand-green/30 underline-offset-2 hover:decoration-brand-green"
            >
              Pyszne.pl
            </a>
            .
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1 }}
        aria-hidden
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-muted"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <div className="mx-auto mt-2 h-1.5 w-1 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
