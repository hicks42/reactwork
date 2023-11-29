import "./index.css";
import ReactDOM from "react-dom/client";
import { NoteManagerApp } from "./NoteManagerApp";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <NoteManagerApp />
  </StrictMode>
);
