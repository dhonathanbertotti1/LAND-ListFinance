import { MessageCircle, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center group cursor-pointer">
              <img 
                src="https://raw.githubusercontent.com/dhonathanbertotti1/imagens-fitfinance/refs/heads/main/2.png" 
                alt="Fit Finance Logo" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              A disciplina que você busca para o seu corpo, agora com ferramentas de elite para criar rotinas e visualizar seu progresso real.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-8">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#como-funciona" className="hover:text-primary transition-all">Como Funciona</a></li>
              <li><a href="#recursos" className="hover:text-primary transition-all">Recursos</a></li>
              <li><a href="#planos" className="hover:text-primary transition-all">Planos</a></li>
              <li><a href="#faq" className="hover:text-primary transition-all">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-8">Suporte</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                suporte@fitfinance.ia
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-primary" />
                Atendimento via WhatsApp
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-bold mb-8">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-all">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-all">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-xs">
          <p>© 2026 Fit Finance.ia - Uma empresa do grupo Tittanium INC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
