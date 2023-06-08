import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Genres.css";

const Genres = () => {
  //slidePosition indica las veces que se ha desplazado hacia la derecha el carousel
  //0 indica ningun posicion original, 1 indica posicion media, 2 indica posicion final
  const [slidePosition, setSlidePosition] = useState(0);

  //showBackwardArrow y showForwardArrow sirven para mostrar u ocultar los botones flecha
  const [showBackwardArrow, setShowBackwardArrow] = useState(false);
  const [showForwardArrow, setShowForwardArrow] = useState(true);

  //screenWidth guarda el valor del ancho de pantalla
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  //limit indica el limite de desplazamientos del carousel hacia la derecha
  //Si el ancho de pantalla es menor a 481px entonces limit vale 3, caso contrario 2
  const [limit, setLimit] = useState(2);

  //genreTransition indica la animacion que corresponde al movimiento del carousel
  const [genreTransition, setGenreTransition] = useState("move-backward");

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
  const moveBackward = () => {
    if (slidePosition > 0) {
      setSlidePosition(slidePosition - 1);
      if (slidePosition === 2) {
        setGenreTransition("move-backmid");
      } else {
        setGenreTransition("move-backward");
      }
    }
  };

  const moveForward = () => {
    if (slidePosition < limit) {
      setSlidePosition(slidePosition + 1);
      if (slidePosition === 1 && screenWidth < 481) {
        setGenreTransition("move-forward-forward");
      } else {
        setGenreTransition("move-forward");
      }
    }
  };
  //------------------------------------------------------------------------

  //Se usa el hook para seleccionar el valor de limit en funcion del ancho de pantalla
  useEffect(() => {
    setLimit(screenWidth < 481 ? 3 : 2);
  }, [screenWidth]);

  //Este hook se usa para mostrar u ocultar los botones flecha del carousel
  useEffect(() => {
    slidePosition === 0
      ? setShowBackwardArrow(false)
      : setShowBackwardArrow(true);
    slidePosition < limit - 1
      ? setShowForwardArrow(true)
      : setShowForwardArrow(false);
  }, [slidePosition, limit]);

  return (
    <div className="genres-container">
      <h2 className="genres-title">Explore by genre</h2>
      <div className="genres" id={genreTransition}>
        <div className="genre-card" id="romance">
          <div className="genre-name">
            <h3>Romance</h3>
          </div>
        </div>
        <div className="genre-card" id="sci-fi">
          <div className="genre-name">
            <h3>Sci-fi</h3>
          </div>
        </div>
        <div className="genre-card" id="art">
          <div className="genre-name">
            <h3>Art</h3>
          </div>
        </div>
        <div className="genre-card" id="horror">
          <div className="genre-name">
            <h3>Horror</h3>
          </div>
        </div>
        <div className="genre-card" id="fantasy">
          <div className="genre-name">
            <h3>Fantasy</h3>
          </div>
        </div>
        <div className="genre-card" id="drama">
          <div className="genre-name">
            <h3>Drama</h3>
          </div>
        </div>
      </div>
      <div className="genre-arrow">
        <button
          className="arrow-button"
          id={showBackwardArrow ? "arrow-show" : "arrow-hidden"}
          onClick={moveBackward}
        >
          <ArrowBackIosIcon className="arrow-icon" sx={{ fontSize: "40px" }} />
        </button>
        <div
          className={
            showBackwardArrow && showForwardArrow ? "aux-hidden" : "aux-show"
          }
        ></div>
        <button
          className="arrow-button"
          id={showForwardArrow ? "arrow-show" : "arrow-hidden"}
          onClick={moveForward}
        >
          <ArrowForwardIosIcon
            className="arrow-icon"
            sx={{ fontSize: "40px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Genres;
