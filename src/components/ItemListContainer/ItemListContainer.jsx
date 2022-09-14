import ItemList from "../ItemList/ItemList";
import { ProductList } from "../ProductList/ProductList";
import "./ItemListContainer.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getProducts = new Promise((res) => {
      setTimeout(() => {
        res(ProductList);
      }, 1500);
    });

    if (!category) {
      getProducts.then((res) => {
        setItems(res);
      });
    } else {
      getProducts.then((res) => {
        setItems(res.filter((cat) => cat.category === category));
      });
    }
  }, [category]);

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
