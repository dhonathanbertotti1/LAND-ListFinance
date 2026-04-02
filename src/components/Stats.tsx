import { motion } from "motion/react";
import { Users, Star, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200k+",
    label: "Usuários Ativados",
    description: "Pessoas que transformaram suas vidas com o assessor."
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Avaliação Média",
    description: "Satisfação garantida por quem usa todos os dias."
  },
  {
    icon: TrendingUp,
    value: "15M+",
    label: "Registros Realizados",
    description: "Dados processados com segurança e inteligência."
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Seguro e Privado",
    description: "Sua privacidade é nossa prioridade número um."
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            Números que <span className="text-primary">comprovam</span>
          </h2>
          <p className="text-lg text-slate-600">
            Somos a maior plataforma de assessoria pessoal via WhatsApp do Brasil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-primary mb-3">{stat.label}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
