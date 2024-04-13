import React from "react";
import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <p className="carbon-byte">
            <span className="text-wrapper">C</span>
            <span className="span">arbon</span>
            <span className="text-wrapper">B</span>
            <span className="span">yte</span>
          </p>
          <div className="div">Impact</div>
          <div className="text-wrapper-2">About Us</div>
          <div className="text-wrapper-3">Login</div>
          <p className="p">
            At CarbonByte, our mission is to drive meaningful change by empowering companies and industries to measure,
            manage, and mitigate their carbon footprint. We are committed to promoting environmental transparency and
            accountability in corporate operations, helping companies understand their carbon impact and identify
            opportunities for improvement.
                  </p>
        <div className="image"></div>
          <img className="vector" alt="Vector" src="vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default About;