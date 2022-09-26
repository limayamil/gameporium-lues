import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import shoppingCart from "../../assets/shopping-cart-64px.png";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <div className="col-md-1" id="navbar-cart">
      <Link to="/cart">
        <img src={shoppingCart} alt="Cart" />
      </Link>
      <span className="badge rounded-pill bg-danger">{cartTotal()}</span>
    </div>
  );
};

export default CartWidget;
