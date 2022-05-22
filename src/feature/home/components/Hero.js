import React from "react";
import "@assets/css/shared/Hero.css";

export function Hero() {
  const goToSkills = () => {
    console.log("Go to skills");
  };

  return (
    <section className="hero landing-page-section">
      <div className="hero-heading">
        <h1>Hello, I'm Valp</h1>
        <h2>I'm a Frontend Developer</h2>
        <a onClick={goToSkills} href="#skills">Show me more</a>
      </div>

      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </section>
  );
}
