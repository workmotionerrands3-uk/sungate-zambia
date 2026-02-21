import React from "react";
import { Link } from "react-router-dom";
import { Sun, MessageCircle, Phone, MapPin } from "lucide-react";

const StandardFooter = ({ openAuthWithRole }) => (
  <footer
    style={{
      background: "#1a1a1a",
      color: "#e0e0e0",
      padding: "80px 0 40px",
    }}
  >
    <div className="container" style={{ width: "100%" }}>
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
              <Link
                to="/partners"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Become a Partner
              </Link>
            </li>
            <li>
              <Link
                to="/#marketplace"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/#installers"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Find Installer
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                style={{ color: "#aaa", textDecoration: "none" }}
              >
                Energy Tips
              </Link>
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
          <Link
            to="/privacy"
            style={{ color: "#666", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            style={{ color: "#666", textDecoration: "none" }}
          >
            Terms & Conditions
          </Link>
          <Link to="/#sitemap" style={{ color: "#666", textDecoration: "none" }}>
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default StandardFooter;
