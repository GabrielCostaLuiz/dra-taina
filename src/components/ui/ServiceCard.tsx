import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group bg-surface-container-low p-10 rounded-[32px] border border-outline-variant/30 hover:bg-surface-container-high hover:shadow-editorial transition-all duration-500 cursor-default">
      <Icon className="text-secondary w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
      <h3 className="font-display text-2xl mb-4 text-on-surface">{title}</h3>
      <p className="font-body text-base text-on-surface-variant mb-6">{description}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 text-secondary font-body text-xs font-bold hover:gap-4 transition-all"
      >
        Saiba mais <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
