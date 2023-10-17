import React, { useContext, useState } from "react";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "../context/LoggedInUserContext";
import { STAFF } from "../database/Staff";

import "../style/pages/login.scss";

function LogIn() {
  const { userState, dispatch } = useContext(LoggedInUserContext);
  const [userId, setUserId] = useState(1);
  const workers = STAFF;

  function handleClick() {
    workers.map((worker) => {
      if (worker.id == userId) {
        dispatch({
          type: USER_REDUCER_ACTIONS.UPDATE_DATA,
          payload: {
            id: worker.id,
            name: worker.name,
            position: worker.position,
          },
        });
      }
    });
  }

  function handleChange(event) {
    setUserId(event.target.value);
  }

  return (
    <div className="log-in-container">
      <h1>Select the staff member</h1>
      <select onChange={(event) => handleChange(event)}>
        {workers.map((worker, id) => {
          return (
            <option key={id} value={worker.id}>
              {worker.name} | {worker.position}
            </option>
          );
        })}
      </select>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
}

export default LogIn;
