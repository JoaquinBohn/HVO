import React from "react";
import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Header;
