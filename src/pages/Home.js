import React, { useContext } from "react";
import { DatabaseContext } from "../context/DatabaseContext";
import Classes from "../screens/Classes";
import Header from "../components/Header";
import "../style/pages/home.scss";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "../context/LoggedInUserContext";

function Home() {
  
  // createStaffDB();

  return (
    <div className="home-container">
      <Header />
      <Classes />
    </div>
  );
}

export default Home;
