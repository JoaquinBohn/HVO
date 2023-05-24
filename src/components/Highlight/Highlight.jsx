import React from "react";
import "./Highlight.css";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Highlight = () => {
  return (
    <div className="highlight">
      <div className="highlight-info">
        <h2>Just be happy :)</h2>
        <p>Don't miss Be Happy new season. Streaming now on HVOmax.</p>
        <div className="highlight-buttons">
          <Button variant="contained">
            <PlayCircleIcon />
          </Button>
          <Button variant="outlined">More info</Button>
        </div>
      </div>
      <div className="highlight-content">
        <div className="highlight-video">
          <video /* width="320" height="240" */ autoPlay loop muted>
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
