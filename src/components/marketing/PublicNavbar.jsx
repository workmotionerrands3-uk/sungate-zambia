import React, { useState } from 'react';
import { Sun, Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PublicNavbar = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Calculator', path: '/calculator' },
    { title: 'Installers', path: '/partners' },
    { title: 'Suppliers', path: '/partners?type=supplier' },
    { title: 'Blog', path: '/blog' }
  ];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'var(--shadow-sm)',
        height: '80px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'var(--trust-blue)',
          }}
        >
          <Sun size={32} color="var(--sun-orange)" fill="var(--sun-gold)" />
          <span>
            SunGate <span style={{ color: 'var(--zambia-green)' }}>Zambia</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              style={{ fontWeight: 600, fontSize: '0.95rem', color: location.pathname === link.path ? 'var(--sun-orange)' : 'inherit' }}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => onAuthClick('user')}
            className="btn btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            <User size={18} style={{ marginRight: '6px' }} /> Login / Dashboard
          </button>
          
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              color: 'var(--trust-blue)',
              border: 'none',
              display: 'none'
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: 'white',
            padding: '30px',
            borderTop: '1px solid #eee',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
             {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '1.1rem', fontWeight: 600 }}
                >
                  {link.title}
                </Link>
              ))}
              <button
                onClick={() => { onAuthClick('user'); setIsOpen(false); }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Access Dashboard
              </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) { 
          .desktop-menu { display: none !important; } 
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default PublicNavbar;
