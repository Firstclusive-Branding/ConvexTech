import React from "react";
import "../../styles/ITServices.css";
import { motion } from "framer-motion";
import { FaCloud, FaNetworkWired, FaCode } from "react-icons/fa";

const ITServices = () => {
  return (
    <section className="itservices-section">
      <div className="itservices-main-heading">
        <h1>
          <span>Information Technology (IT)</span> Services at ConvexTech
        </h1>
        <p>Powering business evolution through cloud, connectivity and code.</p>
      </div>

      <motion.div
        className="itservices-wrapper"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <div className="itservices-card">
          <div className="itservices-image">
            <img
              src="https://picsum.photos/500/300?random=21"
              alt="Cloud Services"
            />
          </div>
          <div className="itservices-content">
            <p className="itservices-heading">
              <span></span>Cloud Expertise
            </p>
            <h2>
              <FaCloud /> <span>Scalable</span> Cloud Infrastructure
            </h2>
            <p>
              We design cloud systems that scale with your business. Whether
              it’s AWS, Azure, or Google Cloud, we ensure seamless deployment
              and migration.
            </p>
            <p>
              Our team specializes in building resilient and secure
              architectures that support long-term business growth and
              operational continuity.
            </p>
            <div className="itservices-badges">
              <span>Multi-Cloud Ready</span>
              <span>Resilient Design</span>
              <span>Secure by Default</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="itservices-card itservices-reverse">
          <div className="itservices-image">
            <img
              src="https://picsum.photos/500/300?random=22"
              alt="Network Solutions"
            />
          </div>
          <div className="itservices-content">
            <p className="itservices-heading">
              <span></span>Connectivity First
            </p>
            <h2>
              <FaNetworkWired /> <span>Secure</span> Network Architecture
            </h2>
            <p>
              From LAN to SD-WAN, we develop robust networking systems that
              ensure security, speed, and scalability for global enterprises.
            </p>
            <p>
              Our solutions are tailored for performance optimization,
              compliance, and ease of management across distributed
              environments.
            </p>
            <div className="itservices-badges">
              <span>Firewall Integration</span>
              <span>Zero Trust Network</span>
              <span>Global Scalability</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="itservices-card">
          <div className="itservices-image">
            <img
              src="https://picsum.photos/500/300?random=23"
              alt="Development"
            />
          </div>
          <div className="itservices-content">
            <p className="itservices-heading">
              <span></span>Custom Code
            </p>
            <h2>
              <FaCode /> <span>Custom</span> App Development
            </h2>
            <p>
              We craft scalable, high-performing web and mobile apps using the
              latest tech stack, from frontend UI to backend logic.
            </p>
            <p>
              Our developers follow agile methodologies to ensure rapid
              prototyping, testing, and delivery that aligns with your business
              goals.
            </p>
            <div className="itservices-badges">
              <span>Frontend & Backend</span>
              <span>Cross-Platform</span>
              <span>API-First</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ITServices;
