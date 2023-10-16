import userEvent from "@testing-library/user-event";
import React, { createContext, useReducer } from "react";

export const LoggedInUserContext = createContext();

const INITIAL_USER_STATE = {
  id: null,
  name: null,
  position: null,
};

export const USER_REDUCER_ACTIONS = {
  UPDATE_DATA: "UPDATE_DATA",
  LOG_OUT: "LOG_OUT",
};

function loggedInUserReducer(userState, action) {
  switch (action.type) {
    case USER_REDUCER_ACTIONS.LOG_OUT:
      return { id: null, name: null, position: null };
    case USER_REDUCER_ACTIONS.UPDATE_DATA:
      console.log(action.payload.id);
      return {
        id: action.payload.id,
        name: action.payload.name,
        position: action.payload.position,
      };
    default:
      return userState;
  }
}

export const LoggedInUserContextProvider = (props) => {
  const [userState, dispatch] = useReducer(
    loggedInUserReducer,
    INITIAL_USER_STATE
  );

  return (
    <LoggedInUserContext.Provider value={{ userState, dispatch }}>
      {props.children}
    </LoggedInUserContext.Provider>
  );
};
