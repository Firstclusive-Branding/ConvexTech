import React from "react";
import { motion } from "framer-motion";
import "../styles/ErrorPage.css";
import errorimg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <motion.img
        src={errorimg}
        alt="404 Visual"
        className="error-page-image"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="error-page-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        className="error-page-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        The page you’re looking for doesn’t exist.
      </motion.p>
    </div>
  );
};

export default ErrorPage;
