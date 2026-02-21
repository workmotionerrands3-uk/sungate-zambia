import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const BenefitCard = ({ title, benefits, ctaText, onCtaClick, type }) => {
  const isBusiness = type === 'business';
  const isPartner = type === 'partner';

  return (
    <div
      className="hover-lift"
      style={{
        padding: '40px',
        borderRadius: '24px',
        background: isBusiness ? '#f0f7ff' : isPartner ? '#f0fff4' : 'white',
        border: '1px solid #eee',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <h3 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--trust-blue)' }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1 }}>
        {benefits.map((benefit, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '16px', color: 'var(--text-muted)' }}>
            <CheckCircle size={20} color="var(--zambia-green)" style={{ flexShrink: 0 }} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onCtaClick}
        className={`btn ${isBusiness ? 'btn-secondary' : isPartner ? 'btn-primary' : 'btn-primary'}`}
        style={{ width: '100%' }}
      >
        {ctaText}
        <ArrowRight size={18} style={{ marginLeft: '8px' }} />
      </button>
    </div>
  );
};

const Benefits = ({ onAuthClick }) => {
  return (
    <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div className="grid grid-3" style={{ gap: '32px' }}>
          {/* Homeowners */}
          <BenefitCard
            title="Stop Load-Shedding. Start Saving."
            benefits={[
              "Compare quotes from 3+ certified installers",
              "Calculate exact system size for your home",
              "Know your tax savings (0% duty & VAT)",
              "Track installation progress"
            ]}
            ctaText="Get Started"
            onCtaClick={() => onAuthClick('user')}
            type="homeowner"
          />

          {/* Businesses */}
          <BenefitCard
            title="Keep Your Business Running"
            benefits={[
              "Commercial solar ROI calculator",
              "Verified business installers",
              "Financing options display",
              "24/7 power during outages"
            ]}
            ctaText="Business Solutions"
            onCtaClick={() => onAuthClick('user')}
            type="business"
          />

          {/* Partners */}
          <BenefitCard
            title="Grow Your Solar Business"
            benefits={[
              "Get qualified customer leads",
              "Showcase your work to thousands",
              "\"SunGate Verified\" trust badge",
              "Access to supplier network"
            ]}
            ctaText="Join as Partner"
            onCtaClick={() => onAuthClick('installer')}
            type="partner"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
