import React from "react";
import "./ProjectView.css";
import Like from "../../assets/Like.png";

const ProjectView = () => {
  return (
    <div className="app__projectView bg__wrap">
      <h1>Title</h1>
      <h2>Про проєкт:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, atque.
        Id in quod provident? Non aliquid hic odit exercitationem dolor
        dignissimos ducimus nostrum quod officia eaque quos soluta, earum
        veniam.
      </p>
      <h2>Замовник</h2>
      <p>Description</p>
      <h2>Команда:</h2>
      <p>Description, Description, Description</p>
      <h2>Доступ:</h2>
      <p>Description</p>
      <div className="app__projectView-stats">
        <button type="submit">Подати заявку</button>
        <div className="app__projectCard-info_likes">
          <p>123</p>
          <img src={Like} alt="Like" />
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
