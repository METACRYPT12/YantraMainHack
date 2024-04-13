import React from "react";
import "./auditorLogin.css";

export const AuditorLogin = () => {
  return (
    <div className="auditor-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <p className="carbon-byte">
            <span className="text-wrapper">C</span>
            <span className="span">arbon</span>
            <span className="text-wrapper">B</span>
            <span className="span">yte</span>
          </p>
          <div className="div">Impact</div>
          <div className="text-wrapper-2">About Us</div>
          <div className="text-wrapper-4">Auditor Login</div>
          <div className="rectangle" />
          <div className="text-wrapper-5">username</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-6">password</div>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-7">SUBMIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorLogin;
