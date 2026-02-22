import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Menu, X, ShoppingCart, LogOut, User } from "lucide-react";

const StandardNavbar = ({
  session,
  profile,
  onAuthClick,
  onLogout,
  cartCount,
  onCartClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(10px)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
        }}
      >
        <div
          className="nav-logo-text"
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
            SunGate <span className="logo-zambia" style={{ color: "var(--zambia-green)" }}>Zambia</span>
          </span>
        </div>

        <div className="desktop-menu" style={{ display: "flex", gap: "32px" }}>
          <Link
            to="/#calculator"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Calculator
          </Link>
          <Link
            to="/#marketplace"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Marketplace
          </Link>
          <Link
            to="/#installers"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Installers
          </Link>
          <Link 
            to="/blog" 
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Knowledge
          </Link>
          <Link
            to="/partners"
            style={{ fontWeight: 600, fontSize: "0.95rem", color: 'var(--trust-blue)' }}
          >
            Partners
          </Link>
        </div>

        <div
          className="nav-actions"
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          {session ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                onClick={onCartClick}
                style={{
                  background: "none",
                  border: "none",
                  position: "relative",
                  color: "var(--trust-blue)",
                  cursor: "pointer",
                  padding: "8px",
                }}
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "var(--sun-orange)",
                      color: "white",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "2px 6px",
                      borderRadius: "99px",
                      border: "2px solid white",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  className="profile-details-desktop"
                  style={{ textAlign: "right" }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "var(--trust-blue)",
                    }}
                  >
                    {profile?.full_name || "My Account"}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#888",
                      textTransform: "uppercase",
                    }}
                  >
                    {profile?.role}
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="btn btn-secondary"
                  style={{
                    padding: "8px 12px",
                    background: "#f5f5f5",
                    color: "#666",
                    border: "none",
                  }}
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.85rem" }}
            >
              <User size={18} style={{ marginRight: "6px" }} /> Login
            </button>
          )}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              color: "var(--trust-blue)",
              border: "none",
            }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            background: "white",
            padding: "30px",
            borderTop: "1px solid #eee",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <a
              href="#calculator"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              Solar Calculator
            </a>
            <a
              href="#marketplace"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              Marketplace
            </a>
            <a
              href="#installers"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              Installer Directory
            </a>
            <a
              href="#blog"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              Knowledge Hub
            </a>
            <a
              href="/partners"
              onClick={() => setIsOpen(false)}
              style={{ fontSize: "1.1rem", fontWeight: 600, color: 'var(--trust-blue)' }}
            >
              Become a Partner
            </a>
            {!session && (
              <button
                onClick={() => {
                  onAuthClick();
                  setIsOpen(false);
                }}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}

      <style>{`
                @media (max-width: 991px) { .desktop-menu { display: none !important; } }
                @media (min-width: 992px) { .mobile-menu-btn { display: none !important; } }
            `}</style>
    </nav>
  );
};

export default StandardNavbar;
