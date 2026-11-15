"use client";

import { useRef, type ReactNode } from "react";
import { copy } from "./Details.copy";

export function Details({ title, description, children, className = "button secondary", action = copy.contact }: {
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
        <form method="dialog" className="dialog-close"><button aria-label={copy.close}>×</button></form>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#contact" className="button primary" onClick={() => dialog.current?.close()}>{action}</a>
      </dialog>
    </>
  );
}
