import React from 'react';
import { Share2, MessageCircle, Copy, Check, Phone, Sun } from 'lucide-react';

const ReferralPromo = () => {
    const [copied, setCopied] = React.useState(false);
    const referralPhone = "0750264037";
    const shareUrl = window.location.origin;
    const shareText = `Hey! Use SunGate Zambia for your solar installation and we both get K500! Check it out: ${shareUrl}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    };

    const handleFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
    };

    return (
        <section style={{ 
            position: 'relative', 
            padding: '100px 0',
            background: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600") center/cover',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Dark Overlay */}
            <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                background: 'linear-gradient(to right, rgba(0,33,71,0.85), rgba(0,33,71,0.4))',
                zIndex: 1 
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '800px' }}>
                    {/* Header Branding */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                        <Sun size={40} color="var(--sun-orange)" fill="var(--sun-gold)" />
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>SunGate <span style={{ color: 'var(--sun-orange)' }}>Zambia</span></div>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '2px', fontWeight: 700, opacity: 0.8 }}>QUALITY SOLAR SOLUTIONS</div>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontStyle: 'italic', marginBottom: '20px', fontWeight: 700 }}>
                        "SHARE THE SUN. SHARE THE SAVINGS."
                    </h3>

                    <div style={{ 
                        background: 'var(--sun-orange)', 
                        display: 'inline-block', 
                        padding: '15px 30px', 
                        marginBottom: '10px',
                        transform: 'skew(-5deg)'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, transform: 'skew(5deg)' }}>
                            REFER A FRIEND.
                        </h2>
                    </div>
                    <br />
                    <div style={{ 
                        background: 'var(--sun-orange)', 
                        display: 'inline-block', 
                        padding: '15px 30px', 
                        marginBottom: '40px',
                        transform: 'skew(-5deg)'
                    }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0, transform: 'skew(5deg)' }}>
                            YOU BOTH GET K500!
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div style={{ background: 'white', color: 'var(--trust-blue)', padding: '5px 15px', fontWeight: 900, borderRadius: '4px' }}>YOU</div>
                            <div style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>
                                Refer a friend. They use SunGate. <br />
                                <span style={{ background: 'var(--sun-orange)', padding: '0 8px', fontWeight: 800 }}>YOU get K500 cash.</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div style={{ background: 'white', color: 'var(--trust-blue)', padding: '5px 15px', fontWeight: 900, borderRadius: '4px' }}>THEY</div>
                            <div style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>
                                Friend gets solar. They save on installation. <br />
                                <span style={{ background: 'var(--sun-orange)', padding: '0 8px', fontWeight: 800 }}>THEY get K500 off.</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Actions */}
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '60px' }}>
                        <button 
                            onClick={handleWhatsApp}
                            style={{ 
                                background: '#25D366', 
                                border: 'none', 
                                color: 'white', 
                                padding: '15px 30px', 
                                borderRadius: '12px', 
                                fontWeight: 700, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <MessageCircle size={20} /> Share on WhatsApp
                        </button>

                        <button 
                            onClick={handleCopy}
                            style={{ 
                                background: 'white', 
                                border: 'none', 
                                color: 'var(--trust-blue)', 
                                padding: '15px 30px', 
                                borderRadius: '12px', 
                                fontWeight: 700, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {copied ? <Check size={20} color="var(--zambia-green)" /> : <Copy size={20} />} 
                            {copied ? 'Link Copied!' : 'Copy Referral Link'}
                        </button>

                        <button 
                            onClick={handleFacebook}
                            style={{ 
                                background: '#1877F2', 
                                border: 'none', 
                                color: 'white', 
                                padding: '15px 30px', 
                                borderRadius: '12px', 
                                fontWeight: 700, 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <Share2 size={20} /> Share on Facebook
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Contact Bar */}
            <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                background: 'white', 
                padding: '15px 0', 
                zIndex: 3,
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', color: 'var(--trust-blue)' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Get your referral link →</div>
                    <a href={`tel:${referralPhone}`} style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--trust-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={24} fill="var(--trust-blue)" /> {referralPhone}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReferralPromo;
