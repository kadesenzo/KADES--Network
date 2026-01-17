
import React from 'react';

interface HeaderProps {
  onAccessSystem: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAccessSystem }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-5 group cursor-pointer">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-950 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl border border-white/10 group-hover:border-red-600/50 transition-all glow-red relative overflow-hidden">
            <div className="relative z-10 flex items-center">
              <span className="text-white">K</span>
              <span className="text-red-600 ml-1 group-hover:translate-x-1 transition-transform">$</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/5 to-transparent"></div>
          </div>
          <div className="flex flex-col leading-none hidden sm:flex">
            <span className="text-white font-poppins font-black text-lg md:text-xl tracking-tighter uppercase">
              Kades <span className="text-red-600">Network</span>
            </span>
            <span className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.5em]">SISTEMA ELITE</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-14 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
          <a href="#como-funciona" className="hover:text-red-600 transition-all">Protocolo</a>
          <a href="#sistema" className="hover:text-red-600 transition-all">Sistema</a>
          <a href="#grupo" className="hover:text-red-600 transition-all">Rede</a>
        </nav>

        <button 
          onClick={onAccessSystem}
          className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20 glow-red"
        >
          Acesso Elite
        </button>
      </div>
    </header>
  );
};

export default Header;
