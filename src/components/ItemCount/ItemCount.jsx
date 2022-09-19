import "./ItemCount.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// { initialStock, initialQuantity, onAdd, quantity, setQuantity, item }
const ItemCount = (props) => {
  const { item } = props;
  const [quantity, setQuantity] = useState(props.quantity);
  const [itemStock, setItemStock] = useState(props.initialStock);
  //const [itemAdd, setItemAdd] = useState(props.onAdd);
  const ctaAgregar = document.getElementById("ctaAgregar");

  // Función de cambio de cantidad elegida, tras click en + o -.

  const modifyQuantity = (value) => {
    if (value > 0 && value <= itemStock) {
      setQuantity(value);
    }
  };

  // Función de agregar producto, tras click en ctaAgregar.

  const addProducts = () => {
    if (quantity <= itemStock) {
      setItemStock(itemStock - quantity);
      props.onAdd(item, quantity);
      setQuantity(0);
    }
  };

  // Controlo si aún hay stock tras agregar los productos al carrito.

  useEffect(() => {
    if (itemStock === 0) {
      ctaAgregar.classList.add("disabled");
      ctaAgregar.value = "No hay más stock";
    }
  }, [ctaAgregar, itemStock]);

  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-4 text-center d-grid">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              modifyQuantity(quantity - 1);
            }}
          >
            <i className="bi bi-dash"></i>
          </button>
          <input
            type="text"
            className="btn-secondary btn-secondary-invert"
            value={quantity}
            onChange={() => {}}
          />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              modifyQuantity(quantity + 1);
            }}
          >
            <i className="bi bi-plus"></i>
          </button>
        </div>
        <div className="d-grid mt-3">
          <input
            type="button"
            className="btn btn-secondary"
            value="Agregar"
            id="ctaAgregar"
            onClick={() => {
              addProducts();
            }}
          />
        </div>
        <div className="d-grid mt-3">
          <Link to="/cart">
            <input
              type="button"
              className="btn btn-primary"
              value="Finalizar compra"
              id="ctaFinalizar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
