import React from "react";
import "./impact.css";

function Impact(){
  return (
    <div className="impact">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <p className="carbon-byte">
            <span className="text-wrapper">C</span>
            <span className="span">arbon</span>
            <span className="text-wrapper">B</span>
            <span className="span">yte</span>
          </p>
          <div className="text-wrapper-2">About Us</div>
          <div className="text-wrapper-3">Login</div>
          <p className="since-our-inception">
            Since our inception, we have revolutionized the landscape of environmental accountability and
            sustainability. Through our innovative platform, we&#39;ve empowered countless companies to measure, manage,
            and mitigate their carbon footprint, catalyzing a global shift towards more sustainable business practices.
            <br />
            <br />
            <br />
            By providing transparent and accessible carbon footprint auditing services, we&#39;ve enabled businesses to
            understand their environmental impact, identify opportunities for improvement, and take meaningful action to
            reduce emissions.
          </p>
          <p className="carbonbyte-has-not">
            ‘’CarbonByte has not only helped companies achieve carbon neutrality but have also inspired a broader
            commitment to environmental stewardship within industries worldwide’’
                      <br />
                      <br />
            -TIME Magazine, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;