import React, { useContext } from "react";
import { students } from "../../database/Students";

import { SelectedClassContext } from "../../context/SelectedClassContext";

function ModalTabs() {
  const { classState } = useContext(SelectedClassContext);
  return (
    <div className="tabs">
      <input
        className="input"
        name="tabs"
        type="radio"
        id="tab-1"
        defaultChecked={true}
      />
      <label className="label" htmlFor="tab-1">
        Enrolled Students
      </label>
      <div className="panel">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date Enrolled</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, id) => {
                if (student.enrolled_courses === classState.id) {
                  return (
                    <tr key={id}>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.date_enrolled}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModalTabs;
