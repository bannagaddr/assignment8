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
import HomePage from "./HomePage/HomePage";
import AppDetails from "./AppDetails/AppDetails";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import ErrorPage from "./ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    // by default showing it
    path: "/",
    element: <App></App>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/hero.io",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/all_application",
        loader: () => fetch("/appDetails.json"),
        element: <AllApplication></AllApplication>,
      },
      {
        path: "/installed_apps",
        element: <InstalledApps></InstalledApps>,
      },
      // app details router
      {
        path: "/app/:id",
        loader: () => fetch("/appDetails.json"),
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
