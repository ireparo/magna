import Link from "next/link";

type Size = "sm" | "md" | "lg";
type Variant = "dark" | "light";

const SIZES: Record<Size, { width: number; className: string }> = {
  sm: { width: 110, className: "h-auto" },
  md: { width: 150, className: "h-auto" },
  lg: { width: 240, className: "h-auto" },
};

/**
 * MAGNA wordmark oficial. Logo PDF→SVG vectorial.
 * variant: "dark" (default) per fons clars (cream) · "light" per fons foscos (cocoa).
 */
export default function Logo({
  size = "md",
  asLink = true,
  variant = "dark",
}: {
  size?: Size;
  asLink?: boolean;
  variant?: Variant;
}) {
  const s = SIZES[size];
  const src = variant === "light" ? "/brand/magna-logo-cream.svg" : "/brand/magna-logo-cocoa.svg";

  // eslint-disable-next-line @next/next/no-img-element
  const img = (
    <img
      src={src}
      alt="MAGNA Fisioteràpia i Exercici Terapèutic"
      width={s.width}
      className={s.className}
      style={{ display: "block" }}
    />
  );

  if (!asLink) return img;
  return (
    <Link href="/" aria-label="MAGNA — Inici" className="inline-flex">
      {img}
    </Link>
  );
}
