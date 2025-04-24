import React, { useEffect } from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import ClientTestimonials from "./ClientTestimonials";
import StatsCounter from "./StatsCounter";
import ServicesCarousel from "./ServicesCarousel";
import "../styles/Homepage.css";
import Presence from "./Presence";

function Homepage() {
  useEffect(() => {
    window.document.title = "ConvexTech - Smart Tech Solutions";
  }, []);

  return (
    <div className="homepage-container">
      <HeroSection />
      <Services />
      <WhoWeAre />
      <ServicesCarousel />
      <StatsCounter />
      <ClientTestimonials />
      <Presence />
    </div>
  );
}

export default Homepage;
