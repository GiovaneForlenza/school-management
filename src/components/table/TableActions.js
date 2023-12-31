import React, { useContext } from "react";
import { SelectedClassContext } from "../../context/SelectedClassContext";
import "../../style/components/table-actions.scss";
import TableActionButton from "./TableActionButton";

function TableActions() {
  // TODO(Gionave): Make the BTNs disabled until you click on a class, then allow the actions to happen
  return (
    <div className="table-actions-container">
      <div className="header">Actions</div>
      <div className="actions">
        <TableActionButton text={"More info"} />
      </div>
    </div>
  );
}

export default TableActions;
