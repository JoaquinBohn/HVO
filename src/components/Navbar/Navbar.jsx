import React from "react";
import "./Navbar.css";
import Menu from "../Menu/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="sections">
          <p>Peliculas</p>
          <p>Series</p>
        </div>
      </div>
      <div className="navbar-home"></div>
      <div className="navbar-search"></div>
    </div>
  );
};

export default Navbar;
