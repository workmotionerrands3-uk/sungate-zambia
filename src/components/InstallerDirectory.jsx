import React, { useState, useEffect } from 'react'
import { MapPin, Star, ShieldCheck, MessageCircle, Phone, Award, Search, Users, Briefcase, ChevronRight, X } from 'lucide-react'
import { supabase } from '../lib/supabase'
import ImageLightbox from './ImageLightbox'

const FALLBACK_LOGO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f4f8'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%23e2e8f0'/%3E%3Cpath d='M50 35v30M35 50h30' stroke='%2394a3b8' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E";

const InstallerDirectory = ({ session, onNotify }) => {
    const [search, setSearch] = useState('')
    const [installers, setInstallers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const whatsappNumber = '0974300472' // Provided by user
    const [selectedInstaller, setSelectedInstaller] = useState(null)
    const [installerWorks, setInstallerWorks] = useState({})
    const [viewingPortfolio, setViewingPortfolio] = useState(null)
    const [lightboxData, setLightboxData] = useState({ isOpen: false, url: '', alt: '' })

    const handleGetQuote = (installer) => {
        if (!session) {
            onNotify("Please login to request a quote from an installer.", "info")
            return
        }
        onNotify(`Quote request for ${installer.name} sent! They will contact you soon.`, "success")
    }

    useEffect(() => {
        fetchInstallers()
    }, [])

    const fetchInstallers = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('installers')
                .select('*')
                .order('rating', { ascending: false })

            if (error) throw error
            setInstallers(data || [])
            
            // Proactively fetch some works for top installers if needed, or wait for click
        } catch (err) {
            console.error('Error fetching installers:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const fetchPortfolio = async (installerId) => {
        if (installerWorks[installerId]) return // Already fetched

        try {
            const { data, error } = await supabase
                .from('installer_works')
                .select('*')
                .eq('installer_id', installerId)
                .order('created_at', { ascending: false })

            if (error) throw error
            setInstallerWorks(prev => ({ ...prev, [installerId]: data || [] }))
        } catch (err) {
            console.error('Error fetching portfolio:', err)
        }
    }

    const filteredInstallers = installers.filter(ins =>
        ins.name.toLowerCase().includes(search.toLowerCase()) ||
        ins.location.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section id="installers" style={{ padding: 'var(--section-padding)', background: 'var(--bg-off-white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Verified Installer Directory</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We've veted every installer on our platform for ERB compliance and technical expertise. Hire with confidence.
                    </p>
                </div>

                <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
                        <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} size={20} />
                        <input
                            type="text"
                            placeholder="Search by city (Lusaka, Ndola) or company name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: '100%', padding: '16px 16px 16px 48px', borderRadius: 'var(--radius-md)',
                                border: '1px solid #ddd', fontSize: '1rem', boxShadow: 'var(--shadow-sm)'
                            }}
                        />
                    </div>
                    <a
                        href={`https://wa.me/260${whatsappNumber}?text=Hi%2C%20I%27m%20looking%20for%20a%20verified%20solar%20installer.%20Can%20you%20help%20me%20find%20one%3F`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
                    >
                        <MessageCircle size={18} />
                        Request Installer
                    </a>
                </div>

                <div className="grid grid-2">
                    {loading ? (
                        <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '100px 0' }}>
                            <div className="spinner"></div>
                            <p style={{ marginTop: '20px' }}>Finding top-rated installers...</p>
                        </div>
                    ) : error ? (
                        <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '50px', background: '#fff0f0', borderRadius: 'var(--radius-md)', color: '#d32f2f' }}>
                            <p><b>Error loading installers:</b> {error}</p>
                            <button onClick={fetchInstallers} className="btn btn-secondary" style={{ marginTop: '16px' }}>Try Again</button>
                        </div>
                    ) : filteredInstallers.length === 0 ? (
                        <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '100px 0' }}>
                            <p>No installers matching your search found.</p>
                        </div>
                    ) : filteredInstallers.map(ins => (
                        <div key={ins.id} className="hover-lift" style={{
                            background: 'white', padding: '24px', borderRadius: '20px',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
                            border: '1px solid #f1f5f9',
                            display: 'flex', gap: '20px', flexWrap: 'wrap',
                            transition: 'all 0.3s ease'
                        }}>
                            <div style={{ width: '70px', height: '70px', borderRadius: '14px', overflow: 'hidden', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                <img 
                                    src={ins.logo || FALLBACK_LOGO} 
                                    alt={ins.name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_LOGO; }}
                                />
                            </div>

                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.3rem', color: 'var(--trust-blue)' }}>{ins.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                            <MapPin size={14} /> {ins.location}
                                        </div>
                                    </div>
                                    {ins.certified && (
                                        <div className="badge badge-verified" style={{ fontSize: '0.7rem' }}>
                                            ERB Certified
                                        </div>
                                    )}
                                </div>

                                <div style={{ display: 'flex', gap: '16px', margin: '16px 0', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Star size={16} color="var(--sun-gold)" fill="var(--sun-gold)" /> <b>{ins.rating}</b> ({ins.reviews})
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Award size={16} color="var(--zambia-green)" /> <b>{ins.projects}+</b> Projects
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {ins.services.map(s => (
                                        <span key={s} style={{ padding: '4px 10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600, color: '#475569' }}>{s}</span>
                                    ))}
                                </div>

                                <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <a
                                        href={`https://wa.me/260${whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20request%20installer%20services%20from%20${encodeURIComponent(ins.name)}%20in%20${encodeURIComponent(ins.location)}.%20Can%20you%20help%20me%20connect%20with%20them%3F`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', fontSize: '0.9rem' }}
                                    >
                                        <MessageCircle size={16} />
                                        Hire Now
                                    </a>
                                    <button 
                                        onClick={() => {
                                            setViewingPortfolio(ins)
                                            fetchPortfolio(ins.id)
                                        }}
                                        className="btn btn-secondary"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', fontSize: '0.9rem' }}
                                    >
                                        <Briefcase size={16} />
                                        Portfolio
                                    </button>
                                </div>
                            </div>

                             {/* Portfolio Mini-Gallery */}
                            {installerWorks[ins.id] && installerWorks[ins.id].length > 0 && (
                                <div style={{ width: '100%', marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <h4 style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Projects</h4>
                                        <button 
                                            onClick={() => { setViewingPortfolio(ins); fetchPortfolio(ins.id); }}
                                            style={{ background: 'none', border: 'none', color: 'var(--trust-blue)', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}
                                        >
                                            See All <ChevronRight size={14} />
                                        </button>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                        {installerWorks[ins.id].slice(0, 3).map(work => (
                                            <div key={work.id} style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #f1f5f9', background: '#f8fafc', position: 'relative', aspectRatio: '4/3' }}>
                                                {work.images?.[0] ? (
                                                    <img 
                                                        src={work.images[0]} 
                                                        alt={work.title} 
                                                        onClick={() => setLightboxData({ isOpen: true, url: work.images[0], alt: work.title })}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }} 
                                                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_LOGO; }}
                                                    />
                                                ) : (
                                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                                                        <Briefcase size={20} />
                                                    </div>
                                                )}
                                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4px 8px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)', fontSize: '0.65rem', fontWeight: 700, borderTop: '1px solid #f1f5f9', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {work.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: 'white', borderRadius: '99px', border: '1px solid #ddd' }}>
                        <Users size={20} color="var(--trust-blue)" />
                        <span><b>Are you a solar installer?</b> Get certified on SunGate.</span>
                        <a
                            href="https://wa.me/260974300472?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20SunGate%20Verified%20installer"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--sun-orange)', fontWeight: 700, textDecoration: 'none' }}
                        >
                            Join Now &rarr;
                        </a>
                    </div>
                </div>

                {/* Portfolio Modal */}
                {viewingPortfolio && (
                    <div style={portfolioModalStyle}>
                        <div style={portfolioContentStyle}>
                            <div style={portfolioHeaderStyle}>
                                <div>
                                    <h2 style={{ margin: 0, color: 'var(--trust-blue)' }}>{viewingPortfolio.name} - Portfolio</h2>
                                    <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>Showcasing recent high-quality installations</p>
                                </div>
                                <button onClick={() => setViewingPortfolio(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}>
                                    <XCircle size={32} />
                                </button>
                            </div>
                            <div style={portfolioBodyStyle}>
                                {!installerWorks[viewingPortfolio.id] ? (
                                    <div className="spinner"></div>
                                ) : installerWorks[viewingPortfolio.id].length === 0 ? (
                                    <p>No projects documented yet. Check back soon!</p>
                                ) : (
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
                                        {installerWorks[viewingPortfolio.id].map(work => (
                                            <div key={work.id} style={projectCardStyle}>
                                                <div style={projectImagesGridStyle}>
                                                    {work.images && work.images.length > 0 ? (
                                                        work.images.map((img, idx) => (
                                                            <img 
                                                                key={idx} 
                                                                src={img} 
                                                                alt={`${work.title} ${idx}`} 
                                                                onClick={() => setLightboxData({ isOpen: true, url: img, alt: work.title })}
                                                                style={{ ...projectImageStyle, cursor: 'zoom-in' }} 
                                                                onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_LOGO; }}
                                                            />
                                                        ))
                                                    ) : (
                                                        <div style={{ background: '#f8f9fa', padding: '40px', textAlign: 'center', gridColumn: '1 / -1', borderRadius: '12px' }}>
                                                            <Award size={40} color="#ccc" />
                                                            <p style={{ color: '#888' }}>No project photos available</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div style={{ padding: '24px' }}>
                                                    <h3 style={{ margin: '0 0 12px', color: 'var(--trust-blue)' }}>{work.title}</h3>
                                                    <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>{work.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '20px 30px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                                <button onClick={() => setViewingPortfolio(null)} className="btn btn-secondary">Close Portfolio</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <ImageLightbox 
                isOpen={lightboxData.isOpen}
                onClose={() => setLightboxData({ ...lightboxData, isOpen: false })}
                imageUrl={lightboxData.url}
                altText={lightboxData.alt}
            />
        </section>
    )
}

const XCircle = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
)

const portfolioModalStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 4000, padding: '20px'
}

const portfolioContentStyle = {
    background: 'white', borderRadius: '24px', width: '100%', maxWidth: '900px',
    maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column'
}

const portfolioHeaderStyle = {
    padding: '30px', borderBottom: '1px solid #eee',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
}

const portfolioBodyStyle = {
    padding: '30px', overflowY: 'auto', flex: 1
}

const projectCardStyle = {
    background: 'white', borderRadius: '16px', overflow: 'hidden',
    border: '1px solid #eee', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
}

const projectImagesGridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    background: '#f8f9fa'
}

const projectImageStyle = {
    width: '100%', height: '200px', objectFit: 'cover', border: '1px solid #fff'
}

export default InstallerDirectory
