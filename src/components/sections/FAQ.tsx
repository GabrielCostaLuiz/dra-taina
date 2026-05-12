"use client";
import Section from "../layout/Section";
import FAQItem from "../ui/FAQItem";
import { GradientSection } from "../ui/GradientSection";
import SectionHeader from "../ui/SectionHeader";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Dúvidas Frequentes"
            title={<>Esclarecendo suas <br /><span className="italic text-secondary font-light">Principais Dúvidas</span></>}
            description="Transparência é um dos nossos pilares. Abaixo, respondemos as questões mais comuns trazidas pelos nossos clientes para garantir total clareza em cada etapa do processo."
          />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <FAQItem {...faq} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
