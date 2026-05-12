"use client";

import Section from "../layout/Section";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function Quote() {
  return (
    <Section variant="primary" showGrid={false} className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        {/* Decorative Background Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.09 }}
          viewport={{ once: true }}
          className="absolute  inset-0 flex items-center justify-center -z-10"
        >
          <Scale size={300} strokeWidth={1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="w-12 h-px bg-white/30 mx-auto" />
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight italic font-light tracking-tight">
            "Que a Justiça <br className="md:hidden" /> 
            <span className="text-secondary/80 font-normal">sempre prevaleça"</span>
          </h2>

          <div className="w-12 h-px bg-white/30 mx-auto" />
        </motion.div>
      </div>
    </Section>
  );
}
