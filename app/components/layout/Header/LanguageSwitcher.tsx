import Image from "next/image";
import { locales, type Locale } from "../../../locale";
import { messages } from "./Header.copy";

const languageOptions: Locale[] = ["en", "pt"];

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div role="group" aria-label={messages[locale].languages} className="inline-flex gap-1 rounded-lg border border-line p-1">
      {languageOptions.map((option) => {
        const { path, language, label, flag } = locales[option];
        return (
          <a
            key={option}
            href={path}
            hrefLang={language}
            lang={language}
            aria-label={label}
            aria-current={option === locale ? "page" : undefined}
            title={label}
            className="grid size-8 place-items-center rounded-md hover:bg-pale-blue aria-[current=page]:bg-pale-blue aria-[current=page]:ring-1 aria-[current=page]:ring-blue"
          >
            <Image src={flag} alt="" width={22} height={15} className="rounded-sm" />
          </a>
        );
      })}
    </div>
  );
}
