import React, { useContext } from "react";
import { SelectedClassContext } from "../../context/SelectedClassContext";

function TableActionButton({ text }) {
  const { state } = useContext(SelectedClassContext);
  return (
    <div className={`action ${state.id === null ? "disabled" : null}`}>
      {text}
    </div>
  );
}

export default TableActionButton;
