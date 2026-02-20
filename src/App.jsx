import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QuoteRequestPrint from "./components/QuoteRequestPrint.jsx";
import {
  Sun,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
  Award,
  Heart,
  MapPin,
  LogOut,
  User,
  ShoppingCart,
  Plus,
  Trash2,
  Package,
  Calculator,
} from "lucide-react";
import { supabase } from "./lib/supabase";
import SolarCalculator from "./components/SolarCalculator.jsx";
import Marketplace from "./components/Marketplace.jsx";
import InstallerDirectory from "./components/InstallerDirectory.jsx";
import KnowledgeHub from "./components/KnowledgeHub.jsx";
import AuthForm from "./components/AuthForm.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import AddProductModal from "./components/AddProductModal.jsx";
import PartnerOnboarding from "./components/PartnerOnboarding.jsx";
import {
  TermsPage,
  PrivacyPolicyPage,
  HelpCenterPage,
} from "./components/LegalPages.jsx";

const Footer = ({ openAuthWithRole }) => (
  <footer
    style={{
      background: "#1a1a1a",
      color: "#e0e0e0",
      padding: "80px 0 40px",
    }}
  >
    <div className="container">
      <div className="grid grid-4" style={{ marginBottom: "60px" }}>
        <div style={{ gridColumn: "span 1" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 800,
              fontSize: "1.5rem",
              marginBottom: "24px",
              color: "white",
            }}
          >
            <Sun
              size={32}
              color="var(--sun-orange)"
              fill="var(--sun-gold)"
            />
            <span>SunGate</span>
          </div>
          <p
            style={{ color: "#888", lineHeight: 1.6, marginBottom: "24px" }}
          >
            Zambia's premier marketplace for solar energy solutions.
            Connecting functionality with sustainability.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#333",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageCircle size={18} />
            </div>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#333",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Phone size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "24px",
              fontSize: "1.1rem",
            }}
          >
            Sitemap
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li>
              <a
                href="/partners"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Become a Partner
              </a>
            </li>
            <li>
              <a
                href="#marketplace"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#installers"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Find Installer
              </a>
            </li>
            <li>
              <a
                href="#blog"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Energy Tips
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "24px",
              fontSize: "1.1rem",
            }}
          >
            Support
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <li>
              <a
                href="/help"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Help Center
              </a>
            </li>
            <li>
              <button 
                onClick={() => openAuthWithRole('supplier')} 
                style={{ background: 'none', border: 'none', color: "#aaa", textDecoration: "none", cursor: 'pointer', padding: 0 }}
              >
                Supplier Login
              </button>
            </li>
            <li>
              <button 
                onClick={() => openAuthWithRole('installer')} 
                style={{ background: 'none', border: 'none', color: "#aaa", textDecoration: "none", cursor: 'pointer', padding: 0 }}
              >
                Installer Registration
              </button>
            </li>
            <li>
              <a
                href="/help"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "24px",
              fontSize: "1.1rem",
            }}
          >
            Contact
          </h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <li style={{ display: "flex", gap: "12px", color: "#aaa" }}>
              <MapPin size={20} color="var(--sun-orange)" />
              <span>
                Lusaka, Zambia
                <br />
                Great East Road
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", color: "#aaa" }}>
              <Phone size={20} color="var(--sun-orange)" />
              <span>0974300472</span>
            </li>
            <li style={{ display: "flex", gap: "12px", color: "#aaa" }}>
              <MessageCircle size={20} color="var(--sun-orange)" />
              <span>support@sungate.co.zm</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          paddingTop: "30px",
          borderTop: "1px solid #333",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#666",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <span>&copy; 2026 SunGate Zambia. All rights reserved.</span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="/privacy"
            style={{ color: "#666", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            style={{ color: "#666", textDecoration: "none" }}
          >
            Terms & Conditions
          </a>
          <a href="#" style={{ color: "#666", textDecoration: "none" }}>
            Sitemap
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Navbar = ({
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
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 800,
            fontSize: "1.5rem",
            color: "var(--trust-blue)",
          }}
        >
          <Sun size={32} color="var(--sun-orange)" fill="var(--sun-gold)" />
          <span>
            SunGate <span style={{ color: "var(--zambia-green)" }}>Zambia</span>
          </span>
        </div>

        <div className="desktop-menu" style={{ display: "flex", gap: "32px" }}>
          <a
            href="#calculator"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Calculator
          </a>
          <a
            href="#marketplace"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Marketplace
          </a>
          <a
            href="#installers"
            style={{ fontWeight: 600, fontSize: "0.95rem" }}
          >
            Installers
          </a>
          <a href="#blog" style={{ fontWeight: 600, fontSize: "0.95rem" }}>
            Knowledge
          </a>
          <a
            href="/partners"
            style={{ fontWeight: 600, fontSize: "0.95rem", color: 'var(--trust-blue)' }}
          >
            Partners
          </a>
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
                  style={{ textAlign: "right", display: "none", md: "block" }}
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

const UserDashboard = ({
  profile,
  savedProducts,
  onToggleSave,
  calcHistory,
  userInquiries,
  onRemoveSaved,
  onDeleteHistory,
  setPdfUrl,
  setShowPdfModal,
}) => (
  <section
    style={{
      padding: "60px 0",
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
    }}
  >
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <div className="badge badge-verified" style={{ marginBottom: "8px" }}>
            Customer Command Center
          </div>
          <h2 style={{ fontSize: "2rem", margin: 0 }}>
            Welcome back, {profile?.full_name}!
          </h2>
        </div>
      </div>

      <div className="grid grid-3" style={{ gap: "24px" }}>
        {/* 1. Calculator History */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  background: "var(--sky-blue)",
                  padding: "8px",
                  borderRadius: "8px",
                }}
              >
                <Calculator size={20} color="var(--trust-blue)" />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>My Savings</h3>
            </div>
            <span
              style={{ fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }}
            >
              {calcHistory.length} SAVED
            </span>
          </div>

          {calcHistory.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#888",
                background: "#fcfcfc",
                borderRadius: "12px",
              }}
            >
              <p style={{ fontSize: "0.85rem" }}>No calculations saved yet.</p>
              <a
                href="#calculator"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--trust-blue)",
                  fontWeight: 700,
                }}
              >
                Try the Calculator →
              </a>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {calcHistory.map((res) => (
                <div
                  key={res.id}
                  style={{
                    padding: "12px",
                    background: "#f9f9f9",
                    borderRadius: "12px",
                    border: "1px solid #eee",
                    position: "relative",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "var(--trust-blue)",
                    }}
                  >
                    {res.system_size}kW System
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--zambia-green)",
                      fontWeight: 600,
                    }}
                  >
                    K{res.estimated_cost?.toLocaleString()} Est. Cost
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#999",
                      marginTop: "4px",
                    }}
                  >
                    {new Date(res.created_at).toLocaleDateString()}
                  </div>
                  <button
                    onClick={() => onDeleteHistory(res.id)}
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "none",
                      border: "none",
                      color: "#ccc",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#ff4d4d")
                    }
                    onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Wishlist */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  background: "#fff0f0",
                  padding: "8px",
                  borderRadius: "8px",
                }}
              >
                <Heart size={20} color="#ff4d4d" fill="#ff4d4d" />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Wishlist</h3>
            </div>
            <span
              style={{ fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }}
            >
              {savedProducts.length} ITEMS
            </span>
          </div>

          {savedProducts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#888",
                background: "#fcfcfc",
                borderRadius: "12px",
              }}
            >
              <p style={{ fontSize: "0.85rem" }}>Your wishlist is empty.</p>
              <a
                href="#marketplace"
                style={{
                  fontSize: "0.8rem",
                  color: "var(--sun-orange)",
                  fontWeight: 700,
                }}
              >
                Shop Marketplace →
              </a>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {savedProducts.map((sp) => (
                <div
                  key={sp.id}
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                    padding: "10px",
                    background: "#f9f9f9",
                    borderRadius: "12px",
                    border: "1px solid #eee",
                  }}
                >
                  <img
                    src={sp.products?.image}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "var(--text-dark)",
                      }}
                    >
                      {sp.products?.name}
                    </div>
                    <div
                      style={{
                        color: "var(--trust-blue)",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      {sp.products?.price}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveSaved(sp.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ccc",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#ff4d4d")
                    }
                    onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Quote Requests */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  background: "#e8f5e9",
                  padding: "8px",
                  borderRadius: "8px",
                }}
              >
                <MessageCircle size={20} color="var(--zambia-green)" />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Quotes</h3>
            </div>
            <span
              style={{ fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }}
            >
              {userInquiries.length} ACTIVE
            </span>
          </div>

          {userInquiries.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#888",
                background: "#fcfcfc",
                borderRadius: "12px",
              }}
            >
              <p style={{ fontSize: "0.85rem" }}>No active quote requests.</p>
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {userInquiries.map((iq) => (
                <div
                  key={iq.id}
                  style={{
                    padding: "12px",
                    background: "#f9f9f9",
                    borderRadius: "12px",
                    border: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "4px",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>
                      {iq.products?.name}
                    </div>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        background:
                          iq.status === "pending"
                            ? "#fff3e0"
                            : iq.status === "quoted"
                              ? "#e8f5e9"
                              : "#e0f2f1",
                        color:
                          iq.status === "pending"
                            ? "#ef6c00"
                            : iq.status === "quoted"
                              ? "#2e7d32"
                              : "#00695c",
                        fontWeight: 800,
                        textTransform: "uppercase",
                      }}
                    >
                      {iq.status}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      fontStyle: "italic",
                      marginBottom: "8px",
                    }}
                  >
                    "{iq.message}"
                  </div>

                  {/* Show admin response if it exists */}
                  {(iq.admin_response ||
                    iq.quote_price ||
                    iq.quote_pdf_url) && (
                    <div
                      style={{
                        marginTop: "12px",
                        padding: "12px",
                        background: "#e8f5e9",
                        borderRadius: "8px",
                        borderLeft: "3px solid var(--zambia-green)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "var(--zambia-green)",
                          marginBottom: "6px",
                        }}
                      >
                        ✓ Admin Response
                      </div>
                      {iq.quote_price && (
                        <div
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "#111",
                            marginBottom: "4px",
                          }}
                        >
                          Quote: {iq.quote_price}
                        </div>
                      )}
                      {iq.admin_response && (
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#555",
                            marginBottom: "8px",
                          }}
                        >
                          {iq.admin_response}
                        </div>
                      )}
                      {iq.quote_pdf_url && (
                        <button
                          onClick={() => {
                            console.log("Opening PDF:", iq.quote_pdf_url);
                            setPdfUrl(iq.quote_pdf_url);
                            setShowPdfModal(true);
                          }}
                          style={{
                            padding: "6px 12px",
                            background: "var(--trust-blue)",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            marginTop: "4px",
                          }}
                        >
                          📄 View Quote Document
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
);

const SupplierDashboard = ({
  profile,
  onAddProduct,
  stats,
  inquiries,
  products,
  onUpdateInquiryStatus,
  onDeleteProduct,
}) => (
  <section
    style={{
      padding: "60px 0",
      background: "linear-gradient(to right, #e3f2fd, #ffffff)",
    }}
  >
    <div className="container">
      <div
        className="badge"
        style={{
          background: "var(--zambia-green)",
          color: "white",
          marginBottom: "16px",
        }}
      >
        Supplier Panel
      </div>
      <h2>Partner Portal: {profile?.full_name}</h2>

      <div
        className="grid grid-3"
        style={{ marginTop: "30px", marginBottom: "40px" }}
      >
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-sm)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "var(--trust-blue)",
            }}
          >
            {stats.listings}
          </div>
          <div style={{ fontWeight: 600, color: "#666" }}>Active Listings</div>
        </div>
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-sm)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "var(--sun-orange)",
            }}
          >
            {stats.inquiries}
          </div>
          <div style={{ fontWeight: 600, color: "#666" }}>Active Inquiries</div>
        </div>
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-sm)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={onAddProduct}
            className="btn btn-primary"
            style={{ width: "100%", padding: "16px" }}
          >
            <Plus size={18} style={{ marginRight: "8px" }} /> Add New Product
          </button>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: "30px" }}>
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "24px", borderBottom: "1px solid #eee" }}>
            <h3 style={{ margin: 0 }}>Recent Inquiries</h3>
          </div>
          <div style={{ padding: "20px" }}>
            {inquiries.length === 0 ? (
              <div
                style={{ textAlign: "center", padding: "40px", color: "#888" }}
              >
                <MessageCircle
                  size={32}
                  style={{ opacity: 0.2, marginBottom: "12px" }}
                />
                <p style={{ fontSize: "0.9rem" }}>No quote requests yet.</p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {inquiries.map((iq) => (
                  <div
                    key={iq.id}
                    style={{
                      padding: "16px",
                      borderRadius: "12px",
                      background: "#fcfcfc",
                      border: "1px solid #eee",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ fontWeight: 700 }}>{iq.products?.name}</div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          padding: "2px 8px",
                          borderRadius: "12px",
                          background:
                            iq.status === "pending" ? "#fff3e0" : "#e8f5e9",
                          color:
                            iq.status === "pending" ? "#ef6c00" : "#2e7d32",
                        }}
                      >
                        {iq.status.toUpperCase()}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#666" }}>
                      From: {iq.buyer?.full_name} ({iq.buyer?.email})
                    </div>
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <select
                        value={iq.status}
                        onChange={(e) =>
                          onUpdateInquiryStatus(iq.id, e.target.value)
                        }
                        style={{
                          padding: "4px",
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                      </select>
                      <a
                        href={`mailto:${iq.buyer?.email}`}
                        className="btn"
                        style={{
                          padding: "4px 10px",
                          fontSize: "0.75rem",
                          background: "var(--trust-blue)",
                          color: "white",
                        }}
                      >
                        Email Customer
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "24px", borderBottom: "1px solid #eee" }}>
            <h3 style={{ margin: 0 }}>My Products</h3>
          </div>
          <div style={{ padding: "20px" }}>
            {products.length === 0 ? (
              <div
                style={{ textAlign: "center", padding: "40px", color: "#888" }}
              >
                <Package
                  size={32}
                  style={{ opacity: 0.2, marginBottom: "12px" }}
                />
                <p style={{ fontSize: "0.9rem" }}>No products listed yet.</p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {products.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: "flex",
                      gap: "12px",
                      padding: "12px",
                      borderRadius: "12px",
                      background: "#fcfcfc",
                      border: "1px solid #eee",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={p.image}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                      alt={p.name}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                        {p.name}
                      </div>
                      <div
                        style={{
                          color: "var(--trust-blue)",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                        }}
                      >
                        {p.price}
                      </div>
                    </div>
                    <button
                      onClick={() => onDeleteProduct(p.id)}
                      style={{
                        color: "#ff4d4d",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AdminPanel = ({ profile }) => null; // Removed in favor of AdminDashboard

const App = () => {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [initialAuthRole, setInitialAuthRole] = useState('user');
  const [notification, setNotification] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productSaving, setProductSaving] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [supplierStats, setSupplierStats] = useState({
    listings: 0,
    inquiries: 0,
  });
  const [supplierInquiries, setSupplierInquiries] = useState([]);
  const [supplierProducts, setSupplierProducts] = useState([]);
  const [userSavedProducts, setUserSavedProducts] = useState([]);
  const [userCalcHistory, setUserCalcHistory] = useState([]);
  const [userInquiries, setUserInquiries] = useState([]);
  const [passwordRecoveryMode, setPasswordRecoveryMode] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const location = useLocation();

  if (location.pathname.startsWith("/print-quote/")) {
    return <QuoteRequestPrint />;
  }
  if (location.pathname === "/terms") return <TermsPage />;
  if (location.pathname === "/privacy") return <PrivacyPolicyPage />;
  if (location.pathname === "/help") return <HelpCenterPage />;
  if (location.pathname === "/partners" || location.pathname === "/partners/") {
    return (
      <div className="App">
        <Navbar 
          session={session} 
          profile={profile} 
          onAuthClick={() => openAuthWithRole('user')} 
          onLogout={handleLogout}
          cartCount={cartItems.length}
          onCartClick={() => setIsCartOpen(true)}
        />
        <PartnerOnboarding onMemberClick={openAuthWithRole} />
        {showAuth && (
          <AuthForm 
            onClose={() => setShowAuth(false)} 
            onAuthComplete={() => setShowAuth(false)}
            initialRole={initialAuthRole}
          />
        )}
        <Footer openAuthWithRole={openAuthWithRole} />
      </div>
    );
  }

  // Handle Cart Persistence and Isolation
  useEffect(() => {
    if (session?.user?.id) {
      const savedCart = localStorage.getItem(`cart_${session.user.id}`);
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error("Failed to parse cart", e);
          setCartItems([]);
        }
      } else {
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    if (session?.user?.id) {
      localStorage.setItem(
        `cart_${session.user.id}`,
        JSON.stringify(cartItems),
      );
    }
  }, [cartItems, session?.user?.id]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    notify(`${product.name} added to your solar cart!`, "success");
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const saveProduct = async (productData) => {
    setProductSaving(true);
    console.log("Starting product save process...", productData);
    try {
      let imageUrl = "";

      // 1. Upload Image to Supabase Storage
      if (productData.imageFile) {
        const file = productData.imageFile;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${session.user.id}/${fileName}`;

        console.log("Uploading file to bucket 'Product'...", filePath);
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from("Product")
          .upload(filePath, file);

        if (uploadError) {
          console.error("Upload error details:", uploadError);
          throw new Error(
            `Upload failed: ${uploadError.message}. Make sure the 'Product' bucket exists and has public 'insert' policies.`,
          );
        }

        console.log("Upload successful, fetching public URL...");
        const {
          data: { publicUrl },
        } = supabase.storage.from("Product").getPublicUrl(filePath);

        imageUrl = publicUrl;
        console.log("Public URL generated:", imageUrl);
      }

      // 2. Save Product to Database
      console.log("Inserting product into database...");
      const { imageFile, previewUrl, ...dbData } = productData;
      const { error: dbError } = await supabase.from("products").insert([
        {
          ...dbData,
          image: imageUrl,
          supplier_id: session.user.id,
          slug:
            productData.name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "") +
            "-" +
            Math.random().toString(36).substr(2, 5),
          verified: true,
        },
      ]);

      if (dbError) {
        console.error("Database error details:", dbError);
        if (dbError.message.includes("foreign key constraint")) {
          throw new Error(
            `Database save failed. Your account needs to be initialized in the supplier list. Please run the 'Supplier Database Fix' SQL script provided in our last message.`,
          );
        }
        throw new Error(`Database save failed: ${dbError.message}`);
      }

      notify("Product listed successfully with image!", "success");
      setShowAddProduct(false);
      setRefreshTrigger((prev) => prev + 1);
      fetchSupplierData(); // Refresh stats
    } catch (err) {
      console.error("Caught error in saveProduct:", err);
      notify(err.message || "An unknown error occurred", "error");
    } finally {
      setProductSaving(false);
    }
  };

  const updateInquiryStatus = async (inquiryId, newStatus) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ status: newStatus })
        .eq("id", inquiryId);

      if (error) throw error;
      setSupplierInquiries((prev) =>
        prev.map((iq) =>
          iq.id === inquiryId ? { ...iq, status: newStatus } : iq,
        ),
      );
      notify(`Status updated to ${newStatus}`, "success");
      fetchSupplierData();
    } catch (err) {
      notify("Failed to update status", "error");
    }
  };

  const deleteProduct = async (productId) => {
    if (!confirm("Are you sure you want to delete this product listing?"))
      return;
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", productId);

      if (error) throw error;
      notify("Product deleted successfully", "success");
      setRefreshTrigger((prev) => prev + 1);
      fetchSupplierData();
    } catch (err) {
      notify("Failed to delete product", "error");
    }
  };

  const handleCartQuoteRequest = async (items) => {
    if (!session) {
      notify("Please login to request a quote.", "info");
      return;
    }

    try {
      setProductSaving(true);
      const buyerId = session.user.id;
      const phone = profile?.phone || "N/A";

      // Create an inquiry for each item in the cart
      const inquiryPromises = items.map((item) => {
        const packedMessage = `QTY: 1 | PHONE: ${phone} | NOTES: Requested from cart`;
        return supabase.from("inquiries").insert([
          {
            product_id: item.id,
            supplier_id: item.supplier_id,
            buyer_id: buyerId,
            message: packedMessage,
            status: "pending",
          },
        ]);
      });

      const results = await Promise.all(inquiryPromises);
      const errors = results.filter((r) => r.error).map((r) => r.error);

      if (errors.length > 0) {
        console.error("Errors during cart quote submission:", errors);
        throw new Error(`Failed to submit some quote requests.`);
      }

      // Trigger Email Notifications via Edge Function
      try {
        const emailPromises = items.map(item => 
          supabase.functions.invoke('hyper-api', {
            body: {
              product_name: item.name,
              customer_email: session.user.email,
              customer_phone: phone,
              quantity: 1,
              notes: "Requested from cart"
            }
          })
        );
        await Promise.all(emailPromises);
        console.log("Cart email notifications triggered.");
      } catch (emailErr) {
        console.error("Failed to trigger cart email notifications:", emailErr);
      }

      notify(
        `Successfully requested quotes for ${items.length} items!`,
        "success",
      );
      setCartItems([]); // Clear cart
      localStorage.removeItem(`cart_${buyerId}`);
      setIsCartOpen(false);
      fetchUserData(); // Refresh user dashboard
    } catch (err) {
      console.error("Cart quote submission error:", err);
      notify(err.message || "Failed to submit quote request", "error");
    } finally {
      setProductSaving(false);
    }
  };

  const toggleSaveProduct = async (productId) => {
    if (!session) {
      notify("Please login to save products", "info");
      return;
    }
    try {
      const alreadySaved = userSavedProducts.find(
        (sp) => sp.product_id === productId,
      );
      if (alreadySaved) {
        const { error } = await supabase
          .from("saved_products")
          .delete()
          .eq("id", alreadySaved.id);
        if (error) throw error;
        notify("Product removed from wishlist", "info");
      } else {
        const { error } = await supabase
          .from("saved_products")
          .insert([{ user_id: session.user.id, product_id: productId }]);
        if (error) throw error;
        notify("Product saved to wishlist", "success");
      }
      fetchUserData();
    } catch (err) {
      notify("Error saving product", "error");
    }
  };

  const removeSavedProduct = async (id) => {
    try {
      const { error } = await supabase
        .from("saved_products")
        .delete()
        .eq("id", id);
      if (error) throw error;
      fetchUserData();
    } catch (err) {
      notify("Failed to remove item", "error");
    }
  };

  const deleteCalculatorResult = async (id) => {
    try {
      const { error } = await supabase
        .from("calculator_results")
        .delete()
        .eq("id", id);
      if (error) throw error;
      notify("Calculation history item deleted", "info");
      fetchUserData();
    } catch (err) {
      notify("Failed to delete history item", "error");
    }
  };

  const saveCalculatorResult = async (resultData) => {
    if (!session) {
      notify("Please login to save results", "info");
      return;
    }
    try {
      const { error } = await supabase.from("calculator_results").insert([
        {
          user_id: session.user.id,
          monthly_bill: resultData.bill,
          system_size: resultData.systemSize,
          estimated_cost: resultData.estimatedCost,
          battery_capacity: resultData.batteryCapacity || 0,
          panel_count: resultData.panelCount || 0,
        },
      ]);
      if (error) throw error;
      notify("Calculation saved to dashboard!", "success");
      fetchUserData();
    } catch (err) {
      notify("Failed to save result", "error");
    }
  };

  const fetchUserData = async () => {
    if (!session || profile?.role !== "user") return;
    try {
      // Fetch saved products with product details
      const { data: savedData } = await supabase
        .from("saved_products")
        .select("*, products(*)")
        .eq("user_id", session.user.id);

      // Fetch calculator results
      const { data: calcData } = await supabase
        .from("calculator_results")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      // Fetch inquiries sent by this user
      const { data: inquiryData } = await supabase
        .from("inquiries")
        .select("*, products(name)")
        .eq("buyer_id", session.user.id)
        .order("created_at", { ascending: false });

      setUserSavedProducts(savedData || []);
      setUserCalcHistory(calcData || []);
      setUserInquiries(inquiryData || []);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  const fetchSupplierData = async () => {
    if (!session || profile?.role !== "supplier") return;

    try {
      // Fetch Products list
      const { data: productData, count: listingCount } = await supabase
        .from("products")
        .select("*", { count: "exact" })
        .eq("supplier_id", session.user.id)
        .order("created_at", { ascending: false });

      // Fetch Inquiries with details
      const { data: inquiryData, count: inquiryCount } = await supabase
        .from("inquiries")
        .select("*, products(name), buyer:profiles!inquiries_buyer_id_fkey(full_name, email)", {
          count: "exact",
        })
        .eq("supplier_id", session.user.id)
        .order("created_at", { ascending: false });

      setSupplierStats({
        listings: listingCount || 0,
        inquiries: inquiryCount || 0,
      });
      setSupplierInquiries(inquiryData || []);
      setSupplierProducts(productData || []);
    } catch (err) {
      console.error("Error fetching supplier data:", err);
    }
  };

  useEffect(() => {
    if (session && profile?.role === "supplier") {
      fetchSupplierData();
    } else if (session && profile?.role === "user") {
      fetchUserData();
    }
  }, [session, profile, refreshTrigger]);

  const openAuthWithRole = (role) => {
    setInitialAuthRole(role);
    setShowAuth(true);
  };

  const notify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  useEffect(() => {
    // Handle session check
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);
        if (session) await fetchProfile(session.user.id);
      } finally {
        setAuthLoading(false);
      }
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event);
      if (event === "PASSWORD_RECOVERY") {
        setPasswordRecoveryMode(true);
      }

      setSession(session);
      if (session) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setCartItems([]); // Clear UI state on logout
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (uid) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", uid)
      .single();
    if (!error) setProfile(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (authLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--sky-blue)",
        }}
      >
        <div className="spinner" style={{ marginBottom: "16px" }}></div>
        <div style={{ fontWeight: 700, color: "var(--trust-blue)" }}>
          Connecting to SunGate...
        </div>
      </div>
    );
  }

  if (passwordRecoveryMode) {
    return (
      <AuthForm
        isFullPage={true}
        isUpdatePassword={true}
        onAuthComplete={() => {
          setPasswordRecoveryMode(false);
          // Redirect or refresh to clear URL params if needed, but setState is enough for SPA
          window.location.hash = "";
        }}
      />
    );
  }

  if (!session) {
    return <AuthForm isFullPage={true} />;
  }

  return (
    <div className="app">
      <Navbar
        session={session}
        profile={profile}
        onAuthClick={() => setShowAuth(true)}
        onLogout={handleLogout}
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onNotify={notify}
        onQuoteRequest={handleCartQuoteRequest}
      />

      {showAuth && (
        <AuthForm
          onClose={() => setShowAuth(false)}
          onAuthComplete={() => setShowAuth(false)}
        />
      )}

      {notification && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 2000,
            background:
              notification.type === "success"
                ? "var(--zambia-green)"
                : "var(--trust-blue)",
            color: "white",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            animation: "slideUp 0.3s ease-out",
          }}
        >
          <ShieldCheck size={20} />
          <span style={{ fontWeight: 600 }}>{notification.message}</span>
        </div>
      )}

      {profile?.role === "admin" && <AdminPanel profile={profile} />}
      {profile?.role === "supplier" && (
        <SupplierDashboard
          profile={profile}
          onAddProduct={() => setShowAddProduct(true)}
          stats={supplierStats}
          inquiries={supplierInquiries}
          products={supplierProducts}
          onUpdateInquiryStatus={updateInquiryStatus}
          onDeleteProduct={deleteProduct}
        />
      )}
      {profile?.role === "admin" && session && (
        <AdminDashboard profile={profile} />
      )}
      {profile?.role === "user" && session && (
        <UserDashboard
          profile={profile}
          savedProducts={userSavedProducts}
          calcHistory={userCalcHistory}
          userInquiries={userInquiries}
          onRemoveSaved={removeSavedProduct}
          onDeleteHistory={deleteCalculatorResult}
          setPdfUrl={setPdfUrl}
          setShowPdfModal={setShowPdfModal}
        />
      )}

      <AddProductModal
        isOpen={showAddProduct}
        onClose={() => setShowAddProduct(false)}
        onSave={saveProduct}
        loading={productSaving}
      />

      {/* PDF Viewer Modal */}
      {showPdfModal && pdfUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000,
          }}
          onClick={() => setShowPdfModal(false)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "900px",
              height: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: "16px",
                borderBottom: "1px solid #eee",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: 0 }}>Quote Document</h3>
              <button
                onClick={() => setShowPdfModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                ×
              </button>
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <iframe
                src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Quote Document"
              />
            </div>
            <div
              style={{
                padding: "12px",
                borderTop: "1px solid #eee",
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#666",
              }}
            >
              Note: Right-click and "Save As" to download if needed
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header
        style={{
          position: "relative",
          padding: "120px 0",
          background:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="badge badge-verified"
            style={{
              marginBottom: "24px",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.4)",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <ShieldCheck
              size={16}
              style={{ marginRight: "8px", color: "var(--sun-gold)" }}
            />
            #1 Trusted Solar Marketplace in Zambia
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 800,
              marginBottom: "24px",
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Power Your Life. <br />
            <span style={{ color: "var(--sun-gold)" }}>End Load-Shedding.</span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#f0f0f0",
              marginBottom: "48px",
              maxWidth: "700px",
              margin: "0 auto 48px",
              lineHeight: 1.6,
            }}
          >
            Compare prices on batteries & inverters, find certified installers,
            and get a custom solar quote in minutes.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <a
              href="#marketplace"
              className="btn btn-primary"
              style={{ padding: "16px 32px", fontSize: "1.1rem" }}
            >
              <ShoppingCart size={20} style={{ marginRight: "8px" }} />
              Shop Solar Products
            </a>
            <a
              href="#installers"
              className="btn"
              style={{
                background: "white",
                color: "var(--trust-blue)",
                padding: "16px 32px",
                fontSize: "1.1rem",
                fontWeight: 700,
              }}
            >
              <User size={20} style={{ marginRight: "8px" }} />
              Find an Installer
            </a>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--trust-blue)",
                marginBottom: "16px",
              }}
            >
              How SunGate Works
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              Get verified solar power in 3 simple steps
            </p>
          </div>
          <div className="grid grid-3">
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#f8f9fa",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--sky-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <Calculator size={40} color="var(--trust-blue)" />
              </div>
              <h3 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>
                1. Calculate Needs
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Use our smart calculator to properly size your inverter and
                battery needs based on your appliances.
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#fff8e1",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#ffe082",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <ShoppingCart size={40} color="#ff6f00" />
              </div>
              <h3 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>
                2. Shop Marketplace
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Compare prices from vetted Zambian suppliers. Buy panels,
                batteries, and inverters directly.
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#e8f5e9",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#a5d6a7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
              >
                <User size={40} color="#2e7d32" />
              </div>
              <h3 style={{ marginBottom: "16px", fontSize: "1.5rem" }}>
                3. Hire Installer
              </h3>
              <p style={{ color: "var(--text-muted)" }}>
                Connect with ERB-certified installers to safely set up your
                system and ensure valid warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div id="calculator">
          <SolarCalculator onSaveResult={saveCalculatorResult} />
        </div>

        {/* Why Choose Us Section */}
        <section
          style={{
            padding: "80px 0",
            background: "var(--trust-blue)",
            color: "white",
          }}
        >
          <div className="container">
            <div
              className="grid grid-2"
              style={{ alignItems: "center", gap: "60px" }}
            >
              <div>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>
                  Why Zambia Trusts SunGate
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    opacity: 0.9,
                    marginBottom: "40px",
                    lineHeight: 1.8,
                  }}
                >
                  The solar market is flooded with fakes and unqualified
                  technicians. SunGate is the only platform that validates every
                  product and installer.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <ShieldCheck size={28} color="var(--sun-gold)" />
                    <div>
                      <h4 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>
                        Verified Suppliers Only
                      </h4>
                      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                        We check TPINs and physical addresses.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <Award size={28} color="var(--sun-gold)" />
                    <div>
                      <h4 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>
                        ERB Certified Installers
                      </h4>
                      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                        Technicians with proven track records.
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <Heart size={28} color="var(--sun-gold)" />
                    <div>
                      <h4 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>
                        Buyer Protection
                      </h4>
                      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                        Secure payments and dispute resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  background: "white",
                  padding: "40px",
                  borderRadius: "24px",
                  color: "var(--text-dark)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    paddingBottom: "30px",
                    borderBottom: "1px solid #eee",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 800,
                      color: "var(--trust-blue)",
                    }}
                  >
                    500+
                  </div>
                  <p style={{ color: "#666" }}>Happy Families Powered</p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                      50+
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#666" }}>
                      Verified Suppliers
                    </p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                      2M
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#666" }}>
                      Watts Installed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="marketplace">
          <Marketplace
            session={session}
            profile={profile}
            onNotify={notify}
            onAddToCart={addToCart}
            refreshTrigger={refreshTrigger}
            savedProductIds={userSavedProducts.map((sp) => sp.product_id)}
            onToggleSave={toggleSaveProduct}
          />
        </div>
        <div id="installers">
          <InstallerDirectory onNotify={notify} />
        </div>
        <div id="blog">
          <KnowledgeHub />
        </div>
      </main>

      <Footer openAuthWithRole={openAuthWithRole} />
    </div>
  );
};

export default App;
