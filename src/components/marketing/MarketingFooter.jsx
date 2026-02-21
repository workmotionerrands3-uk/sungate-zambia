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
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--zambia-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <MessageCircle size={20} />
              </div>
              <Link to="#" style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={20} />
              </Link>
              <Link to="#" style={{ width: '40px', height: '40px', background: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={20} />
              </Link>
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
                <span>support@sungate.co.zm</span>
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
