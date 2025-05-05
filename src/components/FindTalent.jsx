import React, { useEffect } from "react";
import "../styles/FindTalent.css";
import findtalentimg from "../assets/Find Talent Assets/find-talent.png";
import { motion } from "framer-motion";

const FindTalent = () => {
  useEffect(() => {
    document.title = `Find Talent - Convex Tech`;
  }, []);
  return (
    <div>
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
            <form className="find-talent-form">
              <input
                type="text"
                placeholder="Enter company name"
                name="Company_Name"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                required
              />
              <input
                type="text"
                placeholder="Enter job role"
                name="Job_Role"
                required
              />
              <textarea
                placeholder="Describe job requirements"
                name="Requirements"
                required
              ></textarea>
              <input
                type="tel"
                placeholder="Enter contact number"
                name="Contact_Number"
                required
              />

              <div className="find-talent-checkbox">
                <input type="checkbox" id="find-TermsCheckbox" />
                <label
                  htmlFor="find-TermsCheckbox"
                  className="find-talent-checkbox-label"
                >
                  By checking this box, I consent to receive text messages
                  related to conversations and follow-ups from Cadila Global.
                  You can reply ‘STOP’ at any time to opt out. Message and data
                  rates may apply. Message frequency may vary; text HELP for
                  assistance. For more information, please visit our{" "}
                  <a href="/privacy-policy">Privacy Policy</a> and SMS{" "}
                  <a href="/terms-and-conditions">Terms and Conditions</a>.
                </label>
              </div>

              <button type="submit">Submit Requirement</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
