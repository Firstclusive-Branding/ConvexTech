import React, { useEffect } from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import ClientTestimonials from "./ClientTestimonials";
import StatsCounter from "./StatsCounter";

function Homepage() {
  useEffect(() => {
    window.document.title = "ConvexTech - Smart Tech Solutions";
  }, []);

  return (
    <div>
      <HeroSection />
      <Services />
      <WhoWeAre />
      <ClientTestimonials />
      <StatsCounter />
    </div>
  );
}

export default Homepage;
