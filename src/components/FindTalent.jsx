import React, { useEffect, useState } from "react";
import "../styles/FindTalent.css";
import findtalentimg from "../assets/Find Talent Assets/find-talent.png";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

const baseURL = import.meta.env.VITE_API_URL;

const FindTalent = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyname: "",
    email: "",
    jobrole: "",
    jobdescription: "",
    mobile: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    document.title = `Find Talent - Convex Tech`;
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        `${baseURL}/api/user/talent/create`,
        formData
      );
      if (res.data && res.data.error === false) {
        Swal.fire("Success", "Requirement submitted successfully!", "success");
        setFormData({
          companyname: "",
          email: "",
          jobrole: "",
          jobdescription: "",
          mobile: "",
        });
        setTermsAccepted(false);
      } else {
        Swal.fire(
          "Error",
          res.data.message || "Something went wrong.",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Failed to submit.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="find-talent-container">
      <div className="find-talent-content">
        <motion.div
          className="find-talent-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="find-talent-subtitle">Find the Right Candidates</h3>
          <h1 className="find-talent-title">Find Top Talent</h1>
          <p className="find-talent-description">
            Submit your hiring requirements, and we will connect you with
            qualified candidates that match your needs.
          </p>
          <div className="find-talent-image">
            <img src={findtalentimg} alt="Find Talent" />
          </div>
        </motion.div>

        <motion.div
          className="find-talent-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className="find-talent-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter company name"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Enter job role"
              name="jobrole"
              value={formData.jobrole}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Describe job requirements"
              name="jobdescription"
              value={formData.jobdescription}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="tel"
              placeholder="Enter contact number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <div className="find-talent-checkbox">
              <input
                type="checkbox"
                id="find-TermsCheckbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="find-TermsCheckbox"
                className="find-talent-checkbox-label"
              >
                By checking this box, I consent to receive text messages related
                to conversations and follow-ups from Cadila Global. You can
                reply ‘STOP’ at any time to opt out. Message and data rates may
                apply. Message frequency may vary; text HELP for assistance. For
                more information, please visit our{" "}
                <a href="/privacy-policy">Privacy Policy</a> and{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a>.
              </label>
            </div>

            <button type="submit" disabled={loading}>
              <span style={{ visibility: loading ? "hidden" : "visible" }}>
                Send Enquiry
              </span>
              {loading && <span className="find-talent-button-loader"></span>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FindTalent;
