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
  FiTool,
  FiSettings,
  FiDatabase,
  FiActivity,
  FiBriefcase,
  FiUserCheck,
  FiFacebook,
  FiShoppingCart,
  FiCreditCard,
  FiBookOpen,
  FiShield,
  FiWifi,
} from "react-icons/fi";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

import logo2 from "../assets/ConvexTech Logo white.png";
import footerBg from "../assets/Footer Assets/footer-bg.png";

const staffingSolutions = [
  {
    name: "Information Technology (IT)",
    path: "/staffing-solutions/it",
    icon: <FiCpu />,
  },
  {
    name: "Non-IT & Core Industries",
    path: "/staffing-solutions/non-it",
    icon: <FiTool />,
  },
  {
    name: "Healthcare & Pharmaceuticals",
    path: "/staffing-solutions/healthcare",
    icon: <FiUserCheck />,
  },
  {
    name: "Retail & E-Commerce Sector",
    path: "/staffing-solutions/e-commerce",
    icon: <FiShoppingCart />,
  },
  {
    name: "Banking, Finance & Insurance",
    path: "/staffing-solutions/banking",
    icon: <FiCreditCard />,
  },
  {
    name: "Education & EdTech Sector",
    path: "/staffing-solutions/education",
    icon: <FiBookOpen />,
  },
  {
    name: "Legal & Compliance Sector",
    path: "/staffing-solutions/legal",
    icon: <FiShield />,
  },
  {
    name: "Telecom & Network Services",
    path: "/staffing-solutions/telecom",
    icon: <FiWifi />,
  },
];

const techSolutions = [
  {
    name: "Logo & Branding",
    path: "/tech-solutions/logo-and-branding",
    icon: <FiCheckCircle />,
  },
  {
    name: "Web Design",
    path: "/tech-solutions/web-design",
    icon: <FiCpu />,
  },
  {
    name: "Web Development",
    path: "/tech-solutions/web-development",
    icon: <FiDatabase />,
  },
  {
    name: "Digital Marketing",
    path: "/tech-solutions/digital-marketing",
    icon: <FiActivity />,
  },
  {
    name: "SAP Consulting",
    path: "/tech-solutions/sap",
    icon: <FiSettings />,
  },
  {
    name: "AI Solutions",
    path: "/tech-solutions/ai",
    icon: <FiCpu />,
  },
  {
    name: "Data Science",
    path: "/tech-solutions/data-science",
    icon: <FiDatabase />,
  },
  {
    name: "E-Commerce Development",
    path: "/tech-solutions/e-commerce-development",
    icon: <FiBriefcase />,
  },
];

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
        {/* Newsletter */}
        <motion.div
          className="newsletter-container"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <div className="newsletter-box">
            <h4>Subscribe to Our Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Logo & About */}
          <div className="footer-card footer-brand">
            <Link to="/">
              <img src={logo2} alt="ConvexTech Logo" className="footer-logo" />
            </Link>
            <p className="footer-intro">
              We deliver tailored staffing and tech solutions to help businesses
              grow faster, scale smarter and operate more efficiently.
            </p>
          </div>

          {/* Staffing Solutions Links */}
          <div className="footer-card footer-links">
            <h3>Staffing Solutions</h3>
            <ul>
              {staffingSolutions.map((item, index) => (
                <li key={index}>
                  {item.icon} <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Solutions Links */}
          <div className="footer-card footer-links">
            <h3>Tech Solutions</h3>
            <ul>
              {techSolutions.map((item, index) => (
                <li key={index}>
                  {item.icon} <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office 1 */}
          <div className="footer-card footer-office">
            <h3>United States</h3>
            <h5>Texas</h5>
            <div className="footer-office-details">
              <p>
                <FiPhone />
                <a href="tel:+13463671777">+1 346 367 1777</a>
              </p>
              <p>
                <FiMail />
                <a href="mailto:info@convextech.com">info@convextech.com</a>
              </p>
              <p>
                <FiMapPin />
                11200 Broadway Suite 2743 <br /> Pearland, TX 77584
              </p>
            </div>
          </div>

          {/* Office 2 */}
          <div className="footer-card footer-office">
            <h3>India</h3>
            <h5>Hyderabad</h5>
            <div className="footer-office-details">
              <p>
                <FiPhone />
                <a href="tel:+914029994717">+91 (040) 2999 4717</a>
              </p>
              <p>
                <FiMail />
                <a href="mailto:info@convextech.com">info@convextech.com</a>
              </p>
              <p>
                <FiMapPin />
                115A, First Floor, Downtown Mall <br />
                Beside Lotus Hospital, Lakdikapul <br />
                Hyderabad 500-004
              </p>
            </div>
          </div>

          {/* Office 3 */}
          <div className="footer-card footer-office">
            <h3>India</h3>
            <h5>Noida</h5>
            <div className="footer-office-details">
              <p>
                <FiPhone />
                <a href="tel:+914029994717">+91 (040) 2999 4717</a>
              </p>
              <p>
                <FiMail />
                <a href="mailto:info@convextech.com">info@convextech.com</a>
              </p>
              <p>
                <FiMapPin />
                Jav Tower H17, 2nd Floor <br />
                S-01 Sector 63, Noida 201301
              </p>
            </div>
          </div>
        </div>

        {/* Social and Legal */}
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
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <span>|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <a href="#">Unsubscribe</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="footer-attribution">
          <p>Powered by ConvexTech © 2011 - 2025.</p>
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
