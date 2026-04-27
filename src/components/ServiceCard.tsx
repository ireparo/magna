"use client";

import type { ReactNode } from "react";
import TiltCard from "@/components/effects/TiltCard";

export default function ServiceCard({
  icon,
  title,
  description,
  image,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <TiltCard className="h-full" intensity={4} lift={3}>
      <article className="card h-full flex flex-col group relative overflow-hidden">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Subtle warm overlay at bottom for legibility */}
            <div
              aria-hidden
              className="absolute inset-0 mix-blend-multiply opacity-10"
              style={{
                background: "linear-gradient(180deg, transparent 60%, rgba(74,52,38,0.6) 100%)",
              }}
            />
            {/* Floating arrow on hover */}
            <span
              aria-hidden
              className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[color:var(--surface)] text-[color:var(--primary-deep)] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        )}

        <div className="p-7 md:p-8 flex flex-col flex-1">
          {!image && (
            <div className="flex items-center justify-between mb-6">
              <div className="w-11 h-11 rounded-full bg-[color:var(--surface-soft)] flex items-center justify-center text-[color:var(--primary-deep)] border border-[color:var(--border)] transition-all duration-300 group-hover:bg-[color:var(--primary-soft)] group-hover:scale-110">
                {icon}
              </div>
              <span className="rule-thin flex-1 ml-4" />
            </div>
          )}

          <h3 className="font-display text-[1.45rem] text-[color:var(--foreground)] leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">
            {description}
          </p>
        </div>
      </article>
    </TiltCard>
  );
}
