import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const BlogCard = ({ category, title, excerpt, image, link }) => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid #eee' }}>
    <div style={{ height: '200px', background: '#f5f5f5' }}>
        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title} />
    </div>
    <div style={{ padding: '24px' }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sun-orange)', textTransform: 'uppercase', letterSpacing: '1px' }}>{category}</span>
      <h4 style={{ fontSize: '1.25rem', margin: '8px 0 12px', lineHeight: 1.4 }}>{title}</h4>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px', lineHeight: 1.6 }}>{excerpt}</p>
      <a href={link} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--trust-blue)', fontWeight: 700, fontSize: '0.9rem' }}>
        Read Full Article <ArrowRight size={16} />
      </a>
    </div>
  </div>
);

const KnowledgeHubPreview = () => {
  const posts = [
    {
      category: "Buying Guide",
      title: "How to Choose the Right Inverter for Your Home",
      excerpt: "Not all inverters are equal. Learn the difference between pure sine wave and modified sine wave for Zambian appliances.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=400",
      link: "/blog"
    },
    {
      category: "Savings",
      title: "Understanding Zambia's 0% Duty on Solar Hardware",
      excerpt: "Save thousands on your installation by knowing which components qualify for government tax exemptions in 2026.",
      image: "https://images.unsplash.com/photo-1466611653911-954ffea1127b?auto=format&fit=crop&q=80&w=400",
      link: "/blog"
    },
    {
      category: "Maintenance",
      title: "5 Tips to Make Your Solar Batteries Last Longer",
      excerpt: "Simple habits that can extend your battery life by up to 3 years and protect your investment from load-shedding cycles.",
      image: "https://images.unsplash.com/photo-1594818378822-9193288979be?auto=format&fit=crop&q=80&w=400",
      link: "/blog"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Solar Knowledge Hub</h2>
            <p style={{ color: 'var(--text-muted)' }}>Expert advice to help you transition to renewable energy in Zambia.</p>
          </div>
          <a href="/blog" className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
            Browse All Articles <BookOpen size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>

        <div className="grid grid-3">
          {posts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubPreview;
