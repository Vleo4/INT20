import React from "react";
import "./MyProjects.css";

import axios from "axios";
import { ProjectCard, Subheading } from "../../components";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

const myProjectsURL =
  "https://int20back.brainstormingapplication.com/api/myprojects/1/";

const MyProjects = () => {
  const [myProject, setMyProject] = React.useState([]);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const token = jwtDecode(localStorage.getItem("token"));
    axios
      .get(myProjectsURL, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMyProject(response.data.cusprojects);
        console.log(response);
      });
  }, []);
  return (
    <div className="app__projects bg__wrap">
      <Subheading title="Мої проєкти" />
      <div className="app__projects-posts">
        <>
          {myProject.map((project) => {
            return (
              <Link to={`/projects/project/${project.id}`} key={project.id}>
                <ProjectCard data={project} />
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default MyProjects;
