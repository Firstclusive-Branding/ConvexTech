import React from "react";
import "../styles/Services.css";
import sapImg from "../assets/Services Assets/sap-solutions.png";
import softwareImg from "../assets/Services Assets/software-development.png";
import healthcareImg from "../assets/Services Assets/healthcare.png";

import sapIcon from "../assets/Services Assets/sap-solutions-icon.png";
import softwareIcon from "../assets/Services Assets/software-development-icon.png";
import healthcareIcon from "../assets/Services Assets/healthcare-icon.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services-wrapper" id="services-section">
      <motion.div
        className="services-header"
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.8, once: true }}
      >
        <p className="services-subtitle">
          <span className="heading-thread"></span>OUR SERVICES
        </p>
      </motion.div>
      <div className="services-card-container">
        <h2 className="services-title">
          Smart Services for <span>Complex </span>Needs
        </h2>
        <div className="services-cards">
          {[
            {
              title: "SAP Solutions",
              icon: sapIcon,
              img: sapImg,
              bgClass: "sap-icon",
            },
            {
              title: "Software Development",
              icon: softwareIcon,
              img: softwareImg,
              bgClass: "software-icon",
            },
            {
              title: "Healthcare & Clinical",
              icon: healthcareIcon,
              img: healthcareImg,
              bgClass: "healthcare-icon",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ amount: 0.3, once: true }}
            >
              <div className={`icon-wrapper ${service.bgClass}`}>
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <hr />
              <p>
                Success profesions development our solutions sapien maximu
                creative services.
              </p>
              <img
                src={service.img}
                alt={service.title}
                className="service-card-img"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
