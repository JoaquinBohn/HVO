import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, limit, where } from "firebase/firestore";
import "./ItemListContainer.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ filter }) => {
  const [items, setItems] = useState([]);
  const [listPosition, setListPosition] = useState(0);
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showForArrow, setShowForArrow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slideLimit, setSlideLimit] = useState(2);
  const [transition, setTransition] = useState("move-backw");

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);

  const moveBack = () => {
    if (listPosition > 0) {
      setListPosition(listPosition - 1);
      if (listPosition === 2 && screenWidth < 481) {
        setTransition("move-backw-mid");
      } else {
        setTransition("move-backw");
      }
    }
  };

  const moveFor = () => {
    if (listPosition < slideLimit) {
      setListPosition(listPosition + 1);
      if (listPosition === 1 && screenWidth < 481) {
        setTransition("move-forw-forw");
      } else {
        setTransition("move-forw");
      }
    }
  };

  useEffect(() => {
    setSlideLimit(screenWidth < 481 ? 3 : 2);
  }, [screenWidth]);

  useEffect(() => {
    listPosition === 0 ? setShowBackArrow(false) : setShowBackArrow(true);
    listPosition < slideLimit - 1
      ? setShowForArrow(true)
      : setShowForArrow(false);
  }, [listPosition, slideLimit]);

  useEffect(() => {
    const itemCollection = collection(db, "contenido");

    const q = filter
      ? query(itemCollection, where("category", "==", "Series"), limit(5))
      : query(itemCollection, limit(5));

    getDocs(q)
      .then((res) => {
        const productos = res.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  return (
    <div className="itemListContainer-container">
      <div className="itemListContainer" id={transition}>
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
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "40px", lg: "50px" },
            }}
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
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "40px", lg: "50px" },
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
