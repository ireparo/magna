"use client";

import type { ReactNode } from "react";
import TiltCard from "@/components/effects/TiltCard";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <TiltCard className="h-full" intensity={5} lift={3}>
      <div className="card p-7 md:p-8 h-full flex flex-col group relative overflow-hidden">
        {/* Subtle glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217, 196, 173, 0.35), transparent 60%)",
          }}
        />

        <div className="relative flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-full bg-[color:var(--surface-soft)] flex items-center justify-center text-[color:var(--primary-deep)] border border-[color:var(--border)] transition-all duration-300 group-hover:bg-[color:var(--primary-soft)] group-hover:scale-110">
            {icon}
          </div>
          <span className="rule-thin flex-1 ml-4" />
          {/* Arrow that appears on hover */}
          <span
            aria-hidden
            className="ml-3 w-6 h-6 rounded-full bg-[color:var(--primary-deep)] text-[color:var(--surface)] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </span>
        </div>

        <h3 className="relative font-display text-[1.45rem] text-[color:var(--foreground)] leading-tight tracking-tight">
          {title}
        </h3>
        <p className="relative mt-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">
          {description}
        </p>
      </div>
    </TiltCard>
  );
}
