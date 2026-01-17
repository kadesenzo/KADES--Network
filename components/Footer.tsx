
import React from 'react';

const Icons = {
  Shield: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
};

interface FooterProps {
  onAccessSystem: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAccessSystem }) => {
  return (
    <footer id="cta-final" className="bg-black pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-24 md:space-y-40">
        
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-poppins font-black tracking-tighter leading-none uppercase drop-shadow-2xl">
            PRONTO PARA <br/><span className="text-red-600">INICIAR?</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-4xl max-w-4xl mx-auto font-bold leading-relaxed px-4">
            Acesse o ecossistema agora e valide seu primeiro ciclo de revenda. O futuro não espera.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-10 md:space-y-14">
          <button 
            onClick={onAccessSystem}
            className="w-full sm:w-auto bg-red-600 text-white px-12 py-6 md:px-32 md:py-10 rounded-2xl md:rounded-[3rem] font-poppins font-black text-xl md:text-4xl transition-all hover:scale-105 active:scale-95 glow-red shadow-2xl shadow-red-900/40 uppercase tracking-tighter"
          >
            ENTRAR AGORA
          </button>
          
          <div className="flex items-center space-x-8 md:space-x-12 opacity-30">
             <div className="flex items-center space-x-3 md:space-x-4">
                <Icons.Shield />
                <span className="text-[7px] md:text-[9px] font-black tracking-[0.4em] uppercase">GARANTIA KADES</span>
             </div>
             <div className="flex items-center space-x-3 md:space-x-4">
                <Icons.Zap />
                <span className="text-[7px] md:text-[9px] font-black tracking-[0.4em] uppercase">ACESSO ELITE</span>
             </div>
          </div>
        </div>
        
        <div className="pt-24 md:pt-40 grid grid-cols-1 md:grid-cols-2 gap-16 text-left border-t border-white/5">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 md:space-x-6 group">
              <div className="w-12 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-lg shadow-xl shadow-red-900/40">
                 <div className="flex items-center">
                   <span className="text-white">K</span>
                   <span className="text-black ml-0.5">$</span>
                 </div>
              </div>
              <span className="text-white font-poppins font-black text-2xl md:text-4xl tracking-tighter uppercase">
                KADES <span className="text-red-600">NETWORK</span>
              </span>
            </div>
            <p className="text-base md:text-xl text-zinc-500 font-bold leading-relaxed max-w-sm uppercase tracking-tight">
              Ecossistema proprietário de alta performance para formação de revendedores digitais.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-10 md:space-y-14">
            <div className="flex space-x-6 md:space-x-10 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
              <a href="#como-funciona" className="hover:text-red-600 transition-colors">PROTOCOLO</a>
              <a href="#sistema" className="hover:text-red-600 transition-colors">SISTEMA</a>
              <a href="#grupo" className="hover:text-red-600 transition-colors">REDE</a>
            </div>
            <div className="flex space-x-4 md:space-x-6">
              {[1,2,3].map(i => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/5 hover:border-red-600/50 transition-all cursor-pointer shadow-inner active:scale-95">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-zinc-800 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-16 text-center">
          <p className="text-[7px] md:text-[9px] text-zinc-800 font-black uppercase tracking-[0.6em]">
            © 2024 KADES NETWORK • CORE ENGINE • PROTOCOLO ELITE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
