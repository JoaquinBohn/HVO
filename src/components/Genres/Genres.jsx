import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Genres.css";

const Genres = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [showBackwardArrow, setShowBackwardArrow] = useState(false);
  const [showForwardArrow, setShowForwardArrow] = useState(true);

  const moveBackward = () => {
    if (slidePosition > 0) {
      setSlidePosition(slidePosition - 1);
    }
  };

  const moveForward = () => {
    if (slidePosition < 2) {
      setSlidePosition(slidePosition + 1);
    }
  };

  useEffect(() => {
    slidePosition === 0
      ? setShowBackwardArrow(false)
      : setShowBackwardArrow(true);
    slidePosition < 1 ? setShowForwardArrow(true) : setShowForwardArrow(false);
  }, [slidePosition]);

  return (
    <div className="genres-container">
      <h2 className="genres-title">Explore by genre</h2>
      <div
        className="genres"
        id={showBackwardArrow ? "move-forward" : "move-backward"}
      >
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
