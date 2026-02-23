import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

// Marketing Components
import LandingPage from "./components/marketing/LandingPage.jsx";
import PublicNavbar from "./components/marketing/PublicNavbar.jsx";
import PublicCalculator from "./components/marketing/PublicCalculator.jsx";
import PartnerLanding from "./components/marketing/PartnerLanding.jsx";
import Blog from "./components/marketing/Blog.jsx";
import MarketingFooter from "./components/marketing/MarketingFooter.jsx";

// Standard UI Components
import StandardNavbar from "./components/StandardNavbar.jsx";
import StandardFooter from "./components/StandardFooter.jsx";
import UserDashboard from "./components/Dashboards/UserDashboard.jsx";
import SupplierDashboard from "./components/Dashboards/SupplierDashboard.jsx";



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
  const [siteSettings, setSiteSettings] = useState({ zesco_rate: 2.50, support_phone: '0974300472' });
  const [loading, setLoading] = useState(true);
  const [passwordRecoveryMode, setPasswordRecoveryMode] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Enhanced helper to trigger auth or redirect to WhatsApp
  const openAuthWithRole = (role, planName = null, price = null) => {
    if (session) {
      // If logged in, redirect to WhatsApp for payment/upgrade
      const userName = profile?.full_name || session.user.user_metadata?.full_name || "Partner";
      const message = planName 
        ? `Hi SunGate! My name is ${userName}. I want to subscribe to the ${planName} plan for ${role}.`
        : `Hi SunGate! My name is ${userName}. I'm interested in the ${role} partnership.`;
      
      const whatsappUrl = `https://wa.me/${siteSettings.support_phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      notify("Redirecting to WhatsApp for payment...", "info");
      return;
    }
    
    // Store plan data if user is signing up
    if (planName) {
      localStorage.setItem('pending_plan', JSON.stringify({ role, planName, price }));
    }
    
    setInitialAuthRole(role);
    setShowAuth(true);
  };



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

  const clearCart = () => {
    if (confirm("Are you sure you want to clear your entire solar cart?")) {
      setCartItems([]);
      if (session?.user?.id) {
        localStorage.removeItem(`cart_${session.user.id}`);
      }
      notify("Cart cleared.", "info");
    }
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

  const deleteInquiry = async (id) => {
    if (!confirm("Are you sure you want to cancel this quote request?")) return;
    try {
      const { error } = await supabase.from("inquiries").delete().eq("id", id);
      if (error) {
        console.error("Supabase deletion error:", error);
        throw new Error(error.message || "Permission denied or database error");
      }
      notify("Quote request cancelled.", "success");
      setRefreshTrigger((prev) => prev + 1);
      
      // Specifically trigger fetches to ensure UI consistency
      if (profile?.role === "supplier") {
        fetchSupplierData();
      } else {
        fetchUserData();
      }
    } catch (err) {
      console.error("Error deleting inquiry:", err);
      notify("Failed to cancel request: " + (err.message || "Unknown error"), "error");
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
    // Broaden role check to include installers/suppliers who might have customer history
    if (!session) return;
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
    // Include admins and installers in supplier data check if applicable
    if (!session || (profile?.role !== "supplier" && profile?.role !== "admin")) return;

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
    } else if (session && (profile?.role === "user" || profile?.role === "installer")) {
      fetchUserData();
    }
  }, [session, profile, refreshTrigger]);

  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling (e.g., /#calculator)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    fetchSiteSettings();
  }, []);

  const fetchSiteSettings = async () => {
    try {
      const { data, error } = await supabase.from('site_settings').select('*').single();
      if (data) setSiteSettings(data);
    } catch (err) {
      console.warn("Failed to fetch site settings, using defaults.", err);
    }
  };

  const notify = (message, type = "info") => {
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
      
      // CRITICAL: Update session immediately to fix login/logout lag
      setSession(session);

      if (event === "PASSWORD_RECOVERY") {
        setPasswordRecoveryMode(true);
      }

      if (session) {
        fetchProfile(session.user.id);
        
        // Handle pending plan redirection after sign-up
        const pendingPlan = localStorage.getItem('pending_plan');
        if (pendingPlan) {
          try {
            const { role, planName } = JSON.parse(pendingPlan);
            localStorage.removeItem('pending_plan');
            
            // Redirect to WhatsApp - use metadata name if profile isn't fetched yet
            const userName = session.user.user_metadata?.full_name || "New Partner";
            const message = `Hi SunGate! My name is ${userName}. I just signed up and want to subscribe to the ${planName} plan for ${role}.`;
            const whatsappUrl = `https://wa.me/${siteSettings.support_phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            
            // Short delay to ensure session is fully processed
            setTimeout(() => {
              window.open(whatsappUrl, '_blank');
              notify("Account created! Redirecting to WhatsApp for payment...", "success");
            }, 1000);
          } catch (e) {
            console.error("Failed to process pending plan", e);
          }
        }
      } else {
        setProfile(null);
        setCartItems([]); // Clear UI state on logout
      }
    });

    return () => subscription.unsubscribe();
  }, [siteSettings.support_phone]);

  const handleRoleUpgrade = async (newRole) => {
    if (!session) return;
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ role: newRole })
        .eq("id", session.user.id);

      if (error) throw error;
      
      notify(`Account upgraded to ${newRole}! Welcome to the partner network.`, "success");
      
      // Force a full profile refresh
      await fetchProfile(session.user.id);
      setRefreshTrigger(prev => prev + 1);
    } catch (err) {
      console.error("Error upgrading role:", err);
      notify("Failed to upgrade account. Please contact support.", "error");
    }
  };

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

  return (
    <div className="app">
      {session ? (
        <StandardNavbar
          session={session}
          profile={profile}
          onAuthClick={() => setShowAuth(true)}
          onLogout={handleLogout}
          cartCount={cartItems.length}
          onCartClick={() => setIsCartOpen(true)}
        />
      ) : (
        <PublicNavbar onAuthClick={openAuthWithRole} />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onClear={clearCart}
        onNotify={notify}
        onQuoteRequest={handleCartQuoteRequest}
      />

      {showAuth && (
        <AuthForm
          initialRole={initialAuthRole}
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

      <main>
        <Routes>
          {/* Print route - full page, no chrome */}
          <Route path="/print-quote/:id" element={<QuoteRequestPrint />} />

          {/* Root Route: Landing Page or Role-Based Dashboard */}
          <Route path="/" element={
            !session ? (
              <LandingPage onAuthClick={openAuthWithRole} session={session} zescoRate={siteSettings.zesco_rate} />
            ) : (
              <>
                {profile?.role === "admin" ? (
                  <AdminDashboard profile={profile} />
                ) : profile?.role === "supplier" ? (
                  <SupplierDashboard
                    profile={profile}
                    onAddProduct={() => setShowAddProduct(true)}
                    stats={supplierStats}
                    inquiries={supplierInquiries}
                    products={supplierProducts}
                    onUpdateInquiryStatus={updateInquiryStatus}
                    onDeleteProduct={deleteProduct}
                  />
                ) : (
                  <UserDashboard
                    profile={profile}
                    savedProducts={userSavedProducts}
                    calcHistory={userCalcHistory}
                    userInquiries={userInquiries}
                    onRemoveSaved={removeSavedProduct}
                    onDeleteHistory={deleteCalculatorResult}
                    onDeleteInquiry={deleteInquiry}
                    setPdfUrl={setPdfUrl}
                    setShowPdfModal={setShowPdfModal}
                    onRoleUpgrade={handleRoleUpgrade}
                    onAuthClick={openAuthWithRole}
                  />
                )}
                
                {/* Shared utilities for all logged-in users */}
                <div id="calculator">
                    <SolarCalculator 
                      onSaveResult={saveCalculatorResult} 
                      zescoRate={siteSettings.zesco_rate}
                    />
                </div>
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
                  <Blog />
                </div>
              </>
            )
          } />

          {/* Public Marketing Routes */}
          <Route path="/partners" element={<PartnerLanding session={session} profile={profile} onAuthClick={openAuthWithRole} />} />
          <Route path="/calculator" element={<PublicCalculator onAuthClick={openAuthWithRole} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          
          {/* Catch-all to root */}
          <Route path="*" element={<LandingPage onAuthClick={openAuthWithRole} />} />
        </Routes>
      </main>

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

      {session ? (
        <StandardFooter openAuthWithRole={openAuthWithRole} />
      ) : (
        <MarketingFooter onDashboardClick={() => openAuthWithRole('user')} />
      )}
    </div>
  );
};


export default App;
