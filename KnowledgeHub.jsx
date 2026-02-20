import React, { useState, useEffect } from 'react'
import { BookOpen, Calendar, ArrowRight, User, Tag, X, CheckCircle, Info, ShieldCheck } from 'lucide-react'
import { supabase } from '../lib/supabase'

const KnowledgeHub = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        fetchArticles()
    }, [])

    const calculateReadTime = (content) => {
        if (!content) return '1 min'
        const wordsPerMinute = 200
        const words = content.split(/\s+/).length
        return `${Math.ceil(words / wordsPerMinute)} min read`
    }

    const fetchArticles = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            setArticles(data || [])
        } catch (err) {
            console.error('Error fetching articles:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="blog" style={{ padding: 'var(--section-padding)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Knowledge Hub</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Expert advice to help you navigate the Zambian solar landscape.</p>
                    </div>
                </div>

                <div className="grid grid-3" style={{ gap: '30px' }}>
                    {loading ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0' }}>
                            <div className="spinner"></div>
                            <p style={{ marginTop: '20px' }}>Loading the latest expert insights...</p>
                        </div>
                    ) : error ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '50px', background: '#fff0f0', borderRadius: 'var(--radius-md)', color: '#d32f2f' }}>
                            <p><b>Error loading articles:</b> {error}</p>
                            <button onClick={fetchArticles} className="btn btn-secondary" style={{ marginTop: '16px' }}>Try Again</button>
                        </div>
                    ) : articles.length === 0 ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0' }}>
                            <p>No articles found.</p>
                        </div>
                    ) : articles.map(post => (
                        <article key={post.id} style={{
                            background: 'white', borderRadius: '20px', overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)', border: '1px solid #f0f0f0',
                            display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onClick={() => setSelectedArticle(post)}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute', top: '16px', left: '16px',
                                    background: 'rgba(255,255,255,0.95)', padding: '6px 12px',
                                    borderRadius: '99px', fontSize: '0.7rem', fontWeight: 800,
                                    color: 'var(--trust-blue)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {post.category}
                                </div>
                            </div>

                            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '0.75rem', color: '#888' }}>
                                    <span>{post.date}</span>
                                    <span>&bull;</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <BookOpen size={12} /> {calculateReadTime(post.content)}
                                    </span>
                                </div>

                                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', lineHeight: '1.4', color: 'var(--text-dark)' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>{post.excerpt}</p>

                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, color: '#555' }}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sky-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <User size={14} color="var(--trust-blue)" />
                                        </div>
                                        {post.author}
                                    </div>
                                    <button
                                        style={{ background: 'none', border: 'none', color: 'var(--trust-blue)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        Read Brief <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Article Reader Modal */}
                {selectedArticle && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        backdropFilter: 'blur(8px)', padding: '20px'
                    }}>
                        <div style={{
                            background: 'white', width: '100%', maxWidth: '850px', maxHeight: '95vh',
                            borderRadius: '32px', overflow: 'hidden', position: 'relative',
                            display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                        }}>
                            <button
                                onClick={() => setSelectedArticle(null)}
                                style={{ position: 'absolute', top: '24px', right: '24px', background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10 }}>
                                <X size={24} color="var(--trust-blue)" />
                            </button>

                            <div style={{ height: '350px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '150px', background: 'linear-gradient(to top, white, transparent)' }}></div>
                            </div>

                            <div style={{ padding: '0 clamp(20px, 5vw, 40px) 40px clamp(20px, 5vw, 40px)', overflowY: 'auto', marginTop: '-60px', position: 'relative' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                    <span style={{ padding: '6px 16px', background: 'var(--sky-blue)', color: 'var(--trust-blue)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800 }}>
                                        {selectedArticle.category}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 600 }}>{selectedArticle.date} &bull; {calculateReadTime(selectedArticle.content)}</span>
                                </div>

                                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '24px', color: 'var(--trust-blue)', lineHeight: 1.1, letterSpacing: '-1px' }}>{selectedArticle.title}</h2>

                                <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1.15rem', maxWidth: '100%' }}>
                                    {selectedArticle.content ? (
                                        <div style={{ whiteSpace: 'pre-line' }}>
                                            {selectedArticle.content.split('\n\n').map((para, i) => (
                                                <p key={i} style={{ marginBottom: '20px' }}>{para}</p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>Expert content for this article is being finalized. Please stay tuned for the full SunGate brief.</p>
                                    )}
                                </div>

                                <div style={{ marginTop: '50px', padding: '30px', background: 'var(--bg-off-white)', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                                        <User size={30} color="var(--trust-blue)" />
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{selectedArticle.author}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#777' }}>SunGate Zambia Content Expert</div>
                                    </div>
                                    <div className="badge badge-verified"><ShieldCheck size={14} /> Fact Checked</div>
                                </div>

                                {/* Related Articles */}
                                <div style={{ marginTop: '60px' }}>
                                    <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', color: 'var(--trust-blue)' }}>You might also like...</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                        {articles.filter(a => a.id !== selectedArticle.id).slice(0, 2).map(rel => (
                                            <div
                                                key={rel.id}
                                                onClick={() => {
                                                    setSelectedArticle(rel)
                                                    document.querySelector('.article-scroll-container')?.scrollTo(0, 0)
                                                }}
                                                style={{ cursor: 'pointer', background: '#fcfcfc', borderRadius: '16px', overflow: 'hidden', border: '1px solid #eee' }}
                                            >
                                                <div style={{ height: '120px' }}>
                                                    <img src={rel.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ padding: '16px' }}>
                                                    <h4 style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{rel.title}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}

export default KnowledgeHub
