import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";

import "../styles/Navbar.css";
import "../styles/HamburgerIcon.css";
import logo from "../assets/ConvexTech Logo.png";
import logo2 from "../assets/ConvexTech Logo 2.png";
import navDropdownImg from "../assets/Navbar assets/nav-dropdown-img.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const menuRef = useRef();
  const hamburgerRef = useRef();
  const navRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false); // close submenu if mobile menu closes
    }
  }, [isMenuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(e.target);
      const clickedOutsideHamburger =
        hamburgerRef.current && !hamburgerRef.current.contains(e.target);

      if (isMenuOpen && clickedOutsideMenu && clickedOutsideHamburger) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Close mobile-submenu on outside click
  useEffect(() => {
    const handleClickOutsideSubmenu = (e) => {
      const isInsideMenu = menuRef.current?.contains(e.target);
      if (!isInsideMenu) {
        setIsMobileServicesOpen(false);
      }
    };

    if (isMobileServicesOpen) {
      document.addEventListener("mousedown", handleClickOutsideSubmenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSubmenu);
    };
  }, [isMobileServicesOpen]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.25;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="ConvexTech Logo"
            className={`navbar-logo-img-mobile ${isScrolled ? "scrolled" : ""}`}
          />
          <img
            src={logo2}
            alt="ConvexTech Logo"
            className={`navbar-logo-img-desktop ${
              isScrolled ? "scrolled" : ""
            }`}
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

          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div
              className={`dropdown-trigger ${
                currentPath.startsWith("/services") ? "active-link" : ""
              } `}
            >
              <span className={`nav-item`}>
                Services
                <BsCaretDownFill
                  className={`dropdown-icon ${isDropdownOpen ? "open" : ""}`}
                />
              </span>
            </div>
            <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              <ul className="dropdown-links">
                <li>
                  <Link to="/services/sap">SAP Solutions</Link>
                </li>
                <li>
                  <Link to="/services/software">Software Development</Link>
                </li>
                <li>
                  <Link to="/services/ai">Artificial Intelligence</Link>
                </li>
                <li>
                  <Link to="/services/data-science">Data Science</Link>
                </li>
                <li>
                  <Link to="/services/branding">
                    Branding & Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/staffing">Staffing & Recruitment</Link>
                </li>
                <li>
                  <Link to="/services/healthcare">Healthcare & Clinical</Link>
                </li>
                <li>
                  <Link to="/services/non-it">Non-IT Services</Link>
                </li>
              </ul>
              <div className="dropdown-image">
                <img src={navDropdownImg} alt="Menu Showcase" />
              </div>
            </div>
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
            to="/contact"
            className={`nav-item ${
              currentPath === "/contact" ? "active-link" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          ref={hamburgerRef}
          className={`hamburger hamburger--collapse mobile-only ${
            isMenuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.1s" }}
          className="mobile-menu-link"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.2s" }}
          className="mobile-menu-link"
        >
          About
        </Link>

        <div
          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
          style={{ animationDelay: "0.3s", cursor: "pointer" }}
          className="mobile-menu-link"
        >
          <span>Services</span>
          <BsCaretDownFill
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
          style={{ animationDelay: "0.4s" }}
          className="mobile-menu-link"
        >
          Careers
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.4s" }}
          className="mobile-menu-link"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
