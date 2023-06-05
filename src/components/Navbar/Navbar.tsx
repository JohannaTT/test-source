import React from "react";
import Logo from "../../assets/logo.svg";
import ProfileImage from "../../assets/user.jpg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={Logo} alt="Logo of the website" />
      </div>
      <div className="Links">
        <div className="UserProfile"><img src={ProfileImage} alt="Profile of the user" /></div>
        <p>Source</p>
        <div>3</div>
      </div>
    </div>
  )
}

export default Navbar;