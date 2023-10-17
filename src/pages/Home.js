import React, { useContext } from "react";
import Classes from "../screens/Classes";
import Header from "../components/Header";
import "../style/pages/home.scss";

function Home() {
  

  return (
    <div className="home-container">
      <Header />
      <Classes />
    </div>
  );
}

export default Home;
