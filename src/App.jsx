import React, { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toastifyCustom.css";

/* ---------- Public Pages ---------- */
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Careers from "./components/Careers";
import FindTalent from "./components/FindTalent";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import JobDetails from "./components/JobDetails";
import JobApply from "./components/JobApply";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPage from "./components/PrivacyPage";
import ProjectEnquiry from "./components/ProjectEnquiry";

/* ---------- Staffing Services ---------- */
import StaffingSolutionsPage from "./components/Staffing Solutions/StaffingSolutionsPage";
import ITServices from "./components/Staffing Solutions/ITServices";
import NonITServices from "./components/Staffing Solutions/NonITServices";
import HealthcareAndClinical from "./components/Staffing Solutions/HealthcareAndClinical";
import Ecommerce from "./components/Staffing Solutions/Ecommerce";
import Banking from "./components/Staffing Solutions/Banking";
import Education from "./components/Staffing Solutions/Education";
import Legal from "./components/Staffing Solutions/Legal";
import Telecom from "./components/Staffing Solutions/Telecom";

/* ---------- Tech Solutions ---------- */
import TechSolutionPage from "./components/Tech Solutions/TechSolutionPage";
import TSSAP from "./components/Tech Solutions/TSSAP";
import ArtificialIntelligence from "./components/Tech Solutions/ArtificialIntelligence";
import DataScience from "./components/Tech Solutions/DataScience";
import TSLogoBranding from "./components/Tech Solutions/TSLogoBranding";
import TSWebDesign from "./components/Tech Solutions/TSWebDesign";
import TSWebDevelopment from "./components/Tech Solutions/TSWebDevelopment";
import TSEcommerce from "./components/Tech Solutions/TSEcommerce";
import TSDigitalMarketing from "./components/Tech Solutions/TSDigitalMarketing";

/* ---------- Admin Pages ---------- */
import AdminLogin from "./Admin/components/AdminLogin";
import AdminSignup from "./Admin/components/AdminSignup";
import ForgotPassword from "./Admin/components/ForgotPassword";
import AdminLayout from "./Admin/components/AdminLayout";
import AdminDashboard from "./Admin/components/AdminDashboard";
import ManageJobs from "./Admin/components/ManageJobs";
import ManageJobApplicants from "./Admin/components/ManageJobApplicants";
import AdminUsers from "./Admin/components/AdminUsers";
import ContactForms from "./Admin/components/ContactForms";
import RecruiterForm from "./Admin/components/RecruiterForm";
import ManageProjectEnquiry from "./Admin/components/ManageProjectEnquiry";
import ManageTerms from "./Admin/components/ManageTerms";
import ManagePolicies from "./Admin/components/ManagePolicies";

/* ---------- Route Protection ---------- */
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

/* ---------- Router Setup ---------- */
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

      /* ---------- Staffing Solutions Pages ---------- */
      { path: "staffing-solutions", element: <StaffingSolutionsPage /> },
      { path: "staffing-solutions/it", element: <ITServices /> },
      { path: "staffing-solutions/non-it", element: <NonITServices /> },
      {
        path: "staffing-solutions/healthcare",
        element: <HealthcareAndClinical />,
      },
      { path: "staffing-solutions/e-commerce", element: <Ecommerce /> },
      { path: "staffing-solutions/banking", element: <Banking /> },
      { path: "staffing-solutions/education", element: <Education /> },
      { path: "staffing-solutions/legal", element: <Legal /> },
      { path: "staffing-solutions/telecom", element: <Telecom /> },

      // ---------- Extra Staffing Routes ----------
      // { path: "staffing-solutions/sap", element: <SAPSolutions /> },
      // { path: "staffing-solutions/software-development", element: <SoftwareDevelopment /> },
      // { path: "staffing-solutions/ai", element: <ArtificialIntelligence /> },
      // { path: "staffing-solutions/data-science", element: <DataScience /> },
      // { path: "staffing-solutions/branding", element: <BrandingAndDigitalMarketing /> },
      // { path: "staffing-solutions/staffing", element: <StaffingAndRecruitment /> },

      /* ---------- Tech Solutions Pages ---------- */
      { path: "tech-solutions", element: <TechSolutionPage /> },
      { path: "tech-solutions/sap", element: <TSSAP /> },
      { path: "tech-solutions/ai", element: <ArtificialIntelligence /> },
      { path: "tech-solutions/data-science", element: <DataScience /> },
      { path: "tech-solutions/logo-and-branding", element: <TSLogoBranding /> },
      { path: "tech-solutions/web-design", element: <TSWebDesign /> },
      { path: "tech-solutions/web-development", element: <TSWebDevelopment /> },
      {
        path: "tech-solutions/e-commerce-development",
        element: <TSEcommerce />,
      },
      {
        path: "tech-solutions/digital-marketing",
        element: <TSDigitalMarketing />,
      },
    ],
  },

  /* ---------- Admin Routes ---------- */
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

          {
            path: "manage-terms",
            element: (
              <ProtectedRoute
                element={<ManageTerms />}
                roleKey="adminAuthenticated"
              />
            ),
          },

          {
            path: "manage-policies",
            element: (
              <ProtectedRoute
                element={<ManagePolicies />}
                roleKey="adminAuthenticated"
              />
            ),
          },
        ],
      },
    ],
  },
]);

/* ---------- App Component ---------- */
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
