import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import Home from "./components/home/home";
 
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
