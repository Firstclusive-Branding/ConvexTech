import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "../../styles/ClientTestimonials.css";
import testimonialBg from "../../assets/Client Testimonials Assets/testimonial-bg.png";

const testimonials = [
  {
    name: "Ryan Walker",
    position: "Software Engineer",
    content:
      "From first call to offer letter, everything was smooth and transparent. I got placed in just 10 days through Convex Tech.",
  },
  {
    name: "Emily Brooks",
    position: "Digital Marketing Analyst",
    content:
      "I’ve worked with other consultancies before, but this one felt personal. They actually listened and placed me in the right role.",
  },
  {
    name: "Daniel Carter",
    position: "SAP Functional Consultant",
    content:
      "They didn’t just find me a job, they found me a growth path. Grateful for how committed and professional the team was.",
  },
];

const CandidateTestimonials = () => {
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
          Candidate Testimonials
        </div>
        <h2>
          What <span className="ct-highlight">Our Hires</span> Have Shared
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

export default CandidateTestimonials;
