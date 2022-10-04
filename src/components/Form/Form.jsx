import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { db } from "../../firebaseConfig";

const Form = ({ handleID }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { cartTotal, cart } = useContext(CartContext);
  const total = cartTotal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyer: { name, phone: phone },
      date: serverTimestamp(),
      cart,
      total,
    };
    const refOrder = collection(db, "orders");
    addDoc(refOrder, order).then((res) => {
      handleID(res.id);
    });
  };

  const handleName = (e) => setName(e.target.value);

  const handlePhone = (e) => setPhone(e.target.value);

  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-4 alert alert-dark">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="nombre">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                id="nombre"
                placeholder="Nombre completo"
                value={name}
                onChange={handleName}
                required
              />
            </div>
            <div className="form-group">
              <label for="nombre">Teléfono</label>
              <input
                type="number"
                className="form-control"
                name="telefono"
                id="telefono"
                placeholder="Telefono"
                value={phone}
                onChange={handlePhone}
              />
            </div>
            <button className="btn btn-primary mt-3">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
