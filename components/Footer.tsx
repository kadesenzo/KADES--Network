
import React from 'react';

const Icons = {
  Shield: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  Zap: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
};

interface FooterProps {
  onAccessSystem: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAccessSystem }) => {
  return (
    <footer id="cta-final" className="bg-black pt-64 pb-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center space-y-32">
        
        <div className="space-y-12">
          <h2 className="text-6xl md:text-[13rem] font-poppins font-black tracking-tighter leading-none uppercase drop-shadow-2xl">
            PRONTO PARA <br/><span className="text-red-600">INICIAR?</span>
          </h2>
          <p className="text-zinc-500 text-2xl md:text-5xl max-w-5xl mx-auto font-bold leading-relaxed">
            Acesse o ecossistema agora e valide seu primeiro ciclo de revenda. O futuro não espera.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-14">
          <button 
            onClick={onAccessSystem}
            className="w-full sm:w-auto bg-red-600 text-white px-32 py-10 md:px-48 md:py-14 rounded-3xl md:rounded-[4rem] font-poppins font-black text-3xl md:text-5xl transition-all hover:scale-105 active:scale-95 glow-red shadow-2xl shadow-red-900/60 uppercase tracking-tighter"
          >
            ENTRAR AGORA
          </button>
          
          <div className="flex items-center space-x-12 opacity-30">
             <div className="flex items-center space-x-4">
                <Icons.Shield />
                <span className="text-xs font-black tracking-[0.6em] uppercase">GARANTIA KADES</span>
             </div>
             <div className="flex items-center space-x-4">
                <Icons.Zap />
                <span className="text-xs font-black tracking-[0.6em] uppercase">ACESSO ELITE</span>
             </div>
          </div>
        </div>
        
        <div className="pt-48 grid grid-cols-1 md:grid-cols-2 gap-24 text-left border-t border-white/5">
          <div className="space-y-10">
            <div className="flex items-center space-x-6 group">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-red-900/50">
                 <div className="flex items-center">
                   <span className="text-white">K</span>
                   <span className="text-black ml-0.5">$</span>
                 </div>
              </div>
              <span className="text-white font-poppins font-black text-4xl tracking-tighter uppercase">
                KADES <span className="text-red-600">NETWORK</span>
              </span>
            </div>
            <p className="text-xl text-zinc-500 font-bold leading-relaxed max-w-md uppercase tracking-tight">
              Ecossistema proprietário de alta performance para formação de revendedores digitais. Do zero ao ROI com estrutura de elite.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-14">
            <div className="flex space-x-14 text-xs font-black uppercase tracking-[0.6em] text-zinc-600">
              <a href="#como-funciona" className="hover:text-red-600 transition-colors">PROTOCOLO</a>
              <a href="#sistema" className="hover:text-red-600 transition-colors">SISTEMA</a>
              <a href="#grupo" className="hover:text-red-600 transition-colors">REDE</a>
            </div>
            <div className="flex space-x-8">
              {[1,2,3].map(i => (
                <div key={i} className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/5 hover:border-red-600/50 transition-all cursor-pointer shadow-inner active:scale-95">
                  <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-24 text-center">
          <p className="text-xs text-zinc-800 font-black uppercase tracking-[0.8em]">
            © 2024 KADES NETWORK • CORE ENGINE • PROTOCOLO ELITE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
