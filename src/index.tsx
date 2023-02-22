import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HttpServiceProvider } from "@/modules/Http";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HttpServiceProvider>
      <App />
    </HttpServiceProvider>
  </React.StrictMode>
);
