import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RequestCard.css";
import CrossIcon from "../../assets/CrossIcon.png";
import CheckIcon from "../../assets/CheckIcon.png";

const RequestCard = () => {
  return (
    <div className="app__requestCard">
      <h2>Title</h2>
      <div className="app__requestCard-content">
        <div className="app__requestCard-content_text">
          <p className="app__requestCard-content_text-link">Username</p>
          <Link className="app__requestCard-content_text-link" to="/cv">
            Переглянути резюме
          </Link>
        </div>
        <div className="app__requestCard-content_buttons">
          <button type="submit">
            <img src={CrossIcon} alt="CrossIcon" style={{ width: "30px" }} />
          </button>
          <button type="submit">
            <img
              src={CheckIcon}
              alt="CheckIcon"
              style={{ width: "35px", height: "30px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
