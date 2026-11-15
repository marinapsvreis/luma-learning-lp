"use client";

import Image from "next/image";
import { useState } from "react";
import { Details } from "./Details";

const navigation = [
  ["Courses", "#courses"],
  ["For Teams", "#contact"],
  ["Community", "#community"],
  ["About", "#how-it-works"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }}>
      <div className="container header-inner">
        <a className="logo" href="#top" aria-label="Luma home">
          <Image src="/images/luma-logo.svg" alt="" width={54} height={17} />
        </a>
        <button id="menu-toggle" className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#171B2C" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 7H21" />
            <path d="M3 12H21" />
            <path d="M3 17H21" />
          </svg>
        </button>
        <div id="site-menu" className={open ? "site-menu is-open" : "site-menu"}>
          <div className="site-menu-content">
            <nav aria-label="Main navigation" className="body-1">
              {navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            </nav>
            <div className="header-actions">
              <Details title="Log in to Luma" description="Have a question about accessing your learning account? Contact the Luma team for help." className="text-link body-1">Log in</Details>
              <a href="#courses" className="button button-standard primary" onClick={() => setOpen(false)}>Start learning</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
