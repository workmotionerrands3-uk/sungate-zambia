import React, { useState, useEffect } from 'react'
import { MapPin, Star, ShieldCheck, MessageCircle, Phone, Award, Search, Users } from 'lucide-react'
import { supabase } from '../lib/supabase'

const InstallerDirectory = ({ session, onNotify }) => {
    const [search, setSearch] = useState('')
    const [installers, setInstallers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const whatsappNumber = '0974300472' // Provided by user

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
        } catch (err) {
            console.error('Error fetching installers:', err)
            setError(err.message)
        } finally {
            setLoading(false)
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
                        <div key={ins.id} style={{
                            background: 'white', padding: '30px', borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)', border: '1px solid #eee',
                            display: 'flex', gap: '24px', flexWrap: 'wrap'
                        }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#f5f5f5' }}>
                                <img src={ins.logo} alt={ins.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {ins.services.map(s => (
                                        <span key={s} style={{ padding: '4px 10px', background: '#f0f0f0', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{s}</span>
                                    ))}
                                </div>

                                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <a
                                        href={`https://wa.me/260${whatsappNumber}?text=Hi%2C%20I%27d%20like%20to%20request%20installer%20services%20from%20${encodeURIComponent(ins.name)}%20in%20${encodeURIComponent(ins.location)}.%20Can%20you%20help%20me%20connect%20with%20them%3F`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        <MessageCircle size={18} />
                                        Request Installer
                                    </a>
                                </div>
                            </div>
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
            </div>
        </section>
    )
}

export default InstallerDirectory
