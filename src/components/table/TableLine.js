import React, { useContext } from "react";
import "../../style/components/table.scss";
import {
  SELECTED_CLASS_REDUCER_ACTIONS,
  SelectedClassContext,
} from "../../context/SelectedClassContext";
import { SCHOOL_POSITION, STAFF } from "../../database/Staff";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

function TableLine({ line }) {
  const { dispatch, classState } = useContext(SelectedClassContext);
  const { userState } = useContext(LoggedInUserContext);

  function handleClick() {
    dispatch({
      type: SELECTED_CLASS_REDUCER_ACTIONS.UPDATE_CLASS,
      payload: line,
    });
  }
  return (
    <tr
      onClick={handleClick}
      className={classState.id === line.id ? "selected" : null}
    >
      <td>{line.name}</td>
      <td>{line.time}</td>
      <td>{line.numb_students}</td>
      <td>{line.lesson}</td>
      <td>{line.date_start}</td>
      <td>{line.date_end}</td>
      <td>{line.status}</td>
      {userState.position === SCHOOL_POSITION.COORDINATOR ? (
        <td>{STAFF.filter((staff) => staff.id === line.teacher)[0].name}</td>
      ) : null}
    </tr>
  );
}

export default TableLine;
