"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LineReveal } from "@/components/effects/TextReveal";
import Counter from "@/components/effects/Counter";
import MagneticLink from "@/components/effects/MagneticLink";
import { waLink } from "@/lib/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();
  const t = (delay = 0, duration = 0.9) =>
    reduced ? { duration: 0 } : { duration, delay, ease: EASE };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Decorative blurred shapes — drift slowly */}
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { x: [0, 24, 0], y: [0, -16, 0] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-24 w-[440px] h-[440px] rounded-full bg-[color:var(--primary-soft)]/55 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={
          reduced
            ? undefined
            : { x: [0, -28, 0], y: [0, 14, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full bg-[color:var(--rose)]/35 blur-[120px]"
      />

      {/* Top issue label — magazine style */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.1, 0.7)}
          className="flex items-center gap-4 text-[color:var(--muted)]"
        >
          <span className="smallcaps">Núm. 01</span>
          <span className="rule-thin flex-1 max-w-[80px]" />
          <span className="smallcaps">Lleida · 2026</span>
          <span className="rule-thin flex-1" />
          <span className="smallcaps hidden sm:inline">Fisioteràpia &amp; moviment</span>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-12 md:mt-16 grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-end">
        {/* LEFT — editorial title block with line-by-line reveal */}
        <div>
          <h1 className="font-display text-[3.4rem] sm:text-[5rem] md:text-[6.2rem] lg:text-[7.2rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
            <LineReveal delay={0.2}>Mou-te</LineReveal>
            <br />
            <LineReveal delay={0.45}>
              <span className="font-display-italic text-[color:var(--primary)]">amb confiança.</span>
            </LineReveal>
          </h1>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.85, 0.8)}
            className="mt-8 max-w-lg"
          >
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--foreground-soft)]">
              A <strong className="text-[color:var(--foreground)] font-semibold">MAGNA</strong> no només et tractem el dolor: et donem les eines —teràpia manual i exercici— perquè el teu cos torni a fer el que vol fer.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(1.05, 0.8)}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <MagneticLink
              href={waLink("Hola! Voldria demanar primera visita a MAGNA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Demanar primera visita
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m13 5 7 7-7 7" />
                </svg>
              </span>
            </MagneticLink>
            <a href="/serveis/" className="btn-secondary">
              Conèixer els serveis
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={t(1.35, 0.8)}
            className="mt-14 flex items-stretch gap-6 max-w-md"
          >
            <Stat value={500} suffix="+" label="Pacients" />
            <span className="rule-vertical" />
            <Stat value={10} suffix=" anys" label="D'experiència" />
            <span className="rule-vertical" />
            <Stat value={60} suffix="min" label="Per sessió" />
          </motion.div>
        </div>

        {/* RIGHT — editorial pull-quote card */}
        <motion.aside
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.55, 1.0)}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-[color:var(--primary-deep)] via-[color:var(--primary)] to-[color:var(--primary-soft)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 15%, rgba(255,252,246,0.45), transparent 45%), radial-gradient(circle at 80% 85%, rgba(255,252,246,0.18), transparent 45%)",
              }}
            />

            <span
              aria-hidden
              className="absolute top-6 left-7 font-display-italic text-[color:var(--primary-soft)]/90 text-[7rem] leading-none select-none"
            >
              &ldquo;
            </span>

            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
              <p className="font-display text-[1.65rem] md:text-[2rem] leading-[1.1] text-[color:var(--surface)] tracking-tight">
                El millor tractament és el que t&apos;ensenya
                <span className="font-display-italic"> a no necessitar-lo.</span>
              </p>
              <div className="mt-5 flex items-center gap-3 text-[color:var(--surface)]/80">
                <span className="rule-thin flex-1 max-w-[40px] !bg-[color:var(--surface)]/40" />
                <span className="smallcaps text-[color:var(--surface)]/85">Filosofia MAGNA</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-5 -left-6 items-center gap-3 bg-[color:var(--surface)] rounded-full border border-[color:var(--border-strong)] pl-3 pr-5 py-2.5">
            <span className="w-8 h-8 rounded-full bg-[color:var(--surface-soft)] flex items-center justify-center text-[color:var(--primary-deep)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span className="text-xs">
              <span className="smallcaps text-[color:var(--muted)] block leading-tight">Sessions</span>
              <span className="font-display text-[color:var(--foreground)] text-base leading-tight">d&apos;una hora</span>
            </span>
          </div>

          <span
            aria-hidden
            className="hidden lg:block absolute -top-10 -right-4 numeral text-[7rem]"
          >
            01
          </span>
        </motion.aside>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="flex-1">
      <div className="font-display text-2xl md:text-[1.75rem] text-[color:var(--primary-deep)] leading-none">
        <Counter value={value} suffix={suffix} />
      </div>
      <div className="smallcaps text-[color:var(--muted)] mt-2">{label}</div>
    </div>
  );
}
