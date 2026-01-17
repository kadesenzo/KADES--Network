
import React, { useEffect, useState } from 'react';

const IntroScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 18);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden px-6">
      {/* Mesh de fundo para profundidade */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      
      {/* Container Principal Centralizado */}
      <div className="relative flex flex-col items-center w-full max-w-xl animate-shake">
        
        {/* Container do Logotipo com Balanço de Espaço */}
        <div className="relative flex items-center justify-center h-48 md:h-80 w-full mb-12 md:mb-20">
          {/* Brilho radial de fundo */}
          <div className="absolute -inset-40 bg-red-600/10 blur-[150px] rounded-full animate-pulse"></div>
          
          <div className="relative flex items-center justify-center">
             {/* Letra K com Impacto - Centralizada como âncora */}
             <div className="text-white font-poppins font-black text-[10rem] md:text-[20rem] tracking-tighter animate-k-impact z-20 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               K
             </div>
             {/* Sifrão $ deslizando para a direita - Posicionado para não quebrar a simetria inicial */}
             <div className="absolute text-red-600 font-poppins font-black text-[8rem] md:text-[16rem] tracking-tighter opacity-0 animate-dollar-slide z-10 select-none">
               $
             </div>
          </div>
        </div>

        {/* Informações de Carregamento */}
        <div className="text-center space-y-10 w-full animate-ios-fade" style={{ animationDelay: '1.4s', opacity: 0 }}>
          <div className="space-y-3">
            <h2 className="text-white font-poppins font-black text-3xl md:text-7xl tracking-tight uppercase opacity-95 leading-none">
              KADES <span className="text-red-600">NETWORK</span>
            </h2>
            <p className="text-zinc-600 text-[9px] md:text-xs tracking-[1.4em] font-black uppercase">SISTEMA ELITE</p>
          </div>
          
          <div className="space-y-6 w-full max-w-sm mx-auto">
            {/* Barra de Progresso Minimalista */}
            <div className="w-full h-[3px] md:h-[4px] bg-zinc-900 rounded-full overflow-hidden relative shadow-inner">
              <div 
                className="h-full bg-red-600 transition-all duration-300 ease-out glow-red"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Meta-dados do carregamento */}
            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse"></div> 
                  ESTRUTURA
                </span>
                <span className="text-red-600/80">{progress}%</span>
                <span className="flex items-center gap-2">
                  CONEXÃO
                  <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rodapé da Intro */}
      <div className="absolute bottom-10 text-center opacity-20 animate-ios-fade" style={{ animationDelay: '2s', opacity: 0 }}>
        <p className="text-[8px] font-black uppercase tracking-[0.8em] text-zinc-500">CORE ENGINE ACTIVE</p>
      </div>
    </div>
  );
};

export default IntroScreen;
