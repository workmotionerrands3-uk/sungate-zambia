import React from 'react';
import { ShieldCheck, ArrowRight, Zap, Award } from 'lucide-react';

const PromotionBanner = ({ onUpgrade }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
      padding: '48px',
      borderRadius: '24px',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(245, 124, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '1000px',
      margin: '40px auto'
    }}>
      {/* Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '6px 16px',
          borderRadius: '99px',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '16px',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <Award size={16} />
          <span>SUN GATE VERIFIED PARTNER</span>
        </div>
        
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: '12px',
          letterSpacing: '-0.02em'
        }}>
          Grow Your Solar Business <br />
          <span style={{ opacity: 0.9 }}>with Our Professional Plans</span>
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.95,
          maxWidth: '600px',
          lineHeight: 1.6,
          marginBottom: '32px'
        }}>
          Get qualified leads, showcase your certifications, and access exclusive wholesale pricing. Join Zambia's largest solar eco-system today.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'white', padding: '8px', borderRadius: '10px' }}>
              <Zap size={20} color="var(--sun-orange)" />
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Real-time Leads</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'white', padding: '8px', borderRadius: '10px' }}>
              <ShieldCheck size={20} color="var(--sun-orange)" />
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Verified Status</div>
          </div>
        </div>
        
        <button 
          onClick={onUpgrade}
          style={{
            background: 'white',
            color: 'var(--sun-orange)',
            border: 'none',
            padding: '18px 36px',
            borderRadius: '16px',
            fontSize: '1.1rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'transform 0.2s ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Upgrade to Professional
          <ArrowRight size={20} />
        </button>
      </div>
      
      {/* Disclaimer */}
      <div style={{
        marginTop: 'auto',
        fontSize: '0.8rem',
        opacity: 0.7,
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        paddingTop: '16px'
      }}>
        * Payment handled securely via WhatsApp Business. Activation within 24 hours.
      </div>
    </div>
  );
};

export default PromotionBanner;
