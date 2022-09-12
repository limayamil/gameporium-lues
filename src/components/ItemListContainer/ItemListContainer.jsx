import ItemList from "../ItemList/ItemList";
import { ProductList } from "../ProductList/ProductList";
import "./ItemListContainer.css";
import { useEffect } from "react";
import { useState } from "react";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res) => {
      setTimeout(() => {
        res(ProductList);
      }, 2000);
    });

    getProducts.then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>
            ¡Bienvenido <span className="greeting">{props.greeting}</span>!
          </h2>
        </div>
      </div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
