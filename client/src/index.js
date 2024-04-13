import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dualloginpage from "./components/loginpage/loginPage";
import Impact from "./components/impact/impact";
import CompanyLogin from "./components/companyLogin/CompanyLogin";
import About from "./components/about/about";
import About2 from "./components/about/about2";
import AuditorLogin from "./components/auditorLogin/auditorLogin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuditorLogin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
