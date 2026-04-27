import type { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, telLink, waLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contacte",
  description: "Demana cita al centre MAGNA Fisioteràpia. WhatsApp, telèfon, email i ubicació.",
};

const CHANNELS = [
  {
    label: "WhatsApp",
    value: "Resposta ràpida en hores laborables",
    href: waLink("Hola MAGNA! Voldria demanar cita."),
    cta: "Obrir WhatsApp",
    external: true,
    highlighted: true,
  },
  {
    label: "Telèfon",
    value: PHONE_DISPLAY,
    href: telLink(),
    cta: "Trucar",
    external: false,
    highlighted: false,
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: "Enviar email",
    external: false,
    highlighted: false,
  },
];

export default function ContactePage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <SectionEyebrow no="06" label="Contacte" />
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <h1 className="font-display text-[3rem] sm:text-[4.4rem] md:text-[6rem] leading-[0.95] tracking-[-0.03em] text-[color:var(--foreground)]">
              Demana cita.
              <br />
              <span className="font-display-italic text-[color:var(--primary)]">T'esperem.</span>
            </h1>
            <p className="text-base md:text-lg text-[color:var(--foreground-soft)] leading-relaxed md:max-w-sm md:justify-self-end">
              Tria el canal que prefereixis. Et confirmem la cita el mateix dia.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Canales — strip de 3 con dividers */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
          {CHANNELS.map((c, idx) => (
            <article
              key={c.label}
              className={`p-8 md:p-10 h-full flex flex-col ${c.highlighted ? "bg-[color:var(--primary-deep)]" : "bg-[color:var(--background)]"}`}
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className={`numeral text-[2.4rem] ${c.highlighted ? "!text-[color:var(--primary-soft)]" : ""}`}>
                  {`0${idx + 1}`}
                </span>
                <span className={`smallcaps ${c.highlighted ? "text-[color:var(--surface)]/70" : "text-[color:var(--muted)]"}`}>
                  Canal
                </span>
              </div>
              <h3 className={`font-display text-[1.7rem] leading-tight ${c.highlighted ? "text-[color:var(--surface)]" : "text-[color:var(--foreground)]"}`}>
                {c.label}
              </h3>
              <p className={`mt-2 text-[14.5px] leading-relaxed flex-1 ${c.highlighted ? "text-[color:var(--surface)]/80" : "text-[color:var(--foreground-soft)]"}`}>
                {c.value}
              </p>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className={`mt-8 ${c.highlighted ? "btn-secondary !bg-[color:var(--surface)] !text-[color:var(--primary-deep)] !border-[color:var(--surface)]" : "btn-primary"} w-full`}
              >
                {c.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Visita */}
      <section className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-px bg-[color:var(--border)] border-y border-[color:var(--border)]">
        <Reveal>
          <div className="p-8 md:p-12 h-full bg-[color:var(--background)]">
            <SectionEyebrow no="i" label="On som" />
            <h2 className="font-display text-[1.9rem] md:text-[2.4rem] leading-tight text-[color:var(--foreground)]">
              {ADDRESS}
            </h2>
            <div className="rule-thin my-6 max-w-[120px]" />
            <span className="smallcaps text-[color:var(--muted)]">Horari</span>
            <p className="mt-2 text-[15px] text-[color:var(--foreground)]">{HOURS}</p>
            <p className="mt-1 text-[14px] text-[color:var(--foreground-soft)] italic">Dissabtes amb cita prèvia.</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-full min-h-[320px] overflow-hidden bg-[color:var(--surface-soft)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/fachada.jpg"
              alt="Façana del centre MAGNA Fisioteràpia"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[rgba(42,31,24,0.55)] via-transparent to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-[color:var(--surface)]">
              <span className="smallcaps opacity-85">Façana</span>
              <p className="mt-1 text-sm italic opacity-80">Mapa de Google encastat — pendent de direcció definitiva.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Note */}
      <section className="max-w-3xl mx-auto mt-16 text-center text-sm text-[color:var(--muted)] italic">
        <p>Contingut provisional — falta confirmar telèfon, email i adreça reals.</p>
      </section>
    </div>
  );
}
