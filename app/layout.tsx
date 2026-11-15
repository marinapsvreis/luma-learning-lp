import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { copy } from "./layout.copy";

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body id="top">{children}</body></html>;
}
