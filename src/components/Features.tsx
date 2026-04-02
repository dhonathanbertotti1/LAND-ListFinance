import { motion } from "motion/react";
import { 
  MessageCircle, 
  LayoutDashboard, 
  History, 
  Target, 
  Users, 
  Settings, 
  Bell, 
  CalendarRange,
  Zap,
  Shield,
  Smartphone,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Comandos por Voz",
    description: "Envie áudios no WhatsApp e o Fit Finance processa tudo automaticamente.",
    color: "bg-blue-500"
  },
  {
    icon: LayoutDashboard,
    title: "Gestão Financeira",
    description: "Registre gastos e ganhos apenas enviando uma mensagem rápida.",
    color: "bg-indigo-500"
  },
  {
    icon: CalendarRange,
    title: "Agenda Inteligente",
    description: "Marque compromissos e receba lembretes diretamente no seu chat.",
    color: "bg-purple-500"
  },
  {
    icon: Target,
    title: "Metas de Economia",
    description: "Defina objetivos financeiros e acompanhe seu progresso em tempo real.",
    color: "bg-pink-500"
  },
  {
    icon: Zap,
    title: "Resposta Instantânea",
    description: "Nossa IA responde em segundos, 24 horas por dia, 7 dias por semana.",
    color: "bg-amber-500"
  },
  {
    icon: Shield,
    title: "Privacidade Total",
    description: "Seus dados são criptografados e nunca compartilhados com terceiros.",
    color: "bg-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Sem Novos Apps",
    description: "Tudo funciona dentro do WhatsApp que você já usa todos os dias.",
    color: "bg-slate-500"
  },
  {
    icon: BarChart3,
    title: "Relatórios Semanais",
    description: "Receba um resumo detalhado da sua semana financeira e agenda.",
    color: "bg-rose-500"
  }
];

export default function Features() {
  return (
    <section id="recursos" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              Recursos de Elite
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-slate-900 tracking-tighter leading-[0.9]">
              Sua rotina em <span className="text-primary">alta performance.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 max-w-sm font-medium leading-relaxed">
            O Fit Finance oferece as ferramentas necessárias para você organizar sua vida sem sair do WhatsApp.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-10 bg-white hover:bg-slate-50 transition-colors group relative"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.description}</p>
              
              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}