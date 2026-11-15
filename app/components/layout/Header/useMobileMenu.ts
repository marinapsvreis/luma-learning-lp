import { useRef, useState, type KeyboardEvent } from "react";

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setOpen((current) => !current);
  }

  function closeMenu() {
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (
      event.key === "Escape" &&
      open &&
      !(event.target instanceof Element && event.target.closest("dialog"))
    ) {
      closeMenu();
      toggleRef.current?.focus();
    }
  }

  return { open, toggleRef, toggleMenu, closeMenu, handleKeyDown };
}
