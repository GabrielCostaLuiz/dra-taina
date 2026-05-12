import Image from "next/image";
import { siteConfig } from "@/constants/config";
import Section from "../layout/Section";
import SectionHeader from "../ui/SectionHeader";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <Section id="about" gradient="both">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute -top-6 -left-4 lg:-left-6 w-32 h-32 border-t-2 border-l-2 border-secondary/30 pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-4 lg:-right-6 w-32 h-32 border-b-2 border-r-2 border-secondary/30 pointer-events-none"></div>

          <div className="aspect-4/5 rounded-[48px] overflow-hidden shadow-2xl relative z-10">
            <Image
              src={siteConfig.images.about}
              alt={`Dra. ${siteConfig.name} em seu escritório`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent"></div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -right-2 lg:-right-8 bottom-0 lg:bottom-12 z-20 bg-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-editorial border border-outline-variant/10 max-w-[130px] lg:max-w-[160px] animate-float">
            <p className="text-xl lg:text-3xl font-display text-secondary leading-none mb-1">{siteConfig.experience} Anos</p>
            <p className="font-body text-[8px] lg:text-[9px] font-bold text-on-surface-variant uppercase tracking-widest leading-tight">
              de atuação especializada
            </p>
          </div>
        </div>

        <div className="relative">
          <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-6 block">
            Trajetória Profissional
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
            Estratégia aliada à <br />
            <span className="italic text-secondary font-light">sensibilidade humana.</span>
          </h2>

          <div className="space-y-6 text-on-surface-variant font-body text-lg mb-12 leading-relaxed">
            <p>
              Acredito que a advocacia vai além das leis; trata-se de pessoas e seus futuros.
              Como advogada inscrita na <span className="text-primary font-medium">{siteConfig.oab}</span>, busco oferecer segurança jurídica com um atendimento próximo e estratégico.
            </p>
            <p>
              Com atuação focada nas áreas <strong>Cível, Família, Sucessões e Imobiliário</strong>, meu compromisso é conduzir cada caso com o máximo rigor técnico, garantindo que os direitos e o patrimônio dos meus clientes sejam preservados.
            </p>
          </div>

          {/* Pillars of Practice */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Rigor Técnico", desc: "Precisão absoluta" },
              { title: "Ética", desc: "Transparência total" },
              { title: "Humanização", desc: "Escuta atenta" },
            ].map((pilar) => (
              <div key={pilar.title} className="border-l border-secondary/30 pl-4">
                <p className="font-display text-lg text-on-surface leading-none mb-1">{pilar.title}</p>
                <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-wider">{pilar.desc}</p>
              </div>
            ))}
          </div>

          {/* Section Closure / Mobile CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-10 border-t border-secondary/10 relative">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-secondary/40"></div>
              <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
                {siteConfig.oab}
              </span>
            </div>
            
            <a 
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-body text-xs font-bold text-on-surface hover:text-secondary transition-all uppercase tracking-widest"
            >
              Agendar consulta estratégica
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-secondary" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
