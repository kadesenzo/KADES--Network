
import React, { useState, useEffect } from 'react';

interface DashboardProps {
  onBack: () => void;
}

const Icons = {
  Home: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Rocket: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-2.91a2.18 2.18 0 0 0-3.09-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>,
  Lightbulb: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  Book: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>,
  ArrowRight: () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Brain: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1-2.41-4.23 2.5 2.5 0 0 1 .41-4.53A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0 2.41-4.23 2.5 2.5 0 0 0-.41-4.53A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
  Wallet: () => <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M22 10h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6"/></svg>,
  Check: () => <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
};

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Configurar Perfil de Venda", done: false },
    { id: 2, text: "Protocolo 10 Abordagens", done: false },
    { id: 3, text: "Responder Leads Pendentes", done: false },
    { id: 4, text: "Card de Estudo: ROI Pro", done: false },
  ]);

  const affiliateLink = "https://dashboard.kiwify.com/join/affiliate/0G9SQimY";

  const carouselSlides = [
    { title: "Metodologia Alpha", desc: "Processos validados para escala.", icon: <Icons.Brain /> },
    { title: "Comissões Elite", desc: "Acessos de alta conversão.", icon: <Icons.Wallet /> },
    { title: "Scripts Calibrados", desc: "Fórmulas de fechamento rápido.", icon: <Icons.Lightbulb /> },
    { title: "Performance Pro", desc: "Foco total em lucro diário.", icon: <Icons.Home /> },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const toggleCheck = (id: number) => {
    setChecklist(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência.');
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: <Icons.Home /> },
    { id: 'zero', label: 'Start', icon: <Icons.Rocket /> },
    { id: 'vendas', label: 'Scripts', icon: <Icons.Lightbulb /> },
    { id: 'links', label: 'Ativos', icon: <Icons.Link /> },
    { id: 'planeja', label: 'Tarefas', icon: <Icons.Calendar /> },
    { id: 'treino', label: 'Academy', icon: <Icons.Book /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black overflow-hidden font-inter">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-[#050505] border-r border-white/5 flex flex-col p-8 hidden lg:flex">
        <div className="flex items-center space-x-3 mb-12 group cursor-pointer transition-all">
          <div className="w-12 h-10 bg-zinc-950 rounded-xl flex items-center justify-center font-black text-xl border border-white/10 group-hover:border-red-600/50 glow-red relative">
            <span className="text-white relative z-10">K</span>
            <span className="text-red-600 absolute right-[-8px] scale-90 translate-y-0.5 transition-all group-hover:translate-x-1">$</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="font-poppins font-black text-sm tracking-tight text-white uppercase leading-none">SISTEMA</span>
            <span className="text-red-600 font-black text-[7px] tracking-[0.4em] uppercase opacity-70 leading-none">ELITE</span>
          </div>
        </div>

        <nav className="flex-grow space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.1em] transition-all relative overflow-hidden ${
                activeTab === item.id ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-zinc-600 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative z-10">{item.icon}</div>
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <button onClick={onBack} className="mt-auto flex items-center space-x-3 text-zinc-800 text-[8px] uppercase font-black hover:text-red-600 transition-colors py-2">
          <Icons.ArrowRight /> <span>SAIR DO SISTEMA</span>
        </button>
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[100] px-5 py-4 bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="flex justify-between items-center w-full">
           <div className="flex items-center gap-3">
             <div className="w-10 h-8 bg-zinc-950 rounded-lg flex items-center justify-center font-black border border-white/10 glow-red relative">
                <span className="text-white text-xs">K</span>
                <span className="text-red-600 absolute right-[-6px] text-[10px] translate-y-0.5">$</span>
             </div>
             <div className="flex flex-col leading-none">
                <span className="text-white font-poppins font-black text-[10px] tracking-tight uppercase">KADES NETWORK</span>
                <span className="text-red-600 font-black text-[7px] tracking-[0.1em]">ELITE SYSTEM</span>
             </div>
           </div>
           <button onClick={onBack} className="text-[8px] font-black uppercase tracking-widest text-zinc-600 bg-white/5 px-3 py-2 rounded-lg border border-white/5 active:scale-90 transition-all">Sair</button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto bg-black relative no-scrollbar pt-20 pb-28 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto p-6 md:p-12 relative z-10 space-y-16 md:space-y-24">
          {activeTab === 'home' && (
            <div className="space-y-16 md:space-y-24 animate-ios-fade">
              
              <div className="relative h-64 md:h-[28rem] w-full glass-ios rounded-3xl overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                 {carouselSlides.map((slide, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-center transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
                    >
                       <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                          <div className="w-14 h-14 md:w-24 md:h-24 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 border border-red-600/20 shadow-inner">
                            {slide.icon}
                          </div>
                          <div className="space-y-2 md:space-y-4">
                             <h2 className="text-3xl md:text-6xl lg:text-7xl font-poppins font-black tracking-tighter text-white uppercase leading-none">{slide.title}</h2>
                             <p className="text-zinc-500 font-bold text-sm md:text-2xl opacity-80">{slide.desc}</p>
                          </div>
                       </div>
                    </div>
                 ))}
                 <div className="absolute bottom-6 left-6 md:bottom-12 md:left-16 z-20 flex gap-2 md:gap-3">
                    {carouselSlides.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-12 md:w-20 bg-red-600 glow-red' : 'w-2 md:w-6 bg-zinc-800'}`}
                      ></button>
                    ))}
                 </div>
              </div>

              <header className="space-y-4 text-center md:text-left">
                <h3 className="text-4xl md:text-7xl lg:text-8xl font-poppins font-black text-white uppercase tracking-tighter leading-none">PAINEL DE <span className="text-red-600">CONTROLE</span></h3>
                <p className="text-zinc-600 font-bold max-w-2xl text-base md:text-2xl leading-tight">Sua base de operações para dominar a revenda na rede Kades.</p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                    { id: 'zero', icon: <Icons.Rocket />, title: "Start Protocol", desc: "Acione o motor e valide lucro." },
                    { id: 'vendas', icon: <Icons.Lightbulb />, title: "Copy Vault", desc: "Acesse scripts validados." },
                    { id: 'links', icon: <Icons.Link />, title: "Assets", desc: "Gerencie seus ativos elite." },
                    { id: 'treino', icon: <Icons.Book />, title: "Academy", desc: "Capacitação de alto impacto." },
                    { id: 'planeja', icon: <Icons.Calendar />, title: "Sprints", desc: "Sua rotina operacional." }
                ].map((card) => (
                    <div key={card.id} onClick={() => setActiveTab(card.id)} className="p-8 glass-ios rounded-3xl premium-card cursor-pointer group flex flex-col justify-between aspect-square transition-all border-white/5 active:scale-95 shadow-lg">
                        <div className="text-red-600 w-12 h-12 md:w-16 md:h-16 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/5 group-hover:bg-red-600/10 transition-all">
                          {card.icon}
                        </div>
                        <div className="mt-6 md:mt-0">
                            <h4 className="font-poppins font-black text-xl md:text-2xl text-white mb-2 uppercase tracking-tighter leading-none">{card.title}</h4>
                            <p className="text-zinc-600 text-[10px] md:text-xs leading-relaxed font-bold uppercase tracking-wider">{card.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'zero' && (
            <div className="space-y-16 animate-ios-fade max-w-4xl mx-auto pb-16">
              <header className="space-y-4">
                <h3 className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none">PROTOCOLO <br/><span className="text-red-600 underline decoration-red-600/30 decoration-4 md:decoration-8">START</span></h3>
                <p className="text-zinc-600 font-bold text-lg md:text-3xl">Execute com velocidade. O ROI recompensa a disciplina.</p>
              </header>
              <div className="space-y-6">
                {[
                  { n: "01", t: "ATIVAR REVENDA", d: "Entre no sistema oficial e garanta sua autorização.", link: affiliateLink },
                  { n: "02", t: "SISTEMA KADES", d: "Entenda a engrenagem para propagar o acesso.", link: affiliateLink },
                  { n: "03", t: "TARGETING", d: "Foque nos leads com maior potencial imediato." },
                  { n: "04", t: "VALIDAÇÃO", d: "Use o Script 01 para validar seu lucro." }
                ].map(step => (
                  <div key={step.n} className="glass-ios p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 premium-card border-white/5 shadow-xl">
                    <span className="text-4xl md:text-6xl font-black text-red-600/20 font-poppins leading-none">{step.n}</span>
                    <div className="space-y-2 flex-grow">
                      <h4 className="font-poppins font-black text-lg md:text-2xl text-white uppercase tracking-tighter leading-none">{step.t}</h4>
                      <p className="text-zinc-600 text-[11px] md:text-sm font-bold leading-relaxed">{step.d}</p>
                    </div>
                    {step.link ? (
                      <a 
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-red-600 text-white p-4 md:p-6 rounded-2xl flex items-center justify-center glow-red transition-all hover:scale-105 active:scale-95"
                      >
                          <Icons.ArrowRight />
                      </a>
                    ) : (
                      <div className="w-full md:w-auto bg-zinc-900 text-zinc-800 p-4 md:p-6 rounded-2xl flex items-center justify-center opacity-30">
                          <Icons.ArrowRight />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vendas' && (
            <div className="space-y-16 animate-ios-fade pb-16">
              <header className="space-y-4 text-center md:text-left">
                <h3 className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none">SCRIPTS <span className="text-red-600">VAULT</span></h3>
                <p className="text-zinc-600 font-bold text-lg md:text-3xl">Modelos táticos para conversão rápida.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                 <div className="glass-ios p-8 rounded-3xl space-y-8 premium-card border-white/5 flex flex-col justify-between min-h-[280px] shadow-xl">
                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase text-red-600 tracking-[0.4em] bg-red-600/5 px-6 py-2 rounded-full inline-block border border-red-600/20">MODO STATUS</div>
                        <p className="text-zinc-200 text-lg md:text-2xl font-black leading-tight">"Pessoal, descobri um sistema elite que organiza revenda. Finalmente algo profissional. Me chama no PV quem quer o acesso."</p>
                    </div>
                    <button onClick={() => copyToClipboard("Pessoal, descobri um sistema elite que organiza revenda...")} className="w-full bg-red-600 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] md:text-xs glow-red transition-all hover:scale-105 active:scale-95">COPIAR PROTOCOLO</button>
                 </div>
                 <div className="glass-ios p-8 rounded-3xl space-y-8 premium-card border-white/5 flex flex-col justify-between min-h-[280px] shadow-xl">
                    <div className="space-y-6">
                        <div className="text-[9px] font-black uppercase text-red-600 tracking-[0.4em] bg-red-600/5 px-6 py-2 rounded-full inline-block border border-red-600/20">MODO DIRECT</div>
                        <p className="text-zinc-200 text-lg md:text-2xl font-black leading-tight">"Vi que você quer evoluir no digital. Já conhece o novo sistema Kades? Tecnologia focada em lucro real por revenda. Quer conhecer?"</p>
                    </div>
                    <button onClick={() => copyToClipboard("Vi que você quer evoluir no digital. Já conhece o novo sistema Kades?")} className="w-full bg-zinc-900 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-red-600 transition-colors active:scale-95">COPIAR PROTOCOLO</button>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'links' && (
             <div className="max-w-3xl animate-ios-fade space-y-16 pt-8 mx-auto text-center pb-16">
                <header className="space-y-4">
                  <h3 className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none">NETWORK <span className="text-red-600">ASSETS</span></h3>
                  <p className="text-zinc-600 font-bold text-lg md:text-3xl">Links oficiais de distribuição.</p>
                </header>
                <div className="glass-ios p-8 md:p-16 rounded-3xl space-y-12 border-white/5 relative overflow-hidden shadow-2xl">
                   <div className="space-y-10">
                      <div className="flex justify-center text-red-600 scale-[1.5]"><Icons.Link /></div>
                      <div className="space-y-4">
                        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">URL DE REVENDA ATIVA</p>
                        <input type="text" readOnly defaultValue={affiliateLink} className="w-full bg-black/50 border border-white/10 p-6 md:p-10 rounded-2xl text-center text-red-500 font-poppins font-black text-xs md:text-xl outline-none focus:border-red-600 glow-red shadow-inner"/>
                      </div>
                   </div>
                   <button onClick={() => copyToClipboard(affiliateLink)} className="w-full bg-red-600 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] md:text-sm glow-red transition-all hover:scale-105 active:scale-95">COPIAR LINK OFICIAL</button>
                   <div className="flex justify-center items-center space-x-4 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse glow-red"></div>
                      <span className="text-[9px] font-black uppercase tracking-[0.6em]">ACESSO ELITE</span>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'planeja' && (
            <div className="max-w-4xl animate-ios-fade space-y-16 mx-auto pb-16">
              <header className="space-y-4 text-center">
                <h3 className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none">SPRINTS <br/><span className="text-red-600">DIÁRIOS</span></h3>
                <p className="text-zinc-600 font-bold text-lg md:text-3xl">Rotina para lucros diários.</p>
              </header>
              <div className="glass-ios p-8 md:p-12 rounded-3xl space-y-10 border-white/5 shadow-2xl">
                 <div className="flex justify-between items-end">
                    <div className="space-y-2 text-left">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600"> PERFORMANCE</span>
                        <h4 className="text-2xl md:text-4xl font-poppins font-black text-white">{Math.round((checklist.filter(t => t.done).length / checklist.length) * 100)}%</h4>
                    </div>
                    <span className="text-red-600 font-black text-xl font-poppins">#{checklist.filter(t => t.done).length}/{checklist.length}</span>
                 </div>
                 <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-red-600 transition-all duration-1000 glow-red" style={{ width: `${(checklist.filter(t => t.done).length / checklist.length) * 100}%` }}></div>
                 </div>
                 <div className="space-y-3">
                    {checklist.map(t => (
                      <div key={t.id} onClick={() => toggleCheck(t.id)} className={`p-6 rounded-2xl border flex items-center gap-6 cursor-pointer transition-all active:scale-95 shadow-md ${t.done ? 'bg-red-600/5 border-red-600/20' : 'bg-black border-white/5'}`}>
                        <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${t.done ? 'bg-red-600 border-red-600 glow-red' : 'border-white/10'}`}>
                          {t.done && <Icons.Check />}
                        </div>
                        <span className={`font-poppins font-black text-sm md:text-2xl tracking-tighter transition-all ${t.done ? 'text-white/20 line-through' : 'text-zinc-100'}`}>{t.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'treino' && (
            <div className="space-y-16 animate-ios-fade pb-16">
              <header className="space-y-4">
                <h3 className="text-4xl md:text-7xl font-poppins font-black text-white uppercase tracking-tighter leading-none">KADES <span className="text-red-600">ACADEMY</span></h3>
                <p className="text-zinc-600 font-bold text-lg md:text-3xl">ROI imediato sem enrolação.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="p-8 md:p-12 glass-ios rounded-3xl border-white/5 premium-card group active:scale-95 transition-transform shadow-xl">
                   <h5 className="font-poppins font-black uppercase text-green-500 text-[8px] mb-6 tracking-[0.4em] flex items-center gap-3">
                     <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span> ALPHA PATH
                   </h5>
                   <div className="space-y-6">
                      <p className="text-white font-poppins font-black text-xl md:text-3xl leading-none">"Posicionamento dita o lucro."</p>
                      <p className="text-xs md:text-lg text-zinc-500 leading-tight font-bold">Não venda links, venda o ecossistema. O design premium faz 70% do fechamento por você.</p>
                   </div>
                </div>
                <div className="p-8 md:p-12 glass-ios rounded-3xl border-white/5 premium-card group active:scale-95 transition-transform shadow-xl">
                   <h5 className="font-poppins font-black uppercase text-red-500 text-[8px] mb-6 tracking-[0.4em] flex items-center gap-3">
                     <span className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444]"></span> CORE RULES
                   </h5>
                   <div className="space-y-6">
                      <p className="text-white font-poppins font-black text-xl md:text-3xl leading-none">"Humanize o Sistema."</p>
                      <p className="text-xs md:text-lg text-zinc-500 leading-tight font-bold">Scripts são a base, mas sua atitude é o gatilho. Leads de elite buscam consultores de elite.</p>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Navegação Mobile Inferior */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-[110] bg-black/95 backdrop-blur-3xl border-t border-white/10 pb-4 pt-2">
        <div className="flex justify-around items-center h-16 px-4">
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)} 
              className={`flex flex-col items-center justify-center gap-1 min-w-[55px] transition-all relative ${
                activeTab === item.id ? 'text-red-600' : 'text-zinc-600'
              }`}
            >
              <div className={`transition-all transform ${activeTab === item.id ? 'scale-110 -translate-y-1' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[8px] font-black uppercase tracking-wider transition-opacity ${
                activeTab === item.id ? 'opacity-100' : 'opacity-40'
              }`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <div className="absolute -bottom-1 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
