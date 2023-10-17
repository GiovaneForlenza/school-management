import React, { useContext } from "react";
import TableLine from "./table/TableLine";
import "../style/components/table.scss";
import TableHeader from "./table/TableHeader";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { COORDINATOR_TABLE_HEADER } from "../context/TablesContext";
import { SCHOOL_POSITION } from "../database/Staff";

function Table({ headers, data }) {
  const { userState } = useContext(LoggedInUserContext);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, id) => {
              return <TableHeader header={header} key={id} />;
            })}
            {userState.position === SCHOOL_POSITION.COORDINATOR ? (
              <TableHeader header={COORDINATOR_TABLE_HEADER} key={10} />
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((line, id) => {
            // if (line.status === CLASS_STATUS.ACTIVE)
            return <TableLine line={line} key={id} />;
          })}
        </tbody>
      </table>
      <div className="table-count-container">Total classes: {data.length}</div>
    </div>
  );
}

export default Table;
