import React, { useContext } from "react";
import "../../style/components/table.scss";
import {
  SELECTED_CLASS_REDUCER_ACTIONS,
  SelectedClassContext,
} from "../../context/SelectedClassContext";

function TableLine({ line }) {
  const { dispatch, state } = useContext(SelectedClassContext);
  function handleClick() {
    dispatch({
      type: SELECTED_CLASS_REDUCER_ACTIONS.UPDATE_CLASS,
      payload: line,
    });
  }
  // TODO(Gionave): When clicking on a line, save the selected class code to a CONST, to later be used to fetch and edit data
  return (
    <tr
      onClick={handleClick}
      className={state.id === line.id ? "selected" : null}
    >
      <td>{line.name}</td>
      <td>{line.time}</td>
      <td>{line.numb_students}</td>
      <td>{line.lesson}</td>
      <td>{line.date_start}</td>
      <td>{line.date_end}</td>
      <td>{line.status}</td>
    </tr>
  );
}

export default TableLine;
