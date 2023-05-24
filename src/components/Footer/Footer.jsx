import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PortraitIcon from "@mui/icons-material/Portrait";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a
          href="https://github.com/JoaquinBohn"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/joaquin-bohn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <PortraitIcon />
      </div>

      <div className="legal">
        <p>
          ©2023 This is web page is just a frontend student project made for
          educational purposes.
        </p>
      </div>
    </div>
  );
};

export default Footer;
