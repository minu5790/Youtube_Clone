import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./services/youtube";

const api_key =process.env.REACT_APP_API_KEY;
const youtube = new Youtube(api_key);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById("root")
);
