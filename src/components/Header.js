import React, { useContext } from "react";
import "../style/components/header.scss";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "../context/LoggedInUserContext";

function Header() {
  const { userState, dispatch } = useContext(LoggedInUserContext);

  function handleClick() {
    // TODO(Gionave): Make the logout btn work
    dispatch({ action: USER_REDUCER_ACTIONS.LOG_OUT});
  }
  return (
    <div className="header-container">
      <h3>Hello, {userState.name}</h3>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}

export default Header;
