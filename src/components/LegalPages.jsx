
import React from 'react'
import { ShieldCheck, MessageCircle, HelpCircle, ChevronRight, Phone, ArrowLeft } from 'lucide-react'

// --- Terms of Service ---
export const TermsPage = () => (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '800px' }}>
        <a href="/" className="btn" style={{ marginBottom: '24px', paddingLeft: 0, color: 'var(--trust-blue)' }}>
            <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Home
        </a>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--trust-blue)' }}>Terms of Service</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>Last Updated: February 2026</p>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>1. Introduction</h2>
            <p>Welcome to SunGate Zambia. By accessing our website and using our services, you agree to be bound by these Terms of Service. SunGate acts as a marketplace connecting buyers with independent solar product suppliers and certified installers.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>2. Marketplace Usage</h2>
            <p>SunGate facilitates transactions but is not the direct seller of all goods. Suppliers are responsible for the quality and warranty of their products. Installers operate as independent contractors.</p>
            <ul style={{ marginLeft: '20px', marginTop: '16px', color: '#555' }}>
                <li>Users must provide accurate information for quotes.</li>
                <li>Payments are processed securely; however, direct offline payments are at your own risk.</li>
            </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>3. Installer Services</h2>
            <p>All installers listed on SunGate are verified for ERB certification at the time of onboarding. SunGate is not liable for damages caused during installation, though we will assist in dispute resolution.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>4. Returns & Refunds</h2>
            <p>Return policies vary by supplier. Generally, defective products can be returned within 7 days. Please check the specific policy of the supplier you are buying from.</p>
        </section>
    </div>
)

// --- Privacy Policy ---
export const PrivacyPolicyPage = () => (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '800px' }}>
        <a href="/" className="btn" style={{ marginBottom: '24px', paddingLeft: 0, color: 'var(--trust-blue)' }}>
            <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Home
        </a>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--trust-blue)' }}>Privacy Policy</h1>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Data Collection</h2>
            <p>We collect information you provide directly to us, such as when you create an account, request a quote, or contact customer support. This includes name, email, phone number, and address.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul style={{ marginLeft: '20px', marginTop: '16px', color: '#555' }}>
                <li>Process orders and connect you with installers.</li>
                <li>Send quote updates and service notifications.</li>
                <li>Improve our rigorous vetting process.</li>
            </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Contact Information</h2>
            <p>For privacy concerns, please contact our Data Protection Officer at sungatezambia@gmail.com or call 0974300472.</p>
        </section>
    </div>
)

// --- Help Center ---
export const HelpCenterPage = () => (
    <div className="container" style={{ padding: '40px 20px', maxWidth: '800px' }}>
        <a href="/" className="btn" style={{ marginBottom: '24px', paddingLeft: 0, color: 'var(--trust-blue)' }}>
            <ArrowLeft size={18} style={{ marginRight: '8px' }} /> Back to Home
        </a>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: 'var(--trust-blue)' }}>How can we help?</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>Browse topics or contact support at <strong style={{ color: 'var(--sun-orange)' }}>0974300472</strong></p>
        </div>

        <div className="grid grid-2" style={{ gap: '30px' }}>
            <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '16px', border: '1px solid #eee' }}>
                <ShieldCheck size={32} color="var(--trust-blue)" style={{ marginBottom: '16px' }} />
                <h3 style={{ marginBottom: '12px' }}>Installation & Warranty</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><a href="#">Does SunGate provide a warranty?</a></li>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><a href="#">How do I verify an installer?</a></li>
                    <li style={{ padding: '8px 0' }}><a href="#">What if my system fails?</a></li>
                </ul>
            </div>

            <div style={{ padding: '30px', background: '#f8f9fa', borderRadius: '16px', border: '1px solid #eee' }}>
                <MessageCircle size={32} color="var(--sun-orange)" style={{ marginBottom: '16px' }} />
                <h3 style={{ marginBottom: '12px' }}>Ordering & Deliveries</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><a href="#">How long does delivery take?</a></li>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}><a href="#">Payment methods accepted</a></li>
                    <li style={{ padding: '8px 0' }}><a href="#">Return policy</a></li>
                </ul>
            </div>
        </div>

        <div style={{ marginTop: '60px', padding: '40px', background: 'var(--trust-blue)', borderRadius: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Still need help?</h3>
                <p style={{ opacity: 0.9 }}>Our support team is available Mon-Sat, 8am - 6pm.</p>
            </div>
            <a href="tel:0974300472" className="btn" style={{ background: 'white', color: 'var(--trust-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={20} /> Call 0974300472
            </a>
        </div>
    </div>
)
