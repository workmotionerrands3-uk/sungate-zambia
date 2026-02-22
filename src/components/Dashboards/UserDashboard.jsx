import { Calculator, Trash2, Heart, MessageCircle, Award } from "lucide-react";

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
                    src={sp.products?.image}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    alt={sp.products?.name}
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

        {/* 4. Partner Opportunity */}
        {profile?.role === "user" && (
          <div
            className="dashboard-card dashboard-card-wide"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              padding: "24px",
              borderRadius: "16px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gridColumn: "span 3"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", padding: "10px", borderRadius: "12px" }}>
                <Award size={24} color="var(--sun-orange)" />
              </div>
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "white" }}>Professional Account Upgrade</h3>
            </div>
            
            <p style={{ opacity: 0.8, fontSize: "0.95rem", marginBottom: "24px", maxWidth: "800px" }}>
              Are you a solar equipment supplier or a certified installer? Upgrade your account to access professional tools, list products, and connect with customers across Zambia.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button 
                onClick={() => onRoleUpgrade("supplier")}
                className="btn btn-primary" 
                style={{ padding: "12px 24px" }}
              >
                Become a Supplier
              </button>
              <button 
                onClick={() => onRoleUpgrade("installer")}
                className="btn" 
                style={{ padding: "12px 24px", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Become an Installer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default UserDashboard;
