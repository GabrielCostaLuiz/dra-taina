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
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070",
  },
  {
    number: "02",
    title: "Análise de Viabilidade",
    description: "Mergulhamos nos detalhes técnicos e documentais para construir uma tese jurídica inabalável.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  {
    number: "03",
    title: "Execução Diligente",
    description: "Atuação firme e acompanhamento constante, garantindo que cada etapa siga o plano estratégico.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
  },
];

export default function Process() {
  return (
    <Section id="process" variant="primary" showGrid gradient="both">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Fixed Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
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

          {/* Right Column: Staggered Cards */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-24 lg:pt-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col gap-6 max-w-md ${index % 2 !== 0 ? "lg:ml-auto" : "lg:mr-auto"
                  }`}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-display text-2xl text-secondary font-medium">{step.number}</span>
                  <h3 className="font-display text-3xl text-on-surface">{step.title}</h3>
                </div>

                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <p className="font-body text-on-surface-variant leading-relaxed">
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
