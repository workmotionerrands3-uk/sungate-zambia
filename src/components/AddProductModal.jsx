import React, { useState } from 'react'
import { X, Package, DollarSign, Image as ImageIcon, Tag, Save, Plus, Trash2 } from 'lucide-react'

const AddProductModal = ({ isOpen, onClose, onSave, loading }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Solar Panels',
        price: '',
        imageFile: null,
        previewUrl: null,
        specs: [{ key: '', value: '' }],
        duty_free: true
    })

    const categories = ['Kits', 'Batteries', 'Inverters', 'Pumps', 'Solar Panels', 'Water Heaters']

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData({
                ...formData,
                imageFile: file,
                previewUrl: URL.createObjectURL(file)
            })
        }
    }

    const handleSpecChange = (index, field, value) => {
        const newSpecs = [...formData.specs]
        newSpecs[index][field] = value
        setFormData({ ...formData, specs: newSpecs })
    }

    const addSpec = () => {
        setFormData({ ...formData, specs: [...formData.specs, { key: '', value: '' }] })
    }

    const removeSpec = (index) => {
        setFormData({ ...formData, specs: formData.specs.filter((_, i) => i !== index) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.imageFile) {
            alert("Please upload a product image.")
            return
        }

        // Convert specs array to object for Supabase JSONB
        const specsObject = {}
        formData.specs.forEach(s => {
            if (s.key && s.value) specsObject[s.key] = s.value
        })

        onSave({
            ...formData,
            specs: specsObject,
            // Format price as "K X,XXX" if user just enters a number
            price: formData.price.startsWith('K') ? formData.price : `K${parseInt(formData.price).toLocaleString()}`
        })
    }

    if (!isOpen) return null

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 3000, padding: '20px'
        }}>
            <div style={{
                background: 'white', width: '100%', maxWidth: '600px',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)', position: 'relative',
                maxHeight: '90vh', display: 'flex', flexDirection: 'column'
            }}>
                <div style={{ padding: '24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ padding: '8px', background: 'var(--sky-blue)', borderRadius: '8px' }}>
                            <Package color="var(--trust-blue)" size={24} />
                        </div>
                        <h2 style={{ fontSize: '1.25rem', color: 'var(--trust-blue)' }}>List New Product</h2>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Product Name</label>
                            <div style={{ position: 'relative' }}>
                                <Tag style={{ position: 'absolute', left: '12px', top: '12px', color: '#aaa' }} size={18} />
                                <input
                                    type="text" required placeholder="e.g. Jinko 550W Mono Facial"
                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Category</label>
                                <select
                                    value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: 'white' }}
                                >
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Price (Kwacha)</label>
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'absolute', left: '12px', top: '12px', color: '#aaa', fontWeight: 700 }}>K</div>
                                    <input
                                        type="number" required placeholder="5500"
                                        value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })}
                                        style={{ width: '100%', padding: '12px 12px 12px 30px', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Product Image</label>
                            <div style={{
                                border: '2px dashed #ddd', borderRadius: '12px', padding: '20px',
                                textAlign: 'center', cursor: 'pointer', position: 'relative',
                                background: formData.previewUrl ? '#f8f9fa' : 'white'
                            }}>
                                {formData.previewUrl ? (
                                    <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                                        <img
                                            src={formData.previewUrl}
                                            alt="Preview"
                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, imageFile: null, previewUrl: null })}
                                            style={{
                                                position: 'absolute', top: '-10px', right: '-10px',
                                                background: '#ff4d4d', color: 'white', border: 'none',
                                                borderRadius: '50%', width: '24px', height: '24px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                                            }}
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <ImageIcon size={32} color="#aaa" />
                                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Click to upload product photo</div>
                                        <div style={{ fontSize: '0.75rem', color: '#999' }}>PNG, JPG or WebP (Max 5MB)</div>
                                    </div>
                                )}
                                <input
                                    type="file" accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#666' }}>Specifications</label>
                                <button type="button" onClick={addSpec} style={{
                                    background: 'none', border: 'none', color: 'var(--trust-blue)',
                                    fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer'
                                }}>
                                    <Plus size={14} /> Add Spec
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {formData.specs.map((spec, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                        <input
                                            type="text" placeholder="Key (e.g. Power)"
                                            value={spec.key} onChange={e => handleSpecChange(index, 'key', e.target.value)}
                                            style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.9rem' }}
                                        />
                                        <input
                                            type="text" placeholder="Value (e.g. 550W)"
                                            value={spec.value} onChange={e => handleSpecChange(index, 'value', e.target.value)}
                                            style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.9rem' }}
                                        />
                                        <button type="button" onClick={() => removeSpec(index)} style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8f9fa', padding: '12px', borderRadius: '8px' }}>
                            <input
                                type="checkbox" id="duty_free"
                                checked={formData.duty_free} onChange={e => setFormData({ ...formData, duty_free: e.target.checked })}
                                style={{ width: '18px', height: '18px' }}
                            />
                            <label htmlFor="duty_free" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--zambia-green)' }}>
                                This item qualifies for 0% Duty & VAT (SunGate Green Verified)
                            </label>
                        </div>
                    </div>
                </form>

                <div style={{ padding: '24px', borderTop: '1px solid #eee', background: '#fcfcfc', display: 'flex', gap: '12px' }}>
                    <button onClick={onClose} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                        {loading ? <div className="spinner" style={{ width: '20px', height: '20px' }}></div> : (
                            <><Save size={18} /> Save & List Product</>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal
