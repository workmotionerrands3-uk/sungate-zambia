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
        <div 
          className="animate-slide-up glass-dark" 
          style={{ 
            maxWidth: '850px', 
            margin: '0 auto', 
            padding: '60px 40px', 
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div
            className="badge"
            style={{
              marginBottom: '24px',
              background: 'rgba(25, 135, 84, 0.2)',
              color: 'white',
              border: '1px solid rgba(25, 135, 84, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
              padding: '8px 20px',
              fontSize: '0.85rem'
            }}
          >
            <ShieldCheck
              size={18}
              style={{ marginRight: '8px', color: '#4ade80' }}
            />
            Zambia's #1 Renewable Energy Marketplace
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1,
              color: 'white',
              letterSpacing: '-0.02em'
            }}
          >
            Powering Zambia <br />
            With <span style={{ 
              color: 'var(--sun-orange)',
              background: 'linear-gradient(to right, #FFB300, #FF6F00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Sustainable Energy</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '48px',
              maxWidth: '700px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            Join 5,000+ Zambian homes and businesses comparing certified installers and finding quality solar products daily.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '48px'
            }}
          >
            <button
              onClick={onDashboardClick}
              className="btn btn-primary"
              style={{ 
                padding: '18px 36px', 
                fontSize: '1.1rem',
                boxShadow: '0 10px 20px rgba(255, 111, 0, 0.3)'
              }}
            >
              Get My Solar Quote
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <a
              href="#calculator"
              className="btn"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.1rem',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)'
              }}
            >
              Calculate Savings
            </a>
          </div>

          {/* Payment Logos Section */}
          <div style={{ 
            marginTop: '20px', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              SECURE PAYMENTS VIA
            </span>
            <div style={{ display: 'flex', gap: '32px', opacity: 0.9, alignItems: 'center' }}>
              <img src="/assets/payments/airtel_money.png" alt="Airtel Money" style={{ height: '40px', objectFit: 'contain' }} />
              <img src="/assets/payments/mtn_momo.png" alt="MTN MoMo" style={{ height: '40px', objectFit: 'contain' }} />
              <img src="/assets/payments/zamtel.png" alt="Zamtel" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
