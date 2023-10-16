import React, { useContext, useEffect } from "react";
import "../style/screes/classes.scss";
import Table from "../components/Table";
import { DatabaseContext } from "../context/DatabaseContext";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { CLASSES_TABLE_HEADER } from "../context/TablesContext";
import TableActions from "../components/table/TableActions";
import Modal from "../components/modal/Modal";
import { classes } from "../database/Classes";

function Classes() {
  const { userState } = useContext(LoggedInUserContext);
  let classesList = [];

  function getClassesData() {
    classesList = classes.filter((clas) => clas.teacher === userState.id);
  }
  getClassesData();

  return (
    <div className="classes-container">
      <div className="tabs-container">a</div>
      <div className="content-container">
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
        <Modal />
      </div>
    </div>
  );
}

export default Classes;
