import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {
  getDocs,
  collection,
  query,
  limit,
  where,
  orderBy,
} from "firebase/firestore";
import "./ItemListContainer.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ filter }) => {
  const [items, setItems] = useState([]);
  const [listPosition, setListPosition] = useState(0);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showForArrow, setShowForArrow] = useState(true);

  const moveBack = () => {
    if (listPosition > 0) {
      setListPosition(listPosition - 1);
    }
  };

  const moveFor = () => {
    if (listPosition < 2) {
      setListPosition(listPosition + 1);
    }
  };

  useEffect(() => {
    listPosition === 0 ? setShowBackArrow(false) : setShowBackArrow(true);
    listPosition < 1 ? setShowForArrow(true) : setShowForArrow(false);
  }, [listPosition]);

  useEffect(() => {
    const itemCollection = collection(db, "contenido");

    const q = filter
      ? query(itemCollection, where("category", "==", "Series"), limit(5))
      : query(itemCollection, limit(5), orderBy("name"));

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
  }, [filter]);

  return (
    <div>
      <div
        className="itemListContainer"
        id={showBackArrow ? "move-forw" : "move-backw"}
      >
        <ItemList items={items} />
      </div>
      <div className="itemList-arrow">
        <button
          className="arrow-list-button"
          id={showBackArrow ? "arrow-list-show" : "arrow-list-hidden"}
          onClick={moveBack}
        >
          <ArrowBackIosIcon
            className="arrow-list-icon"
            sx={{ fontSize: "40px" }}
          />
        </button>
        <div
          className={
            showBackArrow && showForArrow ? "aux-list-hidden" : "aux-list-show"
          }
        ></div>
        <button
          className="arrow-list-button"
          id={showForArrow ? "arrow-list-show" : "arrow-list-hidden"}
          onClick={moveFor}
        >
          <ArrowForwardIosIcon
            className="arrow-list-icon"
            sx={{ fontSize: "40px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
