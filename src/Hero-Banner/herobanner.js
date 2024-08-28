import React, { useState, useEffect } from "react";
import "./herobanner.css";

const services = ["Excellence"];

const HeroSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-sec-main">
      <div className="hero-overlay">
        <div className="hero-text">
          <div>
            <h1 style={{ marginTop: "151px", fontSize: "55px" }}>
              Ignite Your Future with Us
            </h1>

            <h2 className="no-wrap">
              Transforming Potential into
              <span
                className="zoom-out"
                style={{
                  color: "#ea8a05",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {services[currentServiceIndex]}
              </span>{" "}
            </h2>
          </div>

          <p>
            At Shukla College of Professional Education, we don’t just educate;
            we inspire. Our BCA and BBA programs are designed to shape
            tomorrow’s leaders and innovators. From cutting-edge technology to
            dynamic business strategies, our curriculum prepares you for a
            thriving career. Join us, and let’s embark on a journey where your
            ambitions become reality.
          </p>
          <div className="hero-button">
            <a href="/contact">
              <button>Let's Talk</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
