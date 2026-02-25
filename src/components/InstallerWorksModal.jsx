import React, { useState, useEffect } from 'react'
import { X, Save, Plus, Trash2, Image as ImageIcon, FileText, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const InstallerWorksModal = ({ isOpen, onClose, installer, onNotify }) => {
    const [works, setWorks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showAddForm, setShowAddForm] = useState(false)
    const [formData, setFormData] = useState({ title: '', description: '', images: [], imageFiles: [], previewUrls: [] })
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (isOpen && installer) {
            fetchWorks()
        }
    }, [isOpen, installer])

    const fetchWorks = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('installer_works')
                .select('*')
                .eq('installer_id', installer.id)
                .order('created_at', { ascending: false })

            if (error) throw error
            setWorks(data || [])
        } catch (err) {
            console.error('Error fetching works:', err)
            onNotify('Failed to fetch works', 'error')
        } finally {
            setLoading(false)
        }
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        if (files.length > 0) {
            const currentFiles = [...formData.imageFiles]
            const currentPreviews = [...formData.previewUrls]

            const remainingSlots = 4 - currentFiles.length
            const filesToAdd = files.slice(0, remainingSlots)

            const newFiles = [...currentFiles, ...filesToAdd]
            const newPreviews = [...currentPreviews, ...filesToAdd.map(file => URL.createObjectURL(file))]

            setFormData({
                ...formData,
                imageFiles: newFiles,
                previewUrls: newPreviews
            })
        }
    }

    const removeImage = (index) => {
        const newFiles = formData.imageFiles.filter((_, i) => i !== index)
        const newPreviews = formData.previewUrls.filter((_, i) => i !== index)
        URL.revokeObjectURL(formData.previewUrls[index])
        setFormData({ ...formData, imageFiles: newFiles, previewUrls: newPreviews })
    }

    const handleSaveWork = async (e) => {
        e.preventDefault()
        if (!formData.title) return alert('Title is required')
        
        try {
            setSaving(true)
            let imageUrls = []

            // Upload images
            if (formData.imageFiles.length > 0) {
                const uploadPromises = formData.imageFiles.map(async (file) => {
                    const fileExt = file.name.split('.').pop()
                    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
                    const filePath = `installer_portfolio/${installer.id}/${fileName}`

                    const { error: uploadError } = await supabase.storage
                        .from('Product') // Reusing Product bucket for now
                        .upload(filePath, file)

                    if (uploadError) throw uploadError

                    const { data: { publicUrl } } = supabase.storage.from('Product').getPublicUrl(filePath)
                    return publicUrl
                })
                imageUrls = await Promise.all(uploadPromises)
            }

            const { error } = await supabase
                .from('installer_works')
                .insert([{
                    installer_id: installer.id,
                    title: formData.title,
                    description: formData.description,
                    images: imageUrls
                }])

            if (error) throw error

            onNotify('Work added successfully!', 'success')
            setFormData({ title: '', description: '', images: [], imageFiles: [], previewUrls: [] })
            setShowAddForm(false)
            fetchWorks()
        } catch (err) {
            console.error('Error saving work:', err)
            onNotify('Failed to save work: ' + err.message, 'error')
        } finally {
            setSaving(false)
        }
    }

    const handleDeleteWork = async (workId) => {
        if (!confirm('Are you sure you want to delete this portfolio item?')) return
        try {
            const { error } = await supabase.from('installer_works').delete().eq('id', workId)
            if (error) throw error
            onNotify('Work deleted', 'success')
            fetchWorks()
        } catch (err) {
            onNotify('Failed to delete work', 'error')
        }
    }

    if (!isOpen) return null

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <div style={modalHeaderStyle}>
                    <div>
                        <h3 style={{ margin: 0 }}>Portfolio: {installer?.name}</h3>
                        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#666' }}>Manage project showcases for this installer</p>
                    </div>
                    <button onClick={onClose} style={closeButtonStyle}><X /></button>
                </div>

                <div style={modalBodyStyle}>
                    {!showAddForm && (
                        <button 
                            onClick={() => setShowAddForm(true)}
                            className="btn btn-primary"
                            style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Plus size={18} /> Add New Project Work
                        </button>
                    )}

                    {showAddForm && (
                        <form onSubmit={handleSaveWork} style={formStyle}>
                            <h4 style={{ marginTop: 0 }}>New Project Showcase</h4>
                            <input 
                                className="input-field" 
                                placeholder="Project Title (e.g. 5kW Residential Install)" 
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                style={{ marginBottom: '12px' }}
                                required
                            />
                            <textarea 
                                className="input-field" 
                                placeholder="Details about the work..." 
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                style={{ marginBottom: '16px', height: '80px' }}
                            />
                            
                            <label style={labelStyle}>Project Images (Up to 4)</label>
                            <div style={imageGridStyle}>
                                {formData.previewUrls.map((url, index) => (
                                    <div key={index} style={imagePreviewWrapperStyle}>
                                        <img 
                                            src={url} 
                                            alt="work" 
                                            style={imagePreviewStyle} 
                                            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                        />
                                        <button type="button" onClick={() => removeImage(index)} style={removeImageButtonStyle}>
                                            <X size={12} />
                                        </button>
                                    </div>
                                ))}
                                {formData.previewUrls.length < 4 && (
                                    <div style={uploadPlaceholderStyle}>
                                        <ImageIcon size={24} color="#aaa" />
                                        <span style={{ fontSize: '0.7rem' }}>Add Image</span>
                                        <input 
                                            type="file" 
                                            multiple 
                                            accept="image/*" 
                                            onChange={handleFileChange}
                                            style={fileInputStyle} 
                                        />
                                    </div>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                                <button type="button" onClick={() => setShowAddForm(false)} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
                                <button type="submit" disabled={saving} className="btn btn-primary" style={{ flex: 2 }}>
                                    {saving ? 'Saving...' : 'Save Project Showcase'}
                                </button>
                            </div>
                        </form>
                    )}

                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Existing Work ({works.length})</h4>
                        {loading ? <div className="spinner"></div> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {works.length === 0 ? <p style={{ color: '#888', textAlign: 'center', padding: '20px' }}>No portfolio items added yet.</p> : 
                                    works.map(work => (
                                        <div key={work.id} style={workCardStyle}>
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                {work.images?.[0] && (
                                                    <img 
                                                        src={work.images[0]} 
                                                        alt="work" 
                                                        style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} 
                                                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                                    />
                                                )}
                                                <div style={{ flex: 1 }}>
                                                    <h5 style={{ margin: '0 0 4px', fontSize: '1rem' }}>{work.title}</h5>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {work.description}
                                                    </p>
                                                </div>
                                                <button onClick={() => handleDeleteWork(work.id)} style={deleteButtonStyle}>
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center',
    alignItems: 'center', zIndex: 3000, padding: '20px'
}

const modalContentStyle = {
    background: 'white', borderRadius: '16px', width: '100%', maxWidth: '600px',
    maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column',
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
}

const modalHeaderStyle = {
    padding: '20px 24px', borderBottom: '1px solid #eee',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
}

const modalBodyStyle = {
    padding: '24px', overflowY: 'auto', flex: 1
}

const closeButtonStyle = { background: 'none', border: 'none', cursor: 'pointer', color: '#666' }

const formStyle = {
    background: '#f8f9fa', padding: '20px', borderRadius: '12px',
    border: '1px solid #eee', marginBottom: '20px'
}

const labelStyle = { display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#666', marginBottom: '8px' }

const imageGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }

const imagePreviewWrapperStyle = { position: 'relative', aspectRatio: '1/1', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }

const imagePreviewStyle = { width: '100%', height: '100%', objectFit: 'cover' }

const removeImageButtonStyle = {
    position: 'absolute', top: '2px', right: '2px', background: 'rgba(255,0,0,0.7)',
    color: 'white', border: 'none', borderRadius: '50%', width: '18px', height: '18px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
}

const uploadPlaceholderStyle = {
    aspectRatio: '1/1', border: '2px dashed #ccc', borderRadius: '8px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    color: '#888', cursor: 'pointer', position: 'relative'
}

const fileInputStyle = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }

const workCardStyle = {
    padding: '12px', border: '1px solid #eee', borderRadius: '10px', background: '#fff'
}

const deleteButtonStyle = {
    background: '#fff1f1', border: '1px solid #ffebeb', color: '#ff4d4d',
    padding: '8px', borderRadius: '6px', cursor: 'pointer'
}

export default InstallerWorksModal
