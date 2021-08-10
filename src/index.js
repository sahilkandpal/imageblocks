import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { QueryProvider } from "./context/queryContext";
import * as registerserviceWorker from "./registerserviceworker";
ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

registerserviceWorker.register();
