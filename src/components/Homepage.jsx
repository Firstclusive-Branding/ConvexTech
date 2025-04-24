import React, { useEffect } from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import ClientTestimonials from "./ClientTestimonials";
import StatsCounter from "./StatsCounter";
import ServicesCarousel from "./ServicesCarousel";

function Homepage() {
  useEffect(() => {
    window.document.title = "ConvexTech - Smart Tech Solutions";
  }, []);

  return (
    <div>
      <HeroSection />
      <Services />
      <WhoWeAre />
      <ServicesCarousel />
      <StatsCounter />
      <ClientTestimonials />
    </div>
  );
}

export default Homepage;
