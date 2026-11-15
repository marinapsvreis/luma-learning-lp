import type { ReactNode } from "react";
import { SiteLayout } from "../SiteLayout";
import { getSiteMetadata } from "../siteMetadata";

export const metadata = getSiteMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
