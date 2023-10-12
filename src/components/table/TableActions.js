import React from "react";

import "../../style/components/table-actions.scss";

function TableActions() {
  // TODO(Gionave): Make the BTNs disabled until you click on a class, then allow the actions to happen
  return (
    <div className="table-actions-container">
      <div className="header">Actions</div>
      <div className="actions">
        <div className="action">Edit</div>
        <div className="action">Class' Schedule</div>
        <div className="action">Diary</div>
        <div className="action">Grades</div>
        <div className="action">See students</div>
      </div>
    </div>
  );
}

export default TableActions;
