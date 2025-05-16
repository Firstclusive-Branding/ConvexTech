import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Navbar.css";
import logo2 from "../assets/ConvexTech Logo 2.png";

import sapSolutionsImg from "../assets/Navbar assets/sap-solutions-nav.png";
import softwareDevImg from "../assets/Navbar assets/software-development-nav.png";
import aiImg from "../assets/Navbar assets/artificial-intelligence-nav.png";
import dataScienceImg from "../assets/Navbar assets/data-science-nav.png";
import healthcareImg from "../assets/Navbar assets/healthcare-nav.png";
import nonItImg from "../assets/Navbar assets/non-it-nav.png";
import logoimg from "../assets/Navbar assets/logo.png";
import marketingimg from "../assets/Navbar assets/marketing.png";
import webdesignimg from "../assets/Navbar assets/web-design.png";
import ecommerceImg from "../assets/Navbar assets/ecommerce.png";
import bankingImg from "../assets/Navbar assets/banking.png";
import legalImg from "../assets/Navbar assets/legal.png";
import educationImg from "../assets/Navbar assets/education.png";
import telecomImg from "../assets/Navbar assets/telecom.png";
import { testValueType } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileTechSolutionsOpen, setIsMobileTechSolutionsOpen] =
    useState(false);
  const menuRef = useRef();
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredService, setHoveredService] = useState(softwareDevImg);

  const staffingSolutions = [
    {
      name: "Information Technology (IT)",
      path: "/staffing-solutions/it",
      img: softwareDevImg,
    },
    {
      name: "Non-IT & Core Industries",
      path: "/staffing-solutions/non-it",
      img: nonItImg,
    },
    {
      name: "Healthcare & Pharmaceuticals",
      path: "/staffing-solutions/healthcare",
      img: healthcareImg,
    },
    {
      name: "Retail & E-Commerce Sector",
      path: "/staffing-solutions/e-commerce",
      img: ecommerceImg,
    },
    {
      name: "Banking, Finance & Insurance",
      path: "/staffing-solutions/banking",
      img: bankingImg,
    },
    {
      name: "Education & EdTech Sector",
      path: "/staffing-solutions/education",
      img: educationImg,
    },
    {
      name: "Legal & Compliance Sector",
      path: "/staffing-solutions/legal",
      img: legalImg,
    },
    {
      name: "Telecom & Network Services",
      path: "/staffing-solutions/telecom",
      img: telecomImg,
    },
  ];

  const techSolutionsLinks = [
    {
      name: "SAP Consulting",
      path: "/tech-solutions/sap",
      img: sapSolutionsImg,
    },
    {
      name: "Artificial Intelligence",
      path: "/tech-solutions/ai",
      img: aiImg,
    },
    {
      name: "Data Science",
      path: "/tech-solutions/data-science",
      img: dataScienceImg,
    },
    {
      name: "Logo & Branding",
      path: "/tech-solutions/logo-and-branding",
      img: logoimg,
    },
    {
      name: "UI/UX & Web Design",
      path: "/tech-solutions/web-design",
      img: webdesignimg,
    },
    {
      name: "Web Development",
      path: "/tech-solutions/web-development",
      img: softwareDevImg,
    },
    {
      name: "E-Commerce Development",
      path: "/tech-solutions/e-commerce-development",
      img: ecommerceImg,
    },
    {
      name: "Digital Marketing",
      path: "/tech-solutions/digital-marketing",
      img: marketingimg,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) setIsMobileServicesOpen(false);
    if (!isMenuOpen) setIsMobileTechSolutionsOpen(false);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMenuOpen &&
        !menuRef.current?.contains(e.target) &&
        !document.getElementById("hamburger-toggle")?.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src={logo2}
            alt="ConvexTech Logo"
            className="navbar-logo-img-desktop"
          />
        </Link>

        <div className="navbar-links desktop-only">
          <Link
            to="/"
            className={`nav-item ${currentPath === "/" ? "active-link" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className={`nav-item ${
              currentPath === "/about-us" ? "active-link" : ""
            }`}
          >
            About Us
          </Link>

          <div className="dropdown-wrapper">
            <span
              className="nav-item"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Staffing Solutions
              <IoIosArrowDown
                className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
              />
              <div
                className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(false)}
              >
                <ul className="dropdown-links">
                  {staffingSolutions.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        onMouseEnter={() => setHoveredService(service.img)}
                        onMouseLeave={() => setHoveredService(softwareDevImg)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="dropdown-image">
                  <img
                    src={hoveredService}
                    key={hoveredService}
                    alt="Service Visual"
                    className="dropdown-img-transition"
                  />
                </div>
              </div>
            </span>
          </div>

          <div className="dropdown-wrapper">
            <span
              className="nav-item"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Tech Solutions
              <IoIosArrowDown
                className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
              />
              <div
                className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(false)}
              >
                <ul className="dropdown-links">
                  {techSolutionsLinks.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        onMouseEnter={() => setHoveredService(service.img)}
                        onMouseLeave={() => setHoveredService(sapSolutionsImg)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="dropdown-image">
                  <img
                    src={hoveredService}
                    key={hoveredService}
                    alt="Service Visual"
                    className="dropdown-img-transition"
                  />
                </div>
              </div>
            </span>
          </div>
          <Link
            to="/find-talent"
            className={`nav-item ${
              currentPath === "/find-talent" ? "active-link" : ""
            }`}
          >
            Find Talent
          </Link>
          <Link
            to="/find-jobs"
            className={`nav-item ${
              currentPath === "/find-jobs" ? "active-link" : ""
            }`}
          >
            Find Jobs
          </Link>
          <Link
            to="/project-enquiry"
            className={`nav-item ${
              currentPath === "/project-enquiry" ? "active-link" : ""
            }`}
          >
            Project Enquiry
          </Link>
        </div>

        <div id="hamburger-toggle" className="mobile-only">
          <label className="custom-hamburger">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </label>
        </div>

        <div className="nav-get-in-touch">
          <Link to="/contact-us" className="nav-get-in-touch-button">
            <span>GET IN TOUCH</span>
            <span className="nav-get-in-touch-icon">
              <BiSolidPhoneCall size={20} />
            </span>
          </Link>
        </div>
      </nav>

      {/* <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          ref={menuRef}
        >
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            About Us
          </Link>
          <div
            onClick={() => {
              setIsMobileTechSolutionsOpen(false);
              setIsMobileServicesOpen(!isMobileServicesOpen);
            }}
            className="mobile-menu-link"
            style={{ cursor: "pointer" }}
          >
            <span>Staffing Services</span>
            <IoIosArrowDown
              className={`dropdown-icon ${isMobileServicesOpen ? "open" : ""}`}
            />
          </div>
          <div
            className={`mobile-submenu ${isMobileServicesOpen ? "open" : ""}`}
          >
            <Link
              to="/staffing-services/sap"
              onClick={() => setIsMenuOpen(false)}
            >
              SAP Solutions
            </Link>
            <Link
              to="/staffing-services/software"
              onClick={() => setIsMenuOpen(false)}
            >
              Software Development
            </Link>
            <Link
              to="/staffing-services/ai"
              onClick={() => setIsMenuOpen(false)}
            >
              Artificial Intelligence
            </Link>
            <Link
              to="/staffing-services/data-science"
              onClick={() => setIsMenuOpen(false)}
            >
              Data Science
            </Link>
            <Link
              to="/staffing-services/branding"
              onClick={() => setIsMenuOpen(false)}
            >
              Branding & Marketing
            </Link>
            <Link
              to="/staffing-services/staffing"
              onClick={() => setIsMenuOpen(false)}
            >
              Staffing
            </Link>
            <Link
              to="/staffing-services/healthcare"
              onClick={() => setIsMenuOpen(false)}
            >
              Healthcare
            </Link>
            <Link
              to="/staffing-services/non-it"
              onClick={() => setIsMenuOpen(false)}
            >
              Non-IT Services
            </Link>
          </div>

          <div
            onClick={() => {
              setIsMobileServicesOpen(false);
              setIsMobileTechSolutionsOpen(!isMobileTechSolutionsOpen);
            }}
            className="mobile-menu-link"
            style={{ cursor: "pointer" }}
          >
            <span>Tech Solutions</span>
            <IoIosArrowDown
              className={`dropdown-icon ${
                isMobileTechSolutionsOpen ? "open" : ""
              }`}
            />
          </div>
          <div
            className={`mobile-submenu ${
              isMobileTechSolutionsOpen ? "open" : ""
            }`}
          >
            <Link
              to="/tech-solutions/logo"
              onClick={() => setIsMenuOpen(false)}
            >
              Logo
            </Link>
            <Link
              to="/tech-solutions/branding"
              onClick={() => setIsMenuOpen(false)}
            >
              Branding
            </Link>
            <Link
              to="/tech-solutions/marketing"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketing
            </Link>
            <Link
              to="/tech-solutions/websites"
              onClick={() => setIsMenuOpen(false)}
            >
              Websites
            </Link>
            <Link to="/tech-solutions/SAP" onClick={() => setIsMenuOpen(false)}>
              SAP
            </Link>
          </div>
          <Link
            to="/find-talent"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Find Talent
          </Link>
          <Link
            to="/find-jobs"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Find Jobs
          </Link>
          <Link
            to="/project-enquiry"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Project Enquiry
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Contact Us
          </Link>
        </div>
      </div> */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <div
          className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
          ref={menuRef}
        >
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            About Us
          </Link>

          {/* Staffing Solutions Toggle */}
          <div
            className="mobile-menu-link"
            onClick={() => {
              setIsMobileTechSolutionsOpen(false);
              setIsMobileServicesOpen(!isMobileServicesOpen);
            }}
          >
            <span>Staffing Solutions</span>
            <IoIosArrowDown
              className={`dropdown-icon ${isMobileServicesOpen ? "open" : ""}`}
            />
          </div>
          <div
            className={`mobile-submenu ${isMobileServicesOpen ? "open" : ""}`}
          >
            {staffingSolutions.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tech Solutions Toggle */}
          <div
            className="mobile-menu-link"
            onClick={() => {
              setIsMobileServicesOpen(false);
              setIsMobileTechSolutionsOpen(!isMobileTechSolutionsOpen);
            }}
          >
            <span>Tech Solutions</span>
            <IoIosArrowDown
              className={`dropdown-icon ${
                isMobileTechSolutionsOpen ? "open" : ""
              }`}
            />
          </div>
          <div
            className={`mobile-submenu ${
              isMobileTechSolutionsOpen ? "open" : ""
            }`}
          >
            {techSolutionsLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/find-talent"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Find Talent
          </Link>
          <Link
            to="/find-jobs"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Find Jobs
          </Link>
          <Link
            to="/project-enquiry"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Project Enquiry
          </Link>
          <Link
            to="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="mobile-menu-link"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
