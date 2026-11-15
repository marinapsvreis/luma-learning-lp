import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { locales, type Locale } from "./locale";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter-local",
  weight: "100 900",
  display: "swap",
});

const jakarta = localFont({
  src: "../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  variable: "--font-jakarta-local",
  weight: "200 800",
  display: "swap",
});

export function SiteLayout({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <html
      lang={locales[locale].language}
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body id="top">{children}</body>
    </html>
  );
}
