import React, { useState, useEffect } from 'react'
import { ShieldCheck, Filter, ShoppingCart, Info, CheckCircle, Heart } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Marketplace = ({ session, profile, onNotify, onAddToCart, refreshTrigger, savedProductIds = [], onToggleSave }) => {
    const [filter, setFilter] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [priceRange, setPriceRange] = useState('all') // all, under1000, 1000to5000, over5000
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showQuoteModal, setShowQuoteModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [quoteForm, setQuoteForm] = useState({ quantity: 1, notes: '', phone: '' })

    const handleRequestQuote = (product) => {
        if (!session) {
            onNotify("Please login to request a quote.", "info")
            return
        }
        setSelectedProduct(product)
        setQuoteForm({ quantity: 1, notes: '', phone: profile?.phone || '' })
        setShowQuoteModal(true)
    }

    const submitQuoteRequest = async () => {
        console.log("Submitting quote request...")
        // User feedback immediate check
        if (!session) {
            alert("Session lost. Please refresh and login.")
            return
        }

        try {
            setLoading(true)
            // Fallback strategy: Pack everything into 'message' to avoid SQL schema errors
            // Format: "QTY: 5 | NOTES: ... | PHONE: ..."
            const packedMessage = `QTY: ${quoteForm.quantity} | PHONE: ${quoteForm.phone} | NOTES: ${quoteForm.notes}`

            const { error } = await supabase
                .from('inquiries')
                .insert([{
                    product_id: selectedProduct.id,
                    supplier_id: selectedProduct.supplier_id,
                    buyer_id: session.user.id,
                    // We removed 'quantity' and 'additional_notes' columns from this call
                    // to prevent "Column does not exist" errors
                    message: packedMessage,
                    status: 'pending'
                }])

            if (error) throw error

            console.log("Quote sent successfully")
            onNotify ? onNotify(`Quote request sent! Refreshing...`, "success") : alert("Quote Request Sent Successfully!")
            setShowQuoteModal(false)

            // Delay reload to show the success notification
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        } catch (err) {
            console.error("Error sending inquiry:", err)
            onNotify ? onNotify("Failed: " + err.message, "error") : alert("Failed: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleAddToCart = (product) => {
        if (!session) {
            onNotify("Please login to add items to cart.", "info")
            return
        }
        onAddToCart(product)
    }

    const categories = ['All', 'Kits', 'Batteries', 'Inverters', 'Pumps', 'Solar Panels', 'Water Heaters']

    useEffect(() => {
        fetchProducts()
    }, [refreshTrigger])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('products')
                .select('*')

            if (error) throw error
            setProducts(data || [])
        } catch (err) {
            console.error('Error fetching products:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }



    const filteredProducts = products.filter(p => {
        // 1. Category Filter
        const matchesCategory = filter === 'All' || p.category === filter

        // 2. Search Filter
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase())

        // 3. Price Filter (Simple logic parsing "K1,200" string to number)
        let matchesPrice = true
        if (priceRange !== 'all' && p.price) {
            // Remove 'K', ',', and whitespace to parse price
            const priceVal = parseFloat(p.price.toString().replace(/[K,\s]/g, ''))
            if (!isNaN(priceVal)) {
                if (priceRange === 'under1000') matchesPrice = priceVal < 1000
                else if (priceRange === '1000to5000') matchesPrice = priceVal >= 1000 && priceVal <= 5000
                else if (priceRange === 'over5000') matchesPrice = priceVal > 5000
            }
        }

        return matchesCategory && matchesSearch && matchesPrice
    })

    return (
        <section id="marketplace" style={{ padding: 'var(--section-padding)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--trust-blue)', marginBottom: '12px' }}>Solar Marketplace</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Verified equipment from global brands, delivered in Zambia.</p>
                    </div>
                </div>

                <div style={{
                    width: '100%', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    marginBottom: '50px', position: 'relative', boxShadow: 'var(--shadow-md)'
                }}>
                    <img
                        src="/assets/marketplace-banner.png"
                        alt="Solar Marketplace Zambia"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', color: 'white'
                    }}>
                        <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '8px' }}>SI 20 Quality Guaranteed</div>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Every panel and battery is tested to Zambian mandatory standards.</p>
                    </div>
                </div>

                {/* Advanced Filter Bar */}
                <div style={{
                    background: 'white', padding: '20px', borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)', marginBottom: '30px', border: '1px solid #eee'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', alignItems: 'center' }}>

                        {/* Search Input */}
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                                    border: '1px solid #ddd', fontSize: '0.9rem', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--trust-blue)'}
                                onBlur={(e) => e.target.style.borderColor = '#ddd'}
                            />
                        </div>

                        {/* Price Range Select */}
                        <div>
                            <select
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                style={{
                                    width: '100%', padding: '12px 16px', borderRadius: '8px',
                                    border: '1px solid #ddd', fontSize: '0.9rem', outline: 'none',
                                    background: 'white', cursor: 'pointer'
                                }}
                            >
                                <option value="all">Any Price</option>
                                <option value="under1000">Under K1,000</option>
                                <option value="1000to5000">K1,000 - K5,000</option>
                                <option value="over5000">Over K5,000</option>
                            </select>
                        </div>
                    </div>

                    {/* Category Pills */}
                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '16px 0 4px', width: '100%', maxWidth: '100%' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '8px 16px', borderRadius: '99px', border: '1px solid #eff0f1',
                                    background: filter === cat ? 'var(--trust-blue)' : '#f8f9fa',
                                    color: filter === cat ? 'white' : 'var(--text-dark)',
                                    whiteSpace: 'nowrap', fontWeight: 600, fontSize: '0.9rem',
                                    transition: 'all 0.2s ease', cursor: 'pointer'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-3">
                    {loading ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0' }}>
                            <div className="spinner" style={{ marginBottom: '20px' }}></div>
                            <p>Fetching the latest solar gear...</p>
                        </div>
                    ) : error ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '50px', background: '#fff0f0', borderRadius: 'var(--radius-md)', color: '#d32f2f' }}>
                            <p><b>Oops!</b> {error}</p>
                            <button onClick={fetchProducts} className="btn btn-secondary" style={{ marginTop: '16px' }}>Try Again</button>
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0' }}>
                            <p>No products found in this category.</p>
                        </div>
                    ) : filteredProducts.map(product => (
                        <div key={product.id} style={{
                            background: 'white', borderRadius: 'var(--radius-md)', overflow: 'hidden',
                            boxShadow: 'var(--shadow-sm)', border: '1px solid #eee', position: 'relative',
                            display: 'flex', flexDirection: 'column'
                        }}>
                            {product.verified && (
                                <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div className="badge badge-verified" style={{ background: 'white', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                        <ShieldCheck size={14} /> SunGate Verified
                                    </div>
                                    {product.duty_free && (
                                        <>
                                            <div className="badge" style={{ background: 'var(--zambia-green)', color: 'white', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', fontSize: '0.7rem' }}>
                                                <CheckCircle size={14} /> 0% Duty & VAT
                                            </div>
                                            <div className="badge" style={{ background: 'var(--trust-blue)', color: 'white', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', fontSize: '0.7rem' }}>
                                                <ShieldCheck size={14} /> ZABS SI 20
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            <div style={{ width: '100%', aspectRatio: '1/1', background: '#f5f5f5', overflow: 'hidden' }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <button
                                    onClick={() => onToggleSave(product.id)}
                                    style={{
                                        position: 'absolute', top: '12px', right: '12px',
                                        background: 'white', border: 'none', borderRadius: '50%',
                                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: savedProductIds.includes(product.id) ? '#ff4d4d' : '#888'
                                    }}
                                >
                                    <Heart size={20} fill={savedProductIds.includes(product.id) ? '#ff4d4d' : 'none'} />
                                </button>
                            </div>

                            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--sun-orange)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{product.category}</div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', minHeight: '2.8rem' }}>{product.name}</h3>

                                <table style={{ width: '100%', fontSize: '0.85rem', marginBottom: '20px', borderCollapse: 'collapse' }}>
                                    <tbody>
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <tr key={key} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                                <td style={{ padding: '6px 0', color: 'var(--text-muted)' }}>{key}</td>
                                                <td style={{ padding: '6px 0', fontWeight: 600, textAlign: 'right' }}>{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div style={{ marginTop: 'auto' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--trust-blue)' }}>{product.price}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--zambia-green)' }}>
                                            <CheckCircle size={14} /> In Stock
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button
                                            onClick={() => handleRequestQuote(product)}
                                            className="btn btn-primary"
                                            style={{ flex: 1, padding: '10px', fontSize: '0.9rem' }}
                                        >
                                            Request Quote
                                        </button>
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            style={{ padding: '10px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', background: 'white' }}
                                        >
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', background: 'var(--sky-blue)', padding: '30px', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '10px' }}>Don't see what you need?</h3>
                    <p style={{ marginBottom: '20px' }}>We work with 50+ suppliers to source any solar component globally.</p>
                    <a
                        href="https://wa.me/260974300472?text=Hi%2C%20I%27m%20looking%20for%20custom%20solar%20sourcing%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ textDecoration: 'none' }}
                    >
                        Contact Custom Sourcing
                    </a>
                </div>
            </div>
            {/* Quote Request Modal */}
            {showQuoteModal && selectedProduct && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '30px', borderRadius: '16px', width: '90%', maxWidth: '500px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>Request Quote</h3>
                            <button onClick={() => setShowQuoteModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ fontWeight: 600, marginBottom: '4px' }}>{selectedProduct.name}</div>
                            <div style={{ fontSize: '0.9rem', color: '#666' }}>ID: {String(selectedProduct.id).slice(0, 8)}...</div>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Quantity</label>
                            <input
                                type="number"
                                min="1"
                                value={quoteForm.quantity}
                                onChange={(e) => setQuoteForm({ ...quoteForm, quantity: parseInt(e.target.value) })}
                                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
                            />
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>Additional Notes / Specifications</label>
                            <textarea
                                value={quoteForm.notes}
                                onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                                placeholder="E.g., Special delivery instructions, specific voltage requirements..."
                                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px', fontFamily: 'inherit' }}
                            />
                        </div>

                        <button
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                            onClick={submitQuoteRequest}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Quote Request'}
                        </button>
                    </div>
                </div>
            )}
        </section >
    )
}

export default Marketplace
