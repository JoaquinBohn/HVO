import React from "react";
import "./Card.css";

const Card = ({ element }) => {
  return (
    <div className="card">
      <div
        className="card-img-container"
        style={{ backgroundImage: `url(${element.image})` }}
      >
        <div className="card-info">
          <h3 className="card-detail" id="name">
            {element.name}
          </h3>
          <h4 className="card-detail" id="genre">
            {element.genre}
          </h4>
          <h4 className="card-detail category" id={element.category}>
            {element.category}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
