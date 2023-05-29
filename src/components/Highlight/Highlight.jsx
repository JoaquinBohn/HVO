import React, { useEffect, useState } from "react";
import "./Highlight.css";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Highlight = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const setWindowWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);

  return (
    <div className="highlight">
      <div className="highlight-info">
        <h2>Just be happy :)</h2>
        <p>Don't miss Be Happy new season. Streaming now on HVOmax.</p>
        <div className="highlight-buttons">
          <Button
            variant="contained"
            size={screenWidth < 481 ? "small" : "medium"}
            style={{
              maxWidth: "100px",
              minWidth: "40px",
              maxHeight: "50px",
              minHeight: "30px",
            }}
          >
            <PlayCircleIcon
              sx={{
                fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
              }}
            />
          </Button>
          <Button
            variant="outlined"
            size={screenWidth < 481 ? "small" : "medium"}
            style={{
              maxWidth: "120px",
              minWidth: "70px",
              maxHeight: "50px",
              minHeight: "30px",
            }}
          >
            {screenWidth < 481 ? "info" : "More info"}
          </Button>
        </div>
      </div>
      <div className="highlight-content">
        <div className="highlight-video">
          <video
            width={screenWidth < 481 ? "200" : screenWidth < 769 && "320"}
            height={screenWidth < 481 ? "150" : screenWidth < 769 && "240"}
            autoPlay
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/drdgu83bp/video/upload/v1684257959/pelis/sad_dri6uc.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
