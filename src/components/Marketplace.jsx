import React, { useState, useEffect } from 'react'
import { ShieldCheck, Filter, ShoppingCart, Info, CheckCircle, Heart, Search, LayoutGrid, Box, Battery, Zap, Droplets, Sun, Waves, ArrowUpDown, SlidersHorizontal, X } from 'lucide-react'
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
    const [sortBy, setSortBy] = useState('newest') // newest, priceLow, priceHigh
    const [showMobileFilters, setShowMobileFilters] = useState(false)

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

            console.log("Quote sent successfully. Triggering email...");
            
            // Trigger the Edge Function for email notification
            try {
                await supabase.functions.invoke('hyper-api', {
                    body: {
                        product_name: selectedProduct.name,
                        customer_email: session.user.email,
                        customer_phone: quoteForm.phone,
                        quantity: quoteForm.quantity,
                        notes: quoteForm.notes
                    }
                });
                console.log("Email notification triggered.");
            } catch (emailErr) {
                console.error("Failed to trigger email notification:", emailErr);
                // We don't throw here so the user still sees their quote was "sent" to the DB
            }

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

    const categories = [
        { name: 'All', icon: LayoutGrid },
        { name: 'Kits', icon: Box },
        { name: 'Batteries', icon: Battery },
        { name: 'Inverters', icon: Zap },
        { name: 'Pumps', icon: Droplets },
        { name: 'Solar Panels', icon: Sun },
        { name: 'Water Heaters', icon: Waves }
    ]

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
        // 1. Category Filter - Enhanced matching with aliases
        const normalize = (str) => (str || '').toLowerCase().trim();
        const prodCat = normalize(p.category);
        const filterCat = normalize(filter);

        let matchesCategory = filter === 'All';
        if (!matchesCategory) {
            // Standard match
            if (prodCat === filterCat) matchesCategory = true;
            else {
                // Alias matching
                if (filterCat === 'solar panels' && (prodCat === 'panels' || prodCat === 'solar')) matchesCategory = true;
                if (filterCat === 'water heaters' && (prodCat === 'geysers' || prodCat === 'heaters')) matchesCategory = true;
                // Cross-check containment (e.g. "Kits" matches "Solar Kits")
                if (prodCat.includes(filterCat) || filterCat.includes(prodCat)) matchesCategory = true;
            }
        }

        // 2. Search Filter
        const matchesSearch = normalize(p.name).includes(normalize(searchQuery)) ||
            normalize(p.category).includes(normalize(searchQuery))

        // 3. Price Filter
        let matchesPrice = true
        if (priceRange !== 'all') {
            const priceVal = parseFloat(p.price?.toString().replace(/[K,\s]/g, '') || '')
            if (!isNaN(priceVal)) {
                if (priceRange === 'under1000') matchesPrice = priceVal < 1000
                else if (priceRange === '1000to5000') matchesPrice = priceVal >= 1000 && priceVal <= 5000
                else if (priceRange === 'over5000') matchesPrice = priceVal > 5000
            } else {
                // If price is not a number (e.g. "Price on Request"), hide it if a range is selected
                matchesPrice = false
            }
        }

        return matchesCategory && matchesSearch && matchesPrice
    }).sort((a, b) => {
        if (sortBy === 'newest') return b.id.toString().localeCompare(a.id.toString()) // Fallback for newest
        
        const priceA = parseFloat(a.price.toString().replace(/[K,\s]/g, ''))
        const priceB = parseFloat(b.price.toString().replace(/[K,\s]/g, ''))
        
        if (sortBy === 'priceLow') return priceA - priceB
        if (sortBy === 'priceHigh') return priceB - priceA
        return 0
    })

    return (
        <section id="marketplace" style={{ padding: 'var(--section-padding)', background: '#fcfcfd' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ marginBottom: '40px' }} className="mobile-center">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '20px' }} className="mobile-center mobile-stack">
                        <div>
                            <h2 style={{ fontWeight: 800, color: 'var(--trust-blue)', letterSpacing: '-0.02em' }}>Solar Marketplace</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Certified equipment for the Zambian climate.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div className="badge" style={{ background: '#eef2ff', color: 'var(--trust-blue)', border: '1px solid #e0e7ff', padding: '8px 16px', borderRadius: '12px', fontWeight: 600 }}>
                                {filteredProducts.length} Products Found
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
                    
                    {/* Desktop Sidebar / Filter Section */}
                    <aside className="sidebar-desktop" style={{ 
                        gridColumn: 'span 3', 
                        position: 'sticky',
                        top: '100px',
                        height: 'fit-content'
                    }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid #eee',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--trust-blue)' }}>
                                <SlidersHorizontal size={20} />
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Filters</h3>
                            </div>

                            {/* Search */}
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '8px', color: '#666' }}>SEARCH</label>
                                <div style={{ position: 'relative' }}>
                                    <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                                    <input 
                                        type="text" 
                                        placeholder="Panels, kits..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        style={{
                                            width: '100%', padding: '10px 12px 10px 36px', borderRadius: '12px',
                                            border: '1px solid #ddd', fontSize: '0.9rem', outline: 'none'
                                        }}
                                    />
                                    {searchQuery && (
                                        <button 
                                            onClick={() => setSearchQuery('')}
                                            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}
                                        >
                                            <X size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Categories (Desktop Sidebar) */}
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '12px', color: '#666' }}>CATEGORIES</label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {categories.map(cat => {
                                        const Icon = cat.icon
                                        return (
                                            <button
                                                key={cat.name}
                                                onClick={() => setFilter(cat.name)}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: '10px',
                                                    padding: '10px 12px', borderRadius: '10px', border: 'none',
                                                    background: filter === cat.name ? 'var(--trust-blue)' : 'transparent',
                                                    color: filter === cat.name ? 'white' : 'var(--text-dark)',
                                                    cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left',
                                                    fontWeight: filter === cat.name ? 600 : 500, fontSize: '0.95rem'
                                                }}
                                            >
                                                <Icon size={18} />
                                                {cat.name}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '12px', color: '#666' }}>PRICE RANGE</label>
                                <select
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    style={{
                                        width: '100%', padding: '10px', borderRadius: '10px',
                                        border: '1px solid #ddd', background: 'white', cursor: 'pointer'
                                    }}
                                >
                                    <option value="all">Any Price</option>
                                    <option value="under1000">Under K1,000</option>
                                    <option value="1000to5000">K1,000 - K5,000</option>
                                    <option value="over5000">Over K5,000</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Main Products Area */}
                    <main className="marketplace-main-content">
                        
                        {/* Mobile Category & Filter Bar */}
                        <div className="mobile-only-filters" style={{ 
                            flexDirection: 'column',
                            gap: '16px',
                            marginBottom: '24px'
                        }}>
                            <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '8px' }} className="no-scrollbar">
                                {categories.map(cat => {
                                    const Icon = cat.icon
                                    return (
                                        <button
                                            key={cat.name}
                                            onClick={() => setFilter(cat.name)}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: '8px',
                                                padding: '8px 16px', borderRadius: '99px', border: '1px solid #eee',
                                                background: filter === cat.name ? 'var(--trust-blue)' : 'white',
                                                color: filter === cat.name ? 'white' : 'var(--text-dark)',
                                                whiteSpace: 'nowrap', fontWeight: 600, fontSize: '0.9rem'
                                            }}
                                        >
                                            <Icon size={16} /> {cat.name}
                                        </button>
                                    )
                                })}
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button 
                                    onClick={() => setShowMobileFilters(true)}
                                    style={{
                                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                        padding: '12px', background: 'white', border: '1px solid #eee', borderRadius: '12px',
                                        fontWeight: 600
                                    }}
                                >
                                    <SlidersHorizontal size={18} /> Filters
                                </button>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    <ArrowUpDown size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                                    <select 
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        style={{ width: '100%', padding: '12px 12px 12px 36px', border: '1px solid #eee', borderRadius: '12px', background: 'white', appearance: 'none', fontWeight: 600 }}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="priceLow">Price: Low to High</option>
                                        <option value="priceHigh">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Top Control Bar (Desktop) */}
                        <div className="desktop-only-controls" style={{ 
                            justifyContent: 'flex-end',
                            marginBottom: '24px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: '#666', fontSize: '0.9rem' }}>Sort by:</span>
                                <div style={{ position: 'relative' }}>
                                    <select 
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        style={{
                                            padding: '8px 32px 8px 12px', border: '1px solid #eee',
                                            borderRadius: '8px', background: 'white', fontWeight: 600,
                                            cursor: 'pointer', outline: 'none'
                                        }}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="priceLow">Price: Low to High</option>
                                        <option value="priceHigh">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-3 marketplace-grid" style={{ gap: '24px' }}>
                            {loading ? (
                                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0' }}>
                                    <div className="spinner" style={{ marginBottom: '20px' }}></div>
                                    <p>Loading catalog...</p>
                                </div>
                            ) : error ? (
                                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '50px', background: '#fff0f0', borderRadius: '20px', color: '#d32f2f' }}>
                                    <p><b>Oops!</b> {error}</p>
                                    <button onClick={fetchProducts} className="btn btn-secondary" style={{ marginTop: '16px' }}>Try Again</button>
                                </div>
                            ) : filteredProducts.length === 0 ? (
                                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '100px 0', background: 'white', borderRadius: '20px', border: '1px dashed #ddd' }}>
                                    <p style={{ color: '#999', fontSize: '1.1rem' }}>No products match your criteria.</p>
                                    <button onClick={() => {setFilter('All'); setSearchQuery(''); setPriceRange('all')}} style={{ marginTop: '16px', color: 'var(--trust-blue)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>Clear all filters</button>
                                </div>
                            ) : filteredProducts.map(product => (
                                <div key={product.id} className="product-card" style={{
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
                                            className="product-image"
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
                    </main>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            {showMobileFilters && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
                    <div 
                        onClick={() => setShowMobileFilters(false)}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', cursor: 'pointer' }}
                    />
                    <div style={{ 
                        position: 'absolute', inset: '0 0 0 20%', background: 'white', padding: '24px',
                        display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: '-4px 0 10px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontWeight: 800 }}>Filters</h3>
                            <button onClick={() => setShowMobileFilters(false)} style={{ background: 'none', border: 'none' }}><X size={24} /></button>
                        </div>
                        
                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>SEARCH</label>
                            <input 
                                type="text" 
                                placeholder="Search Marketplace..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ width: '100%', padding: '12px', border: '1px solid #eee', borderRadius: '12px' }}
                            />
                        </div>

                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '12px' }}>PRICE RANGE</label>
                            <select
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee' }}
                            >
                                <option value="all">Any Price</option>
                                <option value="under1000">Under K1,000</option>
                                <option value="1000to5000">K1,000 - K5,000</option>
                                <option value="over5000">Over K5,000</option>
                            </select>
                        </div>

                        <button 
                            onClick={() => setShowMobileFilters(false)}
                            className="btn btn-primary"
                            style={{ marginTop: 'auto', width: '100%' }}
                        >
                            Show {filteredProducts.length} Results
                        </button>
                    </div>
                </div>
            )}

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
        </section>
    )
}

export default Marketplace
