import React, { useState } from "react";
import { ProjectCard, Subheading } from "../../components";
import "./Profile.css";
import ProfilePhoto from "../../assets/ProfilePhoto.png";
import ExpandButton from "../../assets/ExpandButton.png";
import { Link } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const userURL = "https://int20back.brainstormingapplication.com/api/profile";

const achievementURL =
  "https://int20back.brainstormingapplication.com/api/userachievements";

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
  const [user, setUser] = React.useState(null);
  const [userAchievements, setUserAchievements] = React.useState([]);
  const [userCustomProjects, setUserCustomProjects] = React.useState([]);
  const [userDevProjects, setUserDevProjects] = React.useState([]);

  React.useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token"));
    axios
      .get(userURL + "/" + token.user_id + "/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
        setUserCustomProjects(response.data.cusprojects);
        setUserDevProjects(response.data.devprojects);
        console.log(response);
      });
  }, []);

  React.useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token"));
    axios
      .get(achievementURL + "/" + token.user_id + "/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserAchievements(response.data.achievements);
        console.log(response);
      });
  }, []);

  return (
    <div className="app__profile bg__wrap">
      <Subheading title="Профіль" />
      {user && (
        <>
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
              <h2>{user.user.username}</h2>
              <h2>{user.user.email}</h2>
            </div>
          </div>
          <div className="app__profile-achievements">
            <h2>Досягнення:</h2>
            <div className="app__profile-achievements_list">
              {userAchievements && (
                <>
                  {userAchievements.map((achievement) => {
                    return (
                      <img
                        src={achievement.ico}
                        alt="Achievements"
                        key={achievement.id}
                      />
                    );
                  })}
                </>
              )}
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
                {userCustomProjects && (
                  <>
                    {userCustomProjects.map((cusproject) => {
                      return (
                        <Link
                          to={`/projects/project/${cusproject.id}`}
                          key={cusproject.id}
                        >
                          <ProjectCard data={cusproject} />
                        </Link>
                      );
                    })}
                  </>
                )}
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
                {userDevProjects && (
                  <>
                    {userDevProjects.map((devproject) => {
                      return (
                        <Link
                          to={`/projects/project/${devproject.id}`}
                          key={devproject.id}
                        >
                          <ProjectCard data={devproject} />
                        </Link>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
