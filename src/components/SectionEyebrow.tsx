/**
 * Editorial section/page eyebrow: italic numeral + thin rule + small-caps label.
 * Used across the site for chapter-style headers.
 */
export default function SectionEyebrow({
  no,
  label,
  align = "start",
}: {
  no: string;
  label: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[color:var(--muted)] mb-5 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="numeral text-2xl">{no}</span>
      <span className="rule-thin w-10" />
      <span className="smallcaps">{label}</span>
    </div>
  );
}
