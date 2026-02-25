import { Calculator, Trash2, Heart, MessageCircle, Award } from "lucide-react";
import PromotionBanner from "../PromotionBanner";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const UserDashboard = ({
  profile,
  savedProducts,
  calcHistory,
  userInquiries,
  onRemoveSaved,
  onDeleteHistory,
  onDeleteInquiry,
  setPdfUrl,
  setShowPdfModal,
  onRoleUpgrade,
  onAuthClick
}) => (
  <section
    style={{
      padding: "60px 0",
      background: "linear-gradient(to bottom, #f8f9fa, #ffffff)",
    }}
  >
    <div className="container">
      {/* Promotion Banner for regular users */}
      {profile?.role === 'user' && (
        <PromotionBanner onUpgrade={() => onAuthClick('installer', 'Professional Installer Plan')} />
      )}

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
            {profile?.role === 'installer' ? 'Pro Partner Console' : 'Customer Command Center'}
          </div>
          <h2 style={{ fontSize: "2rem", margin: 0 }}>
            Welcome back, {profile?.full_name}!
          </h2>
        </div>
      </div>

      <div className="user-dashboard-grid transition-all">
        {/* 1. Calculator History */}
        <div
          className="savings-card dashboard-card"
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
                    className="btn-icon-delete"
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(255, 77, 77, 0.05)",
                      border: "1px solid #ffebeb",
                      color: "#ff4d4d",
                      cursor: "pointer",
                      padding: "8px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Wishlist */}
        <div
          className="wishlist-card dashboard-card"
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
                    src={sp.products?.image || FALLBACK_IMAGE} 
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    alt={sp.products?.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
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
                    className="btn-icon-delete"
                    style={{
                      background: "rgba(255, 77, 77, 0.05)",
                      border: "1px solid #ffebeb",
                      color: "#ff4d4d",
                      cursor: "pointer",
                      padding: "8px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Quote Requests */}
        <div
          className="quotes-card dashboard-card"
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
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>
                        {iq.products?.name}
                        </div>
                        <button 
                            onClick={() => onDeleteInquiry(iq.id)}
                            className="btn-icon-delete"
                            title="Cancel Request"
                            style={{ 
                                background: 'rgba(255, 77, 77, 0.1)', 
                                border: '1px solid #ffebeb', 
                                color: '#ff4d4d', 
                                cursor: 'pointer', 
                                padding: '8px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Trash2 size={16} />
                        </button>
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

        {/* End of Dashboard Grid */}
      </div>
    </div>
  </section>
);

export default UserDashboard;
