import React, { useEffect, useState } from "react";
import { getProjects } from "../api/getProjects";
import ProjectCard from "../components/ProjectCard";
import "./components/ProjectCard.css";
import { Helmet } from "react-helmet";

const Projects = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      getProjects().then(setProjects);
    }, []);
  
    return (
      <div className={styles["projects-container"]}>
        <Helmet> 
          <title>Projects | ap0calypse</title>
          </Helmet>

        <h1 className={styles["projects-title"]}>Projects</h1>
        <div className={styles["project-grid"]}>
          {projects.map((project) => (
            <div key={project._id} className={styles["project-card"]}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles["project-links"]}>
                {project.githubLink && <a href={project.githubLink} target="_blank">GitHub</a>}
                {project.demoLink && <a href={project.demoLink} target="_blank">Live Demo</a>}
              </div>
              <div className={styles["project-tags"]}>
                {project.tags?.map((tag, idx) => (
                  <span key={idx} className={styles["tag"]}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;