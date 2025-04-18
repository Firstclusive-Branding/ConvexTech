import React from "react";
import { motion } from "framer-motion";
import "../styles/ClientTestimonials.css";

const testimonials = [
  {
    name: "Robb Norris",
    role: "Director of Recruitment, D4M International",
    feedback:
      "The SAP Platform, the team had implemented was able to give us a seamless experience, for us and which made most of the automation go-good. The team Convextech, has been the experienced team and we look forward for more such implementations.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Emily Carter",
    role: "Product Manager, NovaApps",
    feedback:
      "We collaborated with ConvexTech on a product transformation initiative, and the entire workflow was handled with precision. Their understanding of functional requirements, ability to translate them into scalable features, and their proactive support made the delivery process smooth and results-driven.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael Turner",
    role: "President, Carlile Group LLC",
    feedback:
      "We had a finest experience in terms of web application, where we had explained the entire workflow with Convextech, and the team had delivered exactly as to what we had looked forward for, and indeed it went beyond our expectation.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="testimonials-section">
      <motion.h2
        className="testimonials-heading"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-feedback">“{item.feedback}”</p>
            <div className="testimonial-info">
              <h4 className="testimonial-name">{item.name}</h4>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
