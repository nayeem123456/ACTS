import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import './index.css'

// Apply theme before first paint to prevent flash
const savedTheme = (() => {
  try { return localStorage.getItem('acts-theme') || 'dark' } catch { return 'dark' }
})()
document.documentElement.setAttribute('data-theme', savedTheme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
