import React from "react";
import "../styles/TechSolutions.css";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import sapicon from "../assets/Tech Solutions Icons/sap.svg";
import aiicon from "../assets/Tech Solutions Icons/artificial-intelligence.svg";
import dataicon from "../assets/Tech Solutions Icons/data-science.svg";
import logoicon from "../assets/Tech Solutions Icons/logo.svg";
import webdesignicon from "../assets/Tech Solutions Icons/web-design.svg";
import websiteicon from "../assets/Tech Solutions Icons/website.svg";
import ecommerceicon from "../assets/Tech Solutions Icons/e-commerce.svg";
import marketingicon from "../assets/Tech Solutions Icons/digital-marketing.svg";

const techServices = [
  {
    title: "SAP Consulting",
    description:
      "Tailored SAP consulting services that simplify complex business processes and drive operational excellence.",
    icon: sapicon,
    link: "/tech-solutions/sap",
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI solutions that automate tasks, extract insights, and elevate decision-making across your business.",
    icon: aiicon,
    link: "/tech-solutions/ai",
  },
  {
    title: "Data Science",
    description:
      "Unlock business intelligence with data-driven strategies, predictive models, and deep analytics.",
    icon: dataicon,
    link: "/tech-solutions/data-science",
  },
  {
    title: "Logo & Branding",
    description:
      "Crafting unique brand identities and logos that reflect your business vision and build recognition.",
    icon: logoicon,
    link: "/tech-solutions/logo-and-branding",
  },
  {
    title: "UI/UX & Web Design",
    description:
      "Designing intuitive, user-centered interfaces that boost engagement and improve customer experience.",
    icon: webdesignicon,
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
    title: "E-Commerce Development",
    description:
      "Creating robust e-commerce platforms that enhance user experience and drive conversions.",
    icon: ecommerceicon,
    link: "/tech-solutions/e-commerce-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that grow your reach, increase traffic, and convert leads into customers.",
    icon: marketingicon,
    link: "/tech-solutions/digital-marketing",
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
