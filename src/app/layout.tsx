import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mango Pub — Zwierzyniec",
  description:
    "Pizza, pierogi, golonka i galareta. Drinki, piwo, przyjazna atmosfera. Bar przy kinie Skarb w Zwierzyńcu.",
  openGraph: {
    title: "Mango Pub — Zwierzyniec",
    description: "Najlepszy pub w mieście. Zapraszamy.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${dm.variable} ${syne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
