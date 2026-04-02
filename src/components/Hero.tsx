import { motion } from "motion/react";
import { LayoutDashboard, CheckCircle2, ArrowRight, TrendingUp, Flame, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Versão 2.0 • Performance Máxima
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 text-slate-900 tracking-tighter">
              Crie seus <span className="text-primary">treinos</span> e veja sua <span className="text-slate-400">evolução.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg font-medium">
              A disciplina que você busca para o seu corpo, agora com ferramentas de elite para criar rotinas e visualizar seu progresso real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
              >
                <LayoutDashboard size={24} />
                Baixar App agora
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#como-funciona"
                className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Ver Demo
                <ArrowRight size={20} />
              </motion.a>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {["App visual completo", "Dashboard de elite", "Privacidade total", "Sincronia real"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
                  <CheckCircle2 className="text-primary" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Professional Dashboard Preview */}
            <div className="relative z-10 bg-slate-900 p-1.5 rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-slate-800">
              <div className="bg-slate-950 rounded-[42px] overflow-hidden border border-slate-800">
                <div className="bg-slate-900/50 backdrop-blur-md p-6 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src="https://raw.githubusercontent.com/dhonathanbertotti1/imagens-fitfinance/refs/heads/main/1.png" 
                        alt="Logo" 
                        className="h-full w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">Dashboard</h4>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Performance Semanal</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-700" />)}
                  </div>
                </div>
                
                <div className="p-8 space-y-8 h-[480px] overflow-y-auto custom-scrollbar">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <TrendingUp size={16} className="text-primary" />
                        <span className="text-[10px] font-bold text-green-400">+12%</span>
                      </div>
                      <p className="text-2xl font-bold text-white tracking-tight">45.2k</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Volume (kg)</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <Flame size={16} className="text-orange-500" />
                        <span className="text-[10px] font-bold text-green-400">+8%</span>
                      </div>
                      <p className="text-2xl font-bold text-white tracking-tight">12.4k</p>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Calorias</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Treino de Hoje</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">85% Completo</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_12px_rgba(0,102,255,0.5)]"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="font-bold text-white text-sm">Supino Reto</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[{l:"Séries", v:"4"}, {l:"Reps", v:"12"}, {l:"Peso", v:"80kg"}].map((s, i) => (
                          <div key={i} className="bg-slate-950 p-2.5 rounded-2xl text-center border border-slate-800/50">
                            <span className="block text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{s.l}</span>
                            <span className="text-sm font-bold text-white">{s.v}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/50 opacity-50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-600">
                          <CheckCircle2 size={20} />
                        </div>
                        <span className="font-bold text-slate-400 text-sm">Crucifixo Inclinado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 z-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tempo Total</p>
                <p className="text-xl font-bold text-slate-900">24h 30m</p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-32 pt-16 border-t border-slate-100">
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
            Utilizado por atletas de elite em todo o mundo
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-30 grayscale">
            {["NIKE", "ADIDAS", "PUMA", "REEBOK", "UNDER ARMOUR"].map((brand) => (
              <span key={brand} className="text-2xl font-display font-black tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}