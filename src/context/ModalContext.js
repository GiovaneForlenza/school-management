import userEvent from "@testing-library/user-event";
import React, { createContext, useReducer } from "react";

export const ModalContext = createContext();

const INITIAL_modalState = {
  id: null,
  is_open: false,
};

export const MODAL_REDUCER_ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: 'CLOSE_MODAL'
};

function modalReducer(modalState, action) {
  switch (action.type) {
    case MODAL_REDUCER_ACTIONS.OPEN_MODAL:
      return { ...modalState, is_open: true };
    case MODAL_REDUCER_ACTIONS.CLOSE_MODAL:
      return { ...modalState, is_open: false };
    default:
      return modalState;
  }
}

export const ModalContextProvider = (props) => {
  const [modalState, dispatch] = useReducer(modalReducer, INITIAL_modalState);

  return (
    <ModalContext.Provider value={{ modalState, dispatch }}>
      {props.children}
    </ModalContext.Provider>
  );
};
