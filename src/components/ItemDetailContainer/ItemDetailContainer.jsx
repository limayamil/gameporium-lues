import React, { useEffect, useState } from "react";
import { ProductList } from "../ProductList/ProductList";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getProduct = new Promise((res, rej) => {
      const productRes = ProductList.find((prod) => prod.id === 1); // ID hardcodeado
      setTimeout(() => {
        res(productRes);
      }, 2000);
    });

    getProduct
      .then((info) => {
        setItem(info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
