import React from 'react';
import { Search, Filter, BookOpen, Clock, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ category, title, excerpt, image, date, author }) => (
  <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee', transition: 'transform 0.3s ease' }} className="blog-card">
    <div style={{ height: '240px', position: 'relative' }}>
        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title} />
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
    <div style={{ padding: '30px' }}>
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
        cursor: 'pointer'
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
  const categories = ["All", "Buying Guides", "Maintenance", "Solar Tech", "Zombia Market"];
  
  const posts = [
    {
      category: "Buying Guides",
      title: "How to Choose the Right Inverter for Your Home",
      excerpt: "Not all inverters are equal. Learn the difference between pure sine wave and modified sine wave for Zambian appliances.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400",
      date: "Feb 15, 2026",
      author: "Chilufya M."
    },
    {
      category: "Zambia Market",
      title: "Understanding Zambia's 0% Duty on Solar Hardware",
      excerpt: "Save thousands on your installation by knowing which components qualify for government tax exemptions in 2026.",
      image: "https://images.unsplash.com/photo-1466611653911-954ffea1127b?auto=format&fit=crop&q=80&w=400",
      date: "Feb 10, 2026",
      author: "SunGate Team"
    },
    {
      category: "Maintenance",
      title: "5 Tips to Make Your Solar Batteries Last Longer",
      excerpt: "Simple habits that can extend your battery life by up to 3 years and protect your investment from load-shedding cycles.",
      image: "https://images.unsplash.com/photo-1594818378822-9193288979be?auto=format&fit=crop&q=80&w=400",
      date: "Feb 5, 2026",
      author: "Joseph K."
    },
    {
      category: "Solar Tech",
      title: "Lithium vs Gel: Which Battery is Better for Load-Shedding?",
      excerpt: "A deep dive into the pros and cons of different battery technologies in the Zambian climate.",
      image: "https://images.unsplash.com/photo-1611367540803-0238d374431e?auto=format&fit=crop&q=80&w=400",
      date: "Jan 28, 2026",
      author: "Tech Corner"
    },
    {
      category: "Buying Guides",
      title: "Complete Solar Kit Pricing Guide for 2026",
      excerpt: "Estimated costs for 3kW, 5kW, and 10kW systems including installation and certification fees.",
      image: "https://images.unsplash.com/photo-1559302995-f0a1bc19e59d?auto=format&fit=crop&q=80&w=400",
      date: "Jan 20, 2026",
      author: "SunGate Team"
    },
    {
      category: "Maintenance",
      title: "Post-Installation Checklist: What Every Owner Must Know",
      excerpt: "Ensure your warranty remains valid and your system performs at peak efficiency year-round.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=400",
      date: "Jan 12, 2026",
      author: "Expert Advice"
    }
  ];

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
                <button key={cat} style={{ 
                  padding: '8px 20px', 
                  borderRadius: '99px', 
                  background: cat === 'All' ? 'var(--sun-orange)' : 'white',
                  color: cat === 'All' ? 'white' : '#666',
                  border: '1px solid #eee',
                  fontWeight: 600,
                  fontSize: '0.9rem'
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
          <div className="grid grid-3" style={{ gap: '40px' }}>
            {posts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="btn btn-secondary" style={{ padding: '16px 40px' }}>
              Load More Articles
            </button>
          </div>
        </div>
      </section>

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
          <div style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ flex: 1, padding: '16px 24px', borderRadius: '12px', border: 'none', outline: 'none' }} 
            />
            <button className="btn btn-primary" style={{ padding: '0 32px' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
