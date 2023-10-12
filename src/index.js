import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DatabaseContextProvider } from "./context/DatabaseContext";
import { LoggedInUserContextProvider } from "./context/LoggedInUserContext";
import { SelectedClassContextProvider } from "./context/SelectedClassContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DatabaseContextProvider>
      <LoggedInUserContextProvider>
        <SelectedClassContextProvider>
          <App />
        </SelectedClassContextProvider>
      </LoggedInUserContextProvider>
    </DatabaseContextProvider>
  </React.StrictMode>
);

reportWebVitals();
