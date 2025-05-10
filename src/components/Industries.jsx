import React from "react";
import "../styles/Industries.css";
import { motion } from "framer-motion";

import ITimg from "../assets/Industries Assets/it-industries.png";
import NonITimg from "../assets/Industries Assets/non-it-industries.png";
import healthcareimg from "../assets/Industries Assets/healthcare-industries.png";

import ITicon from "../assets/Industries Assets/Industries icons/it-icon.png";
import NonITicon from "../assets/Industries Assets/Industries icons/non-it-icon.png";
import healthcareIcon from "../assets/Industries Assets/Industries icons/healthcare-icon.png";

const Industries = () => {
  return (
    <div className="industries-wrapper" id="industries-section">
      <motion.div
        className="industries-header"
        initial={{ y: -30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.8, once: true }}
      >
        <p className="industries-subtitle">
          <span className="heading-thread"></span>INDUSTRIES
        </p>
      </motion.div>
      <div className="industries-card-container">
        <h2 className="industries-title">
          Industry-Focused <span>Staffing Solutions</span>
        </h2>
        <div className="industries-cards">
          {[
            {
              title: "IT Industries",
              icon: ITicon,
              img: ITimg,
              bgClass: "sap-icon",
              description:
                "We help IT organizations scale faster with talent skilled in development, support, cybersecurity, cloud, and emerging technologies.",
            },
            {
              title: "Non IT Industries",
              icon: NonITicon,
              img: NonITimg,
              bgClass: "software-icon",
              description:
                "From manufacturing to logistics, we provide workforce solutions that streamline operations and meet domain-specific demands.",
            },
            {
              title: "Healthcare Industries",
              icon: healthcareIcon,
              img: healthcareimg,
              bgClass: "healthcare-icon",
              description:
                "We connect hospitals, clinics, and pharma companies with clinical and non-clinical talent to improve patient care and efficiency.",
            },
          ].map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ amount: 0.3, once: true }}
            >
              <div className={`icon-wrapper ${industry.bgClass}`}>
                <img src={industry.icon} alt={industry.title} />
              </div>
              <h3>{industry.title}</h3>
              <hr />
              <p>{industry.description}</p>
              <img
                src={industry.img}
                alt={industry.title}
                className="industry-card-img"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
