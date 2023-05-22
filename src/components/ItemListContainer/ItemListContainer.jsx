import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "contenido");

    const q = query(itemCollection, where("category", "==", "movie"));

    getDocs(q)
      .then((res) => {
        const productos = res.docs.map((producto) => {
          return {
            ...producto.data(),
          };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="itemListContainer">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
