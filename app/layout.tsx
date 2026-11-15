import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Learning | Build skills that move you forward",
  description: "Learn design, technology, business and more with practical, expert-led courses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body id="top">{children}</body></html>;
}
