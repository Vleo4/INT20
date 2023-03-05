import React from "react";
import "./ProjectCard.css";
import Like from "../../assets/Like.png";

const ProjectCard = ({ data }) => {
  const { title, description, count_of_likes, customer } = data;
  return (
    <div className="app__projectCard">
      <h2>{title}</h2>
      <p className="app__projectCard-desc">{description}</p>
      <div className="app__projectCard-info">
        <p>{customer}</p>
        <div className="app__projectCard-info_likes">
          <p>{count_of_likes}</p>
          <img src={Like} alt="Like" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
