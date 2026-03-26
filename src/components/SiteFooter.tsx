import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_URL, PYSZNE_ORDER_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 text-center text-sm text-muted sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Image
            src="/brand/logo-mango-pizza.png"
            alt="Mango Pizza"
            width={160}
            height={64}
            className="h-12 w-auto opacity-95"
          />
          <p className="font-[family-name:var(--font-syne)] text-base font-bold text-foreground">
            Pub <span className="font-normal text-muted">· Zwierzyniec</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <Link href="#start" className="hover:text-foreground">
            Start
          </Link>
          <Link href="#jedzenie" className="hover:text-foreground">
            Menu
          </Link>
          <a
            href={PYSZNE_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-red hover:text-foreground"
          >
            Pyszne.pl
          </a>
          <Link href="#lokalizacja" className="hover:text-foreground">
            Dojazd
          </Link>
          <a href="tel:+48699185339" className="hover:text-foreground">
            699 185 339
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Instagram
          </a>
        </div>
        <p className="text-xs sm:shrink-0">© {new Date().getFullYear()} Mango Pizza</p>
      </div>
    </footer>
  );
}
