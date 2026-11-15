"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";

const navigation = [
  ["Courses", "#courses"],
  ["For Teams", "#contact"],
  ["Community", "#community"],
  ["About", "#how-it-works"],
];

export function Details({ title, description, children, className = "button secondary", action = "Get in touch" }: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  action?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className={className} onClick={() => dialog.current?.showModal()}>{children}</button>
      <dialog ref={dialog} className="dialog" aria-label={title}>
        <form method="dialog" className="dialog-close"><button aria-label="Close dialog">×</button></form>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#contact" className="button primary" onClick={() => dialog.current?.close()}>{action}</a>
      </dialog>
    </>
  );
}

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

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} onInput={() => setSent(false)}>
      <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">Contact us</h3>
      <p className="body-1">Fill out the fields and we will get in touch.</p>
      <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required maxLength={120} /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="youremail@example.com" required maxLength={254} /></label>
      <label>Your question<textarea name="message" placeholder="Tell us how we can help..." rows={4} required maxLength={2000} /></label>
      <button className="button button-standard primary w-full px-7 py-3.5" type="submit">Send message</button>
      <div role="status">{sent && <p className="form-success">Thanks! Your message was submitted in this demo.</p>}</div>
    </form>
  );
}
