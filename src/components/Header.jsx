import React from "react";
import "../styles/Header.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <span>
          <a href="mailto:info@convextech.com">
            <FaEnvelope />
            info@convextech.com
          </a>
        </span>
        <span>
          <FaMapMarkerAlt /> 2743 Pearland, TX 77584
        </span>
        <span>
          <a href="tel:+13463671777">
            <FaPhoneAlt />
            +1 346 367 1777
          </a>
        </span>
      </div>

      <div className="header-right">
        <a href="#" className="social-link">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="#" className="social-link">
          <FaXTwitter className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/convextech/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/convextech19/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
