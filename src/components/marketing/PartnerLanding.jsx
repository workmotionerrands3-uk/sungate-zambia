import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Target, Users, Medal, Wallet, Zap, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import PromotionBanner from '../PromotionBanner';

const PricingTier = ({ name, price, features, highlighted, onSignup }) => (
  <div style={{
    background: 'white',
    padding: '40px',
    borderRadius: '24px',
    border: highlighted ? '2px solid var(--sun-orange)' : '1px solid #eee',
    boxShadow: highlighted ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transform: highlighted ? 'scale(1.05)' : 'none',
    zIndex: highlighted ? 2 : 1
  }}>
    {highlighted && (
      <div style={{
        position: 'absolute',
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--sun-orange)',
        color: 'white',
        padding: '4px 16px',
        borderRadius: '99px',
        fontSize: '0.8rem',
        fontWeight: 800
      }}>
        MOST POPULAR
      </div>
    )}
    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{name}</h3>
    <div style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px', color: 'var(--trust-blue)' }}>
      {price}
      <span style={{ fontSize: '1rem', fontWeight: 500, color: '#888' }}>{price !== 'Free' ? '/month' : ''}</span>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', flex: 1 }}>
      {features.map((f, idx) => (
        <li key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>
          <Check size={18} color="var(--zambia-green)" style={{ flexShrink: 0 }} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={onSignup}
      className={`btn ${highlighted ? 'btn-primary' : 'btn-secondary'}`} 
      style={{ width: '100%' }}
    >
      Get Started
    </button>
  </div>
);

const PartnerLanding = ({ type: propsType, onAuthClick, session, profile }) => {
  const [searchParams] = useSearchParams();
  const typeFromQuery = searchParams.get('type');
  const type = typeFromQuery || propsType || 'installer';
  
  const isInstaller = type === 'installer';
  
  const benefits = isInstaller ? [
    { icon: <Target size={28} />, title: "Qualified Leads", desc: "Leads delivered directly to your dashboard." },
    { icon: <Users size={28} />, title: "Professional Profile", desc: "Showcase your work and photo gallery." },
    { icon: <Medal size={28} />, title: "Trust Reviews", desc: "Build reputation with verified customer feedback." },
    { icon: <Wallet size={28} />, title: "Wholesale Pricing", desc: "Access bulk rates from our supplier network." },
    { icon: <ShieldCheck size={28} />, title: "SunGate Verified", desc: "Get the badge that proves your excellence." },
    { icon: <Zap size={28} />, title: "Growth Tools", desc: "Analytics and tools to scale your business." }
  ] : [
    { icon: <Target size={28} />, title: "Active Buyers", desc: "Reach thousands of customers looking for solar." },
    { icon: <Users size={28} />, title: "Supplier Portal", desc: "Manage listings and inquiries in one place." },
    { icon: <Medal size={28} />, title: "Brand Exposure", desc: "Showcase your products to Zambia's largest solar community." },
    { icon: <Wallet size={28} />, title: "Direct Inquiries", desc: "Customers can request quotes directly for your items." },
    { icon: <ShieldCheck size={28} />, title: "Market Insights", desc: "See what products are in high demand." },
    { icon: <Zap size={28} />, title: "Verified Listings", desc: "Gain trust with the SunGate Verified seal." }
  ];

  const pricing = isInstaller ? [
    { name: "Basic", price: "Free", features: ["Limited profile", "Pay per lead (K50)", "Standard support", "Basic analytics"] },
    { name: "Professional", price: "K500", highlighted: true, features: ["Full professional profile", "10 leads included", "Priority support", "SunGate Verified Badge"] },
    { name: "Premium", price: "K1,500", features: ["Top placement in directory", "Unlimited leads", "Dedicated account manager", "Featured on homepage"] }
  ] : [
    { name: "Starter", price: "Free", features: ["Up to 5 product listings", "Standard inquiry handling", "Basic shop profile"] },
    { name: "Business", price: "K750", highlighted: true, features: ["Unlimited product listings", "Priority in search results", "Direct WhatsApp integration", "Verified Supplier Badge"] },
    { name: "Enterprise", price: "Custom", features: ["Banner ads on marketplace", "API integration", "Market trend reports", "Bulk marketing tools"] }
  ];

  return (
    <div style={{ background: 'white' }}>
      {/* Hero */}
      <section style={{ padding: '100px 0', background: isInstaller ? 'var(--trust-blue)' : 'var(--sun-orange)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '16px' }}>
            {isInstaller ? 'Partner with SunGate Zambia' : 'Sell on Zambia\'s Solar Marketplace'}
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px' }}>
            Join Zambia's fastest-growing solar platform and grow your business today.
          </p>
          <button 
            onClick={() => onAuthClick(isInstaller ? 'installer' : 'supplier', 'General Partnership')}
            className="btn" 
            style={{ background: 'white', color: isInstaller ? 'var(--trust-blue)' : 'var(--sun-orange)', padding: '16px 32px' }}
          >
            {session ? 'Upgrade My Account' : `Create ${isInstaller ? 'Installer' : 'Supplier'} Account`}
            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '40px' }}>
            {benefits.map((b, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ color: isInstaller ? 'var(--trust-blue)' : 'var(--sun-orange)', flexShrink: 0 }}>
                  {b.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{b.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Flexible Pricing for Everyone</h2>
            <p style={{ color: '#666' }}>Choose the plan that fits your business stage.</p>
          </div>
          <div className="grid grid-3" style={{ gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
            {pricing.map((p, idx) => (
              <PricingTier 
                key={idx} 
                {...p} 
                onSignup={() => onAuthClick(isInstaller ? 'installer' : 'supplier', p.name, p.price)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA - Replaced with PromotionBanner */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <PromotionBanner onUpgrade={() => onAuthClick(isInstaller ? 'installer' : 'supplier', 'Professional Partnership Plan')} />
        </div>
      </section>
    </div>
  );
};

export default PartnerLanding;
