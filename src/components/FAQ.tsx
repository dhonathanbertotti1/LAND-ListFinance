import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o Fit Finance?",
    answer: "O Fit Finance é um assistente pessoal inteligente que funciona inteiramente pelo WhatsApp. Você envia mensagens de texto ou áudio e ele registra seus gastos, marca compromissos na sua agenda e te envia lembretes diários."
  },
  {
    question: "Preciso baixar algum aplicativo?",
    answer: "Não! Essa é a grande vantagem. Você utiliza o WhatsApp que já tem no seu celular. Não precisa de espaço extra na memória ou aprender a usar uma interface nova e complexa."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim, levamos a privacidade muito a sério. Seus dados são criptografados e nunca são compartilhados com terceiros. Você tem total controle sobre suas informações e pode solicitar a exclusão a qualquer momento."
  },
  {
    question: "Como funciona a integração com o Google Agenda?",
    answer: "Ao ativar sua conta, você poderá vincular seu Google Agenda. Sempre que você marcar um compromisso pelo WhatsApp, ele aparecerá automaticamente no seu calendário do Google e vice-versa."
  },
  {
    question: "Posso cancelar minha assinatura quando quiser?",
    answer: "Com certeza. Não temos fidelidade nos planos mensal e anual. Você pode cancelar a renovação a qualquer momento diretamente pelo painel ou solicitando ao suporte via WhatsApp."
  },
  {
    question: "O assessor entende áudio?",
    answer: "Sim! Você pode enviar áudios descrevendo seus gastos ou compromissos e nossa inteligência artificial processará a informação da mesma forma que o texto."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre o funcionamento do Fit Finance.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-2 rounded-3xl transition-all overflow-hidden ${
                activeIndex === index ? "border-primary bg-primary/5 shadow-lg shadow-primary/5" : "border-slate-100 bg-slate-50"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  activeIndex === index ? "bg-primary text-white rotate-180" : "bg-white text-slate-400"
                }`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
