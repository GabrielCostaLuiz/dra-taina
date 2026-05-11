import Image from "next/image";
import { siteConfig } from "@/constants/config";
import { CheckCircle2, Gavel, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-40 items-center">
        <div className="relative z-10 order-2 lg:order-1">
          {/* Top Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50 font-body text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3 text-secondary" />
              Atendimento Online
            </span>
            <span className="bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50 font-body text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <Gavel className="w-3 h-3 text-secondary" />
              {siteConfig.oab}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl leading-[1.1] mb-8 text-on-surface">
            Cada caso <br />
            exige <span className="italic text-secondary">atenção, <br /> estratégia</span> e <br />
            acompanhamento
          </h1>
          
          <p className="font-body text-base text-on-surface-variant mb-12 max-w-sm leading-relaxed">
            {siteConfig.seo.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-full font-body text-xs font-bold hover:bg-secondary transition-all duration-300 shadow-editorial text-center">
              Falar com especialista
            </a>
            <button className="border border-outline px-10 py-5 rounded-full font-body text-xs font-bold text-primary hover:bg-surface-container-low transition-all duration-300">
              Agendar consulta
            </button>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2 flex justify-end">
          <div className="w-full max-w-[540px] aspect-4/5 rounded-[60px] overflow-hidden relative shadow-editorial">
            <Image
              src={siteConfig.images.hero}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
            
       
          </div>
        </div>
      </div>
    </section>
  );
}
