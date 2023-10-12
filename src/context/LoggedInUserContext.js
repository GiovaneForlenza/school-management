import userEvent from "@testing-library/user-event";
import React, {  createContext, useReducer } from "react";

export const LoggedInUserContext = createContext();

const INITIAL_STATE = {
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

function loggedInUserReducer(state, action) {
  switch (action.type) {
    case USER_REDUCER_ACTIONS.UPDATE_ID:
      return { ...state, id: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_NAME:
      return { ...state, name: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_POSITION:
      return { ...state, position: action.payload };
    case USER_REDUCER_ACTIONS.UPDATE_CLASSES:
      return { ...state, classes: action.payload };
    // case USER_REDUCER_ACTIONS.UPDATE_DATA:
    //   return { ...state, classes: action.payload };
    default:
      return state;
  }
}

export const LoggedInUserContextProvider = (props) => {

  const [state, dispatch] = useReducer(loggedInUserReducer, INITIAL_STATE);

  return (
    <LoggedInUserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LoggedInUserContext.Provider>
  );
};
