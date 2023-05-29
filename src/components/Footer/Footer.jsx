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
          <GitHubIcon
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joaquin-bohn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
            }}
          />
        </a>

        <a
          href="https://portfolio-mauve-theta-34.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <PortraitIcon
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
            }}
          />
        </a>
      </div>

      <div className="legal">
        <p>
          ©2023 This web page is just a frontend student project made for
          educational purposes.
        </p>
      </div>
    </div>
  );
};

export default Footer;
