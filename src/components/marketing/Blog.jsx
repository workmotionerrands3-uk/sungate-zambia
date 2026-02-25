import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Clock, User, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const BlogCard = ({ category, title, excerpt, image, date, author, onClick }) => (
  <div 
    onClick={onClick}
    style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', cursor: 'pointer' }} 
    className="blog-card"
  >
    <div style={{ height: '240px', position: 'relative' }}>
        <img 
            src={image || FALLBACK_IMAGE} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            alt={title} 
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
        />
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          background: 'white', 
          padding: '4px 12px', 
          borderRadius: '99px',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: 'var(--sun-orange)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {category}
        </div>
    </div>
    <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#999', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {date}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={14} /> {author}</div>
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>{excerpt}</p>
      <button style={{ 
        background: 'none', 
        border: 'none', 
        color: 'var(--trust-blue)', 
        fontWeight: 700, 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: 0,
        cursor: 'pointer',
        marginTop: 'auto'
      }}>
        Read Article <ArrowRight size={18} />
      </button>
    </div>
    <style>{`
      .blog-card:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
      }
    `}</style>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null); // 'success', 'error', null

  const categories = ["All", "Buying Guides", "Maintenance", "Solar Tech", "Zambia Market"];
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateReadTime = (content) => {
    if (!content) return '1 min';
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return `${Math.ceil(words / wordsPerMinute)} min read`;
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubscribing(true);
    setSubscribeStatus(null);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: newsletterEmail }]);
      
      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setSubscribeStatus('success'); // Treating already-subscribed as success for basic UX
        } else {
          throw error;
        }
      } else {
        setSubscribeStatus('success');
      }
      setNewsletterEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
      setSubscribeStatus('error');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '80px 0', background: 'white', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', color: 'var(--trust-blue)' }}>Solar Knowledge Hub</h1>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Your ultimate resource for renewable energy guides, news, and technical expert advice in Zambia.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '20px',
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  style={{ 
                    padding: '8px 20px', 
                    borderRadius: '99px', 
                    background: activeCategory === cat ? 'var(--sun-orange)' : 'white',
                    color: activeCategory === cat ? 'white' : '#666',
                    border: '1px solid #eee',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ position: 'relative', flex: '1', maxWidth: '400px' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '12px 12px 12px 48px', 
                  borderRadius: '99px', 
                  border: '1px solid #eee',
                  outline: 'none'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div className="spinner"></div>
              <p style={{ marginTop: '20px', color: '#666' }}>Fetching latest insights...</p>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '60px', background: '#fff0f0', borderRadius: '24px', color: '#d32f2f' }}>
              <p><b>Error loading articles:</b> {error}</p>
              <button onClick={fetchPosts} className="btn btn-secondary" style={{ marginTop: '16px' }}>Try Again</button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>No articles found matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="btn btn-secondary" style={{ marginTop: '16px' }}>Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-3" style={{ gap: '40px' }}>
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} onClick={() => setSelectedArticle(post)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Modal Reader */}
      {selectedArticle && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '24px', width: '100%', maxWidth: '900px', height: '90vh', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'white', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--shadow-lg)' }}
            >
              <X size={24} color="var(--trust-blue)" />
            </button>

            <div style={{ height: '400px', overflow: 'hidden', flexShrink: 0 }}>
              <img 
                src={selectedArticle.image || FALLBACK_IMAGE} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                alt={selectedArticle.title} 
                onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
              />
            </div>

            <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ padding: '6px 16px', background: 'var(--sky-blue)', color: 'var(--trust-blue)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800 }}>
                  {selectedArticle.category}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>
                  {selectedArticle.date} &bull; {calculateReadTime(selectedArticle.content)}
                </span>
              </div>

              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--trust-blue)', lineHeight: 1.2 }}>{selectedArticle.title}</h2>

              <div style={{ color: '#333', lineHeight: '1.8', fontSize: '1.1rem' }}>
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

              <div style={{ marginTop: '50px', padding: '30px', background: '#f8f9fa', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <User size={30} color="var(--trust-blue)" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{selectedArticle.author}</div>
                  <div style={{ fontSize: '0.9rem', color: '#777' }}>SunGate Zambia Content Expert</div>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--zambia-green)', fontWeight: 700, fontSize: '0.9rem' }}>
                  <ShieldCheck size={18} /> Fact Checked
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section style={{ padding: '80px 0', background: 'var(--trust-blue)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div style={{ marginBottom: '24px', display: 'inline-flex', padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
            <BookOpen size={40} />
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Stay Powered Up</h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', fontSize: '1.1rem' }}>
            Join 5,000+ Zambians receiving weekly solar tips and exclusive hardware deals.
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form-container" style={{ display: 'flex', gap: '12px', maxWidth: '600px', margin: '0 auto', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '12px', width: '100%' }} className="mobile-stack">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '16px 24px', borderRadius: '12px', border: 'none', outline: 'none', minWidth: '0', color: '#333' }} 
              />
              <button 
                type="submit" 
                disabled={subscribing}
                className="btn btn-primary" 
                style={{ padding: '0 32px', whiteSpace: 'nowrap', background: 'var(--sun-orange)', opacity: subscribing ? 0.7 : 1 }}
              >
                {subscribing ? 'Joining...' : 'Subscribe'}
              </button>
            </div>
            {subscribeStatus === 'success' && (
              <p style={{ marginTop: '15px', color: 'var(--sun-gold)', fontWeight: 700 }}>Welcome to the community! You're subscribed.</p>
            )}
            {subscribeStatus === 'error' && (
              <p style={{ marginTop: '15px', color: '#ffb3b3', fontWeight: 600 }}>Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
        <style>{`
          @media (max-width: 480px) {
            .newsletter-form-container {
              flex-direction: column;
              align-items: stretch;
            }
            .newsletter-form-container button {
              padding: 16px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Blog;
