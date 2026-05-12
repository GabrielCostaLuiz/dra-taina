"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

type Theme = "boutique" | "terracotta";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("boutique");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("site-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("site-theme", newTheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-32 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-secondary/20 rounded-3xl p-3 shadow-2xl overflow-hidden min-w-[180px]"
          >
            <div className="space-y-2">
              <button
                onClick={() => toggleTheme("boutique")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                  theme === "boutique"
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary/10 text-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#fff8f3] border border-outline/20"></div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest">Boutique</span>
                </div>
                {theme === "boutique" && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => toggleTheme("terracotta")}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                  theme === "terracotta"
                    ? "bg-secondary text-white"
                    : "hover:bg-secondary/10 text-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#C78467] border border-white/20"></div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-widest">Terracota</span>
                </div>
                {theme === "terracotta" && <Check className="w-3 h-3" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-secondary shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 group relative"
      >
        <Palette className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
          Alternar Estilo
        </span>
      </button>
    </div>
  );
}
