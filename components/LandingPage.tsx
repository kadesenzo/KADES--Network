
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import TargetAudience from './TargetAudience';
import SupportSystem from './SupportSystem';
import Community from './Community';
import SocialProof from './SocialProof';
import Footer from './Footer';

interface LandingPageProps {
  onAccessSystem: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAccessSystem }) => {
  return (
    <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
      <Header onAccessSystem={onAccessSystem} />
      <main>
        <Hero onAccessSystem={onAccessSystem} />
        <HowItWorks />
        <TargetAudience />
        <SupportSystem />
        <Community />
        <SocialProof />
      </main>
      <Footer onAccessSystem={onAccessSystem} />
    </div>
  );
};

export default LandingPage;
