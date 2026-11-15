import Image from "next/image";
import type { Locale } from "../../../locale";
import { messages } from "./Footer.copy";

export function Footer({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#top"
              className="logo inline-flex"
              aria-label={copy.homeLabel}
            >
              <Image
                src="/images/luma-logo.svg"
                alt=""
                width={54}
                height={17}
                className="brightness-0 invert"
              />
            </a>
            <p className="body-1">{copy.description}</p>
          </div>
          {copy.footerGroups.map(({ name, links }) => (
            <nav aria-label={name} key={name}>
              <h2 className="uppercase-label">{name}</h2>
              <ul className="body-1">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="copyright font-inter text-[13px]/[19.5px] font-normal tracking-normal">
          {copy.copyright}
        </p>
      </div>
    </footer>
  );
}
