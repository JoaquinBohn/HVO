import React from "react";
import "./Exclusive.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Exclusive = () => {
  return (
    <div className="exclusive">
      <div className="exclusive-info">
        <h2>Exclusive shows</h2>
        <p>Explore our exclusive hvo produced series</p>
      </div>
      <ItemListContainer filter={true} />
    </div>
  );
};

export default Exclusive;
