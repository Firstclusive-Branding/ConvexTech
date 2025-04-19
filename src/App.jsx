import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "careers", element: <Careers /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
