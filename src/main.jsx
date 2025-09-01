import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'primereact/resources/themes/lara-light-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';                // Core
import 'primeicons/primeicons.css';      

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
