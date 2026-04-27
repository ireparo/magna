"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { waLink } from "@/lib/contact";

const NAV_LINKS = [
  { href: "/serveis/", label: "Serveis" },
  { href: "/exercici/", label: "Exercici Terapèutic" },
  { href: "/equip/", label: "L'equip" },
  { href: "/tarifes/", label: "Tarifes" },
  { href: "/contacte/", label: "Contacte" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[color:var(--primary-deep)] border-b border-[color:var(--surface)]/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo size="md" variant="light" />

        <ul className="hidden lg:flex items-center gap-7 text-sm text-[color:var(--surface)]/75">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-[color:var(--surface)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink("Hola! M'agradaria demanar cita a MAGNA.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-[color:var(--surface)] text-[color:var(--primary-deep)] border border-[color:var(--surface)] hover:bg-[color:var(--primary-soft)] hover:border-[color:var(--primary-soft)] transition-colors"
          >
            Demanar cita
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[color:var(--surface)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Obrir menú"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transition-transform origin-left ${open ? "rotate-45 translate-y-[1px]" : ""}`} />
            <span className={`block h-0.5 w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-current transition-transform origin-left ${open ? "-rotate-45 -translate-y-[1px]" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--surface)]/10 bg-[color:var(--primary-deep)]">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[color:var(--surface)]/75 hover:text-[color:var(--surface)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={waLink("Hola! M'agradaria demanar cita a MAGNA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full font-semibold text-sm bg-[color:var(--surface)] text-[color:var(--primary-deep)]"
              >
                Demanar cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
