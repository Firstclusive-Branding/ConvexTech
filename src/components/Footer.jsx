import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiCheckCircle,
  FiCpu,
  FiSettings,
  FiDatabase,
  FiActivity,
  FiBriefcase,
  FiUserCheck,
  FiFacebook,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

import logo2 from "../assets/ConvexTech Logo white.png";
import footerBg from "../assets/Footer Assets/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="footer-wrapper">
        <motion.div
          className="newsletter-container"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <div className="newsletter-box">
            <h4>Subscribe to Our Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>

        <div className="footer-top">
          {/* Services Section */}
          <motion.div
            className="footer-brand"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
          >
            <Link to="/">
              <img src={logo2} alt="ConvexTech Logo" className="footer-logo" />
            </Link>
            <h3>Our Services</h3>
            <ul className="footer-services">
              <li>
                <FiCheckCircle /> <Link to="/services/sap">SAP Solutions</Link>
              </li>
              <li>
                <FiSettings />{" "}
                <Link to="/services/software">Software Development</Link>
              </li>
              <li>
                <FiCpu /> <Link to="/services/ai">Artificial Intelligence</Link>
              </li>
              <li>
                <FiDatabase />{" "}
                <Link to="/services/data-science">Data Science</Link>
              </li>
              <li>
                <FiActivity />{" "}
                <Link to="/services/branding">
                  Branding & Digital Marketing
                </Link>
              </li>
              <li>
                <FiUserCheck />{" "}
                <Link to="/services/healthcare">Healthcare & Clinical</Link>
              </li>
              <li>
                <FiBriefcase />{" "}
                <Link to="/services/non-it">Non-IT Services</Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            className="footer-columns"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
          >
            {/* United States Office */}
            <div className="footer-office">
              <h3>United States</h3>
              <h5>Texas</h5>
              <div className="footer-office-details">
                <p>
                  <FiPhone /> <a href="tel:+13463671777">+1 346 367 1777</a>
                </p>
                <p>
                  <FiMail />{" "}
                  <a href="mailto:info@convextech.com">info@convextech.com</a>
                </p>
                <p>
                  <FiMapPin /> 11200 Broadway Suite
                  <br />
                  2743 Pearland, TX 77584
                </p>
              </div>
            </div>

            {/* Hyderabad Office */}
            <div className="footer-office">
              <h3>India</h3>
              <h5>Hyderabad</h5>
              <div className="footer-office-details">
                <p>
                  <FiPhone />{" "}
                  <a href="tel:+914029994717">+91 (040) 2999 4717</a>
                </p>
                <p>
                  <FiMail />{" "}
                  <a href="mailto:info@convextech.com">info@convextech.com</a>
                </p>
                <p>
                  <FiMapPin /> 115A, First Floor, Downtown Mall,
                  <br />
                  Beside Lotus Hospital, Lakdikapul,
                  <br />
                  Hyderabad 500-004
                </p>
              </div>
            </div>

            {/* Noida Office */}
            <div className="footer-office">
              <h3>India</h3>
              <h5>Noida</h5>
              <div className="footer-office-details">
                <p>
                  <FiPhone />{" "}
                  <a href="tel:+914029994717">+91 (040) 2999 4717</a>
                </p>
                <p>
                  <FiMail />{" "}
                  <a href="mailto:info@convextech.com">info@convextech.com</a>
                </p>
                <p>
                  <FiMapPin /> Jav Tower H17 2nd Floor,
                  <br />
                  S-01 Sector 63 Noida 201301
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-social">
            <p>Follow us on</p>
            <a
              href="https://www.linkedin.com/company/convextech/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/convextech19/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={20} />
            </a>
            <a href="#">
              <FiFacebook size={20} />
            </a>
            <a href="#">
              <BsTwitterX size={20} />
            </a>
          </div>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Unsubscribe</a>
          </div>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="footer-attribution">
        <div className="footer-footer">
          <p>Powered by ConvexTech © 2011 - 2025.</p>
          <div>
            <a href="/terms-and-condition">Terms and Condition</a> |{" "}
            <a href="/privacy-policy">Privacy Policy</a> |
            <a href="#">Unsubscribe</a>
          </div>
        </div>
        <div>
          <p>
            Made with{" "}
            <FaHeart style={{ color: "#3ed4ef", verticalAlign: "middle" }} /> by{" "}
            <a href="https://firstclusive.com" target="_blank" rel="noreferrer">
              Firstclusive
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
