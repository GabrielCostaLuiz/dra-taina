import Image from "next/image";
import Section from "../layout/Section";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/config";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Consulta Estratégica",
    description: "Um diálogo profundo para entender seus objetivos e blindar seus direitos desde o primeiro contato.",
    image: "https://images.unsplash.com/photo-1714974528860-cb38ebab0e35?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "02",
    title: "Análise de Viabilidade",
    description: "Mergulhamos nos detalhes técnicos e documentais para construir uma tese jurídica inabalável.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
  },
  {
    number: "03",
    title: "Execução Diligente",
    description: "Atuação firme e acompanhamento constante, garantindo que cada etapa siga o plano estratégico.",
    image: "https://images.unsplash.com/photo-1774898988393-5c752e4d55e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Process() {
  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden">
        <ProcessMobile />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <ProcessDesktop />
      </div>
    </>
  );
}

function ProcessMobile() {
  return (
    <Section id="process-mobile" variant="primary" showGrid gradient="both">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Nosso Método"
          title={<>Como conduzimos <br /><span className="italic text-secondary font-light">seu caso</span> com <br />excelência.</>}
          description="Um processo jurídico claro, eficiente e transparente, desenhado para oferecer segurança e tranquilidade em cada passo da jornada."
          center={true}
          className="mb-12"
        />

        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-secondary font-medium">{step.number}</span>
                <h3 className="font-display text-2xl text-on-surface">{step.title}</h3>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-body text-on-surface-variant leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={siteConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-full font-body text-base font-bold active:scale-95 transition-all shadow-xl"
          >
            Iniciar minha jornada
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function ProcessDesktop() {
  return (
    <Section id="process" variant="primary" showGrid gradient="both">
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-12 gap-16 items-start">
          {/* Left Column: Sticky Content */}
          <div className="col-span-5 sticky top-32 self-start">
            <SectionHeader
              eyebrow="Nosso Método"
              title={<>Como conduzimos <br /><span className="italic text-secondary font-light">seu caso</span> com <br />excelência.</>}
              description="Um processo jurídico claro, eficiente e transparente, desenhado para oferecer segurança e tranquilidade em cada passo da jornada."
              center={false}
              className="mb-10"
            />

            <a
              href={siteConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-body text-sm font-bold hover:bg-primary transition-all duration-500 shadow-lg group"
            >
              Iniciar minha jornada
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Scrolling Steps */}
          <div className="col-span-7 space-y-32 pt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 max-w-md ${index % 2 !== 0 ? "ml-auto" : "mr-auto"
                  }`}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display text-2xl text-secondary font-medium">{step.number}</span>
                  <h3 className="font-display text-4xl text-on-surface leading-tight">{step.title}</h3>
                </div>

                <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
