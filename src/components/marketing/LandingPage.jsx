import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import HowItWorks from './HowItWorks';
import PublicCalculator from './PublicCalculator';
import FeaturedInstallers from './FeaturedInstallers';
import TrustBadges from './TrustBadges';
import KnowledgeHubPreview from './KnowledgeHubPreview';
import MarketingFooter from './MarketingFooter';

const LandingPage = ({ onAuthClick }) => {
  const handleDashboardClick = () => onAuthClick('user');

  return (
    <div className="landing-page">
      <Hero onDashboardClick={handleDashboardClick} />
      <TrustBadges />
      <Benefits onAuthClick={onAuthClick} />
      <HowItWorks onCalcClick={() => document.getElementById('public-calculator').scrollIntoView({ behavior: 'smooth' })} />
      <section id="public-calculator-section">
        <PublicCalculator onAuthClick={onAuthClick} />
      </section>
      <FeaturedInstallers onAuthClick={onAuthClick} />
      <KnowledgeHubPreview />
      <MarketingFooter onDashboardClick={handleDashboardClick} />
    </div>
  );
};

export default LandingPage;
