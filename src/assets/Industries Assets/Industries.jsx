import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/Industries.css";

import bgcard from "../assets/Services Carousel Assets/bg-card.png";
import twinklestar from "../assets/Services Carousel Assets/twinkle.png";

import iticon from "../assets/Industries Assets/Industries icons/it.svg";
import nonitimg from "../assets/Industries Assets/Industries icons/non-it.svg";
import healthcareicon from "../assets/Industries Assets/Industries icons/healthcare.svg";
import ecommerceicon from "../assets/Industries Assets/Industries icons/e-commerce.svg";
import bankingicon from "../assets/Industries Assets/Industries icons/banking.svg";
import educationicon from "../assets/Industries Assets/Industries icons/education.svg";
import legalicon from "../assets/Industries Assets/Industries icons/legal.svg";
import telecomicon from "../assets/Industries Assets/Industries icons/telecom.svg";
// ----------------------------------------------------------------------------

import healthcareImg from "../assets/Services Carousel Assets/healthcare.png";
import softwareDevImg from "../assets/Services Carousel Assets/software-development.png";
import industrialstaffingimg from "../assets/Services Carousel Assets/industrial-staffing.png";
import dataanalyticsimg from "../assets/Services Carousel Assets/data-analytics.png";
import accountsimg from "../assets/Services Carousel Assets/accounts.png";
import brandingImg from "../assets/Services Carousel Assets/branding.png";
import sapSolutionsImg from "../assets/Services Carousel Assets/sap-solutions.png";
import aiImg from "../assets/Services Carousel Assets/artificial-intelligence.png";

const industries = [
  {
    title: "Information Technology (IT)",
    icon: iticon,
    img: softwareDevImg,
    description:
      "We help IT companies hire skilled professionals in development, support, cybersecurity, cloud and emerging technologies; fast and at scale.",
  },
  {
    title: "Non-IT & Core Industries",
    icon: nonitimg,
    img: industrialstaffingimg,
    description:
      "From factories to warehouses, we provide manpower for manufacturing, logistics, admin and support roles that keep operations running smooth.",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    icon: healthcareicon,
    img: healthcareImg,
    description:
      "We help hospitals, clinics and pharma companies hire the right mix of clinical and non-clinical staff to improve care and operational efficiency.",
  },
  {
    title: "Retail & E-Commerce Sector",
    icon: ecommerceicon,
    img: dataanalyticsimg,
    description:
      "We provide reliable staff for retail outlets and online brands; from sales and warehouse teams to delivery and customer support professionals.",
  },
  {
    title: "Banking, Finance & Insurance",
    icon: bankingicon,
    img: accountsimg,
    description:
      "We support banks, NBFCs and insurance firms with trained professionals in customer service, backend operations, sales and compliance roles.",
  },
  {
    title: "Education & EdTech Sector",
    icon: educationicon,
    img: brandingImg,
    description:
      "We connect schools, colleges and edtech startups with qualified teachers, trainers, content creators and technical support professionals.",
  },
  {
    title: "Legal & Compliance Sector",
    icon: legalicon,
    img: sapSolutionsImg,
    description:
      "We help law firms and corporate legal teams hire experienced legal talent; including paralegals, compliance officers and legal advisors.",
  },
  {
    title: "Telecom & Network Services",
    icon: telecomicon,
    img: aiImg,
    description:
      "We support telecom providers with skilled staff for network operations, field service, customer care, installation and backend coordination.",
  },
];

const Industries = () => {
  return (
    <section className="industries-wrapper">
      <div className="wavy-thread-container">
        <svg
          className="wavy-thread-svg"
          viewBox="0 0 200 1000"
          preserveAspectRatio="none"
        >
          <path
            className="wavy-thread-path"
            d="M100,0 C50,100 150,200 100,300 C50,400 150,500 100,600 C50,700 150,800 100,900 C50,950 150,1050 100,1100"
          />
        </svg>
      </div>

      <img src={bgcard} alt="background" className="industries-bg-card" />
      <span className="industries-star-icon">
        <img src={twinklestar} alt="twinkle" />
      </span>

      <div className="industries-header">
        <p className="industries-heading">
          <span className="industries-heading-tag"></span>
          INDUSTRIES
        </p>
        <h2 className="industries-title">
          Industry-Focused Staffing{" "}
          <span className="industries-highlight">That Works</span>
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          1025: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="industries-swiper"
      >
        {industries.map((industry, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="industries-card"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={industry.img}
                alt={industry.title}
                className="industries-img"
              />
              <div className="industries-content">
                <div className="industries-icon">
                  <img src={industry.icon} alt="icon" />
                </div>
                <h3 className="industries-name">{industry.title}</h3>
                <p className="industries-desc">{industry.description}</p>

                <div className="industries-footer">
                  <button className="industries-btn">+</button>
                  <div className="industries-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Industries;
