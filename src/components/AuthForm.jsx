import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { LogIn, UserPlus, Mail, Lock, User, Building, ArrowRight, ShieldCheck, X, Sun } from 'lucide-react'

const AuthForm = ({ onClose, onAuthComplete, isFullPage = false, isUpdatePassword = false }) => {
    const [isLogin, setIsLogin] = useState(!isUpdatePassword)
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [role, setRole] = useState('user') // 'user' or 'supplier'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })

    const handleAuth = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage({ type: '', text: '' })

        try {
            if (isUpdatePassword) {
                const { error } = await supabase.auth.updateUser({ password: password })
                if (error) throw error
                setMessage({ type: 'success', text: 'Password updated successfully! Logging you in...' })
                // The user is already logged in by the recovery link, so updating the password is authorized.
            } else if (isForgotPassword) {
                const { error } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: window.location.origin
                })
                if (error) throw error
                setMessage({ type: 'success', text: 'Password reset link sent! Check your email.' })
            } else if (isLogin) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password
                })
                if (error) throw error
                setMessage({ type: 'success', text: 'Welcome back! Redirecting...' })
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                            role: role
                        },
                        redirectTo: window.location.origin
                    }
                })
                if (error) throw error
                setMessage({ type: 'success', text: 'Account created! Please check your email for verification.' })
            }

            if (onAuthComplete && !isForgotPassword) {
                setTimeout(() => onAuthComplete(), 1500)
            }
        } catch (err) {
            setMessage({ type: 'error', text: err.message })
        } finally {
            setLoading(false)
        }
    }

    const containerStyle = isFullPage ? {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FFF9C4 0%, #FFFFFF 100%)',
        padding: '20px'
    } : {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 2000, padding: '20px'
    }

    const cardStyle = {
        background: 'white', width: '100%', maxWidth: '450px',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)', position: 'relative',
        border: isFullPage ? '1px solid #eee' : 'none'
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                {!isFullPage && !isUpdatePassword && (
                    <button onClick={onClose} style={{
                        position: 'absolute', top: '15px', right: '15px',
                        background: 'none', border: 'none', color: '#888', cursor: 'pointer'
                    }}>
                        <X size={24} />
                    </button>
                )}

                <div style={{ padding: '40px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        {/* Branding Header */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f0f0f0', paddingBottom: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <Sun size={32} color="var(--sun-orange)" fill="var(--sun-orange)" />
                                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--trust-blue)', margin: 0 }}>SunGate</h1>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Empowering Zambia with Renewable Energy</p>
                        </div>

                        {/* State Header */}
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--trust-blue)', marginBottom: '8px' }}>
                            {isUpdatePassword ? 'Set New Password' : (isForgotPassword ? 'Reset Password' : (isLogin ? 'Welcome Back' : 'Create Account'))}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            {isUpdatePassword ? 'Enter your new password below' : (isForgotPassword ? 'Enter your email to receive a reset link' : (isLogin ? 'Access your solar dashboard' : 'Join the SunGate Zambia network'))}
                        </p>
                    </div>

                    {!isLogin && !isForgotPassword && !isUpdatePassword && (
                        <div style={{
                            display: 'flex', background: '#f0f0f0',
                            borderRadius: '12px', padding: '4px', marginBottom: '24px'
                        }}>
                            <button
                                onClick={() => setRole('user')}
                                style={{
                                    flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                                    background: role === 'user' ? 'white' : 'transparent',
                                    color: role === 'user' ? 'var(--trust-blue)' : '#666',
                                    fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                                    boxShadow: role === 'user' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                                }}
                            >
                                <User size={14} style={{ marginRight: '6px' }} /> Customer
                            </button>
                            <button
                                onClick={() => setRole('supplier')}
                                style={{
                                    flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                                    background: role === 'supplier' ? 'white' : 'transparent',
                                    color: role === 'supplier' ? 'var(--trust-blue)' : '#666',
                                    fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                                    boxShadow: role === 'supplier' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                                }}
                            >
                                <Building size={14} style={{ marginRight: '6px' }} /> Supplier
                            </button>
                        </div>
                    )}

                    <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {!isLogin && !isForgotPassword && !isUpdatePassword && (
                            <div style={{ position: 'relative' }}>
                                <User style={{ position: 'absolute', left: '12px', top: '14px', color: '#888' }} size={18} />
                                <input
                                    type="text" placeholder="Full Name" required
                                    value={fullName} onChange={e => setFullName(e.target.value)}
                                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                        )}
                        {!isUpdatePassword && (
                            <div style={{ position: 'relative' }}>
                                <Mail style={{ position: 'absolute', left: '12px', top: '14px', color: '#888' }} size={18} />
                                <input
                                    type="email" placeholder="Email Address" required
                                    value={email} onChange={e => setEmail(e.target.value)}
                                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                        )}
                        {!isForgotPassword && (
                            <div style={{ position: 'relative' }}>
                                <Lock style={{ position: 'absolute', left: '12px', top: '14px', color: '#888' }} size={18} />
                                <input
                                    type="password" placeholder={isUpdatePassword ? "New Password" : "Password"} required
                                    value={password} onChange={e => setPassword(e.target.value)}
                                    style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>
                        )}

                        {isLogin && !isForgotPassword && !isUpdatePassword && (
                            <div style={{ textAlign: 'right' }}>
                                <button
                                    type="button"
                                    onClick={() => { setIsForgotPassword(true); setMessage({ type: '', text: '' }); }}
                                    style={{ background: 'none', border: 'none', color: 'var(--trust-blue)', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {message.text && (
                            <div style={{
                                padding: '12px', borderRadius: '8px', fontSize: '0.85rem',
                                background: message.type === 'error' ? '#fff0f0' : '#f0fff4',
                                color: message.type === 'error' ? '#d32f2f' : '#2e7d32',
                                border: `1px solid ${message.type === 'error' ? '#ffcdd2' : '#c8e6c9'}`
                            }}>
                                {message.text}
                            </div>
                        )}

                        <button
                            disabled={loading}
                            className="btn btn-primary"
                            style={{ padding: '14px', marginTop: '8px' }}
                        >
                            {loading ? <div className="spinner" style={{ width: '20px', height: '20px' }}></div> : (
                                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    {isUpdatePassword ? 'Update Password' : (isForgotPassword ? 'Send Reset Link' : (isLogin ? 'Login Now' : 'Create Account'))} <ArrowRight size={18} />
                                </span>
                            )}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: '#666' }}>
                        {isUpdatePassword ? (
                            // No back button needed for update password flow primarily, or maybe cancel to home?
                            // For now keeping it simple as it's a forced flow from email.
                            null
                        ) : isForgotPassword ? (
                            <button
                                onClick={() => { setIsForgotPassword(false); setIsLogin(true); setMessage({ type: '', text: '' }); }}
                                style={{
                                    background: 'none', border: 'none', color: 'var(--trust-blue)',
                                    fontWeight: 700, cursor: 'pointer'
                                }}
                            >
                                Back to Log In
                            </button>
                        ) : (
                            <>
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    style={{
                                        background: 'none', border: 'none', color: 'var(--trust-blue)',
                                        fontWeight: 700, cursor: 'pointer', marginLeft: '6px'
                                    }}
                                >
                                    {isLogin ? 'Sign Up' : 'Log In'}
                                </button>
                            </>
                        )}
                    </div>                </div>

                <div style={{
                    background: '#f8f9fa', padding: '16px', textAlign: 'center',
                    fontSize: '0.75rem', color: '#888', borderTop: '1px solid #eee'
                }}>
                    <ShieldCheck size={12} style={{ marginRight: '4px' }} />
                    Securely encrypted with Supabase Auth
                </div>
            </div>
        </div>
    )
}

export default AuthForm
