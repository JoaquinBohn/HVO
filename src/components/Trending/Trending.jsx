import React from "react";
import "./Trending.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Trending = () => {
  return (
    <div className="trending">
      <h2 className="trending-title">Trending now</h2>
      <ItemListContainer />
    </div>
  );
};

export default Trending;
