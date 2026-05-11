import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-16 lg:mb-24 ${className}`}>
      <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className={`font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
