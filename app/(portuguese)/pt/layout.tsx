import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteLayout } from "../../SiteLayout";
import { messages } from "../../layout.copy";

export const metadata: Metadata = messages.pt;

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="pt">{children}</SiteLayout>;
}
