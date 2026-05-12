import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="bg-surface-container p-8 md:p-10 rounded-[32px] border border-outline-variant/30 hover:shadow-editorial transition-all duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex gap-1 mb-6 text-[#FFD700] justify-center md:justify-start">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#FFD700] stroke-[#FFD700]" />
        ))}
      </div>
      <p className="font-body text-lg text-black! italic mb-8 grow">
        "{content}"
      </p>
      <div className="mt-auto">
        <p className="font-display text-xl text-black!">{name}</p>
        <p className="font-body text-xs font-bold text-primary! uppercase mt-1 tracking-widest">{role}</p>
      </div>
    </div>
  );
}
