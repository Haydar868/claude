import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import { ClaudMenuProvider } from './context/ClaudMenu.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <ClaudMenuProvider>
    <App />
    </ClaudMenuProvider>
  </CartProvider>
  </BrowserRouter>
)
