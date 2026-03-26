"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="start"
      className="relative min-h-[100dvh] overflow-hidden pt-16 gradient-mesh"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-mango/20 blur-[100px]"
          animate={
            reduce
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.5, 0.35],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[-20%] h-[360px] w-[360px] rounded-full bg-mango-deep/15 blur-[90px]"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, -24, 0],
                  y: [0, 12, 0],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-mango"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zwierzyniec · bar przy kinie Skarb
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-syne)] text-[clamp(2.75rem,10vw,6rem)] font-extrabold leading-[0.95] tracking-tight"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          MANGO
          <br />
          <span className="text-muted">PUB</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Najlepszy pub w mieście. Pizza z pieca, domowe pierogi, pieczona golonka i galareta —
          oraz drinki, piwo, soki, herbata i kawa.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <Link
            href="#jedzenie"
            className="inline-flex items-center justify-center rounded-full bg-mango px-8 py-3.5 text-base font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Zobacz menu
          </Link>
          <Link
            href="#lokalizacja"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-surface px-8 py-3.5 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-black/[0.03]"
          >
            Jak dojechać
          </Link>
        </motion.div>
        <motion.p
          className="mt-14 max-w-md text-sm italic leading-relaxed text-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          „Uśmiech na co dzień” — przyjazna atmosfera i przytulne wnętrze zachęcają do spędzania
          czasu u nas.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
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
