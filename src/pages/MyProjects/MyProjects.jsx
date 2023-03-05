import React from "react";
import "./MyProjects.css";

import axios from "axios";
import { ProjectCard, Subheading } from "../../components";
import { Link } from "react-router-dom";

const myProjectsURL =
  "https://int20back.brainstormingapplication.com/api/myprojects/";

const MyProjects = () => {
  const [myProject, setMyProject] = React.useState([]);

  React.useEffect(() => {
    axios.get(myProjectsURL).then((response) => {
      setMyProject(response.data);
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
              <Link to={`/my-projects/project/${project.id}`} key={project.id}>
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
