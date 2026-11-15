export type Locale = "en" | "pt";

export const locales = {
  en: { path: "/", language: "en", label: "English", flag: "/images/flag-en.svg" },
  pt: { path: "/pt", language: "pt-PT", label: "Português de Portugal", flag: "/images/flag-pt.svg" },
} as const;
