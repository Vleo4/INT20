import React from "react";
import "./CVCard.css";

const CVCard = ({ data }) => {
  const { name, about } = data;
  return (
    <div className="app__cvCard">
      <h2>{name}</h2>
      <div className="app__cvCard-hard">
        <p>Description: </p>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default CVCard;
