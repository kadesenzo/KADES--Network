
import React, { useState, useEffect } from 'react';

interface DashboardProps {
  onBack: () => void;
}

const Icons = {
  Home: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Rocket: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.09-2.91a2.18 2.18 0 0 0-3.09-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>,
  Lightbulb: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
  Link: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  Book: () => <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>,
  ArrowRight: () => <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Brain: () => <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1-2.41-4.23 2.5 2.5 0 0 1 .41-4.53A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0 2.41-4.23 2.5 2.5 0 0 0-.41-4.53A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
  Wallet: () => <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M22 10h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6"/></svg>,
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
      <aside className="w-80 bg-[#050505] border-r border-white/5 flex flex-col p-10 hidden lg:flex">
        <div className="flex items-center space-x-3 mb-20 group cursor-pointer transition-all">
          <div className="w-16 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center font-black text-2xl border border-white/10 group-hover:border-red-600/50 glow-red relative">
            <span className="text-white relative z-10">K</span>
            <span className="text-red-600 absolute right-[-10px] scale-90 translate-y-1 transition-all group-hover:translate-x-1">$</span>
          </div>
          <div className="flex flex-col pl-4">
            <span className="font-poppins font-black text-lg tracking-tight text-white uppercase leading-none">SISTEMA</span>
            <span className="text-red-600 font-black text-[9px] tracking-[0.5em] uppercase opacity-70 leading-none">ELITE</span>
          </div>
        </div>

        <nav className="flex-grow space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-5 px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden ${
                activeTab === item.id ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'text-zinc-600 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative z-10">{item.icon}</div>
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </nav>

        <button onClick={onBack} className="mt-auto flex items-center space-x-3 text-zinc-800 text-[9px] uppercase font-black hover:text-red-600 transition-colors py-4">
          <Icons.ArrowRight /> <span>TERMINAR SESSÃO</span>
        </button>
      </aside>

      {/* Mobile Top Header (Sair e Logo) */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[100] px-6 py-5 bg-black/90 backdrop-blur-3xl border-b border-white/5">
        <div className="flex justify-between items-center w-full">
           <div className="flex items-center gap-4">
             <div className="w-12 h-10 bg-zinc-950 rounded-xl flex items-center justify-center font-black border border-white/10 glow-red relative">
                <span className="text-white text-sm">K</span>
                <span className="text-red-600 absolute right-[-8px] text-xs translate-y-0.5">$</span>
             </div>
             <div className="flex flex-col leading-none">
                <span className="text-white font-poppins font-black text-[12px] tracking-tight uppercase">KADES NETWORK</span>
                <span className="text-red-600 font-black text-[8px] tracking-[0.2em]">ELITE SYSTEM</span>
             </div>
           </div>
           <button onClick={onBack} className="text-[10px] font-black uppercase tracking-widest text-zinc-600 bg-white/5 px-4 py-2 rounded-xl border border-white/5 active:scale-90 transition-all">Sair</button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto bg-black relative no-scrollbar pt-28 pb-32 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto p-6 md:p-16 relative z-10 space-y-24 md:space-y-40">
          {activeTab === 'home' && (
            <div className="space-y-24 md:space-y-40 animate-ios-fade">
              
              <div className="relative h-[22rem] md:h-[36rem] w-full glass-ios overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
                 {carouselSlides.map((slide, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 p-8 md:p-24 flex flex-col justify-center transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95 pointer-events-none'}`}
                    >
                       <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
                          <div className="w-20 h-20 md:w-32 md:h-32 bg-red-600/10 rounded-3xl flex items-center justify-center text-red-600 border border-red-600/20 shadow-inner">
                            {slide.icon}
                          </div>
                          <div className="space-y-4 md:space-y-8">
                             <h2 className="text-5xl md:text-9xl font-poppins font-black tracking-tighter text-white uppercase leading-none">{slide.title}</h2>
                             <p className="text-zinc-500 font-bold text-lg md:text-4xl opacity-80">{slide.desc}</p>
                          </div>
                       </div>
                    </div>
                 ))}
                 <div className="absolute bottom-10 left-10 md:bottom-20 md:left-24 z-20 flex gap-4">
                    {carouselSlides.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all ${idx === currentSlide ? 'w-20 md:w-32 bg-red-600 glow-red' : 'w-4 md:w-10 bg-zinc-800'}`}
                      ></button>
                    ))}
                 </div>
              </div>

              <header className="space-y-8 text-center md:text-left">
                <h3 className="text-6xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">PAINEL DE <span className="text-red-600">CONTROLE</span></h3>
                <p className="text-zinc-600 font-bold max-w-3xl text-xl md:text-4xl leading-tight">Sua base de operações para dominar a revenda na rede Kades.</p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                {[
                    { id: 'zero', icon: <Icons.Rocket />, title: "Start Protocol", desc: "Acione o motor e valide seu primeiro lucro." },
                    { id: 'vendas', icon: <Icons.Lightbulb />, title: "Copy Vault", desc: "Acesse scripts validados para fechamentos." },
                    { id: 'links', icon: <Icons.Link />, title: "Assets", desc: "Gerencie seus ativos de revenda elite." },
                    { id: 'treino', icon: <Icons.Book />, title: "Academy", desc: "Capacitação tática de alto impacto." },
                    { id: 'planeja', icon: <Icons.Calendar />, title: "Sprints", desc: "Sua rotina operacional diária." }
                ].map((card) => (
                    <div key={card.id} onClick={() => setActiveTab(card.id)} className="p-12 glass-ios premium-card cursor-pointer group flex flex-col justify-between aspect-square transition-all border-white/5 active:scale-95 shadow-xl">
                        <div className="text-red-600 w-20 h-20 md:w-28 md:h-28 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-red-600/10 transition-all">
                          {card.icon}
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h4 className="font-poppins font-black text-3xl md:text-4xl text-white mb-4 uppercase tracking-tighter leading-none">{card.title}</h4>
                            <p className="text-zinc-600 text-base md:text-xl leading-relaxed font-bold">{card.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'zero' && (
            <div className="space-y-24 animate-ios-fade max-w-5xl mx-auto pb-24">
              <header className="space-y-8">
                <h3 className="text-7xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">PROTOCOLO <br/><span className="text-red-600 underline decoration-red-600/30 decoration-8">START</span></h3>
                <p className="text-zinc-600 font-bold text-2xl md:text-5xl">Execute com velocidade. O ROI recompensa a disciplina.</p>
              </header>
              <div className="space-y-10">
                {[
                  { n: "01", t: "ATIVAR REVENDA", d: "Entre no sistema oficial de afiliados e garanta sua autorização.", link: affiliateLink },
                  { n: "02", t: "SISTEMA KADES", d: "Entenda a engrenagem proprietária para propagar o acesso.", link: affiliateLink },
                  { n: "03", t: "TARGETING", d: "Foque nos leads com maior potencial de conversão imediata." },
                  { n: "04", t: "VALIDAÇÃO", d: "Use o Script 01 e sua URL para validar seu primeiro lucro." }
                ].map(step => (
                  <div key={step.n} className="glass-ios p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 premium-card border-white/10 shadow-3xl">
                    <span className="text-6xl md:text-9xl font-black text-red-600/20 font-poppins">{step.n}</span>
                    <div className="space-y-4 md:space-y-8 flex-grow">
                      <h4 className="font-poppins font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-none">{step.t}</h4>
                      <p className="text-zinc-600 text-lg md:text-3xl font-bold leading-relaxed">{step.d}</p>
                    </div>
                    {step.link ? (
                      <a 
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-red-600 text-white p-10 md:p-16 rounded-[2.5rem] flex items-center justify-center glow-red transition-all hover:scale-105 active:scale-95"
                      >
                          <Icons.ArrowRight />
                      </a>
                    ) : (
                      <div className="w-full md:w-auto bg-zinc-900 text-zinc-800 p-10 md:p-16 rounded-[2.5rem] flex items-center justify-center opacity-30">
                          <Icons.ArrowRight />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'vendas' && (
            <div className="space-y-24 animate-ios-fade pb-24">
              <header className="space-y-8 text-center md:text-left">
                <h3 className="text-7xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">SCRIPTS <span className="text-red-600">VAULT</span></h3>
                <p className="text-zinc-600 font-bold text-2xl md:text-5xl">Modelos táticos para conversão e fechamento rápido.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="glass-ios p-14 space-y-12 premium-card border-white/10 flex flex-col justify-between min-h-[400px] shadow-2xl">
                    <div className="space-y-10">
                        <div className="text-[11px] font-black uppercase text-red-600 tracking-[0.5em] bg-red-600/5 px-10 py-4 rounded-full inline-block border border-red-600/20">MODO STATUS</div>
                        <p className="text-zinc-200 text-3xl md:text-5xl font-black leading-[1.1]">"Pessoal, descobri um sistema elite que organiza revenda. Finalmente algo profissional. Me chama no PV quem quer o acesso de revenda."</p>
                    </div>
                    <button onClick={() => copyToClipboard("Pessoal, descobri um sistema elite que organiza revenda...")} className="w-full bg-red-600 py-10 rounded-[2rem] font-black uppercase tracking-[0.5em] text-sm md:text-lg glow-red transition-all hover:scale-105 active:scale-95">COPIAR PROTOCOLO</button>
                 </div>
                 <div className="glass-ios p-14 space-y-12 premium-card border-white/10 flex flex-col justify-between min-h-[400px] shadow-2xl">
                    <div className="space-y-10">
                        <div className="text-[11px] font-black uppercase text-red-600 tracking-[0.5em] bg-red-600/5 px-10 py-4 rounded-full inline-block border border-red-600/20">MODO DIRECT</div>
                        <p className="text-zinc-200 text-3xl md:text-5xl font-black leading-[1.1]">"Vi que você quer evoluir no digital. Já conhece o novo sistema Kades? Tecnologia focada em lucro real por revenda. Quer conhecer?"</p>
                    </div>
                    <button onClick={() => copyToClipboard("Vi que você quer evoluir no digital. Já conhece o novo sistema Kades?")} className="w-full bg-zinc-900 py-10 rounded-[2rem] font-black uppercase tracking-[0.5em] text-sm md:text-lg hover:bg-red-600 transition-colors active:scale-95">COPIAR PROTOCOLO</button>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'links' && (
             <div className="max-w-5xl animate-ios-fade space-y-24 pt-16 mx-auto text-center pb-24">
                <header className="space-y-8">
                  <h3 className="text-7xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">NETWORK <span className="text-red-600">ASSETS</span></h3>
                  <p className="text-zinc-600 font-bold text-2xl md:text-5xl">Ativos e links oficiais de distribuição da rede.</p>
                </header>
                <div className="glass-ios p-14 md:p-32 space-y-20 border-white/10 relative overflow-hidden shadow-3xl">
                   <div className="space-y-14">
                      <div className="flex justify-center text-red-600 scale-[2]"><Icons.Link /></div>
                      <div className="space-y-6">
                        <p className="text-zinc-600 text-[12px] font-black uppercase tracking-[0.6em]">URL DE REVENDA ATIVA</p>
                        <input type="text" readOnly defaultValue={affiliateLink} className="w-full bg-black/50 border border-white/10 p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center text-red-500 font-poppins font-black text-lg md:text-5xl outline-none focus:border-red-600 glow-red shadow-inner"/>
                      </div>
                   </div>
                   <button onClick={() => copyToClipboard(affiliateLink)} className="w-full bg-red-600 py-12 rounded-[2rem] md:rounded-[3rem] font-black uppercase tracking-[0.5em] text-base md:text-3xl glow-red transition-all hover:scale-105 active:scale-95">COPIAR LINK OFICIAL</button>
                   <div className="flex justify-center items-center space-x-6 opacity-50">
                      <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse glow-red"></div>
                      <span className="text-[12px] font-black uppercase tracking-[0.8em]">ACESSO ELITE</span>
                   </div>
                </div>
             </div>
          )}

          {activeTab === 'planeja' && (
            <div className="max-w-5xl animate-ios-fade space-y-24 mx-auto pb-24">
              <header className="space-y-8 text-center">
                <h3 className="text-7xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">SPRINTS <br/><span className="text-red-600">DIÁRIOS</span></h3>
                <p className="text-zinc-600 font-bold text-2xl md:text-5xl">Aceleração de rotina para lucros diários.</p>
              </header>
              <div className="glass-ios p-12 md:p-24 space-y-16 relative overflow-hidden border-white/10 shadow-3xl">
                 <div className="flex justify-between items-end">
                    <div className="space-y-4 text-left">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600"> PERFORMANCE OPERACIONAL</span>
                        <h4 className="text-4xl md:text-7xl font-poppins font-black text-white">{Math.round((checklist.filter(t => t.done).length / checklist.length) * 100)}%</h4>
                    </div>
                    <span className="text-red-600 font-black text-3xl font-poppins">#{checklist.filter(t => t.done).length}/{checklist.length}</span>
                 </div>
                 <div className="w-full h-4 bg-zinc-950 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-red-600 transition-all duration-1000 glow-red" style={{ width: `${(checklist.filter(t => t.done).length / checklist.length) * 100}%` }}></div>
                 </div>
                 <div className="space-y-6">
                    {checklist.map(t => (
                      <div key={t.id} onClick={() => toggleCheck(t.id)} className={`p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border-2 flex items-center gap-10 cursor-pointer transition-all active:scale-95 shadow-lg ${t.done ? 'bg-red-600/5 border-red-600/30 scale-98' : 'bg-black border-white/5'}`}>
                        <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all ${t.done ? 'bg-red-600 border-red-600 glow-red' : 'border-white/10'}`}>
                          {t.done && <Icons.Check />}
                        </div>
                        <span className={`font-poppins font-black text-2xl md:text-6xl tracking-tighter transition-all ${t.done ? 'text-white/20' : 'text-zinc-100'}`}>{t.text}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'treino' && (
            <div className="space-y-24 animate-ios-fade pb-24">
              <header className="space-y-8">
                <h3 className="text-7xl md:text-[10rem] font-poppins font-black text-white uppercase tracking-tighter leading-none">KADES <span className="text-red-600">ACADEMY</span></h3>
                <p className="text-zinc-600 font-bold text-2xl md:text-5xl">Treinamentos focados em ROI imediato sem enrolação.</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                <div className="p-14 md:p-24 glass-ios border-white/10 premium-card group active:scale-95 transition-transform shadow-3xl">
                   <h5 className="font-poppins font-black uppercase text-green-500 text-[12px] mb-12 tracking-[0.6em] flex items-center gap-5">
                     <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></span> ALPHA PATH
                   </h5>
                   <div className="space-y-10 md:space-y-14">
                      <p className="text-white font-poppins font-black text-4xl md:text-7xl leading-none">"Posicionamento dita o lucro."</p>
                      <p className="text-xl md:text-4xl text-zinc-500 leading-tight font-bold">Não venda links, venda o ecossistema. O design premium da Kades faz 70% do fechamento por você.</p>
                   </div>
                </div>
                <div className="p-14 md:p-24 glass-ios border-white/10 premium-card group active:scale-95 transition-transform shadow-3xl">
                   <h5 className="font-poppins font-black uppercase text-red-500 text-[12px] mb-12 tracking-[0.6em] flex items-center gap-5">
                     <span className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444]"></span> CORE RULES
                   </h5>
                   <div className="space-y-10 md:space-y-14">
                      <p className="text-white font-poppins font-black text-4xl md:text-7xl leading-none">"Humanize o Sistema."</p>
                      <p className="text-xl md:text-4xl text-zinc-500 leading-tight font-bold">Scripts são a base, mas sua atitude é o gatilho. Leads de elite buscam consultores de elite.</p>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Navegação Mobile Inferior */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-[110] bg-black/95 backdrop-blur-3xl border-t border-white/10 pb-6 pt-2">
        <div className="flex justify-around items-center h-20 px-6">
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => setActiveTab(item.id)} 
              className={`flex flex-col items-center justify-center gap-2 min-w-[70px] transition-all relative ${
                activeTab === item.id ? 'text-red-600' : 'text-zinc-600'
              }`}
            >
              <div className={`transition-all transform ${activeTab === item.id ? 'scale-125 -translate-y-2' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest transition-opacity ${
                activeTab === item.id ? 'opacity-100' : 'opacity-40'
              }`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <div className="absolute -bottom-2 w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_#ff0000]"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
