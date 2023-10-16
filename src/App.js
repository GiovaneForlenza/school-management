import { useContext, useEffect } from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import "./style/App.css";
import "./style/global.scss";
import {
  LoggedInUserContext,
  USER_REDUCER_ACTIONS,
} from "./context/LoggedInUserContext";
import { DatabaseContext } from "./context/DatabaseContext";

function App() {
  const { userState } = useContext(LoggedInUserContext);
  const { createInitialDBs } = useContext(DatabaseContext);
  useEffect(() => {
    createInitialDBs();
  }, []);
  return <div className="App">{userState.id ? <Home /> : <LogIn />}</div>;
}

export default App;
