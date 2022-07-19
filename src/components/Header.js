import React from "react";
import incomming_call from "../images/incomming-call.png";
import mail from "../images/mail.png";
import logo from "../images/logo.png";
const Header = () => {
  let url="";
  let baseurl="";
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="col-md-5">
            <div className="Content-left">
              Welcome to MHM
            </div>
          </div>
          <div className="col-md-7">
            <div className="Content-right">
              <span className="Top-contact">
                <img src={incomming_call} alt="Incomming call" /> 123-12345678
              </span>
              <span className="Top-email">
                <img src={mail} alt="user" /> contact@hotelmhm.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="header-left mr-md-4">
            <a href={baseurl} className="logo ml-lg-0">
              <img src={logo} alt="user" />
            </a>
            <div className="middle-menu">
              <nav className="main-nav">
                <ul className="menu active-underline">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about-us">About Us </a>
                  </li>
                  <li>
                    <a href="#features">Features </a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="header-right ml-4">
            <div className="login-button">
              <button type="button" className="btn btn-warning">Log-in</button>
            </div>
            <div className="get-started-button">
              <button type="button" className="btn btn-warning">Get Started</button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
