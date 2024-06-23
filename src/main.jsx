import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <section className="2xl:container mx-auto">
        <RouterProvider router={router} />
      </section>
    </HelmetProvider>
  </React.StrictMode>
);
