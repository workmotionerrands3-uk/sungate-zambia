import React from 'react'
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const CartDrawer = ({ isOpen, onClose, items, onRemove, onClear, onNotify, onQuoteRequest }) => {
    const total = items.reduce((sum, item) => {
        // Extract numeric price from string like "K5,500" or "K12,000"
        const numPrice = parseInt(item.price.toString().replace(/[^0-9]/g, ''))
        return sum + numPrice
    }, 0)

    if (!isOpen) return null

    return (
        <div style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 3000,
            display: 'flex', justifyContent: 'flex-end', background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)'
        }}>
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%', maxWidth: '400px', background: 'white', height: '100%',
                    display: 'flex', flexDirection: 'column', animation: 'slideRight 0.3s ease-out'
                }}
            >
                <div style={{ padding: '24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <ShoppingBag size={24} color="var(--trust-blue)" />
                        <h2 style={{ fontSize: '1.25rem', color: 'var(--trust-blue)' }}>My Solar Cart</h2>
                        <span style={{
                            background: 'var(--sun-orange)', color: 'white', padding: '2px 8px',
                            borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700
                        }}>
                            {items.length}
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {items.length > 0 && (
                            <button 
                                onClick={onClear}
                                style={{
                                    background: 'none', border: 'none', color: '#ff4d4d', 
                                    fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                                    padding: '4px 8px', borderRadius: '4px'
                                }}
                            >
                                Clear All
                            </button>
                        )}
                        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {items.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '100px', color: '#888' }}>
                            <ShoppingBag size={64} style={{ opacity: 0.2, marginBottom: '20px' }} />
                            <p>Your cart is empty.</p>
                            <button
                                onClick={onClose}
                                className="btn btn-secondary"
                                style={{ marginTop: '20px' }}
                            >
                                Browse Marketplace
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {items.map((item, index) => (
                                <div key={`${item.id}-${index}`} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #f5f5f5', paddingBottom: '20px' }}>
                                     <div style={{ width: '80px', height: '80px', borderRadius: '8px', background: '#f5f5f5', overflow: 'hidden' }}>
                                        <img 
                                            src={item.image || FALLBACK_IMAGE} 
                                            alt={item.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>{item.name}</h4>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--trust-blue)' }}>{item.price}</div>
                                        <button
                                            onClick={() => onRemove(index)}
                                            style={{
                                                marginTop: '8px', background: 'rgba(255, 77, 77, 0.05)', 
                                                border: '1px solid #ffebeb',
                                                color: '#ff4d4d', fontSize: '0.8rem', display: 'flex',
                                                alignItems: 'center', gap: '6px', cursor: 'pointer', 
                                                padding: '8px 12px', borderRadius: '8px'
                                            }}
                                        >
                                            <Trash2 size={14} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div style={{ padding: '24px', background: '#f8f9fa', borderTop: '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.1rem' }}>
                            <span style={{ fontWeight: 600 }}>Estimated Total</span>
                            <span style={{ fontWeight: 800, color: 'var(--trust-blue)' }}>K{total.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={() => onQuoteRequest(items)}
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                        >
                            Request Official Quote <ArrowRight size={18} />
                        </button>
                        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#888', marginTop: '12px' }}>
                            Prices include VAT and duty exemptions where applicable.
                        </p>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes slideRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    )
}

export default CartDrawer
