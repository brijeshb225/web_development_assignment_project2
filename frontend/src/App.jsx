import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import EquipmentList from "./pages/EquipmentList.jsx";
import EquipmentDetails from "./pages/EquipmentDetails.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addToCart = (equipment) => {
    setCart(prev => {
      const existingItem = prev.find(item => item._id === equipment._id);
      let newCart;
      if (existingItem) {
        newCart = prev.map(item =>
          item._id === equipment._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prev, { ...equipment, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (equipmentId) => {
    setCart(prev => {
      const newCart = prev.filter(item => item._id !== equipmentId);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (equipmentId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(equipmentId);
      return;
    }
    setCart(prev => {
      const newCart = prev.map(item =>
        item._id === equipmentId ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <div>
      <NavBar user={user} onLogout={handleLogout} cartCount={cart.length} />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/equipment" element={user ? <EquipmentList /> : <Navigate to="/login" />} />
        <Route path="/equipment/:id" element={user ? <EquipmentDetails addToCart={addToCart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
