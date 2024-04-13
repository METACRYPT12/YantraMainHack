import React from "react";
import "./loginPage.css";

const Dualloginpage = () => {
  return (
    <div className="Dualloginpage">
      <div className="overlap-wrapper">
        <div className="overlap">
          <p className="carbon-byte">
            <span className="text-wrapper">C</span>
            <span className="span">arbon</span>
            <span className="text-wrapper">B</span>
            <span className="span">yte</span>
          </p>
          <div className="div"><a href='/impact/'>Impact</a>
          </div>
          <div className="text-wrapper-2"><a href='/about/'>About Us</a>
          </div>
          <div className="text-wrapper-4">For Auditors</div>
          <div className="text-wrapper-5">For Companies</div>
          <p className="p">
            Streamline audits, manage data, and drive sustainability. Partner with us for environmental stewardship.
          </p>
          <p className="text-wrapper-6">
            Access carbon footprint data and manage emissions with ease. Join us in sustainable practices.
          </p>
          <div className="AuditorLoginSection">
            <div className="overlap-group">
              <div className="ButtonWrapper">
                <input
                  className={"AuditorLoginBtn"}
                  type="button"
                  //onClick={ }
                  value={"Login"}
                />
              </div>
            </div>
          </div>
          <div className="CompanyLoginSection">
            <div className="overlap-group">
              <div className="ButtonWrapper">
                <input
                  className={"CompanyLoginBtn"}
                  type="button"
                  //onClick={ }
                  value={"Login"}
                />
              </div>
            </div>
            </div>
          <div className="overlap-2">
            <div className="text-wrapper-8">Government of India</div>
          </div>
          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
};


export default Dualloginpage;