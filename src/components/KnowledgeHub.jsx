import React, { useState, useEffect } from 'react'
import { BookOpen, Calendar, ArrowRight, User, Tag, X, CheckCircle, Info, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const KnowledgeHub = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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
                        <Link 
                            key={post.id} 
                            to={`/article/${post.id}`}
                            style={{
                                textDecoration: 'none', color: 'inherit',
                                background: 'white', borderRadius: '20px', overflow: 'hidden',
                                boxShadow: 'var(--shadow-sm)', border: '1px solid #f0f0f0',
                                display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease'
                            }}
                            className="knowledge-card"
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                             <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img 
                                    src={post.image || FALLBACK_IMAGE} 
                                    alt={post.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                />
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
                                    <div style={{ color: 'var(--trust-blue)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        Read Brief <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default KnowledgeHub
