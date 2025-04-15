import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ConvexTech</h1>
        <p>Powering Businesses with Next-Gen Solutions</p>
        <button className="btn-primary">Read More</button>
      </div>
    </section>
  );
};

export default HeroSection;
