import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Trending />
    </div>
  );
};

export default Home;
