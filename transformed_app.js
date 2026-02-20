import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9ad667b2"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("E:/website learning code/sungate zambia/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9ad667b2"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=9ad667b2";
import QuoteRequestPrint from "/src/components/QuoteRequestPrint.jsx";
import { Sun, Menu, X, ShieldCheck, Zap, Phone, MessageCircle, ArrowRight, Star, Award, Heart, MapPin, LogOut, User, ShoppingCart, Plus, Trash2, Package, Calculator } from "/node_modules/.vite/deps/lucide-react.js?v=9ad667b2";
import { supabase } from "/src/lib/supabase.js";
import SolarCalculator from "/src/components/SolarCalculator.jsx";
import Marketplace from "/src/components/Marketplace.jsx";
import InstallerDirectory from "/src/components/InstallerDirectory.jsx";
import KnowledgeHub from "/src/components/KnowledgeHub.jsx";
import AuthForm from "/src/components/AuthForm.jsx";
import CartDrawer from "/src/components/CartDrawer.jsx";
import AdminDashboard from "/src/components/AdminDashboard.jsx";
import AddProductModal from "/src/components/AddProductModal.jsx";
import { TermsPage, PrivacyPolicyPage, HelpCenterPage } from "/src/components/LegalPages.jsx";
const Navbar = ({ session, profile, onAuthClick, onLogout, cartCount, onCartClick }) => {
  _s();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV("nav", { style: {
    position: "sticky",
    top: 0,
    zIndex: 1e3,
    background: "rgba(255,255,255,0.98)",
    backdropFilter: "blur(10px)",
    boxShadow: "var(--shadow-sm)"
  }, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "container", style: { display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "8px", fontWeight: 800, fontSize: "1.5rem", color: "var(--trust-blue)" }, children: [
        /* @__PURE__ */ jsxDEV(Sun, { size: 32, color: "var(--sun-orange)", fill: "var(--sun-gold)" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 47,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          "SunGate ",
          /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--zambia-green)" }, children: "Zambia" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 48,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 48,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "desktop-menu", style: { display: "flex", gap: "32px" }, children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#calculator", style: { fontWeight: 600, fontSize: "0.95rem" }, children: "Calculator" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#marketplace", style: { fontWeight: 600, fontSize: "0.95rem" }, children: "Marketplace" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#installers", style: { fontWeight: 600, fontSize: "0.95rem" }, children: "Installers" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#blog", style: { fontWeight: 600, fontSize: "0.95rem" }, children: "Knowledge" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "nav-actions", style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
        session ? /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: onCartClick,
              style: {
                background: "none",
                border: "none",
                position: "relative",
                color: "var(--trust-blue)",
                cursor: "pointer",
                padding: "8px"
              },
              children: [
                /* @__PURE__ */ jsxDEV(ShoppingCart, { size: 24 }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 68,
                  columnNumber: 33
                }, this),
                cartCount > 0 && /* @__PURE__ */ jsxDEV("span", { style: {
                  position: "absolute",
                  top: 0,
                  right: 0,
                  background: "var(--sun-orange)",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "2px 6px",
                  borderRadius: "99px",
                  border: "2px solid white"
                }, children: cartCount }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 70,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 61,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "right", display: "none", md: "block" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.8rem", fontWeight: 700, color: "var(--trust-blue)" }, children: profile?.full_name || "My Account" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 82,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.7rem", color: "#888", textTransform: "uppercase" }, children: profile?.role }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 85,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 81,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("button", { onClick: onLogout, className: "btn btn-secondary", style: { padding: "8px 12px", background: "#f5f5f5", color: "#666", border: "none" }, children: /* @__PURE__ */ jsxDEV(LogOut, { size: 18 }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 90,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 89,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 80,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("button", { onClick: onAuthClick, className: "btn btn-primary", style: { padding: "10px 20px", fontSize: "0.85rem" }, children: [
          /* @__PURE__ */ jsxDEV(User, { size: 18, style: { marginRight: "6px" } }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 96,
            columnNumber: 29
          }, this),
          " Login"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "mobile-menu-btn", onClick: () => setIsOpen(!isOpen), style: { background: "none", color: "var(--trust-blue)", border: "none" }, children: isOpen ? /* @__PURE__ */ jsxDEV(X, { size: 28 }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 100,
          columnNumber: 35
        }, this) : /* @__PURE__ */ jsxDEV(Menu, { size: 28 }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 100,
          columnNumber: 53
        }, this) }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    isOpen && /* @__PURE__ */ jsxDEV("div", { style: { position: "absolute", top: "80px", left: 0, right: 0, background: "white", padding: "30px", borderTop: "1px solid #eee", boxShadow: "var(--shadow-md)" }, children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [
      /* @__PURE__ */ jsxDEV("a", { href: "#calculator", onClick: () => setIsOpen(false), style: { fontSize: "1.1rem", fontWeight: 600 }, children: "Solar Calculator" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 108,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: "#marketplace", onClick: () => setIsOpen(false), style: { fontSize: "1.1rem", fontWeight: 600 }, children: "Marketplace" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 109,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: "#installers", onClick: () => setIsOpen(false), style: { fontSize: "1.1rem", fontWeight: 600 }, children: "Installer Directory" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 110,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("a", { href: "#blog", onClick: () => setIsOpen(false), style: { fontSize: "1.1rem", fontWeight: 600 }, children: "Knowledge Hub" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 111,
        columnNumber: 25
      }, this),
      !session && /* @__PURE__ */ jsxDEV("button", { onClick: () => {
        onAuthClick();
        setIsOpen(false);
      }, className: "btn btn-primary", style: { width: "100%" }, children: "Login / Sign Up" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 113,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 107,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("style", { children: `
                @media (max-width: 991px) { .desktop-menu { display: none !important; } }
                @media (min-width: 992px) { .mobile-menu-btn { display: none !important; } }
            ` }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 121,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
const UserDashboard = ({ profile, savedProducts, onToggleSave, calcHistory, userInquiries, onRemoveSaved, onDeleteHistory, setPdfUrl, setShowPdfModal }) => /* @__PURE__ */ jsxDEV("section", { style: { padding: "60px 0", background: "linear-gradient(to bottom, #f8f9fa, #ffffff)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
  /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }, children: /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "badge badge-verified", style: { marginBottom: "8px" }, children: "Customer Command Center" }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 134,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: "2rem", margin: 0 }, children: [
      "Welcome back, ",
      profile?.full_name,
      "!"
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 135,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 133,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 132,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", style: { gap: "24px" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "16px", boxShadow: "var(--shadow-md)", border: "1px solid #f0f0f0" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { background: "var(--sky-blue)", padding: "8px", borderRadius: "8px" }, children: /* @__PURE__ */ jsxDEV(Calculator, { size: 20, color: "var(--trust-blue)" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 145,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 144,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "My Savings" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 147,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 143,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }, children: [
          calcHistory.length,
          " SAVED"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 149,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 142,
        columnNumber: 21
      }, this),
      calcHistory.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "20px", color: "#888", background: "#fcfcfc", borderRadius: "12px" }, children: [
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.85rem" }, children: "No calculations saved yet." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 154,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#calculator", style: { fontSize: "0.8rem", color: "var(--trust-blue)", fontWeight: 700 }, children: "Try the Calculator →" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 155,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 153,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: calcHistory.map(
        (res) => /* @__PURE__ */ jsxDEV("div", { style: {
          padding: "12px",
          background: "#f9f9f9",
          borderRadius: "12px",
          border: "1px solid #eee",
          position: "relative",
          transition: "transform 0.2s ease"
        }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.9rem", fontWeight: 700, color: "var(--trust-blue)" }, children: [
            res.system_size,
            "kW System"
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 164,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.8rem", color: "var(--zambia-green)", fontWeight: 600 }, children: [
            "K",
            res.estimated_cost?.toLocaleString(),
            " Est. Cost"
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 165,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.7rem", color: "#999", marginTop: "4px" }, children: new Date(res.created_at).toLocaleDateString() }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 166,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => onDeleteHistory(res.id),
              style: { position: "absolute", top: "12px", right: "12px", background: "none", border: "none", color: "#ccc", cursor: "pointer" },
              onMouseOver: (e) => e.currentTarget.style.color = "#ff4d4d",
              onMouseOut: (e) => e.currentTarget.style.color = "#ccc",
              children: /* @__PURE__ */ jsxDEV(Trash2, { size: 14 }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 173,
                columnNumber: 41
              }, this)
            },
            void 0,
            false,
            {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 167,
              columnNumber: 37
            },
            this
          )
        ] }, res.id, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 160,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 141,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "16px", boxShadow: "var(--shadow-md)", border: "1px solid #f0f0f0" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { background: "#fff0f0", padding: "8px", borderRadius: "8px" }, children: /* @__PURE__ */ jsxDEV(Heart, { size: 20, color: "#ff4d4d", fill: "#ff4d4d" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 186,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 185,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "Wishlist" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 188,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 184,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }, children: [
          savedProducts.length,
          " ITEMS"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 190,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 183,
        columnNumber: 21
      }, this),
      savedProducts.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "20px", color: "#888", background: "#fcfcfc", borderRadius: "12px" }, children: [
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.85rem" }, children: "Your wishlist is empty." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 195,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#marketplace", style: { fontSize: "0.8rem", color: "var(--sun-orange)", fontWeight: 700 }, children: "Shop Marketplace →" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 196,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 194,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: savedProducts.map(
        (sp) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: "12px", alignItems: "center", padding: "10px", background: "#f9f9f9", borderRadius: "12px", border: "1px solid #eee" }, children: [
          /* @__PURE__ */ jsxDEV("img", { src: sp.products?.image, style: { width: "45px", height: "45px", borderRadius: "8px", objectFit: "cover" } }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 202,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700, fontSize: "0.85rem", color: "var(--text-dark)" }, children: sp.products?.name }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 204,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { color: "var(--trust-blue)", fontWeight: 800, fontSize: "0.8rem" }, children: sp.products?.price }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 205,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 203,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => onRemoveSaved(sp.id),
              style: { background: "none", border: "none", color: "#ccc", cursor: "pointer" },
              onMouseOver: (e) => e.currentTarget.style.color = "#ff4d4d",
              onMouseOut: (e) => e.currentTarget.style.color = "#ccc",
              children: /* @__PURE__ */ jsxDEV(Trash2, { size: 16 }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 210,
                columnNumber: 41
              }, this)
            },
            void 0,
            false,
            {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 207,
              columnNumber: 37
            },
            this
          )
        ] }, sp.id, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 201,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 182,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "16px", boxShadow: "var(--shadow-md)", border: "1px solid #f0f0f0" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { background: "#e8f5e9", padding: "8px", borderRadius: "8px" }, children: /* @__PURE__ */ jsxDEV(MessageCircle, { size: 20, color: "var(--zambia-green)" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 223,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 222,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "Quotes" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 225,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 221,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { fontSize: "0.75rem", fontWeight: 700, color: "#bbb" }, children: [
          userInquiries.length,
          " ACTIVE"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 227,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 220,
        columnNumber: 21
      }, this),
      userInquiries.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "20px", color: "#888", background: "#fcfcfc", borderRadius: "12px" }, children: /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.85rem" }, children: "No active quote requests." }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 232,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 231,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: userInquiries.map(
        (iq) => /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px", background: "#f9f9f9", borderRadius: "12px", border: "1px solid #eee" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700, fontSize: "0.85rem" }, children: iq.products?.name }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 239,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: {
              fontSize: "0.65rem",
              padding: "2px 6px",
              borderRadius: "6px",
              background: iq.status === "pending" ? "#fff3e0" : iq.status === "quoted" ? "#e8f5e9" : "#e0f2f1",
              color: iq.status === "pending" ? "#ef6c00" : iq.status === "quoted" ? "#2e7d32" : "#00695c",
              fontWeight: 800,
              textTransform: "uppercase"
            }, children: iq.status }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 240,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 238,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.75rem", color: "#888", fontStyle: "italic", marginBottom: "8px" }, children: [
            '"',
            iq.message,
            '"'
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 247,
            columnNumber: 37
          }, this),
          (iq.admin_response || iq.quote_price || iq.quote_pdf_url) && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: "12px", padding: "12px", background: "#e8f5e9", borderRadius: "8px", borderLeft: "3px solid var(--zambia-green)" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.75rem", fontWeight: 700, color: "var(--zambia-green)", marginBottom: "6px" }, children: "✓ Admin Response" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 252,
              columnNumber: 45
            }, this),
            iq.quote_price && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.85rem", fontWeight: 700, color: "#111", marginBottom: "4px" }, children: [
              "Quote: ",
              iq.quote_price
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 253,
              columnNumber: 64
            }, this),
            iq.admin_response && /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.8rem", color: "#555", marginBottom: "8px" }, children: iq.admin_response }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 254,
              columnNumber: 67
            }, this),
            iq.quote_pdf_url && /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => {
                  console.log("Opening PDF:", iq.quote_pdf_url);
                  setPdfUrl(iq.quote_pdf_url);
                  setShowPdfModal(true);
                },
                style: { padding: "6px 12px", background: "var(--trust-blue)", color: "white", border: "none", borderRadius: "6px", fontSize: "0.8rem", cursor: "pointer", marginTop: "4px" },
                children: "📄 View Quote Document"
              },
              void 0,
              false,
              {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 256,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 251,
            columnNumber: 13
          }, this)
        ] }, iq.id, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 237,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 235,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 219,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 139,
    columnNumber: 13
  }, this)
] }, void 0, true, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 131,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 130,
  columnNumber: 1
}, this);
_c2 = UserDashboard;
const SupplierDashboard = ({ profile, onAddProduct, stats, inquiries, products, onUpdateInquiryStatus, onDeleteProduct }) => /* @__PURE__ */ jsxDEV("section", { style: { padding: "60px 0", background: "linear-gradient(to right, #e3f2fd, #ffffff)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "badge", style: { background: "var(--zambia-green)", color: "white", marginBottom: "16px" }, children: "Supplier Panel" }, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 282,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("h2", { children: [
    "Partner Portal: ",
    profile?.full_name
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 283,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", style: { marginTop: "30px", marginBottom: "40px" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "2.5rem", fontWeight: 800, color: "var(--trust-blue)" }, children: stats.listings }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 287,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600, color: "#666" }, children: "Active Listings" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 288,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 286,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "2.5rem", fontWeight: 800, color: "var(--sun-orange)" }, children: stats.inquiries }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 291,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600, color: "#666" }, children: "Active Inquiries" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 292,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 290,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "24px", borderRadius: "12px", boxShadow: "var(--shadow-sm)", display: "flex", alignItems: "center" }, children: /* @__PURE__ */ jsxDEV("button", { onClick: onAddProduct, className: "btn btn-primary", style: { width: "100%", padding: "16px" }, children: [
      /* @__PURE__ */ jsxDEV(Plus, { size: 18, style: { marginRight: "8px" } }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 296,
        columnNumber: 25
      }, this),
      " Add New Product"
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 295,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 294,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 285,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", style: { gap: "30px" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", borderRadius: "16px", boxShadow: "var(--shadow-md)", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "24px", borderBottom: "1px solid #eee" }, children: /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0 }, children: "Recent Inquiries" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 304,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 303,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "20px" }, children: inquiries.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "40px", color: "#888" }, children: [
        /* @__PURE__ */ jsxDEV(MessageCircle, { size: 32, style: { opacity: 0.2, marginBottom: "12px" } }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 309,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.9rem" }, children: "No quote requests yet." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 310,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 308,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: inquiries.map(
        (iq) => /* @__PURE__ */ jsxDEV("div", { style: { padding: "16px", borderRadius: "12px", background: "#fcfcfc", border: "1px solid #eee" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700 }, children: iq.products?.name }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 317,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: {
              fontSize: "0.7rem",
              padding: "2px 8px",
              borderRadius: "12px",
              background: iq.status === "pending" ? "#fff3e0" : "#e8f5e9",
              color: iq.status === "pending" ? "#ef6c00" : "#2e7d32"
            }, children: iq.status.toUpperCase() }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 318,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 316,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "0.85rem", color: "#666" }, children: [
            "From: ",
            iq.profiles?.full_name,
            " (",
            iq.profiles?.email,
            ")"
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 324,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginTop: "12px", display: "flex", gap: "10px" }, children: [
            /* @__PURE__ */ jsxDEV(
              "select",
              {
                value: iq.status,
                onChange: (e) => onUpdateInquiryStatus(iq.id, e.target.value),
                style: { padding: "4px", borderRadius: "4px", fontSize: "0.75rem" },
                children: [
                  /* @__PURE__ */ jsxDEV("option", { value: "pending", children: "Pending" }, void 0, false, {
                    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                    lineNumber: 331,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "contacted", children: "Contacted" }, void 0, false, {
                    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                    lineNumber: 332,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ jsxDEV("option", { value: "completed", children: "Completed" }, void 0, false, {
                    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                    lineNumber: 333,
                    columnNumber: 49
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 326,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("a", { href: `mailto:${iq.profiles?.email}`, className: "btn", style: { padding: "4px 10px", fontSize: "0.75rem", background: "var(--trust-blue)", color: "white" }, children: "Email Customer" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 335,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 325,
            columnNumber: 41
          }, this)
        ] }, iq.id, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 315,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 313,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 306,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 302,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "white", borderRadius: "16px", boxShadow: "var(--shadow-md)", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "24px", borderBottom: "1px solid #eee" }, children: /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0 }, children: "My Products" }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 346,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 345,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "20px" }, children: products.length === 0 ? /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "40px", color: "#888" }, children: [
        /* @__PURE__ */ jsxDEV(Package, { size: 32, style: { opacity: 0.2, marginBottom: "12px" } }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 351,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.9rem" }, children: "No products listed yet." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 352,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 350,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: products.map(
        (p) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: "12px", padding: "12px", borderRadius: "12px", background: "#fcfcfc", border: "1px solid #eee", alignItems: "center" }, children: [
          /* @__PURE__ */ jsxDEV("img", { src: p.image, style: { width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover" }, alt: p.name }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 358,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700, fontSize: "0.9rem" }, children: p.name }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 360,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { color: "var(--trust-blue)", fontWeight: 800, fontSize: "0.85rem" }, children: p.price }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 361,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 359,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => onDeleteProduct(p.id),
              style: { color: "#ff4d4d", background: "none", border: "none", cursor: "pointer" },
              children: /* @__PURE__ */ jsxDEV(Trash2, { size: 18 }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 366,
                columnNumber: 45
              }, this)
            },
            void 0,
            false,
            {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 363,
              columnNumber: 41
            },
            this
          )
        ] }, p.id, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 357,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 355,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 348,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 344,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 301,
    columnNumber: 13
  }, this)
] }, void 0, true, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 281,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 280,
  columnNumber: 1
}, this);
_c3 = SupplierDashboard;
const AdminPanel = ({ profile }) => /* @__PURE__ */ jsxDEV("section", { style: { padding: "60px 0", background: "#111", color: "white" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "badge", style: { background: "red", color: "white", marginBottom: "16px" }, children: "SunGate Command Center" }, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 382,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("h2", { children: "Platform Administration" }, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 383,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ jsxDEV("div", { className: "grid grid-4", style: { marginTop: "30px" }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { background: "#222", padding: "20px", borderRadius: "8px" }, children: "Manage Users" }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 385,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "#222", padding: "20px", borderRadius: "8px" }, children: "Approve Suppliers" }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 386,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "#222", padding: "20px", borderRadius: "8px" }, children: "Content Management" }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 387,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { background: "#222", padding: "20px", borderRadius: "8px" }, children: "Analytics" }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 388,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 384,
    columnNumber: 13
  }, this)
] }, void 0, true, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 381,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
  lineNumber: 380,
  columnNumber: 1
}, this);
_c4 = AdminPanel;
const App = () => {
  _s2();
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [notification, setNotification] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productSaving, setProductSaving] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [supplierStats, setSupplierStats] = useState({ listings: 0, inquiries: 0 });
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
    return /* @__PURE__ */ jsxDEV(QuoteRequestPrint, {}, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 417,
      columnNumber: 12
    }, this);
  }
  if (location.pathname === "/terms") return /* @__PURE__ */ jsxDEV(TermsPage, {}, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 419,
    columnNumber: 46
  }, this);
  if (location.pathname === "/privacy") return /* @__PURE__ */ jsxDEV(PrivacyPolicyPage, {}, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 420,
    columnNumber: 48
  }, this);
  if (location.pathname === "/help") return /* @__PURE__ */ jsxDEV(HelpCenterPage, {}, void 0, false, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 421,
    columnNumber: 45
  }, this);
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
      localStorage.setItem(`cart_${session.user.id}`, JSON.stringify(cartItems));
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
      if (productData.imageFile) {
        const file = productData.imageFile;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${session.user.id}/${fileName}`;
        console.log("Uploading file to bucket 'Product'...", filePath);
        const { error: uploadError, data: uploadData } = await supabase.storage.from("Product").upload(filePath, file);
        if (uploadError) {
          console.error("Upload error details:", uploadError);
          throw new Error(`Upload failed: ${uploadError.message}. Make sure the 'Product' bucket exists and has public 'insert' policies.`);
        }
        console.log("Upload successful, fetching public URL...");
        const { data: { publicUrl } } = supabase.storage.from("Product").getPublicUrl(filePath);
        imageUrl = publicUrl;
        console.log("Public URL generated:", imageUrl);
      }
      console.log("Inserting product into database...");
      const { imageFile, previewUrl, ...dbData } = productData;
      const { error: dbError } = await supabase.from("products").insert([{
        ...dbData,
        image: imageUrl,
        supplier_id: session.user.id,
        slug: productData.name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") + "-" + Math.random().toString(36).substr(2, 5),
        verified: true
      }]);
      if (dbError) {
        console.error("Database error details:", dbError);
        if (dbError.message.includes("foreign key constraint")) {
          throw new Error(`Database save failed. Your account needs to be initialized in the supplier list. Please run the 'Supplier Database Fix' SQL script provided in our last message.`);
        }
        throw new Error(`Database save failed: ${dbError.message}`);
      }
      notify("Product listed successfully with image!", "success");
      setShowAddProduct(false);
      setRefreshTrigger((prev) => prev + 1);
      fetchSupplierData();
    } catch (err) {
      console.error("Caught error in saveProduct:", err);
      notify(err.message || "An unknown error occurred", "error");
    } finally {
      setProductSaving(false);
    }
  };
  const updateInquiryStatus = async (inquiryId, newStatus) => {
    try {
      const { error } = await supabase.from("inquiries").update({ status: newStatus }).eq("id", inquiryId);
      if (error) throw error;
      setSupplierInquiries((prev) => prev.map((iq) => iq.id === inquiryId ? { ...iq, status: newStatus } : iq));
      notify(`Status updated to ${newStatus}`, "success");
      fetchSupplierData();
    } catch (err) {
      notify("Failed to update status", "error");
    }
  };
  const deleteProduct = async (productId) => {
    if (!confirm("Are you sure you want to delete this product listing?")) return;
    try {
      const { error } = await supabase.from("products").delete().eq("id", productId);
      if (error) throw error;
      notify("Product deleted successfully", "success");
      setRefreshTrigger((prev) => prev + 1);
      fetchSupplierData();
    } catch (err) {
      notify("Failed to delete product", "error");
    }
  };
  const toggleSaveProduct = async (productId) => {
    if (!session) {
      notify("Please login to save products", "info");
      return;
    }
    try {
      const alreadySaved = userSavedProducts.find((sp) => sp.product_id === productId);
      if (alreadySaved) {
        const { error } = await supabase.from("saved_products").delete().eq("id", alreadySaved.id);
        if (error) throw error;
        notify("Product removed from wishlist", "info");
      } else {
        const { error } = await supabase.from("saved_products").insert([{ user_id: session.user.id, product_id: productId }]);
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
      const { error } = await supabase.from("saved_products").delete().eq("id", id);
      if (error) throw error;
      fetchUserData();
    } catch (err) {
      notify("Failed to remove item", "error");
    }
  };
  const deleteCalculatorResult = async (id) => {
    try {
      const { error } = await supabase.from("calculator_results").delete().eq("id", id);
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
      const { error } = await supabase.from("calculator_results").insert([{
        user_id: session.user.id,
        monthly_bill: resultData.bill,
        system_size: resultData.systemSize,
        estimated_cost: resultData.estimatedCost,
        battery_capacity: resultData.batteryCapacity || 0,
        panel_count: resultData.panelCount || 0
      }]);
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
      const { data: savedData } = await supabase.from("saved_products").select("*, products(*)").eq("user_id", session.user.id);
      const { data: calcData } = await supabase.from("calculator_results").select("*").eq("user_id", session.user.id).order("created_at", { ascending: false });
      const { data: inquiryData } = await supabase.from("inquiries").select("*, products(name)").eq("buyer_id", session.user.id).order("created_at", { ascending: false });
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
      const { data: productData, count: listingCount } = await supabase.from("products").select("*", { count: "exact" }).eq("supplier_id", session.user.id).order("created_at", { ascending: false });
      const { data: inquiryData, count: inquiryCount } = await supabase.from("inquiries").select("*, products(name), profiles(full_name, email)", { count: "exact" }).eq("supplier_id", session.user.id).order("created_at", { ascending: false });
      setSupplierStats({
        listings: listingCount || 0,
        inquiries: inquiryCount || 0
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
  const notify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5e3);
  };
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data: { session: session2 } } = await supabase.auth.getSession();
        setSession(session2);
        if (session2) await fetchProfile(session2.user.id);
      } finally {
        setAuthLoading(false);
      }
    };
    initializeAuth();
    initializeAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session2) => {
      console.log("Auth event:", event);
      if (event === "PASSWORD_RECOVERY") {
        setPasswordRecoveryMode(true);
      }
      setSession(session2);
      if (session2) {
        fetchProfile(session2.user.id);
      } else {
        setProfile(null);
        setCartItems([]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  const fetchProfile = async (uid) => {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", uid).single();
    if (!error) setProfile(data);
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  if (authLoading) {
    return /* @__PURE__ */ jsxDEV("div", { style: { height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--sky-blue)" }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "spinner", style: { marginBottom: "16px" } }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 737,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700, color: "var(--trust-blue)" }, children: "Connecting to SunGate..." }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 738,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 736,
      columnNumber: 7
    }, this);
  }
  if (passwordRecoveryMode) {
    return /* @__PURE__ */ jsxDEV(AuthForm, { isFullPage: true, isUpdatePassword: true, onAuthComplete: () => {
      setPasswordRecoveryMode(false);
      window.location.hash = "";
    } }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 744,
      columnNumber: 12
    }, this);
  }
  if (!session) {
    return /* @__PURE__ */ jsxDEV(AuthForm, { isFullPage: true }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 752,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "app", children: [
    /* @__PURE__ */ jsxDEV(
      Navbar,
      {
        session,
        profile,
        onAuthClick: () => setShowAuth(true),
        onLogout: handleLogout,
        cartCount: cartItems.length,
        onCartClick: () => setIsCartOpen(true)
      },
      void 0,
      false,
      {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 757,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      CartDrawer,
      {
        isOpen: isCartOpen,
        onClose: () => setIsCartOpen(false),
        items: cartItems,
        onRemove: removeFromCart,
        onNotify: notify
      },
      void 0,
      false,
      {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 766,
        columnNumber: 13
      },
      this
    ),
    showAuth && /* @__PURE__ */ jsxDEV(AuthForm, { onClose: () => setShowAuth(false), onAuthComplete: () => setShowAuth(false) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 774,
      columnNumber: 26
    }, this),
    notification && /* @__PURE__ */ jsxDEV("div", { style: {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: 2e3,
      background: notification.type === "success" ? "var(--zambia-green)" : "var(--trust-blue)",
      color: "white",
      padding: "16px 24px",
      borderRadius: "12px",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      animation: "slideUp 0.3s ease-out"
    }, children: [
      /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 20 }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 783,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: notification.message }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 784,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 777,
      columnNumber: 7
    }, this),
    profile?.role === "admin" && /* @__PURE__ */ jsxDEV(AdminPanel, { profile }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 788,
      columnNumber: 43
    }, this),
    profile?.role === "supplier" && /* @__PURE__ */ jsxDEV(
      SupplierDashboard,
      {
        profile,
        onAddProduct: () => setShowAddProduct(true),
        stats: supplierStats,
        inquiries: supplierInquiries,
        products: supplierProducts,
        onUpdateInquiryStatus: updateInquiryStatus,
        onDeleteProduct: deleteProduct
      },
      void 0,
      false,
      {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 790,
        columnNumber: 7
      },
      this
    ),
    profile?.role === "admin" && session && /* @__PURE__ */ jsxDEV(AdminDashboard, { profile }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 801,
      columnNumber: 7
    }, this),
    profile?.role === "user" && session && /* @__PURE__ */ jsxDEV(
      UserDashboard,
      {
        profile,
        savedProducts: userSavedProducts,
        calcHistory: userCalcHistory,
        userInquiries,
        onRemoveSaved: removeSavedProduct,
        onDeleteHistory: deleteCalculatorResult,
        setPdfUrl,
        setShowPdfModal
      },
      void 0,
      false,
      {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 804,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      AddProductModal,
      {
        isOpen: showAddProduct,
        onClose: () => setShowAddProduct(false),
        onSave: saveProduct,
        loading: productSaving
      },
      void 0,
      false,
      {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 816,
        columnNumber: 13
      },
      this
    ),
    showPdfModal && pdfUrl && /* @__PURE__ */ jsxDEV("div", { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3e3 }, onClick: () => setShowPdfModal(false), children: /* @__PURE__ */ jsxDEV("div", { style: { background: "white", borderRadius: "12px", width: "90%", maxWidth: "900px", height: "90vh", display: "flex", flexDirection: "column" }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "16px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxDEV("h3", { style: { margin: 0 }, children: "Quote Document" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 828,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => setShowPdfModal(false), style: { background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#666" }, children: "×" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 829,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 827,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, overflow: "hidden" }, children: /* @__PURE__ */ jsxDEV(
        "iframe",
        {
          src: pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0",
          style: { width: "100%", height: "100%", border: "none" },
          title: "Quote Document"
        },
        void 0,
        false,
        {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 832,
          columnNumber: 29
        },
        this
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 831,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { padding: "12px", borderTop: "1px solid #eee", textAlign: "center", fontSize: "0.85rem", color: "#666" }, children: 'Note: Right-click and "Save As" to download if needed' }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 838,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 826,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 825,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { style: {
      position: "relative",
      padding: "120px 0",
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/hero.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", style: { position: "relative", zIndex: 2 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "badge badge-verified", style: { marginBottom: "24px", background: "rgba(255,255,255,0.2)", color: "white", border: "1px solid rgba(255,255,255,0.4)", display: "inline-flex", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 16, style: { marginRight: "8px", color: "var(--sun-gold)" } }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 857,
          columnNumber: 25
        }, this),
        "#1 Trusted Solar Marketplace in Zambia"
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 856,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("h1", { style: {
        fontSize: "clamp(3rem, 6vw, 4.5rem)",
        fontWeight: 800,
        marginBottom: "24px",
        lineHeight: 1.1,
        textShadow: "0 4px 20px rgba(0,0,0,0.3)"
      }, children: [
        "Power Your Life. ",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 867,
          columnNumber: 42
        }, this),
        /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--sun-gold)" }, children: "End Load-Shedding." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 868,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 860,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "1.25rem", color: "#f0f0f0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px", lineHeight: 1.6 }, children: "Compare prices on batteries & inverters, find certified installers, and get a custom solar quote in minutes." }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 870,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }, children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#marketplace", className: "btn btn-primary", style: { padding: "16px 32px", fontSize: "1.1rem" }, children: [
          /* @__PURE__ */ jsxDEV(ShoppingCart, { size: 20, style: { marginRight: "8px" } }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 875,
            columnNumber: 29
          }, this),
          "Shop Solar Products"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 874,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#installers", className: "btn", style: { background: "white", color: "var(--trust-blue)", padding: "16px 32px", fontSize: "1.1rem", fontWeight: 700 }, children: [
          /* @__PURE__ */ jsxDEV(User, { size: 20, style: { marginRight: "8px" } }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 879,
            columnNumber: 29
          }, this),
          "Find an Installer"
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 878,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 873,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 855,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 846,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("section", { style: { padding: "80px 0", background: "white" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center", style: { marginBottom: "60px" }, children: [
        /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: "2.5rem", color: "var(--trust-blue)", marginBottom: "16px" }, children: "How SunGate Works" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 890,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--text-muted)", fontSize: "1.1rem" }, children: "Get verified solar power in 3 simple steps" }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 891,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 889,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "30px", background: "#f8f9fa", borderRadius: "20px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { width: "80px", height: "80px", background: "var(--sky-blue)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }, children: /* @__PURE__ */ jsxDEV(Calculator, { size: 40, color: "var(--trust-blue)" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 896,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 895,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { marginBottom: "16px", fontSize: "1.5rem" }, children: "1. Calculate Needs" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 898,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--text-muted)" }, children: "Use our smart calculator to properly size your inverter and battery needs based on your appliances." }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 899,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 894,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "30px", background: "#fff8e1", borderRadius: "20px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { width: "80px", height: "80px", background: "#ffe082", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }, children: /* @__PURE__ */ jsxDEV(ShoppingCart, { size: 40, color: "#ff6f00" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 903,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 902,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { marginBottom: "16px", fontSize: "1.5rem" }, children: "2. Shop Marketplace" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 905,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--text-muted)" }, children: "Compare prices from vetted Zambian suppliers. Buy panels, batteries, and inverters directly." }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 906,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 901,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", padding: "30px", background: "#e8f5e9", borderRadius: "20px" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { width: "80px", height: "80px", background: "#a5d6a7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }, children: /* @__PURE__ */ jsxDEV(User, { size: 40, color: "#2e7d32" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 910,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 909,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { style: { marginBottom: "16px", fontSize: "1.5rem" }, children: "3. Hire Installer" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 912,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--text-muted)" }, children: "Connect with ERB-certified installers to safely set up your system and ensure valid warranties." }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 913,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 908,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 893,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 888,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 887,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children: [
      /* @__PURE__ */ jsxDEV("div", { id: "calculator", children: /* @__PURE__ */ jsxDEV(SolarCalculator, { onSaveResult: saveCalculatorResult }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 920,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 920,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("section", { style: { padding: "80px 0", background: "var(--trust-blue)", color: "white" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", style: { alignItems: "center", gap: "60px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { style: { fontSize: "2.5rem", marginBottom: "24px" }, children: "Why Zambia Trusts SunGate" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 927,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "1.1rem", opacity: 0.9, marginBottom: "40px", lineHeight: 1.8 }, children: "The solar market is flooded with fakes and unqualified technicians. SunGate is the only platform that validates every product and installer." }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 928,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-start", gap: "16px" }, children: [
              /* @__PURE__ */ jsxDEV(ShieldCheck, { size: 28, color: "var(--sun-gold)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 933,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { style: { fontSize: "1.2rem", marginBottom: "4px" }, children: "Verified Suppliers Only" }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 935,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.9rem", opacity: 0.8 }, children: "We check TPINs and physical addresses." }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 936,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 934,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 932,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-start", gap: "16px" }, children: [
              /* @__PURE__ */ jsxDEV(Award, { size: 28, color: "var(--sun-gold)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 940,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { style: { fontSize: "1.2rem", marginBottom: "4px" }, children: "ERB Certified Installers" }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 942,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.9rem", opacity: 0.8 }, children: "Technicians with proven track records." }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 943,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 941,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 939,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "flex-start", gap: "16px" }, children: [
              /* @__PURE__ */ jsxDEV(Heart, { size: 28, color: "var(--sun-gold)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 947,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { style: { fontSize: "1.2rem", marginBottom: "4px" }, children: "Buyer Protection" }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 949,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.9rem", opacity: 0.8 }, children: "Secure payments and dispute resolution." }, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 950,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 948,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 946,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 931,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 926,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "white", padding: "40px", borderRadius: "24px", color: "var(--text-dark)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center", paddingBottom: "30px", borderBottom: "1px solid #eee", marginBottom: "30px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "4rem", fontWeight: 800, color: "var(--trust-blue)" }, children: "500+" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 957,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("p", { style: { color: "#666" }, children: "Happy Families Powered" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 958,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 956,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "2.5rem", fontWeight: 700 }, children: "50+" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 962,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.85rem", color: "#666" }, children: "Verified Suppliers" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 963,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 961,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { textAlign: "center" }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { fontSize: "2.5rem", fontWeight: 700 }, children: "2M" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 966,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "0.85rem", color: "#666" }, children: "Watts Installed" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 967,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 965,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 960,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 955,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 925,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 924,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 923,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { id: "marketplace", children: /* @__PURE__ */ jsxDEV(
        Marketplace,
        {
          session,
          profile,
          onNotify: notify,
          onAddToCart: addToCart,
          refreshTrigger,
          savedProductIds: userSavedProducts.map((sp) => sp.product_id),
          onToggleSave: toggleSaveProduct
        },
        void 0,
        false,
        {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 976,
          columnNumber: 21
        },
        this
      ) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 975,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { id: "installers", children: /* @__PURE__ */ jsxDEV(InstallerDirectory, { onNotify: notify }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 986,
        columnNumber: 38
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 986,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { id: "blog", children: /* @__PURE__ */ jsxDEV(KnowledgeHub, {}, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 987,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 987,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 919,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { style: { background: "#1a1a1a", color: "#e0e0e0", padding: "80px 0 40px" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-4", style: { marginBottom: "60px" }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { gridColumn: "span 1" }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: "10px", fontWeight: 800, fontSize: "1.5rem", marginBottom: "24px", color: "white" }, children: [
            /* @__PURE__ */ jsxDEV(Sun, { size: 32, color: "var(--sun-orange)", fill: "var(--sun-gold)" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 995,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "SunGate" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 996,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 994,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { color: "#888", lineHeight: 1.6, marginBottom: "24px" }, children: "Zambia's premier marketplace for solar energy solutions. Connecting functionality with sustainability." }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 998,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: "16px" }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { width: "36px", height: "36px", background: "#333", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(MessageCircle, { size: 18 }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1003,
              columnNumber: 186
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1003,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { width: "36px", height: "36px", background: "#333", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxDEV(Phone, { size: 18 }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1004,
              columnNumber: 186
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1004,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1001,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 993,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { style: { color: "white", marginBottom: "24px", fontSize: "1.1rem" }, children: "Sitemap" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1009,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }, children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#calculator", style: { color: "#aaa", textDecoration: "none" }, children: "Solar Calculator" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1011,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1011,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#marketplace", style: { color: "#aaa", textDecoration: "none" }, children: "Marketplace" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1012,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1012,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#installers", style: { color: "#aaa", textDecoration: "none" }, children: "Find Installer" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1013,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1013,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#blog", style: { color: "#aaa", textDecoration: "none" }, children: "Energy Tips" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1014,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1014,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1010,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 1008,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { style: { color: "white", marginBottom: "24px", fontSize: "1.1rem" }, children: "Support" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1019,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }, children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "/help", style: { color: "#aaa", textDecoration: "none" }, children: "Help Center" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1021,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1021,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", style: { color: "#aaa", textDecoration: "none" }, children: "Supplier Login" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1022,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1022,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "#", style: { color: "#aaa", textDecoration: "none" }, children: "Installer Registration" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1023,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1023,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: "/help", style: { color: "#aaa", textDecoration: "none" }, children: "Contact Us" }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1024,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1024,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1020,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 1018,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h4", { style: { color: "white", marginBottom: "24px", fontSize: "1.1rem" }, children: "Contact" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1029,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }, children: [
            /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", gap: "12px", color: "#aaa" }, children: [
              /* @__PURE__ */ jsxDEV(MapPin, { size: 20, color: "var(--sun-orange)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1032,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                "Lusaka, Zambia",
                /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                  fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                  lineNumber: 1033,
                  columnNumber: 57
                }, this),
                "Great East Road"
              ] }, void 0, true, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1033,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1031,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", gap: "12px", color: "#aaa" }, children: [
              /* @__PURE__ */ jsxDEV(Phone, { size: 20, color: "var(--sun-orange)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1036,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "0974300472" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1037,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1035,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", gap: "12px", color: "#aaa" }, children: [
              /* @__PURE__ */ jsxDEV(MessageCircle, { size: 20, color: "var(--sun-orange)" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1040,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "support@sungate.co.zm" }, void 0, false, {
                fileName: "E:/website learning code/sungate zambia/src/App.jsx",
                lineNumber: 1041,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "E:/website learning code/sungate zambia/src/App.jsx",
              lineNumber: 1039,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1030,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 1028,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 992,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { paddingTop: "30px", borderTop: "1px solid #333", textAlign: "center", fontSize: "0.85rem", color: "#666", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }, children: [
        /* @__PURE__ */ jsxDEV("span", { children: "© 2026 SunGate Zambia. All rights reserved." }, void 0, false, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 1048,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: "24px" }, children: [
          /* @__PURE__ */ jsxDEV("a", { href: "/privacy", style: { color: "#666", textDecoration: "none" }, children: "Privacy Policy" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1050,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "/terms", style: { color: "#666", textDecoration: "none" }, children: "Terms & Conditions" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1051,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("a", { href: "#", style: { color: "#666", textDecoration: "none" }, children: "Sitemap" }, void 0, false, {
            fileName: "E:/website learning code/sungate zambia/src/App.jsx",
            lineNumber: 1052,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "E:/website learning code/sungate zambia/src/App.jsx",
          lineNumber: 1049,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "E:/website learning code/sungate zambia/src/App.jsx",
        lineNumber: 1047,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 991,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "E:/website learning code/sungate zambia/src/App.jsx",
      lineNumber: 990,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "E:/website learning code/sungate zambia/src/App.jsx",
    lineNumber: 756,
    columnNumber: 5
  }, this);
};
_s2(App, "393zvSD0StJygXf24urdYYg9J84=", false, function() {
  return [useLocation];
});
_c5 = App;
export default App;
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "UserDashboard");
$RefreshReg$(_c3, "SupplierDashboard");
$RefreshReg$(_c4, "AdminPanel");
$RefreshReg$(_c5, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("E:/website learning code/sungate zambia/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("E:/website learning code/sungate zambia/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQW9LLGFBQUFsSyxLQUFBO0FBQUFrSyxhQUFBRCxLQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUxvY2F0aW9uIiwiUXVvdGVSZXF1ZXN0UHJpbnQiLCJTdW4iLCJNZW51IiwiWCIsIlNoaWVsZENoZWNrIiwiWmFwIiwiUGhvbmUiLCJNZXNzYWdlQ2lyY2xlIiwiQXJyb3dSaWdodCIsIlN0YXIiLCJBd2FyZCIsIkhlYXJ0IiwiTWFwUGluIiwiTG9nT3V0IiwiVXNlciIsIlNob3BwaW5nQ2FydCIsIlBsdXMiLCJUcmFzaDIiLCJQYWNrYWdlIiwiQ2FsY3VsYXRvciIsInN1cGFiYXNlIiwiU29sYXJDYWxjdWxhdG9yIiwiTWFya2V0cGxhY2UiLCJJbnN0YWxsZXJEaXJlY3RvcnkiLCJLbm93bGVkZ2VIdWIiLCJBdXRoRm9ybSIsIkNhcnREcmF3ZXIiLCJBZG1pbkRhc2hib2FyZCIsIkFkZFByb2R1Y3RNb2RhbCIsIlRlcm1zUGFnZSIsIlByaXZhY3lQb2xpY3lQYWdlIiwiSGVscENlbnRlclBhZ2UiLCJOYXZiYXIiLCJzZXNzaW9uIiwicHJvZmlsZSIsIm9uQXV0aENsaWNrIiwib25Mb2dvdXQiLCJjYXJ0Q291bnQiLCJvbkNhcnRDbGljayIsIl9zIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicG9zaXRpb24iLCJ0b3AiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZ2FwIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXIiLCJjdXJzb3IiLCJwYWRkaW5nIiwicmlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJtZCIsImZ1bGxfbmFtZSIsInRleHRUcmFuc2Zvcm0iLCJyb2xlIiwibWFyZ2luUmlnaHQiLCJsZWZ0IiwiYm9yZGVyVG9wIiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiX2MiLCJVc2VyRGFzaGJvYXJkIiwic2F2ZWRQcm9kdWN0cyIsIm9uVG9nZ2xlU2F2ZSIsImNhbGNIaXN0b3J5IiwidXNlcklucXVpcmllcyIsIm9uUmVtb3ZlU2F2ZWQiLCJvbkRlbGV0ZUhpc3RvcnkiLCJzZXRQZGZVcmwiLCJzZXRTaG93UGRmTW9kYWwiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJsZW5ndGgiLCJtYXAiLCJyZXMiLCJ0cmFuc2l0aW9uIiwic3lzdGVtX3NpemUiLCJlc3RpbWF0ZWRfY29zdCIsInRvTG9jYWxlU3RyaW5nIiwibWFyZ2luVG9wIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJpZCIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic3R5bGUiLCJzcCIsInByb2R1Y3RzIiwiaW1hZ2UiLCJvYmplY3RGaXQiLCJmbGV4IiwibmFtZSIsInByaWNlIiwiaXEiLCJzdGF0dXMiLCJmb250U3R5bGUiLCJtZXNzYWdlIiwiYWRtaW5fcmVzcG9uc2UiLCJxdW90ZV9wcmljZSIsInF1b3RlX3BkZl91cmwiLCJib3JkZXJMZWZ0IiwiY29uc29sZSIsImxvZyIsIl9jMiIsIlN1cHBsaWVyRGFzaGJvYXJkIiwib25BZGRQcm9kdWN0Iiwic3RhdHMiLCJpbnF1aXJpZXMiLCJvblVwZGF0ZUlucXVpcnlTdGF0dXMiLCJvbkRlbGV0ZVByb2R1Y3QiLCJsaXN0aW5ncyIsIm92ZXJmbG93IiwiYm9yZGVyQm90dG9tIiwib3BhY2l0eSIsInRvVXBwZXJDYXNlIiwicHJvZmlsZXMiLCJlbWFpbCIsInRhcmdldCIsInZhbHVlIiwicCIsIl9jMyIsIkFkbWluUGFuZWwiLCJfYzQiLCJBcHAiLCJfczIiLCJzZXRTZXNzaW9uIiwic2V0UHJvZmlsZSIsInNob3dBdXRoIiwic2V0U2hvd0F1dGgiLCJub3RpZmljYXRpb24iLCJzZXROb3RpZmljYXRpb24iLCJhdXRoTG9hZGluZyIsInNldEF1dGhMb2FkaW5nIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiaXNDYXJ0T3BlbiIsInNldElzQ2FydE9wZW4iLCJzaG93QWRkUHJvZHVjdCIsInNldFNob3dBZGRQcm9kdWN0IiwicHJvZHVjdFNhdmluZyIsInNldFByb2R1Y3RTYXZpbmciLCJyZWZyZXNoVHJpZ2dlciIsInNldFJlZnJlc2hUcmlnZ2VyIiwic3VwcGxpZXJTdGF0cyIsInNldFN1cHBsaWVyU3RhdHMiLCJzdXBwbGllcklucXVpcmllcyIsInNldFN1cHBsaWVySW5xdWlyaWVzIiwic3VwcGxpZXJQcm9kdWN0cyIsInNldFN1cHBsaWVyUHJvZHVjdHMiLCJ1c2VyU2F2ZWRQcm9kdWN0cyIsInNldFVzZXJTYXZlZFByb2R1Y3RzIiwidXNlckNhbGNIaXN0b3J5Iiwic2V0VXNlckNhbGNIaXN0b3J5Iiwic2V0VXNlcklucXVpcmllcyIsInBhc3N3b3JkUmVjb3ZlcnlNb2RlIiwic2V0UGFzc3dvcmRSZWNvdmVyeU1vZGUiLCJzaG93UGRmTW9kYWwiLCJwZGZVcmwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInVzZXIiLCJzYXZlZENhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXYiLCJub3RpZnkiLCJyZW1vdmVGcm9tQ2FydCIsImluZGV4IiwiZmlsdGVyIiwiXyIsImkiLCJzYXZlUHJvZHVjdCIsInByb2R1Y3REYXRhIiwiaW1hZ2VVcmwiLCJpbWFnZUZpbGUiLCJmaWxlIiwiZmlsZUV4dCIsInNwbGl0IiwicG9wIiwiZmlsZU5hbWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJub3ciLCJmaWxlUGF0aCIsInVwbG9hZEVycm9yIiwiZGF0YSIsInVwbG9hZERhdGEiLCJzdG9yYWdlIiwiZnJvbSIsInVwbG9hZCIsIkVycm9yIiwicHVibGljVXJsIiwiZ2V0UHVibGljVXJsIiwicHJldmlld1VybCIsImRiRGF0YSIsImRiRXJyb3IiLCJpbnNlcnQiLCJzdXBwbGllcl9pZCIsInNsdWciLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJzdWJzdHIiLCJ2ZXJpZmllZCIsImluY2x1ZGVzIiwiZmV0Y2hTdXBwbGllckRhdGEiLCJlcnIiLCJ1cGRhdGVJbnF1aXJ5U3RhdHVzIiwiaW5xdWlyeUlkIiwibmV3U3RhdHVzIiwidXBkYXRlIiwiZXEiLCJkZWxldGVQcm9kdWN0IiwicHJvZHVjdElkIiwiY29uZmlybSIsImRlbGV0ZSIsInRvZ2dsZVNhdmVQcm9kdWN0IiwiYWxyZWFkeVNhdmVkIiwiZmluZCIsInByb2R1Y3RfaWQiLCJ1c2VyX2lkIiwiZmV0Y2hVc2VyRGF0YSIsInJlbW92ZVNhdmVkUHJvZHVjdCIsImRlbGV0ZUNhbGN1bGF0b3JSZXN1bHQiLCJzYXZlQ2FsY3VsYXRvclJlc3VsdCIsInJlc3VsdERhdGEiLCJtb250aGx5X2JpbGwiLCJiaWxsIiwic3lzdGVtU2l6ZSIsImVzdGltYXRlZENvc3QiLCJiYXR0ZXJ5X2NhcGFjaXR5IiwiYmF0dGVyeUNhcGFjaXR5IiwicGFuZWxfY291bnQiLCJwYW5lbENvdW50Iiwic2F2ZWREYXRhIiwic2VsZWN0IiwiY2FsY0RhdGEiLCJvcmRlciIsImFzY2VuZGluZyIsImlucXVpcnlEYXRhIiwiY291bnQiLCJsaXN0aW5nQ291bnQiLCJpbnF1aXJ5Q291bnQiLCJ0eXBlIiwic2V0VGltZW91dCIsImluaXRpYWxpemVBdXRoIiwiYXV0aCIsImdldFNlc3Npb24iLCJmZXRjaFByb2ZpbGUiLCJzdWJzY3JpcHRpb24iLCJvbkF1dGhTdGF0ZUNoYW5nZSIsImV2ZW50IiwidW5zdWJzY3JpYmUiLCJ1aWQiLCJzaW5nbGUiLCJoYW5kbGVMb2dvdXQiLCJzaWduT3V0Iiwid2luZG93IiwiaGFzaCIsImJvdHRvbSIsImFuaW1hdGlvbiIsIm1heFdpZHRoIiwic3RvcFByb3BhZ2F0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJsaW5lSGVpZ2h0IiwidGV4dFNoYWRvdyIsImZsZXhXcmFwIiwicGFkZGluZ0JvdHRvbSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkQ29sdW1uIiwibGlzdFN0eWxlIiwidGV4dERlY29yYXRpb24iLCJwYWRkaW5nVG9wIiwiX2M1IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgUXVvdGVSZXF1ZXN0UHJpbnQgZnJvbSAnLi9jb21wb25lbnRzL1F1b3RlUmVxdWVzdFByaW50LmpzeCdcclxuaW1wb3J0IHsgU3VuLCBNZW51LCBYLCBTaGllbGRDaGVjaywgWmFwLCBQaG9uZSwgTWVzc2FnZUNpcmNsZSwgQXJyb3dSaWdodCwgU3RhciwgQXdhcmQsIEhlYXJ0LCBNYXBQaW4sIExvZ091dCwgVXNlciwgU2hvcHBpbmdDYXJ0LCBQbHVzLCBUcmFzaDIsIFBhY2thZ2UsIENhbGN1bGF0b3IgfSBmcm9tICdsdWNpZGUtcmVhY3QnXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi9saWIvc3VwYWJhc2UnXHJcbmltcG9ydCBTb2xhckNhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL1NvbGFyQ2FsY3VsYXRvci5qc3gnXHJcbmltcG9ydCBNYXJrZXRwbGFjZSBmcm9tICcuL2NvbXBvbmVudHMvTWFya2V0cGxhY2UuanN4J1xyXG5pbXBvcnQgSW5zdGFsbGVyRGlyZWN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9JbnN0YWxsZXJEaXJlY3RvcnkuanN4J1xyXG5pbXBvcnQgS25vd2xlZGdlSHViIGZyb20gJy4vY29tcG9uZW50cy9Lbm93bGVkZ2VIdWIuanN4J1xyXG5pbXBvcnQgQXV0aEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0F1dGhGb3JtLmpzeCdcclxuaW1wb3J0IENhcnREcmF3ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NhcnREcmF3ZXIuanN4J1xyXG5pbXBvcnQgQWRtaW5EYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0FkbWluRGFzaGJvYXJkLmpzeCdcclxuaW1wb3J0IEFkZFByb2R1Y3RNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvQWRkUHJvZHVjdE1vZGFsLmpzeCdcclxuaW1wb3J0IHsgVGVybXNQYWdlLCBQcml2YWN5UG9saWN5UGFnZSwgSGVscENlbnRlclBhZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvTGVnYWxQYWdlcy5qc3gnXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBzZXNzaW9uLCBwcm9maWxlLCBvbkF1dGhDbGljaywgb25Mb2dvdXQsIGNhcnRDb3VudCwgb25DYXJ0Q2xpY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsIHRvcDogMCwgekluZGV4OiAxMDAwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsMjU1LDI1NSwwLjk4KScsXHJcbiAgICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3ZhcigtLXNoYWRvdy1zbSknXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnODBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzhweCcsIGZvbnRXZWlnaHQ6IDgwMCwgZm9udFNpemU6ICcxLjVyZW0nLCBjb2xvcjogJ3ZhcigtLXRydXN0LWJsdWUpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U3VuIHNpemU9ezMyfSBjb2xvcj1cInZhcigtLXN1bi1vcmFuZ2UpXCIgZmlsbD1cInZhcigtLXN1bi1nb2xkKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VuR2F0ZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXphbWJpYS1ncmVlbiknIH19PlphbWJpYTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3AtbWVudVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMzJweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjYWxjdWxhdG9yXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogJzAuOTVyZW0nIH19PkNhbGN1bGF0b3I8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtYXJrZXRwbGFjZVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6ICcwLjk1cmVtJyB9fT5NYXJrZXRwbGFjZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2luc3RhbGxlcnNcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAnMC45NXJlbScgfX0+SW5zdGFsbGVyczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2Jsb2dcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAnMC45NXJlbScgfX0+S25vd2xlZGdlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYWN0aW9uc1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzE2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FydENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJywgYm9yZGVyOiAnbm9uZScsIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLXRydXN0LWJsdWUpJywgY3Vyc29yOiAncG9pbnRlcicsIHBhZGRpbmc6ICc4cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IHNpemU9ezI0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0Q291bnQgPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLXN1bi1vcmFuZ2UpJywgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzAuN3JlbScsIGZvbnRXZWlnaHQ6IDgwMCwgcGFkZGluZzogJzJweCA2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOTlweCcsIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydENvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgZGlzcGxheTogJ25vbmUnLCBtZDogJ2Jsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOHJlbScsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS10cnVzdC1ibHVlKScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZT8uZnVsbF9uYW1lIHx8ICdNeSBBY2NvdW50J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjdyZW0nLCBjb2xvcjogJyM4ODgnLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9maWxlPy5yb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0fSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMTJweCcsIGJhY2tncm91bmQ6ICcjZjVmNWY1JywgY29sb3I6ICcjNjY2JywgYm9yZGVyOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dPdXQgc2l6ZT17MTh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkF1dGhDbGlja30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgcGFkZGluZzogJzEwcHggMjBweCcsIGZvbnRTaXplOiAnMC44NXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciBzaXplPXsxOH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc2cHgnIH19IC8+IExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1idG5cIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdub25lJywgY29sb3I6ICd2YXIoLS10cnVzdC1ibHVlKScsIGJvcmRlcjogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNPcGVuID8gPFggc2l6ZT17Mjh9IC8+IDogPE1lbnUgc2l6ZT17Mjh9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc4MHB4JywgbGVmdDogMCwgcmlnaHQ6IDAsIGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6ICczMHB4JywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctbWQpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NhbGN1bGF0b3JcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSBzdHlsZT17eyBmb250U2l6ZTogJzEuMXJlbScsIGZvbnRXZWlnaHQ6IDYwMCB9fT5Tb2xhciBDYWxjdWxhdG9yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21hcmtldHBsYWNlXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gc3R5bGU9e3sgZm9udFNpemU6ICcxLjFyZW0nLCBmb250V2VpZ2h0OiA2MDAgfX0+TWFya2V0cGxhY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaW5zdGFsbGVyc1wiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9IHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xcmVtJywgZm9udFdlaWdodDogNjAwIH19Pkluc3RhbGxlciBEaXJlY3Rvcnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjYmxvZ1wiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9IHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xcmVtJywgZm9udFdlaWdodDogNjAwIH19Pktub3dsZWRnZSBIdWI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshc2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgb25BdXRoQ2xpY2soKTsgc2V0SXNPcGVuKGZhbHNlKTsgfX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiAvIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkgeyAuZGVza3RvcC1tZW51IHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyAubW9iaWxlLW1lbnUtYnRuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBVc2VyRGFzaGJvYXJkID0gKHsgcHJvZmlsZSwgc2F2ZWRQcm9kdWN0cywgb25Ub2dnbGVTYXZlLCBjYWxjSGlzdG9yeSwgdXNlcklucXVpcmllcywgb25SZW1vdmVTYXZlZCwgb25EZWxldGVIaXN0b3J5LCBzZXRQZGZVcmwsIHNldFNob3dQZGZNb2RhbCB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCAwJywgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmOGY5ZmEsICNmZmZmZmYpJyB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXZlcmlmaWVkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnOHB4JyB9fT5DdXN0b21lciBDb21tYW5kIENlbnRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJyZW0nLCBtYXJnaW46IDAgfX0+V2VsY29tZSBiYWNrLCB7cHJvZmlsZT8uZnVsbF9uYW1lfSE8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtM1wiIHN0eWxlPXt7IGdhcDogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgey8qIDEuIENhbGN1bGF0b3IgSGlzdG9yeSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogJzI0cHgnLCBib3JkZXJSYWRpdXM6ICcxNnB4JywgYm94U2hhZG93OiAndmFyKC0tc2hhZG93LW1kKScsIGJvcmRlcjogJzFweCBzb2xpZCAjZjBmMGYwJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tc2t5LWJsdWUpJywgcGFkZGluZzogJzhweCcsIGJvcmRlclJhZGl1czogJzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGN1bGF0b3Igc2l6ZT17MjB9IGNvbG9yPVwidmFyKC0tdHJ1c3QtYmx1ZSlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogJzEuMXJlbScgfX0+TXkgU2F2aW5nczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnI2JiYicgfX0+e2NhbGNIaXN0b3J5Lmxlbmd0aH0gU0FWRUQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjYWxjSGlzdG9yeS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzIwcHgnLCBjb2xvcjogJyM4ODgnLCBiYWNrZ3JvdW5kOiAnI2ZjZmNmYycsIGJvcmRlclJhZGl1czogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjg1cmVtJyB9fT5ObyBjYWxjdWxhdGlvbnMgc2F2ZWQgeWV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY2FsY3VsYXRvclwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44cmVtJywgY29sb3I6ICd2YXIoLS10cnVzdC1ibHVlKScsIGZvbnRXZWlnaHQ6IDcwMCB9fT5UcnkgdGhlIENhbGN1bGF0b3Ig4oaSPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhbGNIaXN0b3J5Lm1hcChyZXMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyZXMuaWR9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMnB4JywgYmFja2dyb3VuZDogJyNmOWY5ZjknLCBib3JkZXJSYWRpdXM6ICcxMnB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGVhc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjlyZW0nLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAndmFyKC0tdHJ1c3QtYmx1ZSknIH19PntyZXMuc3lzdGVtX3NpemV9a1cgU3lzdGVtPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhyZW0nLCBjb2xvcjogJ3ZhcigtLXphbWJpYS1ncmVlbiknLCBmb250V2VpZ2h0OiA2MDAgfX0+S3tyZXMuZXN0aW1hdGVkX2Nvc3Q/LnRvTG9jYWxlU3RyaW5nKCl9IEVzdC4gQ29zdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC43cmVtJywgY29sb3I6ICcjOTk5JywgbWFyZ2luVG9wOiAnNHB4JyB9fT57bmV3IERhdGUocmVzLmNyZWF0ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUhpc3RvcnkocmVzLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcxMnB4JywgcmlnaHQ6ICcxMnB4JywgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgY29sb3I6ICcjY2NjJywgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtlID0+IGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjZmY0ZDRkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2UgPT4gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNjY2MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhc2gyIHNpemU9ezE0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDIuIFdpc2hsaXN0ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAnMjRweCcsIGJvcmRlclJhZGl1czogJzE2cHgnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctbWQpJywgYm9yZGVyOiAnMXB4IHNvbGlkICNmMGYwZjAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmMGYwJywgcGFkZGluZzogJzhweCcsIGJvcmRlclJhZGl1czogJzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0IHNpemU9ezIwfSBjb2xvcj1cIiNmZjRkNGRcIiBmaWxsPVwiI2ZmNGQ0ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAnMS4xcmVtJyB9fT5XaXNobGlzdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnI2JiYicgfX0+e3NhdmVkUHJvZHVjdHMubGVuZ3RofSBJVEVNUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3NhdmVkUHJvZHVjdHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4JywgY29sb3I6ICcjODg4JywgYmFja2dyb3VuZDogJyNmY2ZjZmMnLCBib3JkZXJSYWRpdXM6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44NXJlbScgfX0+WW91ciB3aXNobGlzdCBpcyBlbXB0eS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21hcmtldHBsYWNlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhyZW0nLCBjb2xvcjogJ3ZhcigtLXN1bi1vcmFuZ2UpJywgZm9udFdlaWdodDogNzAwIH19PlNob3AgTWFya2V0cGxhY2Ug4oaSPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NhdmVkUHJvZHVjdHMubWFwKHNwID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3AuaWR9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTJweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcsIGJhY2tncm91bmQ6ICcjZjlmOWY5JywgYm9yZGVyUmFkaXVzOiAnMTJweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NwLnByb2R1Y3RzPy5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICc0NXB4JywgaGVpZ2h0OiAnNDVweCcsIGJvcmRlclJhZGl1czogJzhweCcsIG9iamVjdEZpdDogJ2NvdmVyJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6ICcwLjg1cmVtJywgY29sb3I6ICd2YXIoLS10ZXh0LWRhcmspJyB9fT57c3AucHJvZHVjdHM/Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdHJ1c3QtYmx1ZSknLCBmb250V2VpZ2h0OiA4MDAsIGZvbnRTaXplOiAnMC44cmVtJyB9fT57c3AucHJvZHVjdHM/LnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVNhdmVkKHNwLmlkKX0gc3R5bGU9e3sgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgY29sb3I6ICcjY2NjJywgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtlID0+IGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjZmY0ZDRkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2UgPT4gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNjY2MnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogMy4gUXVvdGUgUmVxdWVzdHMgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6ICcyNHB4JywgYm9yZGVyUmFkaXVzOiAnMTZweCcsIGJveFNoYWRvdzogJ3ZhcigtLXNoYWRvdy1tZCknLCBib3JkZXI6ICcxcHggc29saWQgI2YwZjBmMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyNlOGY1ZTknLCBwYWRkaW5nOiAnOHB4JywgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBzaXplPXsyMH0gY29sb3I9XCJ2YXIoLS16YW1iaWEtZ3JlZW4pXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6ICcxLjFyZW0nIH19PlF1b3RlczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnI2JiYicgfX0+e3VzZXJJbnF1aXJpZXMubGVuZ3RofSBBQ1RJVkU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5xdWlyaWVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnMjBweCcsIGNvbG9yOiAnIzg4OCcsIGJhY2tncm91bmQ6ICcjZmNmY2ZjJywgYm9yZGVyUmFkaXVzOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzAuODVyZW0nIH19Pk5vIGFjdGl2ZSBxdW90ZSByZXF1ZXN0cy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcklucXVpcmllcy5tYXAoaXEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpcS5pZH0gc3R5bGU9e3sgcGFkZGluZzogJzEycHgnLCBiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsIGJvcmRlclJhZGl1czogJzEycHgnLCBib3JkZXI6ICcxcHggc29saWQgI2VlZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBmb250U2l6ZTogJzAuODVyZW0nIH19PntpcS5wcm9kdWN0cz8ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjY1cmVtJywgcGFkZGluZzogJzJweCA2cHgnLCBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGlxLnN0YXR1cyA9PT0gJ3BlbmRpbmcnID8gJyNmZmYzZTAnIDogaXEuc3RhdHVzID09PSAncXVvdGVkJyA/ICcjZThmNWU5JyA6ICcjZTBmMmYxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXEuc3RhdHVzID09PSAncGVuZGluZycgPyAnI2VmNmMwMCcgOiBpcS5zdGF0dXMgPT09ICdxdW90ZWQnID8gJyMyZTdkMzInIDogJyMwMDY5NWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDgwMCwgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntpcS5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuNzVyZW0nLCBjb2xvcjogJyM4ODgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19Plwie2lxLm1lc3NhZ2V9XCI8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTaG93IGFkbWluIHJlc3BvbnNlIGlmIGl0IGV4aXN0cyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhpcS5hZG1pbl9yZXNwb25zZSB8fCBpcS5xdW90ZV9wcmljZSB8fCBpcS5xdW90ZV9wZGZfdXJsKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEycHgnLCBwYWRkaW5nOiAnMTJweCcsIGJhY2tncm91bmQ6ICcjZThmNWU5JywgYm9yZGVyUmFkaXVzOiAnOHB4JywgYm9yZGVyTGVmdDogJzNweCBzb2xpZCB2YXIoLS16YW1iaWEtZ3JlZW4pJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC43NXJlbScsIGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICd2YXIoLS16YW1iaWEtZ3JlZW4pJywgbWFyZ2luQm90dG9tOiAnNnB4JyB9fT7inJMgQWRtaW4gUmVzcG9uc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXEucXVvdGVfcHJpY2UgJiYgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuODVyZW0nLCBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzExMScsIG1hcmdpbkJvdHRvbTogJzRweCcgfX0+UXVvdGU6IHtpcS5xdW90ZV9wcmljZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lxLmFkbWluX3Jlc3BvbnNlICYmIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhyZW0nLCBjb2xvcjogJyM1NTUnLCBtYXJnaW5Cb3R0b206ICc4cHgnIH19PntpcS5hZG1pbl9yZXNwb25zZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lxLnF1b3RlX3BkZl91cmwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09wZW5pbmcgUERGOicsIGlxLnF1b3RlX3BkZl91cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBkZlVybChpcS5xdW90ZV9wZGZfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UGRmTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzZweCAxMnB4JywgYmFja2dyb3VuZDogJ3ZhcigtLXRydXN0LWJsdWUpJywgY29sb3I6ICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJSYWRpdXM6ICc2cHgnLCBmb250U2l6ZTogJzAuOHJlbScsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Ub3A6ICc0cHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfk4QgVmlldyBRdW90ZSBEb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cclxuY29uc3QgU3VwcGxpZXJEYXNoYm9hcmQgPSAoeyBwcm9maWxlLCBvbkFkZFByb2R1Y3QsIHN0YXRzLCBpbnF1aXJpZXMsIHByb2R1Y3RzLCBvblVwZGF0ZUlucXVpcnlTdGF0dXMsIG9uRGVsZXRlUHJvZHVjdCB9KSA9PiAoXHJcbiAgICA8c2VjdGlvbiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCAwJywgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2UzZjJmZCwgI2ZmZmZmZiknIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0temFtYmlhLWdyZWVuKScsIGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5TdXBwbGllciBQYW5lbDwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+UGFydG5lciBQb3J0YWw6IHtwcm9maWxlPy5mdWxsX25hbWV9PC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTNcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICczMHB4JywgbWFyZ2luQm90dG9tOiAnNDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6ICcyNHB4JywgYm9yZGVyUmFkaXVzOiAnMTJweCcsIGJveFNoYWRvdzogJ3ZhcigtLXNoYWRvdy1zbSknLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nLCBmb250V2VpZ2h0OiA4MDAsIGNvbG9yOiAndmFyKC0tdHJ1c3QtYmx1ZSknIH19PntzdGF0cy5saXN0aW5nc308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6ICcjNjY2JyB9fT5BY3RpdmUgTGlzdGluZ3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAnMjRweCcsIGJvcmRlclJhZGl1czogJzEycHgnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctc20pJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMi41cmVtJywgZm9udFdlaWdodDogODAwLCBjb2xvcjogJ3ZhcigtLXN1bi1vcmFuZ2UpJyB9fT57c3RhdHMuaW5xdWlyaWVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBjb2xvcjogJyM2NjYnIH19PkFjdGl2ZSBJbnF1aXJpZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAnMjRweCcsIGJvcmRlclJhZGl1czogJzEycHgnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctc20pJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQWRkUHJvZHVjdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzE2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGx1cyBzaXplPXsxOH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IEFkZCBOZXcgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtMlwiIHN0eWxlPXt7IGdhcDogJzMwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBib3JkZXJSYWRpdXM6ICcxNnB4JywgYm94U2hhZG93OiAndmFyKC0tc2hhZG93LW1kKScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyNHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlJlY2VudCBJbnF1aXJpZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5xdWlyaWVzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzQwcHgnLCBjb2xvcjogJyM4ODgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2lyY2xlIHNpemU9ezMyfSBzdHlsZT17eyBvcGFjaXR5OiAwLjIsIG1hcmdpbkJvdHRvbTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjlyZW0nIH19Pk5vIHF1b3RlIHJlcXVlc3RzIHlldC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMTJweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lucXVpcmllcy5tYXAoaXEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXEuaWR9IHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4JywgYm9yZGVyUmFkaXVzOiAnMTJweCcsIGJhY2tncm91bmQ6ICcjZmNmY2ZjJywgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAgfX0+e2lxLnByb2R1Y3RzPy5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMC43cmVtJywgcGFkZGluZzogJzJweCA4cHgnLCBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXEuc3RhdHVzID09PSAncGVuZGluZycgPyAnI2ZmZjNlMCcgOiAnI2U4ZjVlOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpcS5zdGF0dXMgPT09ICdwZW5kaW5nJyA/ICcjZWY2YzAwJyA6ICcjMmU3ZDMyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PntpcS5zdGF0dXMudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjg1cmVtJywgY29sb3I6ICcjNjY2JyB9fT5Gcm9tOiB7aXEucHJvZmlsZXM/LmZ1bGxfbmFtZX0gKHtpcS5wcm9maWxlcz8uZW1haWx9KTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMnB4JywgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpcS5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25VcGRhdGVJbnF1aXJ5U3RhdHVzKGlxLmlkLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc0cHgnLCBib3JkZXJSYWRpdXM6ICc0cHgnLCBmb250U2l6ZTogJzAuNzVyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbnRhY3RlZFwiPkNvbnRhY3RlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2lxLnByb2ZpbGVzPy5lbWFpbH1gfSBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17eyBwYWRkaW5nOiAnNHB4IDEwcHgnLCBmb250U2l6ZTogJzAuNzVyZW0nLCBiYWNrZ3JvdW5kOiAndmFyKC0tdHJ1c3QtYmx1ZSknLCBjb2xvcjogJ3doaXRlJyB9fT5FbWFpbCBDdXN0b21lcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBib3JkZXJSYWRpdXM6ICcxNnB4JywgYm94U2hhZG93OiAndmFyKC0tc2hhZG93LW1kKScsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyNHB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwIH19Pk15IFByb2R1Y3RzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzQwcHgnLCBjb2xvcjogJyM4ODgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlIHNpemU9ezMyfSBzdHlsZT17eyBvcGFjaXR5OiAwLjIsIG1hcmdpbkJvdHRvbTogJzEycHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjlyZW0nIH19Pk5vIHByb2R1Y3RzIGxpc3RlZCB5ZXQuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwLmlkfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEycHgnLCBwYWRkaW5nOiAnMTJweCcsIGJvcmRlclJhZGl1czogJzEycHgnLCBiYWNrZ3JvdW5kOiAnI2ZjZmNmYycsIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cC5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcsIGJvcmRlclJhZGl1czogJzhweCcsIG9iamVjdEZpdDogJ2NvdmVyJyB9fSBhbHQ9e3AubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6ICcwLjlyZW0nIH19PntwLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRydXN0LWJsdWUpJywgZm9udFdlaWdodDogODAwLCBmb250U2l6ZTogJzAuODVyZW0nIH19PntwLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVQcm9kdWN0KHAuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmNGQ0ZCcsIGJhY2tncm91bmQ6ICdub25lJywgYm9yZGVyOiAnbm9uZScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgc2l6ZT17MTh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuKVxyXG5cclxuY29uc3QgQWRtaW5QYW5lbCA9ICh7IHByb2ZpbGUgfSkgPT4gKFxyXG4gICAgPHNlY3Rpb24gc3R5bGU9e3sgcGFkZGluZzogJzYwcHggMCcsIGJhY2tncm91bmQ6ICcjMTExJywgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZWQnLCBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+U3VuR2F0ZSBDb21tYW5kIENlbnRlcjwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+UGxhdGZvcm0gQWRtaW5pc3RyYXRpb248L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC00XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMjIyJywgcGFkZGluZzogJzIwcHgnLCBib3JkZXJSYWRpdXM6ICc4cHgnIH19Pk1hbmFnZSBVc2VyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzIyMicsIHBhZGRpbmc6ICcyMHB4JywgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fT5BcHByb3ZlIFN1cHBsaWVyczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzIyMicsIHBhZGRpbmc6ICcyMHB4JywgYm9yZGVyUmFkaXVzOiAnOHB4JyB9fT5Db250ZW50IE1hbmFnZW1lbnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJyMyMjInLCBwYWRkaW5nOiAnMjBweCcsIGJvcmRlclJhZGl1czogJzhweCcgfX0+QW5hbHl0aWNzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4pXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtzaG93QXV0aCwgc2V0U2hvd0F1dGhdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFthdXRoTG9hZGluZywgc2V0QXV0aExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0NhcnRPcGVuLCBzZXRJc0NhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dBZGRQcm9kdWN0LCBzZXRTaG93QWRkUHJvZHVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwcm9kdWN0U2F2aW5nLCBzZXRQcm9kdWN0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3JlZnJlc2hUcmlnZ2VyLCBzZXRSZWZyZXNoVHJpZ2dlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3N1cHBsaWVyU3RhdHMsIHNldFN1cHBsaWVyU3RhdHNdID0gdXNlU3RhdGUoeyBsaXN0aW5nczogMCwgaW5xdWlyaWVzOiAwIH0pXHJcbiAgICBjb25zdCBbc3VwcGxpZXJJbnF1aXJpZXMsIHNldFN1cHBsaWVySW5xdWlyaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3N1cHBsaWVyUHJvZHVjdHMsIHNldFN1cHBsaWVyUHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdXNlclNhdmVkUHJvZHVjdHMsIHNldFVzZXJTYXZlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3VzZXJDYWxjSGlzdG9yeSwgc2V0VXNlckNhbGNIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3VzZXJJbnF1aXJpZXMsIHNldFVzZXJJbnF1aXJpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbcGFzc3dvcmRSZWNvdmVyeU1vZGUsIHNldFBhc3N3b3JkUmVjb3ZlcnlNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dQZGZNb2RhbCwgc2V0U2hvd1BkZk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3BkZlVybCwgc2V0UGRmVXJsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuXHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3ByaW50LXF1b3RlLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxRdW90ZVJlcXVlc3RQcmludCAvPlxyXG4gICAgfVxyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3Rlcm1zJykgcmV0dXJuIDxUZXJtc1BhZ2UgLz5cclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9wcml2YWN5JykgcmV0dXJuIDxQcml2YWN5UG9saWN5UGFnZSAvPlxyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2hlbHAnKSByZXR1cm4gPEhlbHBDZW50ZXJQYWdlIC8+XHJcblxyXG4gICAgLy8gSGFuZGxlIENhcnQgUGVyc2lzdGVuY2UgYW5kIElzb2xhdGlvblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRDYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNhcnRfJHtzZXNzaW9uLnVzZXIuaWR9YClcclxuICAgICAgICAgICAgaWYgKHNhdmVkQ2FydCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0SXRlbXMoSlNPTi5wYXJzZShzYXZlZENhcnQpKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgY2FydFwiLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENhcnRJdGVtcyhbXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldENhcnRJdGVtcyhbXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtcyhbXSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2Vzc2lvbj8udXNlcj8uaWRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24/LnVzZXI/LmlkKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYXJ0XyR7c2Vzc2lvbi51c2VyLmlkfWAsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NhcnRJdGVtcywgc2Vzc2lvbj8udXNlcj8uaWRdKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgc2V0Q2FydEl0ZW1zKHByZXYgPT4gWy4uLnByZXYsIHByb2R1Y3RdKVxyXG4gICAgICAgIG5vdGlmeShgJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHlvdXIgc29sYXIgY2FydCFgLCBcInN1Y2Nlc3NcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldENhcnRJdGVtcyhwcmV2ID0+IHByZXYuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdERhdGEpID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0U2F2aW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBwcm9kdWN0IHNhdmUgcHJvY2Vzcy4uLlwiLCBwcm9kdWN0RGF0YSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VVcmwgPSBcIlwiXHJcblxyXG4gICAgICAgICAgICAvLyAxLiBVcGxvYWQgSW1hZ2UgdG8gU3VwYWJhc2UgU3RvcmFnZVxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdERhdGEuaW1hZ2VGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gcHJvZHVjdERhdGEuaW1hZ2VGaWxlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRXh0ID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpfS0ke0RhdGUubm93KCl9LiR7ZmlsZUV4dH1gXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IGAke3Nlc3Npb24udXNlci5pZH0vJHtmaWxlTmFtZX1gXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWRpbmcgZmlsZSB0byBidWNrZXQgJ1Byb2R1Y3QnLi4uXCIsIGZpbGVQYXRoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IsIGRhdGE6IHVwbG9hZERhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAuZnJvbSgnUHJvZHVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVwbG9hZChmaWxlUGF0aCwgZmlsZSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXBsb2FkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVXBsb2FkIGVycm9yIGRldGFpbHM6XCIsIHVwbG9hZEVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlfS4gTWFrZSBzdXJlIHRoZSAnUHJvZHVjdCcgYnVja2V0IGV4aXN0cyBhbmQgaGFzIHB1YmxpYyAnaW5zZXJ0JyBwb2xpY2llcy5gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkIHN1Y2Nlc3NmdWwsIGZldGNoaW5nIHB1YmxpYyBVUkwuLi5cIilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBwdWJsaWNVcmwgfSB9ID0gc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5mcm9tKCdQcm9kdWN0JylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0UHVibGljVXJsKGZpbGVQYXRoKVxyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gcHVibGljVXJsXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlB1YmxpYyBVUkwgZ2VuZXJhdGVkOlwiLCBpbWFnZVVybClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMi4gU2F2ZSBQcm9kdWN0IHRvIERhdGFiYXNlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5zZXJ0aW5nIHByb2R1Y3QgaW50byBkYXRhYmFzZS4uLlwiKVxyXG4gICAgICAgICAgICBjb25zdCB7IGltYWdlRmlsZSwgcHJldmlld1VybCwgLi4uZGJEYXRhIH0gPSBwcm9kdWN0RGF0YVxyXG4gICAgICAgICAgICBjb25zdCB7IGVycm9yOiBkYkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdwcm9kdWN0cycpLmluc2VydChbe1xyXG4gICAgICAgICAgICAgICAgLi4uZGJEYXRhLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgc3VwcGxpZXJfaWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICAgICAgICAgIHNsdWc6IHByb2R1Y3REYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICctJykucmVwbGFjZSgvW15cXHctXSsvZywgJycpICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpZWQ6IHRydWVcclxuICAgICAgICAgICAgfV0pXHJcblxyXG4gICAgICAgICAgICBpZiAoZGJFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yIGRldGFpbHM6XCIsIGRiRXJyb3IpXHJcbiAgICAgICAgICAgICAgICBpZiAoZGJFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdmb3JlaWduIGtleSBjb25zdHJhaW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERhdGFiYXNlIHNhdmUgZmFpbGVkLiBZb3VyIGFjY291bnQgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgaW4gdGhlIHN1cHBsaWVyIGxpc3QuIFBsZWFzZSBydW4gdGhlICdTdXBwbGllciBEYXRhYmFzZSBGaXgnIFNRTCBzY3JpcHQgcHJvdmlkZWQgaW4gb3VyIGxhc3QgbWVzc2FnZS5gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEYXRhYmFzZSBzYXZlIGZhaWxlZDogJHtkYkVycm9yLm1lc3NhZ2V9YClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm90aWZ5KFwiUHJvZHVjdCBsaXN0ZWQgc3VjY2Vzc2Z1bGx5IHdpdGggaW1hZ2UhXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBzZXRTaG93QWRkUHJvZHVjdChmYWxzZSlcclxuICAgICAgICAgICAgc2V0UmVmcmVzaFRyaWdnZXIocHJldiA9PiBwcmV2ICsgMSlcclxuICAgICAgICAgICAgZmV0Y2hTdXBwbGllckRhdGEoKSAvLyBSZWZyZXNoIHN0YXRzXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYXVnaHQgZXJyb3IgaW4gc2F2ZVByb2R1Y3Q6XCIsIGVycilcclxuICAgICAgICAgICAgbm90aWZ5KGVyci5tZXNzYWdlIHx8IFwiQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZFwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdFNhdmluZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlSW5xdWlyeVN0YXR1cyA9IGFzeW5jIChpbnF1aXJ5SWQsIG5ld1N0YXR1cykgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAgICAgICAuZnJvbSgnaW5xdWlyaWVzJylcclxuICAgICAgICAgICAgICAgIC51cGRhdGUoeyBzdGF0dXM6IG5ld1N0YXR1cyB9KVxyXG4gICAgICAgICAgICAgICAgLmVxKCdpZCcsIGlucXVpcnlJZClcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgc2V0U3VwcGxpZXJJbnF1aXJpZXMocHJldiA9PiBwcmV2Lm1hcChpcSA9PiBpcS5pZCA9PT0gaW5xdWlyeUlkID8geyAuLi5pcSwgc3RhdHVzOiBuZXdTdGF0dXMgfSA6IGlxKSlcclxuICAgICAgICAgICAgbm90aWZ5KGBTdGF0dXMgdXBkYXRlZCB0byAke25ld1N0YXR1c31gLCBcInN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgZmV0Y2hTdXBwbGllckRhdGEoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBub3RpZnkoXCJGYWlsZWQgdG8gdXBkYXRlIHN0YXR1c1wiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2R1Y3QgbGlzdGluZz9cIikpIHJldHVyblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgICAgICAgICAgICAuZnJvbSgncHJvZHVjdHMnKVxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAuZXEoJ2lkJywgcHJvZHVjdElkKVxyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICBub3RpZnkoXCJQcm9kdWN0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBzZXRSZWZyZXNoVHJpZ2dlcihwcmV2ID0+IHByZXYgKyAxKVxyXG4gICAgICAgICAgICBmZXRjaFN1cHBsaWVyRGF0YSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeShcIkZhaWxlZCB0byBkZWxldGUgcHJvZHVjdFwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNhdmVQcm9kdWN0ID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICAgICAgICBub3RpZnkoXCJQbGVhc2UgbG9naW4gdG8gc2F2ZSBwcm9kdWN0c1wiLCBcImluZm9cIilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscmVhZHlTYXZlZCA9IHVzZXJTYXZlZFByb2R1Y3RzLmZpbmQoc3AgPT4gc3AucHJvZHVjdF9pZCA9PT0gcHJvZHVjdElkKVxyXG4gICAgICAgICAgICBpZiAoYWxyZWFkeVNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdzYXZlZF9wcm9kdWN0cycpLmRlbGV0ZSgpLmVxKCdpZCcsIGFscmVhZHlTYXZlZC5pZClcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgICAgIG5vdGlmeShcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIHdpc2hsaXN0XCIsIFwiaW5mb1wiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnc2F2ZWRfcHJvZHVjdHMnKS5pbnNlcnQoW3sgdXNlcl9pZDogc2Vzc2lvbi51c2VyLmlkLCBwcm9kdWN0X2lkOiBwcm9kdWN0SWQgfV0pXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgICAgICBub3RpZnkoXCJQcm9kdWN0IHNhdmVkIHRvIHdpc2hsaXN0XCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZldGNoVXNlckRhdGEoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBub3RpZnkoXCJFcnJvciBzYXZpbmcgcHJvZHVjdFwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVNhdmVkUHJvZHVjdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3NhdmVkX3Byb2R1Y3RzJykuZGVsZXRlKCkuZXEoJ2lkJywgaWQpXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgZmV0Y2hVc2VyRGF0YSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeShcIkZhaWxlZCB0byByZW1vdmUgaXRlbVwiLCBcImVycm9yXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUNhbGN1bGF0b3JSZXN1bHQgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdjYWxjdWxhdG9yX3Jlc3VsdHMnKS5kZWxldGUoKS5lcSgnaWQnLCBpZClcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICBub3RpZnkoXCJDYWxjdWxhdGlvbiBoaXN0b3J5IGl0ZW0gZGVsZXRlZFwiLCBcImluZm9cIilcclxuICAgICAgICAgICAgZmV0Y2hVc2VyRGF0YSgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeShcIkZhaWxlZCB0byBkZWxldGUgaGlzdG9yeSBpdGVtXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2F2ZUNhbGN1bGF0b3JSZXN1bHQgPSBhc3luYyAocmVzdWx0RGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICAgICAgICBub3RpZnkoXCJQbGVhc2UgbG9naW4gdG8gc2F2ZSByZXN1bHRzXCIsIFwiaW5mb1wiKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnY2FsY3VsYXRvcl9yZXN1bHRzJykuaW5zZXJ0KFt7XHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBzZXNzaW9uLnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBtb250aGx5X2JpbGw6IHJlc3VsdERhdGEuYmlsbCxcclxuICAgICAgICAgICAgICAgIHN5c3RlbV9zaXplOiByZXN1bHREYXRhLnN5c3RlbVNpemUsXHJcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRfY29zdDogcmVzdWx0RGF0YS5lc3RpbWF0ZWRDb3N0LFxyXG4gICAgICAgICAgICAgICAgYmF0dGVyeV9jYXBhY2l0eTogcmVzdWx0RGF0YS5iYXR0ZXJ5Q2FwYWNpdHkgfHwgMCxcclxuICAgICAgICAgICAgICAgIHBhbmVsX2NvdW50OiByZXN1bHREYXRhLnBhbmVsQ291bnQgfHwgMFxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICBub3RpZnkoXCJDYWxjdWxhdGlvbiBzYXZlZCB0byBkYXNoYm9hcmQhXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBmZXRjaFVzZXJEYXRhKClcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgbm90aWZ5KFwiRmFpbGVkIHRvIHNhdmUgcmVzdWx0XCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXNlc3Npb24gfHwgcHJvZmlsZT8ucm9sZSAhPT0gJ3VzZXInKSByZXR1cm5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBGZXRjaCBzYXZlZCBwcm9kdWN0cyB3aXRoIHByb2R1Y3QgZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IHNhdmVkRGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgICAgIC5mcm9tKCdzYXZlZF9wcm9kdWN0cycpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCcqLCBwcm9kdWN0cygqKScpXHJcbiAgICAgICAgICAgICAgICAuZXEoJ3VzZXJfaWQnLCBzZXNzaW9uLnVzZXIuaWQpXHJcblxyXG4gICAgICAgICAgICAvLyBGZXRjaCBjYWxjdWxhdG9yIHJlc3VsdHNcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBjYWxjRGF0YSB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgICAgIC5mcm9tKCdjYWxjdWxhdG9yX3Jlc3VsdHMnKVxyXG4gICAgICAgICAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgICAgICAgICAuZXEoJ3VzZXJfaWQnLCBzZXNzaW9uLnVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuXHJcbiAgICAgICAgICAgIC8vIEZldGNoIGlucXVpcmllcyBzZW50IGJ5IHRoaXMgdXNlclxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGlucXVpcnlEYXRhIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oJ2lucXVpcmllcycpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCcqLCBwcm9kdWN0cyhuYW1lKScpXHJcbiAgICAgICAgICAgICAgICAuZXEoJ2J1eWVyX2lkJywgc2Vzc2lvbi51c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyU2F2ZWRQcm9kdWN0cyhzYXZlZERhdGEgfHwgW10pXHJcbiAgICAgICAgICAgIHNldFVzZXJDYWxjSGlzdG9yeShjYWxjRGF0YSB8fCBbXSlcclxuICAgICAgICAgICAgc2V0VXNlcklucXVpcmllcyhpbnF1aXJ5RGF0YSB8fCBbXSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgZGF0YTpcIiwgZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmZXRjaFN1cHBsaWVyRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoIXNlc3Npb24gfHwgcHJvZmlsZT8ucm9sZSAhPT0gJ3N1cHBsaWVyJykgcmV0dXJuXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEZldGNoIFByb2R1Y3RzIGxpc3RcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBwcm9kdWN0RGF0YSwgY291bnQ6IGxpc3RpbmdDb3VudCB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgICAgIC5mcm9tKCdwcm9kdWN0cycpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCcqJywgeyBjb3VudDogJ2V4YWN0JyB9KVxyXG4gICAgICAgICAgICAgICAgLmVxKCdzdXBwbGllcl9pZCcsIHNlc3Npb24udXNlci5pZClcclxuICAgICAgICAgICAgICAgIC5vcmRlcignY3JlYXRlZF9hdCcsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgICAgICAgICAgLy8gRmV0Y2ggSW5xdWlyaWVzIHdpdGggZGV0YWlsc1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGE6IGlucXVpcnlEYXRhLCBjb3VudDogaW5xdWlyeUNvdW50IH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgICAgICAgICAgLmZyb20oJ2lucXVpcmllcycpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCcqLCBwcm9kdWN0cyhuYW1lKSwgcHJvZmlsZXMoZnVsbF9uYW1lLCBlbWFpbCknLCB7IGNvdW50OiAnZXhhY3QnIH0pXHJcbiAgICAgICAgICAgICAgICAuZXEoJ3N1cHBsaWVyX2lkJywgc2Vzc2lvbi51c2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRTdXBwbGllclN0YXRzKHtcclxuICAgICAgICAgICAgICAgIGxpc3RpbmdzOiBsaXN0aW5nQ291bnQgfHwgMCxcclxuICAgICAgICAgICAgICAgIGlucXVpcmllczogaW5xdWlyeUNvdW50IHx8IDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0U3VwcGxpZXJJbnF1aXJpZXMoaW5xdWlyeURhdGEgfHwgW10pXHJcbiAgICAgICAgICAgIHNldFN1cHBsaWVyUHJvZHVjdHMocHJvZHVjdERhdGEgfHwgW10pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzdXBwbGllciBkYXRhOlwiLCBlcnIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24gJiYgcHJvZmlsZT8ucm9sZSA9PT0gJ3N1cHBsaWVyJykge1xyXG4gICAgICAgICAgICBmZXRjaFN1cHBsaWVyRGF0YSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXNzaW9uICYmIHByb2ZpbGU/LnJvbGUgPT09ICd1c2VyJykge1xyXG4gICAgICAgICAgICBmZXRjaFVzZXJEYXRhKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2Vzc2lvbiwgcHJvZmlsZSwgcmVmcmVzaFRyaWdnZXJdKVxyXG5cclxuICAgIGNvbnN0IG5vdGlmeSA9IChtZXNzYWdlLCB0eXBlID0gJ3N1Y2Nlc3MnKSA9PiB7XHJcbiAgICAgICAgc2V0Tm90aWZpY2F0aW9uKHsgbWVzc2FnZSwgdHlwZSB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Tm90aWZpY2F0aW9uKG51bGwpLCA1MDAwKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHNlc3Npb24gY2hlY2tcclxuICAgICAgICBjb25zdCBpbml0aWFsaXplQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBzZXNzaW9uIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpXHJcbiAgICAgICAgICAgICAgICBzZXRTZXNzaW9uKHNlc3Npb24pXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbikgYXdhaXQgZmV0Y2hQcm9maWxlKHNlc3Npb24udXNlci5pZClcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldEF1dGhMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0aWFsaXplQXV0aCgpXHJcblxyXG4gICAgICAgIGluaXRpYWxpemVBdXRoKClcclxuXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IHN1YnNjcmlwdGlvbiB9IH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKChldmVudCwgc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGggZXZlbnQ6XCIsIGV2ZW50KVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdQQVNTV09SRF9SRUNPVkVSWScpIHtcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkUmVjb3ZlcnlNb2RlKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFNlc3Npb24oc2Vzc2lvbilcclxuICAgICAgICAgICAgaWYgKHNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIGZldGNoUHJvZmlsZShzZXNzaW9uLnVzZXIuaWQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9maWxlKG51bGwpXHJcbiAgICAgICAgICAgICAgICBzZXRDYXJ0SXRlbXMoW10pIC8vIENsZWFyIFVJIHN0YXRlIG9uIGxvZ291dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBmZXRjaFByb2ZpbGUgPSBhc3luYyAodWlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgncHJvZmlsZXMnKS5zZWxlY3QoJyonKS5lcSgnaWQnLCB1aWQpLnNpbmdsZSgpXHJcbiAgICAgICAgaWYgKCFlcnJvcikgc2V0UHJvZmlsZShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhdXRoTG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBiYWNrZ3JvdW5kOiAndmFyKC0tc2t5LWJsdWUpJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAndmFyKC0tdHJ1c3QtYmx1ZSknIH19PkNvbm5lY3RpbmcgdG8gU3VuR2F0ZS4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkUmVjb3ZlcnlNb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBdXRoRm9ybSBpc0Z1bGxQYWdlPXt0cnVlfSBpc1VwZGF0ZVBhc3N3b3JkPXt0cnVlfSBvbkF1dGhDb21wbGV0ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZFJlY292ZXJ5TW9kZShmYWxzZSlcclxuICAgICAgICAgICAgLy8gUmVkaXJlY3Qgb3IgcmVmcmVzaCB0byBjbGVhciBVUkwgcGFyYW1zIGlmIG5lZWRlZCwgYnV0IHNldFN0YXRlIGlzIGVub3VnaCBmb3IgU1BBXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJydcclxuICAgICAgICB9fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICAgIHJldHVybiA8QXV0aEZvcm0gaXNGdWxsUGFnZT17dHJ1ZX0gLz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgICAgICAgIHNlc3Npb249e3Nlc3Npb259XHJcbiAgICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgb25BdXRoQ2xpY2s9eygpID0+IHNldFNob3dBdXRoKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgICAgIGNhcnRDb3VudD17Y2FydEl0ZW1zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIG9uQ2FydENsaWNrPXsoKSA9PiBzZXRJc0NhcnRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENhcnREcmF3ZXJcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17aXNDYXJ0T3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzQ2FydE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2NhcnRJdGVtc31cclxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXtyZW1vdmVGcm9tQ2FydH1cclxuICAgICAgICAgICAgICAgIG9uTm90aWZ5PXtub3RpZnl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7c2hvd0F1dGggJiYgPEF1dGhGb3JtIG9uQ2xvc2U9eygpID0+IHNldFNob3dBdXRoKGZhbHNlKX0gb25BdXRoQ29tcGxldGU9eygpID0+IHNldFNob3dBdXRoKGZhbHNlKX0gLz59XHJcblxyXG4gICAgICAgICAgICB7bm90aWZpY2F0aW9uICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAnMjRweCcsIHJpZ2h0OiAnMjRweCcsIHpJbmRleDogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub3RpZmljYXRpb24udHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ3ZhcigtLXphbWJpYS1ncmVlbiknIDogJ3ZhcigtLXRydXN0LWJsdWUpJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzE2cHggMjRweCcsIGJvcmRlclJhZGl1czogJzEycHgnLCBib3hTaGFkb3c6ICd2YXIoLS1zaGFkb3ctbGcpJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMnB4JywgYW5pbWF0aW9uOiAnc2xpZGVVcCAwLjNzIGVhc2Utb3V0J1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIHNpemU9ezIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT57bm90aWZpY2F0aW9uLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7cHJvZmlsZT8ucm9sZSA9PT0gJ2FkbWluJyAmJiA8QWRtaW5QYW5lbCBwcm9maWxlPXtwcm9maWxlfSAvPn1cclxuICAgICAgICAgICAge3Byb2ZpbGU/LnJvbGUgPT09ICdzdXBwbGllcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN1cHBsaWVyRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkFkZFByb2R1Y3Q9eygpID0+IHNldFNob3dBZGRQcm9kdWN0KHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzPXtzdXBwbGllclN0YXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucXVpcmllcz17c3VwcGxpZXJJbnF1aXJpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM9e3N1cHBsaWVyUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVJbnF1aXJ5U3RhdHVzPXt1cGRhdGVJbnF1aXJ5U3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlUHJvZHVjdD17ZGVsZXRlUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtwcm9maWxlPy5yb2xlID09PSAnYWRtaW4nICYmIHNlc3Npb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFkbWluRGFzaGJvYXJkIHByb2ZpbGU9e3Byb2ZpbGV9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtwcm9maWxlPy5yb2xlID09PSAndXNlcicgJiYgc2Vzc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VXNlckRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRQcm9kdWN0cz17dXNlclNhdmVkUHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY0hpc3Rvcnk9e3VzZXJDYWxjSGlzdG9yeX1cclxuICAgICAgICAgICAgICAgICAgICB1c2VySW5xdWlyaWVzPXt1c2VySW5xdWlyaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlU2F2ZWQ9e3JlbW92ZVNhdmVkUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUhpc3Rvcnk9e2RlbGV0ZUNhbGN1bGF0b3JSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGRmVXJsPXtzZXRQZGZVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BkZk1vZGFsPXtzZXRTaG93UGRmTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEFkZFByb2R1Y3RNb2RhbFxyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtzaG93QWRkUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dBZGRQcm9kdWN0KGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17c2F2ZVByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtwcm9kdWN0U2F2aW5nfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIFBERiBWaWV3ZXIgTW9kYWwgKi99XHJcbiAgICAgICAgICAgIHtzaG93UGRmTW9kYWwgJiYgcGRmVXJsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44KScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgekluZGV4OiAzMDAwIH19IG9uQ2xpY2s9eygpID0+IHNldFNob3dQZGZNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3doaXRlJywgYm9yZGVyUmFkaXVzOiAnMTJweCcsIHdpZHRoOiAnOTAlJywgbWF4V2lkdGg6ICc5MDBweCcsIGhlaWdodDogJzkwdmgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19IG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzE2cHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwIH19PlF1b3RlIERvY3VtZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd1BkZk1vZGFsKGZhbHNlKX0gc3R5bGU9e3sgYmFja2dyb3VuZDogJ25vbmUnLCBib3JkZXI6ICdub25lJywgZm9udFNpemU6ICcyNHB4JywgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnIzY2NicgfX0+w5c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGRmVXJsICsgJyN0b29sYmFyPTAmbmF2cGFuZXM9MCZzY3JvbGxiYXI9MCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGJvcmRlcjogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdW90ZSBEb2N1bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTJweCcsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlJywgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcwLjg1cmVtJywgY29sb3I6ICcjNjY2JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGU6IFJpZ2h0LWNsaWNrIGFuZCBcIlNhdmUgQXNcIiB0byBkb3dubG9hZCBpZiBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgIDxoZWFkZXIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEyMHB4IDAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNiksIHJnYmEoMCwwLDAsMC42KSksIHVybChcIi9hc3NldHMvaGVyby5qcGdcIiknLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtdmVyaWZpZWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyNHB4JywgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4yKScsIGNvbG9yOiAnd2hpdGUnLCBib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpJywgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBzaXplPXsxNn0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnLCBjb2xvcjogJ3ZhcigtLXN1bi1nb2xkKScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIzEgVHJ1c3RlZCBTb2xhciBNYXJrZXRwbGFjZSBpbiBaYW1iaWFcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICdjbGFtcCgzcmVtLCA2dncsIDQuNXJlbSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzI0cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFkb3c6ICcwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4zKSdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG93ZXIgWW91ciBMaWZlLiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1zdW4tZ29sZCknIH19PkVuZCBMb2FkLVNoZWRkaW5nLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4yNXJlbScsIGNvbG9yOiAnI2YwZjBmMCcsIG1hcmdpbkJvdHRvbTogJzQ4cHgnLCBtYXhXaWR0aDogJzcwMHB4JywgbWFyZ2luOiAnMCBhdXRvIDQ4cHgnLCBsaW5lSGVpZ2h0OiAxLjYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmUgcHJpY2VzIG9uIGJhdHRlcmllcyAmIGludmVydGVycywgZmluZCBjZXJ0aWZpZWQgaW5zdGFsbGVycywgYW5kIGdldCBhIGN1c3RvbSBzb2xhciBxdW90ZSBpbiBtaW51dGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBnYXA6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtYXJrZXRwbGFjZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxNnB4IDMycHgnLCBmb250U2l6ZTogJzEuMXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgU29sYXIgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2luc3RhbGxlcnNcIiBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBjb2xvcjogJ3ZhcigtLXRydXN0LWJsdWUpJywgcGFkZGluZzogJzE2cHggMzJweCcsIGZvbnRTaXplOiAnMS4xcmVtJywgZm9udFdlaWdodDogNzAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIgc2l6ZT17MjB9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBhbiBJbnN0YWxsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgey8qIEhvdyBJdCBXb3JrcyBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwYWRkaW5nOiAnODBweCAwJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzYwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nLCBjb2xvcjogJ3ZhcigtLXRydXN0LWJsdWUpJywgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+SG93IFN1bkdhdGUgV29ya3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJywgZm9udFNpemU6ICcxLjFyZW0nIH19PkdldCB2ZXJpZmllZCBzb2xhciBwb3dlciBpbiAzIHNpbXBsZSBzdGVwczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzMwcHgnLCBiYWNrZ3JvdW5kOiAnI2Y4ZjlmYScsIGJvcmRlclJhZGl1czogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZDogJ3ZhcigtLXNreS1ibHVlKScsIGJvcmRlclJhZGl1czogJzUwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luOiAnMCBhdXRvIDI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjdWxhdG9yIHNpemU9ezQwfSBjb2xvcj1cInZhcigtLXRydXN0LWJsdWUpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE2cHgnLCBmb250U2l6ZTogJzEuNXJlbScgfX0+MS4gQ2FsY3VsYXRlIE5lZWRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlVzZSBvdXIgc21hcnQgY2FsY3VsYXRvciB0byBwcm9wZXJseSBzaXplIHlvdXIgaW52ZXJ0ZXIgYW5kIGJhdHRlcnkgbmVlZHMgYmFzZWQgb24geW91ciBhcHBsaWFuY2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogJzMwcHgnLCBiYWNrZ3JvdW5kOiAnI2ZmZjhlMScsIGJvcmRlclJhZGl1czogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzgwcHgnLCBoZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZDogJyNmZmUwODInLCBib3JkZXJSYWRpdXM6ICc1MCUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpbjogJzAgYXV0byAyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcHBpbmdDYXJ0IHNpemU9ezQwfSBjb2xvcj1cIiNmZjZmMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTZweCcsIGZvbnRTaXplOiAnMS41cmVtJyB9fT4yLiBTaG9wIE1hcmtldHBsYWNlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PkNvbXBhcmUgcHJpY2VzIGZyb20gdmV0dGVkIFphbWJpYW4gc3VwcGxpZXJzLiBCdXkgcGFuZWxzLCBiYXR0ZXJpZXMsIGFuZCBpbnZlcnRlcnMgZGlyZWN0bHkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnMzBweCcsIGJhY2tncm91bmQ6ICcjZThmNWU5JywgYm9yZGVyUmFkaXVzOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODBweCcsIGhlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kOiAnI2E1ZDZhNycsIGJvcmRlclJhZGl1czogJzUwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luOiAnMCBhdXRvIDI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyIHNpemU9ezQwfSBjb2xvcj1cIiMyZTdkMzJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMTZweCcsIGZvbnRTaXplOiAnMS41cmVtJyB9fT4zLiBIaXJlIEluc3RhbGxlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5Db25uZWN0IHdpdGggRVJCLWNlcnRpZmllZCBpbnN0YWxsZXJzIHRvIHNhZmVseSBzZXQgdXAgeW91ciBzeXN0ZW0gYW5kIGVuc3VyZSB2YWxpZCB3YXJyYW50aWVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FsY3VsYXRvclwiPjxTb2xhckNhbGN1bGF0b3Igb25TYXZlUmVzdWx0PXtzYXZlQ2FsY3VsYXRvclJlc3VsdH0gLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogV2h5IENob29zZSBVcyBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcGFkZGluZzogJzgwcHggMCcsIGJhY2tncm91bmQ6ICd2YXIoLS10cnVzdC1ibHVlKScsIGNvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnNjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzIuNXJlbScsIG1hcmdpbkJvdHRvbTogJzI0cHgnIH19PldoeSBaYW1iaWEgVHJ1c3RzIFN1bkdhdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4xcmVtJywgb3BhY2l0eTogMC45LCBtYXJnaW5Cb3R0b206ICc0MHB4JywgbGluZUhlaWdodDogMS44IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgc29sYXIgbWFya2V0IGlzIGZsb29kZWQgd2l0aCBmYWtlcyBhbmQgdW5xdWFsaWZpZWQgdGVjaG5pY2lhbnMuIFN1bkdhdGUgaXMgdGhlIG9ubHkgcGxhdGZvcm0gdGhhdCB2YWxpZGF0ZXMgZXZlcnkgcHJvZHVjdCBhbmQgaW5zdGFsbGVyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBnYXA6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBzaXplPXsyOH0gY29sb3I9XCJ2YXIoLS1zdW4tZ29sZClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjJyZW0nLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PlZlcmlmaWVkIFN1cHBsaWVycyBPbmx5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzAuOXJlbScsIG9wYWNpdHk6IDAuOCB9fT5XZSBjaGVjayBUUElOcyBhbmQgcGh5c2ljYWwgYWRkcmVzc2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JywgZ2FwOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXdhcmQgc2l6ZT17Mjh9IGNvbG9yPVwidmFyKC0tc3VuLWdvbGQpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS4ycmVtJywgbWFyZ2luQm90dG9tOiAnNHB4JyB9fT5FUkIgQ2VydGlmaWVkIEluc3RhbGxlcnM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC45cmVtJywgb3BhY2l0eTogMC44IH19PlRlY2huaWNpYW5zIHdpdGggcHJvdmVuIHRyYWNrIHJlY29yZHMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBnYXA6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydCBzaXplPXsyOH0gY29sb3I9XCJ2YXIoLS1zdW4tZ29sZClcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjJyZW0nLCBtYXJnaW5Cb3R0b206ICc0cHgnIH19PkJ1eWVyIFByb3RlY3Rpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC45cmVtJywgb3BhY2l0eTogMC44IH19PlNlY3VyZSBwYXltZW50cyBhbmQgZGlzcHV0ZSByZXNvbHV0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAnNDBweCcsIGJvcmRlclJhZGl1czogJzI0cHgnLCBjb2xvcjogJ3ZhcigtLXRleHQtZGFyayknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZ0JvdHRvbTogJzMwcHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZScsIG1hcmdpbkJvdHRvbTogJzMwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnNHJlbScsIGZvbnRXZWlnaHQ6IDgwMCwgY29sb3I6ICd2YXIoLS10cnVzdC1ibHVlKScgfX0+NTAwKzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyM2NjYnIH19PkhhcHB5IEZhbWlsaWVzIFBvd2VyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJywgZ2FwOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nLCBmb250V2VpZ2h0OiA3MDAgfX0+NTArPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogJzAuODVyZW0nLCBjb2xvcjogJyM2NjYnIH19PlZlcmlmaWVkIFN1cHBsaWVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcyLjVyZW0nLCBmb250V2VpZ2h0OiA3MDAgfX0+Mk08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44NXJlbScsIGNvbG9yOiAnIzY2NicgfX0+V2F0dHMgSW5zdGFsbGVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFya2V0cGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFya2V0cGxhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZT17cHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ob3RpZnk9e25vdGlmeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRUb0NhcnQ9e2FkZFRvQ2FydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRyaWdnZXI9e3JlZnJlc2hUcmlnZ2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZFByb2R1Y3RJZHM9e3VzZXJTYXZlZFByb2R1Y3RzLm1hcChzcCA9PiBzcC5wcm9kdWN0X2lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVTYXZlPXt0b2dnbGVTYXZlUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW5zdGFsbGVyc1wiPjxJbnN0YWxsZXJEaXJlY3Rvcnkgb25Ob3RpZnk9e25vdGlmeX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJibG9nXCI+PEtub3dsZWRnZUh1YiAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8Zm9vdGVyIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMWExYTFhJywgY29sb3I6ICcjZTBlMGUwJywgcGFkZGluZzogJzgwcHggMCA0MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtNFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzYwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRDb2x1bW46ICdzcGFuIDEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JywgZm9udFdlaWdodDogODAwLCBmb250U2l6ZTogJzEuNXJlbScsIG1hcmdpbkJvdHRvbTogJzI0cHgnLCBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VuIHNpemU9ezMyfSBjb2xvcj1cInZhcigtLXN1bi1vcmFuZ2UpXCIgZmlsbD1cInZhcigtLXN1bi1nb2xkKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VuR2F0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjODg4JywgbGluZUhlaWdodDogMS42LCBtYXJnaW5Cb3R0b206ICcyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBaYW1iaWEncyBwcmVtaWVyIG1hcmtldHBsYWNlIGZvciBzb2xhciBlbmVyZ3kgc29sdXRpb25zLiBDb25uZWN0aW5nIGZ1bmN0aW9uYWxpdHkgd2l0aCBzdXN0YWluYWJpbGl0eS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU29jaWFsIHBsYWNlaG9sZGVycyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzZweCcsIGhlaWdodDogJzM2cHgnLCBiYWNrZ3JvdW5kOiAnIzMzMycsIGJvcmRlclJhZGl1czogJzUwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT48TWVzc2FnZUNpcmNsZSBzaXplPXsxOH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzZweCcsIGhlaWdodDogJzM2cHgnLCBiYWNrZ3JvdW5kOiAnIzMzMycsIGJvcmRlclJhZGl1czogJzUwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT48UGhvbmUgc2l6ZT17MTh9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcyNHB4JywgZm9udFNpemU6ICcxLjFyZW0nIH19PlNpdGVtYXA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nOiAwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjYWxjdWxhdG9yXCIgc3R5bGU9e3sgY29sb3I6ICcjYWFhJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5Tb2xhciBDYWxjdWxhdG9yPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjbWFya2V0cGxhY2VcIiBzdHlsZT17eyBjb2xvcjogJyNhYWEnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19Pk1hcmtldHBsYWNlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjaW5zdGFsbGVyc1wiIHN0eWxlPXt7IGNvbG9yOiAnI2FhYScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+RmluZCBJbnN0YWxsZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNibG9nXCIgc3R5bGU9e3sgY29sb3I6ICcjYWFhJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5FbmVyZ3kgVGlwczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5Cb3R0b206ICcyNHB4JywgZm9udFNpemU6ICcxLjFyZW0nIH19PlN1cHBvcnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nOiAwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9oZWxwXCIgc3R5bGU9e3sgY29sb3I6ICcjYWFhJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5IZWxwIENlbnRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIHN0eWxlPXt7IGNvbG9yOiAnI2FhYScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+U3VwcGxpZXIgTG9naW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBzdHlsZT17eyBjb2xvcjogJyNhYWEnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19Pkluc3RhbGxlciBSZWdpc3RyYXRpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9oZWxwXCIgc3R5bGU9e3sgY29sb3I6ICcjYWFhJywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5Db250YWN0IFVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpbkJvdHRvbTogJzI0cHgnLCBmb250U2l6ZTogJzEuMXJlbScgfX0+Q29udGFjdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlOiAnbm9uZScsIHBhZGRpbmc6IDAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzE2cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEycHgnLCBjb2xvcjogJyNhYWEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFwUGluIHNpemU9ezIwfSBjb2xvcj1cInZhcigtLXN1bi1vcmFuZ2UpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+THVzYWthLCBaYW1iaWE8YnIgLz5HcmVhdCBFYXN0IFJvYWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMnB4JywgY29sb3I6ICcjYWFhJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIHNpemU9ezIwfSBjb2xvcj1cInZhcigtLXN1bi1vcmFuZ2UpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDk3NDMwMDQ3Mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEycHgnLCBjb2xvcjogJyNhYWEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBzaXplPXsyMH0gY29sb3I9XCJ2YXIoLS1zdW4tb3JhbmdlKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnN1cHBvcnRAc3VuZ2F0ZS5jby56bTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzMwcHgnLCBib3JkZXJUb3A6ICcxcHggc29saWQgIzMzMycsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMC44NXJlbScsIGNvbG9yOiAnIzY2NicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiZjb3B5OyAyMDI2IFN1bkdhdGUgWmFtYmlhLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcml2YWN5XCIgc3R5bGU9e3sgY29sb3I6ICcjNjY2JywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5Qcml2YWN5IFBvbGljeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdGVybXNcIiBzdHlsZT17eyBjb2xvcjogJyM2NjYnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlRlcm1zICYgQ29uZGl0aW9uczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgc3R5bGU9e3sgY29sb3I6ICcjNjY2JywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5TaXRlbWFwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJmaWxlIjoiRTovd2Vic2l0ZSBsZWFybmluZyBjb2RlL3N1bmdhdGUgemFtYmlhL3NyYy9BcHAuanN4In0=