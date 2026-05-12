import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  centerMobile?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  centerMobile = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`
      ${centerMobile ? "text-center" : "text-left"} 
      ${center ? "lg:text-center" : "lg:text-left"} 
      mb-16 lg:mb-24 ${className}
    `}>
      <span className="font-body text-xs font-bold text-secondary uppercase tracking-[0.3em] mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className={`
          font-body text-lg section-description max-w-2xl leading-relaxed 
          ${centerMobile ? "mx-auto" : "mx-0"} 
          ${center ? "lg:mx-auto" : "lg:mx-0"}
        `}>
          {description}
        </p>
      )}
    </div>
  );
}
