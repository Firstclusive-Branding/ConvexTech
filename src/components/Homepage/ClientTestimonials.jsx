import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "../../styles/ClientTestimonials.css";
import testimonialBg from "../../assets/Client Testimonials Assets/testimonial-bg.png";

const testimonials = [
  {
    name: "Nathan Greene",
    position: "Founder, NexaTech",
    content:
      "Our new website not only looks world-class but performs like a sales machine. Convex Tech nailed the UX, speed, and SEO.",
  },
  {
    name: "Amanda Clark",
    position: "CMO, BrightPath Media",
    content:
      "We’ve run campaigns with other agencies before, but none delivered ROI like this. Their marketing team just gets it.",
  },
  {
    name: "Thomas Reed",
    position: "SAP Project Lead, Altor Group",
    content:
      "Their SAP consultants understood both our tech stack and business goals. Deployment was clean, and support was rock solid.",
  },
];

const ClientTestimonials = () => {
  return (
    <section
      className="ct-section"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <motion.div
        className="ct-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="ct-label">
          <span className="ct-label-tag"></span>
          Client Testimonials
        </div>
        <h2>
          See What <span className="ct-highlight">Our Clients</span> Are Saying
        </h2>
      </motion.div>

      <div className="ct-cards-wrapper">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="ct-card"
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <BiSolidQuoteAltRight className="ct-quote-icon" />
            <p className="ct-content">{testimonial.content}</p>
            <hr />
            <div className="ct-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="ct-star" />
              ))}
            </div>
            <div className="ct-user-info">
              <strong>{testimonial.name}</strong>,{" "}
              <span>{testimonial.position}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
