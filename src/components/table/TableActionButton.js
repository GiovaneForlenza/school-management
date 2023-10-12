import React, { useContext } from "react";
import { SelectedClassContext } from "../../context/SelectedClassContext";
import Modal, { isModalOpen } from "../modal/Modal";
import {
  MODAL_REDUCER_ACTIONS,
  ModalContext,
} from "../../context/ModalContext";

function TableActionButton({ text }) {
  const { classState } = useContext(SelectedClassContext);
  const { dispatch } = useContext(ModalContext);

  function handleClick(click) {
    if (classState.id !== null) {
      dispatch({ type: MODAL_REDUCER_ACTIONS.OPEN_MODAL });
    }
  }
  return (
    <div
      className={`action ${classState.id === null ? "disabled" : null}`}
      onClick={() => {
        handleClick(text);
      }}
    >
      {text}
    </div>
  );
}

export default TableActionButton;
