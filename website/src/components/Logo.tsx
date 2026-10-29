import { site } from "@/content/site";

// Placeholder mark until the studio name and logo are chosen.
export function Logo() {
  return (
    <span className="flex items-center gap-2 text-2xl leading-none font-bold uppercase">
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="var(--primary)" />
        <path d="M8 19h16" stroke="var(--primary-foreground)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {site.name}
    </span>
  );
}
