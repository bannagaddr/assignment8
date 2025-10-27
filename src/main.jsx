import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// routing pages import
import App from "./App";
import InstalledApps from "../src/InstalledApps/InstalledApps";
import AllApplication from "./AllApplication/AllApplication";

const router = createBrowserRouter([
  {
    // by default showing it
    path: "/",
    Component: App,
  },
  {
    path: "/home",
    Component: App,
  },
  {
    path: "/all_application",
    Component: AllApplication,
  },
  {
    path: "/installed_apps",
    Component: InstalledApps,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
