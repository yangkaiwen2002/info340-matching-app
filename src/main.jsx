import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router"; // Import here
import App from "./App";
import "./css/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);