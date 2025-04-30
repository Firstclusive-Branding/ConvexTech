import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import sapicon from "../assets/Services Carousel Assets/Cards Icons/sap.svg";
import softwaredevelopementicon from "../assets/Services Carousel Assets/Cards Icons/software-development.svg";
import artificialintelligenceicon from "../assets/Services Carousel Assets/Cards Icons/artificial-intelligence.svg";
import datascienceicon from "../assets/Services Carousel Assets/Cards Icons/data-science.svg";
import brandingicon from "../assets/Services Carousel Assets/Cards Icons/branding.svg";
import accountsicon from "../assets/Services Carousel Assets/Cards Icons/accounts.svg";
import bluecollaricon from "../assets/Services Carousel Assets/Cards Icons/blue-collar.svg";
import industrialstaffingicon from "../assets/Services Carousel Assets/Cards Icons/industrial-staffing.svg";
import datamanagementicon from "../assets/Services Carousel Assets/Cards Icons/data-management.svg";
import healthcareiticon from "../assets/Services Carousel Assets/Cards Icons/healthcare-it.svg";
import ehricon from "../assets/Services Carousel Assets/Cards Icons/ehr.svg";
import healthcareicon from "../assets/Services Carousel Assets/Cards Icons/healthcare.svg";

import sapSolutionsImg from "../assets/Services Carousel Assets/sap-solutions.png";
import softwareDevImg from "../assets/Services Carousel Assets/software-development.png";
import aiImg from "../assets/Services Carousel Assets/artificial-intelligence.png";
import dataScienceImg from "../assets/Services Carousel Assets/data-science.png";
import brandingImg from "../assets/Services Carousel Assets/branding.png";
import staffingImg from "../assets/Services Carousel Assets/staffing.png";
import healthcareImg from "../assets/Services Carousel Assets/healthcare.png";
import accountsimg from "../assets/Services Carousel Assets/accounts.png";
import bluecollarimg from "../assets/Services Carousel Assets/blue-collar.png";
import industrialstaffingimg from "../assets/Services Carousel Assets/industrial-staffing.png";
import dataanalyticsimg from "../assets/Services Carousel Assets/data-analytics.png";
import ehrimg from "../assets/Services Carousel Assets/ehr.png";
import healthcareclinicalimg from "../assets/Services Carousel Assets/healthcare-clinical.png";

import twinklestar from "../assets/Services Carousel Assets/twinkle.png";
import bgcard from "../assets/Services Carousel Assets/bg-card.png";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ServicesCarousel.css";

const services = [
  {
    title: "SAP Solutions",
    icon: sapicon,
    img: sapSolutionsImg,
    description:
      "Comprehensive SAP implementations to streamline operations and drive business growth.",
  },
  {
    title: "Software Development",
    icon: softwaredevelopementicon,
    img: softwareDevImg,
    description:
      "Custom software solutions tailored to meet your business objectives efficiently.",
  },
  {
    title: "Artificial Intelligence",
    icon: artificialintelligenceicon,
    img: aiImg,
    description:
      "AI-powered solutions that automate processes and drive smarter decisions at scale.",
  },
  {
    title: "Data Science",
    icon: datascienceicon,
    img: dataScienceImg,
    description:
      "Extract insights from complex data sets to power strategy, prediction, and growth.",
  },
  {
    title: "Branding & Digital Marketing",
    icon: brandingicon,
    img: brandingImg,
    description:
      "Elevate your brand presence through innovative marketing strategies and creative design.",
  },
  {
    title: "Accounts & Finance",
    icon: accountsicon,
    img: accountsimg,
    description:
      "Robust financial services including bookkeeping, payroll, and strategic planning.",
  },
  {
    title: "Blue Collar Jobs",
    icon: bluecollaricon,
    img: bluecollarimg,
    description:
      "Reliable workforce solutions for skilled and semi-skilled labor across industries.",
  },
  {
    title: "Industrial Staffing",
    icon: industrialstaffingicon,
    img: industrialstaffingimg,
    description:
      "Flexible staffing solutions for industrial roles to keep operations running smoothly.",
  },
  {
    title: "Data Management & Analytics",
    icon: datamanagementicon,
    img: dataanalyticsimg,
    description:
      "Ensure data integrity and actionable insights through structured management and analysis.",
  },
  {
    title: "Healthcare IT Solutions",
    icon: healthcareiticon,
    img: healthcareImg,
    description:
      "Secure and scalable IT systems that optimize clinical workflows and patient care.",
  },
  {
    title: "Electronic Health Records (EHR) Implementations",
    icon: ehricon,
    img: ehrimg,
    description:
      "Seamless EHR deployment for improved patient data access, compliance, and outcomes.",
  },
  {
    title: "Healthcare & Clinical",
    icon: healthcareicon,
    img: healthcareclinicalimg,
    description:
      "Accelerate clinical operations with tailored solutions for healthcare organizations.",
  },
];

const ServicesCarousel = () => {
  return (
    <section className="services-carousel-wrapper">
      <div className="wavy-thread-container">
        <svg
          className="wavy-thread-svg"
          viewBox="0 0 200 1000"
          preserveAspectRatio="none"
        >
          <path
            className="wavy-thread-path"
            d="M100,0 
         C50,100 150,200 100,300 
         C50,400 150,500 100,600 
         C50,700 150,800 100,900 
         C50,950 150,1050 100,1100"
          />
        </svg>
      </div>
      <img
        src={bgcard}
        alt="background card"
        className="services-carousel-bg-card"
      />
      <span className="services-carousel-star-icon">
        <img src={twinklestar} alt="twinkle star" />
      </span>
      <div className="services-carousel-header">
        <p className="services-carousel-heading">
          <span className="services-carousel-heading-tag"></span>
          OUR SERVICES
        </p>
        <h2 className="services-carousel-title">
          We Optimize Operations with Our{" "}
          <span className="services-carousel-highlight">Expertise</span>
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          1025: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="services-carousel-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="services-carousel-card"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="services-carousel-img"
              />
              <div className="services-carousel-content">
                <div className="services-carousel-icon">
                  <img src={service.icon} alt="icons" />
                </div>
                <h3 className="services-carousel-name">{service.title}</h3>
                <p className="services-carousel-desc">{service.description}</p>

                <div className="services-carousel-footer">
                  <button className="services-carousel-btn">+</button>
                  <div className="services-carousel-dots">
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

export default ServicesCarousel;
