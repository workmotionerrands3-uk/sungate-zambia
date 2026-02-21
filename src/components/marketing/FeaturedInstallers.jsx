import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';

const InstallerCard = ({ name, location, rating, jobs, image }) => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
    <div style={{ height: '160px', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={name} />
    </div>
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ffb300', fontWeight: 700 }}>
          <Star size={16} fill="#ffb300" />
          {rating}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '0.9rem', marginBottom: '16px' }}>
        <MapPin size={14} />
        {location}
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#666' }}>{jobs}+ Installations</span>
        <span style={{ color: 'var(--zambia-green)', fontWeight: 700, fontSize: '0.8rem' }}>Verified</span>
      </div>
    </div>
  </div>
);

const FeaturedInstallers = ({ onAuthClick }) => {
  const installers = [
    { name: "SolarPoint Zambia", location: "Lusaka", rating: 4.9, jobs: 120, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" },
    { name: "EcoEnergy Ltd", location: "Ndola", rating: 4.8, jobs: 85, image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" },
    { name: "Sunrise Solutions", location: "Livingstone", rating: 4.7, jobs: 60, image: "https://images.unsplash.com/photo-1624391976761-d7769cdfe378?auto=format&fit=crop&q=80&w=400" }
  ];

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
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            View All Installers <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </div>
        
        <div className="grid grid-3">
          {installers.map((inst, idx) => (
            <InstallerCard key={idx} {...inst} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstallers;
