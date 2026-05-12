"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/constants/config";
import Section from "../layout/Section";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <Section id="cta" variant="white" gradient="top" className="pt-20 -mb-32 overflow-visible relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-visible">
          
          {/* Left Side: Overlapping Image Card */}
          <motion.div 
            className="lg:col-span-5 relative z-20 group lg:-mr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl relative">
              <Image 
                src={siteConfig.images.cta} 
                alt="Dra. Tainá Leocádio" 
                fill 
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side: Dark Content Card */}
          <motion.div 
            className="lg:col-span-7 bg-primary rounded-3xl lg:rounded-l-none lg:rounded-r-[48px] p-12 md:p-20 flex flex-col justify-center relative z-10 lg:my-12 shadow-inner"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary-light hover:border-secondary-light transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary-light hover:border-secondary-light transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>

            <div className="max-w-lg">
              <motion.p 
                className="font-body text-xl text-white/90 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Nosso escritório é especializado em oferecer <span className="text-primary-container font-semibold">soluções estratégicas</span> em Direito de Família, Sucessões e Cível, com foco na preservação do seu patrimônio.
              </motion.p>
              
              <motion.p 
                className="font-body text-base text-white/60 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Aliamos o rigor técnico à sensibilidade humana para garantir que você receba o melhor <span className="text-secondary-light">suporte jurídico</span> possível, protegendo o que é mais importante para você.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <a 
                  href={siteConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4  lg:text-secondary-light font-display text-2xl hover:text-white transition-all duration-300"
                >
                  Falar com a Dra. Tainá
                  <div className="w-12 h-12 rounded-full border border-secondary-light/30 flex items-center justify-center group-hover:border-white transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}