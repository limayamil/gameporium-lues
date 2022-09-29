import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const product = { ...item, quantity };
    if (isInCart(item.id)) {
      sumQuantity(product);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const deleteAll = () => {
    setCart([]);
  };

  const deleteOne = (id) => {
    const filteredList = cart.filter((prod) => prod.id !== id);
    setCart(filteredList);
  };

  const sumQuantity = (product) => {
    const cartUpdated = cart.map((productInCart) => {
      if (product.id === productInCart.id) {
        console.log(product.id + " comparo a " + productInCart.id);
        const productUpdated = {
          ...productInCart,
          quantity: productInCart.quantity + product.quantity,
        };
        console.log(productUpdated);
        return productUpdated;
      } else {
        return productInCart;
      }
    });
    setCart(cartUpdated);
  };

  const totalUnits = () => {
    const copyOfCart = [...cart];
    let count = 0;
    copyOfCart.forEach((product) => {
      count = count + product.quantity;
    });
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const cartTotal = () => {
    return cart.reduce((total, item) => (total += item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, deleteOne, deleteAll, cartTotal, totalUnits }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
