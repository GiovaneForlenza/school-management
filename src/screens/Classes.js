import React, { useContext, useEffect } from "react";
import "../style/screes/classes.scss";
import Table from "../components/Table";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { CLASSES_TABLE_HEADER } from "../context/TablesContext";
import TableActions from "../components/table/TableActions";
import Modal from "../components/modal/Modal";
import { classes } from "../database/Classes";
import { SCHOOL_POSITION } from "../database/Staff";
import { ModalContext } from "../context/ModalContext";

function Classes() {
  const { userState } = useContext(LoggedInUserContext);
  const { modalState } = useContext(ModalContext);
  let classesList = [];

  function getClassesData() {
    if (userState.position === SCHOOL_POSITION.TEACHER)
      classesList = classes.filter((clas) => clas.teacher === userState.id);
    else classesList = classes;
  }
  getClassesData();

  return (
    <div className="classes-container">
      {/* <div className="tabs-container">a</div> */}
      <div className="content-container">
        {/* // TODO(Gionave): Create a check to see if the user is Coordinator, if so, show all the active classes, and their teachers */}
        {classesList.length > 0 ? (
          <>
            <div className="left">
              <Table headers={CLASSES_TABLE_HEADER} data={classesList} />
            </div>
            <div className="right">
              <TableActions />
            </div>
          </>
        ) : (
          <h1>You don't have any active classes at the moment</h1>
        )}
        {modalState.is_open ? <Modal /> : null}
      </div>
    </div>
  );
}

export default Classes;
