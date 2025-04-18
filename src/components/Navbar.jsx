import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import "../styles/Navbar.css";
import "../styles/HamburgerIcon.css";
import logo from "../assets/ConvexTech Logo.png";
import logo2 from "../assets/ConvexTech Logo 2.png";
import navDropdownImg from "../assets/Navbar assets/nav-dropdown-img.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef();
  const hamburgerRef = useRef();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.25;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
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
            className={`nav-item ${currentPath === "/" ? "active-link" : ""} ${
              isScrolled ? "scrolled" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-item ${
              currentPath === "/about" ? "active-link" : ""
            } ${isScrolled ? "scrolled" : ""}`}
          >
            About
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
              <span className={`nav-item ${isScrolled ? "scrolled" : ""}`}>
                Services
              </span>
              <FiChevronDown size={20} className="dropdown-icon" />
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
            } ${isScrolled ? "scrolled" : ""}`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={`nav-item ${
              currentPath === "/contact" ? "active-link" : ""
            } ${isScrolled ? "scrolled" : ""}`}
          >
            Contact
          </Link>
        </div>

        <button
          ref={hamburgerRef}
          className={`hamburger hamburger--emphatic mobile-only ${
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

      {isMenuOpen && <div className="mobile-overlay"></div>}

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.1s" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.2s" }}
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.3s" }}
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          style={{ animationDelay: "0.4s" }}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
