import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import PublicCalculator from './PublicCalculator';
import FeaturedInstallers from './FeaturedInstallers';
import TrustBadges from './TrustBadges';
import KnowledgeHubPreview from './KnowledgeHubPreview';
import LoadSheddingPulse from './LoadSheddingPulse';

const LandingPage = ({ onAuthClick, zescoRate }) => {
  const handleDashboardClick = () => onAuthClick('user');

  return (
    <div className="landing-page">
      <Hero onDashboardClick={handleDashboardClick} />
      <TrustBadges />
      <Benefits onAuthClick={onAuthClick} />
      <HowItWorks onCalcClick={() => document.getElementById('public-calculator').scrollIntoView({ behavior: 'smooth' })} />
      <section style={{ padding: '40px 0 0' }}>
        <LoadSheddingPulse />
      </section>
      <section id="public-calculator-section">
        <PublicCalculator onAuthClick={onAuthClick} zescoRate={zescoRate} />
      </section>
      <FeaturedInstallers onAuthClick={onAuthClick} />
      <KnowledgeHubPreview />
    </div>
  );
};

export default LandingPage;
