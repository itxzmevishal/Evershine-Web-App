import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // remove this after github pages live link end
// import { BrowserRouter } from "react-router-dom"; -- enable when not use in github pages
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>  -- enable when not use in github pages

<HashRouter>
  <App />
</HashRouter>
);