import React from "react";
import TableLine from "./table/TableLine";
import "../style/components/table.scss";
import TableHeader from "./table/TableHeader";

function Table({ headers, data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, id) => {
              return <TableHeader header={header} key={id} />;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((line, id) => {
            return <TableLine line={line} key={id} />;
          })}
        </tbody>
      </table>
      <div className="table-count-container">Total classes: {data.length}</div>
    </div>
  );
}

export default Table;
