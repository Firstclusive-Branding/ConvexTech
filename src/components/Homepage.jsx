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
import TechSolutions from "./TechSolutions";
import EmployerTestimonials from "./EmployerTestimonials";
import CandidateTestimonials from "./CandidateTestimonials";
import GetInTouchBanner from "./GetInTouchBanner";

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
      <TechSolutions />
      {/* <Services /> */}
      <WhoWeAre />
      <ServicesCarousel />
      <StatsCounter />
      <EmployerTestimonials />
      <CandidateTestimonials />
      <ClientTestimonials />
      <Presence />
      <GetInTouchBanner />
    </div>
  );
}

export default Homepage;
