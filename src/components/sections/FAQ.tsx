'use client'
import { useState } from "react";
import Section from "../layout/Section";
import FAQItem from "../ui/FAQItem";
import SectionHeader from "../ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    id: "civel",
    category: "Direito Cível",
    items: [
      {
        question: "Sofri um prejuízo e quero saber se tenho direito à indenização. O que fazer?",
        answer: "Cada situação deve ser analisada individualmente. Casos envolvendo danos materiais, morais, cobranças indevidas ou descumprimento de obrigações podem gerar direito à reparação.",
      },
      {
        question: "Meu nome foi negativado injustamente. Posso buscar meus direitos?",
        answer: "Sim. A negativação indevida pode ser questionada judicialmente, inclusive com possibilidade de indenização, dependendo do caso.",
      },
    ]
  },
  {
    id: "familia",
    category: "Direito de Família",
    items: [
      {
        question: "Como funciona o processo de divórcio?",
        answer: "O divórcio pode ocorrer de forma consensual ou litigiosa, judicial ou extrajudicial, conforme a situação do casal e a existência de filhos menores ou conflitos.",
      },
      {
        question: "Como funciona a pensão alimentícia?",
        answer: "O valor da pensão é definido considerando as necessidades de quem recebe e as possibilidades financeiras de quem paga.",
      },
      {
        question: "É possível regulamentar guarda e visitas?",
        answer: "Sim. A guarda, convivência e visitas podem ser definidas judicialmente para garantir segurança e estabilidade familiar.",
      },
    ]
  },
  {
    id: "sucessoes",
    category: "Direito das Sucessões",
    items: [
      {
        question: "Como funciona o inventário?",
        answer: "O inventário é o procedimento utilizado para regularizar a divisão dos bens após o falecimento, podendo ser realizado judicialmente ou em cartório, conforme o caso.",
      },
      {
        question: "Existe prazo para abrir inventário?",
        answer: "Sim. O ideal é iniciar o procedimento o quanto antes para evitar complicações jurídicas e financeiras.",
      },
      {
        question: "Posso resolver inventário de forma extrajudicial?",
        answer: "Em alguns casos, sim. Quando há consenso entre os herdeiros e preenchimento dos requisitos legais, o procedimento pode ser realizado em cartório.",
      },
    ]
  },
  {
    id: "imobiliario",
    category: "Direito Imobiliário",
    items: [
      {
        question: "Problemas com aluguel podem ser resolvidos judicialmente?",
        answer: "Sim. Questões envolvendo inadimplência, despejo, cobranças, rescisões contratuais e conflitos locatícios podem exigir atuação jurídica especializada.",
      },
      {
        question: "Comprei um imóvel e tive problemas. O que posso fazer?",
        answer: "Situações envolvendo atraso na entrega, vícios no imóvel, descumprimento contratual ou cobranças indevidas podem ser analisadas judicialmente.",
      },
      {
        question: "Como funciona uma ação de despejo?",
        answer: "A ação de despejo é utilizada para buscar a desocupação do imóvel em situações previstas em lei, como falta de pagamento ou descumprimento contratual.",
      },
    ]
  },
  {
    id: "atendimento",
    category: "Atendimento",
    items: [
      {
        question: "O atendimento pode ser realizado online?",
        answer: "Sim. O atendimento pode acontecer de forma totalmente online, com praticidade, segurança e acompanhamento próximo.",
      },
      {
        question: "Como saber se meu caso tem solução?",
        answer: "Cada caso é analisado individualmente, considerando documentos, provas e estratégia jurídica adequada.",
      },
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <Section id="faq" variant="primary" gradient="bottom">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <SectionHeader
            eyebrow="Dúvidas Frequentes"
            title={<>Esclarecendo suas <br /><span className="italic text-secondary font-light">Principais Dúvidas</span></>}
            description="Clique em uma área de atuação para ver as dúvidas mais comuns."
            centerMobile={false}
          />
        </motion.div>

        <div className="space-y-6">
          {faqCategories.map((cat) => {
            const isOpen = activeCategory === cat.id;
            
            return (
              <div key={cat.id} className="group">
                <button
                  onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 border ${
                    isOpen 
                      ? "bg-white/25 border-secondary/40 shadow-lg" 
                      : "bg-white/15 border-white/10 hover:bg-white/10 hover:border-secondary/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      isOpen ? "bg-secondary scale-125 shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "bg-secondary/40"
                    }`} />
                    <h3 className={`font-display text-base uppercase tracking-[0.3em] font-bold transition-colors ${
                      isOpen ? "text-secondary" : "text-secondary/70 group-hover:text-secondary"
                    }`}>
                      {cat.category}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-500 ${
                    isOpen ? "rotate-180" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2 space-y-4 px-2">
                        {cat.items.map((faq, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <FAQItem {...faq} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
