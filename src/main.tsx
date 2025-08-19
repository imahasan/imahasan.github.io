import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css"; // if you have custom CSS (e.g., .sidebar sticky)

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";                 // home page content (no sidebar inside!)
import AboutPage from "./pages/AboutPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,        // Sidebar + main area
    children: [
      { index: true, element: <App /> },        // renders at "#/"
      { path: "about", element: <AboutPage /> } // renders at "#/about"
    ],
  },
]);

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
