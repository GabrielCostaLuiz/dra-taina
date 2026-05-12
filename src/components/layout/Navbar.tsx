"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/config";

export default function Navbar() {
  return (
    <>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
    </>
  );
}

export function NavbarMobile() {
  return (
    <nav className="absolute top-0 inset-x-0 z-10 bg-surface py-3">
      <div className="flex items-center justify-center  px-6">
        <Link href="/" className="flex items-center">
          <Image
            src={siteConfig.images.logo}
            alt={siteConfig.name}
            width={160}
            height={40}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>
      </div>
    </nav>
  );
}

export function NavbarDesktop() {
  /* 
  // Comentado conforme solicitado pelo usuário: Desativando header flutuante no scroll up
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 1.0;
      
      // Estado scrolled ativa o menu flutuante após o Hero
      setIsScrolled(currentScrollY > threshold);

      if (currentScrollY > threshold) {
        // Lógica de esconder ao descer / mostrar ao subir (apenas para o menu flutuante)
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // No Hero: o menu flutuante fica oculto
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  */

  return (
    <>
      {/* 1. Header Estático (Só no topo da página) */}
      <nav className="absolute top-0 w-full z-50 py-6 pointer-events-auto">
        <div className="mx-auto max-w-402 px-10 h-20 flex items-center bg-transparent">
          <Link href="/" className="flex items-center z-20 shrink-0">
            <Image
              src={siteConfig.images.logo}
              alt={siteConfig.name}
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-10 ml-16">
            {[
              { name: "Serviços", href: "#services" },
              { name: "Sobre", href: "#about" },
              { name: "Processo", href: "#process" },
              { name: "FAQ", href: "#faq" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary! text-on-surface-variant"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. Menu Flutuante (Comentado por enquanto)
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-700 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } py-0`}
      >
        <div className="mx-auto max-w-7xl bg-surface/95 backdrop-blur-lg rounded-b-4xl shadow-2xl px-10 h-20 flex items-center relative border-x border-b border-outline-variant/10">
          <Link href="/" className="flex items-center z-20 shrink-0">
            <Image
              src={siteConfig.images.logo}
              alt={siteConfig.name}
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
            {[
              { name: "Serviços", href: "#services" },
              { name: "Sobre Nós", href: "#about" },
              { name: "Processo", href: "#process" },
              { name: "FAQ", href: "#faq" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-secondary text-on-surface-variant"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="ml-auto z-20">
            <a
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-light/10 border border-secondary-light/30 text-secondary-light px-6 py-2.5 rounded-full font-body text-[10px] font-bold uppercase tracking-widest hover:bg-secondary-light hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              Falar agora
            </a>
          </div>
        </div>
      </nav>
      */}
    </>
  );
}
