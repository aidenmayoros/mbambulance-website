import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppErrorBoundary from './components/AppErrorBoundary.jsx'

const rootElement = document.getElementById('root')

function showBootError(message) {
  if (!rootElement) {
    return
  }

  rootElement.innerHTML = `
    <div style="min-height: 100vh; background: #020617; color: #f8fafc; padding: 24px; font-family: sans-serif;">
      <div style="max-width: 720px; margin: 0 auto; border: 1px solid rgba(248,113,113,.35); background: #0f172a; border-radius: 16px; padding: 24px;">
        <p style="margin: 0 0 12px; font-size: 12px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: #fca5a5;">
          Boot Error
        </p>
        <h1 style="margin: 0 0 16px; font-size: 28px; line-height: 1.2;">
          The app failed before React finished mounting.
        </h1>
        <pre style="white-space: pre-wrap; overflow-wrap: anywhere; margin: 0; font-size: 14px; line-height: 1.7; color: #fecaca;">${message}</pre>
      </div>
    </div>
  `
}

window.addEventListener('error', (event) => {
  showBootError(event.error?.message || event.message || 'Unknown error')
})

window.addEventListener('unhandledrejection', (event) => {
  const reason =
    typeof event.reason === 'string'
      ? event.reason
      : event.reason?.message || 'Unknown promise rejection'

  showBootError(reason)
})

try {
  createRoot(rootElement).render(
    <StrictMode>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </StrictMode>,
  )
} catch (error) {
  showBootError(error?.message || 'Unknown render error')
}
