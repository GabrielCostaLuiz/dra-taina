import Image from "next/image";
import Section from "../layout/Section";
import SectionHeader from "../ui/SectionHeader";
import { UserCheck, ShieldCheck, Gavel, Eye } from "lucide-react";

import { siteConfig } from "@/constants/config";

export default function CaseUnique() {
  return (
    <Section id="case-unique" variant="white" gradient="both" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-24 items-center">
          {/* Image Column */}
          <div className="relative order-2">
            <div className="relative aspect-3/4 md:aspect-4/5 rounded-[40px] overflow-hidden shadow-2xl group">
              <Image
                src={siteConfig.images.caseUnique}
                alt={`Cada caso é único - ${siteConfig.fullName}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px]"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Column */}
          <div className="order-1">
            <SectionHeader
              eyebrow="Compromisso"
              title={<>Atenção personalizada <br /><span className="italic text-secondary font-light">para cada história.</span></>}
              center={false}
              className="mb-8!"
            />
            <div className="space-y-6 text-on-surface-variant font-body text-lg mb-10">
              <p>
                Entendemos que por trás de cada processo existe uma vida, uma família e um patrimônio construído com esforço.
              </p>
              <p>
                Não trabalhamos com soluções genéricas. Nosso foco é identificar a estratégia mais inteligente e humana para o seu caso específico, garantindo que você tenha clareza e segurança em cada decisão.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
              {[
                { label: "Atendimento Exclusivo", icon: UserCheck },
                { label: "Sigilo Absoluto", icon: ShieldCheck },
                { label: "Rigor Técnico", icon: Gavel },
                { label: "Transparência Total", icon: Eye },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-on-surface font-body font-medium group">
                  <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm uppercase tracking-wider">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
