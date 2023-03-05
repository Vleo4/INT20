import React, { useState } from "react";
import { ProjectCard, Subheading } from "../../components";
import "./Profile.css";
import ProfilePhoto from "../../assets/ProfilePhoto.png";
import ExpandButton from "../../assets/ExpandButton.png";
import { Link } from "react-router-dom";
import axios from "axios";

const userURL = "https://int20back.brainstormingapplication.com/api/profile/";

const Profile = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageRotated, setIsImageRotated] = useState(false);

  const handleExpandButtonClick = () => {
    setIsExpanded(!isExpanded);
    setShowAllProjects(!showAllProjects);
    setIsImageRotated(!isImageRotated);
  };

  const [showAllTakeProjects, setShowAllTakeProjects] = useState(false);
  const [isTakeExpanded, setIsTakeExpanded] = useState(false);
  const [isTakeImageRotated, setIsTakeImageRotated] = useState(false);

  const handleTakeExpandButtonClick = () => {
    setIsTakeExpanded(!isExpanded);
    setShowAllTakeProjects(!showAllProjects);
    setIsTakeImageRotated(!isImageRotated);
  };
  // -------------------------------------------------------

  return (
    <div className="app__profile bg__wrap">
      <Subheading title="Профіль" />
      <Link
        style={{ alignSelf: "flex-start" }}
        to="/login"
        className="app__login-main_loginCard-question"
        onClick={() => {
          localStorage.removeItem("token");
          setIsAuth(false);
        }}
      >
        Вийти з профілю
      </Link>
      <div className="app__profile-info">
        <img src={ProfilePhoto} alt="ProfilePhoto" />
        <div className="app__profile-info_text">
          <h2>Username</h2>
          <h2>Email</h2>
        </div>
      </div>
      <div className="app__profile-achievements">
        <h2>Досягнення:</h2>
        <div className="app__profile-achievements_list">
          <img src={ProfilePhoto} alt="Achievements" />
          <img src={ProfilePhoto} alt="Achievements" />
          <img src={ProfilePhoto} alt="Achievements" />
          <img src={ProfilePhoto} alt="Achievements" />
          <img src={ProfilePhoto} alt="Achievements" />
        </div>
      </div>
      <div className="app__profile-myProjects">
        <div className="app__profile-myProjects-wrap">
          <h2 className="app__profile-myProjects-head">Мої проєкти</h2>
          {!showAllProjects && (
            <img
              id="expand-button-image"
              src={ExpandButton}
              alt="ExpandButton"
              className={isImageRotated ? "rotate" : ""}
              onClick={handleExpandButtonClick}
            />
          )}
        </div>
        {showAllProjects && (
          <>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </>
        )}
      </div>

      <div className="app__profile-takeProjects">
        <div className="app__profile-takeProjects-wrap">
          <h2 className="app__profile-takeProjects-head">Беру участь</h2>
          {!showAllTakeProjects && (
            <img
              id="expand-button-image"
              src={ExpandButton}
              alt="ExpandButton"
              className={isTakeImageRotated ? "rotate" : ""}
              onClick={handleTakeExpandButtonClick}
            />
          )}
        </div>
        {showAllTakeProjects && (
          <>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
