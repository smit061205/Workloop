"use client";

import { useState } from "react";

// One row is always active. It starts on the first; hovering (or tapping) a row moves it, and it stays.
export function ServiceRows({ items }: { items: { title: string; text: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <ul className="w-full">
      {items.map((item, i) => {
        const on = i === active;
        return (
          <li
            key={item.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`flex w-full flex-col items-center justify-center border-y border-foreground py-10 transition-all duration-500 ease-in-out ${
              on ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
            }`}
          >
            <div className="flex w-full max-w-6xl flex-col items-center justify-between md:flex-row">
              <h3 className="w-[95%] text-left text-4xl font-bold md:text-5xl">{item.title}</h3>
              <p
                className={`mt-3 w-[95%] max-w-[700px] overflow-hidden text-left font-poppins text-sm transition-all duration-500 md:mt-0 md:text-xl ${
                  on ? "max-h-40 opacity-100" : "max-h-0 opacity-0 md:max-h-40"
                }`}
              >
                {item.text}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
