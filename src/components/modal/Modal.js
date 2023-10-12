import React, { useContext } from "react";
import "../../style/components/modal.scss";
import {
  MODAL_REDUCER_ACTIONS,
  ModalContext,
} from "../../context/ModalContext";

import { AiOutlineClose } from "react-icons/ai";

function Modal() {
  const { modalState, dispatch } = useContext(ModalContext);
  return (
    <div
      className={`modal-container ${!modalState.is_open ? "hidden" : "show"}`}
    >
      <div className="modal-content">
        <div className="header">
          Edit{" "}
          <AiOutlineClose
            onClick={() => {
              dispatch({ type: MODAL_REDUCER_ACTIONS.CLOSE_MODAL });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
