import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

// Service Pages
import SAPSolutions from "./components/SAPSolutions";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import DataScience from "./components/DataScience";
import BrandingAndDigitalMarketing from "./components/BrandingAndDigitalMarketing";
import StaffingAndRecruitment from "./components/StaffingAndRecruitment";
import HealthcareAndClinical from "./components/HealthcareAndClinical";
import NonITServices from "./components/NonITServices";

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

      // Service Routes
      { path: "services/sap", element: <SAPSolutions /> },
      { path: "services/software", element: <SoftwareDevelopment /> },
      { path: "services/ai", element: <ArtificialIntelligence /> },
      { path: "services/data-science", element: <DataScience /> },
      { path: "services/branding", element: <BrandingAndDigitalMarketing /> },
      { path: "services/staffing", element: <StaffingAndRecruitment /> },
      { path: "services/healthcare", element: <HealthcareAndClinical /> },
      { path: "services/non-it", element: <NonITServices /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
