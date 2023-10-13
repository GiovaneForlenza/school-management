import React, { useContext } from "react";
import "../style/components/header.scss";
import { LoggedInUserContext } from "../context/LoggedInUserContext";

function Header() {
  const { userState } = useContext(LoggedInUserContext);
  return <div className="header-container">Hello, {userState.name}</div>;
}

export default Header;
