import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = ({ onDashboardClick }) => {
  return (
    <section 
      className="animate-fade-in"
      style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        background: '#0a0a0a',
        textAlign: 'center'
      }}
    >
      {/* Background with zoom effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1500")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="animate-slide-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="badge badge-verified"
            style={{
              marginBottom: '24px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.4)',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ShieldCheck
              size={16}
              style={{ marginRight: '8px', color: 'var(--sun-gold)' }}
            />
            Zambia's Trusted Solar Marketplace
          </div>
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              color: 'white'
            }}
          >
            Zambia's Trusted <br />
            <span style={{ color: 'var(--sun-orange)' }}>Solar Marketplace</span>
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#f0f0f0',
              marginBottom: '48px',
              maxWidth: '700px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            Compare certified installers, calculate your savings, and find quality solar products—all in one place.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <button
              onClick={onDashboardClick}
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '1.1rem' }}
            >
              Access Your Solar Dashboard
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <a
              href="#how-it-works"
              className="btn"
              style={{
                background: 'white',
                color: 'var(--trust-blue)',
                padding: '16px 32px',
                fontSize: '1.1rem',
                fontWeight: 700,
              }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
