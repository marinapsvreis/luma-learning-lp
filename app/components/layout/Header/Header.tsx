"use client";

import Image from "next/image";
import { Details } from "../../shared/Details/Details";
import type { Locale } from "../../../locale";
import { messages } from "./Header.copy";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useMobileMenu } from "./useMobileMenu";

export function Header({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  const { open, toggleRef, toggleMenu, closeMenu, handleKeyDown } = useMobileMenu();
  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label={copy.homeLabel}>
          <Image src="/images/luma-logo.svg" alt="" width={54} height={17} />
        </a>
        <div className="ml-auto mr-2 desktop:hidden"><LanguageSwitcher locale={locale} /></div>
        <button id="menu-toggle" ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? copy.closeMenu : copy.openMenu} aria-expanded={open} aria-controls="site-menu" onClick={toggleMenu}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#171B2C" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 7H21" />
            <path d="M3 12H21" />
            <path d="M3 17H21" />
          </svg>
        </button>
        <div id="site-menu" className={open ? "site-menu is-open" : "site-menu"}>
          <div className="site-menu-content">
            <nav aria-label={copy.navigationLabel} className="body-1">
              {copy.navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            </nav>
            <div className="header-actions">
              <div className="hidden desktop:inline-flex"><LanguageSwitcher locale={locale} /></div>
              <Details locale={locale} title={copy.loginTitle} description={copy.loginDescription} className="text-link body-1">{copy.login}</Details>
              <a href="#courses" className="button button-standard primary" onClick={closeMenu}>{copy.start}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
