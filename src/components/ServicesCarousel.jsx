import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaUsers,
  FaBriefcase,
  FaCogs,
  FaChartLine,
  FaRobot,
  FaUserTie,
  FaLaptopCode,
  FaMicroscope,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";
import twinklestar from "../assets/Services Carousel Assets/twinkle.png";
import bgcard from "../assets/Services Carousel Assets/bg-card.png";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ServicesCarousel.css";

const services = [
  {
    title: "Artificial Intelligence",
    icon: <FaBrain />,
    img: "https://picsum.photos/seed/ai/400/300",
    description:
      "AI-powered solutions that automate processes and drive smarter decisions at scale.",
  },
  {
    title: "Data Science",
    icon: <FaDatabase />,
    img: "https://picsum.photos/seed/ds/400/300",
    description:
      "Extract insights from complex data sets to power strategy, prediction, and growth.",
  },
  {
    title: "Staffing & Recruitment",
    icon: <FaUsers />,
    img: "https://picsum.photos/seed/staff/400/300",
    description:
      "Find, hire and retain top talent with our tailored staffing and recruitment services.",
  },
  {
    title: "Non-IT Services",
    icon: <FaBriefcase />,
    img: "https://picsum.photos/seed/nonit/400/300",
    description:
      "Support functions like HR, admin and operations—optimized for efficiency and scale.",
  },
  {
    title: "Automation Tools",
    icon: <FaCogs />,
    img: "https://picsum.photos/seed/auto/400/300",
    description:
      "Streamline workflows with intelligent automation tools that eliminate manual tasks.",
  },
  {
    title: "Market Analysis",
    icon: <FaChartLine />,
    img: "https://picsum.photos/seed/market/400/300",
    description:
      "Analyze trends, competitors, and consumer behavior to shape winning strategies.",
  },
  {
    title: "Machine Learning",
    icon: <FaRobot />,
    img: "https://picsum.photos/seed/ml/400/300",
    description:
      "Build predictive models and train systems to learn, adapt and improve autonomously.",
  },
  {
    title: "Leadership Hiring",
    icon: <FaUserTie />,
    img: "https://picsum.photos/seed/leader/400/300",
    description:
      "Executive search solutions to place leaders who can drive business transformation.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    img: "https://picsum.photos/seed/web/400/300",
    description:
      "Design and develop high-performance websites and web apps tailored to your goals.",
  },
  {
    title: "Clinical Research",
    icon: <FaMicroscope />,
    img: "https://picsum.photos/seed/clinical/400/300",
    description:
      "Accelerate research outcomes with structured trials, data collection, and compliance.",
  },
  {
    title: "DevOps Consulting",
    icon: <FaServer />,
    img: "https://picsum.photos/seed/devops/400/300",
    description:
      "Integrate development and operations for faster, more reliable software delivery.",
  },
  {
    title: "Project Management",
    icon: <FaProjectDiagram />,
    img: "https://picsum.photos/seed/project/400/300",
    description:
      "Manage complex projects with clarity, timelines, and cross-functional collaboration.",
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="services-carousel-img"
              />
              <div className="services-carousel-icon">{service.icon}</div>
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesCarousel;
