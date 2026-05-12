'use client'
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/config";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="main-footer" className="relative lg:pt-24 lg:pb-2">
      <div className="absolute -top-10 inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] -translate-y-2"
          style={{ backgroundImage: `linear-gradient(to right, #e6b94d 1px, transparent 1px), linear-gradient(to bottom, #e6b94d 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
        </div>


        {/* <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div> */}

        {/* Floating Line Accents */}
        <div className="absolute top-1/3 left-10 w-px h-32 bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>


      {/* Integrated CTA Section - Original Style */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 -mb-32 relative z-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-visible">

          {/* Left Side: Overlapping Image Card */}
          <motion.div
            className="lg:col-span-5 relative z-20 group lg:-mr-12 -mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-3/5 rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src={siteConfig.images.cta}
                alt="Dra. Tainá Leocádio"
                fill
                className="object-cover object-bottom  transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side: Light Content Card */}
          <motion.div
            className="lg:col-span-7 bg-[#f5ebe0] rounded-3xl lg:rounded-lt-none lg:rounded-r-[48px] p-12 md:p-16 lg:pl-24 flex flex-col justify-center relative z-10 lg:my-12 shadow-inner overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Subtle Background Pattern for the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 max-lg:mt-5">
              <div className="lg:col-span-7">
                <motion.h2
                  className="font-display text-4xl md:text-5xl text-on-surface! mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Pronto para <span className="italic text-secondary font-light relative">
                    proteger
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span> o que importa?
                </motion.h2>
                <motion.p
                  className="font-body text-base text-on-surface-variant! leading-relaxed max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Nosso escritório oferece <span className="text-secondary font-semibold">soluções estratégicas</span> em Direito de Família, Sucessões, Imobiliário e Cível, com foco total na preservação do seu patrimônio e segurança futura.
                </motion.p>
              </div>

              {/* Right side differentials to fill space */}
              <div className="lg:col-span-5 border-l border-on-surface/10 lg:pl-10 hidden lg:block">
                <p className="font-body text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Excelência Jurídica</p>
                <ul className="space-y-6">
                  {[
                    { title: "Atendimento Personalizado", desc: "Foco total na sua história" },
                    { title: "Estratégia Preventiva", desc: "Antecipando conflitos" },
                    { title: "Sigilo & Ética", desc: "Segurança absoluta" }
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex flex-col gap-1"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <span className="font-display text-base text-on-surface! leading-none font-medium">{item.title}</span>
                      <span className="font-body text-[11px] text-on-surface-variant/70! uppercase tracking-wider">{item.desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action - Now below the grid for more impact */}
            <motion.div
              className="mt-12 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href={siteConfig.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-on-surface! hover:text-secondary! transition-all duration-500"
              >
                <span className="font-display text-xl md:text-3xl transition-colors">Falar com a Dra. Tainá</span>
                <div className="w-14 h-14 rounded-full border border-on-surface/10 flex items-center justify-center group-hover:bg-gold-gradient group-hover:border-transparent group-hover:text-secondary transition-all duration-500 shadow-sm in-data-[theme='terracotta']:shadow-lg ">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </a>
            </motion.div>

            {/* Social and availability footer for the card */}
            <motion.div
              className="mt-16 pt-8 border-t border-on-surface/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="flex items-center gap-6">
                <span className="font-body text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">Siga-nos</span>
                <div className="flex gap-4">
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface-variant! hover:bg-secondary! hover:border-secondary! hover:text-white! transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface-variant! hover:bg-secondary! hover:border-secondary! hover:text-white! transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-body text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-widest">Disponível para consultoria</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main White Footer */}
      <div className="bg-white [theme='terracotta']:bg-surface pt-56 pb-12 relative z-10 rounded-t-4xl lg:rounded-4xl border border-surface lg:w-[99%] mx-auto shadow">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

            {/* Branding & Contact Info */}
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              <Link href="/" className="inline-block mb-10">
                <Image
                  src={siteConfig.images.logo}
                  alt={siteConfig.name}
                  width={180}
                  height={48}
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="space-y-10">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-[11px] font-bold text-secondary uppercase tracking-[0.2em]">Atendimento</p>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      Atuação estratégica em todo o Brasil.<br />
                      Atendimento presencial e digital.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mt-2">
                    <a href={siteConfig.phone.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start gap-3 text-sm text-on-surface-variant! hover:text-secondary! transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary! group-hover:text-white! transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </div>
                      {siteConfig.phone.display}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-on-surface-variant! hover:text-secondary! transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-secondary! group-hover:text-white! transition-all duration-300">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Columns & Maps */}
            <div className="lg:col-span-7 space-y-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                <div className="flex flex-col gap-6">
                  <p className="font-body text-[10px] font-bold text-primary/30 uppercase tracking-widest">Navegação</p>
                  <div className="flex flex-col gap-4">
                    <Link href="#services" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">Serviços</Link>
                    <Link href="#about" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">Sobre</Link>
                    <Link href="#process" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">Método</Link>
                    <Link href="#faq" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">FAQ</Link>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="font-body text-[10px] font-bold text-primary/30 uppercase tracking-widest">Social</p>
                  <div className="flex flex-col gap-4">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">Instagram</a>
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant! hover:text-secondary! transition-colors">LinkedIn</a>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="font-body text-[10px] font-bold text-primary/30 uppercase tracking-widest">Legal</p>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-on-surface-variant/50 italic">{siteConfig.oab}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-12 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left relative">
            <div className="flex flex-col gap-2">
              <p className="font-body text-[10px] text-on-surface uppercase tracking-widest">
                © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
              </p>
              <p className="font-body text-[10px] text-on-surface uppercase tracking-widest">
                Advocacia Estratégica & Especializada
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute -top-16 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 w-12 h-12 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-500 shadow-sm in-data-[theme='terracotta']:shadow-lg  group"
              aria-label="Voltar para o topo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6" /></svg>
            </button>

            <a
              href="https://gabrielcostaluiz.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[9px] text-on-surface uppercase tracking-[0.2em] hover:text-secondary transition-colors"
            >
              Desenvolvido por <span className="font-bold text-black">Gabriel Costa Luiz</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
