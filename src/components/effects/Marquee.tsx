"use client";

import type { ReactNode } from "react";

/**
 * Endless horizontal marquee. CSS-only animation for smooth perf.
 * Render the same content twice (in `<MarqueeRow>` × 2) for seamless loop.
 */
export default function Marquee({
  children,
  speed = 36,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower */
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden] > div { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
