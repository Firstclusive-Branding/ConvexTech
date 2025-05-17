import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "../styles/Layout.css";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import FloatingIcons from "./FloatingIcons.jsx";

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

    const animationDuration = 1000;

    const timeout1 = setTimeout(() => {
      setShowOutlet(true);
    }, animationDuration);

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
          {pageChanging && <CurtainSweep />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {showOutlet && <Outlet />}
        </motion.div>
      </main>
      <FloatingIcons />
      <Footer />
    </div>
  );
};

const CurtainSweep = () => {
  return (
    <motion.div
      className="curtain-overlay"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
    />
  );
};

export default Layout;
