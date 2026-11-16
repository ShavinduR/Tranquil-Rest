import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/nunito-sans/wght.css'
// Sinhala fonts: only downloaded when Sinhala text is shown (unicode-range)
import '@fontsource-variable/noto-sans-sinhala/wght.css'
import '@fontsource-variable/noto-serif-sinhala/wght.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
