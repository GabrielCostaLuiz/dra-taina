"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/constants/config";

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece após rolar 80% da altura da viewport (fim do Hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: "0px 0px 0px 0px" 
      }
    );

    const footer = document.getElementById("main-footer");
    if (footer) observer.observe(footer);

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const showButton = isVisible && !isFooterVisible;

  return (
    <a
      href={siteConfig.phone.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-500 transform ${
        showButton 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-20 opacity-0 scale-50 pointer-events-none"
      } hover:scale-110 active:scale-95 group`}
      aria-label="Falar no WhatsApp"
    >
      {/* Glow Effect - Slowed down */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-slow-ping opacity-20 group-hover:opacity-40"></div>
      
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        className="relative z-10"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.171 1.597 6.02L0 24l6.163-1.617a11.83 11.83 0 005.883 1.564h.005c6.604 0 11.967-5.367 11.97-11.97a11.85 11.85 0 00-3.41-8.445z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-secondary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-outline-variant/10">
        Falar com Dra. Tainá
      </span>
    </a>
  );
}
