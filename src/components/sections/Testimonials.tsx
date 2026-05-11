import Section from "../layout/Section";
import TestimonialCard from "../ui/TestimonialCard";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Clara Vasconcelos",
    role: "Arquiteta",
    content: "A Dra. Tainá foi essencial no meu processo de inventário. Sua clareza técnica e agilidade transformaram um momento difícil em algo resolvido com total segurança e respeito.",
  },
  {
    name: "Ricardo Menezes",
    role: "Empresário",
    content: "Estratégia impecável na gestão patrimonial da nossa família. O atendimento é extremamente personalizado e discreto, exatamente o que buscávamos para nossas questões.",
  },
  {
    name: "Juliana P. Costa",
    role: "Médica",
    content: "O divórcio consensual foi resolvido de forma muito rápida e elegante. A sensibilidade da Dra. Tainá em preservar o bem-estar dos nossos filhos foi o ponto alto do serviço.",
  },
  {
    name: "Marcos Oliveira",
    role: "Engenheiro",
    content: "Excelente atuação em questões imobiliárias. Rigor técnico e transparência absoluta em cada etapa do processo.",
  },
];

export default function Testimonials() {
  return (
    <Section variant="primary" id="testimonials" showGrid>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className=" mx-auto px-6 md:px-16">
        <SectionHeader 
          eyebrow="Depoimentos"
          title={<>Confiança e <br /><span className="italic text-secondary font-light">Resultados Reais</span></>}
          description="A satisfação dos nossos clientes é o reflexo de um trabalho pautado na ética, agilidade e na busca incansável pelos melhores desfechos jurídicos."
        />
        
        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Desktop Infinite Carousel */}
        <div className="hidden lg:block overflow-hidden relative w-full -mx-6 md:-mx-16">
          {/* Gradient Masks for a more premium look */}
          <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee gap-12 py-8 px-12">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="w-[480px] shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
