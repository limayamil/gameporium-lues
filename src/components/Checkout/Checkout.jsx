import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";
import Form from "../Form/Form";

const Checkout = () => {
  const { deleteAll } = useContext(CartContext);
  const [orderID, setOrderID] = useState("");

  const handleID = (orderNumber) => {
    setOrderID(orderNumber);
  };

  useEffect(() => {
    deleteAll();
  }, [deleteAll]);

  if (orderID) {
    return (
      <>
        <h1 className="mt-5 text-center">¡Muchas gracias por tu compra!</h1>
        <h3 className="text-center mt-3">
          El número de seguimiento es el siguiente: {orderID}
        </h3>
      </>
    );
  }

  return (
    <div>
      <Form handleID={handleID} />
    </div>
  );
};

export default Checkout;
