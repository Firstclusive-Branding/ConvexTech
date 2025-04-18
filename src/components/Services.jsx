import React, { useState } from "react";
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
    category: "IT",
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
    category: "Non-IT",
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
    category: "Healthcare",
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

const filterOptions = ["All", "IT", "Non-IT", "Healthcare"];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredServices = () => {
    if (activeCategory === "All") {
      return [
        ...serviceSections[0].services.slice(0, 2),
        ...serviceSections[1].services.slice(0, 2),
        ...serviceSections[2].services.slice(0, 2),
      ].map((s, i) => {
        if (i < 2) return { ...s, category: "IT" };
        if (i < 4) return { ...s, category: "Non-IT" };
        return { ...s, category: "Healthcare" };
      });
    }

    const section = serviceSections.find((s) => s.category === activeCategory);
    return section.services.map((s) => ({ ...s, category: section.category }));
  };

  const filteredServices = getFilteredServices();

  const getSectionIndex = (category) => {
    return { IT: 0, "Non-IT": 1, Healthcare: 2 }[category] || 0;
  };

  return (
    <section id="services" className="services-container-filtered">
      <motion.h2
        className="services-title-filtered"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>

      <div className="filter-buttons">
        {filterOptions.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        key={activeCategory}
        className="services-grid-filtered"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
      >
        {filteredServices.map((service, index) => {
          const secIdx = getSectionIndex(service.category);
          return (
            <motion.div
              key={index}
              className={`service-card-filtered section-${secIdx + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-desc">{service.description}</p>
              <span className={`service-badge service-badge-${secIdx + 1}`}>
                {service.category}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
