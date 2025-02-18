// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();
 

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (course) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === course.id)) {
        return prevWishlist.filter((item) => item.id !== course.id);
      } else {
        return [...prevWishlist, course];
      }
    });
  };
  const addToCart = (course) => {
    setCart((prevCart) => {
     
      if (!prevCart.some((item) => item.id === course.id)) {
        return [...prevCart, course];
      }
      return prevCart;
    });
  };

  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};