import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloud, AiOutlinePieChart } from "react-icons/ai";
import { BsDatabaseCheck, BsPeople } from "react-icons/bs";
import { MdOutlineStorage } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import "../styles/ServicesComponent.css";
import SAPimg1 from "../assets/All Services Assets/SAP/sap-1.png";
import SAPimg2 from "../assets/All Services Assets/SAP/sap-2.png";
import SAPimg3 from "../assets/All Services Assets/SAP/sap-3.png";
import SAPimg4 from "../assets/All Services Assets/SAP/sap-4.png";
import SAPimg5 from "../assets/All Services Assets/SAP/sap-5.png";
import SAPimg6 from "../assets/All Services Assets/SAP/sap-6.png";

const sapServices = [
  {
    titleMain: "SAP",
    titleHighlight: "Solutions Overview",
    icon: <AiOutlineCloud className="services-icon" />,
    image: SAPimg1,
    paragraphs: [
      "SAP is one of the first known Enterprise Resource Planning (ERP) packages being conceived which could predominantly help the enterprises to automate their workflows on a regular basis and to regularly check the process flow.",
      "The ERP packages are meant to enhance the organisations towards the proper streamlining of processes and become a yardstick for the enhanced decision-making process.",
      "Infact, the earliest SAP solutions was mainly confined with on-premise hosted, but with the updations to the package, SAP is now available on a cloud-based interface, allowing access to most functional modules remotely.",
    ],
  },
  {
    titleMain: "SAP",
    titleHighlight: "Technology Products",
    icon: <FiSettings className="services-icon" />,
    image: SAPimg2,
    paragraphs: [
      "<strong>SAP RISE:</strong> The best tool for streamlining business processes using cloud-based applications, with preconfigured solutions tailored to specific needs.",
      "<strong>SAP Business Technology Platform (SAP-BTP):</strong> Designed to control data management and analytics through AI, automation, integration, and development tools all in one platform.",
      "<strong>SAP S/4 Hana:</strong> A next-gen ERP system that integrates AI, ML, and advanced analytics to transform business processes.",
    ],
  },
  {
    titleMain: "SAP",
    titleHighlight: "Financial Modules",
    icon: <AiOutlinePieChart className="services-icon" />,
    image: SAPimg3,
    paragraphs: [
      "<strong>SAP FI & Co:</strong> Manages financial transactions including General Ledger, AP/AR, Asset Accounting, Compliance, Cost Centers, Budgeting, and more.",
      "<strong>SAP BRIM:</strong> Comprehensive billing and revenue innovation management system for enterprises to handle complex billing and invoicing processes.",
    ],
  },
  {
    titleMain: "SAP",
    titleHighlight: "Supply Chain & Distribution",
    icon: <MdOutlineStorage className="services-icon" />,
    image: SAPimg4,
    paragraphs: [
      "<strong>SAP SD:</strong> Manages Sales Orders, CRM, Pricing, Shipping, Delivery, and Invoicing.",
      "<strong>SAP SCM:</strong> Covers procurement, logistics, manufacturing, and planning. Enhanced with SAP EWM for real-time inventory and complex warehouse needs.",
    ],
  },
  {
    titleMain: "SAP",
    titleHighlight: "Human Capital Management",
    icon: <BsPeople className="services-icon" />,
    image: SAPimg5,
    paragraphs: [
      "<strong>SAP HCM:</strong> Handles Personnel Admin, Recruitment, Time, Payroll, Training, and Development.",
      "<strong>SAP SuccessFactors:</strong> Extends HCM with recruiting, onboarding, performance and compensation management, and workforce analytics.",
    ],
  },
  {
    titleMain: "SAP",
    titleHighlight: "Migration Services",
    icon: <BsDatabaseCheck className="services-icon" />,
    image: SAPimg6,
    paragraphs: [
      "SAP Migrations involve transferring data, apps, and processes — including upgrades or transitions to cloud-based SAP systems.",
      "It includes careful planning, system compatibility checks, testing, and execution to ensure business continuity and data integrity.",
    ],
  },
];
const SAPSolutions = () => {
  return (
    <div className="services-container">
      {sapServices.map((section, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <motion.section
            key={index}
            className={`services-section ${isReversed ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="services-image-wrapper">
              <img
                src={section.image}
                alt={`${section.titleMain} ${section.titleHighlight}`}
                className="services-image"
              />
            </div>
            <div className="services-content">
              <h2>
                {section.icon} {section.titleMain}{" "}
                <span className="highlighted-word">
                  {section.titleHighlight}
                </span>
              </h2>

              <div className="services-component-list">
                {section.paragraphs.map((text, i) =>
                  text.includes("<ul>") || text.includes("<strong>") ? (
                    <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                  ) : (
                    <p key={i}>{text}</p>
                  )
                )}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default SAPSolutions;
