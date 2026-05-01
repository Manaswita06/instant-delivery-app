import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import StorePage from "./pages/StorePage";
import CheckoutPage from "./pages/CheckoutPage"; // New Import

export default function App() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeFromCart = (id) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id] -= 1;
      else delete newCart[id];
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/store/:category?" element={
          <StorePage 
            cart={cart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            totalItems={totalItems} 
          />
        } />
        <Route path="/checkout" element={
          <CheckoutPage cart={cart} totalItems={totalItems} />
        } />
      </Routes>
    </Router>
  );
}