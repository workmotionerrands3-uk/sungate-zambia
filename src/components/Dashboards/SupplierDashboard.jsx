import React from "react";
import { Trash2 } from "lucide-react";

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
                    src={p.image}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "6px",
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
