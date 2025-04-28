import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/AboutusCarousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const aboutusCarouselData = [
  {
    title: "SAP Solutions",
    img: "https://picsum.photos/seed/sap/400/300",
    link: "/services/sap",
  },
  {
    title: "Software Development",
    img: "https://picsum.photos/seed/software/400/300",
    link: "/services/software",
  },
  {
    title: "Artificial Intelligence",
    img: "https://picsum.photos/seed/ai/400/300",
    link: "/services/ai",
  },
  {
    title: "Data Science",
    img: "https://picsum.photos/seed/ds/400/300",
    link: "/services/data-science",
  },
  {
    title: "Branding & Digital Marketing",
    img: "https://picsum.photos/seed/branding/400/300",
    link: "/services/branding",
  },
  {
    title: "Accounts & Finance",
    img: "https://picsum.photos/seed/finance/400/300",
    link: "/services/accounts-and-finance",
  },
  {
    title: "Blue Collar Jobs",
    img: "https://picsum.photos/seed/bluecollar/400/300",
    link: "/services/blue-collar-jobs",
  },
  {
    title: "Industrial Staffing",
    img: "https://picsum.photos/seed/staffing/400/300",
    link: "/services/industrial-staffing",
  },
  {
    title: "Data Management & Analytics",
    img: "https://picsum.photos/seed/analytics/400/300",
    link: "/services/data-management-and-analytics",
  },
  {
    title: "Healthcare IT Solutions",
    img: "https://picsum.photos/seed/healthit/400/300",
    link: "/services/healthcare-it-solutions",
  },
  {
    title: "Electronic Health Records (EHR) Implementations",
    img: "https://picsum.photos/seed/ehr/400/300",
    link: "/services/ehr-implementions",
  },
  {
    title: "Healthcare & Clinical",
    img: "https://picsum.photos/seed/healthcare/400/300",
    link: "/services/healthcare-and-clinical",
  },
];
const AboutusCarousel = () => {
  return (
    <section className="aboutus-carousel-section">
      <motion.div
        className="aboutus-carousel-container"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.4 }}
      >
        <div className="aboutus-carousel-header">
          <div className="aboutus-carousel-label">
            <span></span>Convextech
          </div>
          <div className="aboutus-carousel-nav-buttons">
            <div className="aboutus-carousel-button-prev">
              <FaArrowLeft />
            </div>
            <div className="aboutus-carousel-button-next">
              <FaArrowRight />
            </div>
          </div>
        </div>

        <h2 className="aboutus-carousel-heading">
          We Optimize Operations with <span>Our Expertise</span>
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".aboutus-carousel-button-next",
            prevEl: ".aboutus-carousel-button-prev",
          }}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1600: { slidesPerView: 5 },
          }}
          className="aboutus-carousel-swiper"
        >
          {aboutusCarouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="aboutus-carousel-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="aboutus-carousel-img"
                />

                <div className="aboutus-carousel-card-content">
                  <h3 className="aboutus-carousel-title">{item.title}</h3>
                  <Link to={item.link} className="aboutus-carousel-readmore">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default AboutusCarousel;
