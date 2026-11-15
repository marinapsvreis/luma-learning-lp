import { useState, type FormEvent } from "react";

export function useContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  }

  function handleInput() {
    setSent(false);
  }

  return { sent, handleSubmit, handleInput };
}
