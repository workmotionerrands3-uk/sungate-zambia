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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 300px' }}>
        <div style={{ 
          width: '64px', 
          height: '64px', 
          borderRadius: '50%', 
          background: status.isEmergency ? 'rgba(211, 47, 47, 0.1)' : 'rgba(25, 135, 84, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse-soft 2s infinite'
        }}>
          <AlertTriangle color={status.isEmergency ? 'var(--error)' : 'var(--zambia-green)'} size={32} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
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
        gap: '12px', 
        flex: '1 1 200px',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }} className="mobile-stack">
        <div style={{ textAlign: 'right' }} className="mobile-center">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            Stage {status.stage}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#999', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }} className="mobile-center">
            <Clock size={12} /> {status.lastUpdated}
          </div>
        </div>
        <a 
          href="https://www.zesco.co.zm/customerCare/loadShedding" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ 
            padding: '12px 20px', 
            fontSize: '0.85rem',
            background: 'var(--trust-blue)',
            color: 'white'
          }}
        >
          View Full Schedule
          <ExternalLink size={14} style={{ marginLeft: '8px' }} />
        </a>
      </div>
    </div>
  );
};

export default LoadSheddingPulse;
