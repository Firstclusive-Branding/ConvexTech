import React, { useEffect } from "react";
import HeroSection from "./Hero";
// import Services from "./Services";
import WhoWeAre from "./WhoWeAre";
import ClientTestimonials from "./ClientTestimonials";
import StatsCounter from "./StatsCounter";
import ServicesCarousel from "./ServicesCarousel";
import "../styles/Homepage.css";
import Presence from "./Presence";
import WhyChooseUs from "./WhyChooseUs";
import StaffingSolutions from "./StaffingSolutions";
import Industries from "./Industries";
import Vacancies from "./Vacancies";

function Homepage() {
  useEffect(() => {
    window.document.title = "ConvexTech - Smart Tech Solutions";
  }, []);

  return (
    <div className="homepage-container">
      <HeroSection />
      <WhyChooseUs />
      <StaffingSolutions />
      <Industries />
      <Vacancies />
      {/* <Services /> */}
      <WhoWeAre />
      <ServicesCarousel />
      <StatsCounter />
      <ClientTestimonials />
      <Presence />
    </div>
  );
}

export default Homepage;
