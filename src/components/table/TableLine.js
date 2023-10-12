import React from "react";
import "../../style/components/table.scss";

function TableLine({ line }) {
  // TODO(Gionave): When clicking on a line, save the selected class code to a CONST, to later be used to fetch and edit data
  return (
    <tr>
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
