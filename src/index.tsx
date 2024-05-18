import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById("root");

// webpackでバンドルするときに、containerのnullチェックをする必要があったので修正
if (container) {
  const root = container.hasChildNodes()
    ? hydrateRoot(container, <App />)
    : createRoot(container);
  root.render(<App />);
} else {
  console.error("Root container not found");
}
