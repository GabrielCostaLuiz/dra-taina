import Image from "next/image";
import { CheckCircle2, Gavel, Award, Star, ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/config";

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
    <section className="relative min-h-screen bg-surface flex flex-col pt-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #6b5c4a 1px, transparent 1px), linear-gradient(to bottom, #6b5c4a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[55vh] flex-shrink-0 z-10 px-6">
        <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src={siteConfig.images.hero}
            alt={`${siteConfig.fullName} - Advocacia Especializada em Cível, Família e Sucessões`}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Identity Floating Label */}
          <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4">
            <p className="font-display text-white text-lg font-light leading-tight">
              {siteConfig.name}
            </p>
            <p className="font-body text-white/70 text-[9px] uppercase tracking-widest mt-1">
              Cível · Família · Sucessões · Imobiliário
            </p>
          </div>
        </div>

        {/* Rating Badge / OAB */}
        <div className="absolute -top-4 right-10 bg-surface px-4 py-2 rounded-xl shadow-xl z-20 border border-outline-variant/20">
          <p className="font-body text-[7px] font-bold text-secondary uppercase tracking-[0.1em] mb-0.5">Registro Ativo</p>
          <p className="font-display text-[10px] font-bold text-on-surface uppercase tracking-wider">{siteConfig.oab}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grow flex flex-col items-center justify-center px-8 py-12 relative z-20 text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-secondary/30" />
          <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
            Advocacia Especializada & Estratégica
          </span>
          <div className="w-6 h-px bg-secondary/30" />
        </div>

        <h1 className="font-display text-[2.5rem] leading-[1.1] text-on-surface mb-8">
          Proteção Jurídica para o seu <br />
          <span className="italic text-secondary font-light text-[3rem]">Patrimônio e Futuro.</span>
        </h1>

        {/* Areas - Premium Variant with better Contrast */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 w-full">
          {["Cível", "Família", "Sucessões", "Imobiliário"].map((area) => (
            <div key={area} className="px-5 py-2.5 rounded-full bg-white border border-outline-variant/20 shadow-sm flex items-center justify-center min-w-[100px]">
              <span className="font-body text-[9px] font-bold text-secondary uppercase tracking-[0.2em] whitespace-nowrap">{area}</span>
            </div>
          ))}
        </div>

        <div className="space-y-12 w-full">
          <a href={siteConfig.phone.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-primary text-white py-5 px-8 rounded-full font-body font-bold shadow-2xl active:scale-95 transition-transform w-full">
            Falar com especialista
          </a>

          {/* New 4-info Grid */}
          <div className="bg-white rounded-3xl border border-outline-variant/20 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2">
              <div className="p-5 border-b border-r border-outline-variant/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">3+ Anos</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-on-surface-variant mt-1.5">Experiência</p>
              </div>
              <div className="p-5 border-b border-outline-variant/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">100+</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-on-surface-variant mt-1.5">Casos Atendidos</p>
              </div>
              <div className="p-5 border-r border-outline-variant/10">
                <p className="font-display text-xl font-bold text-secondary leading-none">Ativa</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-on-surface-variant mt-1.5">OAB/SP Registro</p>
              </div>
              <div className="p-5">
                <p className="font-display text-xl font-bold text-secondary leading-none">Híbrido</p>
                <p className="font-body text-[9px] uppercase tracking-wider text-on-surface-variant mt-1.5">Atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroTainaDesktop() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden bg-surface">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(to right, #6b5c4a 1px, transparent 1px), linear-gradient(to bottom, #6b5c4a 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>

        {/* Organic Geometric Shapes */}
        {/* <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div> */}

        {/* Floating Line Accents */}
        <div className="absolute top-1/3 left-10 w-px h-32 bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-full relative z-10">

        <div className="flex items-center justify-center p-8 lg:mt-16 md:p-24 order-2 lg:order-1 relative">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-secondary" />
              <span className="font-body text-[11px] font-bold text-secondary uppercase tracking-[0.2em]">
                Advocacia Especializada & Estratégica
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-[4.75rem] lg:text-6xl 2xl:text-7xl leading-[1.1] mb-8 text-on-surface">
              Proteção Jurídica para o seu <br />
              <span className="italic text-secondary font-light">Patrimônio e Futuro.</span>
            </h1>

            {/* Áreas de Atuação - Premium Chips with better Contrast */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Cível", "Família", "Sucessões", "Imobiliário"].map((area) => (
                <div key={area} className="px-6 py-2.5 rounded-full bg-white border border-outline-variant/20 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300 group cursor-default flex items-center justify-center">
                  <span className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300">{area}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Aliamos rigor técnico e atendimento humanizado para oferecer soluções estratégicas em questões jurídicas de alta complexidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a href={siteConfig.phone.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-12 py-5 rounded-full font-body text-md font-bold hover:bg-secondary transition-all duration-500 shadow-editorial hover:shadow-2xl hover:-translate-y-1 text-center w-full sm:w-auto">
                Falar com especialista
              </a>

              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-secondary leading-none">3+ Anos</span>
                <span className="font-body text-[10px] uppercase tracking-wider text-on-surface-variant mt-1">de experiência</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Side */}



        {/* <div className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 z-0">
            <Image
              src={siteConfig.images.hero}
              alt={siteConfig.name}
              fill
              className="object-cover rounded-l-[10rem] lg:rounded-l-[20rem] shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
              priority
            />
          </div>
        </div> */}

        {/* Image Side */}
        <div className="relative order-1 lg:order-2 min-h-[500px] lg:min-h-full">

          {/* Foto com curva */}
          <div className="absolute inset-0 z-0">
            <Image
              src={siteConfig.images.hero}
              alt={`${siteConfig.fullName} - Advogada Especialista em São Paulo`}
              fill
              className="object-cover rounded-l-[10rem] lg:rounded-l-[20rem] shadow-[-20px_0_50px_rgba(0,0,0,0.05)]"
              priority
            />
          </div>

          {/* Gradient sutil na base da foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-l-[10rem] lg:rounded-l-[20rem] z-[1] pointer-events-none" />

          {/* Anéis concêntricos no canto superior esquerdo */}
          <div className="absolute top-8 left-0 w-[240px] h-[240px] rounded-full border border-secondary/20 z-10 pointer-events-none" />
          <div className="absolute top-8 left-0 w-[120px] h-[120px] rounded-full border border-secondary/25 z-10 pointer-events-none" />

          {/* Grid de pontos — movido para o canto esquerdo da imagem para equilíbrio */}
          <div className="absolute bottom-[130px] left-12 z-10 grid pointer-events-none"
            style={{ gridTemplateColumns: 'repeat(5, 6px)', gap: '8px' }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
            ))}
          </div>

          {/* Label vertical */}
          <span className="absolute top-1/2 -right-15 -translate-y-1/2 rotate-90 z-10 font-body text-[9px] font-medium tracking-[0.3em] uppercase text-white/30 whitespace-nowrap pointer-events-none">
            Direito · Estratégia · Resultado
          </span>

          {/* Card de avaliação — topo direito, mais discreto */}
          <div className="absolute top-12 right-0 z-20 bg-surface/90 backdrop-blur-md rounded-l-2xl px-6 py-4 min-w-[180px] border-l border-y border-outline-variant/10 shadow-lg">
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
          </div>

          {/* Identidade Editorial — Minimalista e Luxuosa (Substituindo o card pesado) */}
          <div className="absolute bottom-16 right-16 z-20 flex flex-col items-end text-right">
            <div className="flex items-center gap-6 mb-6">
              <div className="flex flex-col">
                <p className="font-display text-3xl md:text-4xl text-white leading-none mb-2 tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.4em] leading-none">
                  Advocacia Especializada
                </p>
              </div>
              <div className="w-px h-14 bg-secondary/50" />
            </div>
            
            <div className="flex items-center gap-3 py-2.5 px-5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl">
              <Award className="w-3.5 h-3.5 text-secondary" />
              <span className="font-body text-[9px] text-white font-semibold uppercase tracking-[0.15em]">
                {siteConfig.oab} · Registro Ativo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
