import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#f9f4e8",
};

export const metadata: Metadata = {
  title: "Mango Pizza — Pub Zwierzyniec",
  description:
    "Mango Pizza i pub w Zwierzyńcu — pizza z pieca, pierogi, golonka. Zamów na Pyszne.pl lub wpadnij do baru przy kinie Skarb.",
  icons: {
    icon: "/brand/logo-mango-pizza.png",
    apple: "/brand/logo-mango-pizza.png",
  },
  openGraph: {
    title: "Mango Pizza — Pub Zwierzyniec",
    description: "Zamów online lub odwiedź nas przy kinie Skarb.",
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
