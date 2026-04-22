import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import StorePage from "./pages/StorePage";

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
        {/* The :category? means the category is optional */}
        <Route path="/store/:category?" element={
          <StorePage 
            cart={cart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            totalItems={totalItems} 
          />
        } />
      </Routes>
    </Router>
  );
}