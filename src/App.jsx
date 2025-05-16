import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toastifyCustom.css";

// Main Site Pages
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
import JobApply from "./components/JobApply";
import ProjectEnquiry from "./components/ProjectEnquiry";

// Services
import SAPSolutions from "./components/SAPSolutions";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import DataScience from "./components/DataScience";
import BrandingAndDigitalMarketing from "./components/BrandingAndDigitalMarketing";
import StaffingAndRecruitment from "./components/StaffingAndRecruitment";
import HealthcareAndClinical from "./components/HealthcareAndClinical";
import NonITServices from "./components/NonITServices";

// Tech Solutions
import TSLogoBranding from "./components/TSLogoBranding";
import TSWebDesign from "./components/TSWebDesign";
import TSWebDevelopment from "./components/TSWebDevelopment";
import TSDigitalMarketing from "./components/TSDigitalMarketing";
import TSSAP from "./components/TSSAP";

// Admin Pages
import AdminLogin from "./Admin/components/AdminLogin";
import AdminLayout from "./Admin/components/AdminLayout";
import AdminDashboard from "./Admin/components/AdminDashboard";
import ManageJobs from "./Admin/components/ManageJobs";
import ManageJobApplicants from "./Admin/components/ManageJobApplicants";
import AdminUsers from "./Admin/components/AdminUsers";
import ContactForms from "./Admin/components/ContactForms";
import RecruiterForm from "./Admin/components/RecruiterForm";
import ForgotPassword from "./Admin/components/ForgotPassword";
import AdminSignup from "./Admin/components/AdminSignup";
import ManageProjectEnquiry from "./Admin/components/ManageProjectEnquiry";

// Route Protection
const ProtectedRoute = ({ element, roleKey }) => {
  const isAuthenticated = localStorage.getItem(roleKey) === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/admin", { replace: true });
  }, [isAuthenticated]);

  return isAuthenticated ? (
    element
  ) : (
    <div className="loading-screen">Loading...</div>
  );
};

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

      // Tech Solutions Routes
      { path: "tech-solutions/logo-and-branding", element: <TSLogoBranding /> },
      { path: "tech-solutions/web-design", element: <TSWebDesign /> },
      {
        path: "tech-solutions/digital-marketing",
        element: <TSDigitalMarketing />,
      },
      { path: "tech-solutions/web-development", element: <TSWebDevelopment /> },
      { path: "tech-solutions/sap", element: <TSSAP /> },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, element: <AdminLogin /> },
      { path: "sign-up", element: <AdminSignup /> },
      { path: "password-reset", element: <ForgotPassword /> },
      { path: "*", element: <Navigate to="/admin" replace /> },
      {
        element: <AdminLayout />,
        children: [
          {
            path: "admin-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="adminAuthenticated"
              />
            ),
          },
          {
            path: "manager-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="managerAuthenticated"
              />
            ),
          },
          {
            path: "recruiter-dashboard",
            element: (
              <ProtectedRoute
                element={<AdminDashboard />}
                roleKey="recruiterAuthenticated"
              />
            ),
          },

          {
            path: "users",
            element: (
              <ProtectedRoute
                element={
                  <AdminUsers
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },

          {
            path: "jobs",
            element: (
              <ProtectedRoute
                element={
                  <ManageJobs
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },
          {
            path: "project-enquiries",
            element: (
              <ProtectedRoute
                element={<ManageProjectEnquiry />}
                roleKey="adminAuthenticated"
              />
            ),
          },

          {
            path: "job-applicants",
            element: (
              <ProtectedRoute
                element={
                  <ManageJobApplicants
                    role={
                      localStorage.getItem("adminAuthenticated") === "true"
                        ? "Admin"
                        : localStorage.getItem("managerAuthenticated") ===
                          "true"
                        ? "manager"
                        : "recruiter"
                    }
                  />
                }
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : localStorage.getItem("managerAuthenticated") === "true"
                    ? "managerAuthenticated"
                    : "recruiterAuthenticated"
                }
              />
            ),
          },

          // Recruiter Forms - Admin & Manager only
          {
            path: "recruiter-forms",
            element: (
              <ProtectedRoute
                element={<RecruiterForm />}
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : "managerAuthenticated"
                }
              />
            ),
          },

          // Contact Forms - Admin & Manager only
          {
            path: "contact-forms",
            element: (
              <ProtectedRoute
                element={<ContactForms />}
                roleKey={
                  localStorage.getItem("adminAuthenticated") === "true"
                    ? "adminAuthenticated"
                    : "managerAuthenticated"
                }
              />
            ),
          },
        ],
      },
    ],
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover={false}
      theme="colored"
    />
  </>
);
export default App;
