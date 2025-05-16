import React, { useEffect, useState } from "react";
import "../styles/ProjectEnquiry.css";
import enquiryImage from "../assets/Project Enquiry Assets/project-enquiry.png";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_API_URL;

const ProjectEnquiry = () => {
  useEffect(() => {
    document.title = `Project Enquiry - Convex Tech`;
  }, []);

  const [projectTypes, setProjectTypes] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    companyname: "",
    description: "",
    estimatedbudget: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (type) => {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (projectTypes.length === 0) {
      Swal.fire(
        "Select Service",
        "Please select at least one service.",
        "warning"
      );
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formData,
        services: projectTypes.join(", "),
      };

      const response = await axios.post(
        `${baseURL}/api/user/service/create`,
        payload
      );

      Swal.fire(
        "Success",
        "Your project enquiry has been submitted!",
        "success"
      );

      // Reset
      setFormData({
        fullname: "",
        email: "",
        companyname: "",
        description: "",
        estimatedbudget: "",
      });
      setProjectTypes([]);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="project-enquiry-container">
        <div className="project-enquiry-content">
          <motion.div
            className="project-enquiry-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="project-enquiry-subtitle">Start Your Project</h3>
            <h1 className="project-enquiry-title">
              Let’s Build Something Great
            </h1>
            <p className="project-enquiry-description">
              Tell us what you're building. We’ll review your request and get
              back with a plan that suits your goals and budget.
            </p>
            <div className="project-enquiry-image">
              <img src={enquiryImage} alt="Project Enquiry" />
            </div>
          </motion.div>

          <motion.div
            className="project-enquiry-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="project-enquiry-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyname"
                placeholder="Enter company name"
                value={formData.companyname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="project-type-checkboxes">
                <p>Services:</p>
                {[
                  "Logo & Branding",
                  "Web Design",
                  "Web Development",
                  "Digital Marketing",
                  "SAP Consulting",
                  "AI Solutions",
                  "Data Science",
                  "E-Commerce Development",
                ].map((service) => (
                  <label className="checkbox-label" key={service}>
                    <input
                      type="checkbox"
                      value={service}
                      onChange={() => handleCheckboxChange(service)}
                      checked={projectTypes.includes(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>

              <input
                type="text"
                name="estimatedbudget"
                placeholder="Estimated budget"
                value={formData.estimatedbudget}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Tell us more about the project"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <label
                htmlFor="find-TermsCheckbox"
                className="find-talent-checkbox-label"
              >
                By checking this box, I consent to receive text messages related
                to conversations and follow-ups from ConvexTech. You can reply
                ‘STOP’ at any time to opt out. Message and data rates may apply.
                Message frequency may vary; text HELP for assistance. For more
                information, please visit our{" "}
                <a href="/privacy-policy">Privacy Policy</a> and{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a>.
              </label>
              <button type="submit" disabled={loading}>
                <span style={{ visibility: loading ? "hidden" : "visible" }}>
                  Send Enquiry
                </span>
                {loading && <span className="project-button-loader"></span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEnquiry;
