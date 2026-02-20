import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root')

if (rootElement) {
    rootElement.innerHTML = '<div style="color: #666; padding: 20px; font-family: sans-serif;">SunGate Loading... (If this stays, React failed to boot)</div>'
}

try {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    )
} catch (e) {
    if (rootElement) {
        rootElement.innerHTML = `
            <div style="color: white; background: #d32f2f; padding: 24px; border-radius: 12px; font-family: sans-serif; margin: 20px;">
                <h1 style="margin-top: 0;">React Render Error</h1>
                <p>The application crashed during startup:</p>
                <pre style="background: rgba(0,0,0,0.1); padding: 16px; border-radius: 8px; overflow: auto;">${e.stack || e.message}</pre>
                <p>Please check the terminal for build errors or dev console for more details.</p>
            </div>
        `;
    }
    console.error("Bootstrap Error:", e)
}
