import React from 'react'
import { ArrowRight, ShieldCheck, TrendingUp, Users, Building, Tool, CheckCircle, Store, Zap } from 'lucide-react'

const PartnerOnboarding = ({ onMemberClick }) => {
    return (
        <section id="partners" style={{ background: '#fff' }}>
            {/* Hero Section */}
            <div style={{ 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
                color: 'white', 
                padding: '100px 0',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="badge" style={{ 
                        background: 'rgba(255,152,0,0.1)', 
                        color: 'var(--sun-orange)', 
                        border: '1px solid rgba(255,152,0,0.2)',
                        marginBottom: '24px'
                    }}>
                        Partnership Program 2026
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.03em' }}>
                        Grow Your Solar Business <br/> 
                        <span style={{ color: 'var(--sun-gold)' }}>with SunGate Zambia</span>
                    </h1>
                    <p style={{ opacity: 0.8, fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 40px' }}>
                        Connect with thousands of ready-to-buy customers, automate your sales, and build trust with the SunGate Verified badge.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button 
                            onClick={() => onMemberClick('installer')} 
                            className="btn btn-primary" 
                            style={{ padding: '16px 32px', fontSize: '1.1rem' }}
                        >
                            Become an Installer <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                        <button 
                            onClick={() => onMemberClick('supplier')} 
                            className="btn btn-secondary" 
                            style={{ padding: '16px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            Register as Supplier
                        </button>
                    </div>
                </div>
                
                {/* Decorative background elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,152,0,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(74,144,226,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
            </div>

            {/* Value Propositions */}
            <div style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Why Partner with Us?</h2>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>We provide the tools and platform you need to scale your renewable energy operations in Zambia.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        {[
                            { 
                                icon: <TrendingUp size={32} color="var(--sun-orange)" />, 
                                title: "Incremental Sales", 
                                desc: "Access a constant stream of high-quality leads from customers using our solar calculator and marketplace." 
                            },
                            { 
                                icon: <ShieldCheck size={32} color="var(--zambia-green)" />, 
                                title: "Brand Authority", 
                                desc: "Gain instant credibility with the 'SunGate Verified' badge, signaling quality and reliability to Zambian consumers." 
                            },
                            { 
                                icon: <Zap size={32} color="var(--trust-blue)" />, 
                                title: "Automated Workflow", 
                                desc: "Manage your inventory, response to quote requests, and track performance through our dedicated Partner Dashboard." 
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ 
                                padding: '40px', 
                                borderRadius: '24px', 
                                border: '1px solid #f1f5f9', 
                                background: '#f8fafc',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ marginBottom: '24px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partner Types Comparison */}
            <div style={{ padding: '100px 0', background: '#f8fafc' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
                        {/* Installers Card */}
                        <div style={{ background: 'white', padding: '48px', borderRadius: '32px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                                <div style={{ padding: '12px', background: '#ecfdf5', borderRadius: '12px' }}>
                                    <Building size={32} color="var(--zambia-green)" />
                                </div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>For Installers</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {[
                                    "Get listed in the Verified Installer Directory",
                                    "Receive quote requests for local installations",
                                    "Offer SunGate flexible payment pans to clients",
                                    "Access to wholesale pricing from Tier-1 suppliers"
                                ].map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px', color: '#475569' }}>
                                        <CheckCircle size={20} color="var(--zambia-green)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => onMemberClick('installer')} 
                                className="btn btn-primary" 
                                style={{ width: '100%', padding: '14px' }}
                            >
                                Join as Installer
                            </button>
                        </div>

                        {/* Suppliers Card */}
                        <div style={{ background: 'white', padding: '48px', borderRadius: '32px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                                <div style={{ padding: '12px', background: '#eff6ff', borderRadius: '12px' }}>
                                    <Store size={32} color="var(--trust-blue)" />
                                </div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>For Suppliers</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
                                {[
                                    "List your products in the Solar Marketplace",
                                    "Direct inquiry handling and order management",
                                    "Real-time analytics on product popularity",
                                    "Partnership with nationwide installer network"
                                ].map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px', color: '#475569' }}>
                                        <CheckCircle size={20} color="var(--trust-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={() => onMemberClick('supplier')} 
                                className="btn btn-secondary" 
                                style={{ width: '100%', padding: '14px' }}
                            >
                                Join as Supplier
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it Works */}
            <div style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Start Your Journey</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        {[
                            { step: "01", title: "Submit Application", desc: "Choose your role and fill out your business profile." },
                            { step: "02", title: "Get Verified", desc: "Our team reviews your credentials and technical standards." },
                            { step: "03", title: "Scale Up", desc: "Start receiving leads and listing your inventory." }
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: 'center', maxWidth: '300px' }}>
                                <div style={{ 
                                    fontSize: '3rem', 
                                    fontWeight: 900, 
                                    color: '#f1f5f9', 
                                    marginBottom: '-40px',
                                    zIndex: 0
                                }}>{s.step}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', position: 'relative', zIndex: 1 }}>{s.title}</h3>
                                <p style={{ color: '#64748b', position: 'relative', zIndex: 1 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Simple Footer CTA */}
            <div style={{ padding: '80px 0', borderTop: '1px solid #f1f5f9', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}>Ready to power Zambia together?</h2>
                    <button 
                        onClick={() => onMemberClick('installer')} 
                        className="btn btn-primary" 
                        style={{ padding: '16px 40px' }}
                    >
                        Join the Ecosystem
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PartnerOnboarding
