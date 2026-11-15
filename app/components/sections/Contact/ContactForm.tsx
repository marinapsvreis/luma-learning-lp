"use client";

import type { Locale } from "../../../locale";
import { messages } from "./ContactForm.copy";
import { useContactForm } from "./useContactForm";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = messages[locale];
  const { sent, handleSubmit, handleInput } = useContactForm();

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
      <h3 className="font-jakarta text-xl/8 font-bold tracking-normal">
        {copy.title}
      </h3>
      <p className="body-1">{copy.description}</p>
      <label>
        {copy.fullName}
        <input
          name="name"
          autoComplete="name"
          placeholder={copy.namePlaceholder}
          required
          maxLength={120}
        />
      </label>
      <label>
        {copy.email}
        <input
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          placeholder={copy.emailPlaceholder}
          required
          maxLength={254}
        />
      </label>
      <label>
        {copy.question}
        <textarea
          name="message"
          placeholder={copy.questionPlaceholder}
          rows={4}
          required
          maxLength={2000}
        />
      </label>
      <button
        className="button button-standard primary w-full px-7 py-3.5"
        type="submit"
      >
        {copy.submit}
      </button>
      <div role="status" className={sent ? undefined : "sr-only"}>
        {sent && <p className="form-success">{copy.success}</p>}
      </div>
    </form>
  );
}
