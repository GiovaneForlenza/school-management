import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import "./style/App.css";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "./context/LoggedInUserContext";
import { DatabaseContext } from "./context/DatabaseContext";

function App() {
  const { state, dispatch } = useContext(LoggedInUserContext);
  const { createStaffDB } = useContext(DatabaseContext);
  useEffect(() => {
    createStaffDB();

    // HACK(Gionave): This is setting the ID to fetch the data from the DB, when doing login logic use this
    dispatch({ type: USER_REDUCER_ACTIONS.UPDATE_ID, payload: 2 });
  }, []);
  return <div className="App">{state.id ? <Home /> : <LogIn />}</div>;
}

export default App;
