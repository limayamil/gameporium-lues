import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteOne, deleteAll } = useContext(CartContext);
  let totalCost = 0;

  if (cart.length > 0) {
    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>Este es tu carrito</h2>
          </div>
        </div>

        {cart.map((product) => {
          return (
            (totalCost = totalCost + product.price * product.quantity),
            (
              <div
                className="row pt-4 pb-3 border-bottom border-danger"
                key={product.id}
              >
                <div className="col-md-1">
                  <img
                    src={product.image}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-9">
                  <h3>{product.name}</h3>
                  <p>
                    Cantidad seleccionada: <strong>{product.quantity}</strong>
                  </p>
                </div>
                <div className="col-md-2">
                  <button
                    className="cta-danger"
                    onClick={() => deleteOne(product.id)}
                  >
                    ¿Borrar?
                  </button>
                </div>
              </div>
            )
          );
        })}
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>
              Total de tu carrito: <strong>${totalCost}</strong>
            </h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <button className="cta-danger mx-3" onClick={deleteAll}>
              ¿Borrar todos?
            </button>
            <Link to="/checkout">
              <button className="cta-danger mx-3">Finalizar compra</button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="row mb-4">
          <div className="col-md-12">
            <h2>No tienes producto en tu carrito</h2>
            <p className="text-center">
              <Link to="/">
                <u>Haz click acá</u>
              </Link>{" "}
              para volver al inicio
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
