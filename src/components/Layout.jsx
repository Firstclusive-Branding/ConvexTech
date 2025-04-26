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
    if (location.pathname === "/") return;

    setPageChanging(true);
    setShowOutlet(false);

    const animationDuration = 800;

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
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
    <motion.div
      className="circle-reveal"
      initial={{ "--percentage": "0deg" }}
      animate={{ "--percentage": "360deg" }}
      exit={{ "--percentage": "0deg" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default Layout;
