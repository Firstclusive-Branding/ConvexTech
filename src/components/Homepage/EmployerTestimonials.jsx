import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "../../styles/ClientTestimonials.css";
import testimonialBg from "../../assets/Client Testimonials Assets/testimonial-bg.png";

const testimonials = [
  {
    name: "Samantha Lee",
    position: "Head of Talent Acquisition",
    content:
      "Convex Tech transformed our hiring process. The level of talent and turnaround speed exceeded expectations across every project.",
  },
  {
    name: "Vikram Desai",
    position: "Operations Manager",
    content:
      "The team delivered quality profiles with zero time wasted. We finally found a staffing partner that actually understands business needs.",
  },
  {
    name: "Elena Martins",
    position: "HR Business Partner",
    content:
      "Reliable, responsive, and effective — that’s how I’d sum up our experience. Convex Tech helped us scale fast without compromise.",
  },
];

const EmployerTestimonials = () => {
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
          Employer Testimonials
        </div>
        <h2>
          What <span className="ct-highlight">Our Partners</span> Say About Us
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

export default EmployerTestimonials;
