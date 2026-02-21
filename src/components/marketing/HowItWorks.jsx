import React from 'react';
import { Calculator, Users, Zap } from 'lucide-react';

const HowItWorks = ({ onCalcClick }) => {
  const steps = [
    {
      icon: <Calculator size={40} color="var(--trust-blue)" />,
      title: "1. Calculate",
      description: "Use our solar calculator (free, no login required for basic version)",
      color: "var(--sky-blue)"
    },
    {
      icon: <Users size={40} color="#ff6f00" />,
      title: "2. Compare",
      description: "Get quotes from 3+ certified installers",
      color: "#fff8e1"
    },
    {
      icon: <Zap size={40} color="#var(--zambia-green)" />,
      title: "3. Save",
      description: "Track installation and start saving",
      color: "#e8f5e9"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'white' }} id="how-it-works">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              color: 'var(--trust-blue)',
              marginBottom: '16px',
            }}
          >
            How SunGate Works
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Get verified solar power in 3 simple steps
          </p>
        </div>
        <div className="grid grid-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: '40px',
                background: step.color,
                borderRadius: '24px',
                transition: 'transform 0.3s ease',
              }}
              className="how-it-works-card"
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {step.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
