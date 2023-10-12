import React, { useContext, useEffect } from "react";
import "../style/screes/classes.scss";
import Table from "../components/Table";
import { DatabaseContext } from "../context/DatabaseContext";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "../context/LoggedInUserContext";
import { CLASSES_TABLE_HEADER } from "../context/TablesContext";
import TableActions from "../components/table/TableActions";

function Classes() {
  const { state, dispatch } = useContext(LoggedInUserContext);
  const { getClassesDataFromStaffId } = useContext(DatabaseContext);

  function getClassesData() {
    return getClassesDataFromStaffId(state.id);
  }

  useEffect(() => {
    const data = getClassesData();
    if (data) {
      dispatch({ type: USER_REDUCER_ACTIONS.UPDATE_CLASSES, payload: data });
    }
  }, []);

  return (
    <div className="classes-container">
      <div className="tabs-container">a</div>
      <div className="content-container">
        <div className="left">
          {state.classes ? (
            <Table headers={CLASSES_TABLE_HEADER} data={state.classes} />
          ) : null}
        </div>
        <div className="right">
          <TableActions />
        </div>
      </div>
    </div>
  );
}

export default Classes;