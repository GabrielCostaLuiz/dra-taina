import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group/faq bg-white/80 backdrop-blur-xl rounded-[32px] border border-secondary/30 overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-secondary/40">
      {/* Desktop Version: Custom Accordion */}
      <div className="hidden md:block">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-8 cursor-pointer text-left"
        >
          <h3 className="font-display text-xl lg:text-2xl text-primary! transition-colors pr-8 group-hover/faq:translate-x-1 duration-300">
            {question}
          </h3>
          <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
            isOpen 
              ? "rotate-45 bg-secondary text-white border-transparent" 
              : "bg-secondary/15 border-secondary/40 text-secondary group-hover/faq:bg-secondary group-hover/faq:text-white"
          }`}>
            <Plus className="w-6 h-6" />
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden bg-white/10"
            >
              <div className="px-8 pb-10">
                <div className="h-px bg-secondary/30 mb-8"></div>
                <p className="font-body text-lg text-primary leading-relaxed font-medium">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Version: Always Open Card (or also accordion if you prefer) */}
      <div className="md:hidden p-8">
        <h3 className="font-display text-xl text-primary! mb-4 leading-tight">
          {question}
        </h3>
        <div className="h-px bg-secondary/30 mb-5"></div>
        <p className="font-body text-base text-primary/80 leading-relaxed font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
}
