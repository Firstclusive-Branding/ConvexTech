import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import aboutus1 from "../assets/About Us Assets/about-us1.jpg";
import aboutus2 from "../assets/About Us Assets/about-us2.jpg";

import "../styles/AboutUs.css";

import StatsCounter from "./StatsCounter";
const services = [
  {
    title: "SAP Solutions",
    image: "https://picsum.photos/seed/sap/500/250",
    link: "/sap",
    description:
      "Streamline enterprise operations with smart, scalable SAP integrations.",
  },
  {
    title: "Software Development",
    image: "https://picsum.photos/seed/dev/500/250",
    link: "/softwaredevelopment",
    description:
      "Build custom web and mobile apps that actually deliver business results.",
  },
  {
    title: "Artificial Intelligence",
    image: "https://picsum.photos/seed/ai/500/250",
    link: "/artificialintelligence",
    description:
      "Leverage AI to automate decisions, optimize performance and drive innovation.",
  },
  {
    title: "Data Science",
    image: "https://picsum.photos/seed/data/500/250",
    link: "/datascience",
    description:
      "Transform raw data into actionable insights that move your business forward.",
  },
  {
    title: "Branding & Digital Marketing",
    image: "https://picsum.photos/seed/branding/500/250",
    link: "/branding",
    description:
      "Create a brand that stands out and campaigns that convert across every channel.",
  },
  {
    title: "Staffing & Recruitment",
    image: "https://picsum.photos/seed/staffing/500/250",
    link: "/staffing",
    description:
      "Find the right talent fast with recruitment that understands your business.",
  },
  {
    title: "Healthcare & Clinical",
    image: "https://picsum.photos/seed/healthcare/500/250",
    link: "/healthcare",
    description:
      "Digitize your healthcare operations for better patient care and efficiency.",
  },
  {
    title: "Non-IT Services",
    image: "https://picsum.photos/seed/nonit/500/250",
    link: "/nonit",
    description:
      "Support functions like logistics, HR, and admin—delivered with precision.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - ConvexTech";
  }, []);

  return (
    <section className="about-section">
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-content">
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              It is often said that, when we embark on a technical and a
              transformational journey, the enterprise often needs to scale up
              with equal speed and accuracy.
            </p>
            <p>
              These dual parameters are enhanced with the empowerment of digital
              solutions. For 13 years, we’ve built expertise in offering
              end-to-end solutions that improve real-world workflows and deliver
              tangible value.
            </p>
          </div>
        </div>

        <img src={aboutus1} alt="About ConvexTech" className="about-img" />
      </motion.div>
      <motion.div
        className="about-us-who-we-are"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img src={aboutus2} alt="Who we are" className="who-img" />
        <div className="who-content">
          <div className="who-we-are-text">
            <h2>Who We Are</h2>
            <p>
              ConvexTech is driven by innovation. We deliver cutting-edge
              solutions with a focus on performance, adaptability, and long-term
              value. Our expert team brings years of cross-industry experience
              and deep technical skill to every project we take on.
            </p>
          </div>
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
      </motion.div>
      <StatsCounter />

      <div className="services-showcase">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Solutions that Scale with You
        </motion.h2>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              className="service-horizontal"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-img"
              />
              <Link to={service.link} className="service-content">
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
