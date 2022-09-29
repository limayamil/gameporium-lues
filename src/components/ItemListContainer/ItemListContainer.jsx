import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productCollection = collection(db, "items");
    const ref = category
      ? query(productCollection, where("category", "==", category))
      : productCollection;

    getDocs(ref).then((response) => {
      const products = response.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      setItems(products);
      setLoading(false);
    });
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
      {loading ? <Loading /> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
