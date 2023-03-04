import React from "react";
import "./Subheading.css";

const Subheading = ({ title }) => {
  return (
    <div className="app__subheading">
      <h1>{title}</h1>
      <span></span>
    </div>
  );
};

export default Subheading;
