import React from "react";
import { Trash2 } from "lucide-react";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

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
    <div className="container" style={{ width: "100%" }}>
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
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={onAddProduct}
            className="btn btn-primary"
            style={{ width: "100%", padding: "16px" }}
          >
            + Add New Product
          </button>
        </div>
      </div>

      <div className="grid grid-2" style={{ gap: "30px" }}>
        {/* Inquiries List */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h3 style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
            Incoming Inquiries
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {inquiries.length === 0 ? (
              <p style={{ color: "#888", textAlign: "center" }}>
                No inquiries received yet.
              </p>
            ) : (
              inquiries.map((iq) => (
                <div
                  key={iq.id}
                  style={{
                    padding: "20px",
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    background: "#fafafa",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "var(--trust-blue)",
                      }}
                    >
                      {iq.products?.name}
                    </span>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <select
                          value={iq.status}
                          onChange={(e) =>
                            onUpdateInquiryStatus(iq.id, e.target.value)
                          }
                          style={{
                            padding: "4px 8px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="quoted">Quoted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button 
                          onClick={() => { if(confirm("Are you sure you want to delete this inquiry?")) onUpdateInquiryStatus(iq.id, 'cancelled') }}
                          title="Cancel Inquiry"
                          style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', padding: '4px' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  <div style={{ fontSize: "0.85rem", marginBottom: "8px" }}>
                    <strong>From:</strong> {iq.buyer?.full_name} ({iq.buyer?.email})
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#555",
                      fontStyle: "italic",
                      margin: "10px 0",
                    }}
                  >
                    "{iq.message}"
                  </p>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      marginTop: "10px",
                    }}
                  >
                    Received: {new Date(iq.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* My Products */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>My Inventory</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {products.length === 0 ? (
              <p style={{ color: "#888", textAlign: "center" }}>
                No products listed.
              </p>
            ) : (
              products.map((p) => (
                <div
                  key={p.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "12px",
                    border: "1px solid #eee",
                    borderRadius: "10px",
                  }}
                >
                   <img 
                    src={p.image || FALLBACK_IMAGE} 
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "6px",
                      objectFit: "cover",
                    }}
                    alt={p.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--zambia-green)",
                        fontWeight: 700,
                      }}
                    >
                      {p.price}
                    </div>
                  </div>
                  <button
                    onClick={() => onDeleteProduct(p.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ff4d4d",
                      cursor: "pointer",
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SupplierDashboard;
