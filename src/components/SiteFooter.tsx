import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-sm text-muted sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p className="font-[family-name:var(--font-syne)] text-base font-bold text-foreground">
          MANGO PUB <span className="font-normal text-muted">· Zwierzyniec</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="#start" className="hover:text-foreground">
            Start
          </Link>
          <Link href="#jedzenie" className="hover:text-foreground">
            Menu
          </Link>
          <Link href="#lokalizacja" className="hover:text-foreground">
            Dojazd
          </Link>
          <a href="tel:+48699185339" className="hover:text-foreground">
            699 185 339
          </a>
          <a
            href="https://www.instagram.com/mango_zwierzyniec/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Instagram
          </a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Mango Pub</p>
      </div>
    </footer>
  );
}
