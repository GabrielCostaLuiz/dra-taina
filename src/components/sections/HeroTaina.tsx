"use client";
import Image from "next/image";
import { CheckCircle2, Gavel, Award, Star, ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/config";
import { motion } from "framer-motion";

export default function HeroTaina() {
  return (
    <>
      <div className="lg:hidden">
        <HeroTainaMobile />
      </div>
      <div className="hidden lg:block">
        <HeroTainaDesktop />
      </div>
    </>
  )
}

export function HeroTainaMobile() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #c5a059 1px, transparent 1px), linear-gradient(to bottom, #c5a059 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* Image Section */}
      <motion.div
        className="relative w-full h-[55vh] flex-shrink-0 z-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src={siteConfig.images.heroMobile}
            alt={`${siteConfig.fullName} - Advocacia Especializada`}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
        
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="grow flex flex-col items-center justify-center px-8 py-12 relative z-20 text-center">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="w-6 h-px bg-secondary/30" />
          <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
            Advocacia Especializada & Estratégica
          </span>
          <div className="w-6 h-px bg-secondary/30" />
        </motion.div>

        <motion.h1
          className="font-display text-[2.5rem] leading-[1.1] text-on-surface mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Proteção Jurídica para o seu <br />
          <span className="italic text-secondary font-light text-[3rem]">Patrimônio e Futuro.</span>
        </motion.h1>

        {/* Areas */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 w-full max-w-[320px] mx-auto">
          {["Cível", "Família", "Sucessões", "Imobiliário"].map((area, idx) => (
            <motion.div
              key={area}
              className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center grow basis-[40%]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + (idx * 0.1), duration: 0.5 }}
            >
              <span className="font-body text-[8px] font-bold text-primary uppercase tracking-[0.2em] whitespace-nowrap">{area}</span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <a
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium px-10 py-5 text-sm w-full"
            >
              Falar com especialista
            </a>
          </motion.div>

          {/* New 4-info Grid */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <div className="grid grid-cols-2">
              <div className="p-5 border-b border-r border-secondary/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">{siteConfig.experience} Anos</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-primary mt-1.5 font-bold">Experiência</p>
              </div>
              <div className="p-5 border-b border-secondary/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">100+</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-primary mt-1.5 font-bold">Casos Atendidos</p>
              </div>
              <div className="p-5 border-r border-secondary/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">Ativa</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-primary mt-1.5 font-bold">OAB/SP Registro</p>
              </div>
              <div className="p-5">
                <p className="font-display text-xl font-bold text-secondary leading-none">Híbrido</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-primary mt-1.5 font-bold">Atendimento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function HeroTainaDesktop() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden bg-background">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `linear-gradient(to right, #d4a96b 1px, transparent 1px), linear-gradient(to bottom, #d4a96b 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>

        {/* Floating Line Accents */}
        <div className="absolute top-1/3 left-10 w-px h-32 bg-linear-to-b from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-full relative z-10">
        <div className="flex items-center justify-center p-8 lg:mt-16 md:p-24 order-2 lg:order-1 relative">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-10 h-px bg-secondary" />
              <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-[0.2em]">
                Advocacia Especializada & Estratégica
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-[4.75rem] lg:text-6xl 2xl:text-7xl leading-[1.1] mb-8 text-on-surface"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Proteção Jurídica para o seu <br />
              <span className="italic text-secondary font-light">Patrimônio e Futuro.</span>
            </motion.h1>

            {/* Áreas de Atuação */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Cível", "Família", "Sucessões", "Imobiliário"].map((area, idx) => (
                <motion.div
                  key={area}
                  className="px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-secondary/20 shadow-sm hover:shadow-md hover:border-secondary/50 transition-all duration-300 group cursor-default flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                >
                  <span className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300">{area}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="font-body text-lg section-description mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Aliamos rigor técnico e atendimento humanizado para oferecer soluções estratégicas em questões jurídicas de alta complexidade.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-12 py-5 text-sm"
              >
                Falar com especialista
              </a>

              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-secondary leading-none">{siteConfig.experience} Anos</span>
                <span className="font-body text-[10px] uppercase tracking-wider text-white mt-1">de experiência</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-full">
          {/* Foto com curva */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={siteConfig.images.hero}
              alt={`${siteConfig.fullName} - Advogada Especialista em São Paulo`}
              fill
              className="object-cover rounded-l-[10rem] lg:rounded-l-[20rem] shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
              priority
            />
          </motion.div>

          {/* Gradient sutil na base da foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-l-[10rem] lg:rounded-l-[20rem] z-[1] pointer-events-none" />

          {/* Anéis concêntricos */}
          <motion.div
            className="absolute top-8 left-0 w-[240px] h-[240px] rounded-full border border-secondary/20 z-10 pointer-events-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
          <motion.div
            className="absolute top-8 left-0 w-[120px] h-[120px] rounded-full border border-secondary/25 z-10 pointer-events-none"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          />

          {/* Grid de pontos */}
          <div className="absolute bottom-[130px] left-12 z-10 grid pointer-events-none"
            style={{ gridTemplateColumns: 'repeat(5, 6px)', gap: '8px' }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + (i * 0.05) }}
              />
            ))}
          </div>

          {/* Label vertical */}
          <motion.span
            className="absolute top-1/2 -right-15 -translate-y-1/2 rotate-90 z-10 font-body text-[9px] font-medium tracking-[0.3em] uppercase text-white/30 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Direito · Estratégia · Resultado
          </motion.span>

          {/* Card de avaliação */}
          <motion.div
            className="absolute top-12 right-0 z-20 bg-surface/90 backdrop-blur-md rounded-l-2xl px-6 py-4 min-w-[180px] border-l border-y border-outline-variant/10 shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <p className="font-body text-[8px] font-bold tracking-[0.2em] uppercase text-secondary mb-2">
              Excelência
            </p>
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 text-secondary fill-secondary" />
              ))}
            </div>
            <p className="font-display text-[10px] text-on-surface leading-tight">
              100% de satisfação<br />dos clientes
            </p>
          </motion.div>

          {/* Identidade Editorial */}
          <div className="absolute bottom-16 right-16 z-20 flex flex-col items-end text-right">
            <motion.div
              className="flex items-center gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              <div className="flex flex-col">
                <p className="font-display text-3xl md:text-4xl text-white leading-none mb-2 tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.4em] leading-none">
                  Advocacia Especializada
                </p>
              </div>
              <div className="w-px h-14 bg-secondary/50" />
            </motion.div>

            <motion.div
              className="flex items-center gap-3 py-2.5 px-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <Award className="w-3.5 h-3.5 text-secondary" />
              <span className="font-body text-[9px] text-white font-semibold uppercase tracking-[0.15em]">
                {siteConfig.oab} · Registro Ativo
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
