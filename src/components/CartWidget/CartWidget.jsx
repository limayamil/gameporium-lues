import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import shoppingCart from "../../assets/shopping-cart-64px.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartTotal, clear } = useContext(CartContext);

  return (
    <div className="col-md-1" id="navbar-cart">
      <img src={shoppingCart} alt="Cart" />
      <span className="badge rounded-pill bg-danger">{cartTotal()}</span>
    </div>
  );
};

export default CartWidget;
