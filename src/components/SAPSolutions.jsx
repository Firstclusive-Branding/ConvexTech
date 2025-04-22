import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaSyncAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaWarehouse,
  FaUsers,
  FaFileInvoiceDollar,
  FaPeopleCarry,
  FaTruck,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/SAPSolutions.css";
import sapbg from "../assets/SAP Assets/sap-solutions-bg.jpg";
import saphero from "../assets/SAP Assets/sap-solutions-hero.jpg";

const sections = [
  {
    title: "Technology Products",
    icon: <FaSyncAlt />,
    bg: "https://picsum.photos/id/1050/1200/800",
    image: "https://picsum.photos/id/204/600/400",
    subSections: [
      {
        heading: "SAP Realise, Innovate, Sustain and Enhance (RISE)",
        content:
          "SAP RISE becomes the best tool for an enterprise, in order to streamline the entire business processes through leverage the range of cloud-based applications and which greatly helps in enhancing the best business outcomes. The SAP-RISE, brings about some of the preconfigured solutions being tailored to address certain specific business needs.",
      },
      {
        heading: "SAP Business Technology Platform (SAP-BTP)",
        content:
          "The world today has been considered as the digital world and in this digital world, one can see the exchange of data in order to bring about informed decisions in an enterprise organisation, and this informed-decision helps the enterprise to propel itself towards getting the tangible results in the cluttered market. The SAP-BTP, has been the platform, which has been designed in such a way, that it can bring a control over the data management and its analytics, by incorporating artificial intelligence, application development, automation, and integration all together in one single platform.",
      },
      {
        heading: "SAP: S/4 Hana",
        content:
          "SAP: S/4 Hana is considered to be an advanced version of ERP, which integrates with the current digital trends of today, such as AI, Machine Learning, and Advanced Analytics. The module is an exclusive analytics module, as it helps to transform business processes.",
      },
    ],
  },
  {
    title: "Financial Modules",
    icon: <FaMoneyBillWave />,
    bg: "https://picsum.photos/id/1060/1200/800",
    image: "https://picsum.photos/id/211/600/400",
    subSections: [
      {
        heading: "Financial Accounting (FI) and Co",
        content:
          "The FICO module of SAP helps to manage the financial transactions and accounting processes which could accommodate, General Ledger (GL), Accounts Payable (AP), Accounts Receivable (AR), Asset Accounting (AA), Financial Reporting and Compliance, Cost Centers and Profit Centers, Internal Orders, Activity-Based Costing, Budgeting and Planning, Performance Measurement",
      },
      {
        heading: "SAP Billing and Revenue Innovation Management (SAP-BRIM)",
        content:
          "Alongside the SAP-FI and Co, we also offer a comprehensive solution for an enterprise, when it comes to handling the complex billing, invoicing and some of the best known revenue processes for the business to function smoothly and seamlessly. The SAP Billing and Revenue Innovation Management (SAP-BRIM), is one of the modules that we tend to implement for enterprises.",
      },
    ],
  },
  {
    title: "Supply Chain, Warehouse, Sales and Distribution",
    icon: <FaChartLine />,
    bg: "https://picsum.photos/id/1070/1200/800",
    image: "https://picsum.photos/id/206/600/400",
    subSections: [
      {
        heading: "",
        content:
          "The sales and distribution handles and customer records, which could accommodate: Sales Order Management, Pricing and Discounts, Shipping and Delivery, Billing and Invoicing, Customer Relationship Management (CRM)",
      },
    ],
  },
  {
    title: "SAP: Supply Chain Management (SCM)",
    icon: <FaWarehouse />,
    bg: "https://picsum.photos/id/1080/1200/800",
    image: "https://picsum.photos/id/210/600/400",

    subSections: [
      {
        heading: "",
        content:
          "The SAP SCM has been graciously handling the entire supply chain management of a manufacturing company and integrating with planning, procurement, manufacturing, logistics and at the end order-fulfilment",
      },
      {
        heading: "",
        content:
          "In order to enhance the SAP-SCM, we also implement the methods of SAP-Extended Warehouse Management (SAP-EWM) and the methods of SAP-SCM involves optimising warehouse operations, and ensuring real-time visibility of inventory. It is also an attributable factor that SAP EWM is conceived and designed to handle complex and high-volume warehouse requirements.",
      },
    ],
  },
  {
    title: "Human Capital Management (HCM)",
    icon: <FaUsers />,
    bg: "https://picsum.photos/id/55/1200/800",
    image: "https://picsum.photos/id/118/600/400",
    subSections: [
      {
        heading: "",
        content:
          "The Human Capital Management (HCM) module of SAP, predominantly handles the human resource and accommodates Personnel Administration, Recruitment and Onboarding, Time Management, Payroll Processing, Employee Development and Training. The SAP: Success Factors has been the extension of HCM and which helps in recruitment, posting, onboarding and also the workforce analytics.",
      },
      {
        heading: "",
        content:
          "The SAP SuccessFactors covers the following suite of SAP such as recruiting, learning and development, performance management and the compensation management.",
      },
    ],
  },
  {
    title: "SAP Migrations",
    icon: <FaSyncAlt />,
    bg: "https://picsum.photos/id/56/1200/800",
    image: "https://picsum.photos/id/309/600/400",
    subSections: [
      {
        heading: "",
        content:
          "SAP Migrations is a critical step in the implementation of SAP solutions which essentially involves transferring the data, applications and processes. It can also accommodate upgrading existing systems, or transitioning to cloud-based SAP offerings. The migration process involves careful planning, execution, and testing to ensure data integrity, system compatibility, and minimal disruption to business operations.",
      },
    ],
  },
];

const SAPSolutions = () => {
  const wrapperRef = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    vertical: true,
    slides: { perView: 1 },
    rubberband: false,
    loop: false,
    drag: true,
    created: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
    slideChanged: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "SAP Solutions - ConvexTech";

    const handleWheel = (e) => {
      if (!wrapperRef.current || !wrapperRef.current.contains(e.target)) return;
      if (!slider.current) return;

      const details = slider.current.track.details;
      const isLastSlide = details.rel === details.slides.length - 1;
      const isFirstSlide = details.rel === 0;

      if ((e.deltaY > 0 && !isLastSlide) || (e.deltaY < 0 && !isFirstSlide)) {
        e.preventDefault();
      }

      if (e.deltaY > 0 && !isLastSlide) {
        slider.current.next();
      } else if (e.deltaY < 0 && !isFirstSlide) {
        slider.current.prev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [slider]);

  return (
    <div className="sap-page">
      <motion.section
        className="sap-hero-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          <FaCogs /> SAP Solutions
        </h1>
        <div className="sap-hero-content">
          <p>
            SAP is one of the first known Enterprise Resource Planning (ERP)
            packages being conceived which could predominantly help the
            enterprises to automate their workflows on a regular basis and to
            regularly check the process flow. The ERP packages are meant to
            enhance the organisations towards the proper streamlining of
            processes and become a yardstick for the enhanced decision-making
            process.
          </p>
          <img src={saphero} alt="" />
        </div>
      </motion.section>

      <motion.section
        className="sap-core-modules"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="sap-core-cards">
          <div className="sap-card">
            <FaFileInvoiceDollar /> Finance
          </div>
          <div className="sap-card">
            <FaTruck /> Logistics
          </div>
          <div className="sap-card">
            <FaUserTie /> Human Resource
          </div>
          <div className="sap-card">
            <FaPeopleCarry /> Supply Chain Management
          </div>
          <div className="sap-card">
            <FaHandshake /> Customer Relationship Management
          </div>
        </div>
      </motion.section>

      <section className="sap-hero-section">
        <p>
          Infact, the earliest SAP solutions, was mainly confined with
          on-premise hosted, which means available on a single network or the
          LAN network, but with the updations to the package, the SAP is now
          available on a cloud-based interface, which means, that the end-user
          can have a gracious access to most of the functional modules.
        </p>
      </section>

      <div className="sap-slider-outer">
        <h1>
          Some of the modules that we implement and commission to our clients
          include:
        </h1>
        <div ref={wrapperRef} className="sap-slider-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="pagination-dots">
              {slider?.current?.track.details.slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={
                    currentSlide === idx ? "pagination-dots-active" : ""
                  }
                />
              ))}
            </div>

            {sections.map((section, index) => (
              <div key={index} className="keen-slider__slide sap-slide">
                <section
                  className="sap-section"
                  style={{ backgroundImage: `url(${sapbg})` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="sap-section-content">
                      <div className="sap-section-header">
                        <div className="sap-icon-large">{section.icon}</div>
                        <h2>{section.title}</h2>
                      </div>
                      <div className="sap-section-body">
                        <div className="sap-text-block">
                          {section.subSections.map((sub, idx) => (
                            <div className="sap-sub-section" key={idx}>
                              {sub.heading && (
                                <h3 className="sap-sub-heading">
                                  {sub.heading}
                                </h3>
                              )}
                              <p className="sap-sub-content">{sub.content}</p>
                            </div>
                          ))}
                        </div>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="sap-section-image"
                        />
                      </div>
                    </div>
                  </motion.div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPSolutions;
