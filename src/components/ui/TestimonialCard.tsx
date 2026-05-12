import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-white/40 hover:shadow-editorial transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex gap-1 mb-6 text-secondary justify-center md:justify-start">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-secondary stroke-secondary" />
        ))}
      </div>
      <p className="font-body text-lg text-primary italic mb-8 grow">
        "{content}"
      </p>
      
      {/* Visual Divider */}
      <div className="w-full h-px bg-secondary/20 mb-6"></div>

      <div className="mt-auto">
        <p className="font-display text-xl text-secondary">{name}</p>
        <p className="font-body text-xs font-bold text-primary uppercase mt-1 tracking-widest opacity-70">{role}</p>
      </div>
    </div>
  );
}
