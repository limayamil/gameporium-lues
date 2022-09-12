import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
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
        <ItemCount initialStock={5} initialQuantity={1} setItemAdd={0} />
      </div>
    </div>
  );
};

export default ItemDetail;
