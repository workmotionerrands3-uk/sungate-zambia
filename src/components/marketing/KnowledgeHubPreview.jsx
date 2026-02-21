import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';

const BlogCard = ({ category, title, excerpt, image }) => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee', display: 'flex', flexDirection: 'column' }}>
    <div style={{ height: '200px', background: '#f5f5f5' }}>
        <img src={image || 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title} />
    </div>
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun-orange)', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</span>
      <h4 style={{ fontSize: '1.25rem', margin: '8px 0 12px', lineHeight: 1.4 }}>{title}</h4>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>{excerpt}</p>
      <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--trust-blue)', fontWeight: 700, fontSize: '0.9rem', marginTop: 'auto' }}>
        Read Full Article <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

const KnowledgeHubPreview = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) throw error;
        setPosts(data || []);
      } catch (err) {
        console.error('Error fetching latest articles:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Solar Knowledge Hub</h2>
            <p style={{ color: 'var(--text-muted)' }}>Expert advice to help you transition to renewable energy in Zambia.</p>
          </div>
          <Link to="/blog" className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Browse All Articles <BookOpen size={18} />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-3">
            {[1, 2, 3].map(i => (
              <div key={i} style={{ height: '350px', background: '#f8f9fa', borderRadius: '16px', animation: 'pulse 1.5s infinite' }}></div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f8f9fa', borderRadius: '16px' }}>
            <p style={{ color: '#666' }}>Stay tuned for our upcoming solar guides and expert insights.</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default KnowledgeHubPreview;
