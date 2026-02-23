import React, { useState } from 'react'
import { MapPin, Zap, Battery, Home, Briefcase, Calculator, ArrowRight, RotateCcw } from 'lucide-react'

const SolarCalculator = ({ onSaveResult, zescoRate = 1.35 }) => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        location: '',
        bill: 1500,
        appliances: [],
        battery: 'yes'
    })
    const [results, setResults] = useState(null)

    const locations = ['Lusaka', 'Ndola', 'Livingstone', 'Kitwe', 'Rural Area', 'Other']
    const applianceOptions = [
        { id: 'lights', label: 'Lights + Phone charging', icon: <Zap size={18} /> },
        { id: 'fridge', label: 'Fridge + TV', icon: <Home size={18} /> },
        { id: 'borehole', label: 'Full house + Borehole', icon: <Zap size={18} /> },
        { id: 'business', label: 'Business/Shop', icon: <Briefcase size={18} /> }
    ]

    const handleApplianceToggle = (id) => {
        setFormData(prev => ({
            ...prev,
            appliances: prev.appliances.includes(id)
                ? prev.appliances.filter(a => a !== id)
                : [...prev.appliances, id]
        }))
    }

    const calculateSystem = () => {
        // 2026 ZESCO Residential Tariffs (MYTF Framework)
        // R1: 0-100kWh @ K0.54
        // R2: 101-300kWh @ K1.28
        // R3: 301-500kWh @ K2.07
        // R4: >500kWh @ K3.23

        // Function to find kWh from monthly bill (inverse of tiered pricing)
        const getKWhFromBill = (bill) => {
            if (bill <= 54) return bill / 0.54;
            if (bill <= 310) return 100 + (bill - 54) / 1.28;
            if (bill <= 724) return 300 + (bill - 310) / 2.07;
            return 500 + (bill - 724) / 3.23;
        };

        const monthlyKWh = getKWhFromBill(formData.bill);
        const dailyKWh = monthlyKWh / 30;

        // Peak sun hours in Zambia: ~5.5 hours average
        const peakSunHours = 5.5;
        
        // Sizing: Target 110% of daily consumption to account for charging efficiency
        // Min system size 3kW for stability, Max 15kW for residential
        let suggestedSize = (dailyKWh / peakSunHours) * 1.1;
        
        // Factor in appliance multipliers
        const loadMultiplier = formData.appliances.length * 0.8; 
        suggestedSize = Math.max(3, Math.ceil(suggestedSize + loadMultiplier));
        
        // Residential limit check
        const systemSize = Math.min(15, suggestedSize);

        // Updated Market Costs (K15,000 to K25,000 per kW installed)
        // Higher end includes better battery/inverter combinations
        const costMin = systemSize * 15000;
        const costMax = systemSize * 25000;

        // Monthly savings: Assuming solar covers 85% of load
        // We calculate savings based on the highest tiers first (most offset value)
        const savingsPercentage = 0.85;
        const offsetKWh = monthlyKWh * savingsPercentage;
        
        let savingsTotal = 0;
        let remainingOffset = offsetKWh;
        
        // Savings logic: Start from the highest tier consumed
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

        // Net Metering/Surplus: Rough surplus estimation (25% of generation)
        const totalGenerationMonthly = systemSize * peakSunHours * 30;
        const surplusEstimated = Math.max(0, totalGenerationMonthly - offsetKWh);
        const netMeteringIncome = surplusEstimated * zescoRate; // Using the provided export rate

        // Dynamic Payback Period
        const averageCost = (costMin + costMax) / 2;
        const yearlySavings = (savingsTotal + netMeteringIncome) * 12;
        const paybackYears = averageCost / yearlySavings;

        setResults({
            size: `${systemSize}kW`,
            cost: `K${costMin.toLocaleString()} - K${costMax.toLocaleString()}`,
            savings: `K${Math.round(savingsTotal).toLocaleString()}`,
            income: `K${Math.round(netMeteringIncome).toLocaleString()}`,
            payback: `${paybackYears.toFixed(1)} years`
        });
        setStep(5);
    }

    const reset = () => {
        setStep(1)
        setFormData({ location: '', bill: 1500, appliances: [], battery: 'yes' })
        setResults(null)
    }

    return (
        <section id="calculator" style={{ padding: 'var(--section-padding)', background: 'var(--bg-off-white)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Solar Savings Calculator</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Get a personalized estimate for your solar journey in Zambia.</p>
                </div>

                <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                    {step === 1 && (
                        <div className="calc-step">
                            <h3 style={{ marginBottom: '24px' }}><MapPin size={24} color="var(--sun-orange)" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> Step 1: Where in Zambia are you?</h3>
                            <div className="grid grid-2" style={{ gap: '12px' }}>
                                {locations.map(loc => (
                                    <button
                                        key={loc}
                                        onClick={() => { setFormData({ ...formData, location: loc }); setStep(2); }}
                                        style={{
                                            padding: '16px', borderRadius: 'var(--radius-md)', border: '2px solid #eee',
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
                        <div className="calc-step">
                            <h3 style={{ marginBottom: '24px' }}>Step 2: What's your monthly ZESCO bill?</h3>
                            <div style={{ padding: '20px 0' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--zambia-green)', textAlign: 'center', marginBottom: '20px' }}>
                                    K{formData.bill.toLocaleString()}
                                </div>
                                <input
                                    type="range" min="200" max="5000" step="100"
                                    value={formData.bill}
                                    onChange={(e) => setFormData({ ...formData, bill: parseInt(e.target.value) })}
                                    style={{ width: '100%', accentColor: 'var(--sun-orange)' }}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#999', fontSize: '0.9rem' }}>
                                    <span>K200</span>
                                    <span>K5,000+</span>
                                </div>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px' }} onClick={() => setStep(3)}>
                                Next Step <ArrowRight size={18} />
                            </button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="calc-step">
                            <h3 style={{ marginBottom: '24px' }}>Step 3: What do you want to power?</h3>
                            <div className="grid grid-2" style={{ gap: '12px' }}>
                                {applianceOptions.map(opt => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleApplianceToggle(opt.id)}
                                        style={{
                                            padding: '16px', borderRadius: 'var(--radius-md)', border: '2px solid #eee',
                                            background: formData.appliances.includes(opt.id) ? 'var(--sky-blue)' : 'white',
                                            borderColor: formData.appliances.includes(opt.id) ? 'var(--trust-blue)' : '#eee',
                                            fontWeight: 600, textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px'
                                        }}
                                    >
                                        {opt.icon} {opt.label}
                                    </button>
                                ))}
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px' }} onClick={() => setStep(4)}>
                                Next Step <ArrowRight size={18} />
                            </button>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="calc-step">
                            <h3 style={{ marginBottom: '24px' }}>Step 4: Need battery backup for load-shedding?</h3>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button
                                    onClick={() => setFormData({ ...formData, battery: 'yes' })}
                                    style={{
                                        flex: 1, padding: '20px', borderRadius: 'var(--radius-md)', border: '2px solid #eee',
                                        background: formData.battery === 'yes' ? 'var(--sky-blue)' : 'white',
                                        borderColor: formData.battery === 'yes' ? 'var(--trust-blue)' : '#eee',
                                        fontWeight: 700
                                    }}
                                >
                                    Yes, Full Backup
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, battery: 'no' })}
                                    style={{
                                        flex: 1, padding: '20px', borderRadius: 'var(--radius-md)', border: '2px solid #eee',
                                        background: formData.battery === 'no' ? 'var(--sky-blue)' : 'white',
                                        borderColor: formData.battery === 'no' ? 'var(--trust-blue)' : '#eee',
                                        fontWeight: 700
                                    }}
                                >
                                    No, Daytime Only
                                </button>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px', background: 'var(--zambia-green)' }} onClick={calculateSystem}>
                                Calculate My System <Calculator size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>
                    )}

                    {step === 5 && results && (
                        <div className="results-step" style={{ textAlign: 'center' }}>
                            <div style={{ background: 'var(--sky-blue)', padding: '30px', borderRadius: 'var(--radius-md)', marginBottom: '30px' }}>
                                <h3 style={{ color: 'var(--trust-blue)', marginBottom: '20px' }}>Recommended System for {formData.location}</h3>
                                <div className="grid grid-2" style={{ gap: '20px' }}>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>System Size</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{results.size}</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Est. Cost</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>{results.cost}</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monthly Saving</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--zambia-green)' }}>{results.savings}</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sun-orange)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--sun-orange)', fontWeight: 700 }}>ZESCO Return (K{zescoRate})</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{results.income}</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: 'var(--radius-sm)' }}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Payback Time</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{results.payback}</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#installers" className="btn btn-primary" style={{ width: '100%' }}>
                                    Get Quotes from Certified Installers
                                </a>
                                <button
                                    className="btn btn-secondary"
                                    style={{ width: '100%', background: 'var(--sky-blue)', border: '1px solid var(--trust-blue)', color: 'var(--trust-blue)' }}
                                    onClick={() => onSaveResult({
                                        bill: formData.bill,
                                        systemSize: parseFloat(results.size),
                                        estimatedCost: parseInt(results.cost.split(' ')[0].replace('K', '').replace(',', ''))
                                    })}
                                >
                                    Save Results to Dashboard
                                </button>
                                <button className="btn btn-secondary" style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--trust-blue)' }} onClick={reset}>
                                    <RotateCcw size={16} /> Start Over
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SolarCalculator
