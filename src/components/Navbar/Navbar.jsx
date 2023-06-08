import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Menu from "../Menu/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  //La logica de este componente solo se encarga de las animaciones
  const [showSearch, setShowSearch] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const search = () => {
    if (screenWidth > 480) {
      setShowSearch(true);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, [showSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowSearch(false);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-menu">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="sections">
          <p>Movies</p>
          <p>Series</p>
        </div>
      </div>
      <div className="navbar-home">
        <a href="../../../public/index.html">
          <h2 className="logo">HVOmax</h2>
        </a>
      </div>
      <div className="navbar-search">
        <button
          className={showSearch ? "search-button-hidden" : "search-button"}
          onClick={search}
        >
          <SearchIcon sx={{ fontSize: "30px" }} />
        </button>
        <div
          className={showSearch ? "search-form-show" : "search-form-hidden"}
          data-aos="flip-down"
        >
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Movies, series and more..."
            />
            <button className="search-button" onClick={handleSubmit}>
              <SearchIcon
                sx={{
                  fontSize: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
                  paddingTop: "5px",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
