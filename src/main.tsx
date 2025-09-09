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
import PublicationsPage from "./pages/PublicationsPage";
import CertificationsPage from "./pages/CertificationsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, // Sidebar + main area
    children: [
      { index: true, element: <App /> },           // renders at "#/"
      { path: "about", element: <AboutPage /> },   
      { path: "experience", element: <ExperiencePage /> },
      { path: "education", element: <EducationPage /> },
      { path: "publications", element: <PublicationsPage /> },
      { path: "certifications", element: <CertificationsPage /> },
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
