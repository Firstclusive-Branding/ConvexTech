import React from "react";
import "../../styles/TechSolutions.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import sapicon from "../../assets/Tech Solutions Icons/sap.svg";
import aiicon from "../../assets/Tech Solutions Icons/artificial-intelligence.svg";
import dataicon from "../../assets/Tech Solutions Icons/data-science.svg";
import logoicon from "../../assets/Tech Solutions Icons/logo.svg";
import webdesignicon from "../../assets/Tech Solutions Icons/web-design.svg";
import websiteicon from "../../assets/Tech Solutions Icons/website.svg";
import ecommerceicon from "../../assets/Tech Solutions Icons/e-commerce.svg";
import marketingicon from "../../assets/Tech Solutions Icons/digital-marketing.svg";
const techServices = [
  {
    title: "SAP Consulting",
    description:
      "Implementation, integration and support services designed for enterprise reliability and scale.",
    icon: sapicon,
    link: "/tech-solutions/sap",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Tailored AI solutions that optimise operations, automate tasks and power smarter decisions.",
    icon: aiicon,
    link: "/tech-solutions/ai",
  },
  {
    title: "Data Science",
    description:
      "Insight-driven analytics and predictive modelling that help you move from data to direction.",
    icon: dataicon,
    link: "/tech-solutions/data-science",
  },
  {
    title: "Logo & Branding",
    description:
      "Strategic brand identity systems that build recognition, trust and long-term value.",
    icon: logoicon,
    link: "/tech-solutions/logo-and-branding",
  },
  {
    title: "UI/UX & Web Design",
    description:
      "User-first design for web and digital platforms, focused on clarity, conversion and experience.",
    icon: webdesignicon,
    link: "/tech-solutions/web-design",
  },
  {
    title: "Web Development",
    description:
      "Custom development built on clean code, fast performance and scalable architecture.",
    icon: websiteicon,
    link: "/tech-solutions/web-development",
  },
  {
    title: "E-Commerce Development",
    description:
      "End-to-end e-commerce platforms designed for growth, reliability and seamless customer journeys.",
    icon: ecommerceicon,
    link: "/tech-solutions/e-commerce-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Full-funnel marketing execution across SEO, social media and paid performance campaigns.",
    icon: marketingicon,
    link: "/tech-solutions/digital-marketing",
  },
];

const TechSolutions = () => {
  return (
    <section className="techsolutions-section">
      <p className="techsolutions-label">
        <span className="techsolutions-thread"></span>TECH OFFERINGS
      </p>
      <motion.h2
        className="techsolutions-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We <span className="techsolutions-highlight">Deliver</span>
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
