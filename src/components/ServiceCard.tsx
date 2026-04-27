import type { ReactNode } from "react";

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
    <div className="card p-7 md:p-8 h-full flex flex-col group">
      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-full bg-[color:var(--surface-soft)] flex items-center justify-center text-[color:var(--primary-deep)] border border-[color:var(--border)] group-hover:bg-[color:var(--primary-soft)] transition-colors">
          {icon}
        </div>
        <span className="rule-thin flex-1 ml-4" />
      </div>
      <h3 className="font-display text-[1.45rem] text-[color:var(--foreground)] leading-tight tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] text-[color:var(--foreground-soft)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
