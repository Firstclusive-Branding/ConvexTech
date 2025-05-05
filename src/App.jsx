import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import FindTalent from "./components/FindTalent";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./components/JobDetails";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPage from "./components/PrivacyPage";

// Staffing Service Pages
import SAPSolutions from "./components/SAPSolutions";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import DataScience from "./components/DataScience";
import BrandingAndDigitalMarketing from "./components/BrandingAndDigitalMarketing";
import StaffingAndRecruitment from "./components/StaffingAndRecruitment";
import HealthcareAndClinical from "./components/HealthcareAndClinical";
import NonITServices from "./components/NonITServices";
import JobApply from "./components/JobApply";
import ProjectEnquiry from "./components/ProjectEnquiry";

//Tech Solutions Pages
import TSLogo from "./components/TSLogo";
import TSBranding from "./components/TSBranding";
import TSMarketing from "./components/TSMarketing";
import TSWebsites from "./components/TSWebsites";
import TSSAP from "./components/TSSAP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "find-jobs", element: <Careers /> },
      { path: "find-talent", element: <FindTalent /> },
      { path: "job/:title/:id", element: <JobDetails /> },
      { path: "job/:title/:id/apply", element: <JobApply /> },
      { path: "project-enquiry", element: <ProjectEnquiry /> },
      { path: "contact-us", element: <Contact /> },
      { path: "terms-and-conditions", element: <TermsAndCondition /> },
      { path: "privacy-policy", element: <PrivacyPage /> },

      // Service Routes
      { path: "staffing-services/sap", element: <SAPSolutions /> },
      {
        path: "staffing-services/software-development",
        element: <SoftwareDevelopment />,
      },
      { path: "staffing-services/ai", element: <ArtificialIntelligence /> },
      { path: "staffing-services/data-science", element: <DataScience /> },
      {
        path: "staffing-services/branding",
        element: <BrandingAndDigitalMarketing />,
      },
      {
        path: "staffing-services/staffing",
        element: <StaffingAndRecruitment />,
      },
      {
        path: "staffing-services/healthcare",
        element: <HealthcareAndClinical />,
      },
      { path: "staffing-services/non-it", element: <NonITServices /> },
      { path: "tech-solutions/logo", element: <TSLogo /> },
      { path: "tech-solutions/branding", element: <TSBranding /> },
      { path: "tech-solutions/marketing", element: <TSMarketing /> },
      { path: "tech-solutions/websites", element: <TSWebsites /> },
      { path: "tech-solutions/sap", element: <TSSAP /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
