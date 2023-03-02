import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.createRoot(
//   document.getElementById("root").render(
//     <React.StrictMode>
//       <Home />
//     </React.StrictMode>,
//     document.getElementById("root")
//   )
// )