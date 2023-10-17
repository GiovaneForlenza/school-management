import React, { useContext } from "react";
import "../../style/components/modal.scss";
import {
  MODAL_REDUCER_ACTIONS,
  ModalContext,
} from "../../context/ModalContext";

import { AiOutlineClose } from "react-icons/ai";
import { SelectedClassContext } from "../../context/SelectedClassContext";
import ModalTabs from "./ModalTabs";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import { SCHOOL_POSITION, STAFF } from "../../database/Staff";

function Modal() {
  const { modalState, dispatch } = useContext(ModalContext);
  const { classState } = useContext(SelectedClassContext);
  const { userState } = useContext(LoggedInUserContext);
  return (
    <div
      className={`modal-container ${!modalState.is_open ? "hidden" : "show"}`}
    >
      <div className="modal-content">
        <div className="header">
          <div className="">
            More info: {classState.name} {classState.code}
          </div>
          <div className="clickable-button">
            <AiOutlineClose
              onClick={() => {
                dispatch({ type: MODAL_REDUCER_ACTIONS.CLOSE_MODAL });
              }}
            />
          </div>
        </div>
        <div className="content">
          <div className="class-info">
            <div className="line">
              <div>Code: {classState.code}</div>
              <div>Name: {classState.name}</div>
              <div>Start date: {classState.date_start}</div>
              <div>End date: {classState.date_end}</div>
            </div>
            <div className="line">
              <div>Time: {classState.time}</div>
              <div>Status: {classState.status}</div>
              <div>Lesson: {classState.lesson}</div>
              <div>Students: {classState.numb_students}</div>
              {userState.position === SCHOOL_POSITION.COORDINATOR ? (
                <div>
                  Teacher:{" "}
                  {
                    STAFF.filter((staff) => staff.id === classState.teacher)[0]
                      .name
                  }
                </div>
              ) : null}
            </div>
          </div>
          <div className="modal-tables">
            <ModalTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
