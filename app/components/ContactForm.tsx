"use client";

import { useState, type FormEvent } from "react";

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
