import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imageUrl && (
        <img src={project.imageUrl} alt={project.title} className="project-image" />
      )}
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.techStack && project.techStack.length > 0 && (
        <p className="tech">Tech: {project.techStack.join(', ')}</p>
      )}
      <div className="links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
