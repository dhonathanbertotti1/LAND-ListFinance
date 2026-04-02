import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Dumbbell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Recursos", href: "#recursos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Preços", href: "#precos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img 
              src="https://raw.githubusercontent.com/dhonathanbertotti1/imagens-fitfinance/refs/heads/main/1.png" 
              alt="Fit Finance Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-500 hover:text-primary transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-slate-900 px-6 py-2 hover:text-primary transition-colors">
              Entrar
            </button>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <button className="w-full py-4 rounded-2xl font-bold text-slate-900 bg-slate-50">
              Entrar
            </button>
            <button className="w-full py-4 rounded-2xl font-bold text-white bg-primary">
              Começar Agora
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
