"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { pill } from "@/components/ui";
import { navLinks, site } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background text-foreground shadow-md transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <a href="#top" aria-label={`${site.name}, back to top`} onClick={close}>
            <Logo />
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-poppins text-lg font-medium uppercase transition-all duration-300 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className={`${pill} h-9 px-6 text-lg font-bold uppercase`}>
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "h-[calc(100dvh-3rem)] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="relative flex h-full flex-col items-start gap-4 border-t border-border bg-background p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-3xl font-medium uppercase transition-all duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className={`${pill} absolute bottom-6 left-1/2 h-14 w-[90%] -translate-x-1/2 px-4 text-2xl font-bold uppercase`}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </nav>
  );
}
