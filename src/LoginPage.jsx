import React from "react";
import "./Components/LoginPage.css";
import loginImage from "./Components/Images/Loginpage.png"

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Log in to start your exam.</p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Example@email.com" required />

          <label>Password</label>
          <input type="password" placeholder="At least 8 characters" required />

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>

      <div className="image-section">
        <img src={loginImage} alt="Login Visual" />
      </div>
    </div>
  );
};

export default LoginPage;
