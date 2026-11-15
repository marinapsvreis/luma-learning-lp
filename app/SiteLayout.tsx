import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { locales, type Locale } from "./locale";

export function SiteLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return <html lang={locales[locale].language}><body id="top">{children}</body></html>;
}
