"use client";

import { useState } from "react";

// Same always-one-active behaviour as ServiceRows, for lists whose order matters.
export function NumberedRows({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <ol className="w-full">
      {items.map((text, i) => {
        const on = i === active;
        const tone = on ? "text-primary-foreground" : "text-foreground";
        return (
          <li
            key={text}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`flex h-auto w-full flex-col items-center justify-center border-y border-foreground transition-all duration-500 ${
              on ? "bg-primary" : "bg-transparent"
            }`}
          >
            <div className="flex w-[95%] max-w-6xl items-start justify-between py-5">
              <span className={`text-4xl font-bold tabular-nums transition-all duration-500 md:text-5xl ${tone}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`w-[70%] text-2xl font-bold transition-all duration-500 md:text-3xl ${tone}`}>{text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
