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
    title: "Logo",
    description:
      "Custom-designed logos that capture your brand essence and make a lasting impression.",
    icon: logoicon,
    link: "/tech-solutions/logo",
  },
  {
    title: "Branding",
    description:
      "Complete branding systems that define your company’s personality, voice, and presence.",
    icon: brandingicon,
    link: "/tech-solutions/branding",
  },
  {
    title: "Marketing",
    description:
      "Performance-driven marketing strategies that attract, engage, and convert your audience.",
    icon: marketingicon,
    link: "/tech-solutions/marketing",
  },
  {
    title: "Website",
    description:
      "Modern, responsive websites that load fast, look great, and work flawlessly across devices.",
    icon: websiteicon,
    link: "/tech-solutions/websites",
  },
  {
    title: "SAP",
    description:
      "Smart SAP integration and support services tailored to complex enterprise workflows.",
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
