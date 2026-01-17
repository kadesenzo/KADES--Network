
import React from 'react';

const Icons = {
  ArrowRight: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
};

const Hero: React.FC<{ onAccessSystem: () => void }> = ({ onAccessSystem }) => {
  return (
    <section className="relative pt-48 pb-24 md:pt-80 md:pb-80 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] md:w-[1600px] md:h-[1000px] bg-red-600/10 blur-[200px] md:blur-[300px] rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-28 relative z-10">
        <div className="inline-flex items-center space-x-4 md:space-x-6 glass-ios px-8 py-3 md:px-16 md:py-6 animate-ios-fade">
          <span className="flex h-2.5 w-2.5 md:h-3.5 md:w-3.5 rounded-full bg-red-600 animate-pulse glow-red"></span>
          <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.8em] text-red-500 font-poppins">SISTEMA ELITE</span>
        </div>
        
        <div className="space-y-8 md:space-y-12">
            <h1 className="text-6xl sm:text-8xl md:text-[16rem] font-poppins font-black leading-tight md:leading-[0.8] tracking-tighter text-white uppercase animate-[fadeIn_1.2s_ease] drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]">
              FUTURE <br/>
              <span className="text-red-600">NETWORK</span>
            </h1>
            <p className="text-xl md:text-6xl text-zinc-500 max-w-5xl mx-auto font-bold leading-snug animate-[fadeIn_1.4s_ease] tracking-tight">
              Aprenda a vender em um ecossistema <span className="text-white">Enterprise</span> desenhado para a nova geração.
            </p>
        </div>
        
        <div className="flex flex-col items-center space-y-16 md:space-y-24 pt-12 md:pt-20 animate-[fadeIn_1.6s_ease]">
          <button 
            onClick={onAccessSystem}
            className="group relative w-full sm:w-auto bg-red-600 text-white px-16 py-8 md:px-48 md:py-14 rounded-3xl md:rounded-[4rem] font-poppins font-black text-2xl md:text-5xl transition-all hover:scale-105 active:scale-95 glow-red shadow-2xl shadow-red-600/40 overflow-hidden flex items-center justify-center gap-6 md:gap-10"
          >
            <span className="relative z-10 uppercase tracking-tighter">INICIAR PROTOCOLO</span>
            <div className="relative z-10 group-hover:translate-x-3 transition-transform duration-500"><Icons.ArrowRight /></div>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-48 opacity-20 pt-10">
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-7xl font-black text-white font-poppins">SCALE</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mt-4 text-zinc-500 leading-none">HIGH PERFORMANCE</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-7xl font-black text-white font-poppins">PRO</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mt-4 text-zinc-500 leading-none">CORE ENGINE</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-4xl md:text-7xl font-black text-white font-poppins">∞ ROI</span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] font-black mt-4 text-zinc-500 leading-none">ELITE PROTOCOL</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
