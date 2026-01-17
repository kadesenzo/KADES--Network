
import React from 'react';

const Icons = {
  ArrowRight: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
};

const Hero: React.FC<{ onAccessSystem: () => void }> = ({ onAccessSystem }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-64 md:pb-48 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] md:w-[1200px] md:h-[800px] bg-red-600/10 blur-[150px] md:blur-[250px] rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20 relative z-10">
        <div className="inline-flex items-center space-x-3 md:space-x-5 glass-ios px-6 py-2 md:px-10 md:py-4 animate-ios-fade">
          <span className="flex h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-600 animate-pulse glow-red"></span>
          <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.6em] text-red-500 font-poppins">ACESSO ELITE ATIVO</span>
        </div>
        
        <div className="space-y-6 md:space-y-10">
            <h1 className="text-5xl sm:text-6xl md:text-9xl lg:text-[10rem] font-poppins font-black leading-tight md:leading-[0.85] tracking-tighter text-white uppercase animate-[fadeIn_1.2s_ease] drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              FUTURE <br/>
              <span className="text-red-600">NETWORK</span>
            </h1>
            <p className="text-base sm:text-lg md:text-3xl lg:text-4xl text-zinc-500 max-w-4xl mx-auto font-bold leading-snug animate-[fadeIn_1.4s_ease] tracking-tight px-4">
              Aprenda a vender em um ecossistema <span className="text-white">Enterprise</span> desenhado para a nova geração.
            </p>
        </div>
        
        <div className="flex flex-col items-center space-y-12 md:space-y-20 pt-8 md:pt-12 animate-[fadeIn_1.6s_ease]">
          <button 
            onClick={onAccessSystem}
            className="group relative w-full sm:w-auto bg-red-600 text-white px-10 py-5 md:px-24 md:py-10 rounded-2xl md:rounded-[2.5rem] font-poppins font-black text-lg md:text-3xl transition-all hover:scale-105 active:scale-95 glow-red shadow-2xl shadow-red-600/30 overflow-hidden flex items-center justify-center gap-4 md:gap-8"
          >
            <span className="relative z-10 uppercase tracking-tighter">INICIAR PROTOCOLO</span>
            <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"><Icons.ArrowRight /></div>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-32 opacity-20 pt-6">
             <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-black text-white font-poppins">SCALE</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mt-2 text-zinc-500 leading-none">HIGH PERFORMANCE</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-black text-white font-poppins">PRO</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mt-2 text-zinc-500 leading-none">CORE ENGINE</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-black text-white font-poppins">∞ ROI</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] font-black mt-2 text-zinc-500 leading-none">ELITE PROTOCOL</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
