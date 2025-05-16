import React, { useState } from "react";
import "../styles/Industries.css";
import { motion } from "framer-motion";

import iticon from "../assets/Industries Assets/Industries icons/it.svg";
import noniticon from "../assets/Industries Assets/Industries icons/non-it.svg";
import healthcareicon from "../assets/Industries Assets/Industries icons/healthcare.svg";
import ecommerceicon from "../assets/Industries Assets/Industries icons/e-commerce.svg";
import bankingicon from "../assets/Industries Assets/Industries icons/banking.svg";
import educationicon from "../assets/Industries Assets/Industries icons/education.svg";
import legalicon from "../assets/Industries Assets/Industries icons/legal.svg";
import telecomicon from "../assets/Industries Assets/Industries icons/telecom.svg";

import itimg from "../assets/Industries Assets/it.png";
import nonitimg from "../assets/Industries Assets/non-it.png";
import healthcareimg from "../assets/Industries Assets/healthcare.png";
import ecommerceimg from "../assets/Industries Assets/ecommerce.png";
import bankingimg from "../assets/Industries Assets/banking.png";
import educationimg from "../assets/Industries Assets/education.png";
import legalimg from "../assets/Industries Assets/legal.png";
import telecomimg from "../assets/Industries Assets/telecom.png";

const industries = [
  {
    title: "Information Technology (IT)",
    icon: iticon,
    img: itimg,
    description:
      "We help IT companies hire skilled professionals in development, support, cybersecurity, cloud and emerging technologies; fast and at scale.",
  },
  {
    title: "Non-IT & Core Industries",
    icon: noniticon,
    img: nonitimg,
    description:
      "From factories to warehouses, we provide manpower for manufacturing, logistics, admin and support roles that keep operations running smooth.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    icon: healthcareicon,
    img: healthcareimg,
    description:
      "We help hospitals, clinics and pharma companies hire the right mix of clinical and non-clinical staff to improve care and operational efficiency.",
  },
  {
    title: "Retail & E-Commerce Sector",
    icon: ecommerceicon,
    img: ecommerceimg,
    description:
      "We provide reliable staff for retail outlets and online brands; from sales and warehouse teams to delivery and customer support professionals.",
  },
  {
    title: "Banking, Finance & Insurance",
    icon: bankingicon,
    img: bankingimg,
    description:
      "We support banks, NBFCs and insurance firms with trained professionals in customer service, backend operations, sales and compliance roles.",
  },
  {
    title: "Education & EdTech Sector",
    icon: educationicon,
    img: educationimg,
    description:
      "We connect schools, colleges and edtech startups with qualified teachers, trainers, content creators and technical support professionals.",
  },
  {
    title: "Legal & Compliance Sector",
    icon: legalicon,
    img: legalimg,
    description:
      "We help law firms and corporate legal teams hire experienced legal talent; including paralegals, compliance officers and legal advisors.",
  },
  {
    title: "Telecom & Network Services",
    icon: telecomicon,
    img: telecomimg,
    description:
      "We support telecom providers with skilled staff for network operations, field service, customer care, installation and backend coordination.",
  },
];

const Industries = () => {
  const [showAll, setShowAll] = useState(false);
  const firstFour = industries.slice(0, 4);
  const remaining = industries.slice(4);

  const renderCard = (item, index) => (
    <motion.div
      className="industries-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: false }}
      key={index}
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="industries-icon">
        <img src={item.icon} alt={item.title} />
      </div>
      <h3 className="industries-name">{item.title}</h3>
      <p className="industries-desc">{item.description}</p>
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
        {firstFour.map((item, index) => renderCard(item, index))}
      </div>

      <div className={`industries-extra-container ${showAll ? "show" : ""}`}>
        <div className="industries-grid">
          {remaining.map((item, index) => renderCard(item, index))}
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
