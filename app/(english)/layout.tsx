import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteLayout } from "../SiteLayout";
import { messages } from "../layout.copy";

export const metadata: Metadata = messages.en;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
