import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Menu.css";

const Menu = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  const close = () => {
    setHide(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  const open = () => {
    setShow(true);
    setHide(false);
  };

  useEffect(() => {
    Aos.init({ duration: 300 });
  }, [show]);

  return (
    <div className="menu">
      <div className="menu-icon">
        <button onClick={open} className="close-button">
          <MenuIcon
            sx={{ fontSize: "40px", color: "white", paddingLeft: "30px" }}
          />
        </button>
      </div>
      <div
        className={show ? "menu-unfold" : "menu-hidden"}
        data-aos="fade-right"
        style={hide ? { animation: "fade-out 0.5s forwards" } : {}}
      >
        <button onClick={close} className="close-button">
          <CloseIcon />
        </button>
        <p>Inicio</p>
        <p>Peliculas</p>
        <p>Series</p>
        <p>Recien añadidos</p>
        <p>Proximamente</p>
      </div>
    </div>
  );
};

export default Menu;
