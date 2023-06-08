import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, limit, where } from "firebase/firestore";
import "./ItemListContainer.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ filter }) => {
  //items es el array en el cual se guardaran los datos de las peliculas
  const [items, setItems] = useState([]);

  //listPosition indica las veces que se ha desplazado hacia la derecha el carousel
  //0 indica ningun posicion original, 1 indica posicion media, 2 indica posicion final
  const [listPosition, setListPosition] = useState(0);

  //showBackwardArrow y showForwardArrow sirven para mostrar u ocultar los botones flecha
  const [showBackArrow, setShowBackArrow] = useState(false);
  const [showForArrow, setShowForArrow] = useState(true);

  //screenWidth guarda el valor del ancho de pantalla
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //slideLimit indica el limite de desplazamientos del carousel hacia la derecha
  //Si el ancho de pantalla es menor a 481px entonces slideLimit vale 3, caso contrario 2
  const [slideLimit, setSlideLimit] = useState(2);

  //transition indica la animacion que corresponde al movimiento del carousel
  const [transition, setTransition] = useState("move-backw");

  //Esta seccion maneja la logica de la actualizacion del ancho de pantalla
  //Permite obtener el ancho de pantalla de manera dinamica
  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);
  //------------------------------------------------------------------------

  //Esta seccion maneja el movimiento y la asignacion de animaciones del carousel
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
  //------------------------------------------------------------------------

  //Se usa el hook para seleccionar el valor de slideLimit en funcion del ancho de pantalla
  useEffect(() => {
    setSlideLimit(screenWidth < 481 ? 3 : 2);
  }, [screenWidth]);

  //Este hook se usa para mostrar u ocultar los botones flecha del carousel
  useEffect(() => {
    listPosition === 0 ? setShowBackArrow(false) : setShowBackArrow(true);
    listPosition < slideLimit - 1
      ? setShowForArrow(true)
      : setShowForArrow(false);
  }, [listPosition, slideLimit]);

  //Dentro del hook se lleva a cabo la peticion de los datos de las peliculas a la base de datos
  //Si hay un filtro activo se obtienen solamente los registros que tengan la categoria Series
  //Caso contrario se obtienen los primeros cinco registros
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
