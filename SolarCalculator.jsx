import React, { useState } from 'react'
import { MapPin, Zap, Battery, Home, Briefcase, Calculator, ArrowRight, RotateCcw } from 'lucide-react'

const SolarCalculator = ({ onSaveResult }) => {
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
        // Basic logic for demonstration
        const baseSize = formData.bill / 500 // Rough estimate
        const loadMultiplier = formData.appliances.length * 1.5
        const systemSize = Math.max(3, Math.ceil(baseSize + loadMultiplier))

        const costMin = systemSize * 8000
        const costMax = systemSize * 15000
        const savings = formData.bill * 0.9 // Assuming 90% offset

        // Net Metering Logic: 2026 Rate K1.35/kWh
        // Assuming surplus generation of 10kWh/day for 22 equivalent days/month
        const surplusEstimated = systemSize * 2.5 // Rough surplus generated per day
        const netMeteringIncome = surplusEstimated * 30 * 1.35

        setResults({
            size: `${systemSize}kW`,
            cost: `K${costMin.toLocaleString()} - K${costMax.toLocaleString()}`,
            savings: `K${savings.toLocaleString()}`,
            income: `K${Math.round(netMeteringIncome).toLocaleString()}`,
            payback: '3-4 years'
        })
        setStep(5)
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
                                        <div style={{ fontSize: '0.8rem', color: 'var(--sun-orange)', fontWeight: 700 }}>ZESCO Return (K1.35)</div>
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
