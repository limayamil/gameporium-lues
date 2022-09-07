import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useEffect } from "react";
import { useState } from "react";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: "Placa de Video Colorful RTX3070 Ti",
        image:
          "https://mundofix.com/199912-home_default/placa-de-video-colorful-rtx3070-ti-igame-ultra-w-oc-8gb-gddr6.jpg",
        price: 241669,
      },
      {
        id: 2,
        name: "Placa de Video Colorful RTX3080",
        image:
          "https://mundofix.com/344185-home_default/placa-de-video-colorful-rtx3080-igame-ultra-oc-lhr-10gb-gddr6x.jpg",
        price: 203479,
      },
      {
        id: 3,
        name: "Placa de Video Colorful RTX3060 Ti",
        image:
          "https://mundofix.com/494440-home_default/placa-de-video-colorful-rtx3060-ti-nb-duo-v2-lhr-8gb-gddr6.jpg",
        price: 154059,
      },
    ];

    const getProducts = new Promise((res) => {
      setTimeout(() => {
        res(products);
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
