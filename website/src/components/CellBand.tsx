import { ArrowUpRight } from "lucide-react";

export type Cell = {
  kicker?: string;
  title: string;
  label?: string;
  text: string;
  href?: string;
  linkLabel?: string;
};

// Full-width band of equal cells split by 2px rules. Cells fill with the accent on hover.
// The rules are the band's foreground showing through a 2px grid gap, so each cell needs
// an opaque background matching its section (`cellBg`), and the item count must fill every row.
export function CellBand({
  items,
  cols,
  cellBg,
  titleClass = "text-6xl",
  className = "",
}: {
  items: Cell[];
  cols: string;
  cellBg: string;
  titleClass?: string;
  className?: string;
}) {
  return (
    <div className={`flex w-full items-center justify-center border-y border-foreground ${className}`}>
      <ul className={`grid w-full max-w-6xl gap-[2px] bg-foreground ${cols}`}>
        {items.map((item) => (
          <li
            key={item.title}
            className={`flex min-h-60 w-full flex-col items-center justify-center py-8 transition-all duration-500 hover:bg-primary hover:text-primary-foreground ${cellBg}`}
          >
            {item.kicker && (
              <p className="mb-3 w-[80%] text-left text-xs font-medium tracking-wide uppercase opacity-70">
                {item.kicker}
              </p>
            )}
            <p className={`w-[80%] text-left font-bold ${titleClass}`}>{item.title}</p>
            {item.label && <p className="w-[80%] text-left text-sm">{item.label}</p>}
            <p className="mt-5 w-[80%] text-left text-sm">{item.text}</p>
            {item.href && (
              <div className="mt-6 w-[80%]">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium uppercase underline underline-offset-4"
                >
                  {item.linkLabel ?? "Visit"}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
