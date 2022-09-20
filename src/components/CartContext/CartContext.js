import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let product = cart.find((i) => i.id === item.id);
      cart[cart.indexOf(product)].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const cartTotal = () => {
    return cart.reduce((total, item) => (total += item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default Provider;
