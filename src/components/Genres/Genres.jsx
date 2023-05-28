import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Genres.css";

const Genres = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [showBackwardArrow, setShowBackwardArrow] = useState(false);
  const [showForwardArrow, setShowForwardArrow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [limit, setLimit] = useState(2);
  const [genreTransition, setGenreTransition] = useState("move-backward");

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

  useEffect(() => {
    setLimit(screenWidth < 481 ? 3 : 2);
  }, [screenWidth]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

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
