import React from "react";
import "./login.css";
import lockImage from "./assets/lock.jpeg"; // Replace with your actual lock image
import logo from './assets/logo.png';      // Replace with your actual logo

const handleHome = () => {
    window.location.href = '/Home';
};

const Login = () => {
  return (
    <div className="login-page">
      <div className="header">
        <img src={logo} alt="LibroNet Logo" className="logo" />
      </div>

      <div className="login-container">
        <div className="left-pane">
          <img src={lockImage} alt="Lock" className="lock-image" />
        </div>

        <div className="right-pane">
          <div className="login-form">
            <h2 className="login-title">Login</h2>

            <div className="input-group">
              <span className="icon"><i className="fas fa-user"></i></span>
              <input type="text" placeholder="User Name or Email" />
            </div>

            <div className="input-group">
              <span className="icon"><i className="fas fa-lock"></i></span>
              <input type="password" placeholder="Password" />
            </div>

           <span onClick={handleHome}><button className="login-button">Login</button></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
