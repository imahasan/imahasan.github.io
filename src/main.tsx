import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Sidebar + main area
    children: [
      { index: true, element: <App /> },           // renders at "#/"
      { path: "about", element: <AboutPage /> },   // renders at "#/about"
      { path: "experience", element: <ExperiencePage /> }, // renders at "#/experience"
      { path: "education", element: <EducationPage /> },
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
