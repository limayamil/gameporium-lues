import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [storedQuantity, setQuantity] = useState(0);

  const onAdd = (item, addedQuantity) => {
    setQuantity(storedQuantity + addedQuantity);
    addItem(item, addedQuantity);
  };

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img src={item.image} alt={item.name} className="img-fluid" />
      </div>
      <div className="col-md-8">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        <p>
          <strong>Stock:</strong> {item.stock}
        </p>
        <ItemCount
          initialStock={item.stock}
          initialQuantity={1}
          onAdd={onAdd}
          quantity={storedQuantity}
          setQuantity={setQuantity}
          item={item}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
