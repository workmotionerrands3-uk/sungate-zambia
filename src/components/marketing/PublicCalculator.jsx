import React, { useState } from 'react';
import { MapPin, Zap, Calculator, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';

const PublicCalculator = ({ onAuthClick, zescoRate = 2.50 }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    bill: 1500,
    appliances: []
  });
  const [results, setResults] = useState(null);

  const locations = ['Lusaka', 'Ndola', 'Livingstone', 'Kitwe', 'Copperbelt', 'Other'];
  
  const applianceOptions = [
    { id: 'lights', label: 'Lights + Charging', icon: <Zap size={18} /> },
    { id: 'fridge', label: 'Fridge + TV', icon: <Zap size={18} /> },
    { id: 'borehole', label: 'Borehole/Pump', icon: <Zap size={18} /> },
    { id: 'business', label: 'Business Gear', icon: <Zap size={18} /> }
  ];

  const handleApplianceToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      appliances: prev.appliances.includes(id)
        ? prev.appliances.filter(a => a !== id)
        : [...prev.appliances, id]
    }));
  };

  const calculateBasic = () => {
    // 2026 ZESCO Residential Tariffs (MYTF Framework)
    const getKWhFromBill = (bill) => {
        if (bill <= 54) return bill / 0.54;
        if (bill <= 310) return 100 + (bill - 54) / 1.28;
        if (bill <= 724) return 300 + (bill - 310) / 2.07;
        return 500 + (bill - 724) / 3.23;
    };

    const monthlyKWh = getKWhFromBill(formData.bill);
    const dailyKWh = monthlyKWh / 30;
    const peakSunHours = 5.5;

    // Simplified sizing for public estimator
    let suggestedSize = (dailyKWh / peakSunHours) * 1.1;
    const loadMultiplier = formData.appliances.length * 0.8;
    const systemSize = Math.max(2, Math.min(15, Math.ceil(suggestedSize + loadMultiplier)));

    // Market Costs
    const costMin = systemSize * 15000;
    const costMax = systemSize * 25000;

    // Savings Calculation (85% coverage)
    const offsetKWh = monthlyKWh * 0.85;
    let savingsTotal = 0;
    let remainingOffset = offsetKWh;
    
    if (monthlyKWh > 500) {
        const tier4Usage = monthlyKWh - 500;
        const offsetInTier4 = Math.min(remainingOffset, tier4Usage);
        savingsTotal += offsetInTier4 * 3.23;
        remainingOffset -= offsetInTier4;
    }
    if (remainingOffset > 0 && monthlyKWh > 300) {
        const tier3Usage = Math.min(200, monthlyKWh - 300);
        const offsetInTier3 = Math.min(remainingOffset, tier3Usage);
        savingsTotal += offsetInTier3 * 2.07;
        remainingOffset -= offsetInTier3;
    }
    if (remainingOffset > 0 && monthlyKWh > 100) {
        const tier2Usage = Math.min(200, monthlyKWh - 100);
        const offsetInTier2 = Math.min(remainingOffset, tier2Usage);
        savingsTotal += offsetInTier2 * 1.28;
        remainingOffset -= offsetInTier2;
    }
    if (remainingOffset > 0) {
        savingsTotal += remainingOffset * 0.54;
    }

    setResults({
      size: `${systemSize}kW`,
      cost: `K${costMin.toLocaleString()} - K${costMax.toLocaleString()}`,
      savings: `K${Math.round(savingsTotal).toLocaleString()}`
    });
    setStep(4);
  };

  const reset = () => {
    setStep(1);
    setFormData({ location: '', bill: 1500, appliances: [] });
    setResults(null);
  };

  return (
    <section id="public-calculator" style={{ padding: '80px 0', background: 'var(--bg-off-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Solar Savings Estimator</h2>
          <p style={{ color: 'var(--text-muted)' }}>Quick estimate for your solar needs. No login required.</p>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid #eee' }}>
          {step === 1 && (
            <div>
              <h3 style={{ marginBottom: '24px' }}><MapPin size={24} color="var(--sun-orange)" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Step 1: Your Location</h3>
              <div className="grid grid-2" style={{ gap: '12px' }}>
                {locations.map(loc => (
                  <button
                    key={loc}
                    onClick={() => { setFormData({ ...formData, location: loc }); setStep(2); }}
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #eee',
                      background: formData.location === loc ? 'var(--sky-blue)' : 'white',
                      borderColor: formData.location === loc ? 'var(--trust-blue)' : '#eee',
                      fontWeight: 600, textAlign: 'left'
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ marginBottom: '24px' }}>Step 2: Average Monthly Bill</h3>
              <div style={{ padding: '20px 0' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--zambia-green)', textAlign: 'center', marginBottom: '20px' }}>
                  K{formData.bill.toLocaleString()}
                </div>
                <input
                  type="range" min="300" max="10000" step="100"
                  value={formData.bill}
                  onChange={(e) => setFormData({ ...formData, bill: parseInt(e.target.value) })}
                  style={{ width: '100%', accentColor: 'var(--sun-orange)', height: '8px', borderRadius: '4px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#999', fontSize: '0.9rem' }}>
                  <span>K300</span>
                  <span>K10,000+</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px' }} onClick={() => setStep(3)}>
                Next Step <ArrowRight size={18} />
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ marginBottom: '24px' }}>Step 3: What appliances are essential?</h3>
              <div className="grid grid-2" style={{ gap: '12px' }}>
                {applianceOptions.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleApplianceToggle(opt.id)}
                    style={{
                      padding: '16px', borderRadius: '12px', border: '2px solid #eee',
                      background: formData.appliances.includes(opt.id) ? 'var(--sky-blue)' : 'white',
                      borderColor: formData.appliances.includes(opt.id) ? 'var(--trust-blue)' : '#eee',
                      fontWeight: 600, textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px'
                    }}
                  >
                    {opt.icon} {opt.label}
                  </button>
                ))}
              </div>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px' }} onClick={calculateBasic}>
                Estimate Savings <Calculator size={18} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          )}

          {step === 4 && results && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#f0f7ff', padding: '32px', borderRadius: '20px', marginBottom: '32px' }}>
                <h3 style={{ color: 'var(--trust-blue)', marginBottom: '24px' }}>Your Basic Solar Estimate</h3>
                <div className="grid grid-3" style={{ gap: '16px' }}>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>System Size</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{results.size}</div>
                  </div>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Cost Range</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>{results.cost}</div>
                  </div>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Est. Savings</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--zambia-green)' }}>{results.savings}</div>
                  </div>
                </div>
              </div>

              <div style={{ 
                background: '#fff8e1', 
                padding: '24px', 
                borderRadius: '16px', 
                border: '1px solid #ffd54f',
                marginBottom: '32px',
                textAlign: 'left',
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}>
                <AlertCircle color="#ff8f00" size={32} style={{ flexShrink: 0 }} />
                <div>
                    <p style={{ fontWeight: 700, color: '#ff8f00', marginBottom: '4px' }}>Want a precise quote?</p>
                    <p style={{ fontSize: '0.9rem', color: '#5d4037' }}>For detailed quotes from 3 certified installers and load-shedding analysis, create your free account.</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <button 
                  onClick={() => onAuthClick('user')}
                  className="btn btn-primary" 
                  style={{ width: '100%', fontSize: '1.1rem', padding: '18px' }}
                >
                  Get Full Quotes & Analysis
                  <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                </button>
                <button 
                  className="btn" 
                  style={{ background: 'transparent', color: 'var(--trust-blue)', border: 'none' }} 
                  onClick={reset}
                >
                  <RotateCcw size={16} /> Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicCalculator;
