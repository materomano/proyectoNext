'use client';
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        // Si el producto ya está en el carrito, incrementa la cantidad por el valor especificado
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity } // Incrementa la cantidad según la cantidad seleccionada
            : cartItem
        );
      } else {
        // Si el producto no está en el carrito, añádelo con la cantidad especificada
        return [...prevCart, { ...item, quantity: item.quantity }]; // Usa la cantidad seleccionada
      }
    });
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};



