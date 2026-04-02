import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Iniciante",
    price: "R$ 0",
    period: "/mês",
    description: "Para quem está começando sua jornada de performance.",
    features: [
      "Até 3 treinos personalizados",
      "Dashboard básico de evolução",
      "Histórico de 30 dias",
      "Suporte via comunidade"
    ],
    cta: "Começar Grátis",
    popular: false
  },
  {
    name: "Pro",
    price: "R$ 29",
    period: "/mês",
    description: "O plano completo para atletas de alta performance.",
    features: [
      "Treinos ilimitados",
      "Dashboard avançado com IA",
      "Histórico vitalício",
      "Coach IA 24/7",
      "Análise de biometria",
      "Exportação de dados"
    ],
    cta: "Assinar Pro",
    popular: true
  },
  {
    name: "Vitalício",
    price: "R$ 497",
    period: " único",
    description: "Acesso total para sempre. Sem assinaturas.",
    features: [
      "Tudo do plano Pro",
      "Acesso antecipado a novos recursos",
      "Suporte prioritário 1-on-1",
      "Badge exclusiva de Membro Fundador"
    ],
    cta: "Comprar Agora",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="precos" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Planos e Preços
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Invista na sua <span className="text-primary">melhor versão.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Escolha o plano que melhor se adapta ao seu nível de compromisso com seus resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[40px] border ${
                plan.popular 
                  ? "bg-slate-900 border-slate-800 shadow-2xl shadow-primary/20 scale-105 z-10" 
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2">
                  <Sparkles size={12} />
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-5xl font-display font-bold tracking-tighter ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-lg font-medium ${plan.popular ? "text-slate-500" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    }`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all ${
                plan.popular 
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" 
                  : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}