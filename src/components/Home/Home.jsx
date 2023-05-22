import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";
import Genres from "../Genres/Genres";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Trending />
      <Genres />
    </div>
  );
};

export default Home;
