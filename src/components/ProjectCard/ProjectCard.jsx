import React from "react";
import "./ProjectCard.css";
import Like from "../../assets/Like.png";

const ProjectCard = () => {
  return (
    <div className="app__projectCard">
      <h2>Title</h2>
      <p className="app__projectCard-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        nobis reprehenderit quae harum accusantium expedita iusto adipisci alias
        architecto ipsa, temporibus consectetur quaerat doloremque sint neque
        iure, culpa officia aut.
      </p>
      <div className="app__projectCard-info">
        <p>Creator</p>
        <div className="app__projectCard-info_likes">
          <p>123</p>
          <img src={Like} alt="Like" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
