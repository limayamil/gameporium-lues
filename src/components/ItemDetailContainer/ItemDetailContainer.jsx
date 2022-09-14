import React, { useEffect, useState } from "react";
import { ProductList } from "../ProductList/ProductList";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = new Promise((res) => {
      const productRes = ProductList.find((prod) => prod.id === id);

      setTimeout(() => {
        res(productRes);
      }, 1500);
    });

    getProduct.then((info) => {
      setItem(info);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
