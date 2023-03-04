import React from "react";
import { ProjectCard, Subheading } from "../../components";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="app__projects">
      <Subheading title="Проєкти" />
      <div className="app__projects-posts">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
