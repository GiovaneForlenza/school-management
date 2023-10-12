import userEvent from "@testing-library/user-event";
import React, {  createContext, useReducer } from "react";

export const LoggedInUserContext = createContext();

const INITIAL_userState = {
  id: null,
  name: null,
  position: null,
  classes: null,
};

export const USER_REDUCER_ACTIONS = {
  UPDATE_ID: "UPDATE_ID",
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_POSITION: "UPDATE_POSITION",
  UPDATE_CLASSES: "UPDATE_CLASSES",
  UPDATE_DATA: "UPDATE_DATA",
};

function loggedInUserReducer(userState, action) {
  switch (action.type) {
    case USER_REDUCER_ACTIONS.UPDATE_ID:
      return { ...userState, id: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_NAME:
      return { ...userState, name: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_POSITION:
      return { ...userState, position: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_CLASSES:
      return { ...userState, classes: action.payload };
    // case USER_REDUCER_ACTIONS.UPDATE_DATA:
    //   return { ...userState, classes: action.payload };
    default:
      return userState;
  }
}

export const LoggedInUserContextProvider = (props) => {

  const [userState, dispatch] = useReducer(loggedInUserReducer, INITIAL_userState);

  return (
    <LoggedInUserContext.Provider value={{ userState, dispatch }}>
      {props.children}
    </LoggedInUserContext.Provider>
  );
};
