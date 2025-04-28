import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../styles/Layout.css";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";

const Layout = () => {
  const location = useLocation();
  const [pageChanging, setPageChanging] = useState(false);
  const [showOutlet, setShowOutlet] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about-us") return;

    setPageChanging(true);
    setShowOutlet(false);

    const animationDuration = 1000;

    const timeout1 = setTimeout(() => {
      setShowOutlet(true);
    }, animationDuration * 1);

    const timeout2 = setTimeout(() => {
      setPageChanging(false);
    }, animationDuration);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [location.pathname]);

  return (
    <div className="layout-wrapper">
      <Header />
      <Navbar />
      <main className="main-wrapper">
        <AnimatePresence mode="wait">
          {pageChanging && <CircularSweep />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {showOutlet && <Outlet />}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

const CircularSweep = () => {
  return (
    <div className="circle-container">
      <motion.svg
        viewBox="0 0 1000 1000"
        className="circle-svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 0 }}
        exit={{ rotate: 180 }}
        transition={{ duration: 1, ease: [0, 0.1, 0.8, 0.2] }}
      >
        <motion.circle
          className="semi-circle-layover semi-a"
          cx="500"
          cy="500"
          r="450"
          initial={{ strokeDashoffset: 2827 }}
          animate={{ strokeDashoffset: 1413.5 }}
          exit={{ strokeDashoffset: 2827 }}
          transition={{ duration: 1, ease: [0, 0.1, 0.8, 0.2] }}
        />
        <motion.circle
          className="semi-circle-layover semi-b"
          cx="500"
          cy="500"
          r="450"
          initial={{ strokeDashoffset: 2827 }}
          animate={{ strokeDashoffset: 1413.5 }}
          exit={{ strokeDashoffset: 2827 }}
          transition={{ duration: 1, ease: [0, 0.1, 0.8, 0.2] }}
        />
      </motion.svg>
    </div>
  );
};

export default Layout;
