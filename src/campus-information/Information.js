import React from "react";
import "./Information.css";

const CampusInfo = () => {
  return (
    <div className="campus-info">
      <div className="hero-section">
        <img
          src="/College-3.jpg
        "
          alt="Campus"
          className="campus-image"
        />
        <div className="hero-overlay">
          <h1>Welcome to Our Campus</h1>
          <p>
            Explore our world-class campus, state-of-the-art facilities, and
            vibrant community.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>Graduate Programs</h3>
          <p>
            Excel in a variety of fields with our prestigious graduate programs.
          </p>
        </div>
        <div className="info-card">
          <h3>Programs</h3>
          <p>
            Offering undergraduate and doctoral level programs tailored for your
            future.
          </p>
        </div>
        <div className="info-card">
          <h3>Doctoral Degrees</h3>
          <p>Engage in groundbreaking research with our doctoral programs.</p>
        </div>
        <div className="info-card">
          <h3>Alumni & Giving</h3>
          <p>Connect with our alumni network and contribute to our legacy.</p>
        </div>
        <div className="info-card">
          <h3>Undergraduate</h3>
          <p>
            Our undergraduate programs offer a robust foundation for success.
          </p>
        </div>
        <div className="info-card">
          <h3>International Hubs</h3>
          <p>
            Join our global hubs for an international educational experience.
          </p>
        </div>
        <div className="info-card">
          <h3>Global Students</h3>
          <p>Become part of our diverse global student body.</p>
        </div>
      </div>
    </div>
  );
};

export default CampusInfo;
