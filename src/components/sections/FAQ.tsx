import Section from "../layout/Section";
import FAQItem from "../ui/FAQItem";
import { GradientSection } from "../ui/GradientSection";
import SectionHeader from "../ui/SectionHeader";

const faqs = [
  {
    question: "Como funciona o atendimento online?",
    answer: "Nosso atendimento online é realizado via videoconferência segura, garantindo total sigilo e comodidade. Você pode ser atendido de qualquer lugar do mundo com a mesma qualidade de uma consulta presencial.",
  },
  {
    question: "Qual o tempo médio de um processo de inventário?",
    answer: "O tempo varia significativamente entre inventários consensuais (extrajudiciais), que podem levar 2 a 4 meses, e inventários judiciais litigiosos, que podem se estender por anos. Nossa meta é sempre a agilidade estratégica.",
  },
  {
    question: "Quais documentos são necessários para o divórcio?",
    answer: "Geralmente são necessários: certidão de casamento, documentos pessoais dos cônjuges e filhos, além da relação de bens móveis e imóveis. Na consulta inicial, fornecemos um checklist detalhado.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" variant="primary" gradient="bottom" showGrid>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader 
          eyebrow="Dúvidas Frequentes"
          title={<>Esclarecendo suas <br /><span className="italic text-secondary font-light">Principais Dúvidas</span></>}
          description="Transparência é um dos nossos pilares. Abaixo, respondemos as questões mais comuns trazidas pelos nossos clientes para garantir total clareza em cada etapa do processo."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </Section>
  );
}
