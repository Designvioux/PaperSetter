import React from 'react';
import '../Components/Navbar.css';
import logo from './Images/paper setter.png';
import icon from './Images/icon.png'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="paper-setter" className="navbar-logo" />
        <span className="navbar-title">Paper Setter</span>
      </div>
      <div className="navbar-right">
        <span className="navbar-username">Rakesh Nikam</span>
        <img src={icon} alt="Profile" className="navbar-profile-img" />
      </div>
    </div>
  );
};

export default Navbar;
