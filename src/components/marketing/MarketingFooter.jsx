import React from 'react';
import { Sun, MessageCircle, Mail, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingFooter = ({ onDashboardClick }) => {
  return (
    <footer style={{ background: '#1a1a1a', color: '#e0e0e0', padding: '80px 0 40px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '60px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: 800,
                fontSize: '1.5rem',
                marginBottom: '24px',
                color: 'white',
              }}
            >
              <Sun size={32} color="var(--sun-orange)" fill="var(--sun-gold)" />
              <span>SunGate</span>
            </div>
            <p style={{ color: '#888', lineHeight: 1.6, marginBottom: '24px' }}>
              Zambia's premier marketplace for solar energy solutions. 
              Powering homes and businesses with certified solar components.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/sungate-zambia/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#0077B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/SunGateZambia" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }} aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.733-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/sungatezambia/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: '#1877F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/sungatezambia/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1.1rem' }}>Sitemap</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><Link to="/" style={{ color: '#aaa' }}>Home</Link></li>
              <li><Link to="/calculator" style={{ color: '#aaa' }}>Solar Calculator</Link></li>
              <li><Link to="/#installers" style={{ color: '#aaa' }}>Installers</Link></li>
              <li><Link to="/#businesses" style={{ color: '#aaa' }}>For Businesses</Link></li>
              <li><Link to="/partners" style={{ color: '#aaa' }}>For Partners</Link></li>
              <li><Link to="/blog" style={{ color: '#aaa' }}>Solar Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1.1rem' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '12px', color: '#aaa' }}>
                <div style={{ color: 'var(--sun-orange)' }}><ShieldCheck size={18} /></div>
                <span>Lusaka, Zambia<br />Great East Road</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: '#aaa' }}>
                <div style={{ color: 'var(--sun-orange)' }}><Phone size={18} /></div>
                <span>+260 974 300 472</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: '#aaa' }}>
                <div style={{ color: 'var(--sun-orange)' }}><Mail size={18} /></div>
                <span>sungatezambia@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '1.1rem' }}>Quick Access</h4>
            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '20px' }}>
              Ready to start your solar journey? Access your personalized dashboard now.
            </p>
            <button 
              onClick={onDashboardClick}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '14px' }}
            >
              Access Dashboard <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: '30px',
            borderTop: '1px solid #333',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#666',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span>&copy; {new Date().getFullYear()} SunGate Zambia. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/privacy" style={{ color: '#666' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#666' }}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MarketingFooter;
