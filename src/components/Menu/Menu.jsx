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
            sx={{
              fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "40px" },
              color: "white",
              paddingLeft: { xs: "10px", sm: "15px", md: "20px", lg: "30px" },
            }}
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
        <p>Home</p>
        <p>Movie</p>
        <p>Series</p>
        <p>Recent</p>
        <p>Coming soon</p>
      </div>
    </div>
  );
};

export default Menu;
