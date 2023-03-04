import React from "react";
import "./Footer.css";
import GitHubIcon from "../../assets/GitHubIcon.png";

const Footer = () => {
  return (
    <div className="app__footer">
      <p>Contact with us</p>
      <img src={GitHubIcon} alt="GitHubIcon" />
      <p>© Saton Team, 2023</p>
    </div>
  );
};

export default Footer;
