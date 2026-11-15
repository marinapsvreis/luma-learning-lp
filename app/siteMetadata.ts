import type { Metadata } from "next";
import { messages as heroMessages } from "./components/sections/Hero/Hero.copy";
import { messages } from "./layout.copy";
import { locales, type Locale } from "./locale";

export function getSiteMetadata(locale: Locale): Metadata {
  const { title, description } = messages[locale];
  const { path } = locales[locale];
  const siteUrl = process.env.SITE_URL;
  const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

  return {
    title,
    description,
    applicationName: "Luma Learning",
    metadataBase,
    alternates: metadataBase
      ? {
          canonical: path,
          languages: {
            en: locales.en.path,
            "pt-PT": locales.pt.path,
            "x-default": locales.en.path,
          },
        }
      : undefined,
    openGraph: {
      type: "website",
      siteName: "Luma Learning",
      locale: locale === "pt" ? "pt_PT" : "en",
      alternateLocale: [locale === "pt" ? "en" : "pt_PT"],
      title,
      description,
      ...(metadataBase && {
        url: path,
        images: [
          {
            url: "/images/hero.png",
            width: 500,
            height: 520,
            alt: heroMessages[locale].imageAlt,
          },
        ],
      }),
    },
    twitter: {
      card: "summary",
      title,
      description,
      ...(metadataBase && { images: ["/images/hero.png"] }),
    },
  };
}
