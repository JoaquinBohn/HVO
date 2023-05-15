import React, { useState, useEffect } from "react";
import KeyboardArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardArrowLeftTwoTone";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Carousel.css";

const Carousel = () => {
  const slide1 = {
    id: "movie-1",
    title: "Mars 33",
    description: "A generic sci-fi space movie.",
    img: "https://res.cloudinary.com/drdgu83bp/image/upload/v1684160593/pelis/mars_ec1awd.jpg",
    video:
      "https://res.cloudinary.com/drdgu83bp/video/upload/v1684159756/pelis/mars_m5rx2e.mp4",
  };
  const slide2 = {
    id: "movie-2",
    title: "No signal",
    description: "A generic horror movie.",
    img: "https://res.cloudinary.com/drdgu83bp/image/upload/v1684160976/pelis/horror_f4twvs.jpg",
    video:
      "https://res.cloudinary.com/drdgu83bp/video/upload/v1684159756/pelis/horror_lcrnzo.mp4",
  };
  const slide3 = {
    id: "movie-3",
    title: "Remember Julia",
    description: "A generic love movie.",
    img: "https://res.cloudinary.com/drdgu83bp/image/upload/v1684160594/pelis/love_zbtouf.jpg",
    video:
      "https://res.cloudinary.com/drdgu83bp/video/upload/v1684159753/pelis/love_hxbmiv.mp4",
  };

  const slides = [slide1, slide2, slide3];
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [buttonState, setButtonState] = useState([
    "active",
    "inactive",
    "inactive",
  ]);

  const [loading, setLoading] = useState(false);

  const setChange = (index) => {
    setSelectedIndex(index);
    setSelectedSlide(slides[index]);
    setTimeout(() => {
      setLoading(false);
    }, 0.5);
    setLoading(true);
  };

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : slides.length - 1;
    setChange(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < slides.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setChange(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4500);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (selectedIndex === 1) {
      setButtonState(["inactive", "active", "inactive"]);
    } else if (selectedIndex === 2) {
      setButtonState(["inactive", "inactive", "active"]);
    } else {
      setButtonState(["active", "inactive", "inactive"]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 0.5);
    setLoading(true);
  }, [selectedIndex]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <div
          className={loading ? "carousel-slide" : "carousel-animated-slide"}
          id={selectedSlide.id}
        >
          <h2 className="slide-title">{selectedSlide.title}</h2>
          <p className="slide-text">{selectedSlide.description}</p>
        </div>
        <div className="carousel-arrows">
          <button className="carousel-button" onClick={previous}>
            <KeyboardArrowLeftTwoToneIcon sx={{ fontSize: "40px" }} />
          </button>
          <button className="carousel-button" onClick={next}>
            <KeyboardArrowRightTwoToneIcon sx={{ fontSize: "40px" }} />
          </button>
        </div>
      </div>

      <div className="carousel-indicators">
        <button
          onClick={() => {
            setChange(0);
          }}
          className="carousel-button"
        >
          <FiberManualRecordIcon
            id={buttonState[0]}
            sx={{ fontSize: "small" }}
          />
        </button>

        <button
          onClick={() => {
            setChange(1);
          }}
          className="carousel-button"
        >
          <FiberManualRecordIcon
            sx={{ fontSize: "small" }}
            id={buttonState[1]}
          />
        </button>

        <button
          onClick={() => {
            setChange(2);
          }}
          className="carousel-button"
        >
          <FiberManualRecordIcon
            sx={{ fontSize: "small" }}
            id={buttonState[2]}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
