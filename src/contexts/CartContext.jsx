import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  // const removeFromCart = (id) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  // };
  const removeFromCart = (shoe) =>{
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === shoe.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== shoe.id);
      } else {
        return prevCart.map(item =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};