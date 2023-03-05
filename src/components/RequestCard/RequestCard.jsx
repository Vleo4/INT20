import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RequestCard.css";
import CrossIcon from "../../assets/CrossIcon.png";
import CheckIcon from "../../assets/CheckIcon.png";

import axios from "axios";

const approveRequestURL =
  "https://int20back.brainstormingapplication.com/api/approveorder";

const closeRequestURL =
  "https://int20back.brainstormingapplication.com/api/closeorder";

const RequestCard = ({ data, id }) => {
  const [isRequestClosed, setIsRequestClosed] = useState(false);
  const [isRequestApproved, setIsRequestApproved] = useState(false);
  console.log(id);
  const approveRequest = () => {
    axios.put(approveRequestURL + "/" + id + "/", {}).then((response) => {
      console.log(response);
      setIsRequestApproved(true);
    });
  };
  const closeRequest = () => {
    axios.put(closeRequestURL + "/" + id + "/", {}).then((response) => {
      console.log(response);
      setIsRequestClosed(true);
    });
  };
  if (isRequestClosed || isRequestApproved) {
    return null;
  }
  // -----------------------------------------------------
  const { project, executor } = data;
  return (
    <div className="app__requestCard">
      <h2>{project}</h2>
      <div className="app__requestCard-content">
        <div className="app__requestCard-content_text">
          <Link
            className="app__requestCard-content_text-link"
            to={`/profile/${executor.id}`}
            key={executor.id}
          >
            {executor.username}
          </Link>
          <Link
            className="app__requestCard-content_text-link"
            to={`/cv/${executor.id}`}
            key={executor.id}
          >
            Переглянути резюме
          </Link>
        </div>
        <div className="app__requestCard-content_buttons">
          <button type="submit" onClick={closeRequest}>
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
