import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { LogIn, UserPlus, Mail, Lock, User, Building, ArrowRight, ShieldCheck, X, Sun, Award } from 'lucide-react'

const AuthForm = ({ onClose, onAuthComplete, isFullPage = false, isUpdatePassword = false, initialRole = 'user' }) => {
    const [isLogin, setIsLogin] = useState(!isUpdatePassword)
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    const [role, setRole] = useState(initialRole) // 'user', 'supplier', or 'installer'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', text: '' })

    const handleGoogleLogin = async () => {
        setLoading(true)
        setMessage({ type: '', text: '' })
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                    data: {
                      role: role,
                      full_name: 'Google User' // Fallback, Google usually provides this
                    },
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            })
            if (error) throw error
        } catch (err) {
            setMessage({ type: 'error', text: err.message })
            setLoading(false)
        }
    }

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

                    {!isForgotPassword && !isUpdatePassword && (
                        <>
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    fontWeight: '600',
                                    color: '#444',
                                    marginBottom: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62z" fill="#4285F4" />
                                    <path d="M9 18c2.43 0 4.47-.81 5.96-2.18l-2.91-2.26c-.81.54-1.85.86-3.05.86-2.34 0-4.33-1.58-5.04-3.7H.95v2.33A8.99 8.99 0 0 0 9 18z" fill="#34A853" />
                                    <path d="M3.96 10.72A5.41 5.41 0 0 1 3.65 9c0-.6.1-1.19.29-1.72V4.95H.95A8.99 8.99 0 0 0 .95 13.05l3.01-2.33z" fill="#FBBC05" />
                                    <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.96 8.96 0 0 0 9 0 8.99 8.99 0 0 0 .95 4.95l3.01 2.33c.71-2.12 2.7-3.7 5.04-3.7z" fill="#EA4335" />
                                </svg>
                                Continue with Google
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                <div style={{ flex: 1, height: '1px', background: '#eee' }}></div>
                                <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: '500' }}>OR</span>
                                <div style={{ flex: 1, height: '1px', background: '#eee' }}></div>
                            </div>
                        </>
                    )}

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
                                onClick={() => setRole('installer')}
                                style={{
                                    flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                                    background: role === 'installer' ? 'white' : 'transparent',
                                    color: role === 'installer' ? 'var(--trust-blue)' : '#666',
                                    fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                                    boxShadow: role === 'installer' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'
                                }}
                            >
                                <Award size={14} style={{ marginRight: '6px' }} /> Installer
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
                                    autoComplete="email"
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
                                    autoComplete={isLogin ? "current-password" : "new-password"}
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
