import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const container = document.getElementById("root");
const root = createRoot(container);
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

root.render(app);
