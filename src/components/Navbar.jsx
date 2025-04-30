import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Navbar.css";
import logo from "../assets/ConvexTech Logo.png";
import logo2 from "../assets/ConvexTech Logo 2.png";

import sapSolutionsImg from "../assets/Navbar assets/sap-solutions-nav.png";
import softwareDevImg from "../assets/Navbar assets/software-development-nav.png";
import aiImg from "../assets/Navbar assets/artificial-intelligence-nav.png";
import dataScienceImg from "../assets/Navbar assets/data-science-nav.png";
import brandingImg from "../assets/Navbar assets/branding-nav.png";
import staffingImg from "../assets/Navbar assets/staffing-nav.png";
import healthcareImg from "../assets/Navbar assets/healthcare-nav.png";
import nonItImg from "../assets/Navbar assets/non-it-nav.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredService, setHoveredService] = useState(sapSolutionsImg);

  const serviceLinks = [
    {
      name: "SAP Solutions",
      path: "/services/sap",
      img: sapSolutionsImg,
    },
    {
      name: "Software Development",
      path: "/services/software",
      img: softwareDevImg,
    },
    {
      name: "Artificial Intelligence",
      path: "/services/ai",
      img: aiImg,
    },
    {
      name: "Data Science",
      path: "/services/data-science",
      img: dataScienceImg,
    },
    {
      name: "Branding & Digital Marketing",
      path: "/services/branding",
      img: brandingImg,
    },
    {
      name: "Staffing & Recruitment",
      path: "/services/staffing",
      img: staffingImg,
    },
    {
      name: "Healthcare & Clinical",
      path: "/services/healthcare",
      img: healthcareImg,
    },
    {
      name: "Non-IT Services",
      path: "/services/non-it",
      img: nonItImg,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) setIsMobileServicesOpen(false);
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
            src={logo}
            alt="ConvexTech Logo"
            className="navbar-logo-img-mobile"
          />
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
              className={`nav-item ${
                currentPath.startsWith("/services") ? "active-link" : ""
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Services
              <IoIosArrowDown
                className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
              />
              <div
                className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(false)}
              >
                <ul className="dropdown-links">
                  {serviceLinks.map((service, index) => (
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
            to="/careers"
            className={`nav-item ${
              currentPath === "/careers" ? "active-link" : ""
            }`}
          >
            Careers
          </Link>
          <Link
            to="/contact-us"
            className={`nav-item ${
              currentPath === "/contact-us" ? "active-link" : ""
            }`}
          >
            Contact
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

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
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
          About
        </Link>
        <div
          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          className="mobile-menu-link"
          style={{ cursor: "pointer" }}
        >
          <span>Services</span>
          <IoIosArrowDown
            className={`dropdown-icon ${isMobileServicesOpen ? "open" : ""}`}
          />
        </div>
        <div className={`mobile-submenu ${isMobileServicesOpen ? "open" : ""}`}>
          <Link to="/services/sap" onClick={() => setIsMenuOpen(false)}>
            SAP Solutions
          </Link>
          <Link to="/services/software" onClick={() => setIsMenuOpen(false)}>
            Software Development
          </Link>
          <Link to="/services/ai" onClick={() => setIsMenuOpen(false)}>
            Artificial Intelligence
          </Link>
          <Link
            to="/services/data-science"
            onClick={() => setIsMenuOpen(false)}
          >
            Data Science
          </Link>
          <Link to="/services/branding" onClick={() => setIsMenuOpen(false)}>
            Branding & Marketing
          </Link>
          <Link to="/services/staffing" onClick={() => setIsMenuOpen(false)}>
            Staffing
          </Link>
          <Link to="/services/healthcare" onClick={() => setIsMenuOpen(false)}>
            Healthcare
          </Link>
          <Link to="/services/non-it" onClick={() => setIsMenuOpen(false)}>
            Non-IT Services
          </Link>
        </div>
        <Link
          to="/careers"
          onClick={() => setIsMenuOpen(false)}
          className="mobile-menu-link"
        >
          Careers
        </Link>
        <Link
          to="/contact-us"
          onClick={() => setIsMenuOpen(false)}
          className="mobile-menu-link"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
