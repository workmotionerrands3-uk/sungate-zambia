import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { ShieldCheck, Plus, Trash2, Edit2, CheckCircle, XCircle, Search, Save, X, Briefcase } from 'lucide-react'
import InstallerWorksModal from './InstallerWorksModal'

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='133' viewBox='0 0 200 133'%3E%3Crect width='200' height='133' fill='%23f0f4f8'/%3E%3Ccircle cx='100' cy='55' r='22' fill='%23FFB300'/%3E%3Cpath d='M100 25v6M100 78v6M70 55h6M118 55h6M78 35l4 4M116 69l4 4M78 75l4-4M116 41l4-4' stroke='%23FFB300' stroke-width='3' stroke-linecap='round'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='10' fill='%23aaa' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const AdminDashboard = ({ profile }) => {
    const [activeTab, setActiveTab] = useState('installers')
    const [installers, setInstallers] = useState([])
    const [articles, setArticles] = useState([])
    const [suppliers, setSuppliers] = useState([])
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [inquiries, setInquiries] = useState([])
    const [subscribers, setSubscribers] = useState([])
    const [logs, setLogs] = useState([])
    const [analytics, setAnalytics] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [editingItem, setEditingItem] = useState(null)
    const [formData, setFormData] = useState({})
    const [pdfFile, setPdfFile] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(0)
    const [productImageFile, setProductImageFile] = useState(null)
    const [productImagePreview, setProductImagePreview] = useState(null)
    const [articleImageFile, setArticleImageFile] = useState(null)
    const [articleImagePreview, setArticleImagePreview] = useState(null)
    const [logoFile, setLogoFile] = useState(null)
    const [logoPreview, setLogoPreview] = useState(null)
    const [settings, setSettings] = useState({ zesco_rate: 1.35, support_phone: '0974300472', commission_rate: 5 })
    const [pendingPartners, setPendingPartners] = useState([])
    const [showWorksModal, setShowWorksModal] = useState(false)
    const [selectedInstallerForWorks, setSelectedInstallerForWorks] = useState(null)

    useEffect(() => {
        fetchData()
    }, [activeTab])

    const logAdminAction = async (action, details) => {
        try {
            const { error } = await supabase.from('admin_logs').insert([{
                admin_id: profile?.id,
                action,
                details,
                created_at: new Date().toISOString()
            }])
            if (error) console.warn('Logging error (possibly table missing):', error.message)
        } catch (err) {
            console.warn('Logging failed:', err)
        }
    }

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            if (activeTab === 'installers') {
                const { data, error } = await supabase.from('installers').select('*').order('id')
                if (error) throw error
                setInstallers(data || [])
            } else if (activeTab === 'articles') {
                const { data, error } = await supabase.from('articles').select('*').order('created_at', { ascending: false })
                if (error) throw error
                setArticles(data || [])
            } else if (activeTab === 'suppliers') {
                const { data, error } = await supabase.from('suppliers').select('*').order('created_at', { ascending: false })
                if (error) throw error
                setSuppliers(data || [])
            } else if (activeTab === 'products') {
                // Removing join temporarily to debug
                const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false })
                console.log('Products fetch:', { data, error })
                if (error) throw error
                setProducts(data || [])
            } else if (activeTab === 'users') {
                const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })
                if (error) throw error
                setUsers(data || [])
                if (error) throw error
                setUsers(data || [])
            } else if (activeTab === 'inquiries') {
                // Explicitly specify which foreign key relationship to use for profiles
                const { data, error } = await supabase
                    .from('inquiries')
                    .select('*, products(name, price), buyer:profiles!inquiries_buyer_id_fkey(full_name, email)')
                    .order('created_at', { ascending: false })

                if (error) throw error
                setInquiries(data || [])
            } else if (activeTab === 'subscribers') {
                const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('created_at', { ascending: false })
                if (error) throw error
                setSubscribers(data || [])
            } else if (activeTab === 'analytics') {

                // Fetch real analytics data
                const promises = [
                    supabase.from('profiles').select('id', { count: 'exact', head: true }),
                    supabase.from('installers').select('id', { count: 'exact', head: true }),
                    supabase.from('inquiries').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
                    supabase.from('inquiries').select('quote_price').eq('status', 'completed')
                ]

                const [usersRes, installersRes, pendingRes, salesRes] = await Promise.all(promises)

                if (usersRes.error) throw usersRes.error
                if (installersRes.error) throw installersRes.error
                if (pendingRes.error) throw pendingRes.error
                if (salesRes.error) throw salesRes.error

                const totalSalesVal = salesRes.data.reduce((sum, item) => sum + (item.quote_price || 0), 0)

                setAnalytics({
                    totalUsers: usersRes.count || 0,
                    activeInstallers: installersRes.count || 0,
                    totalSales: totalSalesVal > 0 ? `K${totalSalesVal.toLocaleString()}` : 'K0',
                    pendingOrders: pendingRes.count || 0
                })
            } else if (activeTab === 'approvals') {
                const installers = await supabase.from('installers').select('*').eq('certified', false)
                const suppliers = await supabase.from('suppliers').select('*').eq('is_verified', false)
                setPendingPartners([...(installers.data || []), ...(suppliers.data || [])])
            } else if (activeTab === 'logs') {
                const { data } = await supabase.from('admin_logs').select('*').order('created_at', { ascending: false }).limit(50)
                setLogs(data || [])
            } else if (activeTab === 'settings') {
                const { data } = await supabase.from('site_settings').select('*').maybeSingle()
                if (data) setSettings(data)
            }
        } catch (err) {
            console.error('Error fetching data:', err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const updateUserRole = async (userId, newRole) => {
        try {
            setLoading(true)
            const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId)
            if (error) throw error
            logAdminAction('update_user_role', `Updated user ${userId} to ${newRole}`)
            
            // Immediately update local state for better UX
            setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
            
            alert('User role updated!')
        } catch (err) {
            alert('Error updating role: ' + err.message)
        } finally {
            setLoading(false)
        }
    }

    const toggleUserStatus = async (user) => {
        try {
            setLoading(true)
            // Assuming is_active column exists (or we treat role='suspended' as inactive)
            const newRole = user.role === 'suspended' ? 'user' : 'suspended'
            const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', user.id)
            if (error) throw error
            logAdminAction('toggle_user_status', `Toggled status for user ${user.id}`)
            fetchData()
            alert(newRole === 'suspended' ? 'User suspended!' : 'User reactivated!')
        } catch (err) {
            alert('Error updating status: ' + err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleLogoChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image too large. Maximum size is 5MB.')
                return
            }
            setLogoFile(file)
            setLogoPreview(URL.createObjectURL(file))
        } else {
            alert('Please select an image file.')
        }
    }

    const handleSave = async () => {
        try {
            setLoading(true)
            let table = ''
            if (activeTab === 'installers') table = 'installers'
            else if (activeTab === 'articles') table = 'articles'
            else if (activeTab === 'suppliers') table = 'suppliers'
            else if (activeTab === 'products') table = 'products'
            else if (activeTab === 'inquiries') table = 'inquiries'
            else if (activeTab === 'approvals') {
                table = formData.company_name ? 'suppliers' : 'installers'
            }
            else return

            let imageUrl = formData.image || formData.logo || ''
            
            // Handle Generalized Image Upload
            const imageFile = productImageFile || articleImageFile || logoFile
            if (imageFile) {
                try {
                    const fileExt = imageFile.name.split('.').pop()
                    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
                    const folder = activeTab === 'articles' ? 'articles' : 'admin'
                    const filePath = `${folder}/${fileName}`

                    const { error: uploadError } = await supabase.storage
                        .from('Product')
                        .upload(filePath, imageFile)

                    if (uploadError) throw new Error(`Image upload failed: ${uploadError.message}`)

                    const { data: { publicUrl } } = supabase.storage
                        .from('Product')
                        .getPublicUrl(filePath)

                    imageUrl = publicUrl
                } catch (uploadErr) {
                    alert('Image Upload Error: ' + uploadErr.message + '. Please enter image URL manually.')
                    console.error('Image upload failed:', uploadErr)
                }
            }

            // Exclude joined fields and internal IDs for clean update/insert
            const { id, created_at, products, profiles, buyer, ...payload } = formData
            
            // Set the correct image/logo field
            if (table === 'installers') payload.logo = imageUrl
            else if (table === 'products' || table === 'articles' || table === 'suppliers') payload.image = imageUrl

            if (editingItem) {
                const { error } = await supabase.from(table).update(payload).eq('id', editingItem.id)
                if (error) throw error
                logAdminAction(`update_${table}`, `Updated ${table} item ${editingItem.id}`)
            } else {
                const { error } = await supabase.from(table).insert([payload])
                if (error) throw error
                logAdminAction(`insert_${table}`, `Added new ${table} item`)
            }

            setShowModal(false)
            setEditingItem(null)
            setFormData({})
            setPdfFile(null)
            setProductImageFile(null)
            setProductImagePreview(null)
            setArticleImageFile(null)
            setArticleImagePreview(null)
            setLogoFile(null)
            setLogoPreview(null)
            setUploadProgress(0)
            fetchData()
            alert('Saved successfully!')
        } catch (error) {
            console.error('Error saving:', error)
            alert('Error saving data: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleProductImageChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image too large. Maximum size is 5MB.')
                return
            }
            setProductImageFile(file)
            setProductImagePreview(URL.createObjectURL(file))
        } else {
            alert('Please select an image file.')
        }
    }

    const handleArticleImageChange = (e) => {
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Image too large. Maximum size is 5MB.')
                return
            }
            setArticleImageFile(file)
            setArticleImagePreview(URL.createObjectURL(file))
        } else {
            alert('Please select an image file.')
        }
    }

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this item?')) return
        try {
            let table = ''
            if (activeTab === 'installers') table = 'installers'
            else if (activeTab === 'articles') table = 'articles'
            else if (activeTab === 'suppliers') table = 'suppliers'
            else if (activeTab === 'products') table = 'products'
            else if (activeTab === 'inquiries') table = 'inquiries'
            else return
            const { error } = await supabase.from(table).delete().eq('id', id)
            if (error) throw error
            fetchData()
        } catch (error) {
            alert('Error deleting: ' + error.message)
        }
    }

    const handleUpdateSettings = async (updates) => {
        try {
            setLoading(true)
            const { error } = await supabase.from('site_settings').update(updates).eq('id', settings.id || 1)
            if (error) throw error
            setSettings({ ...settings, ...updates })
            logAdminAction('update_settings', 'Updated global site settings')
            alert('Settings updated!')
        } catch (err) {
            alert('Error updating settings: ' + err.message)
        } finally {
            setLoading(false)
        }
    }

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item)
            setFormData(item)
            setProductImagePreview(item.image || null)
            setArticleImagePreview(item.image || null)
            setLogoPreview(item.logo || item.image || null)
        } else {
            setEditingItem(null)
            // Initialize default values for new items
            const defaultData = {}
            if (activeTab === 'articles') {
                defaultData.date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            }
            setFormData(defaultData)
            setProductImagePreview(null)
            setArticleImagePreview(null)
            setLogoPreview(null)
        }
        setShowModal(true)
    }

    return (
        <section style={{ padding: '60px 0', background: '#f8f9fa', minHeight: '80vh' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <div>
                        <div className="badge badge-verified" style={{ marginBottom: '10px' }}>System Admin</div>
                        <h2>Admin Control Panel</h2>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '10px', overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch' }}>
                    <button
                        onClick={() => setActiveTab('installers')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'installers' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'installers' ? 700 : 400, color: activeTab === 'installers' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Manage Installers
                    </button>
                    <button
                        onClick={() => setActiveTab('articles')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'articles' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'articles' ? 700 : 400, color: activeTab === 'articles' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Manage Articles
                    </button>
                    <button
                        onClick={() => setActiveTab('suppliers')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'suppliers' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'suppliers' ? 700 : 400, color: activeTab === 'suppliers' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Manage Suppliers
                    </button>
                    <button
                        onClick={() => setActiveTab('products')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'products' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'products' ? 700 : 400, color: activeTab === 'products' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Marketplace (Products)
                    </button>
                    <button
                        onClick={() => setActiveTab('users')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'users' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'users' ? 700 : 400, color: activeTab === 'users' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Manage Users
                    </button>
                    <button
                        onClick={() => setActiveTab('subscribers')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'subscribers' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'subscribers' ? 700 : 400, color: activeTab === 'subscribers' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Subscribers
                    </button>
                    <button
                        onClick={() => setActiveTab('inquiries')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'inquiries' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'inquiries' ? 700 : 400, color: activeTab === 'inquiries' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Quote Requests
                    </button>
                    <button
                        onClick={() => setActiveTab('analytics')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'analytics' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'analytics' ? 700 : 400, color: activeTab === 'analytics' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Analytics
                    </button>
                    <button
                        onClick={() => setActiveTab('approvals')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'approvals' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'approvals' ? 700 : 400, color: activeTab === 'approvals' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Approvals
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'settings' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'settings' ? 700 : 400, color: activeTab === 'settings' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Settings
                    </button>
                    <button
                        onClick={() => setActiveTab('logs')}
                        style={{ background: 'none', border: 'none', padding: '10px 0', borderBottom: activeTab === 'logs' ? '3px solid var(--sun-orange)' : 'none', fontWeight: activeTab === 'logs' ? 700 : 400, color: activeTab === 'logs' ? 'var(--trust-blue)' : '#666' }}
                    >
                        Logs
                    </button>
                </div>

                {error && (
                    <div style={{ padding: '20px', background: '#ffebee', border: '1px solid #ffcdd2', color: 'red', borderRadius: '8px', marginBottom: '20px' }}>
                        <div style={{ fontWeight: 800, marginBottom: '8px' }}>DATABASE ERROR (Tab: {activeTab})</div>
                        <div style={{ fontContent: 'monospace', fontSize: '0.9rem', background: 'rgba(255,255,255,0.5)', padding: '10px', borderRadius: '4px' }}>
                            {typeof error === 'object' ? JSON.stringify(error, null, 2) : error}
                        </div>
                        <div style={{ marginTop: '10px', fontSize: '0.8rem' }}>
                            If you see "policy violation", please ask the developer to run the database migration scripts.
                        </div>
                    </div>
                )}

                {loading && <div className="spinner"></div>}

                {!loading && activeTab === 'installers' && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <button className="btn btn-primary" onClick={() => openModal()}><Plus size={18} /> Add Installer</button>
                        </div>
                        <div className="grid grid-3">
                            {installers.map(installer => (
                                <div key={installer.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{installer.name}</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '16px' }}>{installer.location}</p>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => openModal(installer)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd', background: 'white' }} title="Edit Installer"><Edit2 size={16} /></button>
                                        <button 
                                            onClick={() => {
                                                setSelectedInstallerForWorks(installer)
                                                setShowWorksModal(true)
                                            }} 
                                            style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e3f2fd', background: '#e3f2fd', color: '#1976d2' }} 
                                            title="Manage Portfolio"
                                        >
                                            <Briefcase size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(installer.id)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #fee', background: '#ffebee', color: 'red' }} title="Delete"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {!loading && activeTab === 'articles' && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <button className="btn btn-primary" onClick={() => openModal()}><Plus size={18} /> New Article</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {articles.map(article => (
                                <div key={article.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <img 
                                        src={article.image || FALLBACK_IMAGE} 
                                        style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} 
                                        alt={article.title}
                                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{article.title}</h3>
                                        <p style={{ color: '#888', fontSize: '0.8rem' }}>{article.category} • {article.author}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => openModal(article)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd', background: 'white' }}><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(article.id)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #fee', background: '#ffebee', color: 'red' }}><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {!loading && activeTab === 'suppliers' && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <button className="btn btn-primary" onClick={() => openModal()}><Plus size={18} /> Add Supplier</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {suppliers.map(supplier => (
                                <div key={supplier.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <ShieldCheck size={32} color={supplier.is_verified ? 'var(--trust-blue)' : '#ccc'} />
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{supplier.company_name}</h3>
                                        <p style={{ color: '#888', fontSize: '0.8rem' }}>TPIN: {supplier.zra_tpin} • Phone: {supplier.phone}</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => openModal(supplier)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd', background: 'white' }}><Edit2 size={16} /></button>
                                        <button onClick={() => handleDelete(supplier.id)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #fee', background: '#ffebee', color: 'red' }}><Trash2 size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {!loading && activeTab === 'products' && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                            <button className="btn btn-primary" onClick={() => openModal()}><Plus size={18} /> Add Product</button>
                        </div>
                        <div className="grid grid-3">
                            {products.map(product => (
                                <div key={product.id} style={{ background: 'white', padding: '15px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                                    <img 
                                        src={product.image || FALLBACK_IMAGE} 
                                        alt={product.name} 
                                        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }} 
                                        onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                                    />
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{product.name}</h3>
                                    <p style={{ fontWeight: 'bold', color: 'var(--sun-orange)', marginBottom: '4px' }}>{product.price}</p>
                                    <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '12px' }}>{product.category}</p>
                                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                                        <span style={{ fontSize: '0.8rem', padding: '4px 8px', borderRadius: '4px', background: product.verified ? '#e8f5e9' : '#fafafa', color: product.verified ? 'green' : '#999' }}>
                                            {product.verified ? 'Verified' : 'Unverified'}
                                        </span>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button onClick={() => openModal(product)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #ddd', background: 'white' }}><Edit2 size={14} /></button>
                                            <button onClick={() => handleDelete(product.id)} style={{ padding: '6px', borderRadius: '6px', border: '1px solid #fee', background: '#ffebee', color: 'red' }}><Trash2 size={14} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {!loading && activeTab === 'inquiries' && (
                    <>
                        <div className="grid grid-2 admin-inquiries-grid">
                            {inquiries.map(inquiry => {
                                // Parser for our "No-SQL" packed message
                                const parseMessage = (msg) => {
                                    if (!msg || !msg.includes('QTY:')) return { qty: '1', notes: msg };
                                    const parts = msg.split('|').reduce((acc, part) => {
                                        const [key, val] = part.split(':').map(s => s.trim());
                                        if (key && val) acc[key] = val;
                                        return acc;
                                    }, {});
                                    return { qty: parts['QTY'] || '1', notes: parts['NOTES'] || '' };
                                }
                                const details = parseMessage(inquiry.message);

                                return (
                                    <div key={inquiry.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', borderLeft: `4px solid ${inquiry.status === 'pending' ? 'orange' : 'green'}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                            <h3 style={{ fontSize: '1.1rem' }}>{inquiry.products?.name || 'Unknown Product'}</h3>
                                            <span className={`badge ${inquiry.status === 'pending' ? '' : 'badge-verified'}`}>{inquiry.status.toUpperCase()}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '16px' }}>
                                            <p><strong>Customer:</strong> {inquiry.buyer?.full_name || 'Guest'} ({inquiry.buyer?.email})</p>
                                            <p><strong>Date:</strong> {new Date(inquiry.created_at).toLocaleDateString()}</p>
                                            <p><strong>Qty:</strong> {details.qty} (Extracted)</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button onClick={() => openModal(inquiry)} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Manage Quote</button>
                                            <button 
                                                onClick={() => handleDelete(inquiry.id)} 
                                                style={{ 
                                                    padding: '8px', 
                                                    borderRadius: '6px', 
                                                    border: '1px solid #fee', 
                                                    background: '#ffebee', 
                                                    color: 'red',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer'
                                                }}
                                                title="Delete Inquiry"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )}

                {!loading && activeTab === 'users' && (
                    <>
                        <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', WebkitOverflowScrolling: 'touch' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                                <thead style={{ background: '#f8f9fa' }}>
                                    <tr>
                                        <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', color: '#444' }}>User ID</th>
                                        <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', color: '#444' }}>Role</th>
                                        <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', color: '#444' }}>Created At</th>
                                        <th style={{ padding: '16px', textAlign: 'right', fontWeight: 'bold', color: '#444' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '16px', fontSize: '0.9rem', color: '#666' }}>{user.id}</td>
                                            <td style={{ padding: '16px' }}>
                                                <select 
                                                    value={user.role} 
                                                    onChange={(e) => updateUserRole(user.id, e.target.value)}
                                                    style={{ 
                                                        padding: '4px 8px', 
                                                        borderRadius: '4px', 
                                                        background: user.role === 'admin' ? '#e3f2fd' : user.role === 'suspended' ? '#ffebee' : '#f5f5f5', 
                                                        color: user.role === 'admin' ? '#1976d2' : user.role === 'suspended' ? 'red' : '#666', 
                                                        fontSize: '0.8rem', 
                                                        fontWeight: 500,
                                                        border: '1px solid #ddd'
                                                    }}
                                                >
                                                    <option value="user">User</option>
                                                    <option value="supplier">Supplier</option>
                                                    <option value="installer">Installer</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="suspended">Suspended</option>
                                                </select>
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '0.9rem', color: '#666' }}>{new Date(user.created_at).toLocaleDateString()}</td>
                                            <td style={{ padding: '16px', textAlign: 'right' }}>
                                                <button 
                                                    onClick={() => toggleUserStatus(user)}
                                                    style={{ 
                                                        background: 'none', 
                                                        border: 'none', 
                                                        color: user.role === 'suspended' ? 'green' : '#ff4d4d', 
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {user.role === 'suspended' ? 'Activate' : 'Suspend'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {!loading && activeTab === 'subscribers' && (
                    <div style={{ background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
                        <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>Newsletter Subscribers ({subscribers.length})</h3>
                            <button 
                                className="btn btn-secondary" 
                                onClick={() => {
                                    const csv = subscribers.map(s => s.email).join('\n');
                                    const blob = new Blob([csv], { type: 'text/csv' });
                                    const url = window.URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.setAttribute('hidden', '');
                                    a.setAttribute('href', url);
                                    a.setAttribute('download', 'subscribers.csv');
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                }}
                                style={{ fontSize: '0.8rem' }}
                            >
                                Export CSV
                            </button>
                        </div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead style={{ background: '#f8f9fa' }}>
                                <tr>
                                    <th style={{ textAlign: 'left', padding: '15px', borderBottom: '1px solid #eee' }}>Email Address</th>
                                    <th style={{ textAlign: 'left', padding: '15px', borderBottom: '1px solid #eee' }}>Joined Date</th>
                                    <th style={{ textAlign: 'right', padding: '15px', borderBottom: '1px solid #eee' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subscribers.map(sub => (
                                    <tr key={sub.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '15px' }}>{sub.email}</td>
                                        <td style={{ padding: '15px', color: '#666' }}>{new Date(sub.created_at).toLocaleDateString()}</td>
                                        <td style={{ padding: '15px', textAlign: 'right' }}>
                                            <button 
                                                onClick={async () => {
                                                    if(confirm('Delete subscriber?')) {
                                                        const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', sub.id);
                                                        if (!error) fetchData();
                                                    }
                                                }}
                                                style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {subscribers.length === 0 && (
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: 'center', padding: '40px', color: '#999' }}>No subscribers yet</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && activeTab === 'analytics' && analytics && (
                    <>
                        <div className="grid grid-2 admin-analytics-grid">
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e3f2fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Search size={24} color="#1976d2" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '4px' }}>{analytics.totalUsers}</h3>
                                    <p style={{ color: '#666' }}>Total Users</p>
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <ShieldCheck size={24} color={'var(--sun-orange)'} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '4px' }}>{analytics.activeInstallers}</h3>
                                    <p style={{ color: '#666' }}>Active Installers</p>
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CheckCircle size={24} color="#2e7d32" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '4px' }}>{analytics.totalSales}</h3>
                                    <p style={{ color: '#666' }}>Total Sales (Est)</p>
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#fce4ec', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Search size={24} color="#c2185b" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '4px' }}>{analytics.pendingOrders}</h3>
                                    <p style={{ color: '#666' }}>Pending Inquiries</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-2" style={{ marginTop: '30px' }}>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                                <h4 style={{ marginBottom: '20px' }}>Demand by Category</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Kits', 'Panels', 'Batteries', 'Inverters', 'Accessories'].map(cat => {
                                        const count = inquiries.filter(iq => iq.products?.category === cat).length
                                        const total = inquiries.length || 1
                                        const percent = Math.round((count / total) * 100)
                                        return (
                                            <div key={cat}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                                                    <span>{cat}</span>
                                                    <span>{percent}%</span>
                                                </div>
                                                <div style={{ width: '100%', height: '8px', background: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
                                                    <div style={{ width: `${percent}%`, height: '100%', background: 'var(--sun-orange)' }}></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                                <h4 style={{ marginBottom: '20px' }}>System Health</h4>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>
                                    <p>• Database Connection: <span style={{ color: 'green' }}>ACTIVE</span></p>
                                    <p>• Storage Quota: <span style={{ color: 'green' }}>OK</span></p>
                                    <p>• Auth Service: <span style={{ color: 'green' }}>OK</span></p>
                                    <p style={{ marginTop: '10px', fontSize: '0.75rem', fontStyle: 'italic' }}>Last scan: {new Date().toLocaleTimeString()}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {!loading && activeTab === 'approvals' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {pendingPartners.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '50px', background: 'white', borderRadius: '12px' }}>
                                <p>No pending partner verifications.</p>
                            </div>
                        ) : (
                            pendingPartners.map(p => (
                                <div key={p.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem' }}>{p.name || p.company_name}</h3>
                                        <p style={{ color: '#666', fontSize: '0.85rem' }}>Type: {p.company_name ? 'Supplier' : 'Installer'} • TPIN/ID: {p.zra_tpin || 'N/A'}</p>
                                    </div>
                                    <button onClick={() => openModal(p)} className="btn btn-primary">Review & Verify</button>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {!loading && activeTab === 'settings' && (
                    <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ marginBottom: '30px', color: 'var(--trust-blue)' }}>Global Site Settings</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>ZESCO Export Rate (K per kWh)</label>
                                <input 
                                    type="number" step="0.01" 
                                    value={settings.zesco_rate} 
                                    onChange={e => setSettings({ ...settings, zesco_rate: parseFloat(e.target.value) })}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} 
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>Admin Support Phone</label>
                                <input 
                                    type="text" 
                                    value={settings.support_phone} 
                                    onChange={e => setSettings({ ...settings, support_phone: e.target.value })}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} 
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '8px' }}>Marketplace Commission (%)</label>
                                <input 
                                    type="number" 
                                    value={settings.commission_rate} 
                                    onChange={e => setSettings({ ...settings, commission_rate: parseFloat(e.target.value) })}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} 
                                />
                            </div>
                            <button className="btn btn-primary" onClick={() => handleUpdateSettings(settings)} style={{ marginTop: '20px' }}>Save All Settings</button>
                        </div>
                    </div>
                )}

                {!loading && activeTab === 'logs' && (
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', WebkitOverflowScrolling: 'touch' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead style={{ background: '#f8f9fa' }}>
                                <tr>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Time</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Action</th>
                                    <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.length === 0 ? (
                                    <tr><td colSpan="3" style={{ padding: '30px', textAlign: 'center', color: '#888' }}>No logs yet.</td></tr>
                                ) : (
                                    logs.map((log, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                            <td style={{ padding: '16px', fontSize: '0.85rem', color: '#888' }}>{new Date(log.created_at).toLocaleString()}</td>
                                            <td style={{ padding: '16px', fontSize: '0.9rem', fontWeight: 600 }}>{log.action.replace(/_/g, ' ').toUpperCase()}</td>
                                            <td style={{ padding: '16px', fontSize: '0.9rem', color: '#666' }}>{log.details}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* MODAL */}
                {showModal && (
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
                        <div style={{ background: 'white', padding: '30px', borderRadius: '16px', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <h3>{editingItem ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}</h3>
                                <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none' }}><X /></button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {activeTab === 'installers' || (activeTab === 'approvals' && !formData.company_name) ? (
                                    <>
                                        <input className="input-field" placeholder="Installer Name" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                                        <input className="input-field" placeholder="Location" value={formData.location || ''} onChange={e => setFormData({ ...formData, location: e.target.value })} style={inputStyle} />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                            <input className="input-field" type="number" step="0.1" placeholder="Rating (0-5)" value={formData.rating || ''} onChange={e => setFormData({ ...formData, rating: parseFloat(e.target.value) })} style={inputStyle} />
                                            <input className="input-field" type="number" placeholder="Projects Completed" value={formData.projects || ''} onChange={e => setFormData({ ...formData, projects: parseInt(e.target.value) })} style={inputStyle} />
                                        </div>
                                        
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#555' }}>Installer Logo / Profile Image</label>
                                            <div style={{
                                                border: '2px dashed #ddd',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                background: logoPreview ? '#f8f9fa' : 'white',
                                                marginBottom: '12px'
                                            }}>
                                                {logoPreview ? (
                                                    <div style={{ position: 'relative', width: '100%', height: '120px' }}>
                                                        <img
                                                            src={logoPreview}
                                                            alt="Preview"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setLogoFile(null)
                                                                setLogoPreview(null)
                                                                setFormData({ ...formData, logo: '' })
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '-10px',
                                                                right: '-10px',
                                                                background: '#ff4d4d',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '50%',
                                                                width: '24px',
                                                                height: '24px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ fontSize: '1.5rem' }}>📷</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>Click to upload logo</div>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleLogoChange}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                                />
                                            </div>
                                            <input className="input-field" placeholder="Or paste Image URL (Logo)" value={formData.logo || ''} onChange={e => setFormData({ ...formData, logo: e.target.value })} style={inputStyle} />
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <input type="checkbox" checked={formData.certified || false} onChange={e => setFormData({ ...formData, certified: e.target.checked })} id="cert" />
                                            <label htmlFor="cert">Certified Installer</label>
                                        </div>
                                        <textarea className="input-field" placeholder="Services (comma separated)" value={formData.services ? (Array.isArray(formData.services) ? formData.services.join(', ') : formData.services) : ''} onChange={e => setFormData({ ...formData, services: e.target.value.split(',').map(s => s.trim()) })} style={{ ...inputStyle, height: '80px' }} />
                                    </>
                                ) : activeTab === 'articles' ? (
                                    <>
                                        <input className="input-field" placeholder="Article Title" value={formData.title || ''} onChange={e => setFormData({ ...formData, title: e.target.value })} style={inputStyle} />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                            <input className="input-field" placeholder="Category" value={formData.category || ''} onChange={e => setFormData({ ...formData, category: e.target.value })} style={inputStyle} />
                                            <input className="input-field" placeholder="Date (e.g. Jan 30, 2026)" value={formData.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} onChange={e => setFormData({ ...formData, date: e.target.value })} style={inputStyle} />
                                        </div>
                                        <input className="input-field" placeholder="Author" value={formData.author || ''} onChange={e => setFormData({ ...formData, author: e.target.value })} style={inputStyle} />

                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#555' }}>Article Image</label>
                                            <div style={{
                                                border: '2px dashed #ddd',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                background: articleImagePreview ? '#f8f9fa' : 'white',
                                                marginBottom: '12px'
                                            }}>
                                                {articleImagePreview ? (
                                                    <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                                                        <img
                                                            src={articleImagePreview}
                                                            alt="Preview"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setArticleImageFile(null)
                                                                setArticleImagePreview(null)
                                                                setFormData({ ...formData, image: '' })
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '-10px',
                                                                right: '-10px',
                                                                background: '#ff4d4d',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '50%',
                                                                width: '24px',
                                                                height: '24px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ fontSize: '2rem' }}>📷</div>
                                                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Click to upload article image</div>
                                                        <div style={{ fontSize: '0.75rem', color: '#999' }}>PNG, JPG or WebP (Max 5MB)</div>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleArticleImageChange}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                                />
                                            </div>
                                            <input
                                                className="input-field"
                                                placeholder="Or paste Image URL"
                                                value={formData.image || ''}
                                                onChange={e => {
                                                    setFormData({ ...formData, image: e.target.value })
                                                    if (e.target.value && !articleImageFile) {
                                                        setArticleImagePreview(e.target.value)
                                                    }
                                                }}
                                                style={inputStyle}
                                            />
                                        </div>

                                        <textarea className="input-field" placeholder="Excerpt (Short summary)" value={formData.excerpt || ''} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} style={{ ...inputStyle, height: '80px' }} />
                                        <textarea className="input-field" placeholder="Full Content" value={formData.content || ''} onChange={e => setFormData({ ...formData, content: e.target.value })} style={{ ...inputStyle, height: '200px' }} />
                                    </>
                                ) : activeTab === 'suppliers' || (activeTab === 'approvals' && formData.company_name) ? (
                                    <>
                                        <input className="input-field" placeholder="Company Name" value={formData.company_name || ''} onChange={e => setFormData({ ...formData, company_name: e.target.value })} style={inputStyle} />
                                        <input className="input-field" placeholder="ZRA TPIN" value={formData.zra_tpin || ''} onChange={e => setFormData({ ...formData, zra_tpin: e.target.value })} style={inputStyle} />
                                        <input className="input-field" placeholder="Phone" value={formData.phone || ''} onChange={e => setFormData({ ...formData, phone: e.target.value })} style={inputStyle} />
                                        <textarea className="input-field" placeholder="Address" value={formData.address || ''} onChange={e => setFormData({ ...formData, address: e.target.value })} style={{ ...inputStyle, height: '80px' }} />
                                        
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#555' }}>Company Logo / Image</label>
                                            <div style={{
                                                border: '2px dashed #ddd',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                background: logoPreview ? '#f8f9fa' : 'white',
                                                marginBottom: '12px'
                                            }}>
                                                {logoPreview ? (
                                                    <div style={{ position: 'relative', width: '100%', height: '120px' }}>
                                                        <img
                                                            src={logoPreview}
                                                            alt="Preview"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setLogoFile(null)
                                                                setLogoPreview(null)
                                                                setFormData({ ...formData, image: '' })
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '-10px',
                                                                right: '-10px',
                                                                background: '#ff4d4d',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '50%',
                                                                width: '24px',
                                                                height: '24px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ fontSize: '1.5rem' }}>📷</div>
                                                        <div style={{ fontSize: '0.85rem', color: '#666' }}>Click to upload logo</div>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleLogoChange}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                                />
                                            </div>
                                            <input className="input-field" placeholder="Or paste Image URL" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} style={inputStyle} />
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                            <input type="checkbox" checked={formData.is_verified || false} onChange={e => setFormData({ ...formData, is_verified: e.target.checked })} id="verify" />
                                            <label htmlFor="verify">Verified Supplier</label>
                                        </div>
                                    </>
                                ) : activeTab === 'inquiries' ? (
                                    <>
                                        {/* Helper logic to parse safe data from message string */}
                                        {(() => {
                                            const parseMessage = (msg) => {
                                                if (!msg || !msg.includes('QTY:')) return { qty: '1', notes: msg, phone: 'N/A' };
                                                const parts = msg.split('|').reduce((acc, part) => {
                                                    const [key, val] = part.split(':').map(s => s.trim());
                                                    if (key && val) acc[key] = val;
                                                    return acc;
                                                }, {});
                                                return { qty: parts['QTY'] || '1', notes: parts['NOTES'] || '', phone: parts['PHONE'] || 'N/A' };
                                            }
                                            const details = parseMessage(formData.message);

                                            return (
                                                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                                                    <h4 style={{ marginBottom: '8px', color: '#555' }}>Customer Request</h4>
                                                    <p><strong>Product:</strong> {formData.products?.name || 'N/A'}</p>
                                                    <p><strong>Quantity:</strong> {details.qty}</p>
                                                    <p><strong>Notes:</strong> {details.notes}</p>
                                                    <p><strong>Customer:</strong> {formData.buyer?.full_name || 'Anonymous'} ({formData.buyer?.email || 'No Email'})</p>
                                                    <p><strong>Customer Phone:</strong> {details.phone}</p>
                                                </div>
                                            )
                                        })()}

                                        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

                                        <h4 style={{ marginBottom: '12px' }}>Quote Status</h4>
                                        <select
                                            value={formData.status || 'pending'}
                                            onChange={e => setFormData({ ...formData, status: e.target.value })}
                                            style={{ ...inputStyle, marginBottom: '20px' }}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="quoted">Quoted (Response Sent)</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>

                                        <h4 style={{ marginBottom: '12px' }}>Upload Quote Document (PDF)</h4>
                                        <div style={{ marginBottom: '20px' }}>
                                            <input
                                                type="file"
                                                accept=".pdf"
                                                onChange={(e) => {
                                                    const file = e.target.files[0]
                                                    if (file && file.type === 'application/pdf') {
                                                        if (file.size > 5 * 1024 * 1024) {
                                                            alert('File too large. Maximum size is 5MB.')
                                                            return
                                                        }
                                                        setPdfFile(file)
                                                    } else {
                                                        alert('Please select a PDF file.')
                                                    }
                                                }}
                                                style={{ ...inputStyle, padding: '8px' }}
                                            />
                                            {pdfFile && (
                                                <div style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--zambia-green)' }}>
                                                    ✓ Selected: {pdfFile.name} ({(pdfFile.size / 1024).toFixed(1)} KB)
                                                </div>
                                            )}
                                            {formData.quote_pdf_url && (
                                                <div style={{ marginTop: '8px', fontSize: '0.85rem', color: '#666' }}>
                                                    Current PDF: <a href={formData.quote_pdf_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--trust-blue)' }}>View</a>
                                                </div>
                                            )}
                                            {uploadProgress > 0 && uploadProgress < 100 && (
                                                <div style={{ marginTop: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden', height: '8px' }}>
                                                    <div style={{ background: 'var(--zambia-green)', height: '100%', width: `${uploadProgress}%`, transition: 'width 0.3s' }}></div>
                                                </div>
                                            )}
                                        </div>

                                        <h4 style={{ marginBottom: '12px' }}>Admin Response</h4>
                                        <input className="input-field" placeholder="Quoted Price (e.g. K15,500)" value={formData.quote_price || ''} onChange={e => setFormData({ ...formData, quote_price: e.target.value })} style={inputStyle} />
                                        <textarea className="input-field" placeholder="Message to Customer" value={formData.admin_response || ''} onChange={e => setFormData({ ...formData, admin_response: e.target.value })} style={{ ...inputStyle, height: '100px' }} />
                                    </>
                                ) : (
                                    <>
                                        <input className="input-field" placeholder="Product Name" value={formData.name || ''} onChange={e => setFormData({ ...formData, name: e.target.value })} style={inputStyle} />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                            <input className="input-field" placeholder="Price (e.g. K15,000)" value={formData.price || ''} onChange={e => setFormData({ ...formData, price: e.target.value })} style={inputStyle} />
                                            <input className="input-field" placeholder="Category" value={formData.category || ''} onChange={e => setFormData({ ...formData, category: e.target.value })} style={inputStyle} />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: '#555' }}>Product Image</label>
                                            <div style={{
                                                border: '2px dashed #ddd',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                background: productImagePreview ? '#f8f9fa' : 'white',
                                                marginBottom: '12px'
                                            }}>
                                                {productImagePreview ? (
                                                    <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                                                        <img
                                                            src={productImagePreview}
                                                            alt="Preview"
                                                            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setProductImageFile(null)
                                                                setProductImagePreview(null)
                                                                setFormData({ ...formData, image: '' })
                                                            }}
                                                            style={{
                                                                position: 'absolute',
                                                                top: '-10px',
                                                                right: '-10px',
                                                                background: '#ff4d4d',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: '50%',
                                                                width: '24px',
                                                                height: '24px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                cursor: 'pointer'
                                                            }}
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ fontSize: '2rem' }}>📷</div>
                                                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Click to upload product image</div>
                                                        <div style={{ fontSize: '0.75rem', color: '#999' }}>PNG, JPG or WebP (Max 5MB)</div>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleProductImageChange}
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                                                />
                                            </div>
                                            <input
                                                className="input-field"
                                                placeholder="Or paste Image URL"
                                                value={formData.image || ''}
                                                onChange={e => {
                                                    setFormData({ ...formData, image: e.target.value })
                                                    if (e.target.value && !productImageFile) {
                                                        setProductImagePreview(e.target.value)
                                                    }
                                                }}
                                                style={inputStyle}
                                            />
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                            <input type="checkbox" checked={formData.verified || false} onChange={e => setFormData({ ...formData, verified: e.target.checked })} id="prod-ver" />
                                            <label htmlFor="prod-ver">Verified Product</label>
                                        </div>
                                    </>
                                )}
                                <button className="btn btn-primary" onClick={handleSave} style={{ marginTop: '16px' }}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                )}
                <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #ddd', color: '#888', fontSize: '0.8rem' }}>
                    <h4>Admin Debug Info</h4>
                    <pre>{JSON.stringify({
                        role: profile?.role,
                        userId: profile?.id,
                        activeTab,
                        dataCount: activeTab === 'products' ? products.length : activeTab === 'users' ? users.length : 'N/A',
                        lastError: error
                    }, null, 2)}</pre>
                </div>
                {/* INSTALLER WORKS MODAL */}
                <InstallerWorksModal 
                    isOpen={showWorksModal}
                    onClose={() => setShowWorksModal(false)}
                    installer={selectedInstallerForWorks}
                    onNotify={(msg, type) => alert(msg)} // Simple alert for admin dashboard notifications
                />
            </div>
        </section >
    )
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem'
}

export default AdminDashboard
