
import React, { useEffect, useState } from 'react';

const IntroScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden px-6 select-none">
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="relative flex flex-col items-center justify-center w-full max-w-lg animate-shake">
        {/* Logo Container - Adjusted for better scale */}
        <div className="relative flex items-center justify-center w-full h-32 md:h-48 mb-6">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[100%] h-[100%] bg-red-600/10 blur-[60px] rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative flex items-center justify-center">
             <div className="text-white font-poppins font-black text-[5rem] md:text-[8rem] tracking-tighter animate-k-impact z-20 drop-shadow-[0_0_20px_rgba(255,0,0,0.15)]">
               K
             </div>
             <div className="absolute text-red-600 font-poppins font-black text-[4rem] md:text-[6.5rem] tracking-tighter opacity-0 animate-dollar-slide z-10">
               $
             </div>
          </div>
        </div>

        {/* Text and Progress */}
        <div className="text-center space-y-6 w-full animate-ios-fade" style={{ animationDelay: '1.2s', opacity: 0 }}>
          <div className="space-y-1">
            <h2 className="text-white font-poppins font-black text-xl md:text-3xl tracking-tight uppercase opacity-95 leading-none">
              KADES <span className="text-red-600">NETWORK</span>
            </h2>
            <p className="text-zinc-600 text-[8px] md:text-[10px] tracking-[0.8em] font-black uppercase">SISTEMA ELITE</p>
          </div>
          
          <div className="space-y-4 w-full max-w-[180px] md:max-w-[220px] mx-auto">
            <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-red-600 transition-all duration-300 ease-out glow-red"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse"></div> 
                  READY
                </span>
                <span className="text-red-600/80">{progress}%</span>
                <span className="flex items-center gap-1.5">
                  CORE
                  <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-center opacity-20 animate-ios-fade" style={{ animationDelay: '2s', opacity: 0 }}>
        <p className="text-[7px] font-black uppercase tracking-[0.6em] text-zinc-600">ENCRYPTED CONNECTION</p>
      </div>
    </div>
  );
};

export default IntroScreen;
