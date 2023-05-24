import React from "react";
import Card from "../Card/Card";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((element) => {
        return <Card element={element} key={element.id} />;
      })}
    </div>
  );
};

export default ItemList;
