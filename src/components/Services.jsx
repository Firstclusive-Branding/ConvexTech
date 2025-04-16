import React from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiCode,
  FiZap,
  FiDatabase,
  FiGlobe,
  FiBriefcase,
  FiUser,
  FiTruck,
  FiBarChart2,
  FiClipboard,
  FiHeart,
} from "react-icons/fi";
import "../styles/Services.css";

const serviceSections = [
  {
    sectionTitle: "IT Services",
    services: [
      {
        title: "SAP Solutions",
        icon: <FiClipboard />,
        description:
          "Optimize enterprise operations with integrated, scalable SAP ERP systems.",
      },
      {
        title: "Software Development",
        icon: <FiCode />,
        description:
          "Custom web and mobile apps built to scale, streamline, and succeed.",
      },
      {
        title: "Artificial Intelligence",
        icon: <FiZap />,
        description:
          "AI models that automate decisions, enhance productivity, and unlock insights.",
      },
      {
        title: "Data Science",
        icon: <FiBarChart2 />,
        description:
          "Turn raw data into strategy with predictive analytics and data mining.",
      },
      {
        title: "Branding & Digital Marketing",
        icon: <FiGlobe />,
        description:
          "Build strong brand identities and campaigns that convert online.",
      },
    ],
  },
  {
    sectionTitle: "Non-IT Services",
    services: [
      {
        title: "Accounts & Finance",
        icon: <FiBriefcase />,
        description:
          "Outsource finance operations with accuracy and compliance at the core.",
      },
      {
        title: "Blue Collar Jobs",
        icon: <FiTruck />,
        description:
          "Reliable workforce solutions for logistics, fieldwork, and operations.",
      },
      {
        title: "Industrial Staffing",
        icon: <FiUser />,
        description:
          "Skilled manpower for manufacturing, warehousing, and industrial sectors.",
      },
    ],
  },
  {
    sectionTitle: "Healthcare Services",
    services: [
      {
        title: "Data Management & Analytics",
        icon: <FiDatabase />,
        description:
          "Handle healthcare data with integrity, privacy, and precision insights.",
      },
      {
        title: "Healthcare IT Solutions",
        icon: <FiCpu />,
        description:
          "Digital platforms that streamline clinical, operational, and admin workflows.",
      },
      {
        title: "Electronic Health Records (EHR) Implementations",
        icon: <FiClipboard />,
        description:
          "Seamless setup and integration of secure, user-friendly EHR systems.",
      },
      {
        title: "Healthcare & Clinical",
        icon: <FiHeart />,
        description:
          "Support for clinical roles, hospital ops, and health service delivery.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <motion.h2
        className="services-title"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      {serviceSections.map((section, secIdx) => (
        <div key={secIdx} className={`services-section section-${secIdx + 1}`}>
          <motion.h3
            className="services-subtitle"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {section.sectionTitle}
          </motion.h3>

          <div className="services-grid">
            {section.services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.description}</p>
                <span className={`badge badge-${secIdx + 1}`}>
                  {section.sectionTitle}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
