import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import MarketingFooter from './MarketingFooter';

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f8f9fa'/%3E%3Ccircle cx='400' cy='180' r='60' fill='%23FFB300'/%3E%3Cpath d='M400 100v30M400 230v30M320 180h30M450 180h30M340 120l20 20M440 220l20 20M340 240l20-20M440 140l20-20' stroke='%23FFB300' stroke-width='6' stroke-linecap='round'/%3E%3Ctext x='400' y='320' text-anchor='middle' font-size='24' fill='%23aaa' font-family='sans-serif'%3ESunGate Knowledge Hub%3C/text%3E%3C/svg%3E";

const ArticlePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchArticle();
    }, [id]);

    const fetchArticle = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            setArticle(data);

            // Fetch related articles
            const { data: related } = await supabase
                .from('articles')
                .select('*')
                .eq('category', data.category)
                .neq('id', id)
                .limit(3);
            
            setRelatedArticles(related || []);
        } catch (err) {
            console.error('Error fetching article:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = article?.title || "Check out this article on SunGate";
        
        if (platform === 'copy') {
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
            return;
        }

        const shareUrls = {
            whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        };

        window.open(shareUrls[platform], '_blank');
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                <div className="spinner"></div>
                <p style={{ marginTop: '20px', color: '#666' }}>Loading article...</p>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '100px 20px', textAlign: 'center', background: 'white' }}>
                <h2 style={{ color: 'var(--trust-blue)' }}>Oops! Article Not Found</h2>
                <p style={{ color: '#666', marginBottom: '30px' }}>The knowledge you're looking for might have moved or doesn't exist.</p>
                <Link to="/blog" className="btn btn-primary" style={{ textDecoration: 'none', margin: '0 auto' }}>Back to Blog</Link>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column' }}>
            {/* Minimal Header / Navigation */}
            <div style={{ padding: '40px 0', borderBottom: '1px solid #f0f0f0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link 
                        to="/blog" 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}
                        onMouseOver={e => e.currentTarget.style.color = 'var(--trust-blue)'}
                        onMouseOut={e => e.currentTarget.style.color = '#666'}
                    >
                        <ArrowLeft size={18} /> Back to Hub
                    </Link>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button onClick={() => handleShare('whatsapp')} style={shareBtnStyle}><MessageCircle size={18} /></button>
                        <button onClick={() => handleShare('facebook')} style={shareBtnStyle}><Facebook size={18} /></button>
                        <button onClick={() => handleShare('copy')} style={shareBtnStyle}><LinkIcon size={18} /></button>
                    </div>
                </div>
            </div>

            <article className="container" style={{ maxWidth: '850px', padding: '60px 20px 100px' }}>
                {/* Meta Information */}
                <div style={{ marginBottom: '30px' }}>
                    <span style={{ 
                        background: 'var(--sky-blue)', 
                        color: 'var(--trust-blue)', 
                        padding: '6px 14px', 
                        borderRadius: '99px', 
                        fontSize: '0.8rem', 
                        fontWeight: 700,
                        textTransform: 'uppercase'
                    }}>
                        {article.category}
                    </span>
                    <h1 style={{ 
                        fontSize: '3rem', 
                        lineHeight: '1.2', 
                        fontWeight: 800, 
                        color: 'var(--trust-blue)', 
                        margin: '20px 0',
                        letterSpacing: '-0.02em'
                    }}>
                        {article.title}
                    </h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#777', fontSize: '0.95rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> SunGate Tech Team</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {new Date(article.created_at).toLocaleDateString()}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 5 min read</div>
                    </div>
                </div>

                {/* Featured Image */}
                <div style={{ marginBottom: '60px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                    <img 
                        src={article.image || FALLBACK_IMAGE} 
                        alt={article.title} 
                        style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                    />
                </div>

                {/* Article Content */}
                <div className="article-content" style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.8', 
                    color: '#333',
                    whiteSpace: 'pre-wrap'
                }}>
                    <p style={{ fontWeight: 600, fontSize: '1.4rem', color: '#555', marginBottom: '30px', borderLeft: '4px solid var(--sun-orange)', paddingLeft: '20px' }}>
                        {article.excerpt}
                    </p>
                    
                    {/* Render content - assuming it's text for now, but could be MD/HTML */}
                    <div style={{ marginBottom: '40px' }}>
                        {article.content}
                    </div>

                    {/* Simple Conclusion / CTA */}
                    <div style={{ 
                        background: '#f8f9fa', 
                        padding: '40px', 
                        borderRadius: '20px', 
                        marginTop: '60px',
                        border: '1px solid #eee'
                    }}>
                        <h3 style={{ margin: '0 0 15px', color: 'var(--trust-blue)' }}>Ready to go solar?</h3>
                        <p style={{ margin: 0, fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
                            Our experts are here to help you find the perfect solution for your home or business.
                        </p>
                        <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>Learn More</Link>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <div style={{ marginTop: '100px', paddingTop: '60px', borderTop: '1px solid #f0f0f0' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--trust-blue)', marginBottom: '30px' }}>Keep Reading</h3>
                        <div className="grid grid-3" style={{ gap: '20px' }}>
                            {relatedArticles.map(rel => (
                                <Link 
                                    key={rel.id} 
                                    to={`/article/${rel.id}`} 
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="glass-card" style={{ height: '100%', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <div style={{ height: '160px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                                            <img 
                                                src={rel.image || FALLBACK_IMAGE} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                                onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                            />
                                        </div>
                                        <div style={{ padding: '20px' }}>
                                            <h4 style={{ fontSize: '1rem', lineHeight: '1.4', margin: 0 }}>{rel.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <MarketingFooter />
        </div>
    );
};

const shareBtnStyle = {
    background: 'white',
    border: '1px solid #ddd',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
};

export default ArticlePage;
