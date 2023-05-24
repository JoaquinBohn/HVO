import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";
import Genres from "../Genres/Genres";
import Exclusive from "../Exclusive/Exclusive";
import Highlight from "../Highlight/Highlight";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Trending />
      <Genres />
      <Highlight />
      <Exclusive />
    </div>
  );
};

export default Home;
