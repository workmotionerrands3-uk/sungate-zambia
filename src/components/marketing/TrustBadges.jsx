import React from 'react';
import { ShieldCheck, Award, Zap, Heart } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    { icon: <ShieldCheck size={32} color="var(--sun-orange)" />, title: "Government Tax Exemptions", desc: "0% duty & VAT on solar equipment" },
    { icon: <Award size={32} color="var(--trust-blue)" />, title: "ERB Certified Installers", desc: "Vetted technicians only" },
    { icon: <Zap size={32} color="var(--zambia-green)" />, title: "100+ Systems Installed", desc: "Trusted by Zambian homeowners" },
    { icon: <Heart size={32} color="#ff4d4d" />, title: "Best Price Guarantee", desc: "We match verified competitor quotes" }
  ];

  return (
    <section style={{ padding: '60px 0', background: '#f8f9fa', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: '30px' }}>
          {badges.map((badge, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ marginBottom: '16px', padding: '16px', background: 'white', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                {badge.icon}
              </div>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px' }}>{badge.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#888', margin: 0 }}>{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
