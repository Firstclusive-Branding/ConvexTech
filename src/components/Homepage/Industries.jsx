import React, { useState, useEffect } from "react";
import "../../styles/Industries.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons
import iticon from "../../assets/Industries Assets/Industries icons/it.svg";
import noniticon from "../../assets/Industries Assets/Industries icons/non-it.svg";
import healthcareicon from "../../assets/Industries Assets/Industries icons/healthcare.svg";
import ecommerceicon from "../../assets/Industries Assets/Industries icons/e-commerce.svg";
import bankingicon from "../../assets/Industries Assets/Industries icons/banking.svg";
import educationicon from "../../assets/Industries Assets/Industries icons/education.svg";
import legalicon from "../../assets/Industries Assets/Industries icons/legal.svg";
import telecomicon from "../../assets/Industries Assets/Industries icons/telecom.svg";
import marineicon from "../../assets/Industries Assets/Industries icons/marine.svg";
import hospitalityicon from "../../assets/Industries Assets/Industries icons/hospitality.svg";

// Images
import itimg from "../../assets/Industries Assets/it.png";
import nonitimg from "../../assets/Industries Assets/non-it.png";
import healthcareimg from "../../assets/Industries Assets/healthcare.png";
import ecommerceimg from "../../assets/Industries Assets/ecommerce.png";
import bankingimg from "../../assets/Industries Assets/banking.png";
import educationimg from "../../assets/Industries Assets/education.png";
import legalimg from "../../assets/Industries Assets/legal.png";
import telecomimg from "../../assets/Industries Assets/telecom.png";
import marineimg from "../../assets/Industries Assets/marine.png";
import hospitalityimg from "../../assets/Industries Assets/hospitality.png";

const industries = [
  {
    title: "Information Technology (IT)",
    path: "/staffing-solutions/it",
    icon: iticon,
    img: itimg,
    description:
      "We help technology firms scale with professionals skilled in software development, IT support, cloud infrastructure, cybersecurity and emerging technologies.",
  },
  {
    title: "Non-IT & Core Industries",
    path: "/staffing-solutions/non-it",
    icon: noniticon,
    img: nonitimg,
    description:
      "From manufacturing to logistics, we provide operational support through reliable staffing across engineering, admin and ground-level functions.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    path: "/staffing-solutions/healthcare",
    icon: healthcareicon,
    img: healthcareimg,
    description:
      "We support hospitals, clinics and pharmaceutical firms with qualified clinical and non-clinical talent to enhance patient care and process efficiency.",
  },
  {
    title: "Marine & Offshore",
    path: "/staffing-solutions/marine",
    icon: marineicon,
    img: marineimg,
    description:
      "Our staffing solutions for marine and offshore sectors cover deck crew, engine room specialists, logistics personnel and compliance-driven roles.",
  },
  {
    title: "Hospitality & Tourism",
    path: "/staffing-solutions/hospitality",
    icon: hospitalityicon,
    img: hospitalityimg,
    description:
      "We help hospitality brands deliver consistent guest experiences through experienced staff in front office, housekeeping, food service and operations.",
  },
  {
    title: "Banking, Finance & Insurance",
    path: "/staffing-solutions/banking",
    icon: bankingicon,
    img: bankingimg,
    description:
      "We serve financial institutions with professionals in customer service, backend processing, loan operations, compliance and sales enablement.",
  },
  {
    title: "Retail & E-Commerce",
    path: "/staffing-solutions/e-commerce",
    icon: ecommerceicon,
    img: ecommerceimg,
    description:
      "From in-store operations to fulfilment centres, we provide trained personnel for retail and e-commerce across sales, warehousing and delivery.",
  },
  {
    title: "Education & EdTech",
    path: "/staffing-solutions/education",
    icon: educationicon,
    img: educationimg,
    description:
      "We support educational institutions and learning platforms with qualified educators, trainers, academic content specialists and technical staff.",
  },
  {
    title: "Legal & Compliance",
    path: "/staffing-solutions/legal",
    icon: legalicon,
    img: legalimg,
    description:
      "We help legal departments and law firms hire trusted professionals for research, documentation, compliance, paralegal support and advisory roles.",
  },
  {
    title: "Telecom & Network Services",
    path: "/staffing-solutions/telecom",
    icon: telecomicon,
    img: telecomimg,
    description:
      "We provide skilled workforce for telecom infrastructure, field service, network operations, installation, maintenance and customer support.",
  },
];

const Industries = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setVisibleCount(5);
      } else if (width <= 768) {
        setVisibleCount(4);
      } else if (width <= 1024) {
        setVisibleCount(6);
      } else if (width <= 1400) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstSet = industries.slice(0, visibleCount);
  const remainingSet = industries.slice(visibleCount);

  const renderCard = (item, index) => (
    <motion.div
      className="industries-card"
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <Link to={item.path}>
        <div className="industries-icon">
          <img src={item.icon} alt={item.title} />
        </div>
        <h3 className="industries-name">{item.title}</h3>
        <p className="industries-desc">{item.description}</p>
      </Link>
    </motion.div>
  );

  return (
    <section className="industries-container">
      <div className="industries-header">
        <p className="industries-heading">
          <span></span>INDUSTRIES
        </p>
        <h2 className="industries-title">
          Industry-Focused Staffing{" "}
          <span className="industries-highlight">That Works</span>
        </h2>
      </div>

      <div className="industries-grid">
        {firstSet.map((item, index) => renderCard(item, index))}
      </div>

      <div className={`industries-extra-container ${showAll ? "show" : ""}`}>
        <div className="industries-grid">
          {remainingSet.map((item, index) => renderCard(item, index))}
        </div>
      </div>

      <button
        className="industries-toggle-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "HIDE INDUSTRIES" : "SHOW ALL INDUSTRIES"}
      </button>
    </section>
  );
};

export default Industries;
