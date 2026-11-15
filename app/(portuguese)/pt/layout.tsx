import type { ReactNode } from "react";
import { SiteLayout } from "../../SiteLayout";
import { getSiteMetadata } from "../../siteMetadata";

export const metadata = getSiteMetadata("pt");

export default function PortugueseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <SiteLayout locale="pt">{children}</SiteLayout>;
}
