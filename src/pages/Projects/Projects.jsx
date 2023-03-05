import React from "react";
import { ProjectCard, Subheading } from "../../components";
import "./Projects.css";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL =
  "https://int20back.brainstormingapplication.com/api/projectslist/";

const Projects = () => {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="app__projects bg__wrap">
      <Subheading title="Проєкти" />
      <div className="app__projects-posts">
        <>
          {post.map((project) => {
            return (
              <Link to={`/projects/project/${project.id}`} key={project.id}>
                <ProjectCard data={project}/>
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Projects;
