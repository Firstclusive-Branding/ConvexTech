import React from "react";
import HeroSection from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";
import ClientTestimonials from "./ClientTestimonials";
import StatsCounter from "./StatsCounter";

function Homepage() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <Services />
      <ClientTestimonials />
      <StatsCounter />
    </div>
  );
}

export default Homepage;
