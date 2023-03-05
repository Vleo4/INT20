import React from 'react';
import './MyProjects.css';

const MyProjects = () => {
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
  )
}

export default MyProjects