"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Smooth scroll provider via Lenis.
 * Wraps the app at root level. Disabled when prefers-reduced-motion.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
