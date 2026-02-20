import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const QuoteRequestPrint = () => {
    const [id, setId] = useState(null)
    const [inquiry, setInquiry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Safe ID Extraction
        try {
            const path = window.location.pathname
            const prefix = '/print-quote/'
            if (path.includes(prefix)) {
                const extractedId = path.split(prefix)[1].split('/')[0]
                console.log("Extracted ID:", extractedId)
                setId(extractedId)
            } else {
                throw new Error("Invalid URL format")
            }
        } catch (e) {
            console.error("ID Extraction failed:", e)
            setError("Could not read Quote ID from URL")
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (!id) return

        const fetchInquiry = async () => {
            try {
                // Ensure auth session is loaded (crucial for new tab)
                const { data: { session } } = await supabase.auth.getSession()
                // No explicit check for authError here, as the main try/catch will handle issues if session is null/undefined
                // and subsequent supabase calls will likely fail.

                const { data, error } = await supabase
                    .from('inquiries')
                    .select('*, products(*), profiles(*)')
                    .eq('id', id)
                    .single()

                if (error) throw error
                setInquiry(data)
            } catch (err) {
                console.error("Fetch error:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchInquiry()
    }, [id])

    // Auto-trigger print when data is loaded
    useEffect(() => {
        if (inquiry && !loading && !error) {
            // Small delay to ensure rendering
            const timer = setTimeout(() => {
                window.print()
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [inquiry, loading, error])

    // RENDER SAFETY
    if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Request...</div>

    if (error) return (
        <div style={{ padding: '50px', color: 'red', textAlign: 'center' }}>
            <h2>Error Loading Quote</h2>
            <p>{error}</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>URL: {window.location.pathname}</p>
        </div>
    )

    if (!inquiry) return <div style={{ padding: '50px', textAlign: 'center' }}>Request not found.</div>

    // Safe Data Parsing
    const getQty = () => {
        try {
            if (inquiry.message && inquiry.message.includes('QTY:')) {
                const parts = inquiry.message.split('|')
                const qtyPart = parts.find(p => p.trim().startsWith('QTY:'))
                return qtyPart ? qtyPart.split(':')[1].trim() : '1'
            }
            return inquiry.quantity || '1'
        } catch (e) { return '1' }
    }

    const getNotes = () => {
        try {
            if (inquiry.message && inquiry.message.includes('NOTES:')) {
                const parts = inquiry.message.split('|')
                const notesPart = parts.find(p => p.trim().startsWith('NOTES:'))
                return notesPart ? notesPart.split(':')[1].trim() : ''
            }
            return inquiry.additional_notes || ''
        } catch (e) { return '' }
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <div className="no-print" style={{
                background: '#e3f2fd', color: '#0d47a1', padding: '16px',
                borderRadius: '8px', marginBottom: '24px', textAlign: 'center'
            }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>To Save as PDF:</p>
                <p style={{ margin: '4px 0 0' }}>Select "Save as PDF" in the print destination.</p>
            </div>

            {/* Header */}
            <div style={{ borderBottom: '2px solid #ed6c02', paddingBottom: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', background: '#ed6c02', borderRadius: '8px' }}></div>
                    <h1 style={{ margin: 0, fontSize: '24px', color: '#111' }}>SUNGATE ZAMBIA</h1>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <h2 style={{ margin: 0, color: '#ed6c02', fontSize: '18px' }}>REQUEST FOR QUOTATION</h2>
                    <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#666' }}>
                        Date: {inquiry.created_at ? new Date(inquiry.created_at).toLocaleDateString() : 'N/A'}
                    </p>
                    <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                        Ref: {inquiry.id ? inquiry.id.slice(0, 8).toUpperCase() : 'N/A'}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div style={{ marginBottom: '40px' }}>
                <p style={{ marginBottom: '20px' }}><strong>To:</strong> Supplier / Partner</p>
                <p style={{ lineHeight: '1.6' }}>
                    Please provide your best price and availability for the following item(s).
                    This is an official inquiry from SunGate Zambia on behalf of a verified client.
                </p>
            </div>

            {/* Product Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
                <thead>
                    <tr style={{ background: '#f8f9fa', textAlign: 'left' }}>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Item Description</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd', width: '100px', textAlign: 'center' }}>Qty</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd', width: '150px' }}>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '16px 12px', borderBottom: '1px solid #eee' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{inquiry.products?.name || 'Unknown Product'}</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>Category: {inquiry.products?.category || 'General'}</div>
                        </td>
                        <td style={{ padding: '16px 12px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                            {getQty()}
                        </td>
                        <td style={{ padding: '16px 12px', borderBottom: '1px solid #eee', fontSize: '14px', color: '#555' }}>
                            {getNotes() || '-'}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Footer */}
            <div style={{ marginTop: '60px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '12px', color: '#888', textAlign: 'center' }}>
                <p><strong>SunGate Zambia</strong> • admin@sungate.co.zm • +260 97 000 0000</p>
                <p>Digital Marketplace for Renewable Energy Solutions</p>
            </div>

            <div className="no-print" style={{ textAlign: 'center', marginTop: '40px' }}>
                <button
                    onClick={() => window.print()}
                    style={{ padding: '12px 24px', background: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
                >
                    Print / Save as PDF
                </button>
            </div>

            <style>{`
                @media print {
                    .no-print { display: none; }
                    body { margin: 0; padding: 0; }
                }
            `}</style>
        </div>
    )
}

export default QuoteRequestPrint
