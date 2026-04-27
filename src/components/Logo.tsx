import Link from "next/link";

type Size = "sm" | "md" | "lg";
type Variant = "dark" | "light";

const SIZES: Record<Size, { wrapper: string; word: string; sub: string; accent: string }> = {
  sm: { wrapper: "gap-2.5", word: "text-base", sub: "text-[9px]", accent: "h-3 w-px" },
  md: { wrapper: "gap-3", word: "text-xl", sub: "text-[10px]", accent: "h-4 w-px" },
  lg: { wrapper: "gap-4", word: "text-3xl", sub: "text-xs", accent: "h-5 w-px" },
};

/**
 * Editorial wordmark. Variant "dark" (default) on cream backgrounds,
 * "light" on cocoa/dark backgrounds (e.g. inverted navbar).
 */
export default function Logo({
  size = "md",
  asLink = true,
  showSub = true,
  variant = "dark",
}: {
  size?: Size;
  asLink?: boolean;
  showSub?: boolean;
  variant?: Variant;
}) {
  const s = SIZES[size];

  const wordColor =
    variant === "light"
      ? "text-[color:var(--surface)]"
      : "text-[color:var(--foreground)]";
  const italicColor =
    variant === "light"
      ? "text-[color:var(--primary-soft)]"
      : "text-[color:var(--primary)]";
  const ruleBg =
    variant === "light"
      ? "bg-[color:var(--surface)]/35"
      : "bg-[color:var(--border-strong)]";
  const subColor =
    variant === "light"
      ? "text-[color:var(--surface)]/65"
      : "text-[color:var(--muted)]";

  const inner = (
    <span className={`inline-flex items-baseline ${s.wrapper}`}>
      <span className={`${s.word} font-display tracking-tight ${wordColor} leading-none`}>
        Magn<span className={`font-display-italic ${italicColor}`}>a</span>
      </span>
      {showSub && (
        <>
          <span className={`${s.accent} ${ruleBg} inline-block self-center`} aria-hidden />
          <span className={`${s.sub} smallcaps ${subColor} leading-none`}>
            Fisioteràpia
          </span>
        </>
      )}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link href="/" aria-label="MAGNA — Inici" className="inline-flex">
      {inner}
    </Link>
  );
}
