import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RequestCard.css";
import CrossIcon from "../../assets/CrossIcon.png";
import CheckIcon from "../../assets/CheckIcon.png";

import axios from "axios";

const approveRequestURL =
  "https://int20back.brainstormingapplication.com/api/approveorder";

const RequestCard = ({ data, id }) => {
  console.log(id);
  const approveRequest = () => {
    axios.put(approveRequestURL + "/" + id + "/", {}).then((response) => {
      console.log(response);
    });
  };
  // -----------------------------------------------------
  const { project, executor } = data;
  return (
    <div className="app__requestCard">
      <h2>{project}</h2>
      <div className="app__requestCard-content">
        <div className="app__requestCard-content_text">
          <p className="app__requestCard-content_text-link">{executor.username}</p>
          <Link className="app__requestCard-content_text-link" to="/cv">
            Переглянути резюме
          </Link>
        </div>
        <div className="app__requestCard-content_buttons">
          <button type="submit">
            <img src={CrossIcon} alt="CrossIcon" style={{ width: "30px" }} />
          </button>
          <button type="submit" onClick={approveRequest}>
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
