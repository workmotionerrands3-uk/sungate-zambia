import React, { useState, useEffect } from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const FALLBACK_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f4f8'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%23e2e8f0'/%3E%3Cpath d='M50 35v30M35 50h30' stroke='%2394a3b8' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E";

const InstallerCard = ({ name, location, rating, projects, logo }) => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
    <div style={{ height: '160px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
            src={logo || FALLBACK_LOGO} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            alt={name} 
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_LOGO; }}
        />
    </div>
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffb300', fontWeight: 700 }}>
          <Star size={16} fill="#ffb300" />
          {rating || '5.0'}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.9rem', marginBottom: '16px' }}>
        <MapPin size={14} />
        {location}
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#666' }}>{projects || 0}+ Installations</span>
        <span style={{ color: 'var(--zambia-green)', fontWeight: 700, fontSize: '0.8rem' }}>Verified</span>
      </div>
    </div>
  </div>
);

const FeaturedInstallers = ({ onAuthClick }) => {
  const [installers, setInstallers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstallers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('installers')
          .select('*')
          .eq('certified', true)
          .limit(3);

        if (error) throw error;
        setInstallers(data || []);
      } catch (err) {
        console.error('Error fetching installers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstallers();
  }, []);

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Featured Certified Installers</h2>
            <p style={{ color: 'var(--text-muted)' }}>Work with the best technicians, vetted by SunGate.</p>
          </div>
          <button 
            onClick={() => onAuthClick('user')}
            className="btn btn-secondary" 
            style={{ padding: '12px 24px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            View All Installers <ArrowRight size={18} />
          </button>
        </div>
        
        {loading ? (
          <div className="grid grid-3">
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: '300px', background: '#f8f9fa', borderRadius: '16px', animation: 'pulse 1.5s infinite' }}></div>
            ))}
          </div>
        ) : installers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '16px' }}>
            <p style={{ color: '#666' }}>Connecting you with certified Zambian installers soon.</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {installers.map((inst) => (
              <InstallerCard key={inst.id} {...inst} />
            ))}
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedInstallers;
