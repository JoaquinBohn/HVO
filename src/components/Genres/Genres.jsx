import React from "react";
import "./Genres.css";

const Genres = () => {
  return (
    <div className="genres-container">
      <h2 className="genres-title">Explore by genre</h2>
      <div className="genres">
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
    </div>
  );
};

export default Genres;
