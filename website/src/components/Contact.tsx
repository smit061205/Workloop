"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { pill } from "@/components/ui";
import { contact, site } from "@/content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is still visible on the button to copy by hand.
    }
  };

  return (
    <section
      id="contact"
      className="relative flex w-full scroll-mt-12 flex-col items-center justify-center bg-tint"
    >
      <div className="relative mt-40 flex w-[95%] max-w-6xl flex-col items-center justify-center">
        <h2 className="w-[95%] max-w-3xl text-center text-4xl font-bold text-balance uppercase md:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-3 w-[95%] max-w-xl text-center text-sm text-foreground/50 md:text-lg">{contact.text}</p>

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${site.email}`} className={`${pill} h-14 px-7 text-xl font-medium`}>
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="flex size-14 cursor-pointer items-center justify-center rounded-full border border-primary bg-background text-foreground transition-all hover:text-primary"
          >
            {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
          </button>
          <p aria-live="polite" className="sr-only">
            {copied ? "Email address copied" : ""}
          </p>
        </div>
      </div>

      <div className="mt-30 flex w-full items-center justify-center border-y border-foreground">
        <ul className="mx-auto flex w-[95%] max-w-6xl flex-col items-start justify-between gap-2 py-5 text-3xl uppercase md:flex-row md:gap-0">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="py-6 font-poppins">
        © {site.year} {site.name.toUpperCase()}
      </p>
    </section>
  );
}
