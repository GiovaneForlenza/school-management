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
  const { userState, dispatch } = useContext(LoggedInUserContext);
  const { createInitialDBs } = useContext(DatabaseContext);
  useEffect(() => {
    createInitialDBs();

    // HACK(Gionave): This is setting the ID to fetch the data from the DB, when doing login logic use this
    dispatch({ type: USER_REDUCER_ACTIONS.UPDATE_ID, payload: 1 });
  }, []);
  return <div className="App">{userState.id ? <Home /> : <LogIn />}</div>;
}

export default App;
