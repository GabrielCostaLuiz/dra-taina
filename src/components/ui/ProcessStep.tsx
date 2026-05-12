import { ReactNode } from "react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <div className="relative group pt-8">
      {/* Background Number Accent */}
      <span className="absolute top-0 left-0 font-display text-[120px] font-bold text-primary/5 leading-none select-none pointer-events-none transition-colors group-hover:text-secondary/10">
        {number}
      </span>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="w-12 h-12 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-secondary shadow-lg transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-1">
          {icon}
        </div>

        <div>
          <h3 className="font-display text-2xl text-on-surface mb-3 tracking-tight group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="font-body text-[15px] text-on-surface-variant leading-relaxed max-w-[280px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
