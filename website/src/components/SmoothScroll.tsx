"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const NAV_HEIGHT = 48;

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -NAV_HEIGHT } });
    return () => lenis.destroy();
  }, []);

  return null;
}
