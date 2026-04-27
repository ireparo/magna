import Link from "next/link";
import Logo from "./Logo";
import { ADDRESS, EMAIL, HOURS, PHONE_DISPLAY, telLink, waLink } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-16 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.4fr_1fr_1.2fr_1fr] gap-12">
        {/* Brand */}
        <div>
          <Logo size="md" />
          <p className="mt-5 text-sm text-[color:var(--foreground-soft)] max-w-xs leading-relaxed">
            Centre de fisioteràpia amb un enfocament actiu. Et tractem, t'ensenyem a moure't millor i et fem més fort.
          </p>
        </div>

        {/* Centre */}
        <div>
          <span className="smallcaps text-[color:var(--muted)] block mb-4">Centre</span>
          <ul className="space-y-2.5 text-[15px] text-[color:var(--foreground-soft)]">
            {[
              ["Serveis", "/serveis/"],
              ["Exercici Terapèutic", "/exercici/"],
              ["L'equip", "/equip/"],
              ["Tarifes", "/tarifes/"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="link-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacte */}
        <div>
          <span className="smallcaps text-[color:var(--muted)] block mb-4">Contacte</span>
          <ul className="space-y-4">
            <ContactRow label="Telèfon" value={PHONE_DISPLAY} href={telLink()} />
            <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactRow
              label="WhatsApp"
              value="Enviar missatge"
              href={waLink("Hola MAGNA, voldria informació.")}
              external
            />
            <li>
              <Link href="/contacte/" className="link-underline text-[15px] text-[color:var(--foreground)]">
                Demanar cita →
              </Link>
            </li>
          </ul>
        </div>

        {/* Visita */}
        <div>
          <span className="smallcaps text-[color:var(--muted)] block mb-4">Visita'ns</span>
          <p className="text-[15px] text-[color:var(--foreground)] leading-relaxed">{ADDRESS}</p>
          <p className="mt-3 text-[13px] text-[color:var(--foreground-soft)] leading-relaxed">{HOURS}</p>
          <p className="text-[12px] text-[color:var(--muted)] italic mt-1">Dissabtes amb cita prèvia.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-[color:var(--border)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
        <p>© {year} MAGNA Fisioteràpia · Tots els drets reservats</p>
        <p className="italic">Web provisional</p>
      </div>
    </footer>
  );
}

function ContactRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <li>
      <span className="smallcaps text-[color:var(--muted)] text-[10px] block leading-tight mb-1">
        {label}
      </span>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-[15px] text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors"
      >
        {value}
      </a>
    </li>
  );
}
