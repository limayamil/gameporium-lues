import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { db } from "../../firebaseConfig";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "items");
    const ref = doc(productCollection, `${id}`);
    getDoc(ref).then((res) => {
      setItem({
        id: res.id,
        ...res.data(),
      });
      setLoading(false);
    });
  }, [id]);

  return <div>{loading ? <Loading /> : <ItemDetail item={item} />} </div>;
};

export default ItemDetailContainer;
