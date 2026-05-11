"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Handshake,
  Baby,
  History,
  FileText,
  Home,
  ShieldCheck,
  Scale,
  ArrowRight,
  ChevronDown,
  Plus
} from "lucide-react";
import { siteConfig } from "@/constants/config";
import Section from "../layout/Section";
import SectionHeader from "../ui/SectionHeader";


const servicePillars = [
  {
    id: "familia",
    title: "Família",
    fullName: "Direito de Família",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070",
    whatsappMessage: "Olá Dra. Tainá, gostaria de agendar uma consulta sobre Direito de Família.",
    items: [
      { title: "Divórcio Estratégico", description: "Dissolução de vínculo com foco na preservação do patrimônio e mitigação de conflitos emocionais.", icon: Users },
      { title: "Guarda e Convivência", description: "Definição de regimes que priorizam o bem-estar dos filhos e a harmonia nas relações parentais.", icon: Baby },
      { title: "Pensão Alimentícia", description: "Fixação e revisão de alimentos com análise técnica rigorosa da capacidade e necessidade.", icon: Handshake },
      { title: "Planejamento Matrimonial", description: "Escolha estratégica de regimes de bens para proteger ativos antes e durante a união.", icon: FileText }
    ]
  },
  {
    id: "sucessoes",
    title: "Sucessões",
    fullName: "Direito Sucessório",
    icon: History,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    whatsappMessage: "Olá Dra. Tainá, gostaria de agendar uma consulta sobre Sucessões e Inventário.",
    items: [
      { title: "Inventários", description: "Condução célere de processos judiciais e extrajudiciais para a partilha eficiente de bens.", icon: History },
      { title: "Planejamento Sucessório", description: "Estratégias inteligentes para a transmissão de herança com mínima carga tributária.", icon: ShieldCheck },
      { title: "Testamentos e Doações", description: "Segurança jurídica na formalização de vontades e antecipação de legítima com eficácia.", icon: FileText },
      { title: "Holding Familiar", description: "Estruturação societária dedicada à proteção e gestão profissional do patrimônio familiar.", icon: Home }
    ]
  },
  {
    id: "imobiliario",
    title: "Imobiliário",
    fullName: "Direito Imobiliário",
    icon: Home,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070",
    whatsappMessage: "Olá Dra. Tainá, gostaria de agendar uma consulta sobre Direito Imobiliário.",
    items: [
      { title: "Contratos de Luxo", description: "Assessoria especializada na compra, venda e permuta de imóveis de alto padrão.", icon: FileText },
      { title: "Regularização de Bens", description: "Soluções jurídicas para usucapião e retificação de registros de propriedades complexas.", icon: Home },
      { title: "Investimento Seguro", description: "Análise de riscos em leilões e incorporações para garantir rentabilidade imobiliária.", icon: Scale },
      { title: "Distrato Imobiliário", description: "Rescisão contratual estratégica visando a recuperação máxima de valores investidos.", icon: ShieldCheck }
    ]
  },
  {
    id: "cível",
    title: "Cível",
    fullName: "Cível",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    whatsappMessage: "Olá Dra. Tainá, gostaria de agendar uma consulta sobre Cível.",
    items: [
      { title: "Responsabilidade Cível", description: "Defesa e pleitos indenizatórios em casos de danos morais e materiais complexos.", icon: ShieldCheck },
      { title: "Gestão Contratual", description: "Consultoria preventiva para elaboração de instrumentos que blindam as relações de negócio.", icon: FileText },
      { title: "Direito do Consumidor", description: "Atuação em litígios contra grandes corporações para reparação de vícios e abusos.", icon: Users },
      { title: "Recuperação de Ativos", description: "Execução estratégica de títulos e cobrança especializada para reaver créditos pendentes.", icon: Scale }
    ]
  }
];

export default function Services() {
  const [activePillar, setActivePillar] = useState(servicePillars[0]);

  return (
    <Section id="services" gradient="both">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <SectionHeader
          eyebrow="Nossas Especialidades"
          title={<>Estratégia Jurídica de <br /><span className="italic text-secondary font-light">Alto Padrão</span></>}
          description="Soluções personalizadas em quatro pilares fundamentais do direito contemporâneo."
        />

        {/* Desktop View: Tabs + Circle Layout */}
        <div className="hidden lg:block">
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {servicePillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className={`px-10 py-4 rounded-full font-body text-sm font-bold transition-all duration-500 border ${activePillar.id === pillar.id
                  ? "bg-primary text-white border-primary shadow-xl scale-105"
                  : "bg-white text-on-surface-variant border-outline-variant/30 hover:border-secondary/50"
                  }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-4 space-y-16">
              {activePillar.items.slice(0, 2).map((item, index) => (
                <div key={index} className="group relative lg:text-right">
                  <div className="inline-flex lg:flex-row-reverse items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-secondary shadow-sm transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-1">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-on-surface group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-16 h-1 bg-secondary mb-4 lg:ml-auto"></div>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed lg:pl-12">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex justify-center relative py-12 perspective-1000">
              <div className="relative w-80 h-80 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-0 text-center border-4 border-surface-container-high transition-all duration-700 overflow-hidden group hover:scale-105">

                {/* Background Image - Always visible but dimmed */}
                <div className="absolute inset-0 transition-all duration-700 transform group-hover:scale-110">
                  <Image
                    src={activePillar.image}
                    alt={`Serviço de ${activePillar.fullName} - ${siteConfig.fullName}`}
                    fill
                    className="object-cover opacity-20 grayscale-50 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  {/* Subtle overlay that fades out */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/40 transition-opacity duration-700 group-hover:opacity-0"></div>
                </div>

                {/* Content that hides on hover */}
                <div className="relative z-10 p-12 transition-all duration-500 transform group-hover:opacity-0 group-hover:scale-150 group-hover:rotate-12 pointer-events-none">
                  <div className="w-20 h-20 rounded-3xl bg-white border border-outline-variant/20 shadow-sm flex items-center justify-center text-secondary mx-auto mb-6">
                    <activePillar.icon className="w-10 h-10" />
                  </div>
                  <h4 className="font-display text-2xl text-on-surface mb-2">{activePillar.fullName}</h4>
                  <div className="w-20 h-1 bg-secondary mx-auto"></div>
                </div>

                {/* Decorative Rings */}
                <div className="absolute inset-0 border border-secondary/10 rounded-full scale-110 pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:opacity-0"></div>
                <div className="absolute inset-0 border border-secondary/5 border-dashed rounded-full scale-125 animate-spin-slow pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:opacity-0"></div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-16">
              {activePillar.items.slice(2, 4).map((item, index) => (
                <div key={index} className="group relative text-left">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-secondary shadow-sm transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-1">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-2xl text-on-surface group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-16 h-1 bg-secondary mb-4"></div>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed lg:pr-12">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <a
              href={`https://wa.me/5511940044592?text=${encodeURIComponent(activePillar.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-secondary font-display text-xl hover:text-primary transition-all max-w-full px-4"
            >
              <span className="truncate">Saber mais sobre {activePillar.title}</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile View: Vertical Accordion Layout */}
        <div className="lg:hidden space-y-6">
          {servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${activePillar.id === pillar.id ? "border-secondary/30 shadow-xl" : "border-outline-variant/20"
                }`}
            >
              <button
                onClick={() => setActivePillar(activePillar.id === pillar.id && pillar.id !== servicePillars[0].id ? servicePillars[0] : pillar)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activePillar.id === pillar.id ? "bg-primary text-white" : "bg-surface-container text-secondary"
                    }`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className={`font-display text-xl ${activePillar.id === pillar.id ? "text-primary" : "text-on-surface"}`}>
                    {pillar.fullName}
                  </span>
                </div>
                <div className={`transition-transform duration-500 ${activePillar.id === pillar.id ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-5 h-5 text-secondary" />
                </div>
              </button>

              <div className={`transition-all duration-700 ease-in-out ${activePillar.id === pillar.id ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                <div className="px-6 pb-8 space-y-10 border-t border-outline-variant/10 pt-8">
                  {pillar.items.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <h4 className="font-display text-lg text-on-surface">{item.title}</h4>
                      </div>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed pl-6">
                        {item.description}
                      </p>
                    </div>
                  ))}

                  <div className="pt-4">
                    <a
                      href={`https://wa.me/5511940044592?text=${encodeURIComponent(pillar.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-primary text-white py-4 px-6 rounded-2xl font-body font-bold text-sm"
                    >
                      <span className="truncate">Saber mais sobre {pillar.title}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 120s linear infinite;
        }
      `}</style>
    </Section>
  );
}
