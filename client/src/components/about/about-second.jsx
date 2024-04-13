import React from "react";
import "./about-second.css";

export const AboutSecond = () => {
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
          <div className="text-wrapper-3">Login</div>
          <p className="p">
            By offering a comprehensive suite of tools and resources, we enable
            companies to track their progress towards carbon neutrality, adopt
            more sustainable practices, and contribute to a low-carbon economy.
            Our mission extends beyond mere compliance with regulations; we
            aspire to inspire and empower companies to become leaders in
            environmental sustainability, driving positive change within their
            industries and communities.
          </p>

          <div className="image"></div>
          <div className="ButtonWrapper">
            <input
              className={"navPage1"}
              type="button"
              //onClick={ }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
