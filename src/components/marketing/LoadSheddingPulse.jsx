import React from 'react';
import { Zap, Clock, AlertTriangle, ExternalLink } from 'lucide-react';

const LoadSheddingPulse = () => {
  // Simulated dynamic state - could be fetched from an API in future
  const status = {
    stage: 2,
    intensity: 'High',
    lastUpdated: '10 mins ago',
    message: 'Emergency 12-hour schedules active due to Kariba water levels.',
    isEmergency: true
  };

  return (
    <div 
      className="glass"
      style={{
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '800px',
        margin: '0 auto 40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '24px',
        border: '1px solid rgba(25, 135, 84, 0.3)',
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 auto', minWidth: '280px' }} className="mobile-center">
        <div style={{ 
          width: '64px', 
          height: '64px', 
          borderRadius: '50%', 
          background: status.isEmergency ? 'rgba(211, 47, 47, 0.1)' : 'rgba(25, 135, 84, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          animation: 'pulse-soft 2s infinite'
        }}>
          <AlertTriangle color={status.isEmergency ? 'var(--error)' : 'var(--zambia-green)'} size={32} />
        </div>
        <div className="mobile-center">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }} className="mobile-center">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--error)' }}>
              LIVE PULSE
            </span>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--error)' }} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--trust-blue)' }}>
            ZESCO Load-Shedding {status.intensity}
          </h3>
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {status.message}
          </p>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '250px'
      }} className="mobile-stack">
        <div style={{ textAlign: 'right', minWidth: '150px' }} className="mobile-center">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            Stage {status.stage}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', marginBottom: '8px' }} className="mobile-center">
            <Clock size={12} /> {status.lastUpdated}
          </div>
          <div style={{ 
            background: 'rgba(25, 135, 84, 0.1)', 
            padding: '4px 8px', 
            borderRadius: '6px', 
            fontSize: '0.7rem', 
            fontWeight: 700,
            color: 'var(--zambia-green)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Zap size={10} /> DIAL *360# (FASTEST)
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="mobile-full">
          <a 
            href="https://www.zesco.co.zm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary mobile-full"
            style={{ 
              padding: '12px 20px', 
              fontSize: '0.85rem',
              background: 'var(--trust-blue)',
              color: 'white',
              whiteSpace: 'nowrap'
            }}
          >
            Check Web Portal
            <ExternalLink size={14} style={{ marginLeft: '8px' }} />
          </a>
          <span style={{ fontSize: '0.65rem', color: '#999', textAlign: 'center' }}>
            Or dial *360# for instant schedule
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadSheddingPulse;
