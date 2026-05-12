"use client";

import { useState, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";


const servicePillars = [
  {
    id: "familia",
    title: "Direito de Família",
    fullName: "Direito de Família",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    title: "Direito das Sucessões",
    fullName: "Direito das Sucessões",
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
    title: "Direito Imobiliário",
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
    title: "Direito Cível",
    fullName: "Direito Cível",
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
  const [activePillarId, setActivePillarId] = useState<string | null>(null);

  useEffect(() => {
    // Only set initial active pillar on desktop
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      setActivePillarId(servicePillars[0].id);
    }
  }, []);

  const activePillar = servicePillars.find(p => p.id === activePillarId) || servicePillars[0];

  return (
    <Section id="services" gradient="both">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Nossas Especialidades"
            title={<>Estratégia Jurídica de <br /><span className="italic text-secondary font-light">Alto Padrão</span></>}
            description="Soluções personalizadas em quatro pilares fundamentais do direito contemporâneo."
            centerMobile={false}
          />
        </motion.div>

        {/* Desktop View: Tabs + Circle Layout */}
        <div className="hidden lg:block">
          <motion.div
            className="flex flex-wrap justify-center gap-10 mb-24"
            variants={{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.8 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {servicePillars.map((pillar) => (
              <motion.button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`relative px-10 py-4 rounded-full font-body text-sm font-bold transition-all duration-300 border ${activePillarId === pillar.id
                  ? "text-white border-transparent shadow-xl"
                  : "bg-surface-variant/50 text-[#6b5c4a] border-outline-variant/30 hover:bg-surface-variant/80 group-data-[theme='terracotta']:bg-white/10 group-data-[theme='terracotta']:text-white/60 group-data-[theme='terracotta']:border-white/10 group-data-[theme='terracotta']:hover:bg-white/20"
                  }`}
                variants={{
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activePillarId === pillar.id && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-gold-gradient rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{pillar.title}</span>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:col-span-4 space-y-16">
                {activePillar.items.slice(0, 2).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative lg:text-right"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="inline-flex lg:flex-row-reverse items-center gap-6 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-secondary shadow-sm in-data-[theme='terracotta']:shadow-lg  transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-1">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl text-on-surface group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-16 h-1 bg-secondary mb-4 lg:ml-auto"></div>
                    <p className="font-body text-base section-description leading-relaxed lg:pl-12">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="lg:col-span-4 flex justify-center relative py-12 perspective-1000">
                <motion.div
                  className="relative w-80 h-80 bg-surface rounded-full shadow-2xl flex flex-col items-center justify-center p-0 text-center border-4 border-surface-container-high transition-all duration-700 overflow-hidden group hover:scale-105"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background Image - Always fully visible */}
                  <div className="absolute inset-0 transition-all duration-700 transform group-hover:scale-110">
                    <Image
                      src={activePillar.image}
                      alt={`Serviço de ${activePillar.fullName} - ${siteConfig.fullName}`}
                      fill
                      className="object-cover transition-all duration-700"
                    />
                  </div>

                  {/* Decorative Rings */}
                  <div className="absolute inset-0 border border-secondary/20 rounded-full scale-110 pointer-events-none transition-all duration-700 group-hover:scale-115"></div>
                  <div className="absolute inset-0 border border-secondary/10 border-dashed rounded-full scale-125 animate-spin-slow pointer-events-none transition-all duration-700 group-hover:scale-130"></div>
                </motion.div>
              </div>

              <div className="lg:col-span-4 space-y-16">
                {activePillar.items.slice(2, 4).map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-outline-variant/30 flex items-center justify-center text-secondary shadow-sm in-data-[theme='terracotta']:shadow-lg  transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:-translate-y-1">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl text-on-surface group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-16 h-1 bg-secondary mb-4"></div>
                    <p className="font-body text-base section-description leading-relaxed lg:pr-12">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-24 text-center">
            <a
              href={`https://wa.me/5511940044592?text=${encodeURIComponent(activePillar.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-8 py-4 text-sm"
            >
              Saber mais sobre {activePillar.title}
              <ArrowRight className="w-4 h-4 ml-3" />
            </a>
          </div>
        </div>

        {/* Mobile View: Vertical Accordion Layout */}
        <div className="lg:hidden space-y-6">
          {servicePillars.map((pillar, pillarIdx) => (
            <motion.div
              key={pillar.id}
              className={`bg-surface in-data-[theme='terracotta']:bg-white/95 rounded-3xl border transition-all duration-500 overflow-hidden ${activePillar.id === pillar.id ? "border-secondary/30 shadow-xl" : "border-outline-variant/20!"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillarIdx * 0.1 }}
            >
              <button
                onClick={() => setActivePillarId(activePillarId === pillar.id ? null : pillar.id)}
                className="w-full flex items-center justify-between p-6 text-left bg-white group-data-[theme='terracotta']:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activePillarId === pillar.id ? 'bg-gold-gradient text-white! shadow-lg shadow-secondary/20' : 'bg-white border border-secondary/20 text-secondary! group-data-[theme="terracotta"]:bg-white/10 '}`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className={`font-display text-xl transition-colors ${activePillarId === pillar.id ? "text-secondary!" : "text-[#6b5c4a] group-data-[theme='terracotta']:text-white/60"}`}>
                    {pillar.fullName}
                  </span>
                </div>
                <div></div>
              </button>

              <AnimatePresence>
                {activePillarId === pillar.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 space-y-10 border-t border-outline-variant/10 pt-8">
                      {pillar.items.map((item, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <h4 className="font-display text-lg text-on-surface">{item.title}</h4>
                          </div>
                          <p className="font-body text-sm section-description leading-relaxed pl-6">
                            {item.description}
                          </p>
                        </div>
                      ))}

                      <div className="pt-4">
                        <a
                          href={`https://wa.me/5511940044592?text=${encodeURIComponent(pillar.whatsappMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-premium py-4 px-6 text-xs w-full text-center"
                        >
                          Saber mais sobre {pillar.title}

                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
