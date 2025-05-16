import React from "react";
import "../styles/TechSolutions.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import logoicon from "../assets/Tech Solutions Icons/ts-logo-icon.png";
import brandingicon from "../assets/Tech Solutions Icons/ts-branding-icon.png";
import marketingicon from "../assets/Tech Solutions Icons/ts-marketing-icon.png";
import websiteicon from "../assets/Tech Solutions Icons/ts-website-icon.png";
import sapicon from "../assets/Tech Solutions Icons/ts-sap-icon.png";

const techServices = [
  {
    title: "Logo & Branding",
    description:
      "Crafting unique brand identities and logos that reflect your business vision and build recognition.",
    icon: logoicon,
    link: "/tech-solutions/logo-and-branding",
  },
  {
    title: "Web Design",
    description:
      "Designing visually striking, user-focused websites that elevate your brand and drive engagement.",
    icon: websiteicon,
    link: "/tech-solutions/web-design",
  },
  {
    title: "Web Development",
    description:
      "Building fast, secure, and scalable websites with clean code and seamless functionality.",
    icon: websiteicon,
    link: "/tech-solutions/web-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that grow your reach, increase traffic, and convert leads into customers.",
    icon: marketingicon,
    link: "/tech-solutions/digital-marketing",
  },
  {
    title: "SAP Consulting & Solutions",
    description:
      "Expert SAP consulting and custom solutions that streamline processes and power enterprise growth.",
    icon: sapicon,
    link: "/tech-solutions/sap",
  },
];

const TechSolutions = () => {
  return (
    <section className="techsolutions-section">
      <p className="techsolutions-label">
        <span className="techsolutions-thread"></span>TECH SOLUTIONS
      </p>
      <motion.h2
        className="techsolutions-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Core Tech Solutions
      </motion.h2>
      <div className="techsolutions-grid">
        {techServices.map((service, index) => (
          <motion.div
            className="tech-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="tech-icon">
              <img src={service.icon} alt="service icon" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="tech-btn">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSolutions;
